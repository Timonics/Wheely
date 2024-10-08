import React, { useEffect, useState } from "react";

import { NavLink, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="m-4 p-2 flex gap-5 text-sm justify-around items-center rounded-full bg-blue-400">
        <NavLink
          end
          to=""
          className={({ isActive }) =>
            isActive
              ? "scale-125 opacity-95 font-bold text-blue-950"
              : "transition duration-500 hover:scale-125 opacity-75"
          }
        >
          All Users
        </NavLink>
        {/* <NavLink
          to="add-user"
          className={({ isActive }) =>
            isActive
              ? "scale-125 opacity-95 font-bold text-blue-950"
              : "transition duration-500 hover:scale-125 opacity-75"
          }
        >
          Add New User
        </NavLink> */}
        <NavLink
          to="update-user/1"
          className={({ isActive }) =>
            isActive
              ? "scale-125 opacity-95 font-bold text-blue-950"
              : "transition duration-500 hover:scale-125 opacity-75"
          }
        >
          Update User Info
        </NavLink>
        <NavLink
          to="delete-user/1"
          className={({ isActive }) =>
            isActive
              ? "scale-125 opacity-95 font-bold text-blue-950"
              : "transition duration-500 hover:scale-125 opacity-75"
          }
        >
          Delete User
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
