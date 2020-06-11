import React, { Component } from 'react';

import editUserProfile from './../../../services/user';
import { loadAuthenticatedUser } from './../../../services/authentication';

class EditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
    };
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT THIS.PROPS ->', this.props);
    loadAuthenticatedUser()
      .then((user) => {
        this.setState({
          email: user.email,
          username: user.username
        });
      })
      .catch((err) => {
        console.log('ERROR ON APP.JSX - COMPONENTDIDMOUNT, ERROR ->', err);
      });
  }


  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { email, username } = this.state;

    editUserProfile({ email, username })
      .then((user) => {
        this.props.updateUser(user);
        this.props.history.push('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  render() {
    return (
      <div className='form'>
        {(this.state.email.length && (
          <>
            <form onSubmit={this.handleFormSubmission}>
              <label htmlFor='email'></label>
              <input
                id='email-input'
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <label htmlFor='username-input'></label>
              <input
                id='username-input'
                name='username'
                type='text'
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              {/* <label htmlFor='password-input'></label>
              <input
                id='password-input'
                name='password'
                type='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleInputChange}
              /> */}

              <button>Update</button>
            </form>
          </>
        )) || (
          <div>
            <h1>No User Information</h1>
          </div>
        )}
      </div>
    );
  }
}

export default EditProfileView;
