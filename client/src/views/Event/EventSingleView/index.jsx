import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

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
    createRegistration(this.props.userId, this.state.event._id)
      .then(register => {
        this.changeGoing();
        console.log(register);
      })
      .catch(error => console.log('user not registered', error));
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
            <button onClick={this.registerUser}>I'm Out</button>
          </>
        )) || <button onClick={this.registerUser}>I'm in</button>}

        <Link to={`/event/${event._id}/edit`}>Edit</Link>
        <NavBar />
      </div>
    );
  }
}

export default EventSingleView;
