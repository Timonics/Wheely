import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { useMyAppContext } from "../../../context/myAppContext";

import { MdOutlinePersonOff } from "react-icons/md";
import Loading from "../../Load/Loading";

const AllUsers = () => {
  const adminID = useParams();
  const { userProfile, setIsLoading, isLoading } = useMyAppContext();
  const [allUsers, setAllUsers] = useState([]);
  const db_url = import.meta.env.VITE_DB_URL;

  const getUsers = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = allUsers.filter((user) => user.role !== "admin");

  const usersElement = filteredUsers.map((user) => (
    <Link className="h-[90px] w-full flex items-center shadow-xl shadow-slate-800 bg-gray-900 p-4 gap-7 mb-5 rounded-lg transition hover:scale-95 duration-500 ease-in-out">
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
        <h1 className="text-2xl font-bold opacity-75">{user.name}</h1>
        <p className="opacity-50 text-sm">{user.email}</p>
      </div>
      <div className="flex ml-auto items-center gap-5">
        <div className="flex flex-col gap-2">
          <Link className="p-2 text-center text-slate-300 transition hover:bg-blue-400 hover:text-gray-950 hover:font-bold hover:scale-110 duration-500 ease-in-out rounded-lg text-[10px] bg-blue-950 w-[120px]">
            Update User info
          </Link>
          <Link className="p-2 text-center text-slate-300 transition hover:bg-red-900 hover:font-bold hover:scale-110 hover:text-slate-400 duration-500 ease-in-out rounded-lg text-[10px] bg-red-700 w-[120px]">
            Delete User
          </Link>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="h-full overflow-y-auto p-4 no-scrollbar">
      {isLoading && <Loading />}
      <div className="flex flex-col h-full">
        {usersElement.length ? (
          usersElement
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="h-[200px] w-[180px] flex flex-col items-center justify-center gap-5 rounded-xl bg-slate-500 shadow-2xl">
              <MdOutlinePersonOff
                size={100}
                className="p-2 rounded-full bg-slate-700 text-blue-400"
              />
              <h1 className="text-center text-lg text-blue-950 font-bold">
                No users present
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
