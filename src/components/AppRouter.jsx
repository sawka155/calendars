import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { Auths } from './context/auths';
import Calendars from "./pages/Calendars";
import Login from './pages/Login';

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('login')) {
            setIsAuth(true);
        }
    }, [])


    return (
        <Auths.Provider value={
            {
                isAuth,
                setIsAuth
            }
        } >
            <Routes>
                <Route path='/calendar' caseSensitive={false} element={<Calendars />} />
                <Route path='/login' caseSensitive={false} element={<Login />} />
                <Route path='*' element={<Navigate to="/calendar" replace />} />
            </Routes>
        </Auths.Provider>
    )
}

export default AppRouter

