const router = require('express').Router();
const { Calories, Exercise, Sleep, Water } = require('../../models');

// The `/api/form` endpoint

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
        entity.table.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(updated => res.json(updated))
            .catch(err => res.json(err))
    });

    router.delete(`/${entity.path}/:id`, async (req, res) => {
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

module.exports = router;