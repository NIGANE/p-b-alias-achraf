import './Header.css'
// import {Button} from './../index'
import './../../tailwindcss.css';
import {useState } from 'react';
import { Container ,Button } from './../index';
import { RiMenu2Line } from 'react-icons/ri'
import whiteLogo from './../../assets/images/NamX_Logo-White.png'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {dropDownActions} from './../../store/dropDownSlice'
import { DropDownNav } from './../index'






const Header = () => {
    const [headerBg , setHeaderBg ] = useState({bgColor:'bg-opacity-40',paddingY:'py-[2rem]'})
    const dispatch = useDispatch()
    // const drop = useSelector(state=>state.drop.drop)
    
    
    

    

    
    
    

    
    //changing Header Color And Size ------------------- :
    window.addEventListener('scroll' ,()=>{
        
        if(window.scrollY >= 1  ){
            setHeaderBg({bgColor:'bg-black bg-opacity-[50%] backdrop-blur-[20px]',paddingY:'py-[.4rem]'})
        }
        // else if(window.scrollY >= 1050){
            
        //     setHeaderBg({bgColor:'bg-opacity-100 bg-black',paddingY:'py-[.4rem]'})
        // }
        else{
            setHeaderBg(
                // {bgColor:'bg-opacity-40',paddingY:'py-[.5rem]'}
                {bgColor:'bg-opacity-40',paddingY:'py-[2rem]'}
                
                )

        }
    })
    

    
   
    
    
    

  
    
  return (
    <header className='z-10 w-full  fixed  top-0 '>
      

            <div className={`${headerBg.bgColor} transition-all duration-700  rounded-b-md `}>
                <Container>

                <nav className={`px-[1rem] xl:px-[6rem] flex justify-between  items-center ${headerBg.paddingY} transition-all duration-700`}>
                        <span className=" logo ">
                            <Link to='/' ><img src={whiteLogo} alt='logoBrand'  className=' h-[3rem] w-[50px] md:w-[90px]'/></Link>
                        </span>   
                        <span className='flex items-center justify-center'>
                            
                            <Button  type='my-primary' cls='p-2 flex justify-center items-center gap-2  ' onClick={()=>dispatch(dropDownActions.droping())} > <span className='text-[1rem] lg:text-[1.2rem] text-white'>Menu</span> <RiMenu2Line color='white' size={25} /></Button>
                        </span>                    
                    </nav>

                </Container>
                
                <DropDownNav />
            </div>
    

        
    
    </header>
  )
}

export default Header