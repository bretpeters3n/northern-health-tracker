const router = require('express').Router();
const { User, Calories, Exercise, Sleep, Water } = require('../models');
const withAuth = require('../utils/auth');

// Template Idea
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const userData = await Calories.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include: [{ model: Product }],
    });

    if (!userData) {
      res.status(404).json({ message: 'No Calories found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
