import React, { useContext, useState } from 'react'
import { Auths } from '../context/auths';
import MyButton from '../UI/Button/MyButton';
import { Navigate } from 'react-router-dom'

const Calendar = () => {
    const { isAuth, setIsAuth } = useContext(Auths);


    if (isAuth === false) {
        return <Navigate to="/login" />
    }

    const post = ([
        { name: "Дмитрий", surname: "Иванов" },
        { name: "Дмитрий", surname: "Иванов" },
    ]);

    return (
        <div>

            {post.map((abcd) =>
                <div>
                    {abcd.name}. {abcd.surname}
                </div>
            )}
            <MyButton
                style={{ margin: '0' }}
                onClick={() => {
                    setIsAuth(false);
                    localStorage.clear();
                }}>
                Выход
            </MyButton>
        </div>
    )
}

export default Calendar