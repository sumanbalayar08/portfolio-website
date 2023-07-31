import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black py-5 text-white flex flex-col sm:flex-row">
        <div className="ml-20">
            <h2>Suman's Portfolio</h2>
        </div>
      <ul className="flex ml-40 space-x-0 sm:space-x-8">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/edu'>Education and Certifications</Link></li>
        <li><Link to='/exp'>Experience</Link></li>
        <li><Link to='/project'>Projects</Link></li>
        <li><Link to='/contact'>Contact & Resume</Link></li>
      </ul>
    </div>
  );
};
export default Navbar;
