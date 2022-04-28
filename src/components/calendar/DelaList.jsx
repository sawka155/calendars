import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import MyButton from '../UI/Button/MyButton'

const DelaList = ({ dela, delas, time, remove, openDelo, visible, setVisible }) => {

    const rootClasses = ['dela__modal']

    if (visible) {
        rootClasses.push('active');
    }

    return (
        <div>
            <div className='calendar-dela'>
                {dela.map((dela, index) =>
                    <div className='dela__block' key={dela.id}>

                        <div>
                            <div className='dela__nam'>
                                {index + 1}. {dela.nam} на {time}
                            </div>

                            <hr className='dela__line' />

                            <div className="dela__content">
                                <div className='dela__title'>
                                    <strong>Название: </strong>
                                    <span >
                                        {dela.title}
                                    </span>
                                </div>


                            </div>
                            <hr className='dela__line dela__line-bottom' />
                        </div>

                        <MyButton
                            style={{ width: '100%', margin: '0 0 5px 0' }}
                            onClick={() => { openDelo(dela); setVisible(true); }}

                        >
                            Посмотреть описание
                        </MyButton>

                        <MyButton
                            style={{ margin: '0 0 30px 0', width: '100%' }}

                            onClick={() => { remove(dela) }}
                        >
                            Удалить
                        </MyButton>
                    </div>
                )}
            </div>

            <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
                <div className="dela__modal-content" onClick={(e) => { e.stopPropagation() }}>
                    {delas.map((delas, index) =>

                        <div key={delas.id}>
                            <div className='dela__nam' >
                                {index + 1}. {delas.nam} на {time}
                            </div>

                            <hr className='dela__line' />

                            <div className="dela__content">
                                <div className='dela__title'>
                                    <strong>Название: </strong>
                                    <span >
                                        {delas.title}
                                    </span>
                                </div>

                                <div className='dela__description'>
                                    <p>
                                        <strong>Описание: </strong>
                                        {delas.main}
                                    </p>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default DelaList