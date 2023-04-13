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
  image: {
    type: String
  },
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
  },
  about: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Enter a valid email for this contact"
    }
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
  response: {
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
  mutuals: [
   [ {
      type: Schema.Types.ObjectId,
      ref: 'Contact'
    }, ]
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contact);
