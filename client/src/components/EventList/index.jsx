import React from 'react'

import './index.scss';

function EventList(props) {
  const event = props.event
  console.log(event);
  return (
    <div className="eventCard">
      <p>{event.name}</p>
      <p>{event.date}</p>
      <div>
        <img src={event.image} alt={event.name} />
      </div>
    </div>
  )
}

export default EventList;
