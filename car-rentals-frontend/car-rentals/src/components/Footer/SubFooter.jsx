import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useMyAppContext } from "../../context/myAppContext";

const SubFooter = () => {
  const { darkMode } = useMyAppContext();
  const [isHovered, setIsHovered] = useState(null);
  return (
    <div className="p-10 space-y-5">
      <div className="w-full flex space-x-7">
        <div className="w-1/3 flex flex-col items-center space-y-2">
          <h1
            className={`font-bold ${
              darkMode ? "text-blue-300" : "text-blue-950"
            } text-lg`}
          >
            Learn More
          </h1>
          <div className="border-t border-gray-400 opacity-30"></div>
          <ul className="space-y-3">
            {[
              "How does it Work?",
              "A trusted service",
              "Wheely app",
              "Contact",
              "Blog",
            ].map((items, i) => (
              <li
                key={i}
                className={`text-xs ${
                  darkMode
                    ? "text-blue-300 opacity-50"
                    : "text-blue-950 opacity-95"
                }`}
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 flex flex-col items-center space-y-2">
          <h1
            className={`font-bold ${
              darkMode ? "text-blue-300" : "text-blue-950"
            } text-lg`}
          >
            Resourses
          </h1>
          <div className="border-t border-gray-400 opacity-30"></div>
          <ul className="space-y-3">
            {["Owners resourses", "Pros", "Help center"].map((item, i) => (
              <li
                key={i}
                className={`text-xs ${
                  darkMode
                    ? "text-blue-300 opacity-50"
                    : "text-blue-950 opacity-95"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 flex flex-col items-center space-y-2">
          <h1
            className={`font-bold ${
              darkMode ? "text-blue-300" : "text-blue-950"
            } text-lg`}
          >
            Partners
          </h1>
          <div className="border-t border-gray-400 opacity-30"></div>
          <ul className="space-y-3">
            {["Partner with us", "Drive with inDrive"].map((item, i) => (
              <li
                key={i}
                className={`text-xs ${
                  darkMode
                    ? "text-blue-300 opacity-50"
                    : "text-blue-950 opacity-95"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between p-5 items-center bg-blue-400 shadow-blue-700 shadow-2xl">
        <div className="flex gap-5">
          <div className="text-[11px] opacity-50">
            &copy; Wheely 2024 - All right reserved
          </div>
          <div className="flex gap-3">
            {[
              "Legal terms",
              "Privacy policy",
              "Cookies",
              "Press",
              "Careers",
              "Investor relations",
            ].map((item, i) => (
              <Link key={i} to="" className="text-xs">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-5">
          {[
            { id: 1, icon: <FaFacebook size={30} />, color: "#1877F2" },
            { id: 2, icon: <FaInstagram size={30} />, color: "#833AB4" },
            { id: 3, icon: <FaXTwitter size={30} />, color: "#1DA1F2" },
            { id: 4, icon: <FaYoutube size={30} />, color: "#FF0000" },
            { id: 5, icon: <FaLinkedinIn size={30} />, color: "#0077B5" },
          ].map((item) => (
            <Link
              to=""
              key={item.id}
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                color: item.color,
                opacity: 0.95/* isHovered === item.id ? `${item.color}` : "#2563eb",
                transition: "color 0.3s ease",
                opacity: isHovered === item.id ? 1 : 0.75, */
              }}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
