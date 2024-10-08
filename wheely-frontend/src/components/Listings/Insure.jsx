import React from "react";

const Insure = () => {
  return (
    <div className="p-2 flex flex-col bg-blue-700 text-slate-200">
      <h1 className="p-12 text-4xl font-black">All trips are covered by</h1>
      <div className="flex px-12 py-12 gap-5">
        {[
          {
            head: "Comprehensive insurance for all trips",
            desc: "You are automatically covered by comprehensive insurance from Wheely Protection, which replaces your own car insurance as soon as a Wheely trip starts.",
          },
          {
            head: "Assistance in the event of a breakdown or accident",
            desc: "24/7 roadside assistance with the AA in case your vehicle breaks down and needs to be towed.",
          },

          {
            head: "A dedicated customer service team",
            desc: "Alongside the 24/7 assistance line, you can also contact our customer service team 24/7.",
          },
        ].map((item, index) => (
          <div key={index} className="space-y-5">
            <h1 className="text-xl font-bold">{item.head}</h1>
            <p className="text-sm opacity-50">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insure;
