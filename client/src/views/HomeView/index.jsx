import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class HomeView extends Component {
  render() {
    return (
      <div className="home">
        <h1>Eximius</h1>

        <Link to='/authentication/log-in'>Log In</Link>
      </div>
    );
  }
}

export default HomeView;
