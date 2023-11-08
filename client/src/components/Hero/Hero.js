import './Hero.css'
import { Button } from './../index'
import {Link } from 'react-router-dom'
import homeVideo from './../../assets/vedios/home-video.mp4'
import React from 'react'

const Hero = () => {
  return (
    <>
        <section className='relative h-[100vh] bg-gradient-to-b  from-black via-transparent to-black bg-opacity-[50%]  '>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1] ">
            <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
              <source src={homeVideo} type='video/mp4' />
            </video>
          </div>
          
          <div className='flex flex-col gap-8 h-full justify-end items-center transform translate-y-[-10%] container mx-auto '>
            <div>
              {/* <h1 className='text-white text-[1.2rem] lg:text-[3rem]'>" EMBRACE THE FUTURE'S POTENTIAL "</h1> */}
              
            </div>
            <Link to='' >
              <Button cls='w-fit px-[6rem] md:px-[9rem] py-[.5rem]' type='my-third '>EXPLORE</Button>
            </Link>
          </div>

          </section>
    </>
  )
}

export default Hero