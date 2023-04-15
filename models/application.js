const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: function() {
      return new Date();
    }
  },
  type: {
    type: String,
    enum: [
      'Full-time',
      'Part-time',
      'Internship',
      'Apprenticeship',
      'Volunteer',
    ],
    default: 'Full-time'
  },
  applicationUrl: { 
    type: String, 
    required: true 
  },
  position: {
    type: String,
    required: true
  },
  environment: {
    type: String,
    enum: [
      'In-Office',
      'Remote',
      'Hybrid',
    ],
    default: 'In-Office'
  },
  location: {
    type: String
  },
  company: {
    type: String,
    required: true
  },
  companyWebsite: {
    type: String,
  },
  description: {
    type: String,
    required: true
  },
  salary: {
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
  haveReference: {
    type: Boolean,
    default: false
  },
  contacts: [
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

module.exports = mongoose.model('Application', applicationSchema);
