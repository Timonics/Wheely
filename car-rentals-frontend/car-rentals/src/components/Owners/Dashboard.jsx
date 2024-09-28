import React from "react";
import BookingNav from "../Nav/BookingNav";
import { useMyAppContext } from "../../context/myAppContext";
import OwnerHero from "./OwnerHero";
import DashboardList from "./DashboardList";
import Help from "./Help";
import SubFooter from "../Footer/SubFooter";

const Dashboard = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className={`${darkMode && "bg-gray-950"} py-3`}>
      <BookingNav />
      <OwnerHero />
      <DashboardList />
      <Help />
      <SubFooter />
    </div>
  );
};

export default Dashboard;
