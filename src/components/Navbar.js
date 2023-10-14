import React from "react";
import {Link as ScrollLink} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between shadow-sm py-[2%] px-[4%] sticky top-0 bg-white">
      <div>
        <span className="text-xl font-semibold">Balayar.DEV</span>
      </div>

      <ul className="flex space-x-4 text-lg font-medium font-sans">
        <li className="hover:text-sky-600 cursor-pointer"><ScrollLink activeClass="active" to="home" spy={true} smooth={true}>Home</ScrollLink></li>
        <li className="hover:text-sky-600 cursor-pointer"><ScrollLink to="about" spy={true} smooth={true}>About</ScrollLink></li>
        <li className="hover:text-sky-600 cursor-pointer"><ScrollLink to="projects" spy={true} smooth={true}>Projects</ScrollLink></li>
        <li className="hover:text-sky-600 cursor-pointer"><ScrollLink to="contacts" spy={true} smooth={true}>Contacts</ScrollLink></li>
      </ul>
    </div>
  );
};
export default Navbar;
