import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div id="contacts" className="flex-col py-[4%] items-center justify-center space-y-4 bg-slate-100 md:pl-[10%]">
      <div className="font-bold text-sky-600 text-lg text-center md:text-left">
        CONTACT
      </div>
      <div className="font-extrabold text-2xl text-center md:text-left">
        Hit me up! 👇
      </div>
      <div className="flex-1 md:flex text-center md:space-x-8">
        <div className="flex-initial md:flex items-center justify-center md:space-x-2 md:justify-start">
          <div className="flex items-center justify-center">
            <FaLocationDot
              color="#147efb"
              size={50}
              className="rounded-full shadow-md p-3"
            />
          </div>

          <div className="flex-col space-y-2 md:text-left">
            <span className="text-lg font-bold">Location</span>
            <p className="text-slate-600">Kathmandu, Nepal</p>
          </div>
        </div>

        <div className="flex-initial md:flex items-center justify-center md:space-x-2 md:justify-start">
          <div className="flex items-center justify-center">
            <BiLogoGmail
              color="#147efb"
              size={50}
              className="rounded-full shadow-md p-3"
            />
          </div>

          <div className="flex-col space-y-2 md:text-left">
            <span className="text-lg font-bold">Mail</span>
            <p className="text-slate-600">
              <Link to="mailto:sumanbalayar62@gmail.com">
                sumanbalayar62@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
