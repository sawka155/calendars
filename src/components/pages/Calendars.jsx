import React, { useContext, useEffect, useState } from 'react'
import { Auths } from '../context/auths';
import MyButton from '../UI/Button/MyButton';
import { Navigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import NewNam from '../calendar/NewNam';
import DelaList from '../calendar/DelaList';
import './styles.css';

const tasks = [
    {
        id: 1, nam: 'Событие', title: "Охота", main: "Показаны результаты по запросу warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component Искать вместо этого arning: A component is changing a controlled input to be uncontrolled.This is likely caused by the value changing from a defined to undefined, which should not happen.Decide between using a controlled or uncontrolled input element for the lifetime of the component."
    },
    { id: 2, nam: 'Задача', title: "Ужин", main: "Поймать рыбу" },
    { id: 3, nam: 'Событие', title: "Обед", main: "Поймать рыбу", date: new Date() },
]

const Calendars = () => {

    const { isAuth, setIsAuth } = useContext(Auths);
    const [value, onChange] = useState(new Date());
    const [UsDate, setUsDate] = useState('');

    const [isVisible, setIsVisible] = useState(false);

    const [dela, setDela] = useState(tasks);

    const [delas, setDelas] = useState([
        ...dela
    ]);

    useEffect(() => {
        add()
    }, [dela])

    const add = () => {
        setDelas([...dela]);
    }

    const createDela = (newDela) => {
        setDela([...dela, newDela])
    }
    const deleteDela = (delo) => {
        setDela(dela.filter(p => p.id !== delo.id));
    };

    const openDelo = (delos) => {
        setDelas(dela.filter(d => d.id === delos.id))
    }

    const onDayClick = (date) => {
        setDela(dela.filter(d => d.date === date))
    }


    if (isAuth === false) {
        return <Navigate to="/login" />
    }
    return (
        <div>
            <MyButton
                className="calendar__btn"
                style={{ margin: '0' }}
                onClick={() => {
                    setIsAuth(false);
                    localStorage.clear();
                }}>
                Выход
            </MyButton>
            <div className="wrapper">
                <div className="column">
                    <Calendar
                        onClickDay={onDayClick}
                        className="calendarWrapper"
                        onChange={onChange}
                        value={value}
                    />
                    <NewNam
                        create={createDela}
                    />
                </div>

                <div className="column">

                    <input type="text"
                        value={value.toLocaleDateString("ru-RU").toString()}
                        onChange={setUsDate}
                    />


                    <h1></h1>


                    <DelaList
                        dela={dela}
                        delas={delas}

                        visible={isVisible}
                        setVisible={setIsVisible}

                        remove={deleteDela}
                        openDelo={openDelo}

                        time={value.toLocaleDateString("ru-RU").toString()}
                    />

                </div>
            </div>

        </div>

    )
}

export default Calendars