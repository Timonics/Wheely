import React from "react";

import ListForm from "../ListForm";
import Insure from "../Insure";
import Footer from "../../Footer/Footer";
import ProListing from "../ProListing";
import BookingNav from "../../Nav/BookingNav";
import RentType from "../RentType";
import RentTypeInfo from "../TypeInfo/RentTypeInfo";
import { useMyAppContext } from "../../../context/myAppContext";

const ListingContainer = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className={`${darkMode && "bg-slate-800"}`}>
      {/* <div className={`${darkMode ? "bg-slate-950" : "bg-slate-100"} p-1`}>
        <BookingNav />
      </div> */}
      <ListForm />
      <RentType />
      <RentTypeInfo />
      <Insure />
      <ProListing />
      <Footer />
    </div>
  );
};

export default ListingContainer;
