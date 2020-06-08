'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 140,
    required: true
  },
  message: {
    type: String,
    maxlength: 5000
  }
},{
  timestamps: {
    createdAt: 'createdDate',
    updatedAt: 'updatedDate'
  }
});


module.exports = mongoose.model('Channel', schema);
