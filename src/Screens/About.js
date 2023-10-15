import React from 'react'
import {infotext} from '../info'
import image from '../images/about.jpg'

const About = () => {
  return (
    <div id="about" className='flex items-center justify-between space-x-20 px-[13%] pt-[4%] h-[90vh]'>
      <div>
        <img src={image} alt="About Image" className="w-[700vh] object-cover rounded-xl"/>
      </div>

      <div className='flex-col space-y-2'>
        <span className='font-bold text-sky-600 text-lg'>ABOUT ME</span>
        <div className='font-extrabold text-2xl'>A passionate Software Developer based in Kathmandu,Nepal 📍</div>
        <p className='text-slate-600'>{infotext}</p>

      </div>
    </div>
  )
}

export default About