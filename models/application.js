const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  applicationUrl: { 
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
  salaryExpectation: {
    type: Number
  },
  status: {
    type: String,
    enum: [
      'Waiting',
      'Received Offer',
      'Rejected',
      'Interviewing'
    ],
    default: 'Waiting'
  },
  priority: {
    type: Boolean,
    default: false
  },
  contact: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);
