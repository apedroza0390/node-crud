const express = require("express");
const router = express.Router();

const controller = require('../controllers/home.controller');

router.get("/", controller.home);

module.exports = router;