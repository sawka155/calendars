import React from 'react'

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className='loginForm__btn'>
            {children}
        </button>
    )
}

export default MyButton