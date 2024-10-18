import React from "react";

import { Link } from "react-router-dom";

import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import { useMyAppContext } from "../../context/myAppContext";

const NavPopOver = () => {
  const { userProfile, darkMode } = useMyAppContext();
  return (
    <Popover>
      <PopoverButton className="flex">
        {userProfile.picture ? (
          <img
            src={userProfile.picture}
            alt=""
            className="object-cover w-12 h-12 rounded-full opacity-85  shadow-2xl bg-slate-500"
          />
        ) : (
          <h1 className="text-xl font-bold w-12 h-12 flex items-center justify-center border-black bg-slate-200 rounded-full">
            {userProfile.name
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </h1>
        )}
      </PopoverButton>
      <PopoverBackdrop className="fixed inset-0 bg-black/30" />
      <PopoverPanel
        anchor={{ to: "bottom", gap: "13px" }}
        className={`flex flex-col px-5 py-4 rounded-xl w-[350px] gap-2 z-50 ${
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
            <Link to="../dashboard/profile" className="text-xl font-semibold">{userProfile.name}</Link>
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
        <Link to="../dashboard/rentals" className="flex flex-col gap-3 font-montserrat">
          Rentals
          <hr className="px-4 border-black/15" />
        </Link>
        <Link to="../dashboard/payments" className="flex flex-col gap-3 font-montserrat">
          Payments
          <hr className="px-4 border-black/15" />
        </Link>
        <div className="p-3 font-montserrat bg-slate-300 rounded-xl flex flex-col gap-3">
          {userProfile.role == "renter" && (
            <>
              <Link>
                Become an owner <span className="text-xs">(list your car)</span>{" "}
              </Link>
              <hr className="px-4 border-black/15" />
            </>
          )}
          <div className="cursor-pointer">Log out</div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default NavPopOver;
