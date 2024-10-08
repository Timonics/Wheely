import React from "react";

import featureImg from "../../assets/FeaturesImg/featuresImage.jpg";

import { IoCarSportSharp } from "react-icons/io5";
import { Ri24HoursLine } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMyAppContext } from "../../context/myAppContext";

const Features = () => {
  const { darkMode } = useMyAppContext();
  const featuresData = [
    {
      icon: <IoCarSportSharp size={24} />,
      title: "Wide Range of Vehicles",
      desc: "Wheely offers a diverse selection of vehicles to suit your every need, you'll find the perfect car at the right price.",
    },
    {
      icon: <Ri24HoursLine size={24} />,
      title: "Flexible Rental Options",
      desc: "Wheely adapts to your schedule. Rent a car for a few hours, a full day, or even for weeks at a time.",
    },
    {
      icon: <FaMoneyBills size={24} />,
      title: "List and Earn",
      desc: "Own a car? Wheely lets you monetize your idle vehicle by renting it out, and start earning effortlessly with our secure, easy-to-use platform.",
    },
  ];

  const featuresElements = featuresData.map((feature, i) => (
    <li key={i} className="flex space-x-5">
      <div className="text-blue-400">{feature.icon}</div>
      <div>
        <h1 className="font-semibold text-blue-950 text-xl">{feature.title}</h1>
        <p
          className={`text-sm  ${
            darkMode ? "opacity-85" : "opacity-90"
          } font-montserrat`}
        >
          {feature.desc}
        </p>
      </div>
    </li>
  ));

  return (
    <div className="h-full p-4">
      <div className="relative h-full flex p-5 max-md:p-0">
        <div
          className={`${
            darkMode && "bg-slate-500"
          } w-3/4 h-full bg-slate-200 rounded-lg shadow-2xl p-6 text-blue-950`}
        >
          <div className="w-4/5 h-full p-6 space-y-5">
            <h1 className="text-4xl font-semibold text-gray- max-md:text-center">
              Discover the Benefits of{" "}
              <span className="text-blue-400 font-bold">Wheely</span>
            </h1>
             <p
              className={`text-sm font-montserrat ${
                darkMode ? "opacity-95" : "opacity-90"
              }`}
            >
              Wheely is designed to provide you with a seamless car rental
              experience, whether you're looking to rent a car or earn by
              sharing your own.
            </p>
            <ul className="space-y-4">{featuresElements}</ul>
            <Link
              to=""
              className={`${
                darkMode && "text-blue-950 font-bold"
              } flex items-center gap-3 px-4 py-1 border-2 border-blue-400 text-blue-400 shadow-lg rounded-full w-fit max-md:w-full max-md:place-content-center hover:bg-blue-950 hover:text-blue-400 transition ease-in-out duration-500`}
            >
              Explore more features <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="flex w-1/4 items-center ">
          <div className="w-1/3 bg-slate-500 absolute right-10 h-5/6 z-50 rounded-lg shadow-slate-950 flex items-center justify-center">
            <img
              src={featureImg}
              alt=""
              className="object-cover h-full w-full rounded-lg z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
