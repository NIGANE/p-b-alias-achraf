import './Sentence.css'
import { useRef } from 'react'





const Sentence = ({children}) => {


      //Animastion For Section 2 ------------------- :
  const h3 = useRef()
  window.addEventListener('scroll',()=>{
    
    if(window.scrollY >= 530 && window.scrollY <= 1300 ){
     
      h3.current.classList.add('translate-x-[0rem]')
      h3.current.classList.add('opacity-[100%]')
      
    }else {
      h3.current.classList.remove('translate-x-[0rem]')
      h3.current.classList.remove('opacity-[100%]')

    }
    
  })
  return (
    <>
        <section className='bg-black text-white h-auto w-auto overflow-hidden p-0 border-none'>
          <h3 ref={h3} className='2xl:text-[15rem] lg:text-[9rem] py-[5rem] text-[5rem] sm:text-[7rem]  transform translate-x-[-3.3rem] opacity-0 transition-all duration-700 text-center'>{children}</h3>
        </section>
    </>
  )
}

export default Sentence