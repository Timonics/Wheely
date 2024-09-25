const { User } = require("../models/users");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (allUsers.length == 0) return res.status(400).send("No users found");

    return res.status(200).send(allUsers);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const createAUser = async (req, res) => {
  try {
    const { name, email, password, role, phone, createdAt } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(409).send("User already exists");
    let newUser = new User({
      name,
      email,
      password,
      passwordHash: bcrypt.hashSync(password, 10),
      role,
      phone,
      createdAt,
    });
    const createdUser = await newUser.save();
    if (!createdUser) return res.status(400).send("User not created");
    res.status(200).json(createdUser);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const getAUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const singleUser = await User.findById(userID);
    if (!singleUser) return res.status(400).send("User not found");

    res.status(200).send(singleUser);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const deleteAUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const deleteUser = await User.findByIdAndDelete(userID);
    if (!deleteUser) return res.status(400).send("User not removed");

    res.status(200).send("User has been successfully deleted");
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const updateAUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const { name, email, password, role, phone, createdAt } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userID,
      {
        name,
        email,
        password,
        passwordHash: bcrypt.hashSync(password, 10),
        role,
        phone,
        createdAt,
      },
      { new: true }
    );
    if (!updatedUser) return res.status(400).send("User info not updated");

    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    const secret = process.env.JWT_SECRET_KEY;

    if (userExists && bcrypt.compareSync(password, userExists.passwordHash)) {
      const token = jwt.sign(
        {
          userID: userExists._id,
          userRole: userExists.role,
        },
        secret,
        { expiresIn: "1d" }
      );

      res
        .status(200)
        .send({ user: userExists.email, token: token, id: userExists._id });
    } else {
      res.status(400).send("email/Password is wrong");
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

module.exports = {
  getAllUsers,
  createAUser,
  getAUser,
  deleteAUser,
  updateAUser,
  userLogin,
};
