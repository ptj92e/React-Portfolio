const router = require("express").Router();
const htmlRoutes = require("./apiRoutes");

router.use("/projects", htmlRoutes);
router.use("/contact", htmlRoutes);

module.exports = router;