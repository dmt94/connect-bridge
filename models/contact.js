const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contact = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: { 
    type: String, 
    required: true 
  },
  role: {
    type: String,
    required: true
  },
  company: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
  },
  linkedIn: {
    type: String,
  },
  url: {
    type: String,
  },
  waitingOn: {
    type: Boolean,
    default: false
  },
  relationship: {
    type: String,
    enum: [
      'Professional',
      'Colleague',
      'Friend',
      'Close Friend',
      'Family',
    ],
    default: "Professional",
  },
  starContact: {
    type: Boolean,
    default: false
  },
  contact: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Contact'
    }
  ],
  task: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contact);
