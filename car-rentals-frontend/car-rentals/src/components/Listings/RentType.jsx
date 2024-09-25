import React from "react";

import { Link } from "react-router-dom";

import { RiTaxiWifiFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { useMyAppContext } from "../../context/myAppContext";

const RentType = () => {
  const { darkMode } = useMyAppContext();
  const rentType = [
    {
      head: "Without key exchange",
      headDesc: "Rent often and earn more",
      rentTypeIcon: <RiTaxiWifiFill size={24} />,
      rentType: "Wheely Connect",
      rentTypeDesc: "Drivers open your car from the app",
      descBeforeSpan: "No need to meet drivers. They ",
      descSpan: "book, locate and unlock",
      descAfterSpan: " your car from the app",
      subDescSpan: "We verify each driver's identity",
      subDescAfterSpan: " so your car always stays in good hands.",
    },
    {
      head: "Key exchange",
      headDesc: "Rent very occasionally",
      rentTypeIcon: <FaHandshake size={24} />,
      rentType: "Meet drivers",
      rentTypeDesc: "Hand over the keys every time",
      descSpan: "Meet drivers",
      descAfterSpan:
        " at each check-in and check-out to sign the rental agreement.",
      subDescSpan: "Suitable for car sharing",
      subDescAfterSpan: " outside of ",
      subDescSpanUnderline: " Wheely Connect eligible zones.",
    },
  ];
  const rentTypeElements = rentType.map((type) => (
    <div
      className={`${
        darkMode && "bg-slate-950 text-blue-400"
      } w-[30%] rounded-xl bg-slate-200 bordr border-black border-opacity-20 p-8 flex flex-col justify-center items-center gap-5`}
    >
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold">{type.head}</h2>
        <p className={`${darkMode && "opacity-45"} text-sm opacity-75`}>
          {type.headDesc}
        </p>
      </div>
      <div
        className={`${
          darkMode ? "bg-blue-500 text-gray-950" : "bg-blue-200"
        } p-4 rounded-lg flex gap-5 justify-center items-center`}
      >
        <div className="p-2 rounded-full bg-blue-600">{type.rentTypeIcon}</div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold">{type.rentType}</h3>
          <p className={`${darkMode ? "opacity-90" : "opacity-75"} text-[13px]`}>
            {type.rentTypeDesc}
          </p>
        </div>
      </div>
      <div className="text-sm space-y-7">
        <p>
          <span className={`${darkMode && "opacity-50"}`}>
            {type.descBeforeSpan}
          </span>
          <span className={`${darkMode && "opacity-85"} font-bold`}>
            {type.descSpan}
          </span>
          <span className={`${darkMode && "opacity-50"}`}>
            {type.descAfterSpan}
          </span>
        </p>
        <p>
          <span className={`${darkMode && "opacity-85"} font-bold`}>
            {type.subDescSpan}
          </span>
          <span className={`${darkMode && "opacity-50"}`}>
            {type.subDescAfterSpan}
          </span>
          <Link className={`font-bold underline ${darkMode && "opacity-85"}`}>
            {type.subDescSpanUnderline}
          </Link>
        </p>
      </div>
    </div>
  ));
  return (
    <div className="p-10 flex flex-col justify-center items-center gap-5 text-blue-950">
      <div className={`${darkMode && "text-blue-300"} text-center`}>
        <h2 className="text-3xl font-black">Two ways to share</h2>
        <p className="text-sm opacity-75">
          Rent when you want, at the price you want
        </p>
      </div>
      <div className="flex gap-10 p-2 items-center justify-center">
        {rentTypeElements}
      </div>
    </div>
  );
};

export default RentType;
