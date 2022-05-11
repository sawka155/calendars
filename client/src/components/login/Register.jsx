import React, { useContext } from 'react'
import { Visible } from '../context/visible';
import LoginModal from './LoginModal'

const Register = () => {

    const { isVisible, setIsVisible } = useContext(Visible);
    return (
        <div className="loginForm-register loginForm__text">
            <button
                onClick={e => {
                    e.preventDefault();
                    setIsVisible(true);
                }}
            >
                У меня нет аккаунта
            </button>
        </div>
    )
}

export default Register