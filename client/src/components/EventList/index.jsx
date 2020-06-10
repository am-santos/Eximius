import React from 'react';

import { Link } from 'react-router-dom';

import ClockCountDown from './../ClockCountDown';

import './index.scss';

function EventList(props) {
  const event = props.event;
  console.log(event);
  return (
    <div className='eventCard'>
      <Link to={`/event/${event._id}`}>
        <div className='card-title'>
          <h3>{event.name}</h3>
          <ClockCountDown date={event.date} />
        </div>
        <div>
          <img src={event.image} alt={event.name} />
        </div>
      </Link>
    </div>
  );
}

export default EventList;
