const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  },
  email: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  },
  phone: {
    type: Number,
    required: true,
    validate: /^[0-9]*$/
  },
  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  }
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
