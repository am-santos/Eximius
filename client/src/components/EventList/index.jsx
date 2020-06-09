import React from 'react'

function EventList(props) {
  const eventList = props.event
  
  return (
    <div>
      <p>{eventList.name}</p>
      <p>{eventList.category}</p>
      <p>{eventList.description}</p>

    </div>
  )
}

export default EventList;
