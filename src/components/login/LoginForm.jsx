import React, { useContext, useState } from 'react'
import { Visible } from '../context/visible';
import { Auths } from '../context/auths';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput'
import LoginModal from './LoginModal';
import Register from './Register';

const LoginForm = () => {

    const [loginData, setLoginData] = useState('');
    const [passData, setPassData] = useState('');


    const { isVisible, setIsVisible } = useContext(Visible);
    const { isAuth, setIsAuth } = useContext(Auths);

    return (
        <div>
            <form>
                <div className="login">
                    <LoginModal visible={isVisible}>
                        <p>
                            Обратитесь, пожалуйста, к системному администратору
                            для создания аккаунта
                        </p>
                    </LoginModal>
                    <div className="loginForm">
                        <div className="loginForm__content">
                            <div className="loginForm__title loginForm__text">
                                <h1>Добро пожаловать в MyCalendar</h1>
                            </div>
                            <div className="loginForm__subtitle loginForm__text">
                                <h2>для дальнейшей работы необходимо авторизоваться</h2>
                            </div>

                            <div className="loginForm-input" style={{ width: '267px' }}>
                                <MyInput
                                    title={"Логин"}
                                    type={'text'}
                                    value={loginData}
                                    onChange={e => setLoginData(e.target.value)}
                                    placeholder="Логин"
                                />

                                <MyInput
                                    title={"Пароль"}
                                    type={'password'}
                                    value={passData}
                                    onChange={e => setPassData(e.target.value)}
                                    placeholder="Пароль"
                                />
                            </div>
                            <div className="loginForm-submit">
                                <MyButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsAuth(true);
                                        localStorage.setItem('login', 'true');
                                    }}
                                >Вход</MyButton>
                            </div>
                            <Register />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm