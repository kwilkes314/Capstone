import mongoose from "mongoose";


let bootcampSchema = new mongoose.Schema({


name:{
  type: String,
  required: true,
  validate: /^[A-Za-z ]*$/,
},
location:{
  type: String,
  required: true,
validate: /^[A-Za-z ]*$/,
},
price:{
  type: Number,
  required: true,
  validate: /^[0-9]*$/,
},
reviews:{
  type: String,
  required: true,
  validate: /^[A-Za-z ]*$/,
}
});

const Bootcamp = mongoose.model("bootcamp",bootcampSchema);
module.exports = Bootcamp

