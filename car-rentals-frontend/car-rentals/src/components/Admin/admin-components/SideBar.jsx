import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="bg-slate-900 w-1/4 flex flex-col gap-3 text-slate-300 py-4 overflow-x-auto no-scrollbar relative rounded-l-lg">
        <NavLink
          end
          to="users"
          className={({ isActive }) =>
            isActive
              ? "transition scale-110 ease-in-out duration-1000 bg-blue-950 text-center p-3"
              : "bg-gray-700 transition ease-in-out mx-4 duration-500 hover:bg-gray-800 p-3 text-center"
          }
        >
          Users
        </NavLink>
        <NavLink
          to="vehicles"
          className={({ isActive }) =>
            isActive
              ? "transition scale-110 ease-in-out duration-1000 bg-blue-950 text-center p-3"
              : "bg-gray-700 transition ease-in-out mx-4 duration-500 hover:bg-gray-800 p-3 text-center"
          }
        >
          Vehicles
        </NavLink>
        <NavLink
          to="user-roles"
          className={({ isActive }) =>
            isActive
              ? "transition scale-110 ease-in-out duration-1000 bg-blue-950 text-center p-3"
              : "bg-gray-700 transition ease-in-out mx-4 duration-500 hover:bg-gray-800 p-3 text-center"
          }
        >
          Roles
        </NavLink>
        <NavLink
          to="bookings"
          className={({ isActive }) =>
            isActive
              ? "transition scale-110 ease-in-out duration-1000 bg-blue-950 text-center p-3"
              : "bg-gray-700 transition ease-in-out mx-4 duration-500 hover:bg-gray-800 p-3 text-center"
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
                : "bg-gray-700 transition rounded-lg ease-in-out mx-4 duration-500 hover:bg-gray-800 p-3 text-center"
            }
          >
            Settings
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive
                ? "transition mx-4 rounded-lg ease-in-out duration-500 bg-blue-400 text-center p-3"
                : "bg-gray-700 transition rounded-lg ease-in-out mx-4 duration-500 hover:bg-gray-800 p-3 text-center"
            }
          >
            Admin Profile
          </NavLink>
        </div>
      </div>
      <div className="w-3/4 bg-gray-700 rounded-r-lg">
        <Outlet />
      </div>
    </>
  );
};

export default SideBar;
