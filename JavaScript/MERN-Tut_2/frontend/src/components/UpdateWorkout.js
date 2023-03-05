import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useWorkoutContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const UpdateWorkout = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();

    const { workouts, dispatch } = useWorkoutContext();
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const { workoutId } = useParams();
    const workout = workouts.find((workout) => workout._id === workoutId);

    useEffect(() => {
        setTitle(workout.title);
        setLoad(workout.load);
        setReps(workout.reps);
        // eslint-disable-next-line
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!user) {
            return;
        }
        const updatedWorkout = { title, load, reps };
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedWorkout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyField);
            // console.log(json);
        }
        if (response.ok) {
            dispatch({ type: 'UPDATE_WORKOUT', payload: { id: json._id } })
            navigate("/");
        }
    };

    return (
        <div className='update-form'>
            <form onSubmit={handleUpdate}>
                <label>Exercise Title:</label>
                <input
                    className={emptyFields.includes('title') ? 'error' : ''}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"></input>
                <label>Load (in kg):</label>
                <input
                    className={emptyFields.includes('load') ? 'error' : ''}
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    type="text"></input>
                <label>Reps:</label>
                <input
                    className={emptyFields.includes('reps') ? 'error' : ''}
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    type="text"></input>
                <button>Edit Workout</button>
                {
                    error && <div className='error'>{error}</div>
                }
            </form>
        </div>
    )
};

export default UpdateWorkout;