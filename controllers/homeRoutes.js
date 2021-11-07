const router = require("express").Router();
const { Logs } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("homepage", { logged_in: req.session.logged_in });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/form");
    return;
  }

  res.render("login");
});

router.get("/form", withAuth, async (req, res) => {
  try {
    const logsData = await Logs.findAll({
      where: {
        user_id: req.session.user_id,
      }
    });
    const aa = logsData.map((v) => v.get({ plain: true }));

    res.render("form", { logged_in: req.session.logged_in, logs: aa });
  } catch (e) {
    console.log(e)
  }
});

router.get("/faqs", (req, res) => {
  res.render("faqspage", { logged_in: req.session.logged_in });
});

router.get("/about", (req, res) => {
  res.render("about", { logged_in: req.session.logged_in });
});

router.get("/averages", (req, res) => {
  res.render("averages", { logged_in: req.session.logged_in });
});

router.get("/contact", (req, res) => {
  res.render("contactpage", { logged_in: req.session.logged_in });
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
});

module.exports = router;
