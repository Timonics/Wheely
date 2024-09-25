const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  renter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Renter",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

exports.Review = mongoose.model("Review", reviewSchema);
