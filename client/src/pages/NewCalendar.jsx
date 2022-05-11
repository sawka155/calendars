import React, { useContext, useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Navigate } from 'react-router-dom';
import { Auths } from '../components/context/auths';
import Event from '../components/newCalendar/Event';
import NewEvent from '../components/newCalendar/NewEvent';
import Profile from '../components/newCalendar/Profile';
import ButtonCalendar from '../components/newCalendar/UI/ButtonCalendar';
import Logo from '../img/calendar/logo.svg'

const axios = require('axios').default;

const NewCalendar = () => {


    const [modal, setModal] = useState(false);
    const [modalEvent, setModalEvent] = useState(false);
    const [modalProfile, setModalProfile] = useState(false);

    const [event, setEvent] = useState('Добавить новое событие');
    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(value.toLocaleDateString("ru-RU").toString());
    const [task, setTask] = useState([]);
    const [profile, setProfile] = useState([]);

    const dateNow = value.toLocaleDateString("ru-RU").toString();

    const { isAuth, setIsAuth } = useContext(Auths);
    const exit = () => {
        setIsAuth(false);
        localStorage.clear();
    }

    useEffect(() => {
        axios.get('http://localhost:3002/users/' + dateNow)
            .then(function (res) { setTask(res.data) })

        axios.get('http://localhost:3002/profile')
            .then(function (res) { setProfile(res.data) })
    }, [])



    if (isAuth === false) {
        return <Navigate to="/login" />
    }



    return (
        <div className='nCalendar' >
            <header className='nCalendar__header'>
                <div className="nCalendar__container">
                    <div className="nCalendar__logo">
                        <img src={Logo} alt="" />
                        <p>MyCalendar</p>
                    </div>
                    <div className="nCalendar__header-end">
                        <div className="nCalendar__profile">
                            <ButtonCalendar onClick={() => { setModalProfile(true) }}>Профиль</ButtonCalendar>
                        </div>
                        <Profile profile={profile} setModalProfile={setModalProfile} modalProfile={modalProfile} />
                        <div className="nCalendar__exit">
                            <ButtonCalendar onClick={exit}>Выход</ButtonCalendar>
                        </div>
                    </div>
                </div>
            </header>

            <main className='nCalendar__main'>
                <section className='nCalendar__add'>
                    <div className="add__container">
                        <div>
                            <select
                                className='add__select'
                                value={event}
                                onChange={(e) => { setModal(true); setEvent(e.target.value) }}
                            >
                                <option className='add__option' disabled>Добавить новое событие</option>
                                <option className='add__option'>Мероприятие</option>
                                <option className='add__option'>Дело</option>
                            </select>
                        </div>
                        <NewEvent
                            visible={modal}
                            setVisible={setModal}
                            event={event}
                            setEvent={setEvent}
                            date={date}
                            value={value}
                            task={task}
                            setTask={setTask}
                        />
                        <div className="add__calendar">
                            <Calendar
                                onChange={onChange}
                                value={value}
                                onClickDay={value => {
                                    setDate(value.toLocaleDateString("ru-RU").toString());
                                    const datenow = value.toLocaleDateString("ru-RU");
                                    axios.get('http://localhost:3002/users/' + datenow)
                                        .then(function (res) { setTask(res.data) })
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section className='nCalendar__event'>
                    <div className='events'>
                        <div className="events__date">
                            <p>Дата: {dateNow}</p>
                        </div>
                        <hr style={{ border: '1px solid #303030' }} />
                        <Event task={task} setTask={setTask} modalEvent={modalEvent} setModalEvent={setModalEvent} dateNow={dateNow} />
                    </div>
                </section>
            </main>
        </div >
    )
}

export default NewCalendar