import React from "react";

import SideBar from "./admin-components/SideBar";
import { useLocation } from "react-router-dom";

const AdminPanel = () => {
  const urlPath = useLocation();
  const path = urlPath.pathname.split("/")[3];
  let capitalPath = "";
  if (path) capitalPath = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="h-screen bg-gray-950">
      <div className="p-5 flex flex-col h-full gap-5 items-center">
        <h1 className="text-5xl text-slate-300 gradient-text">
          Administrator Panel
        </h1>
        <div className="flex flex-col h-full w-full">
          <div className="h-1/4 flex items-center pl-10 bg-gray-900 shadow-lg">
            <h1 className="text-5xl text-blue-500">
              {path ? capitalPath : "Admin Dashboard"}
            </h1>
          </div>
          <div className="h-full w-full flex">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
