import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./container/Home";
import Auth from "./components/Auth/auth-container/Auth";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ListingContainer from "./components/Listings/container/ListingContainer";
import WheelyConnectInfo from "./components/Listings/TypeInfo/WheelyConnectInfo";
import WheelyInfo from "./components/Listings/TypeInfo/WheelyInfo";
import Book from "./components/Booking/Book";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="auth" element={<Auth />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Route>
      <Route path="rent-your-car" element={<ListingContainer />}>
        <Route index element={<WheelyInfo />} />
        <Route path="wheely_connect" element={<WheelyConnectInfo />} />
      </Route>
      <Route path="bookings" element={<Book />} />
    </Routes>
  );
};

export default App;
