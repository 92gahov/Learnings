const Workout = require('../models/WorkoutModel');
const mongoose = require('mongoose');

const getWorkouts = async (req, res) => {
    const user_id = req.user._id;
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workouts);
    // res.json({ message: "GET all workouts" });
};

const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No such workout!" });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
        return res.status(404).json({ message: "No such workout!" });
    }
    res.status(200).json(workout);
    // res.json({ message: "GET single workout" });
}

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    let emptyField = [];
    if (!title) {
        emptyField.push('title');
    }
    if (!load) {
        emptyField.push('load');
    }
    if (!reps) {
        emptyField.push('reps');
    }
    if (emptyField.length > 0) {
        return res.status(400).json({ error: "Please fill in all fields!", emptyField });
    }

    try {
        const user_id = req.user._id;
        const workout = await Workout.create({ title, load, reps, user_id });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    // res.json({ message: "POST a new workout" });
};

const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No such workout!" });
    }
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
        return res.status(404).json({ message: "No such workout!!" });
    }
    res.status(200).json(workout);
    // res.json({ message: "DELETE a workout" });
};

const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const { title, load, reps } = req.body;
    let emptyField = [];
    if (!title) {
        emptyField.push('title');
    }
    if (!load) {
        emptyField.push('load');
    }
    if (!reps) {
        emptyField.push('reps');
    }
    if (emptyField.length > 0) {
        return res.status(400).json({ error: "Please fill in all fields!", emptyField });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No such workout!" });
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    });
    if (!workout) {
        return res.status(404).json({ message: "No such workout!!" });
    }
    res.status(200).json(workout);
    // res.json({ message: "UPDATE a workout" });
};

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
};