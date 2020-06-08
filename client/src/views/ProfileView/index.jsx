import React from 'react';
import { Link } from 'react-router-dom';

const ProfileView = (props) => {
  const user = props.user;
  console.log('PROFILE VIEW PROPS ->', props);
  console.log('PROFILE VIEW USER ->', user);
  // const hasInvites = user.invitationToken.length ? true : false;
  return (
    <div>
      <h1>Profile View Without User</h1>
      {user && (
        <>
          <h1>Profile View With User</h1>
          <img src={user.photo} alt={user.username} />
          <h2>{user.username}</h2>
          <h3>{user.username}</h3>
          <Link to='/profile/edit'>Edit Profile</Link>
          {/* {(hasInvites && (
            <>
              <p>You have no invitations.</p>
              <img src='#' alt='letter image' />
            </>
          )) || (
            <Link to='/profile/invite'>
              <p>Invites Left</p>
              <p>{user.invitationToken.length}</p>
              <img src='#' alt='letter image' />
            </Link>
          )} */}
        </>
      )}
    </div>
  );
};

export default ProfileView;
