const router = require("express").Router();

router.post("/login", (req, res) => {
  res.json({ message: "Auth working" });
});

module.exports = router;
