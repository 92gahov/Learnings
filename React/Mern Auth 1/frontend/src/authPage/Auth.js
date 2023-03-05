import React, { useState } from 'react'
import Api from '../utils/Api';

const Auth = () => {

    const [register, setRegister] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const clearance = 'admin';

    const signupUser = async (email, password, clearance) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json' } };
            const body = { email, password, clearance };
            const res = await Api.post('/api/v1/auth/signup', body, config);
            console.log(res)
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    const loginUser = async (email, password) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json' } };
            const body = { email, password };
            const res = await Api.post('/api/v1/auth/login', body, config);
            console.log(res)
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (register) {
            signupUser(email, password, clearance);
        } else {
            loginUser(email, password);
        }
        console.log("click")
    }

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const registerClass = !register ? 'form-switcher__option' : 'form-switcher__option form-switcher__option--selected';

    const loginClass = register ? 'form-switcher__option' : 'form-switcher__option form-switcher__option--selected';

    const buttonText = register ? "Signup" : "Login";

    return (
        <>
            <div className='form-switcher'>
                <div onClick={(e) => setRegister(false)} className={loginClass}>Login</div>
                <div onClick={(e) => setRegister(true)} className={registerClass}>Signup</div>
            </div>
            <div className='login-form'>
                <form onSubmit={(e) => onSubmit(e)} className='login-form__group'>
                    <img className='login-form__logo' src={require("./img/logoipsum.png")} alt="logo" />
                    <input className='input__text' type="email" placeholder='email address' name='email' value={email} onChange={(e) => onChange(e)} required />
                    <input className='input__text' type="password" placeholder='password' name='password' minLength="8" value={password} onChange={(e) => onChange(e)} required />
                    <input className='input__submit' type="submit" value={buttonText} />
                </form>
            </div>
        </>
    )
}

export default Auth