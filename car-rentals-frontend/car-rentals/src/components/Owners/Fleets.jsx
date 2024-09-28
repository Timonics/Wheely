import React from "react";
import { useMyAppContext } from "../../context/myAppContext";

const Fleets = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div
      className={`text-5xl h-[100px] rounded-t-lg shadow-2xl flex items-center p-10 ${
        darkMode && "bg-gray-900"
      } `}
    >
      <h1 className="gradient-text h-[60px]">My Fleets</h1>
    </div>
  );
};

export default Fleets;