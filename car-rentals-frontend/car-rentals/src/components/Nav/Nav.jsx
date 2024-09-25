import React, { useState } from "react";

import { Link } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";
import { useMyAppContext } from "../../context/myAppContext";

const Nav = () => {
  const { darkMode } = useMyAppContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleToogleMenuIsOpen = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="md:hidden absolute top-0 right-0 z-50 flex gap-5">
        {!menuIsOpen && (
          <IoMenu className="text-2xl" onClick={handleToogleMenuIsOpen} />
        )}
        <div className={`${menuIsOpen && "blur-sm"}`}>
          <DarkMode />
        </div>
      </div>

      {/* Blurs out the whole page once menu btn is clicked */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
          menuIsOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleToogleMenuIsOpen}
      ></div>

      <div
        className={`fixed w-full bottom-0 left-0 transform transition-transform duration-500 ease-in-out bg-white p-6 shadow-2xl rounded-t-2xl ${
          menuIsOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className=" flex flex-col gap-5">
          <Link
            to="auth"
            className="text-center border p-1 rounded-md bg-blue-400"
          >
            Log In
          </Link>
          <div className="flex flex-col border rounded-lg">
            <Link
              to="rent-your-car"
              className="flex justify-between items-center p-3"
            >
              Rent out your car <FaCar />
            </Link>
            <Link className="flex  justify-between items-center p-3">
              Ask your Questions <FaRegQuestionCircle />
            </Link>
          </div>
        </div>
      </div>

      <div className={`flex justify-between items-center `}>
        <Link className="italic">Wheely</Link>
        <div className="max-md:hidden gap-8 flex mr-4 items-center">
          <Link
            to="auth"
            className={`rounded-md  ${
              darkMode ? "text-gray-400" : "text-gray-900"
            } font-bold`}
          >
            Log in
          </Link>
          <Link
            to="rent-your-car"
            className="border-4 border-blue-400 text-blue-400 font-bold py-2 px-4 rounded-full"
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
