const DIESEL = 2.68;
const ELECTRICITY = 0.82;
const EXPLOSIVE = 0.4;
const METHANE = 28;

exports.calculate = (data) => {
  const dieselEmission = data.dieselLitres * DIESEL;
  const electricityEmission = data.electricityKwh * ELECTRICITY;
  const explosiveEmission = data.explosivesKg * EXPLOSIVE;
  const methaneEmission = data.methaneTons * METHANE * 1000;

  const totalCO2e =
    dieselEmission +
    electricityEmission +
    explosiveEmission +
    methaneEmission;

  return { totalCO2e };
};
