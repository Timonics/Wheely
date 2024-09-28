import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useMyAppContext } from "../../context/myAppContext";

const DashboardList = () => {
  const { darkMode } = useMyAppContext();
  return (
    <>
      <div
        className={`p-2 flex justify-around rounded-lg gap-10 ${
          darkMode
            ? "bg-slate-700 text-slate-400"
            : "bg-slate-200 text-slate-700"
        } my-5 mx-8 `}
      >
        <NavLink
          end
          to=""
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold transition scale-125 ease-in-out duration-500"
              : "transition ease-in-out duration-500 hover:text-blue-500 "
          }
        >
          My Fleet
        </NavLink>
        <NavLink
          to="my-bookings"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold transition scale-125 ease-in-out duration-500"
              : "transition ease-in-out duration-500 hover:text-blue-500 "
          }
        >
          Bookings
        </NavLink>
        <NavLink
          to="my-earnings"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold transition scale-125 ease-in-out duration-500"
              : "transition ease-in-out duration-500 hover:text-blue-500 "
          }
        >
          Earnings
        </NavLink>
        <NavLink
          to="payout"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold transition scale-125 ease-in-out duration-500"
              : "transition ease-in-out duration-500 hover:text-blue-500 "
          }
        >
          Payout
        </NavLink>
      </div>
      <div
        className={`h-[450px] ${
          darkMode ? "bg-gray-800" : "bg-slate-200"
        } rounded-lg my-5 mx-8`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default DashboardList;
