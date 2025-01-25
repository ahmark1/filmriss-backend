const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  suggestion: { type: String },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
