import React, { useContext, useState } from 'react'
import { Auths } from '../context/auths';
import MyButton from '../UI/Button/MyButton';
import { Navigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import NewNam from '../calendar/NewNam';
import ListEventList from '../calendar/ListEventList';
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
    const [date, onChangeDate] = useState(new Date());

    const [, setInput] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const [listEvent, setListEvent] = useState(tasks);
    const [descriptionOutput, setDescriptionOutput] = useState([
        ...listEvent
    ]);

    const createEvent = (newlistEvent) => {
        setListEvent([...listEvent, newlistEvent])
    }
    const deleteEvent = (remove) => {
        setListEvent(listEvent.filter(del => del.id !== remove.id));
    };

    const description = (descriptionOutput) => {
        setDescriptionOutput(listEvent.filter(descript => descript.id === descriptionOutput.id))
    }

    const onDayClick = () => {
        setListEvent(listEvent.filter(date => date.date === date))
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
                        onChange={onChangeDate}
                        value={date}
                    />
                    <NewNam
                        create={createEvent}
                    />
                </div>

                <div className="column">
                    <input type="text"
                        value={date.toLocaleDateString("ru-RU").toString()}
                        onChange={setInput}
                    />

                    <ListEventList
                        listEvent={listEvent}
                        descriptionOutput={descriptionOutput}
                        visible={isVisible}
                        setVisible={setIsVisible}
                        remove={deleteEvent}
                        OpenDescription={description}
                        time={date.toLocaleDateString("ru-RU").toString()}
                    />

                </div>
            </div>
        </div>
    )
}

export default Calendars