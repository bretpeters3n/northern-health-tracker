const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
// const postRoutes = require("./postRoutes");
// const commentsRoutes = require("./commentsRoutes");

router.use("/login", loginRoutes);
// router.use("/posts", postRoutes);
// router.use("/comments", commentsRoutes);

module.exports = router;
