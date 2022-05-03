import React from 'react'
import MyButton from '../UI/Button/MyButton';

const EventNames = ({ listEvent, time, OpenDescription, setVisible, remove }) => {
    return (
        <div className='calendar-dela'>
            {listEvent.map((listEvent, index) =>
                <div className='dela__block' key={listEvent.id}>
                    <div>
                        <div className='dela__nam'>
                            {index + 1}. {listEvent.nam} на {time}
                        </div>

                        <hr className='dela__line' />

                        <div className="dela__content">
                            <div className='dela__title'>
                                <strong>Название: </strong>
                                <span >
                                    {listEvent.title}
                                </span>
                            </div>
                        </div>
                        <hr className='dela__line dela__line-bottom' />
                    </div>

                    <MyButton
                        style={{ width: '100%', margin: '0 0 5px 0' }}
                        onClick={() => { OpenDescription(listEvent); setVisible(true); }}
                    >
                        Посмотреть описание
                    </MyButton>

                    <MyButton
                        style={{ margin: '0 0 30px 0', width: '100%' }}
                        onClick={() => { remove(listEvent) }}
                    >
                        Удалить
                    </MyButton>
                </div>
            )}
        </div>

    )
}

export default EventNames