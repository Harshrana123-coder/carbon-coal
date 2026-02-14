const router = require("express").Router();
const { calculateEmission } = require("../controllers/emission.controller");

router.post("/calculate", calculateEmission);

module.exports = router;
