import React, { Component } from 'react';

import './index.scss';

import { singleEvent } from './../../../services/event';

import { createRegistration } from './../../../services/attendance';

import NavBar from './../../../components/NavBar';
import ClockCountDown from './../../../components/ClockCountDown';

class EventSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      going: false
    };
  } 

  loadEvent = () => {
    singleEvent(this.props.match.params.id)
      .then((event) => {
        this.setState({
          event
        });
      })
      .catch((error) => console.log('no event received', error));
  };

  changeGoing = () => {
    this.setState({
      going: !this.state.going
    });
  };

  registerUser = () => {
    console.log(this.props)
    createRegistration()
  }

  componentDidMount() {
    this.loadEvent();
  }

  render() {
    console.log('user', this.props.userId)
    const event = this.state.event;
    return (
      <div className="eventSingle">
        <h1>{event.name}</h1>
        <em>{event.category}</em>
        <img src={event.image} alt={event.name} />
        <div>
          <div>
            <p>Location</p>
            <p>{event.city}</p>
          </div>
          <div>
            <p>Time Left</p>
            <ClockCountDown date={event.date} />
          </div>
        </div>
        <p>{event.theme}</p>
        {(this.state.going && (
          <>
            <p>{event.description}</p>
            <button onClick={this.changeGoing}>I'm Out</button>
          </>
        )) || <button onClick={this.changeGoing}>I'm in</button>}
        <NavBar />
      </div>
    );
  }
}

export default EventSingleView;
