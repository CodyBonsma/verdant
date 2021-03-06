// this will hold the user plant collection
// trefle.io for plant info/pictures etc?

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// plant schema for the mongoDB
const plantSchema = new Schema({
  common_name: {
    type: String,
    trim: true,
    required: true,
  },
  image_url: {
    type: String,
    data: Buffer,
  },
  family: {
    type: String,
    trim: true,
    required: false,
  },
  bibliography: {
    type: String,
    trim: true,
    required: false,
  },
  genus: {
    type: String,
    trim: true,
    required: false,
  },
  scientific_name: {
    type: String,
    trim: true,
    required: false,
  },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
