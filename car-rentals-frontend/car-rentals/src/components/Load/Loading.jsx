import React from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <AiOutlineLoading3Quarters className="animate-spin text-6xl text-blue-500" />
    </div>
  );
};

export default Loading;
