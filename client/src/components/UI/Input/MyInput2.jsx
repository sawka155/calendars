import React from 'react'

const MyInput2 = (props) => {
    return (
        <div className='calendarInput loginForm__text'>
            <p className='calendar__title'>{props.title}</p>
            <input {...props} className='calendar__input' />
        </div>
    )
}

export default MyInput2