const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  name: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);
