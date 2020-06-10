'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    default: ''
  },
  capacity: {
    type: Number
  },
  theme: {
    type: String
  },
  description: {
    type: String
  },
  city: {
    type: String
  },
  date: [
    {
      type: String
    }
  ],
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [
      {
        type: Number,
        min: -180,
        max: 180
      }
    ]
  }
});

module.exports = mongoose.model('Event', schema);
