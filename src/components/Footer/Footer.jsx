import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Contact",
    link: "#contact",
  },
  {
    title: "Blog",
    link: "#blog",
  },
];

const FooterLinks2 = [
  {
    title: "Events",
    link: "#events",
  },
  {
    title: "Podcasts",
    link: "#podcasts",
  },
  {
    title: "Invite a friend",
    link: "#invites",
  },
  {
    title: "Shows",
    link: "#shows",
  },
];

const FooterLinks3 = [
  {
    title: "Instagram",
    link: "#instagram",
  },
  {
    title: "Facebook",
    link: "#facebook",
  },
  {
    title: "Linkedin",
    link: "#linkedin",
  },
  {
    title: "Telegram",
    link: "#telegram",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-black dark:text-white ">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1
              className="text-xl sm:text-3xl font-bold 
            sm:text-left text-justify mb-3 gap-3 flex items-center"
            >
              Car Rental
            </h1>
            <p>
              A place where people can have an amazing experience renting cars
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow className=" hover:text-blue-400 duration-300" />
              <p>Singapore, Ang Mo Kio</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt className=" hover:text-pink-400 duration-300" />
              <p>+65 8123 8945</p>
            </div>
            {/* social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-purple-500 duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-blue-500 duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-blue-800 duration-300" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* First Columns */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl sm:text-3xl font-papyrus font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul>
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-green-900 duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Second Columns */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-papyrus font-bold sm:text-left text-justify mb-3">
                  For more Information
                </h1>
                <ul>
                  {FooterLinks2.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-green-900 duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Third Columns */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-papyrus font-bold sm:text-left text-justify mb-3">
                  Social
                </h1>
                <ul>
                  {FooterLinks3.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-green-900 duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
