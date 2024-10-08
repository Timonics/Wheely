const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  createBooking,
  getABooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

router
    .route("/")
    .get(getAllBookings)
    .post(createBooking);

router
  .route("/:bookingID")
  .get(getABooking)
  .put(updateBooking)
  .delete(deleteBooking);

module.exports = router;
