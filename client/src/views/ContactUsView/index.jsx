import React, { Component } from 'react';

import './index.scss';

import { sendContactMessage } from './../../services/user';
import LogoBar from './../../components/LogoBar';

class ContactUsView extends Component {
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

    sendContactMessage({ email, message })
      .then((response) => {
        this.props.history.push('/');
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
        <LogoBar updateUser={this.props.updateUser} />
        <div className='contact-us form'>
          <h1>
            Tell us why you <br /> want to join us
          </h1>
          <form className='' onSubmit={this.handleFormSubmission}>
            <label htmlFor='email-input'></label>
            <input
              type='email'
              name='email'
              id='email-input'
              placeholder='email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <div className='text-area'>
              <label htmlFor='message-input'>Why?</label>
              <textarea
                required
                name='message'
                id='message-input'
                placeholder=''
                value={this.state.message}
                onChange={this.handleInputChange}
              />
            </div>

            <button>Send</button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactUsView;
