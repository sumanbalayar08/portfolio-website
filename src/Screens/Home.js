import React from "react";
import { SocialIcon } from "react-social-icons";
import myImage from "../images/suman.png";
import waved from "../images/waving.1bae5fcfb51082b5c2b4.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import image1 from "../images/icon1.svg";
import image2 from "../images/icon2.svg";
import image3 from "../images/icon3.svg";
import image4 from "../images/icon4.svg";
import image5 from "../images/icon5.svg";
import image6 from "../images/icon6.svg";
import image7 from "../images/icon7.svg";
import image8 from "../images/icon8.png";

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
    <>
      <div className="flex-col space-y-7 px-[13%] pt-[8%] bg-slate-100 h-[90vh]">
        <div className="flex space-x-2 justify-between">
          <div className="flex-col space-y-6">
            <div className="space-y-2">
              <p className="text-6xl font-extrabold">Full Stack Software</p>

              <p className="text-6xl font-extrabold">Developer👋</p>
            </div>

            <p className="text-lg text-slate-700 font-sans leading-8">
              Hello, I'm Suman Balayar. A passionate Full Stack Software
              Developer based in Nepal. 📍
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
          <div className="flex space-x-6">
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
                    className="w-16 flex"
                  />
                  <img
                    src={pair[1]}
                    alt={`Image ${index} - 2`}
                    className="w-16 flex"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>dfsfsdf</div>
    </>
  );
};

export default Home;
