import React, { Component } from 'react';
import './style.scss';

class EditEventView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      date: '',
      location: '',
      image: null,
      theme: '',
      description: ''
    };
  }

  handleFormSubmission() {}

  handleInputChanges() {}

  render() {
    return (
      <div className='form'>
        <h1>Edit Event</h1>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor='name'></label>
          <input
            id='name-input'
            name='name'
            type='text'
            placeholder='Name'
            //value={this.state.name}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='type-input'></label>
          <input
            id='type-input'
            name='type'
            type='text'
            placeholder='Type'
            //value={this.state.type}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='date-input'></label>
          <input
            id='date-input'
            name='date'
            type='date'
            placeholder='Date'
            //value={this.state.date.day}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='time-input'></label>
          <input
            id='date-input'
            name='date'
            type='date'
            placeholder='Time'
            //value={this.state.date.time}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='theme-input'></label>
          <input
            id='theme-input'
            name='theme'
            type='text'
            placeholder='Theme'
            //value={this.state.theme}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='description-input'></label>
          <input
            id='description-input'
            name='description'
            type='text'
            placeholder='description'
            //value={this.state.description}
            //onChange={this.handleInputChange}
          />
          <button>Create Event</button>
        </form>
      </div>
    );
  }
}

export default EditEventView;
