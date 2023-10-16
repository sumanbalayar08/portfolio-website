import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    /*
    <div className='flex justify-between px-[13%] pt-[4%] h-[25vh] bg-gray-800 text-white'>
        <div className='text-lg font-bold'>
        Copyright © 2023. All rights are reserved
        </div>
        <div className="flex space-x-4">
              <Link to='https://www.linkedin.com/in/balayar08/'><AiOutlineLinkedin size={30} color='white' className="cursor-pointer" /></Link>
              <Link to='https://github.com/sumanbalayar08'><AiOutlineGithub size={30} color='white' className="cursor-pointer" /></Link>
        </div>
    </div>
    */
    <div className="bg-gray-800 py-[8%]">
      <div className="flex-1 md:flex lg:flex-row text-white items-center md:justify-between px-[2%] md:px-[13%] md:space-y-0 space-y-2">
        <div className="text-md md:text-lg font-bold text-center">
          Copyright © 2023. All rights are reserved
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="https://www.linkedin.com/in/balayar08/">
            <AiOutlineLinkedin
              size={30}
              color="white"
              className="cursor-pointer"
            />
          </Link>
          <Link to="https://github.com/sumanbalayar08">
            <AiOutlineGithub
              size={30}
              color="white"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
