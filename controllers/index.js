const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dash", dashboardRoutes);

module.exports = router;
