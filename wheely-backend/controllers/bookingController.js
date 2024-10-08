const { Booking } = require("../models/bookings");
const { Car } = require("../models/cars");
const { User } = require("../models/users");

const getAllBookings = async (req, res) => {
  try {
    const allBookings = await Booking.find()
      .populate({path: "car", populate: "owner"})
      .populate({ path: "renter", select: "-password -passwordHash" });
    if (allBookings.length == 0)
      return res.status(400).send("No Bookings found");

    res.status(200).send(allBookings);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const { car, renter, rentDays, status } = req.body;

    const carExists = await Car.findById(car);
    if (!carExists) return res.status(400).send("This car dosen't exist");

    const userExists = await User.findById(renter);
    if (!userExists) return res.status(400).send("Invalid...");

    const carExistsID = carExists._id;
    const userExistsID = userExists._id;

    const totalPricePerDays = carExists.pricePerDay * rentDays;

    let newBooking = new Booking({
      car: carExistsID,
      renter: userExistsID,
      rentDays,
      status,
      totalPrice: totalPricePerDays,
    });

    const createdBooking = await newBooking.save();
    if (!createdBooking) return res.status(400).send("Booking not created");
    res.status(200).json(createdBooking);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

const getABooking = async (req, res) => {
  try {
    const { bookingID } = req.params;
    const singleBooking = await Booking.findById(bookingID)
      .populate({ path: "car" })
      .populate({ path: "renter", select: "-password -passwordHash" });
    if (!singleBooking) return res.status(400).send("Bookings not found");

    res.status(200).send(singleBooking);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { bookingID } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(bookingID);
    if (!deletedBooking) return res.status(400).send("Booking not found");

    res.status(200).send("Booking has been successfully deleted");
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { bookingID } = req.params;
    const { car, renter, rentDays, status } = req.body;

    const carExists = await Car.findById(car);
    if (!carExists) return res.status(400).send("This car dosen't exist");

    const userExists = await User.findById(renter);
    if (!userExists) return res.status(400).send("Invalid...");

    const carExistsID = carExists._id;
    const userExistsID = userExists._id;

    const totalPricePerDays = carExists.pricePerDay * rentDays;

    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingID,
      {
        car: carExistsID,
        renter: userExistsID,
        rentDays,
        status,
        totalPrice: totalPricePerDays,
      },
      { new: true }
    );

    if (!updatedBooking) return res.status(400).send("Booking not updated");

    res.status(200).json({
      success: true,
      car: updatedBooking,
      message: "Successfully Updated",
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

module.exports = {
  getAllBookings,
  createBooking,
  getABooking,
  updateBooking,
  deleteBooking,
};
