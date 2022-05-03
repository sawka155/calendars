import React from 'react'

const DescriptionList = ({ visible, setVisible, descriptionOutput, time }) => {

    const rootClasses = ['dela__modal']

    if (visible) {
        rootClasses.push('active');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className="dela__modal-content" onClick={(e) => { e.stopPropagation() }}>
                {descriptionOutput.map((delas, index) =>
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
    )
}

export default DescriptionList