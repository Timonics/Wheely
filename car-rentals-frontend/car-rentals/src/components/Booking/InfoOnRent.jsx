import React from "react";

import bookMap from "../../assets/bookingImgs/booking-map.webp";

import { FaRegCalendarCheck } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { useMyAppContext } from "../../context/myAppContext";

const InfoOnRent = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div
      className={`flex flex-col gap-10 p-10 h-[500px] ${
        darkMode && "bg-slate-700"
      }`}
    >
      <h1
        className={`${
          darkMode ? "text-blue-300" : "text-blue-950"
        } text-4xl font-bold text-center`}
      >
        Renting a car has never been easier
      </h1>
      <div className="flex gap-5 items-center">
        <div className="w-1/2 h-[320px]">
          <img
            src={bookMap}
            alt=""
            className={`object-cover h-full w-full rounded-lg ${
              darkMode ? "opacity-65" : ""
            }`}
          />
        </div>
        <div className="w-1/2">
          <ul
            className={`${
              darkMode
                ? "text-blue-300 rounded-lg bg-slate-950 bg-opacity-70"
                : "text-blue-950"
            } flex flex-col gap-5 p-5`}
          >
            <li className="flex gap-3 items-center">
              <span className="justify-center">
                <FaRegCalendarCheck size={24} />
              </span>
              <p className="font-bold text-lg">
                Free cancellation{" "}
                <span className={`${darkMode ? "opacity-50" : "opacity-85"} font-normal text-base`}>
                  up to 24 hours before pickup
                </span>
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1">
                <FaGlobeAmericas size={24} />
              </span>
              <p className="font-bold text-lg">
                Access a Global Fleet of Cars,{" "}
                <span
                  className={`${
                    darkMode ? "opacity-50" : "opacity-85"
                  } font-normal text-base`}
                >
                  Wherever you are in the world, our extensive network has the
                  right car waiting for you.
                </span>
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1">
                <FaHeadset size={24} />
              </span>
              <p className="font-bold text-lg">24/7 customer support</p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1">
                <FaDollarSign size={24} />
              </span>
              <p className="text-lg font-bold">
                Affordable Options for Every Adventure,{" "}
                <span
                  className={`${
                    darkMode ? "opacity-50" : "opacity-85"
                  } font-normal text-base`}
                >
                  whether you need a car for a few hours or several days, our
                  flexible rentals cater to all your travel needs.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoOnRent;
