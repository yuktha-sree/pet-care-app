const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: String,
  age: Number,
  type: String,
  breed: String,
});

module.exports = mongoose.model("Pet", petSchema);
