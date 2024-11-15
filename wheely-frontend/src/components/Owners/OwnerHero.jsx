import React, { useState } from "react";

import { useMyAppContext } from "../../context/myAppContext";

const OwnerHero = () => {
  const { darkMode } = useMyAppContext();
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(true);
  };
  return (
    <>
      {!hide ? (
        <div
          className={`h-[200px] rounded-lg ${
            darkMode ? "bg-slate-800" : "bg-blue-700/55"
          } my-5 mx-8 flex flex-col justify-center gap-3 p-5 relative`}
        >
          <button
            className="absolute top-0 right-0 mt-2 mr-4"
            onClick={handleHide}
          >
            Hide
          </button>
          <h1
            className={`text-5xl font-extrabold h-[60px] flex items-center text-blue-300 font-montserrat`}
          >
            Manage Your Fleet, Maximize Your Earnings
          </h1>
          <p
            className={`${
              darkMode ? "text-blue-400/60" : "text-blue-950/65"
            }`}
          >
            As a car owner, the Wheely dashboard gives you all the tools you
            need to manage your vehicles and rentals in one place. Easily track
            bookings, update car details, and monitor your income, all from your
            personalized dashboard.
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default OwnerHero;
