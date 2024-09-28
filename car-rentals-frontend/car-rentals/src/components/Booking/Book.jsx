import React from "react";

import Nav from "../Nav/Nav";

import { CiLocationOn } from "react-icons/ci";

import bookingFrontImg from "../../assets/bookingImgs/book-front.jpg";

import { useMyAppContext } from "../../context/myAppContext";

const Book = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className={`${darkMode && "bg-slate-800"}`}>
      <div className="h-[600px]">
        <div className="relative h-full">
          <img
            src={bookingFrontImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute h-full w-full inset-0 bg-black bg-opacity-70" />
        </div>
        <div
          className={`p-5 absolute top-0 w-full z-10 ${
            darkMode ? "text-slate-400" : "text-slate-400"
          }`}
        >
          <Nav />
        </div>
        <div className="flex absolute top-0 h-[530px] w-full">
          <div className="w-1/2 pl-7 flex flex-col items-start justify-center gap-3">
            <h1 className=" text-[45px] leading-[48px] font-bold gradient-text">
              Discover the Perfect Ride for Every Occasion with Wheely
            </h1>
            <p className="text-[15px] leading-[25px] text-white opacity-85">
              Whether you're planning a road trip, heading to a business
              meeting, or just need a reliable ride around town, Wheely makes it
              easy to find, book, and enjoy the perfect car. With a wide variety
              of vehicles, flexible booking options, and secure payment
              processing, we're here to get you where you need to go. Let's hit
              the road!
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center gap-5">
            <div className="rounded-lg w-4/5 space-y-5 bg-blue-400 bg-opacity-15 p-5">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-blue-400">
                  Find a car near you
                </h1>
                <p className="text-xs text-slate-400 opacity-90">
                  Search by location to find the best cars available for rent in
                  your city or any destination of your choice. Whether you're
                  planning a quick getaway or need a car for the day, Wheely has
                  you covered!
                </p>
              </div>
              <form className="flex flex-col p-2 w-full gap-5">
                <input
                  type="text"
                  placeholder="Enter your location"
                  onChange={"handleChange"}
                  className="relative border-b-2 border-blue-400 p-1 bg-slate-400 bg-opacity-40 outline-none"
                />
                <input
                  type="text"
                  placeholder="Additional Address"
                  onChange={"handleChange"}
                  className="border-b-2 border-blue-400 p-1 bg-slate-400 bg-opacity-40 outline-none"
                />
                <div className="flex gap-2">
                  <input placeholder="Pickup Date" className="w-1/2 border-b-2 border-blue-400 p-1 bg-slate-400 bg-opacity-40 outline-none" />
                  <input placeholder="Return Date" className="w-1/2 border-b-2 border-blue-400 p-1 bg-slate-400 bg-opacity-40 outline-none" />
                </div>
                <button
                  onChange={"handleChange"}
                  className="bg-blue-400 p-2 bg-opacity- text-center rounded-md font-bold text-blue-950 hover:bg-slate-950 hover:text-blue-400 transition ease-in-out duration-500"
                >
                  Find a car
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
