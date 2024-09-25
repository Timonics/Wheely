import React from "react";

import { Link } from "react-router-dom";

import listImage from "../../assets/EarnWithWheely/listImage.jpg";

import { FaRegUser } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useMyAppContext } from "../../context/myAppContext";

const ListSection = () => {
  const {darkMode} = useMyAppContext()
  const liststeps = [
    {
      icon: <FaRegUser size={24} />,
      step: "Sign Up",
      desc: "Create an account or log in to your Wheely profile.",
    },
    {
      icon: <FaClipboardCheck size={24} />,
      step: "List Your Car",
      desc: "Enter your car details, set your price, and upload photos.",
    },
    {
      icon: <FaDollarSign size={24} />,
      step: "Start Earning",
      desc: "Approve bookings, and start earning as soon as your car is rented.",
    },
  ];

  const stepsElements = liststeps.map((liststep, i) => (
    <li
      key={i}
      className="flex flex-col items-center px-4 py-6 w-1/3 rounded-lg gap-2 bg-slate-900 text-blue-400 shadow-lg shadow-blue-40"
    >
      {liststep.icon}
      <h1 className="font-bold">{liststep.step}</h1>
      <h1 className="text-sm text-center opacity-50">{liststep.desc}</h1>
    </li>
  ));

  return (
    <div className="h-full px-2 py-10 ">
      <div className={`${darkMode && "shadow-none"} h-full rounded-lg bg-gray-950 flex max-md:flex-col max-md:p-0 p-10 gap-4 shadow-lg shadow-gray-500`}>
        <div className="max-md:w-full max-md:h-[400px] w-2/5 rounded-lg max-md:rounded-b-none h-dvl bg-gray-700">
          <img
            src={listImage}
            alt="Earn-with-wheely"
            className="object-cover h-full rounded-lg opacity-90"
          />
        </div>
        <div className="w-3/5 max-md:w-full p-2 max-md:p-5 text-slate-200 space-y-2 max-md:flex flex-col max-md:items-center">
          <h1 className="text-4xl font-bold">
            Earn with <span className="text-5xl text-blue-400">Wheely</span>
          </h1>
          <p className="text-sm max-md:text-center opacity-75">
            Got a car that’s sitting idle? Turn it into a source of income with
            Wheely! Join our trusted community of car owners and start earning
            by sharing your vehicle. It’s simple, secure, and flexible.
          </p>
          <ul className="flex p-4 gap-4">{stepsElements}</ul>
          <div className="flex flex-col items-center gap-2 border-4 w-fit p-3 rounded-lg border-blue-400 border-opacity-75">
            <p>Ready to get started?</p>
            <Link
              to="rent-your-car"
              className="flex items-center gap-3 py-2 px-4 rounded-full bg-blue-400 bg-opacity-75 w-fit text-gray-950 font-black transition duration-500 ease-in-out hover:bg-slate-900 hover:text-blue-400"
            >
              List your car today <FaRegArrowAltCircleRight />
            </Link>
          </div>
          <p>Join Wheely and turn your car into a profitable asset.</p>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
