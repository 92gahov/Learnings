import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from './context/authContext';

function LogoutBtn() {

    const navigate = useNavigate();

    const { getLoggedIn } = useContext(AuthContext);

    const logout = async () => {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        navigate("/");
    }

    return (
        <button onClick={logout}>Logout</button>
    )
}

export default LogoutBtn