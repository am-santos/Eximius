import React, { Component } from 'react';

import { listEventsForUser } from './../../../services/attendance';
//import EventList from './../../../components/EventList';

import NavBar from './../../../components/NavBar';
import LogoBar from '../../../components/LogoBar';

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
    const events = this.state.events;
    //events.map(event => console.log(event, 'inside of the map'))
    return (
      <div>
        <LogoBar updateUser={this.props.updateUser} />
        <h4>Events you are attending</h4>
        {/* {events.map((event) => {
          console.log('single event', event.eventId)
          // return <EventList event={event.} />;
        })} */}

        <NavBar />
      </div>
    );
  }
}

export default MyEventListView;
