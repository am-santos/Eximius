import React, { Component } from 'react';

import { listEventsForUser } from './../../../services/attendance';
import EventList from './../../../components/EventList';

class MyEventListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: ''
    };
  }

  loadEvent = () => {
    console.log(this.props.userId, 'this is the user id');
    listEventsForUser(this.props.userId)
      .then((events) => {
        console.log(events, 'yours events');
        this.setState({
          events
        });
      })
      .catch((error) => console.log('no events found', error));
  };

  componentDidMount() {
    this.loadEvent();
  }

  render() {
    // const events = this.state.events;
    //events.map(event => console.log(event, 'inside of the map'))
    return (
      <>
        {this.state.events.length && (
          <div>
            Hello World
            {this.state.events.map((event) => {
              // console.log('single event', event.eventId);
              return <EventList event={event} />;
            })}
          </div>
        )}
      </>
    );
  }
}

export default MyEventListView;
