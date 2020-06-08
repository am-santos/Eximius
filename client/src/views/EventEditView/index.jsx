import React, { Component } from 'react'
import './style.scss';

class EditEventView extends Component {
  render() {
    return (
      <div className="form">
        <h1>Edit Event</h1>
        <form>
          <label htmlFor='name'></label>
          <input
            id='name-input'
            name='name'
            type='text'
            placeholder='Name'
            //value={this.state.name}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='Type-input'></label>
          <input
            id='type-input'
            name='type'
            type='text'
            placeholder='Type'
            //value={this.state.username}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='Date-input'></label>
          <input
            id='date-input'
            name='date'
            type='text'
            placeholder='Date'
            //value={this.state.password}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='Theme-input'></label>
          <input
            id='theme-input'
            name='theme'
            type='text'
            placeholder='Theme'
            //value={this.state.username}
            //onChange={this.handleInputChange}
          />
          <label htmlFor='Discription-input'></label>
          <input
            id='discription-input'
            name='discription'
            type='text'
            placeholder='Discription'
            //value={this.state.password}
            //onChange={this.handleInputChange}
          />
          <button>Create Event</button>
        </form>
    </div>
  )}
}

export default EditEventView;