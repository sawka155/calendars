import React, { useState } from 'react'
import MyInput2 from '../UI/Input/MyInput2'
import ButtonCalendar from './UI/ButtonCalendar'
const axios = require('axios').default;


const OpenEvent = ({ openEvent, modalEvent, setModalEvent, dateNow, setOpenEvent, setTask }) => {
    const rootClasses = ['openEvent']
    const editClasses = ['openEvent__edit']
    const [editClass, setEditClass] = useState(false);

    const [PutTitle, setPutTitle] = useState('');
    const [PutDiscription, setPutDiscription] = useState('');

    if (modalEvent) {
        rootClasses.push('active')
    }
    if (editClass) {
        editClasses.push('active')
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => { setModalEvent(false); setEditClass(false) }}>
            <div className="openEvent__content" onClick={(e) => (e.stopPropagation())}>
                <div className="openEvent__header">
                    {openEvent[0].event}
                </div>
                <div className='openEvent__main'>
                    <div className="openEvent__body" style={{ margin: '20px 0 10px 0', fontWeight: '400' }}>
                        {openEvent[0].title}
                    </div>
                    <div className="openEvent__body">
                        <span style={{ fontWeight: '400' }}>Описание:</span> {openEvent[0].discription}
                    </div>
                </div>
                <ButtonCalendar style={{ marginTop: '10px' }} onClick={() => { setEditClass(true) }}>Изменить</ButtonCalendar>
                <div className={editClasses.join(' ')}>
                    <div style={{ margin: '20px 0 10px 0' }}>
                        <label htmlFor="InputCalendar" className='InputCalendar__label' style={{ color: '#000' }}>Заголовок</label>
                        <input className='InputCalendar__input'
                            value={PutTitle}
                            onChange={e => setPutTitle(e.target.value)}
                            maxLength={49}
                        />
                    </div>

                    <div>
                        <label htmlFor="InputCalendar__textarea" className='InputCalendar__label' style={{ color: '#000' }}>Описание</label>
                        <textarea
                            value={PutDiscription}
                            onChange={e => setPutDiscription(e.target.value)}
                            className='InputCalendar__textarea'
                            maxLength='499'
                        />
                    </div>
                    <ButtonCalendar style={{ marginTop: '10px', width: '100%' }}
                        onClick={() => {
                            if (PutDiscription === '' || PutTitle === '') {
                                alert('Заполните все поля')
                            } else {
                                axios.put('http://localhost:3002/users/' + openEvent[0].id.toString(), {
                                    'event': openEvent[0].event,
                                    'title': PutTitle,
                                    'discription': PutDiscription,
                                    'date': openEvent[0].date
                                })

                                for (let index = 0; index < 2; index++) {
                                    axios.get('http://localhost:3002/users/' + openEvent[0].date)
                                        .then(function (res) { setOpenEvent(res.data) })

                                    axios.get('http://localhost:3002/users/' + openEvent[0].date)
                                        .then(function (res) { setTask(res.data) })
                                }
                                setEditClass(false);
                                setPutTitle('');
                                setPutDiscription('');
                            }
                        }
                        }
                    >Сохранить изменения</ButtonCalendar>
                    <ButtonCalendar
                        style={{ marginTop: '10px', width: '100%' }}
                        onClick={() => {
                            setEditClass(false);
                            setPutTitle('');
                            setPutDiscription('');
                        }}
                    > Отменить изменения</ButtonCalendar>
                </div>
            </div>
        </div >
    )
}

export default OpenEvent