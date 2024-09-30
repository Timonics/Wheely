import React from "react";

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const SideBar = () => {
  const path = useLocation();
  const isSideBarActive = Boolean(path.pathname.split("/")[3]);

  return (
    <>
      <div className="bg-slate-800 w-1/4 flex flex-col gap-3 text-slate-300 py-4 overflow-auto no-scrollbar relative text-xs">
        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive
              ? "transition scale-110 ease-in-out duration-1000 bg-blue-950 text-center p-3"
              : "bg-gray-700 transition ease-in-out mx-4 duration-500 hover:bg-gray-500 p-3 text-center"
          }
        >
          Users
        </NavLink>
        <NavLink
          to="vehicles"
          className={({ isActive }) =>
            isActive
              ? "transition scale-110 ease-in-out duration-1000 bg-blue-950 text-center p-3"
              : "bg-gray-700 transition ease-in-out mx-4 duration-500 hover:bg-gray-500 p-3 text-center"
          }
        >
          Vehicles
        </NavLink>
        <NavLink
          to="roles"
          className={({ isActive }) =>
            isActive
              ? "transition scale-110 ease-in-out duration-1000 bg-blue-950 text-center p-3"
              : "bg-gray-700 transition ease-in-out mx-4 duration-500 hover:bg-gray-500 p-3 text-center"
          }
        >
          Roles
        </NavLink>
        <NavLink
          to="bookings"
          className={({ isActive }) =>
            isActive
              ? "transition scale-110 ease-in-out duration-1000 bg-blue-950 text-center p-3"
              : "bg-gray-700 transition ease-in-out mx-4 duration-500 hover:bg-gray-500 p-3 text-center"
          }
        >
          Bookings
        </NavLink>
        <div className="absolute bottom-0 left-0 flex flex-col text-center w-full py-4 gap-3">
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive
                ? "transition mx-4 rounded-lg ease-in-out duration-500 bg-blue-400 text-center p-3"
                : "bg-gray-700 transition rounded-lg ease-in-out mx-4 duration-500 hover:bg-gray-500 p-3 text-center"
            }
          >
            Settings
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive
                ? "transition mx-4 rounded-lg ease-in-out duration-500 bg-blue-400 text-center p-3"
                : "bg-gray-700 transition rounded-lg ease-in-out mx-4 duration-500 hover:bg-gray-500 p-3 text-center"
            }
          >
            Admin Profile
          </NavLink>
        </div>
      </div>
      <div className="w-3/4 bg-gray-700">
        {isSideBarActive ? (
          <Outlet />
        ) : (
          <div className="h-full flex flex-col justify-center items-center text-center  font-bold  gap-7">
            <h1 className="text-blue-400 text-3xl">
              <span className="gradient-text text-5xl">Central hub</span> for
              overseeing the platform and maintaining seemless operations and
              oversight.
            </h1>
            <div className="flex gap-5">
              <Link
                to="profile"
                className="p-2 bg-blue-950 shadow-xl text-blue-400 w-[100px] rounded-md shadow-slate-900"
              >
                Profile
              </Link>
              <Link
                to="settings"
                className="p-2 bg-blue-950 shadow-xl text-blue-400 w-[100px] rounded-md shadow-slate-900"
              >
                Settings
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
