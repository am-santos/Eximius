import React, { Component } from 'react';

import signUp from './../../../services/authentication';

class SignUpView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    console.log('this was updated')
    this.setState({
      [name]: value
    });
  };


  handleFormSubmission = event => {
    event.preventDefault();
    console.log('submited', this.state)

    const { email, username, password } = this.state;

    signUp({ email, username, password})
      .then(user => {
        console.log(user)
        this.props.updateUser(user);
        // Redirect user to home page after successful sign up
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };



  render() {
    
    return (
        <div>

        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="email"></label>
          <input  id="email-input"
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange} />
          <label htmlFor="username-input"></label>
          <input id="username-input"
            name="username"
            type="text"
            placeholder="Secret username"
            value={this.state.username}
            onChange={this.handleInputChange}/>
          <label htmlFor="password-input"></label>
          <input id="password-input"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}/>  

          <button>Submit User</button>
        </form>

      </div>
    )
  }
}

export default SignUpView;
