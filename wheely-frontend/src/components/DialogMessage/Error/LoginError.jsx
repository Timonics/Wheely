import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMyAppContext } from "../../../context/myAppContext";

const LoginError = () => {
  const { darkMode } = useMyAppContext();
  return (
      <div
        className={`p-5 flex flex-col items-center justify-center ${
          darkMode ? "bg-slate-900" : "bg-slate-200"
        } w-[400px] gap-5 rounded-xl z-50`}
      >
        <h1
          className={`font-semibold ${
            darkMode ? "text-blue-300" : "text-blue-950"
          } text-lg text-center`}
        >
          You need to Log in/Sign up to{" "}
          <span className="gradient-text text-xl">Wheely</span> to list your
          car.
        </h1>
        <hr
          className={`w-full ${
            darkMode ? "border-slate-400/15" : "border-black/15"
          }`}
        />
        <div className="flex gap-10 text-sm text-center">
          <Link
            to="../"
            className={`p-3 font-medium transition hover:bg-blue-400 hover:text-gray-950 ease-in-out duration-500 w-[120px] rounded-xl ${darkMode ? "bg-slate-500" : "bg-slate-300"}`}
          >
            Go to Home
          </Link>
          <Link
            to="../auth"
            className={`p-3 font-medium transition hover:bg-blue-400 hover:text-gray-950 ease-in-out duration-500 w-[120px] rounded-xl ${darkMode ? "bg-slate-500" : "bg-slate-300"}`}
          >
            Go to Login
          </Link>
        </div>
      </div>
  );
};

export default LoginError;
