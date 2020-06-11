import React from 'react'

import { Link } from 'react-router-dom'

import './index.scss';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/icon/home.png" alt="home page" />
      </Link>
      <Link to="/event/create">
        <img src="/icon/addEvent.png" alt="add event" />
      </Link>
      <Link to="/event/my-events">
        <img src="/icon/eventList.png" alt=" my event List" />
      </Link>
      <Link to='/profile'>
        <img src="/icon/profile.png" alt="profile page" />
      </Link>
    </div>
  )
}

export default NavBar;
