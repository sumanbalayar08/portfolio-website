import React from 'react'
import { SocialIcon } from 'react-social-icons';
import myImage from '../images/suman.png'


const Home = () => {
  return (
    <div className='bg-white p-18'>
        <div className='flex items-center justify-center m-10 space-x-8'>
        <div className='space-y-4'>
            <header className='space-y-2'>
            <h1 className='text-black font-bold text-6xl'>Hello 👋.</h1>
            <p className='text-slate-700 text-xl font-bold leading-loose'>I'm <span className='text-red-500'>Balayar Suman.</span> Software Developer.<br/>  Devops Engineer.Tech Enthusiast.<br/> Learner for Life👨‍🎓</p>
            </header>
            <section className='space-x-2'>
            <SocialIcon/>
            <SocialIcon url="https://github.com/sumanbalayar08" />
            <SocialIcon url="https://www.linkedin.com/in/balayar07/" />
            <SocialIcon url="https://www.upwork.com/freelancers/~0101ed0c38089c4486" />
            <SocialIcon url="https://www.facebook.com/suman.balayarr" />
            </section>
            <section>
                <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 text-2xl font-medium rounded'>Contact Me</button>
            </section>
        </div>
        <div>
            <img src={myImage} alt="Suman Balayar"/>
        </div>
        </div>
        <div>
            <div className='flex text-black font-bold text-4xl items-center justify-center'>Here's What I do</div>
            <div className='flex items-center justify-center'>
                <div>
                    <p>This is the next image section</p>
                </div>
                <div>
                    <p>This is the backend development part</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;