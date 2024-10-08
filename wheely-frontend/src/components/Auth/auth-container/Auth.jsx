import React from "react";

import authImg from "../../../assets/authImgs/front.jpg";

import { Link, Outlet, NavLink } from "react-router-dom";

import { useMyAppContext } from "../../../context/myAppContext";

const Auth = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className="flex justify-center items-center relative">
      <div
        className={`h-full w-full ${
          darkMode ? "bg-gray-950" : "bg-slate-200"
        } flex`}
      >
        <div className="w-[55%] p-12 space-y-10">
          <div className="w-full">
            <Link
              to="../"
              className="w-fit p-2 m-4 gradient-text rounded-lg flex items-start absolute top-0 left-0"
            >
              Wheely
            </Link>
          </div>
          <div
            className={`w-full h-full flex flex-col items-center justify-center gap-2 rounded-xl ${
              darkMode ? "bg-gray-900" : "bg-slate-100"
            }`}
          >
            <div
              className={`w-5/6 flex items-center justify-center text-center ${
                darkMode && "text-slate-400"
              }`}
            >
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  isActive
                    ? "w-1/2 p-5 border-b-2 border-b-blue-500 hover:bg-slate-500 hover:bg-opacity-10"
                    : `w-1/2 p-5 border-b border-slate-500 border-opacity-40 hover:bg-slate-500 hover:bg-opacity-10`
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
                    : `w-1/2 p-5 border-b border-slate-500 border-opacity-40 hover:bg-slate-500 hover:bg-opacity-10`
                }
              >
                Sign Up
              </NavLink>
            </div>
            <Outlet />
          </div>
        </div>
        <div className="w-[45%] relative">
          <img
            src={authImg}
            alt=""
            className=" w-full h-full object-cover"
          />
          <div className="w-full h-full bg-black bg-opacity-30 absolute inset-0" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
