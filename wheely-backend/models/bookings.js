const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  renter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rentDays: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending",
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

exports.Booking = mongoose.model("Booking", bookingSchema);
