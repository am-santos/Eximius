import React, { Component } from 'react';

import './index.scss'

import { sendInvitation } from './../../../services/user';
import LogoBar from '../../../components/LogoBar';

class InvitationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };
  }

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { email, message } = this.state;

    console.log('submitted invitation form', email, message);

    sendInvitation({ email, message })
      .then((response) => {
        console.log('RESPONSE OF SEND INVITATION ON HANDLEFORMSUBMISSION', response);
        this.props.history.push('/profile');
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
      <LogoBar updateUser={this.props.updateUser}/>
      <div className='form message'>
        <h1>Invite a Friend</h1>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor='email-input'></label>
          <input
            id='email-input'
            name='email'
            type='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <h3>Message</h3>
          <textarea
            id='message-input'
            name='message'
            value={this.state.message}
            onChange={this.handleInputChange}
          />

          <button>Send</button>
        </form>
      </div>
      </>
    );
  }
}

export default InvitationView;
