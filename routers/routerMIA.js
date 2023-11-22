const express = require("express");
const controller = require("../controllers/controllersMIA");
const router = express.Router();

router.route("/").get(controller.getAllRestaurants);
// router.route("/hotel").get(controller.getAllHotels);

module.exports = router;
