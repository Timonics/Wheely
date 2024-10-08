import React from "react";

import { Link } from "react-router-dom";
import { useMyAppContext } from "../../context/myAppContext";

import comingSoon from "../../assets/imgComingSoon/imgComingSoon.webp";

const ProListing = () => {
  const { darkMode } = useMyAppContext();
  const options = [
    {
      head: "",
      desc: "",
    },
    {
      head: "",
      desc: "",
    },
  ];
  const proWithWheelyElements = options.map((option, index) => (
    <Link
      key={index}
      className={`${
        darkMode ? "bg-slate-500" : "bg-slate-300"
      } w-1/2 h-full rounded-xl border-2 border-black border-opacity-20 `}
    >
      <img src="" alt="" className={``} />
    </Link>
  ));
  return (
    <div
      className={`${
        darkMode ? "bg-slate-800" : "bg-white"
      } h-[530px] p-10 flex flex-col gap-7 items-center`}
    >
      <h1
        className={`text-3xl  font-bold ${
          darkMode ? "text-slate-400" : "text-gray-950"
        }`}
      >
        You are already a professional or want to become with{" "}
        <span className="gradient-text">Wheely</span>?
      </h1>
      <div className="flex gap-5 w-full h-full p-2">
        {proWithWheelyElements}
      </div>
      <Link
        to=""
        className="p-3 flex items-center justify-center font-bold border-4 w-fit text-blue-400 rounded-lg border-blue-400"
      >
        Discover our offers for pros
      </Link>
    </div>
  );
};

export default ProListing;
