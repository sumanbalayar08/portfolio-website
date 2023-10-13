import React from "react";
import { SocialIcon } from "react-social-icons";
import myImage from "../images/suman.png";
import waved from "../images/waving.1bae5fcfb51082b5c2b4.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import image1 from '../images/icons.svg'
import image2 from '../images/icon2.svg'
import image3 from '../images/icon3.svg'


const Home = () => {

  return (
    <div className="flex-col space-y-4 px-[13%] pt-[6%] bg-slate-100">
      <div className="flex space-x-2 justify-between">
        <div className="flex-col space-y-6">
          <div className="space-y-2">
            <p className="text-6xl font-extrabold">Full Stack Software</p>

            <p className="text-6xl font-extrabold">Developer👋</p>
          </div>

          <p className="text-lg text-slate-700 font-sans leading-8">
            Hello, I'm Suman Balayar. A passionate Full Stack Software Developer
            based in Nepal. 📍
          </p>

          <div className="flex space-x-4">
            <AiOutlineLinkedin size={30} className="cursor-pointer" />
            <AiOutlineGithub size={30} className="cursor-pointer" />
          </div>
        </div>
        <div>
          <img src={myImage} alt="My Pic" />
        </div>
      </div>
      <div className="flex items-center space-x-20">
        <div className="flex items-center space-x-4">
        <span>Tech Stack</span>
        <div className="h-5 w-1 border-r-2 border-slate-400"></div>
        </div>
        <div className="flex space-x-8">
            <img src={image1}/>
            <img src={image2}/>

            <img src={image3}/>


        </div>

      </div>
    </div>
  );
};

export default Home;
