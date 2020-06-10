import React, { Component } from 'react';

import './index.scss';

import { singleEvent } from './../../services/event';

import NavBar from './../../components/NavBar';
import ClockCountDown from './../../components/ClockCountDown';

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
        console.log('event', event)
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

  componentDidMount() {
    this.loadEvent();
  }

  render() {
    const event = this.state.event;
    console.log(this.state.event);
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
            <ClockCountDown hours={event.time} day={event.day} />
            <p>24:00:00</p>
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
