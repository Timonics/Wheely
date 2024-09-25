const express = require("express");
const router = express.Router();

const {
  getAllCars,
  listNewCar,
  getACar,
  deleteACar,
  updateACar,
} = require("../controllers/carController");

router
  .route("/")
  .get(getAllCars)
  .post(listNewCar);

router
  .route("/:carID")
  .get(getACar)
  .delete(deleteACar)
  .put(updateACar);

module.exports = router;
