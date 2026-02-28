const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema({
  name: { type: String, required: true },         // Vet's name
  specialization: { type: String },              // Surgery, Dermatology, etc.
  experience: { type: Number, min: 0 },          // Years of experience
  contact: { type: String },                     // Phone/email
  clinic: { type: String }                       // Clinic name
}, { timestamps: true });

module.exports = mongoose.model("Vet", vetSchema);
