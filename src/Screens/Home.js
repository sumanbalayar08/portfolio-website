import React from "react";
import myImage from "../images/suman.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import image1 from "../images/icon1.svg";
import image2 from "../images/icon2.svg";
import image3 from "../images/icon3.svg";
import image4 from "../images/icon4.svg";
import image5 from "../images/icon5.svg";
import image6 from "../images/icon6.svg";
import image7 from "../images/icon7.svg";
import image8 from "../images/icon8.png";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image7,
    image8,
    image6,
  ];

  return (
    <div id="home" className="flex-col space-y-7 px-[8%] py-[4%] bg-slate-100">
      <div className="flex-1 lg:flex lg:flex-row-reverse space-x-2 justify-between">
        <div className="flex items-center justify-center">
          <img src={myImage} alt="My Pic" className="w-2/3 lg:w-[55vh]" />
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-2 text-center text-4xl lg:text-6xl lg:text-left ">
            <p className="font-extrabold">Full Stack Software</p>
            <p className="font-extrabold">Developer👋</p>
          </div>

          <p className="text-lg text-slate-700 font-sans lg:leading-8 text-center lg:text-left">
            Hello, I'm Suman Balayar. A passionate Full Stack Software Developer
            based in Nepal.📍
          </p>

          <div className="flex space-x-4 items-center justify-center lg:justify-start">
            <Link to="https://www.linkedin.com/in/balayar08/">
              <AiOutlineLinkedin size={30} className="cursor-pointer" />
            </Link>
            <Link to="https://github.com/sumanbalayar08">
              <AiOutlineGithub size={30} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 items-center space-y-4 lg:space-y-0 lg:flex lg:space-x-8">
        <div className="flex-initial items-center justify-center lg:flex lg:space-x-2 lg:justify-start">
          <div className="text-lg text-center">Tech Stack</div>
          <div className="lg:hidden flex items-center justify-center">
            <div className="h-1 w-28 border-b-2 border-slate-400"></div>
          </div>
          <div className="hidden lg:block h-6 w-1 border-r-2 border-slate-400"></div>
        </div>
        <div className="flex space-x-2 md:space-x-4 lg:space-x-6 items-center justify-center">
          {images
            .reduce((result, item, index) => {
              if (index % 2 === 0) {
                const pair = [images[index], images[index + 1]];
                result.push(pair);
              }
              return result;
            }, [])
            .map((pair, index) => (
              <div key={index} className="flex -space-x-1">
                <img
                  src={pair[0]}
                  alt={`Image ${index} - 1`}
                  className="w-8 md:w-12 lg:w-16 flex"
                />
                <img
                  src={pair[1]}
                  alt={`Image ${index} - 2`}
                  className="w-8 md:w-12 lg:w-16 flex"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
