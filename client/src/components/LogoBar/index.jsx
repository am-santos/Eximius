import React from 'react'

import { Link } from 'react-router-dom';
import { signOut } from './../../services/authentication';

const LogoBar = props => {
  const signOutAndLiftUserState = () => {
    console.log(props.updatedUser)
    signOut()
    .then(() => {
      props.updatedUser(null);
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  return (
    <div>
      {(props.updateUser && (
        <>
          <button onClick={signOutAndLiftUserState}>Sign Out</button>
        </>
      )) || (
        <>
          <Link to="/authentication/log-in">Log In</Link>
        </>
      )}
    </div>
  )
}

export default LogoBar;