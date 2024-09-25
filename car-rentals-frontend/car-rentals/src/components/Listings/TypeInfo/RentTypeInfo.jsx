import React from "react";

import { Link, NavLink, Outlet } from "react-router-dom";
import { useMyAppContext } from "../../../context/myAppContext";

const RentTypeInfo = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className={`bg-slate-200 ${darkMode && "bg-slate-900"}`}>
      <div className={`flex text-blue-700 justify-center text-center font-bold opacity-65 border-b border-black border-opacity-15 ${darkMode && "border-blue-900"}`}>
        <NavLink
          to=""
          end
          className={({ isActive }) => {
            return `w-1/2 p-5 hover:bg-opacity-10 hover:bg-slate-500
            ${isActive ? "border-b-[3px] border-b-blue-700" : "border-b"} ${
              darkMode && "text-blue-300 border-b-blue-300"
            }`;
          }}
        >
          WITH WHEELY CONNECT
        </NavLink>
        <NavLink
          to="wheely_standard"
          className={({ isActive }) => {
            return `w-1/2 p-5 hover:bg-opacity-10 hover:bg-slate-500
            ${
              isActive ? "border-b-[3px] border-b-blue-700" : "border-b"
            } ${darkMode && "text-blue-300 border-b-blue-300"}`;
          }}
        >
          WITH WHEELY
        </NavLink>
      </div>
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default RentTypeInfo;
