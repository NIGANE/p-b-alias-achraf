import './Popup.css'
import {Button} from './../index'
import './../../tailwindcss.css';
import {useEffect, useRef} from 'react'
import {RiCloseFill} from 'react-icons/ri'


const Popup = ({children,trigger,muteTrigger}) => {
  const popHolder = useRef()
  

useEffect(()=>{
  if(trigger){
    popHolder.current.addEventListener('click',()=>{
      muteTrigger()
    })
  }
},[trigger,muteTrigger])
  

  return (trigger ? ( 
    <>
      {/* <div ref={popHolder} className='fixed top-0 left-0 w-[100%] h-[100vh] bg-black bg-opacity-[30%] flex justify-center items-center'>
          <div className='relative p-[32px] max-w-[640px] w-[100%] bg-white text-black  rounded-lg '>
              <span className='absolute top-[1rem] right-[1rem]'><Button onClick={muteTrigger} cls={'p-[1rem]'} type='rounded-btn'><RiCloseFill size={25} /></Button></span>
              <main className='text-black '>
                  {children}
              </main>
          </div>
      </div> */}
      <div className='fixed top-0 left-0  flex justify-center items-center   h-[100vh] w-[100%]   '>
        <span ref={popHolder} className='absolute top-0 left-0 bg-black  bg-opacity-[30%] backdrop-blur-[12px]  w-[100%] h-[100%] '></span>
        <div className='relative p-[32px] max-w-[640px] w-[100%] bg-white text-black h-fit  rounded-lg '>
              <span className='absolute top-[1rem] right-[1rem] z-10'><Button onClick={muteTrigger} cls={'p-[1rem]'} type='rounded-btn'><RiCloseFill size={25} /></Button></span>
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