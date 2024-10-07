import React from "react";
import { useMyAppContext } from "../../../context/myAppContext";

const WheelyInfo = () => {
  const { darkMode } = useMyAppContext();
  const typeInfo = [
    {
      head: "List your car",
      desc: "Fill in essential information about your car so you can start renting.",
    },
    {
      head: "Recieve bookings",
      desc: "Activate Instant Booking or accept requests. Confirm the check-in time and place with the driver.",
    },
    {
      head: "Rent effortlessly",
      desc: "Do the walkaround inspection and sign the cell rental agreement with the driver.",
    },
    {
      head: "Get paid",
      desc: "You get a bank transfer 5 working days after each rental - including compensation for extra fuel or mileage.",
    },
  ];

  const typeInfoElements = typeInfo.map((typeInfo, index) => (
    <div
      key={index}
      className={`space-y-3 w-1/4 ${
        darkMode ? "text-blue-300" : "text-blue-950 "
      }`}
    >
      {typeInfo.icon}
      <h1 className="text-xl font-bold">{typeInfo.head}</h1>
      <p className={`text-sm  ${darkMode ? "opacity-40" : "opacity-75"}`}>
        {typeInfo.desc}
      </p>
    </div>
  ));
  return (
    <div className="p-5 flex items-center justify-center gap-5">
      {typeInfoElements}
    </div>
  );
};

export default WheelyInfo;
