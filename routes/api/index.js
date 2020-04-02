const router = require("express").Router();
const emailRoutes = require("./apiRoutes");

router.use("/send", emailRoutes);

module.exports = router;