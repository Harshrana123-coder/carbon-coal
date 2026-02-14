const router = require("express").Router();

router.post("/add", (req, res) => {
  res.json({ message: "Mine route working" });
});

module.exports = router;
