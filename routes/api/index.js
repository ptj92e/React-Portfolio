const router = require("express").Router();
const emailRoutes = require("./send");

// Book routes
router.use("/send", emailRoutes);

module.exports = router;