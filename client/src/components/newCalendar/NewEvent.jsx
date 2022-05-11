import React, { useState } from 'react'
import ButtonCalendar from './UI/ButtonCalendar'

const axios = require('axios').default;

const NewEvent = ({ visible, event, setVisible, setEvent, date, value, setTask, task }) => {

    const rootClasses = ['newevent']

    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');

    if (visible) {
        rootClasses.push('active')
    }

    const add = (e) => {
        if (discription === '' || title === '') {
            e.preventDefault();
            alert('Заполните все поля')
        } else {
            e.preventDefault();
            axios.post('http://localhost:3002/users', {
                'event': event.toString(),
                'title': title.toString(),
                'discription': discription.toString(),
                'date': date.toString(),
            });

            for (let index = 0; index < 2; index++) {
                axios.get('http://localhost:3002/users/' + value.toLocaleDateString("ru-RU"))
                    .then(function (res) { setTask(res.data) })
            }

            setVisible(false);
            setEvent('Добавить новое событие');
            setTitle('');
            setDiscription('');
        }
    }

    const clear = () => {
        setVisible(false);
        setEvent('Добавить новое событие');
        setTitle('');
        setDiscription('');
    }
    return (
        <form action="http://localhost:3002/users" method="post" onSubmit={add}>
            <div className={rootClasses.join(' ')} onClick={() => { clear() }}>
                <div className="newevent__content" onClick={(e) => e.stopPropagation()}>
                    <div className="newevent__container">
                        <label htmlFor="InputCalendar" className='InputCalendar__label'>Заголовок</label>
                        <input className='InputCalendar__input'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            maxLength={49}
                        />
                        <div>
                            <label htmlFor="InputCalendar__textarea" className='InputCalendar__label'>Описание</label>
                            <textarea
                                className='InputCalendar__textarea'
                                value={discription}
                                onChange={e => setDiscription(e.target.value)}
                                maxLength='499'
                            />
                        </div>
                        <ButtonCalendar style={{ width: '250px' }}

                        >Добавить</ButtonCalendar>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default NewEvent