import axios from "axios";
import React, { useState } from "react";
import { useMyAppContext } from "../../context/myAppContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { setUserProfile } = useMyAppContext();
  const db_url = import.meta.env.VITE_DB_URL;

  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${db_url}users/login`, adminData);

    const adminId = response.data.id;
    const token = response.data.token;

    const adminResData = await axios.get(`${db_url}users/${adminId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    setIsAuthenticated(true);
    setUserProfile(adminResData.data);
    console.log(adminResData);
    /* navigate(`/admin-panel/${}`) */
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-950 relative">
      <h1 className="text-6xl h-[70px] font-bold gradient-text absolute top-0 left-0 m-5">
        Wheely
      </h1>
      <div className="flex flex-col p-14 w-[40%] h-[55%] bg-slate-800 gap-5 justify-center">
        <h1 className="text-2xl font-bold text-center text-blue-400">
          Login into Administrator Panel
        </h1>
        <input
          className="p-2 bg-slate-500 opacity-80 outline-none"
          placeholder="Email"
          name="email"
          value={adminData.email}
          onChange={handleChange}
          type="text"
        />
        <input
          className="p-2 bg-slate-500 opacity-80 outline-none"
          placeholder="Password"
          name="password"
          value={adminData.password}
          onChange={handleChange}
          type="password"
        />
        <button className="p-2 bg-blue-400" onClick={handleSubmit}>
          Log In Admin
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
