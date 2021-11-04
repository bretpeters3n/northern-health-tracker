const router = require("express").Router();
const { Logs } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("homepage");
});

// router.get("/", withAuth, async (req, res) => {
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    // res.render("login");
    return;
  }

  res.render("login");
});

router.get("/profile", async (req, res) => {
  if (req.session.logged_in) {
    const userId = req.session.user_id;
    console.log("This is the signed in users id: " + userId);

    const userData = await Logs.findAll({
      where: {
        user_id: userId,
      },
        order: [['day', 'DESC']],
        limit: 3,
    });

    // const thisUserData = userData.map((post) => post.get({ plain: true }));
    console.log(userData);

    res.render("profile", {
      userData,
      // userData,
      logged_in: req.session.logged_in,
    });
    // res.render("profile");
    // res.redirect("/");
    return;
  }
  res.redirect("/login");
  // res.render("profile");
});

router.get("/form", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  }

  res.render("form", {});
  return;
})

module.exports = router;
