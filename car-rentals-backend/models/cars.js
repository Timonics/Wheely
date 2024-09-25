const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  brand: {
    type: String,
    /* required: true */
  },
  model: {
    type: String,
    /* required: true */
  },
  year: {
    type: Number,
    /* required: true */
  },
  licencePlate: {
    type: Number,
    /* required: true */
  },
  pricePerDay: {
    type: Number,
    /* required: true */
  },
  location: {
    type: String,
    /* required: true */
  },
  available: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

exports.Car = mongoose.model("Car", carSchema);
