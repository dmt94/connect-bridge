const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profile = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: 'String',
    required: true,
    maxLength: 200
  },
  profileImg: {
    type: String
  },
  resume: {
    type: String
  },
  website: {
    type: String
  },
  email: {
    type: String
  },
  occupation: {
    type: String,
  },
  organization: {
    type: String,
  },
  about: {
    type: String,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profile);
