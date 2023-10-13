import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between shadow-md py-[2%] px-[4%] sticky">
      <div>
        <span className="text-xl font-semibold">Balayar.DEV</span>
      </div>

      <ul className="flex space-x-4 text-lg font-medium font-sans">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};
export default Navbar;
