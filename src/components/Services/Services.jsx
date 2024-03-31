import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import { FaRunning } from "react-icons/fa";

const skillsData = [
  {
    name: "Best Prices",
    icon: (
      <FaCameraRetro className="text-5xl text-green-500 group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "We have the best prices you can get for renting a car in Singapore. ",
    aosDelay: "0",
  },
  {
    name: "Quick & Precise",
    icon: (
      <MdPrecisionManufacturing className="text-5xl text-blue-500 group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Cars are in top conditions and there will be a smooth process with payments",
    aosDelay: "0",
  },
  {
    name: "Whenever and Wherever You Need",
    icon: (
      <FaRunning className="text-5xl text-pink-500 group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Let us know where you want to start driving and we will send a driver to the location with your CAR",
    aosDelay: "0",
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-papyrus sm:text-4xl">
            Why pick us ?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skillsData.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-5 sm:p-5 sm:py-16 bg-dark hover:bg-purple-500 duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1 className="text-oswald font-bold text-2xl">{skill.name}</h1>
              <p className="font-papyrus font-bold text-xl">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
