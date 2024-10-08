import React, { useEffect, useState } from "react";
import { useMyAppContext } from "../../context/myAppContext";
import { Link } from "react-router-dom";

import { GiCarKey } from "react-icons/gi";
import axios from "axios";

import Loading from "../Load/Loading";

const Fleets = () => {
  const dbUrl = import.meta.env.VITE_DB_URL;
  const { darkMode, userProfile, isLoading, setIsLoading } = useMyAppContext();
  const [fleetsAvailable, setFleetsAvailable] = useState(false);
  const [fleets, setFleets] = useState([]);

  const fetchFleets = async () => {
    setIsLoading(true);
    try {
      const userId = userProfile._id;
      const token = userProfile.token;
      const fleetsResponse = await axios.get(`${dbUrl}cars/fleets/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setIsLoading(false);
      setFleets(fleetsResponse.data);
      setFleetsAvailable(true);
    } catch (err) {
      console.error("Error", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFleets();
  }, []);

  const fleetsElements = fleets.map((fleet) => (
    <div className="flex flex-col">
      <Link className="h-[220px] w-full flex rounded-xl shadow-2xl bg-blue-400 bg-opacity-50 p-4">
        <img
          src=""
          alt=""
          className="h-full w-[300px] rounded-xl bg-slate-500"
        />
        <h1>{fleet.brand}</h1>
      </Link>
    </div>
  ));

  return (
    <div className="h-[600px] flex flex-col">
      {isLoading && <Loading />}
      <div
        className={`h-1/4 rounded-t-xl shadow-xl flex items-center p-10 gap-5 ${
          darkMode && "bg-gray-900"
        }`}
      >
        <GiCarKey size={36} className="text-blue-400" />
        <h1 className="gradient-text h-[70px] text-6xl ">My Fleets</h1>
      </div>
      {fleetsAvailable ? (
        <div className="shadow-2xl rounded-b-xl h-full overflow-y-auto custom-scrollbar space-y-12 py-10 px-7">
          {fleetsElements}
        </div>
      ) : (
        <div className="h-full items-center flex flex-col justify-center gap-5">
          <div className="flex flex-col gap-1 items-center">
            <h1
              className={`text-3xl font-bold ${
                darkMode ? "text-blue-400" : "text-blue-950"
              }`}
            >
              No cars in your fleets
            </h1>
            <p className={`${darkMode && "text-slate-100"} text-sm opacity-50`}>
              Let's fix that
            </p>
          </div>
          <Link
            to="/list-your-car"
            className={`px-5 py-2 rounded-xl bg-blue-400 text-blue-950 font-bold transition duration-500 ease-in-out hover:scale-125`}
          >
            List a car
          </Link>
        </div>
      )}
    </div>
  );
};

export default Fleets;
