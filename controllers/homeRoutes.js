const router = require("express").Router();
const { User, Water } = require("../models");
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

<<<<<<< HEAD
/* router.get("*", (req, res) => {
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
}); */
=======
router.get("/profile", async (req, res) => {
  if (req.session.logged_in) {
    const userId = req.session.user_id;
    console.log("This is the signed in users id: " + userId);

    const userData = await User.findOne({
      where: {
        id: userId,
      },
      attributes: ["id", "email"],
      include: [
        {
          model: Water,
          attributes: [
            "id",
            "mon_amount",
            "tues_amount",
            "wed_amount",
            "thurs_amount",
            "fri_amount",
            "sat_amount",
            "sun_amount",
            "user_id",
          ],
          include: {
            model: User,
            attributes: ["id", "email"],
          },
        },
        // {
        //   model: User,
        //   attributes: ["id", "email"],
        // },
      ],
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
>>>>>>> main

module.exports = router;
