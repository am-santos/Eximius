import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import { listEvents } from './../../services/event';

import EventList from './../../components/EventList';

import NavBar from './../../components/NavBar'

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  loadEvents() {
    listEvents()
      .then((events) => {
        this.setState({
          events
        });
      })
      .catch((error) => console.log('list events did not load', error));
  }

  componentDidMount() {
    this.loadEvents();
  }

  render() {
    const user = this.props.user;
    console.log(this.state.events);
    return (
      <div>
        {(user && (
          <>
            {(!this.state.events && (
              <>
                <p>There are no events at the moment</p>
              </>
            )) || (
              <>
                <p>List of events</p>
                {this.state.events.map((event) => {
                  return <EventList key={event._id} event={event} />;
                })}
              </>
            )}
          <NavBar />
          </>
        )) || (
          <>
            <section className="home">
              <h1>Eximius</h1>

              <Link to="/authentication/log-in">Log In</Link>
            </section>
            <section className="contactUs">
              <Link to="/contact-us">Contact Us</Link>
            </section>
          </>
        )}
      </div>
    );
  }
}

export default HomeView;
