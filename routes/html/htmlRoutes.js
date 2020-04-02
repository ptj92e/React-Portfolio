const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

router.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
    console.log(contact);
});

module.exports = router;