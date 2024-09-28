import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="p-12 my-5 bg-blue-950 text-slate-300 space-y-6 flex flex-col items-center justify-center">
      <h1 className="text-5xl ">Need Help?</h1>
      <p className="opacity-75">
        Our support team is available 24/7 to assist you with any questions or
        issues you may encounter while managing your rentals.
      </p>
      <Link className="py-2 px-4 rounded-lg bg-blue-400 text-gray-950 ">View our contacts</Link>
    </div>
  );
};

export default Help;
