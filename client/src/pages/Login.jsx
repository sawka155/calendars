import React, { useContext, useEffect, useState } from 'react'
import { Visible } from '../components/context/visible'
import LoginForm from '../components/login/LoginForm'
import { Navigate } from 'react-router-dom'
import { Auths } from '../components/context/auths';

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