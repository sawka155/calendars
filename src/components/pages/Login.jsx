import React, { useContext, useEffect, useState } from 'react'
import { Visible } from '../context/visible'
import LoginForm from '../login/LoginForm'
import { Navigate } from 'react-router-dom'
import { Auths } from '../context/auths';

const Login = ({ loginData }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuth, setIsAuth } = useContext(Auths);

    useEffect(() => {
        if (localStorage.getItem('login')) {
            setIsAuth(true);
        }
    }, [])

    if (isAuth === true) {
        localStorage.setItem('login', 'true');
        return <Navigate to="/calendar" />
    }

    console.log(loginData);
    return (
        <div>
            <Visible.Provider value={
                {
                    isVisible,
                    setIsVisible
                }
            } >
                <LoginForm />
            </Visible.Provider>
        </div>
    )
}

export default Login