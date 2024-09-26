import React from "react";

import Nav from "../Nav/Nav";

import bookingFrontImg from "../../assets/bookingImgs/book-front.jpg";

import { useMyAppContext } from "../../context/myAppContext";

const Book = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className={`${darkMode && "bg-slate-800"} h-screen`}>
      <div className="h-[530px]">
        <div className="relative h-full">
          <img
            src={bookingFrontImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute h-full w-full inset-0 bg-black bg-opacity-60" />
        </div>
        <div className={`p-5 absolute inset-0 ${darkMode ? "text-slate-400" : "text-slate-400"}`}>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Book;
