'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
    trim: true
  },
  limit: {
    type: Number
  },
  theme: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    day: { type: 'String' }, // Calendary date
    time: { type: Number } // time in seconds
  },
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
