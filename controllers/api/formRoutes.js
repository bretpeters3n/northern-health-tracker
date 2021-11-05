const router = require('express').Router();
const { Logs } = require('../../models');



router.get("/:id", async (req, res) => {
    try {
        const userData = await Logs.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).json(err);
    }
});

router.post("/", async (req, res) => {
    console.log("ASJDIASJDIOSAJDIOPASJIDOPAJSIOD",req.body);
    const newLog = {...req.body, 
    user_id: req.session.user_id,
    }

    try {
        const userData = await Logs.create(newLog);
        console.log(newLog);
        /* console.log(userData, req.body); */
        res.status(201).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", (req, res) => {
    console.log(req.params.id);
    const updatedLog = {...req.body, 
        user_id: req.session.user_id,
        }

    Logs.update(updatedLog, {
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