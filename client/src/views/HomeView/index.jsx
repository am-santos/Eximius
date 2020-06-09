import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import { listEvents } from './../../services/event';

class HomeView extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    const user = this.props.user;
    return (
      <div>
        {user && (
          <>
            {}
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
