const router = require('express').Router();
const { Calories, Exercise, Sleep, Water } = require('../../models');

// The `/api/form` endpoint

/////////////////////////////////////////////// create ////////////////////////////////////////
router.post('/', async (req, res) => {
    // create a new Calories
    try {
        const userData = await Calories.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new Exercise
    try {
        const userData = await Exercise.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new Sleep
    try {
        const userData = await Sleep.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new Water
    try {
        const userData = await Water.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

/////////////////////////////////////////////// update ////////////////////////////////////////
router.put('/:id', (req, res) => {
    // update Calories by its `id` value
    Calories.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedCalories => res.json(updatedCalories))
        .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
    // update Exercise by its `id` value
    Exercise.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedExercise => res.json(updatedExercise))
        .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
    // update Sleep by its `id` value
    Sleep.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedSleep => res.json(updatedSleep))
        .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
    // update Water by its `id` value
    Water.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedWater => res.json(updatedWater))
        .catch(err => res.json(err))
});

/////////////////////////////////////////////// delete ////////////////////////////////////////
router.delete('/:id', async (req, res) => {
    // delete Calories by its `id` value
    try {
        const userData = await Calories.destroy({
            where: {
                id: req.params.id
            }
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

router.delete('/:id', async (req, res) => {
    // delete Exercise by its `id` value
    try {
        const userData = await Exercise.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!userData) {
            res.status(404).json({ message: 'No Exercise found with this id!' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete Sleep by its `id` value
    try {
        const userData = await Sleep.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!userData) {
            res.status(404).json({ message: 'No Sleep found with this id!' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete Water by its `id` value
    try {
        const userData = await Water.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!userData) {
            res.status(404).json({ message: 'No Water found with this id!' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
