import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useMyAppContext } from "../../context/myAppContext";

const DashboardList = () => {
  const { darkMode } = useMyAppContext();
  return (
    <>
      <div
        className={`p-2 flex justify-around rounded-lg gap-10 ${
          darkMode ? "bg-slate-700" : "bg-slate-200"
        } my-5 mx-8 `}
      >
        <NavLink end to="">
          My Fleet
        </NavLink>
        <NavLink to="my-bookings">Bookings</NavLink>
        <NavLink to="my-earnings">Earnings</NavLink>
        <NavLink to="payout">Payout</NavLink>
      </div>
      <div className={`h-[450px] ${darkMode ? "bg-gray-800" : "bg-slate-200"} rounded-lg my-5 mx-8`}>
        <Outlet />
      </div>
    </>
  );
};

export default DashboardList;
