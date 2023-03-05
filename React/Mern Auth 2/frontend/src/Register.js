import React, { useContext, useState } from 'react'
import axios from "axios";
import AuthContext from './context/authContext';
import { useNavigate } from 'react-router-dom';

function Register() {

    const { getLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const register = async (e) => {
        e.preventDefault();
        try {
            const registerData = {
                email, password, passwordVerify
            };
            await axios.post("http://localhost:5000/auth", registerData);
            await getLoggedIn();
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={register}>
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="password" placeholder='verify password' onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register