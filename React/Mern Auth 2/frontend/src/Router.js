import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './context/authContext'
import Customers from './Customers'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Register from './Register'

function Router() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    {
                        loggedIn === false && (
                            <>
                                <Route path='/register' element={<Register />} />
                                <Route path='/login' element={<Login />} />
                            </>
                        )
                    }
                    {
                        loggedIn === true && (
                            <>
                                <Route path='/customer' element={<Customers />} />
                            </>
                        )
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router