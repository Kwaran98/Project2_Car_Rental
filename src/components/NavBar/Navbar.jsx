import React, { useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link } from "react-router-dom";
import Carcard from "../Carcard/Carcard.jsx";
import About from "../About/About";
import Contact from "../Contact/Contact";

export const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#",
  },
  {
    id: "2",
    name: "CARS",
    link: "../Carcard/Carcard.jsx",
  },
  {
    id: "3",
    name: "ABOUT",
    link: "../About/About",
  },
  {
    id: "4",
    name: "CONTACT",
    link: "../Contact/Contact",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const togglemenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-mono">Car Renties</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className="inline-block py-2 hover:border-b-2 
                  hover:text-green-500
                  hover:border-green-500
                  transition-colors
                  duration-500
                  text-lg
                  font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* Dark Mode Icons */}
              <div>
                {theme === "dark" ? (
                  <WiDaySunny
                    onClick={() => setTheme("light")}
                    className="text-3xl"
                  />
                ) : (
                  <WiMoonWaxingCrescent3
                    onClick={() => setTheme("dark")}
                    className="text-2xl"
                  />
                )}
              </div>
            </ul>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Handburger Menu */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={togglemenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <HiMenuAlt3
                onClick={togglemenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
