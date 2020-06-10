import React, { Component } from 'react';
import './style.scss';

import { createEvent } from './../../../services/event';

import NavBar from './../../../components/NavBar';

class CreateEventView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      date: '',
      time: '',
      location: '',
      image: null,
      city: '',
      description: '',
      capacity: 0
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    console.log(name, value, typeof value);
    this.setState({
      [name]: value
    });
  };

  handleFileInputChange = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];
    this.setState({
      [name]: file
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { name, image, city, description, category, capacity } = this.state;
    const userId = this.props.user._id;
    const date = [this.state.date, this.state.time];

    createEvent({ name, image, city, date, description, category, userId, capacity })
      .then((event) => {
        console.log('we are here', event)
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
          <label htmlFor='capacity-input'></label>
          <input
            id='capacity-input'
            name='capacity'
            type='number'
            placeholder='Capacity'
            value={this.state.capacity}
            onChange={this.handleInputChange}
          />
          <label htmlFor='date-input'></label>
          <input id='date-input' name='date' type='date' onChange={this.handleInputChange} />
          <input
            id='time-input'
            name='time'
            type='time'
            placeholder='Time'
            value={this.state.time}
            onChange={this.handleInputChange}
          />
          <label htmlFor='city-input'></label>
          <input
            id='city-input'
            name='city'
            type='text'
            placeholder='City'
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <label htmlFor='description-input'></label>
          <input
            id='description-input'
            name='description'
            type='text'
            placeholder='Description'
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <button>Create</button>
        </form>
        <NavBar />
      </div>
    );
  }
}

export default CreateEventView;
