import React, { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useMyAppContext } from "../../context/myAppContext";

const Signup = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUserProfile, googleAuthIn } =
    useMyAppContext();
  const db_url = import.meta.env.VITE_DB_URL;
  const [isEmailReg, setIsEmailReg] = useState(false);

  const handleClick = () => {
    setIsEmailReg(true);
  };

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "renter",
    phone: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${db_url}users/register`,
        registerData
      );

      setIsAuthenticated(true);
      setUserProfile(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error.response.data);
    }
  };
  return (
    <div className="p-4 flex flex-col items-center justify-center w-full gap-5">
      <h1 className="text-2xl font-bold text-blue-600">
        Create your Wheely account
      </h1>
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
      <p className="text-sm opacity-75">or</p>
      {!isEmailReg ? (
        <div
          className="flex gap-4 items-center justify-center rounded-lg text-xl border-4 border-slate-400 p-3 w-full text-opacity-75 text-gray-950 font-bold bg-slate-200 cursor-pointer"
          onClick={handleClick}
        >
          <IoMailOutline size={24} /> Sign Up with Email
        </div>
      ) : (
        <form
          className="w-full flex flex-col gap-3 bg-slate-300 rounded-lg p-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={registerData.name}
            placeholder="Name"
            onChange={handleChange}
            className="outline-none p-3 border-b-2 border-b-blue-400"
          />
          <input
            type="email"
            name="email"
            value={registerData.email}
            placeholder="Email"
            onChange={handleChange}
            className="outline-none p-3 border-b-2 border-b-blue-400"
          />
          <input
            type="password"
            name="password"
            value={registerData.password}
            placeholder="Password"
            onChange={handleChange}
            className="outline-none p-3 border-b-2 border-b-blue-400"
          />
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm password"
            onChange={handleChange}
            className="outline-none p-3 border-b-2 border-b-blue-400"
          />
          <div className="w-full flex gap-2">
            <select
              name="role"
              value={registerData.role}
              onChange={handleChange}
              className="w-1/3 flex text-center font-bold"
            >
              <option value="renter">Renter</option>
              <option value="owner">Owner</option>
            </select>
            <input
              type="text"
              name="phone"
              value={registerData.phone}
              placeholder="Phone Number"
              onChange={handleChange}
              className="outline-none p-3 border-b-2 border-b-blue-400 w-2/3"
            />
          </div>
          <button
            type="submit"
            className="p-3 rounded-lg bg-blue-400 font-bold mt-4"
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
