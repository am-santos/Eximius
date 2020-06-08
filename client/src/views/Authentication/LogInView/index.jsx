import React, { Component } from 'react';

import './index.scss';

import { logIn } from './../../../services/authentication';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    console.log('this was updated');
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    logIn({ username, password })
      .then((user) => {
        console.log(user);
        this.props.updateUser(user);
        // Redirect user to home page after successful sign up
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor='username-input'></label>
          <input
            id='username-input'
            name='username'
            type='text'
            placeholder='Secret username'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <label htmlFor='password-input'></label>
          <input
            id='password-input'
            name='password'
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginView;
