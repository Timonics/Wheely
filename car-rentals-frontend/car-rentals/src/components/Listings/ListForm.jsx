import React, { useState } from "react";

import carShopper from "../../assets/EarnWithWheely/CarShopper.avif";
import { useMyAppContext } from "../../context/myAppContext";

import BookingNav from "../Nav/BookingNav";

const ListForm = () => {
  const { darkMode } = useMyAppContext();
  const [listForm, setListForm] = useState({
    brand: "",
    model: "",
    year: "",
    licence: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setListForm((prevListForm) => ({ ...prevListForm, [name]: value }));
  };

  return (
    <>
      <div className="w-full h-[550px] shadow-xl relative">
        <div className="h-full bg-slate-400 w-full flex">
          <div
            className={`${
              darkMode ? "" : ""
            } p-1 absolute w-full top-0 left-0 z-20`}
          >
            <BookingNav />
          </div>
          <img
            src={carShopper}
            alt=""
            className={`object-cover w-full h-full shadow-xl opacity-90 ${
              darkMode ? "brightness-75" : "brightness-105"
            }`}
          />
          <div className="w-1/3" />
        </div>
        <div
          className={`clip-right h-full  w-1/2 absolute top-0 right-0 flex justify-center items-center ${
            darkMode ? "bg-slate-900" : "bg-slate-100"
          }`}
        >
          <div
            className={`w-4/5 space-y-3 ${
              darkMode ? "text-blue-400" : "text-blue-950"
            } mt-20`}
          >
            <h1
              className={`text-3xl font-black  ${darkMode && "text-blue-400"}`}
            >
              Earn extra income by renting your car with locals
            </h1>
            <p className={`text-sm font-montserrat ${darkMode ? "opacity-40" : "opacity-75"}`}>
              Have a car sitting idle? Turn it into an earning opportunity by
              listing it on Wheely! Renting out your car is easy, safe, and
              convenient.
            </p>
            <form className="w-full flex flex-col gap-2 p-2 pt-5">
              <input
                placeholder="Brand"
                name="brand"
                type="text"
                value={listForm.brand}
                onChange={handleChange}
                className={`outline-none p-3 rounded-md ${
                  darkMode && "bg-slate-500 bg-opacity-80"
                }`}
              />
              <input
                placeholder="Model"
                name="model"
                type="text"
                value={listForm.model}
                onChange={handleChange}
                className={`outline-none p-3 rounded-md ${
                  darkMode && "bg-slate-500 bg-opacity-80"
                }`}
              />
              <div className="flex gap-3">
                <input
                  placeholder="Year"
                  name="year"
                  type="text"
                  value={listForm.year}
                  onChange={handleChange}
                  className={`outline-none p-3 rounded-md w-1/2 ${
                    darkMode && "bg-slate-500 bg-opacity-80"
                  }`}
                />
                <input
                  placeholder="Licence Plate"
                  name="licence"
                  type="text"
                  value={listForm.licence}
                  onChange={handleChange}
                  className={`outline-none p-3 rounded-md w-1/2 ${
                    darkMode && "bg-slate-500 bg-opacity-80"
                  }`}
                />
              </div>
              <button
                className={`${
                  darkMode && "text-slate-950"
                } p-3 flex items-center justify-center font-bold bg-blue-400 mt-3 rounded-md`}
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListForm;
