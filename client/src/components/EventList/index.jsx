import React from 'react'

import { Link } from 'react-router-dom'

import './index.scss';

function EventList(props) {
  const event = props.event
  return (
    <div className="eventCard">
      <Link to={`/event/${event._id}`} >
        <p>{event.name}</p>
        <p>{event.date}</p>
        <div>
          <img src={event.image} alt={event.name} />
        </div>
      </Link>
    </div>
  )
}

export default EventList;
