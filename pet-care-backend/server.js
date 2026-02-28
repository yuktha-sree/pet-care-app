const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);
const app = express();

// ✅ ADD THIS LINE
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const petRoutes = require("./route/petRoutes");
const foodRoutes = require("./route/foodRoutes");
const serviceRoutes = require("./route/serviceRoutes");
const vetRoutes = require("./route/vetRoutes");

// Use routes
app.use("/api/pets", petRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/vets", vetRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('🐾 Welcome to the Pet Care Backend API! 🐾');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) =>
    console.error("❌ MongoDB connection error:", err)
  );