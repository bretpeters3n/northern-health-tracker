const router = require("express").Router();
const userRoutes = require("./userRoutes");
const formRoutes = require("./formRoutes");
const contactRoutes = require("./contactRoutes");

router.use('/contact', contactRoutes);
router.use("/users", userRoutes);
router.use("/form", formRoutes);

module.exports = router;
