import React from "react";
import Car2 from "../../assets/Mazda3.png";

const About = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1000">
            <img
              src={Car2}
              alt=""
              className="sm:scale-105
            sm:-translate-x-11 max-h-[300px]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="font-papyrus font-bold text-xl"
              >
                At Car Renties, we strive to provide top-quality rental
                vehicles, exceptional customer service, and unbeatable
                convenience <br /> With a wide range of vehicles to choose from,
                transparent pricing, and easy booking process, renting a car
                with us is a breeze
              </p>
              <button
                data-aos="fade-up"
                data-aos-duration="1500"
                className="button-outline"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
