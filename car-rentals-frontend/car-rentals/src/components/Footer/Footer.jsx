import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useMyAppContext } from "../../context/myAppContext";

const Footer = () => {
  const { darkMode } = useMyAppContext();
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="h-screen">
      <div className=" h-full mt-4 flex flex-col">
        <div
          className={`${
            darkMode && "bg-slate-300"
          } h-5/6 bg-slate-100 rounded-t-3xl p-10 space-y-12 text-blue-600`}
        >
          <div className="flex justify-between ">
            <div className="p-2 rounded-lg bg-gray-950 shadow-lg shadow-gray-400">
              <p className="gradient-text">wheely</p>
            </div>
            <div></div>
          </div>
          <div className="flex w-full space-x-7">
            <div className="w-1/2 space-y-2">
              <h1 className="font-bold">About Us</h1>
              <div className="border-t border-gray-400 opacity-30"></div>
              <p className="text-sm opacity-75">
                Wheely makes car sharing simple and seamless through
                cutting-edge technology. We provide an entirely contactless
                experience—no standing in line at a rental counter, no tedious
                paperwork, and no need to meet anyone to exchange keys. Whether
                you're renting a car or listing your own, Wheely offers a
                hassle-free way to access or share vehicles on-demand,
                empowering you to travel or earn with ease.
              </p>
            </div>
            <div className="w-1/2 flex space-x-7">
              <div className="w-1/3 space-y-2">
                <h1 className="font-bold">Learn More</h1>
                <div className="border-t border-gray-400 opacity-30"></div>
                <ul className="space-y-3">
                  {[
                    "How does it Work?",
                    "A trusted service",
                    "Wheely app",
                    "Contact",
                    "Blog",
                  ].map((items, i) => (
                    <li key={i} className="text-xs">
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/3 space-y-2">
                <h1 className="font-bold">Resourses</h1>
                <div className="border-t border-gray-400 opacity-30"></div>
                <ul className="space-y-3">
                  {["Owners resourses", "Pros", "Help center"].map(
                    (item, i) => (
                      <li key={i} className="text-xs">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="w-1/3 space-y-2">
                <h1 className="font-bold">Partners</h1>
                <div className="border-t border-gray-400 opacity-30"></div>
                <ul className="space-y-3">
                  {["Partner with us", "Drive with inDrive"].map((item, i) => (
                    <li key={i} className="text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                  color: isHovered === item.id ? `${item.color}` : "#2563eb",
                  transition: "color 0.3s ease",
                  opacity: isHovered === item.id ? 1 : 0.65,
                }}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`h-2/6 flex flex-col justify-center items-center gap-5 ${
            darkMode && "text-slate-400"
          }`}
        >
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
          <div className="text-[11px] opacity-50">
            &copy; Wheely 2024 - All right reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
