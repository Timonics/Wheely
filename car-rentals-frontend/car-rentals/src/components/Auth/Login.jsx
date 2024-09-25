import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import axios from "axios";
import { useMyAppContext } from "../../context/myAppContext";

const Login = () => {
  const db_url = import.meta.env.VITE_DB_URL;
  const navigate = useNavigate();
  const {
    googleAuthIn,
    setIsAuthenticated,
    setUserProfile,
  } = useMyAppContext();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${db_url}users/login`, loginData);

      const userId = response.data.id;
      const token = response.data.token;

      const userData = await axios.get(`${db_url}users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setIsAuthenticated(true);
      setUserProfile(userData.data);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error.response.data);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center w-5/6 gap-5">
      <h1 className="text-2xl font-bold text-blue-600">
        Log in to your account
      </h1>
      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={loginData.email}
          placeholder="Email"
          onChange={handleChange}
          className="outline-none p-3 border-b-2 border-b-blue-400"
        />
        <input
          type="text"
          name="password"
          value={loginData.password}
          placeholder="Password"
          onChange={handleChange}
          className="outline-none p-3 border-b-2 border-b-blue-400"
        />
        <button type="submit" className="p-3 rounded-lg bg-blue-400 font-bold">
          Log In
        </button>
      </form>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-sm">
          Don't have a <span className="text-blue-400 font-bold">Wheely</span>{" "}
          account?{" "}
          <Link to="register" className="underline text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
        <Link to="" className="underline text-sm text-blue-600 font-semibold">
          Forgot Password?
        </Link>
      </div>
      <p className="text-sm opacity-75">or</p>
      <div className="flex flex-col items-center justify-center w-full gap-3 ">
        {[
          {
            id: 0,
            name: "Continue with Google",
            icon: <FaGoogle size={24} />,
            handleClick: googleAuthIn,
          },
          {
            id: 1,
            name: "Continue with Facebook",
            icon: <FaFacebook size={24} />,
          },
          {
            id: 2,
            name: "Continue with Apple",
            icon: <FaApple size={24} />,
          },
        ].map((item) => (
          <Link
            key={item.id}
            to=""
            style={{
              backgroundColor: item.color,
            }}
            className={`flex p-4 w-full items-center justify-center gap-4 rounded-lg ${
              item.id == 0 && "border-4 border-slate-300 bg-white"
            } ${item.id == 1 && "bg-blue-900 opacity-95 text-slate-200"}
             ${item.id == 2 && "bg-black opacity-90 text-slate-200"}`}
            onClick={item.handleClick}
          >
            {item.icon}
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Login;