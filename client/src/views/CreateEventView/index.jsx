import React, { Component } from 'react';
import './style.scss';

import { createEvent } from './../../services/event';

class CreateEventView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      date: '',
      image: null,
      theme: '',
      description: ''
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFileInputChange = (event) => {
    const { name } = event.target;
    console.dir('EVENT.TARGET ->', event.target);
    console.log('EVENT.TARGET.FILES ->', event.target.files);
    const file = event.target.files[0];
    this.setState({
      [name]: file
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    const { name, image, date, theme, description, category } = this.state;
    const userId = this.props.user._id;

    createEvent({ name, image, date, theme, description, category, userId })
      .then((event) => {
        // Redirect user to home page after successful sign up
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='form'>
        <h1>Create Event</h1>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor='name'></label>
          <input
            id='name-input'
            name='name'
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor='image-input'></label>
          <input id='image-input' name='image' type='file' onChange={this.handleFileInputChange} />
          <label htmlFor='Category-input'></label>
          <input
            id='category-input'
            name='category'
            type='text'
            placeholder='Category'
            value={this.state.category}
            onChange={this.handleInputChange}
          />
          <label htmlFor='Date-input'></label>
          <input
            id='date-input'
            name='date'
            type='date'
            placeholder='Date'
            value={this.state.date}
            onChange={this.handleInputChange}
          />
          <label htmlFor='Theme-input'></label>
          <input
            id='theme-input'
            name='theme'
            type='text'
            placeholder='Theme'
            value={this.state.theme}
            onChange={this.handleInputChange}
          />
          <label htmlFor='Description-input'></label>
          <input
            id='description-input'
            name='description'
            type='text'
            placeholder='Description'
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <button>Create Event</button>
        </form>
      </div>
    );
  }
}

export default CreateEventView;
