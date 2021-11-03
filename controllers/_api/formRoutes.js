const router = require('express').Router();
const { Calories, Exercise, Sleep, Water } = require('../../models');

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




/////////////////////////////////////////////// read ////////////////////////////////////////
/* router.get('/calories/:id', async (req, res) => {
    try {
        const userData = await Calories.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).json(err);
    }
})

router.get('/exercise/:id', async (req, res) => {
    try {
        const userData = await Exercise.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).json(err);
    }
})

router.get('/sleep/:id', async (req, res) => {
    try {
        const userData = await Sleep.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).json(err);
    }
})

router.get('/water/:id', async (req, res) => {
    try {
        const userData = await Water.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).json(err);
    }
})
 */
/////////////////////////////////////////////// create ////////////////////////////////////////
/* router.post('/calories', async (req, res) => {
    // create a new Calories
    try {
        const userData = await Calories.create(req.body);
        res.status(201).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/exercise', async (req, res) => {
    // create a new Exercise
    try {
        const userData = await Exercise.create(req.body);
        res.status(201).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/sleep', async (req, res) => {
    // create a new Sleep
    try {
        const userData = await Sleep.create(req.body);
        res.status(201).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/water', async (req, res) => {
    // create a new Water
    try {
        const userData = await Water.create(req.body);
        res.status(201).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
}); */

/////////////////////////////////////////////// update ////////////////////////////////////////
/* router.put('/calories/:id', (req, res) => {
    // update Calories by its `id` value
    Calories.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedCalories => res.json(updatedCalories))
        .catch(err => res.json(err))
});

router.put('/exercise/:id', (req, res) => {
    // update Exercise by its `id` value
    Exercise.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedExercise => res.json(updatedExercise))
        .catch(err => res.json(err))
});

router.put('/sleep/:id', (req, res) => {
    // update Sleep by its `id` value
    Sleep.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedSleep => res.json(updatedSleep))
        .catch(err => res.json(err))
});

router.put('/water/:id', (req, res) => {
    // update Water by its `id` value
    Water.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedWater => res.json(updatedWater))
        .catch(err => res.json(err))
}); */

/////////////////////////////////////////////// delete ////////////////////////////////////////
/* router.delete('/calories/:id', async (req, res) => {
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

router.delete('/exercise/:id', async (req, res) => {
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

router.delete('/sleep/:id', async (req, res) => {
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

router.delete('/water/:id', async (req, res) => {
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
}); */

module.exports = router;
