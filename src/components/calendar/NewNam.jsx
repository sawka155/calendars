import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import MyButton from '../UI/Button/MyButton';
import MyInput2 from '../UI/Input/MyInput2';

const NewNam = ({ create }) => {
    const [nam, setNam] = useState({ nam: 'Событие' });
    const [dela, setDela] = useState({ title: '', main: '' });


    const addNewDela = (e) => {
        e.preventDefault();
        if (dela.title === '' || dela.main === '') {
            alert("Заполните все необходимы поля");
        }
        else {
            const newDela = {
                ...nam, ...dela, id: Date.now()
            }
            create(newDela)
            setDela({ title: '', main: '' })
        }
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "end", width: '348px' }}>
                <select
                    className='calendar__select'
                    value={nam.nam}
                    onChange={e => setNam({ ...nam, nam: e.target.value })}
                >
                    <option>Событие</option>
                    <option>Дело</option>
                </select>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'start', width: '348px' }}>
                    <MyInput2
                        title={"Название *"}
                        value={dela.title}
                        onChange={e => setDela({ ...dela, title: e.target.value })}
                    />
                    <MyInput2
                        title={"Описание *"}
                        value={dela.main}
                        onChange={e => setDela({ ...dela, main: e.target.value })}
                    />
                </div>
            </div>
            <MyButton
                style={{ margin: '5px 0 40px 0', width: '348px' }}
                onClick={addNewDela}
            >Добавить</MyButton>
        </div >
    )
}

export default NewNam