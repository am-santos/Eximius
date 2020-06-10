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
        <p>{event.name}</p>
        <ClockCountDown date={event.date} />
        <div>
          <img src={event.image} alt={event.name} />
        </div>
      </Link>
    </div>
  );
}

export default EventList;
