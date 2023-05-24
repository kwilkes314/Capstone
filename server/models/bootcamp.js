import mongoose from "mongoose";

const bootcampSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  },
location: {
    type: String,
    required: true,
  validate: /^[A-Za-z ]*$/
  },
  salary: {
    type: Number,
    required: true,
    validate: /^[0-9]*$/
  },
  review:{
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  }, });

const Bootcamp = mongoose.model("Bootcamp",bootcampSchema);
module.exports = Bootcamp;

