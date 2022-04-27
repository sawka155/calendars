import React from 'react'

const MyInput = (props) => {
    return (
        <div className='inputBlock loginForm__text'>
            <p className='loginForm__input-title'>{props.title}</p>
            <input {...props} className='loginForm__input' />
        </div>
    )
}

export default MyInput