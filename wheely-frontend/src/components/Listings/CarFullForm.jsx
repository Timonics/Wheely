import React, { useState } from "react";
import { useMyAppContext } from "../../context/myAppContext";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Load/Loading";
import ListCarSuccess from "../DialogMessage/SuccessMsg/ListCarSuccess";

const CarFullForm = () => {
  const navigate = useNavigate();
  const dbUrl = import.meta.env.VITE_DB_URL;
  const {
    carDetails,
    darkMode,
    userProfile,
    setCarProfile,
    isLoading,
    setIsLoading,
  } = useMyAppContext();

  const [fullListForm, setFullListForm] = useState({
    ...carDetails,
    brand: carDetails.brand || "",
    model: carDetails.model || "",
    year: carDetails.year || "",
    licence: carDetails.licence || "",
    fuelType: "",
    transmission: "",
    color: "",
    seatingCapacity: "",
    features: "",
    available: false,
  });

  const [successList, setSuccessList] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFullListForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      available: checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const carData = {
        owner: userProfile._id,
        ...fullListForm,
      };
      const token = userProfile.token;
      const createCarResponse = await axios.post(`${dbUrl}cars`, carData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setCarProfile(createCarResponse.data);
      setSuccessList(true);
      setIsLoading(false);
      setTimeout(() => {
        setSuccessList(false);
        navigate(`/owners-dashboard/${userProfile._id}`);
      }, 3000);
    } catch (err) {
      console.error("Error", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-4 px-10">
        {isLoading && <Loading />}
        <div className="bg-slate-200 h-full rounded-xl shadow-2xl py-5 px-10 space-y-2">
          <h1 className="text-4xl font-bold ">
            Earn more by listing your car on{" "}
            <span className="gradient-text text-5xl">Wheely!</span>
          </h1>
          <p className="text-light text-sm font-montserrat opacity-75">
            To ensure your car gets the best visibility and attracts the right
            renters, please provide the following details. Accurate and complete
            information will help renters choose your car with confidence.{" "}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5 pt-3">
              <div className="flex flex-col gap-3 border-2 w-1/3  p-4 rounded-xl bg-slate-400/40">
                <h2 className="text-xl font-semibold text-center text-blue-950">
                  Basic Information
                </h2>
                <input
                  type="text"
                  placeholder="Brand i.e. Toyota, Ford"
                  onChange={handleChange}
                  name="brand"
                  value={fullListForm.brand}
                  className="rounded-xl border-2 border-slate-400 p-1 bg-slate-200/90 outline-none"
                />
                <input
                  type="text"
                  placeholder="Model i.e. Camry, Mustang"
                  onChange={handleChange}
                  name="model"
                  value={fullListForm.model}
                  className="rounded-xl border-2 border-slate-400 p-1 bg-slate-200/90 outline-none"
                />
                <input
                  type="text"
                  placeholder="Year"
                  onChange={handleChange}
                  name="year"
                  value={fullListForm.year}
                  className="rounded-xl border-2 border-slate-400 p-1 bg-slate-200/90 outline-none"
                />
                <input
                  type="text"
                  placeholder="Licence No"
                  onChange={handleChange}
                  name="licence"
                  value={fullListForm.licence}
                  className="rounded-xl border-2 border-slate-400 p-1 bg-slate-200/90 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-1/3 bg-slate-400/40 p-4 rounded-xl">
                <h2 className="text-xl font-semibold text-center text-blue-950">
                  Detailed Information
                </h2>
                <input
                  type="text"
                  placeholder="Fuel Type"
                  onChange={handleChange}
                  name="fuelType"
                  value={fullListForm.fuelType}
                  className="rounded-xl border-2 bg-slate-200/90 border-slate-400 p-1 outline-none"
                />
                <input
                  type="text"
                  placeholder="Transmission"
                  onChange={handleChange}
                  name="transmission"
                  value={fullListForm.transmission}
                  className="rounded-xl border-2 bg-slate-200/90 border-slate-400 p-1 outline-none"
                />
                <input
                  type="text"
                  placeholder="Color"
                  onChange={handleChange}
                  name="color"
                  value={fullListForm.color}
                  className="rounded-xl border-2 bg-slate-200/90 border-slate-400 p-1 outline-none"
                />
                <input
                  type="text"
                  placeholder="Seats Capacity"
                  onChange={handleChange}
                  name="seatingCapacity"
                  value={fullListForm.seatingCapacity}
                  className="rounded-xl border-2 bg-slate-200/90 border-slate-400 p-1 outline-none"
                />
                <input
                  type="text"
                  placeholder="Features"
                  onChange={handleChange}
                  name="features"
                  value={fullListForm.features}
                  className="rounded-xl border-2 bg-slate-200/90 border-slate-400 p-1 outline-none"
                />
              </div>
              <div className="w-1/3 space-y-3">
                <div className="p-4 rounded-xl flex flex-col gap-1 bg-blue-300">
                  <h2 className="text-xl font-semibold text-center text-gray-950">
                    Pricing Information
                  </h2>
                  <p className="text-xs font-montserrat">
                    Set a competitive price for your car to attract more
                    renters. Consider setting a weekly rate for long-term
                    rentals.
                  </p>
                  <div className="flex items-center w-full">
                    <span
                      className={`rounded-l-xl py-1 ${
                        darkMode && "bg-slate-500 bg-opacity-80 text-white"
                      } px-2 bg-blue-950/45 font-bold`}
                    >
                      ₦
                    </span>
                    <input
                      type="text"
                      name="pricePerDay"
                      value={fullListForm.pricePerDay}
                      onChange={handleChange}
                      className="rounded-r-xl bg-blue-950/45 p-1 outline-none w-full"
                    />
                  </div>
                </div>
                <div className="p-4 border-4 border-blue-400 rounded-xl flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-center">
                    Set your location
                  </h2>
                  <input
                    type="text"
                    name="location"
                    value={fullListForm.location}
                    onChange={handleChange}
                    className="rounded-xl border-2 bg-slate-200/90 border-blue-400/75 p-1 outline-none"
                  />
                </div>
                {/* <div className="p-2 border-2 border-black rounded-xl flex gap-3">
                <h2 className="text-xs font-montserrat">Available for Rent</h2>
                <input />
              </div> */}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={fullListForm.available}
                    onChange={handleChange}
                  />
                  <span
                    className={`${
                      darkMode ? "text-blue-950" : "text-blue-500"
                    } font-semibold`}
                  >
                    Available for Rent
                  </span>
                </label>
              </div>
            </div>
            <p className="text-center text-xs font-montserrat opacity-75 mt-4">
              Once you've completed the details, click on the "List My Car"
              button below to publish your listing.
            </p>
            <button
              type="submit"
              className="bg-blue-500 p-3 rounded-md mt-4 w-full font-bold text-blue-950 transition duration-500 ease-in-out hover:bg-blue-950 hover:text-blue-300"
            >
              List My Car
            </button>
          </form>
        </div>
      </div>
      {successList && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <ListCarSuccess />
        </div>
      )}
    </>
  );
};

export default CarFullForm;
