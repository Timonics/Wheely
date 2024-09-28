import React, { useState } from "react";

import axios from "axios";

const Users = () => {
  const [allUsers, setAllUsers] = useState(null);

  const db_url = import.meta.env.VITE_DB_URL;

  const getUsers = async () => {
    try {
      response = await axios.get(`${db_url}users` );
    } catch (err) {}
  };

  return (
    <div className="flex flex-col h-full">
      <div className="h-1/4 flex rounded-tr-lg items-center pl-5 bg-gray-900 shadow-lg">
        <h1 className="text-5xl text-blue-500">All Users</h1>
      </div>
    </div>
  );
};

export default Users;
