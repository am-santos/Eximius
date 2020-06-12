import React, { Component } from 'react';

import './index.scss';

import { listEventsForUser } from './../../../services/attendance';
import EventList from './../../../components/EventList';

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
    listEventsForUser(this.props.userId)
      .then((events) => {
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
    return (
      <>
        <LogoBar updateUser={this.props.updateUser} />
        {this.state.events && (
          <div className='my-events'>
            <h4>Events you are attending</h4>
            {this.state.events.map((event) => {
              return <EventList key={event._id} event={event.eventId} />;
            })}
          </div>
        )}
        <NavBar />
      </>
    );
  }
}

export default MyEventListView;
