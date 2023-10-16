import React from 'react'
import {infotext} from '../info'
import image from '../images/about.jpg'

const About = () => {
  return (
    <div id="about" className='flex-1 lg:flex py-[4%] px-[8%] items-center justify-center lg:justify-between lg:space-y-0'>
      <div className='flex items-center justify-center lg:items-start lg:justify-start'>
        <img src={image} alt="About Image" className="object-cover rounded-xl w-3/5 lg:w-11/12"/>
      </div>

      <div className='flex-col space-y-2'>
        <div className='font-bold text-sky-600 text-md lg:text-lg text-center lg:text-left'>ABOUT ME</div>
        <div className='font-extrabold text-xl md:text-2xl text-center lg:text-left'>A passionate Software Developer based in Kathmandu,Nepal 📍</div>
        <p className='text-slate-600 text-md text-center lg:text-left'>{infotext}</p>
      </div>
    </div>
  )
}

export default About