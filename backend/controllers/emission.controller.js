const Emission = require("../models/Emission");
const { calculate } = require("../services/carbonCalculator");

exports.calculateEmission = async (req, res) => {
  const result = calculate(req.body);

  const emission = new Emission({
    ...req.body,
    totalCO2e: result.totalCO2e
  });

  await emission.save();
  res.json(emission);
};
