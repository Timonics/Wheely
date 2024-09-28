import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const FeaturedCars = () => {
  const [showCars, setShowCars] = useState(false);

  const handleShowCars = () => {
    setShowCars(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (
    <div className={`py-10 ${!showCars ? "h-[400px]": "h-auto"} bg-gray-950 flex flex-col items-center justify-center gap-10`}>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl gradient-text">Featured Cars</h1>
        <p className="opacity-50 text-blue-300">
          Browse through our selection of cars available for your chosen dates.
        </p>
      </div>
      {!showCars ? (
        <button
          className="py-2 px-4 rounded-lg font-bold bg-blue-400 w-fit"
          onClick={handleShowCars}
        >
          Explore available cars
        </button>
      ) : (
        <Slider
          {...settings}
          className="w-[100%] h-[300px] flex items-center justify-center"
        >
          {[...Array(5).keys()].map((index) => (
            <div key={index} className="gap-3 justify-center items-center flex ">
              <div className="flex flex-col items-center justify-center h-[400px]">
                <div className="flex flex-col w-4/5  rounded-lg text-white p-3 gap-3 transition ease-in-out duration-500 hover:scale-110 bg-gray-800 shadow-2xl shadow-blue-950">
                  <img src="" alt="" className="w-full h-36 rounded-lg bg-slate-700" />
                  <div className="text-xs flex flex-col gap-2">
                    <h1>Car Name</h1>
                    <p>Price</p>
                    <p>Features</p>
                    <Link className="py-2 px-4 rounded-md text-center bg-blue-500">Book Me</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default FeaturedCars;
