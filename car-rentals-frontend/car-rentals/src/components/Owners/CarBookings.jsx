import React from "react";
import { useMyAppContext } from "../../context/myAppContext";

import { FaCalendarCheck } from "react-icons/fa"

import { Link } from "react-router-dom";

const CarBookings = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className="h-[600px] flex flex-col">
    <div
      className={`h-1/4 rounded-t-xl shadow-xl flex items-center p-10 gap-5 ${
        darkMode && "bg-gray-900"
      } `}
    >
      <FaCalendarCheck size={36} className="text-blue-400"/>
      <h1 className="gradient-text h-[70px] text-6xl ">My Bookings</h1>
    </div>
    <div className="shadow-2xl rounded-b-xl h-full overflow-y-auto no-scrollbar space-y-12 py-10 px-7">
    {[...Array(5).keys()].map((items) => (
      <div className="flex flex-col">
        <Link className="h-[220px] w-full flex rounded-xl shadow-2xl bg-blue-400 bg-opacity-50 p-4">
        <img src="" alt="" className="h-full w-[300px] rounded-xl bg-slate-500"/>
        </Link>
      </div>
    ))}
  </div>
  </div>
  );
};

export default CarBookings;
