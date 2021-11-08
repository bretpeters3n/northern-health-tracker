const router = require('express').Router();
const { Logs } = require('../../models');


router.post("/", (req, res) => {
    Logs.create({
        user_id: req.session.user_id,
        ...req.body, 
    }).then(created => {
        console.info("created", created.dataValues);
        res.status(200).json(created.dataValues);
    }).catch(err => {
        if(err.message.startsWith("Incorrect")) {
            res.status(400).json({message: err.message});
        } else if (err.original.code === "ER_DUP_ENTRY") {
            res.status(409).json({message: `Duplicate day "${req.body.day}"`});
        } else {
            res.status(500).json({message: err.message});
        }
    })
});

router.put("/:day", (req, res) => {
    Logs.update(req.body, {
        where: {
            user_id: req.session.user_id,
            day: req.params.day,
        }
    }).then(updated => {
        console.info("updated", updated[0]);
        if (updated[0]===0) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    }).catch(err => {
        res.status(500).json(err);
    })
});

router.delete("/:day", (req, res) => {
    Logs.destroy({
        where: {
            user_id: req.session.user_id,
            day: req.params.day,
        }
    }).then(deleted => {
        console.info("deleted", deleted);
        if (deleted === 0) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    }).catch((err) => {
        res.status(500).json(err);
    })
});

module.exports = router;