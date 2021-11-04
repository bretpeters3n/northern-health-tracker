const router = require('express').Router();
const { Logs } = require('../../models');

// The `/api/form` endpoint

router.get("/:id", async (req, res) => {
    try {
        const userData = await Log.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const userData = await Logs.create(req.body);
        console.log(userData, req.body);
        res.status(201).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", (req, res) => {
    Logs.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updated => res.json(updated))
        .catch(err => res.json(err))
});

router.delete("/:id", async (req, res) => {
    try {
        const userData = await Logs.destroy({
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


module.exports = router;