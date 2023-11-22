const express = require("express");
const controller = require("../controllers/controllersTO");
const router = express.Router();

router.route("/city")
.get(controller.getAllRestaurants);
// router.route("/hotel").get(controller.getAllHotels);


module.exports = router;
