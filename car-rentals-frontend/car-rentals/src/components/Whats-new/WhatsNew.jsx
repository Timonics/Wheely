import React from "react";

import { Link } from "react-router-dom";

import imgComingSoon from "../../assets/imgComingSoon/imgComingSoon.webp";
import { useMyAppContext } from "../../context/myAppContext";

const WhatsNew = () => {
  const { darkMode } = useMyAppContext();
  const whatsNew = [
    {
      image: imgComingSoon,
      icon: "128176",
      hashTag: "#Owners",
      title: "Turn your car into your pay check",
      desc: "Buying, insuring and maintaining your car is expensive...But you can change that.",
    },
    {
      image: imgComingSoon,
      icon: "128187",
      hashTag: "#Updates",
      title: "Enhanced User Interface",
      desc: "Our app has a fresh new look and feel! Enjoy a more intuitive and user-friendly interface, making it easier than ever to browse, book, and manage your rentals. We’ve streamlined the booking process to get you on the road faster.",
    },
    {
      image: imgComingSoon,
      icon: "127775",
      hashTag: "#Rentals",
      title: "Loyalty Rewards Program",
      desc: "Introducing our new loyalty rewards program! Earn points with every rental and enjoy exclusive benefits such as discounts, free upgrades, and priority support. The more you rent, the more you save!",
    },
  ];

  const randShuff = (arr) => {
    const shuff = arr.sort(() => Math.random() - 0.5);
    return shuff;
  };

  const whatsNewElements = randShuff(
    whatsNew.map((item, i) => (
      <Link
        key={i}
        to=""
        className={`w-1/3 h-[400px] rounded-xl shadow-2xl shadow-gray-950 flex flex-col ${
          darkMode ? "bg-gray-950" : "bg-gray-900"
        }`}
      >
        <img
          src={item.image}
          alt=""
          className="w-full h-[250px] rounded-t-xl bg-slate-500 object-cover object-center opacity-60"
        />
        <div
          className={`${
            darkMode & "text-slate-200"
          } flex flex-col justify-center space-y-1 px-4 py-2 text-blue-400`}
        >
          <p className="text-xs rounded-full border-2 border-blue-400 w-fit px-1 ">
            {item.hashTag}
          </p>
          <div className="flex gap-3 items-center">
            {String.fromCodePoint(item.icon)}
            <h1 className="font-bold text-lg">{item.title}</h1>
          </div>
          <p className="text-[11px] opacity-50">{item.desc}</p>
        </div>
      </Link>
    ))
  );

  return (
    <div
      className={`${
        darkMode && "bg-slate-500"
      } bg-blue-950 p-10 flex flex-col gap-7 items-center justify-center`}
    >
      <h1
        className={`${
          darkMode && "text-slate-800"
        } text-3xl font-bold text-slate-300`}
      >
        What's New at{" "}
        <span className={`${darkMode && "text-blue-900"} text-blue-400`}>
          Wheely
        </span>
      </h1>
      <div className="flex gap-10 items-center justify-center">
        {whatsNewElements}
      </div>
    </div>
  );
};

export default WhatsNew;
