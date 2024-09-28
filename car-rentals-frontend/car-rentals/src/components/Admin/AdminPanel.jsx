import React from "react";

import SideBar from "./admin-components/SideBar";

const AdminPanel = () => {
  return (
    <div className="h-screen bg-gray-950">
      <div className="p-5 flex flex-col h-full gap-5 items-center">
        <h1 className="text-5xl text-slate-300 gradient-text">
          Administrator Panel
        </h1>
        <div className="h-full w-full flex rounded-lg">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
