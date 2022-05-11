import React, { useState } from 'react'
import OpenEvent from './OpenEvent';
import ButtonCalendar from './UI/ButtonCalendar'

const axios = require('axios').default;

const Event = ({ task, setTask, modalEvent, setModalEvent, dateNow }) => {
    const [openEvent, setOpenEvent] = useState([task]);

    return (
        <div>
            {task.length === 0
                ?
                <div className="event__empty">
                    Список событий пуст
                </div>

                :
                <div>
                    <OpenEvent openEvent={openEvent} modalEvent={modalEvent} setModalEvent={setModalEvent} dateNow={dateNow} setOpenEvent={setOpenEvent} setTask={setTask} />
                    {task.map((task, index) =>
                        <div className="event" key={task.id}>
                            <div className="event__content">
                                <div className="event__header">
                                    {task.event}
                                </div>
                                <div className="event__body">
                                    {task.title}
                                </div>
                            </div>
                            <div className="event__btns">
                                <ButtonCalendar style={{ width: '170px' }}
                                    onClick={() => {
                                        setOpenEvent([task]);
                                        setModalEvent(true);
                                    }
                                    }
                                >Просмотреть подробнее</ButtonCalendar>
                                <ButtonCalendar
                                    style={{ width: '170px' }}
                                    onClick={() => {
                                        axios.delete('http://localhost:3002/users/' + task.id.toString());
                                        for (let index = 0; index < 2; index++) {
                                            axios.get('http://localhost:3002/users/' + task.date)
                                                .then(function (res) { setTask(res.data) })
                                        }
                                    }}
                                >Удалить</ButtonCalendar>
                            </div>
                        </div>
                    )
                    }
                </div >
            }
        </div>

    )
}

export default Event