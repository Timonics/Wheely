const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createAUser,
  getAUser,
  deleteAUser,
  updateAUser,
  userLogin
} = require("../controllers/userController");

router
  .get("/", getAllUsers)
  .post("/register", createAUser);

router
  .route("/:userID")
  .get(getAUser)
  .delete(deleteAUser)
  .put(updateAUser);

router.post("/login", userLogin)

module.exports = router;
