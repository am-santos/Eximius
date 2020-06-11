import React from 'react';

import { Link /*, Redirect*/ } from 'react-router-dom';
import { signOut } from './../../services/authentication';

import './index.scss';

const LogoBar = (props) => {
  const signOutAndLiftUserState = () => {
    signOut()
      .then(() => {
        // console.log('PROPS OF SIGN OUT', props);
        // props.updateUser({ user: null });
        // return <Redirect push to='/' />;
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
          <Link to='/'>Eximius</Link>
          <button onClick={signOutAndLiftUserState}>Sign Out</button>
        </>
      )) || (
        <>
          <Link to='/authentication/log-in'>Log In</Link>
        </>
      )}
    </div>
  );
};

export default LogoBar;
