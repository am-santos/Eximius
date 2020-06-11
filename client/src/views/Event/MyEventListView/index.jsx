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
    console.log(this.props.userId, 'this is the user id')
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
    console.log('i am here');
    return (
      <div>
        Hello World
        {this.state.events.map((event) => {
          return <EventList event={event} />;
        })}
      </div>
    );
  }
}

export default MyEventListView;
