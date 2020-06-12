import React, { Component } from 'react';

import './index.scss';

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

    console.log('submitted contactus form', email, message);

    // sendContactusMessage({ email, message })
    //   .then((response) => {
    //     console.log('RESPONSE OF SEND sendContactusMessage ON HANDLEFORMSUBMISSION', response);
    //     this.props.history.push('/');
    //   })
    //   .catch((err) => console.log(err));
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className='contact-us-view form'>
        <h1>
          Tell us why you <br /> want to join us
        </h1>
        <form className='contactUs' onSubmit={this.handleFormSubmission}>
          <label htmlFor='email-input'></label>
          <input
            type='email'
            name='email'
            id='email-input'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <label htmlFor='message-input'>Why?</label>
          <textarea
            required
            name='message'
            id='message-input'
            placeholder=''
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default ContactUsView;
