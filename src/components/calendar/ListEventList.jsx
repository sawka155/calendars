import React from 'react'
import DescriptionList from './DescriptionList';
import EventNames from './EventNames';

const ListEventList = ({ ...props }) => {



    return (
        <div>
            <EventNames
                listEvent={props.listEvent}
                time={props.time}
                OpenDescription={props.OpenDescription}
                setVisible={props.setVisible}
                remove={props.remove}
            />
            <DescriptionList
                visible={props.visible}
                setVisible={props.setVisible}
                descriptionOutput={props.descriptionOutput}
                time={props.time}
            />
        </div>
    )
}

export default ListEventList