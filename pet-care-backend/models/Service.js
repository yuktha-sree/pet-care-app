const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },         // Service name (Grooming, Walking)
  description: { type: String },                 // Optional description
  price: { type: Number, required: true, min: 0 },
  duration: { type: String },                    // e.g., "30 mins", "1 hour"
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);
