'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String
  },
  photo: {
    type: String
  },
  hasEvent: {
    type: Boolean,
    default: false
  },
  rating: {
    avgRate: { type: Number },
    numRates: { type: Number }
  },
  invitationToken: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model('User', schema);
