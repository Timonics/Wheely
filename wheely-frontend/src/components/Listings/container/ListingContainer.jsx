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
