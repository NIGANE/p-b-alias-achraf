import './Popup.css'

import './../../tailwindcss.css';
import { useEffect, useRef} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import { useSelector } from 'react-redux';


const Popup = ({children,PopHandler}) => {
  const popHolder = useRef()
  const trigger = useSelector(state => state.loginPop.pop)
 
useEffect(()=>{
  
  if(trigger){
    popHolder.current.addEventListener('click',()=>{
      PopHandler()
    })}
    
},[trigger,PopHandler])

  

  return (trigger ? ( 
    <>
      <div className='fixed top-0 left-0  flex justify-center items-center z-40   h-[100vh] w-[100%]   '>
        <span ref={popHolder} className='absolute top-0 left-0 bg-black  bg-opacity-[30%] backdrop-blur-[12px]  w-[100%] h-[100%] '></span>
        <div className='relative p-[32px] max-w-[640px] w-[100%] bg-white text-black h-fit  rounded-lg '>
              <span className='absolute top-[1rem] right-[1rem] z-10 '  onClick={PopHandler} ><button className='text-2xl' ><RiCloseFill size={35} /></button></span>
              <main className=''>

                  {children}

              </main>
          </div>
      </div>
    
    </>
    ) : ''
  )
}

export default Popup