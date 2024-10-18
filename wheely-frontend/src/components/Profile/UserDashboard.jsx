import React from "react";
import Nav from "../Nav/Nav";
import { NavLink, Outlet } from "react-router-dom";
import SubFooter from "../Footer/SubFooter";

const UserDashboard = () => {
  return (
    <div>
      <div className="p-4">
        <Nav />
      </div>
      <div className="flex items-center justify-around">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            `relative text-center w-1/3 py-6 ${
              isActive
                ? "border-active font-bold"
                : "border-inactive font-medium hover:bg-slate-200/45"
            }`
          }
        >
          ACCOUNT
        </NavLink>
        <NavLink
          to="rentals"
          className={({ isActive }) =>
            `relative text-center w-1/3 py-6 ${
              isActive
                ? "border-active font-bold"
                : "border-inactive font-medium hover:bg-slate-200/45"
            }`
          }
        >
          RENTALS
        </NavLink>
        <NavLink
          to="payments"
          className={({ isActive }) =>
            `relative text-center w-1/3 py-6 ${
              isActive
                ? "border-active font-bold"
                : "border-inactive font-medium hover:bg-slate-200/45"
            }`
          }
        >
          PAYMENTS
        </NavLink>
      </div>
      <Outlet />
      <hr className="m-5 border-black/20"/>
      <SubFooter />
    </div>
  );
};

export default UserDashboard;
