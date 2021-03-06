import React from 'react';

import { Link, withRouter /*, Redirect*/ } from 'react-router-dom';
//import {} from 'react-router'
import { signOut } from './../../services/authentication';

import './index.scss';

const LogoBar = (props) => {
  const signOutAndLiftUserState = () => {
    signOut()
      .then(() => {
        props.updateUser(null);
        props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='logoBar'>
      {(props.updateUser && (
        <>
          <Link to='/'>
            <img id='logo-icon' src='/logo/logo-white.png' alt='eximius logo' />
          </Link>
          <button onClick={signOutAndLiftUserState}>Sign Out</button>
        </>
      )) || (
        <>
          <Link to='/'>
            <img id='logo-icon' src='/logo/logo-white.png' alt='eximius logo' />
          </Link>
          <Link to='/authentication/log-in'>Log In</Link>
        </>
      )}
    </div>
  );
};

export default withRouter(LogoBar);
