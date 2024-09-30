import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { useMyAppContext } from "../../../context/myAppContext";

import { GoPlus } from "react-icons/go";

const AllUsers = () => {
  const adminID = useParams();
  const { userProfile } = useMyAppContext();
  const [allUsers, setAllUsers] = useState([]);
  const db_url = import.meta.env.VITE_DB_URL;

  const getUsers = async () => {
    try {
      const response = await axios.get(`${db_url}users`, {
        headers: {
          Authorization: `Bearer ${userProfile}`,
          Accept: "application/json",
        },
      });
      console.log(response);
      setAllUsers(response.data);
    } catch (err) {
      console.log("Err", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = allUsers.filter((user) => user.role !== "admin");

  const usersElement = filteredUsers.map((user) => (
    <Link className="h-[90px] w-full flex items-center rounded-x shadow-2xl bg-gray-950 p-4 gap-7">
      <div className="flex flex-col gap-2 items-center ml-2">
        <img
          src=""
          alt=""
          className="h-[50px] w-[50px] rounded-full bg-slate-500"
        />
        <p className="font-bold text-xs text-slate-500">
          {user.role.toUpperCase()}
        </p>
      </div>
      <div className="text-slate-300 flex flex-col gap-2">
        <div>
          <h1 className="text-2xl font-bold opacity-75">{user.name}</h1>
          <p className="opacity-50 text-sm">{user.email}</p>
        </div>
      </div>
      <div className="flex ml-auto items-center gap-5">
        <div className="flex flex-col gap-2">
          <Link className="p-2 text-center text-slate-300 transition hover:bg-blue-400 hover:text-gray-950 hover:font-bold hover:scale-110 duration-500 ease-in-out rounded-lg text-xs bg-blue-950">
            Update User info
          </Link>
          <Link className="p-2 text-center text-slate-300 transition hover:bg-red-900 hover:font-bold hover:scale-110 hover:text-slate-400 duration-500 ease-in-out rounded-lg text-xs bg-red-700">
            Delete User
          </Link>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="flex flex-col h-full">
        {usersElement.length ? (
          usersElement
        ) : (
          <div className="flex items-center justify-center h-full">
            <Link
              to="./add-user"
              className="h-[200px] w-[180px] flex flex-col items-center justify-center gap-5 rounded-xl bg-slate-500 shadow-2xl"
            >
              <GoPlus
                size={100}
                className="p-2 rounded-full bg-slate-700 text-blue-400"
              />
              <h1 className="text-2xl text-blue-950 font-bold">Add user</h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
