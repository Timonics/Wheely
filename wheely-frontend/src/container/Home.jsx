import React from "react";

import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import ListSection from "../components/EarnWithWheely/ListSection";
import CarTypes from "../components/Cars-types/CarTypes";
import WhatsNew from "../components/Whats-new/WhatsNew";
import EndNote from "../components/EndNote/EndNote";
import Footer from "../components/Footer/Footer";
import { useMyAppContext } from "../context/myAppContext";

import background from "../assets/homeBackground/wheely-background.webp"

const Home = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div className={`${darkMode && "bg-slate-800"}`}>
      <div className={`flex flex-col h-[700px] relative`}>
        <img src={background} className="object-cover w-full h-full absolute blur-[x] -z-10"/>
        <div
          className={`${
            darkMode ? "bg-slate-950 text-slate-300" : "text-slate-700"
          } p-4`}
        >
          <Nav />
        </div>
        <div
          className={`p-4 h-[80%] border-black ${
            darkMode ? "bg-slate-950 shadow-2xl" : ""
          } `}
        >
          <Hero />
        </div>
      </div>
      <Features />
      <ListSection />
      <CarTypes />
      <WhatsNew />
      <EndNote />
      <Footer />
    </div>
  );
};

export default Home;
