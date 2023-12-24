import './Hero.css'
import { useState,useRef } from 'react'
import { Button } from './../index'
import {Link } from 'react-router-dom'
import homeVideo from './../../assets/vedios/home-video.mp4'
import React from 'react'
import { IoVolumeMuteOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  

 

  const handleToggleMute = () => {
    videoRef.current.muted = isMuted;
    setIsMuted(!isMuted);
  };
  

  return (
    <>
        <section className='relative h-[100vh] bg-gradient-to-b  from-black via-transparent to-black bg-opacity-[50%]  '>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1] ">
            <video 
            ref={videoRef}
            
            autoPlay 
            loop 
            muted
            playsInline 
            className='w-full h-full object-cover'
            >
              <source src={homeVideo} type='video/mp4' />
            </video>
          </div>
          
          <div className='flex flex-col gap-8 h-full justify-end items-center transform translate-y-[-10%] container mx-auto '>

            <div className='flex flex-col items-center gap-4'>
              
              <Button cls={`max-w-fit-content  p-3 `} event={handleToggleMute}  type='my-third'>
                {(!isMuted && <IoVolumeMuteOutline />)}
                {(isMuted && <GoUnmute />)}
              
              </Button>
              
            </div>

            <Link to=''   >
              <Button cls='w-fit px-[6rem] md:px-[9rem] py-[.5rem]' type='my-third '  >EXPLORE</Button>
            </Link> 
          </div>
          
          </section>
    </>
  )
}

export default Hero