import React, { useState } from "react";

import { Link } from "react-router-dom";

import DarkMode from "../DarkMode/DarkMode";
import NavPopOver from "./NavPopOver";
import { useMyAppContext } from "../../context/myAppContext";

const Nav = () => {
  const { darkMode, isAuthenticated } = useMyAppContext();

  return (
    <div className="relative">
      <div className={`flex justify-between items-center `}>
        <Link to="/" className="p-2 rounded-lg bg-gray-950 shadow-lg shadow-gray-400">
          <p className="gradient-text font-montserrat font-bold">wheely</p>
        </Link>
        <div className="gap-8 flex mr-4 items-center">
          {!isAuthenticated ? (
            <Link
              to="../auth"
              className={`rounded-md  ${
                darkMode ? "text-gray-400" : "text-gray-900"
              } font-bold`}
            >
              Log in
            </Link>
          ) : (
            <NavPopOver />
          )}
          <Link
            to="../rent-your-car"
            className="border-4 border-blue-400 gradient-text font-bold py-2 px-5 rounded-full transition hover:scale-110 ease-in-out duration-500"
          >
            Rent your Car
          </Link>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Nav;
