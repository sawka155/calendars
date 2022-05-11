import React, { useContext } from 'react'
import close from '../../img/login/close.svg'
import { Visible } from '../context/visible';

const LoginModal = ({ children, visible, setVisible }) => {

    const { isVisible, setIsVisible } = useContext(Visible);

    const rootClasses = ['loginModal']

    if (visible) {
        rootClasses.push('active');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => { setIsVisible(false) }}>
            <div className="loginModalContent" onClick={(e) => { e.stopPropagation() }}>
                <div className='closeModal'>
                    <button
                        onClick={
                            e => {
                                e.preventDefault();
                                setIsVisible(false);
                            }
                        }
                    >
                        <img src={close} alt={''} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default LoginModal