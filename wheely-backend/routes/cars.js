const express = require("express");
const router = express.Router();

const {
  getAllCars,
  listNewCar,
  getACar,
  deleteACar,
  updateACar,
  getFleet,
} = require("../controllers/carController");

router.route("/").get(getAllCars).post(listNewCar);
router.route("/:carID").get(getACar).delete(deleteACar).put(updateACar);
router.route("/fleets/:userID").get(getFleet);

module.exports = router;
