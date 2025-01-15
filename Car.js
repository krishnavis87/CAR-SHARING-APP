const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  name: String,
  model: String,
  pricePerHour: Number,
  available: Boolean,
});

module.exports = mongoose.model('Car', CarSchema);
