import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const UserProfile = () => {
  return (
    <div className="p-4 flex gap-10">
      <div className="flex flex-col gap-5 w-1/4 p-4 rounded-xl">
        <NavLink
          end
          to="../profile"
          className={({ isActive }) =>
            `font-medium p-2 rounded-lg ${
              isActive
                ? "bg-blue-400 text-slate-100 font-bold"
                : "hover:bg-slate-200 bg-slate-200/50"
            } `
          }
        >
          My profile
        </NavLink>
        <NavLink
          to="edit"
          className={({ isActive }) =>
            `font-medium p-2 rounded-lg ${
              isActive
                ? "bg-blue-400 text-slate-100 font-bold"
                : "hover:bg-slate-200 bg-slate-200/50"
            } `
          }
        >
          Edit your profile
        </NavLink>
        <NavLink
          to="payments_method"
          className={({ isActive }) =>
            `font-medium p-2 rounded-lg ${
              isActive
                ? "bg-blue-400 text-slate-100 font-bold"
                : "hover:bg-slate-200 bg-slate-200/50"
            } `
          }
        >
          Account settings
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            `font-medium p-2 rounded-lg ${
              isActive
                ? "bg-blue-400 text-slate-100 font-bold"
                : "hover:bg-slate-200 bg-slate-200/50"
            } `
          }
        >
          Payments method
        </NavLink>
      </div>
      <div className="w-3/4 rounded-xl bg-slate-200/50">
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfile;
