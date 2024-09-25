import React from "react";

import authImg from "../../../assets/authImgs/login.jpg";

import { Link, Outlet, NavLink } from "react-router-dom";

const Auth = () => {
  return (
    <div className=" p-5 flex justify-center items-center">
      <div className="h-full w-11/12 bg-slate-50 flex rounded-xl shadow-2xl shadow-gray-500">
        <div className="w-1/2 p-5">
          <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-2">
            <div className="w-full">
              <Link
                to="../"
                className="w-fit p-2 shadow-xl shadow-slate-300 rounded-lg flex items-start"
              >
                Wheely
              </Link>
            </div>
            <div className="w-5/6 flex items-center justify-center text-center">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  isActive
                    ? "w-1/2 p-5 border-b-2 border-b-blue-500 hover:bg-slate-500 hover:bg-opacity-10"
                    : "w-1/2 p-5 border-b hover:bg-slate-500 hover:bg-opacity-10"
                }
              >
                Log In
              </NavLink>
              <NavLink
                to="register"
                end
                className={({ isActive }) =>
                  isActive
                    ? "w-1/2 p-5 border-b-2 border-b-blue-500 hover:bg-slate-500 hover:bg-opacity-10"
                    : "w-1/2 p-5 border-b hover:bg-slate-500 hover:bg-opacity-10"
                }
              >
                Sign Up
              </NavLink>
            </div>
            <Outlet />
          </div>
        </div>
        <div className="w-1/2 h-dvl bg-slate-500 rounded-r-xl">
          <img
            src={authImg}
            alt=""
            className=" w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
