import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import { listEvents } from './../../services/event';

import Event from './../../components/Event';

class HomeView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      events: []
    }
  }

  loadEvents() {
    listEvents 
      .then(events => {
        this.setState({
          events
        })
      })
      .catch(error => console.log('list events did not load', error));
  }

  componentDidMount() {
    this.loadEvents();
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        {user && (
          <>
            {this.state.events.map(event => {
              <Event key={event._id} event={event} />
            })}
          </>
        ) || (
          <>
          <section className="home">
            <h1>Eximius</h1>

            <Link to='/authentication/log-in'>Log In</Link>
          </section>
          <section className="contactUs">
            <Link to='/contact-us'>Contact Us</Link>
          </section>
          </>
        )}
      </div>
    );
  }
}

export default HomeView;
