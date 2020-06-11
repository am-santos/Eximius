import React from 'react';

import { Link } from 'react-router-dom';
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

  console.log(props.updateUser, 'i am update user');
  return (
    <div className="logoBar">
      {(props.updateUser && (
        <>
          <Link to="/">Eximius</Link>
          <button onClick={signOutAndLiftUserState}>Sign Out</button>
        </>
      )) || (
        <>
          <Link to="/authentication/log-in">Log In</Link>
        </>
      )}
    </div>
  );
};

export default LogoBar;
