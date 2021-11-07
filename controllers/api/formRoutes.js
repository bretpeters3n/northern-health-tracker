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
        res.status(500).json(err);
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
            res.status(404).json({ message: 'No record found for this day!' });
            return;
        }
        res.status(200)
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
            res.status(404).json({ message: 'No record found for this day!' });
            return;
        }
        res.status(200).json({key: "Hello there"});
    }).catch((err) => {
        res.status(500).json(err);
    })
});

module.exports = router;