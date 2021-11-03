const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/login", async (req, res) => {
  console.log("login user route entered");
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    // const validPassword = req.body.password;

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/", async (req, res) => {
  console.log("signup user route entered");
  try {
    // console.log("signup TRY entered");
    const newUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    // console.log("after User.create");
    req.session.save(() => {
      req.session.user_id = newUserData.id;
      req.session.logged_in = true;

      res.status(200).json(newUserData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// PUT /api/users/1
router.put("/:id", withAuth, (req, res) => {
  try {
    const userData = User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id,
      },
    });

    if (!userData[0]) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }

    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
