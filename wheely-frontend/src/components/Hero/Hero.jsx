import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyAppContext } from "../../context/myAppContext";

import LoginError from "../DialogMessage/Error/LoginError";
import RoleError from "../DialogMessage/Error/RoleError";

const Hero = () => {
  const navigate = useNavigate();
  const { darkMode, isAuthenticated, userProfile } = useMyAppContext();
  const [showError, setShowError] = useState(false);
  const [showRoleError, setShowRoleError] = useState(false);

  const handleListingLink = () => {
    if (!isAuthenticated) {
      setShowError(true);
      return;
    }
    if (userProfile && userProfile.role === "renter") {
      setShowRoleError(true);
      return;
    }

    navigate("/list-your-car");
  };

  return (
    <div className="h-full flex">
      <div className="w-3/5 p-8 flex flex-col gap-4 h-full space-y-3 justify-center pb-48">
        <div className="space-y-2">
          <h1
            className={`text-6xl font-light text-gray-900 ${
              darkMode && "text-slate-300"
            }`}
          >
            Welcome to <span className="gradient-text text-7xl">Wheely</span>
          </h1>
          <p
            className={`text-xl font-semibold ${darkMode && "text-slate-400"}`}
          >
            Seamless, fast, and flexible car rentals.
          </p>
        </div>
        <p
          className={`${darkMode && "text-slate-400"} text-sm font-montserrat`}
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
          <div
            onClick={handleListingLink}
            className={`${
              darkMode && "bg-slate-400"
            } py-2 px-4 shadow-2xl rounded-lg bg-slate-50 font-semibold cursor-pointer`}
          >
            List your car
          </div>
        </div>
      </div>
      {showError && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowError(false)}
        >
          <LoginError />
        </div>
      )}
      {showRoleError && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowRoleError(false)}
        >
          <RoleError />
        </div>
      )}
    </div>
  );
};

export default Hero;
