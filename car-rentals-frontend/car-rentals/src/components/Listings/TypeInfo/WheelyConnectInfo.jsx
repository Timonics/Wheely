import React from "react";
import { useMyAppContext } from "../../../context/myAppContext";

const WheelyConnectInfo = () => {
  const {darkMode} = useMyAppContext()

  const typeInfo = [
    {
      icon: "",
      head: "List your car",
      desc: "Fill in essential information about your car, then we'll call you to plan the installation of our device.",
    },
    {
      icon: "",
      head: "Recieve bookings",
      desc: "After an identity check, drivers can book your car when you make it available.",
    },
    {
      icon: "",
      head: "Rent effortlessly",
      desc: "Drivers can locate your car, unlock and lock it with their phone after doing an exterior walkaround.",
    },
    {
      icon: "",
      head: "Get paid",
      desc: "You get a bank transfer 5 working days after each rental - including compensation for extra fuel or mileage.",
    },
  ];

  const typeInfoElements = typeInfo.map((typeInfo) => (
    <div className={`space-y-3 w-1/4 text-blue-950 ${darkMode && "text-blue-300"}`}>
      {typeInfo.icon}
      <h1 className="text-xl font-bold">{typeInfo.head}</h1>
      <p className={`${darkMode && "opacity-40"} text-sm opacity-75`}>{typeInfo.desc}</p>
    </div>
  ));
  return (
    <div className="p-5 flex items-center justify-center gap-5">
      {typeInfoElements}
    </div>
  );
};

export default WheelyConnectInfo;
