import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {

    const { message, isAuth, setIsAuth } = useContext(AppContext);

    return (
        <div style={{ backgroundColor: isAuth ? 'green' : 'red' }}>
            <h2>Home Page</h2>
            {
                isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> :
                    <button onClick={() => setIsAuth(true)}>Login</button>
            }
            <p>{message}</p>
        </div>
    )
}

export default Home