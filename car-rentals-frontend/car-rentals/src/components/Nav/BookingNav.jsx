import React from "react";

import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import { useMyAppContext } from "../../context/myAppContext";

const BookingNav = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div
      className={`${
        darkMode && "text-slate-400"
      } flex justify-between items-center py-2 px-5`}
    >
      <div>
        <Link
          to="../"
          className={`${
            darkMode ? "shadow-none" : "shadow-slate-300"
          } w-fit p shadow-xl rounded-lg flex items-start`}
        >
          Wheely
        </Link>
      </div>
      <div className="flex gap-10 items-center mr-4">
        <Link
          to="../auth"
          className={`${darkMode && "text-slate-400"} text-gray-950 font-bold`}
        >
          Log In
        </Link>
        <Link
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
