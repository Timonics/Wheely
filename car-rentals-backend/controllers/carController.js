const { Car } = require("../models/cars");
const { User } = require("../models/users");

const getAllCars = async (req, res) => {
  try {
    const allCars = await Car.find().populate("owner");

    if (allCars.length == 0) return res.status(400).send("No cars found");

    res.status(200).send(allCars);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const listNewCar = async (req, res) => {
  try {
    const { owner, brand, model, year, pricePerDay, location, available } =
      req.body;

    const userCheck = await User.findById(owner);
    if (!userCheck) return res.status(400).send("Invalid user ID");

    const userCheckedID = userCheck._id;

    let newListedCar = new Car({
      owner: userCheckedID,
      brand,
      model,
      year,
      pricePerDay,
      location,
      available,
    });

    const listedCar = await newListedCar.save();
    if (!listedCar) return res.status(400).send("No car is listed");
    res.status(200).send("Car has been listed");
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const getACar = async (req, res) => {
  try {
    const { carID } = req.params;
    const singleCar = await Car.findById(carID);
    if (!singleCar) return res.status(400).send("Car not found");

    res.status(200).send(singleCar);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const deleteACar = async (req, res) => {
  try {
    const { carID } = req.params;
    const deleteCar = await Car.findByIdAndDelete(carID);
    if (!deleteCar) return res.status(400).send("Car not removed");

    res.status(200).send("Car has been successfully deleted");
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const updateACar = async (req, res) => {
  try {
    const { carID } = req.params;
    const { owner, brand, model, year, pricePerDay, location, available } =
      req.body;
    const userCheck = await User.findById(owner);
    if (!userCheck) return res.status(400).send("Invalid user ID");

    const userCheckedID = userCheck._id;

    const updatedCar = await Car.findByIdAndUpdate(
      carID,
      {
        owner: userCheckedID,
        brand,
        model,
        year,
        pricePerDay,
        location,
        available,
      },
      { new: true }
    );
    if (!updatedCar) return res.status(400).send("Car not updated");

    res.status(200).json({
      success: true,
      car: updatedCar,
      message: "Successfully Updated",
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

module.exports = {
  getAllCars,
  listNewCar,
  getACar,
  deleteACar,
  updateACar,
};
