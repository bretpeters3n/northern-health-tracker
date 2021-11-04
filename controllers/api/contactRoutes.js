const router = require("express").Router();
const { Contact } = require("../../models");

router.post("/contact", async (req, res) => {
  try {
      const userData = await Contact.create(req.body);
      console.log(userData, req.body);
      res.status(201).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
