const mongoose = require("mongoose");

const emissionSchema = new mongoose.Schema({
  mine: { type: mongoose.Schema.Types.ObjectId, ref: "Mine" },
  dieselLitres: Number,
  electricityKwh: Number,
  explosivesKg: Number,
  methaneTons: Number,
  totalCO2e: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Emission", emissionSchema);
