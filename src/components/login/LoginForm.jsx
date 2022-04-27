import React, { useContext } from 'react'
import { Visible } from '../context/visible';
import LoginModal from './LoginModal';
import LoginFormContent from './LoginFormContent';

const LoginForm = () => {




    const { isVisible, setIsVisible } = useContext(Visible);

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
                    <LoginFormContent />
                </div>
            </form>
        </div>
    )
}

export default LoginForm