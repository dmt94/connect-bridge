const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: 'String',
    required: true,
    maxLength: 200
  },
  deadline: {
    type: Date,
    default: function() {
      return new Date();
    }
  },
  status: {
    type: String,
    enum: [
      'In-progress',
      'Complete'
    ]
  },
  description: {
    type: String,
    maxLength: 500
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', task);
