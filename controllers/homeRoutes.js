const router = require("express").Router();
const { User } = require("../models");
// const withAuth = require("../utils/auth");

// router.get("/", withAuth, async (req, res) => {
console.log("sdfasdfasd");

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("*", (req, res) => {
  console.log("asdfasdfasdf");
  //   try {
  //     const userData = await User.findAll();

  //     const users = userData.map((project) => project.get({ plain: true }));
  //     console.log("sadfdsfasdf" + users);
  //     // res.json(users);
  //     res.render("homepage", {
  //       users,
  //       //   logged_in: req.session.logged_in,
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  res.render("homepage");
});

module.exports = router;
