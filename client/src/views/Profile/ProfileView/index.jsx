import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './../../../components/NavBar';

import './index.scss';

const ProfileView = (props) => {
  const user = props.user;
  return (
    <div className="profileCard">
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
                <img src='/icon/mail.png' alt='letter logo' />
                {/* ADD LETTER IMAGE */}
              </Link>
            </>
          )) || (
            <>
              <p>You have no invitations.</p>
              <img src='/icon/mail.png' alt='letter logo' />
              {/* ADD LETTER IMAGE */}
            </>
          )}
      <NavBar />
        </>
      )}
    </div>
  );
};

export default ProfileView;
