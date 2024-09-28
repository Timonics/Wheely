import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./container/Home";
import Auth from "./components/Auth/auth-container/Auth";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ListingContainer from "./components/Listings/container/ListingContainer";
import WheelyConnectInfo from "./components/Listings/TypeInfo/WheelyConnectInfo";
import WheelyInfo from "./components/Listings/TypeInfo/WheelyInfo";
import BookingContainer from "./components/Booking/container/BookingContainer";
import Dashboard from "./components/Owners/Dashboard";
import Fleets from "./components/Owners/Fleets";
import CarBookings from "./components/Owners/CarBookings";
import MyEarnings from "./components/Owners/MyEarnings";
import Payout from "./components/Owners/Payout";
import AdminPanel from "./components/Admin/AdminPanel";
import AdminLogin from "./components/Admin/AdminLogin";
import Users from "./components/Admin/admin-components/Users";
import Vehicles from "./components/Admin/admin-components/Vehicles";
import Roles from "./components/Admin/admin-components/Roles";
import Bookings from "./components/Admin/admin-components/Bookings";
import Settings from "./components/Admin/admin-components/Settings";
import Profile from "./components/Admin/admin-components/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="admin-login" element={<AdminLogin />} />
      <Route path="admin-panel/:adminID" element={<AdminPanel />}>
        <Route path="users" element={<Users />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="user-roles" element={<Roles />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="auth" element={<Auth />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Route>
      <Route path="rent-your-car" element={<ListingContainer />}>
        <Route index element={<WheelyInfo />} />
        <Route path="wheely_connect" element={<WheelyConnectInfo />} />
      </Route>
      <Route path="bookings" element={<BookingContainer />} />
      <Route path="owners-dashboard/:userID" element={<Dashboard />}>
        <Route index element={<Fleets />} />
        <Route path="my-bookings" element={<CarBookings />} />
        <Route path="my-earnings" element={<MyEarnings />} />
        <Route path="payout" element={<Payout />} />
      </Route>
    </Routes>
  );
};

export default App;
