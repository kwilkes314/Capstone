const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  review: {
    type: String,
    required: true
  }
});

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);
module.exports = Bootcamp;
