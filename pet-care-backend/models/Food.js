const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },     // Food name
  brand: { type: String },                    // Optional brand
  type: { type: String, required: true },     // Dry, Wet, Treat
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, default: 0 }      // Stock quantity
}, { timestamps: true });

module.exports = mongoose.model("Food", foodSchema);
