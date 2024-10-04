import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";

/* import { IoMenu } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"; */
import DarkMode from "../DarkMode/DarkMode";
import { useMyAppContext } from "../../context/myAppContext";

const Nav = () => {
  const { darkMode, userProfile, isAuthenticated } = useMyAppContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  /* const handleToogleMenuIsOpen = () => {
    setMenuIsOpen((prevState) => !prevState);
  }; */

  return (
    <div className="relative">
      {/* <div className="absolute top-0 right-0 z-50 flex gap-5">
        {!menuIsOpen && (
          <IoMenu className="text-2xl" onClick={handleToogleMenuIsOpen} />
        )}
        <div className={`${menuIsOpen && "blur-sm"}`}>
          <DarkMode />
        </div>
      </div> */}

      {/* <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
          menuIsOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleToogleMenuIsOpen}
      ></div> */}

      {/* <div
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
              to="../rent-your-car"
              className="flex justify-between items-center p-3"
            >
              Rent out your car <FaCar />
            </Link>
            <Link className="flex  justify-between items-center p-3">
              Ask your Questions <FaRegQuestionCircle />
            </Link>
          </div>
        </div>
      </div> */}

      <div className={`flex justify-between items-center `}>
        <Link to="/" className="italic">
          Wheely
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
            <Popover className="">
              <PopoverButton className="flex">
              {userProfile.picture ? (
                    <img
                      src={userProfile.picture}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full opacity-85  shadow-2xl bg-slate-500"
                    />
                  ) : (
                    <h1 className="text-xl font-bold w-12 h-12 flex items-center justify-center border-black bg-slate-200 rounded-full">
                      {userProfile.name.split(" ").map((name) => name[0]).join("")}
                    </h1>
                  )}
              </PopoverButton>
              <PopoverBackdrop className="fixed inset-0 bg-black/30" />
              <PopoverPanel
                anchor={{ to: "bottom", gap: "13px" }}
                className={`flex flex-col px-5 py-4 rounded-xl w-[350px] gap-2 ${
                  darkMode ? "bg-gray-600" : "bg-slate-100"
                }`}
              >
                <div className="flex gap-5 py-2 items-center">
                  {userProfile.picture ? (
                    <img
                      src={userProfile.picture}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full shadow-2xl bg-slate-500"
                    />
                  ) : (
                    <h1 className="text-xl font-bold border w-12 h-12 flex items-center justify-center bg-slate-200 rounded-full">
                      {userProfile.name.split(" ").map((name) => name[0])}
                    </h1>
                  )}
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-semibold">
                      {userProfile.name}
                    </h1>
                    <Link className="underline text-sm">Edit your profile</Link>
                  </div>
                </div>
                <hr className="px-4 border-black/15" />
                {userProfile.role == "owner" && (
                  <>
                    <Link
                      to={`/owners-dashboard/${userProfile._id}`}
                      className="flex flex-col gap-3 border p-2 rounded-xl bg-blue-200 transition hover:scale-105 hover:text-blue-950 hover:font-bold ease-in-out duration-500"
                    >
                      Dashboard
                    </Link>
                    <hr className="px-4 border-black/15" />
                  </>
                )}
                <Link className="flex flex-col gap-3 font-montserrat">
                  Verify your profile
                  <hr className="px-4 border-black/15" />
                </Link>
                <Link className="flex flex-col gap-3 font-montserrat">
                  Rentals
                  <hr className="px-4 border-black/15" />
                </Link>
                <Link className="flex flex-col gap-3 font-montserrat">
                  Payments
                  <hr className="px-4 border-black/15" />
                </Link>
                <div className="p-3 font-montserrat bg-slate-300 rounded-xl flex flex-col gap-3">
                  <Link>
                    Become an owner{" "}
                    <span className="text-xs">(list your car)</span>{" "}
                  </Link>
                  <hr className="px-4 border-black/15" />
                  <Link>Log out</Link>
                </div>
              </PopoverPanel>
            </Popover>
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
