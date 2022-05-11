import React from 'react'

const Profile = ({ profile, setProfile, setModalProfile, modalProfile }) => {
    const rootClasses = ['profile'];
    if (modalProfile) {
        rootClasses.push('active')
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setModalProfile(false)}>
            <div className="profile__content" onClick={e => { e.stopPropagation() }}>
                {profile.map((profile, index) =>
                    <div key={profile.id}>
                        <p className='name'>
                            <strong>Фамилия:</strong> {profile.surname}
                        </p>
                        <p className='surname'>
                            <strong>Имя:</strong> {profile.name}
                        </p>
                        <p className='patronymic'>
                            <strong> Отвечтво:</strong> {profile.patronymic}
                        </p>
                        <p className='university'>
                            <strong>ВУЗ:</strong> {profile.university}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile