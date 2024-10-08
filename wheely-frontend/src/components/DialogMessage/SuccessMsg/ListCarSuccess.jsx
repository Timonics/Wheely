import React from "react";
import { useMyAppContext } from "../../../context/myAppContext";

const ListCarSuccess = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div
      className={`p-5 flex flex-col items-center justify-center ${
        darkMode ? "bg-slate-900" : "bg-slate-200"
      } w-[400px] gap-5 rounded-xl z-50`}
    >
      <h1
        className={`font-semibold ${
          darkMode ? "text-blue-300" : "text-blue-950"
        } text-center`}
      >
        <span className="text-lg font-montserrat font-bold">🎉HURRAY!!!🎉</span><br/>
        You have successfully listed your car
      </h1>
      <hr
        className={`w-full ${
          darkMode ? "border-slate-400/15" : "border-black/15"
        }`}
      />
      <div className="flex gap-10 text-sm text-center">
        <p className="text-sm font-light opacity-75">
          You would be redirect in a second...
        </p>
      </div>
    </div>
  );
};

export default ListCarSuccess;
