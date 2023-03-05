import React, { useState } from "react";
import Login from "./Login";

const LoginForm = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const disableBtn = !email || password.length < 6 || loading;

    const handleLogin = async () => {
        setError(null);
        setLoading(true);
        try {
            await Login({email, password});
            alert("Login successful!");
            setLoading(false);
        } catch(error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <div className="wrapper">
            <div className="row">
                <label htmlFor="email">Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email}></input>
            </div>
            <div className="row">
                <label htmlFor="password">Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password}></input>
            </div>
            <div className="errorMessage">{error}</div>
            <div className="button">
                <button disabled={disableBtn} onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
};

export default LoginForm;