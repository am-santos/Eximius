import React, { Component } from 'react';

class ContactUsView extends Component {
  render() {
    return (
      <div>
        <h3>
          Tell us why you <br /> want to join us
        </h3>
        <form action=''>
          <label htmlFor='email-input'></label>
          <input type='email' name='email' id='email-input' placeholder='email' />

          <label htmlFor='message-input'>Why?</label>
          <input type='text' name='message' id='message-input' placeholder='' />
        </form>
      </div>
    );
  }
}

export default ContactUsView;
