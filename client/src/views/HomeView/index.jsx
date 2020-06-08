import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class HomeView extends Component {
  render() {
    return (
      <div>
        <section className="home">
          <h1>Eximius</h1>

          <Link to='/authentication/log-in'>Log In</Link>
        </section>
        <section className="contactUs">
          <Link to='/contact-us'>Contact Us</Link>
        </section>
      </div>
    );
  }
}

export default HomeView;
