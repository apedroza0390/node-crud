const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World, welcome to Nodejs & Express");
})

module.exports = router;