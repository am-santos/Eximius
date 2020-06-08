import React from 'react';
import { Link } from 'react-router-dom';

const ProfileView = (props) => {
  const user = props.user;
  console.log('PROFILE VIEW PROPS ->', props);
  console.log('PROFILE VIEW USER ->', user);
  return (
    <div>
      {user && (
        <>
          <h1>Profile View With User</h1>
          {/* <img src={user.photo} alt={user.username} /> */}
          <h2>{user.username}</h2>
          <h3>{user.username}</h3>
          <Link to='/profile/edit'>Edit Profile</Link>
          {(user.invitationToken.length && (
            <>
              <p>Invites Left</p>
              <Link to='/profile/invite'>
                <p>{user.invitationToken.length}</p>
                <img src='#' alt='letter image' />
              </Link>
            </>
          )) || (
            <>
              <p>You have no invitations.</p>
              <img src='#' alt='letter image' />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileView;
