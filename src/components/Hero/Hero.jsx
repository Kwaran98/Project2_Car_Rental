import React from "react";
import car from "../../assets/BMW_3_SERIES.png";

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div
          className="grid
        place-items-center grid-cols-1 sm:grid-cols-2"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="order-1 sm:order-2"
          >
            <img src={car} alt="" className="max-h-[600px] sm:scale-125" />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p
              data-aos="slide-right"
              data-aos-duration="1500"
              className="text-green-500 text-2xl font-serif"
            >
              SIMPLICITY
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="font-papyrus font-bold text-xl"
            >
              An easy and convenient way for individuals to rent vehicles for
              various purposes, such as business trips, vacations, or special
              occasions.
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="btn bg-green-500 text-white px-6 py-2 rounded-md hover:bg-primary duration-300"
            >
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
