import React from "react";
import { Link } from "react-router-dom";
import { useMyAppContext } from "../../context/myAppContext";

const Hero = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className="h-full flex">
      <div className="w-3/5 p-8 flex flex-col gap-4 h-full space-y-3">
        <div className="space-y-2">
          <h1
            className={`text-5xl font-bold text-gray-900 ${
              darkMode && "text-slate-300"
            }`}
          >
            Welcome to{" "}
            <span className="gradient-text text-6xl">
              Wheely
            </span>
          </h1>
          <p
            className={`text-xl font-semibold ${darkMode && "text-slate-400"}`}
          >
            Seamless, fast, and flexible car rentals.
          </p>
        </div>
        <p
          className={`${
            darkMode && "text-slate-400"
          } text-sm`}
        >
          Your go-to platform for renting cars or sharing yours. Whether you're
          looking for a ride or want to earn by renting out your car, Wheely has
          you covered!
        </p>
        <div className="flex space-x-5 items-center">
          <Link
            to="bookings"
            className="py-2 px-4 bg-blue-400 rounded-lg shadow-2xl"
          >
            Find your next ride
          </Link>
          <Link
            className={`${
              darkMode && "bg-slate-400"
            } py-2 px-4 shadow-2xl rounded-lg bg-slate-50 font-bold`}
          >
            List your car
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
