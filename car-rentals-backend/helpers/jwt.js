const { expressjwt: jwt } = require("express-jwt");

const { Booking } = require("../models/bookings");
const { User } = require("../models/users");

const authJwt = () => {
  const secret = process.env.JWT_SECRET_KEY;
  const api = process.env.API;

  return jwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: async (req, token) => {
      try {
        const userId = token.payload.userID;
        const userRole = token.payload.userRole;

        //function to match dynamic route path to specific route path...
        const matchRoute = (routePath, requestPath) => {
          const routeRegex = new RegExp(
            routePath
              .replace(/:[^\s/]+/g, "([0-9a-fA-F]{24})") // Match MongoDB ObjectID
              .replace(/\//g, "\\/") // Escape forward slashes
          );
          return routeRegex.test(requestPath);
        };

        let bookingID;
        let userID;

        const bookingReqInfo = req.path.match(`${api}bookings/([0-9a-fA-F]{24})`);
        const userReqInfo = req.path.match(`${api}users/([0-9a-fA-F]{24})`);

        if (bookingReqInfo) bookingID = bookingReqInfo[1];
        if (userReqInfo) userID = userReqInfo[1];

        const allowedRenterRoutes = [
          { method: "GET", path: `${api}cars` },
          { method: "GET", path: `${api}users/:userID` },
          { method: "PUT", path: `${api}users/:userID` },
          { method: "POST", path: `${api}bookings` },
          { method: "GET", path: `${api}bookings/:bookingID` },
          { method: "PUT", path: `${api}bookings/:bookingID` },
          { method: "DELETE", path: `${api}bookings/:bookingID` },
        ];

        const allowedOwnerRoutes = [
          ...allowedRenterRoutes,
          { method: "POST", path: `${api}cars` },
          { method: "PUT", path: `${api}cars/:carID` },
          { method: "DELETE", path: `${api}cars/:carID` },
        ];

        if (userRole === "renter") {
          const isAllowed = allowedRenterRoutes.some(
            (route) =>
              route.method === req.method && matchRoute(route.path, req.path)
          );

          if (isAllowed && req.method === "GET" && bookingID) {
            const booking = await Booking.findById(bookingID).populate(
              "renter"
            );

            if (!booking || booking.renter._id.toString() != userId) {
              console.log("Booking not found or user is not the renter");
              return true;
            }
          }

          if (isAllowed && (req.method === "GET" || req.method === "PUT") && userID) {
            const user = await User.findById(userID);

            if (!user || user._id.toString() != userId) {
              console.log("User not found or user is not the owner");
              return true;
            }
          }

          return !isAllowed; //Do not revoke if conditions are met
        }

        if (userRole === "owner") {
          const isAllowed = allowedOwnerRoutes.some(
            (route) =>
              route.method === req.method && matchRoute(route.path, req.path)
          );

          if (isAllowed && req.method === "GET" && bookingID) {
            const booking = await Booking.findById(bookingID).populate(
              "renter"
            );
            if (!booking || booking.renter._id.toString() != userId)
              return true;
          }

          if (isAllowed && (req.method === "GET" || req.method === "PUT") && userID) {
            const user = await User.findById(userID);

            if (!user || user._id.toString() != userId) {
              console.log("User not found or user is not the owner");
              return true;
            }
          }

          return !isAllowed;
        }

        if (userRole === "admin") {
          return false;
        }

        return true;
      } catch (err) {
        console.error("Error in isRevoked function:", err);
        throw new Error("Error in isRevoked function");
      }
    },
  }).unless({
    path: [`${api}users/login`, `${api}users/register`],
  });
};

module.exports = authJwt;
