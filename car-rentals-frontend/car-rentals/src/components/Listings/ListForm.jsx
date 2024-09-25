import React, { useState } from "react";

import carShopper from "../../assets/EarnWithWheely/CarShopper.avif";
import { useMyAppContext } from "../../context/myAppContext";

const ListForm = () => {
  const {darkMode} = useMyAppContext()
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
      <div className="w-full h-[550px] relative shadow-xl">
        <div className="h-full bg-slate-400 w-full flex">
          <div className="w-2/3">
            <img
              src={carShopper}
              alt=""
              className="object-cover w-full h-full shadow-xl opacity-90"
            />
          </div>
          <div className="w-1/3" />
        </div>
        <div className={`clip-right h-full bg-slate-100 w-1/2 absolute top-0 right-0 flex justify-center items-center ${darkMode && "bg-slate-900"}`}>
          <div className={`w-4/5 space-y-3 text-blue-950 ${darkMode && "text-slate-500"}`}>
            <h1 className="text-3xl font-black">
              Earn extra income by renting your car with locals
            </h1>
            <p className="text-sm opacity-60">
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
                className="outline-none p-3 rounded-md"
              />
              <input
                placeholder="Model"
                name="model"
                type="text"
                value={listForm.model}
                onChange={handleChange}
                className="outline-none p-3 rounded-md"
              />
              <div className="flex gap-3">
                <input
                  placeholder="Year"
                  name="year"
                  type="text"
                  value={listForm.year}
                  onChange={handleChange}
                  className="outline-none p-3 rounded-md w-1/2"
                />
                <input
                  placeholder="Licence Plate"
                  name="licence"
                  type="text"
                  value={listForm.licence}
                  onChange={handleChange}
                  className="outline-none p-3 rounded-md w-1/2"
                />
              </div>
              <button className={`${darkMode && "text-slate-950"} p-3 flex items-center justify-center font-bold bg-blue-400 mt-3 rounded-md`}>
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
