import React from 'react'

import { Link } from 'react-router-dom';
import { signOut } from './../../services/authentication';

const LogoBar = (props) => {
  
  
  const signOutAndLiftUserState = () => {
    signOut()
    .then(() => {
      props.updatedUser();
      props.history.push('/');
    })
    .catch(error => {
      console.log(error);
    })
  }

  
  console.log(props.updateUser, 'i am update user')
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