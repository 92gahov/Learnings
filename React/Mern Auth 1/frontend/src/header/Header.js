import React from 'react'
import Api from '../utils/Api';

function Header() {

    const logoutUser = async () => {
        try {
            const res = await Api.get("/api/v1/auth/logout");
            console.log(res)
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    const getSecret = async () => {
        try {
            const res = await Api.get("/api/v1/auth/secretcontent");
            console.log(res)
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div className='header'>
            <div className='header__item' onClick={(e) => getSecret()}>
                SECRET!
            </div>
            <div className='header__item' onClick={(e) => logoutUser()}>
                Logout
            </div>
        </div>
    )
}

export default Header