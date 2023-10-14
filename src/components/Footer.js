import React from 'react'
import { AiOutlineGithub,AiOutlineLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-between px-[13%] pt-[4%] h-[25vh] bg-gray-800 text-white'>
        <div className='text-xl font-bold'>
        Copyright © 2023. All rights are reserved
        </div>
        <div className="flex space-x-4">
              <Link to='https://www.linkedin.com/in/balayar08/'><AiOutlineLinkedin size={30} color='white' className="cursor-pointer" /></Link>
              <Link to='https://github.com/sumanbalayar08'><AiOutlineGithub size={30} color='white' className="cursor-pointer" /></Link>
            </div>
    </div>
  )
}

export default Footer