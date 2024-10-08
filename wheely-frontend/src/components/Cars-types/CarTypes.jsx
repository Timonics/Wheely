import React from "react";

import suv from "../../assets/carTypes/suv.webp";
import commercial from "../../assets/carTypes/commercial.jpg";
import pickup from "../../assets/carTypes/pickup.webp";
import family from "../../assets/carTypes/family.avif";

import { Link } from "react-router-dom";
import { useMyAppContext } from "../../context/myAppContext";

const CarTypes = () => {
  const { darkMode } = useMyAppContext();
  const carTypes = [
    {
      image: commercial,
      name: "Commercial",
    },
    {
      image: family,
      name: "Family Car",
    },
    {
      image: suv,
      name: "SUV",
    },
    {
      image: pickup,
      name: "Pickup",
    },
  ];

  const randomShuffle = (arr) => {
    const shuffledArr = arr.sort(() => Math.random() - 0.5);
    return shuffledArr;
  };

  const carTypeElements = randomShuffle(
    carTypes.map((cartype, i) => (
      <Link
        key={i}
        to=""
        className={`${
          darkMode &&
          "bg-slate-600 text-blue-950 hover:bg-slate-950 hover:text-blue-400 transition ease-in-out duration-500"
        } bg-slate-200 flex flex-col items-center justify-center p-4 rounded-lg gap-4 `}
      >
        <div className="w-56 h-36 overflow-hidden rounded-lg">
          <img
            src={cartype.image}
            alt=""
            className="w-full h-full rounded-lg object-center object-cover transition ease-in-out duration-500 hover:scale-110"
          />
        </div>
        <h1 className="text-sm font-semibold font-montserrat">{cartype.name}</h1>
      </Link>
    ))
  );
  return (
    <div className="p-10 flex flex-col items-center justify-center gap-10">
      <h1
        className={`${
          darkMode && "text-slate-300"
        } text-3xl font-bold max-phone:text-lg`}
      >
        Explore a Wide Range of Car Options
      </h1>
      <div className="w-full flex items-center justify-between overflow-x-auto no-scrollbar">
        {carTypeElements}
      </div>
      <Link
        to=""
        className={`${
          darkMode &&
          "bg-blue-800 hover:bg-blue-400 hover:text-blue-950 transition ease-in-out duration-500"
        } font-bold bg-slate-200 px-4 py-2 shadow-2xl rounded-lg`}
      >
        Explore more cars
      </Link>
    </div>
  );
};

export default CarTypes;
