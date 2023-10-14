import React from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {BiLogoGmail} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Contacts = () => {
  return (
    <div id="contacts" className='flex-col px-[13%] pt-[4%] h-[50vh] items-center justify-center space-y-4 bg-slate-100'>
      <span className='font-bold text-sky-600 text-lg font-bold'>CONTACT</span>
      <div className='font-extrabold text-2xl'>
        Hit me up! 👇
      </div>
      <div className='flex space-x-8'>
        <div className='flex items-center space-x-4 p-2'>
          <FaLocationDot color='#147efb' size={50} className='rounded-full shadow-md p-3'/>
          <div className='flex-col space-y-2'>
            <span className='text-lg font-bold'>Location</span>
            <p className='text-slate-600'>Kathmandu, Nepal</p>
          </div>
        </div>
        <div className='flex items-center space-x-4 p-2'>
        <BiLogoGmail color='#147efb' size={50} className='rounded-full shadow-md p-3'/>
          <div className='flex-col space-y-2'>
            <span className='text-lg font-bold'>Mail</span>
            <p className='text-slate-600'><Link to="mailto:sumanbalayar62@gmail.com">sumanbalayar62@gmail.com</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts