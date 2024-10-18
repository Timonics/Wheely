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
import AdminLoginError from "./components/Admin/AdminLoginError";
import Users from "./components/Admin/admin-components/Users";
import Vehicles from "./components/Admin/admin-components/Vehicles";
import Roles from "./components/Admin/admin-components/Roles";
import Bookings from "./components/Admin/admin-components/Bookings";
import Settings from "./components/Admin/admin-components/Settings";
import Profile from "./components/Admin/admin-components/Profile";
import AddUser from "./components/Admin/admin-components/AddUser";
import AllUsers from "./components/Admin/admin-components/AllUsers";
import UpdateUser from "./components/Admin/admin-components/UpdateUser";
import DeleteUser from "./components/Admin/admin-components/DeleteUser";
import CarFullForm from "./components/Listings/CarFullForm";
import UserDashboard from "./components/Profile/UserDashboard";
import UserProfile from "./components/Profile/UserProfile";
import UserRentals from "./components/Profile/UserRentals";
import UserPayments from "./components/Profile/UserPayments";
import AccountSettings from "./components/Profile/profile-components/AccountSettings";
import EditProfile from "./components/Profile/profile-components/EditProfile";
import PaymentsMethod from "./components/Profile/profile-components/PaymentsMethod";
import MyProfile from "./components/Profile/profile-components/MyProfile";

const App = () => {
  return (
    <Routes>
      <Route path="admin-login" element={<AdminLogin />} />
      <Route path="adminlog-error" element={<AdminLoginError />} />
      <Route path="admin-panel/:adminID" element={<AdminPanel />}>
        <Route path="users" element={<Users />}>
          <Route index element={<AllUsers />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="update-user/:userID" element={<UpdateUser />} />
          <Route path="delete-user/:userID" element={<DeleteUser />} />
        </Route>
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="roles" element={<Roles />} />
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
      <Route path="list-your-car" element={<CarFullForm />} />
      <Route path="bookings" element={<BookingContainer />} />
      <Route path="owners-dashboard/:userID" element={<Dashboard />}>
        <Route index element={<Fleets />} />
        <Route path="my-bookings" element={<CarBookings />} />
        <Route path="my-earnings" element={<MyEarnings />} />
        <Route path="payout" element={<Payout />} />
      </Route>
      <Route path="dashboard" element={<UserDashboard />}>
        <Route path="profile" element={<UserProfile />}>
          <Route index element={<MyProfile />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="payments_method" element={<PaymentsMethod />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>
        <Route path="rentals" element={<UserRentals />} />
        <Route path="payments" element={<UserPayments />} />
      </Route>
    </Routes>
  );
};

export default App;
