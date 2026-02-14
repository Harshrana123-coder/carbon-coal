const mongoose = require("mongoose");

const mineSchema = new mongoose.Schema({
  name: String,
  location: String,
  mineType: String,
  annualProduction: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Mine", mineSchema);
