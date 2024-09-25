import React from "react";
import { useMyAppContext } from "../../context/myAppContext";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useMyAppContext();

  return (
    <button
      onClick={toggleDarkMode}
      className="transition-transform duration-500 ease-in-out"
    >
      {darkMode ? (
        <MdOutlineLightMode
          size={24}
          className="transition-transform duration-500"
        />
      ) : (
        <MdOutlineDarkMode
          size={24}
          className="transition-transform duration-500 "
        />
      )}
    </button>
  );
};

export default DarkMode;
