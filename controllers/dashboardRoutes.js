const router = require('express').Router();
const { User, Calories, Exercise, Sleep, Water } = require('../models');
const withAuth = require('../utils/auth');

const entities = [
  {path: "calories", table: Calories},
  {path: "exercise", table: Exercise},
  {path: "sleep", table: Sleep},
  {path: "water", table: Water}
];

for(const entity of entities) {
  router.get(`/${entity.path}/:id`, withAuth, async (req, res) => {
      try {
          const userData = await entity.table.findByPk(req.params.id);
          res.status(200).json(userData);
      } catch (err) {
          res.status(404).json(err);
      }
  });
}

module.exports = router;
