const express = require("express");
const app = express();

const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const corsOption = require("./config/corsOption");
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/errorHandler');

require("dotenv").config();
const PORT = process.env.PORT;
const DB_URI = process.env.URI;
const api = process.env.API;

app.use(cors(corsOption));
app.use(express.json());
app.use(morgan("dev"));
app.use(authJwt())
app.use(errorHandler)

const carRouter = require("./routes/cars");
const bookingRouter = require("./routes/bookings");
const paymentRouter = require("./routes/payments");
const userRouter = require("./routes/users");

//routes to our endpoints
app.use(`${api}cars`, carRouter);
/* app.use(`${api}payments`, paymentRouter); */
app.use(`${api}bookings`, bookingRouter);
app.use(`${api}users`, userRouter);

mongoose
  .connect(DB_URI)
  .then(() => console.log("Successfully connected to DB"))
  .catch(() => console.log("Error connecting to DB"));

app.listen(PORT, () => {
  console.log(`Server listening at PORT: ${PORT}`);
});
