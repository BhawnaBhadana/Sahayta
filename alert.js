const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  message: String,
  category: String,
  priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Alert", alertSchema);
