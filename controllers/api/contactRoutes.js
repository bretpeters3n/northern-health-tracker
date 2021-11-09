const router = require("express").Router();
const { Contact, User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const message = await Contact.create({
      user_id: req.session.user_id,
      message: req.body.message,
    });

    console.log(message, req.body);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
