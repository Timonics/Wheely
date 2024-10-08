import React from "react";

import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import { useMyAppContext } from "../../context/myAppContext";
import NavPopOver from "./NavPopOver";

const BookingNav = () => {
  const { darkMode, userProfile } = useMyAppContext();
  return (
    <div
      className={`${
        darkMode && "text-slate-400"
      } flex justify-between items-center py-2 px-5`}
    >
      <div>
        <Link
          to=".."
          className={`font-bold ${
            darkMode ? "text-blue-950" : "gradient-text"
          } rounded-lg flex items-start`}
        >
          Wheely
        </Link>
      </div>
      <div className="flex gap-10 items-center mr-4">
        {!userProfile ? (
          <Link
            to="../auth"
            className={`${
              darkMode && "text-slate-400"
            } text-gray-950 font-bold`}
          >
            Log In
          </Link>
        ) : (
          <NavPopOver />
        )}
        <Link
          to="../bookings"
          className={`${
            darkMode && "text-gray-950"
          } py-3 px-5 bg-blue-400 border-4 border-blue-300 border-opacity-75 rounded-lg font-bold`}
        >
          Book a Ride
        </Link>
        <DarkMode />
      </div>
    </div>
  );
};

export default BookingNav;
