import React from "react";
import Book from "../Book";
import InfoOnRent from "../InfoOnRent";
import { useMyAppContext } from "../../../context/myAppContext";
import FeaturedCars from "../FeaturedCars";
import SubFooter from "../../Footer/SubFooter";

const BookingContainer = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className={`${darkMode && "bg-slate-800"}`}>
      <Book />
      <InfoOnRent />
      <FeaturedCars />
      <SubFooter />
    </div>
  );
};

export default BookingContainer;
