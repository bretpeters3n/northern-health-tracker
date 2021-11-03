const router = require('express').Router();
const { User, Calories, Exercise, Sleep, Water } = require('../models');

// The `/api` endpoint

const entities = [
    {path: "calories", table: Calories},
    {path: "exercise", table: Exercise},
    {path: "sleep", table: Sleep},
    {path: "water", table: Water}
];

for(const entity of entities) {
    router.get(`/${entity.path}/:id`, async (req, res) => {
        try {
            const userData = await entity.table.findByPk(req.params.id);
            res.status(200).json(userData);
        } catch (err) {
            res.status(404).json(err);
        }
    });

    router.post(`/${entity.path}`, async (req, res) => {
        try {
            const userData = await entity.table.create(req.body);
            res.status(201).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    router.put(`/${entity.path}/:id`, (req, res) => {
        // update Calories by its `id` value
        entity.table.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(updated => res.json(updated))
            .catch(err => res.json(err))
    });

    router.delete(`/${entity.path}/:id`, async (req, res) => {
        // delete Calories by its `id` value
        try {
            const userData = await entity.table.destroy({
                where: {
                    id: req.params.id
                }
            });
    
            if (!userData) {
                res.status(404).json({ message: 'No record found with this id!' });
                return;
            }
    
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    });
}

router.post("/user", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

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
  }
});

router.post("/user/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
