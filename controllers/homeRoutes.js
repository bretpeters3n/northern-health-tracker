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

router.get("/contact", withAuth, (req, res) => {
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
    // console.log(loggedInUserData);
    // END - gather user data for logged in User ^

    // Find average calories for User
    const userCalorie = await loggedInUserData.map((data) => data.calorie);
    const userExercise = await loggedInUserData.map((data) => data.exercise);
    const userSleep = await loggedInUserData.map((data) => data.sleep);
    const userWater = await loggedInUserData.map((data) => data.water);
    const sumUC = userCalorie.reduce((a, b) => a + b, 0);
    const sumUE = userExercise.reduce((a, b) => a + b, 0);
    const sumUS = userSleep.reduce((a, b) => a + b, 0);
    const sumUW = userWater.reduce((a, b) => a + b, 0);
    const avgUC = sumUC / userCalorie.length;
    const avgUE = sumUE / userExercise.length;
    const avgUS = sumUS / userSleep.length;
    const avgUW = sumUW / userWater.length;
    // console.log("Average logged in user calories " + avgUC);
    // console.log("Average logged in user exercise " + avgUE);
    // console.log("Average logged in user sleep " + avgUS);
    // console.log("Average logged in user water " + avgUW);
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
    // console.log(allUsersUserData);
    // END - gather user data for ALL users ^

    // Find average calories for ALL users
    const allUserCalorie = await allUsersUserData.map((data) => data.calorie);
    const allUserExercise = await allUsersUserData.map((data) => data.exercise);
    const allUserSleep = await allUsersUserData.map((data) => data.sleep);
    const allUserWater = await allUsersUserData.map((data) => data.water);
    const sumAUC = allUserCalorie.reduce((a, b) => a + b, 0);
    const sumAUE = allUserExercise.reduce((a, b) => a + b, 0);
    const sumAUS = allUserSleep.reduce((a, b) => a + b, 0);
    const sumAUW = allUserWater.reduce((a, b) => a + b, 0);
    const avgAUC = sumAUC / allUserCalorie.length;
    const avgAUE = sumAUE / allUserExercise.length;
    const avgAUS = sumAUS / allUserSleep.length;
    const avgAUW = sumAUW / allUserWater.length;
    // console.log("Average combined user calories " + avgAUC);
    // console.log("Average combined user exercise " + avgAUE);
    // console.log("Average combined user sleep " + avgAUS);
    // console.log("Average combined user water " + avgAUW);
    // End - find average calories ALL users

    // Transfer both logged in User data averages & all user data averages
    const allAverages = {
      userCalories: avgUC,
      userExercise: avgUE,
      userSleep: avgUS,
      userWater: avgUW,
      allUserCalories: avgAUC,
      allUserExercise: avgAUE,
      allUserSleep: avgAUS,
      allUserWater: avgAUW,
    };

    console.log(allAverages);

    res.render("profile", {
      allAverages,
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
