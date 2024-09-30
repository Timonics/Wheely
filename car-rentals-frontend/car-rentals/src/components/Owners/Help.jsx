import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="h-[300px] my-5 bg-blue-950 text-slate-300 space-y-6 flex flex-col items-center justify-center gap-7">
      <div className="text-center space-y-5">
        <h1 className="text-5xl ">Need Help?</h1>
        <p className="opacity-60">
          Our support team is available 24/7 to assist you with any questions or
          issues you may encounter while managing your rentals.
        </p>
      </div>
      <Link className="py-2 px-4 rounded-lg bg-blue-400 text-gray-950 transition hover:scale-110 hover:bg-gray-950 hover:text-blue-400 duration-500 ease-in-out font-bold">
        View our contacts
      </Link>
    </div>
  );
};

export default Help;
