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
      },
    });
    const aa = logsData.map((v) => v.get({ plain: true }));

    res.render("form", { logged_in: req.session.logged_in, logs: aa });
  } catch (e) {
    console.log(e);
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

    // gather user data for logged in User
    const userData = await Logs.findAll({
      where: {
        user_id: userId,
      },
      // order: [['day', 'DESC']],
      // limit: 3,
      attributes: ["calorie", "exercise", "sleep", "water"],
    });
    const loggedInUserData = await userData.map((post) =>
      post.get({ plain: true })
    );
    console.log(loggedInUserData);
    // END - gather user data for logged in User ^

    // Find average calories for User
    const user_calorie = await loggedInUserData.map((data) => data.calorie);
    const user_exercise = await loggedInUserData.map((data) => data.exercise);
    const user_sleep = await loggedInUserData.map((data) => data.sleep);
    const user_water = await loggedInUserData.map((data) => data.water);
    const sumUC = user_calorie.reduce((a, b) => a + b, 0);
    const sumUE = user_exercise.reduce((a, b) => a + b, 0);
    const sumUS = user_sleep.reduce((a, b) => a + b, 0);
    const sumUW = user_water.reduce((a, b) => a + b, 0);
    const avgUC = sumUC / user_calorie.length;
    const avgUE = sumUE / user_exercise.length;
    const avgUS = sumUS / user_sleep.length;
    const avgUW = sumUW / user_water.length;
    console.log("Average logged in user calories " + avgUC);
    console.log("Average logged in user exercise " + avgUE);
    console.log("Average logged in user sleep " + avgUS);
    console.log("Average logged in user water " + avgUW);
    // End - find average calories for User

    // gather user data for ALL users
    const allUserData = await Logs.findAll({
      // order: [['day', 'DESC']],
      // limit: 3,
      attributes: ["calorie", "exercise", "sleep", "water"],
    });
    const allUsersUserData = await allUserData.map((post) =>
      post.get({ plain: true })
    );
    console.log(allUsersUserData);
    // END - gather user data for ALL users ^

    // Find average calories for ALL users

    // End - find average calories ALL users

    res.render("profile", {
      loggedInUserData,
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
