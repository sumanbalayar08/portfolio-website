import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const toggleMenu = () => {
    settoggle(!toggle);
  };

  return (
    <div className="bg-white w-full top-0 left-0 shadow-sm h-[16]">
      <div className="md:flex items-center justify-between py-4 sticky bg-white md:px-6">
        <div>
          <span className="text-xl font-semibold">Balayar.DEV</span>
        </div>

        <ul className="md:flex space-x-4 text-lg font-medium font-sans hidden">
          <li className="hover:text-sky-600 cursor-pointer">
            <ScrollLink activeClass="active" to="home" spy={true} smooth={true}>
              Home
            </ScrollLink>
          </li>
          <li className="hover:text-sky-600 cursor-pointer">
            <ScrollLink to="about" spy={true} smooth={true}>
              About
            </ScrollLink>
          </li>
          <li className="hover:text-sky-600 cursor-pointer">
            <ScrollLink to="projects" spy={true} smooth={true}>
              Projects
            </ScrollLink>
          </li>
          <li className="hover:text-sky-600 cursor-pointer">
            <ScrollLink to="contacts" spy={true} smooth={true}>
              Contacts
            </ScrollLink>
          </li>
        </ul>

        <ul
          className={`absolute md:hidden items-center bg-white top-[61px] w-full space-y-4 justify-center transform ${
            toggle ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center space-y-4">
            <li className="hover:text-sky-600 cursor-pointer">
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </ScrollLink>
            </li>
            <li className="hover:text-sky-600 cursor-pointer">
              <ScrollLink to="about" spy={true} smooth={true}>
                About
              </ScrollLink>
            </li>
            <li className="hover:text-sky-600 cursor-pointer">
              <ScrollLink to="projects" spy={true} smooth={true}>
                Projects
              </ScrollLink>
            </li>
            <li className="hover:text-sky-600 cursor-pointer">
              <ScrollLink to="contacts" spy={true} smooth={true}>
                Contacts
              </ScrollLink>
            </li>
          </div>
        </ul>

        <GiHamburgerMenu
          className="absolute cursor-pointer block md:hidden right-8 top-5 scale-110"
          onClick={toggleMenu}
        />
      </div>
      <hr className="border-slate-300 border-solid" />
    </div>
  );
};
export default Navbar;
