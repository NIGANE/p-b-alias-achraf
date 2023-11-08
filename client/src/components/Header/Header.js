import './Header.css'
// import {Button} from './../index'
import './../../tailwindcss.css';
import { useRef ,useState ,useEffect} from 'react';
import { Container ,Button ,LoginForm } from './../index';
import { RiCloseFill ,RiMenu2Line } from 'react-icons/ri'
import whiteLogo from './../../assets/images/NamX_Logo-White.png'
import blackLogo from './../../assets/images/NamX_Logo-black.png'
import { Link } from 'react-router-dom';






const Header = () => {
    const [drop,setDrop] =useState(false)
    const [headerBg , setHeaderBg ] = useState({bgColor:'bg-opacity-40',paddingY:'py-[.5rem]'})
    const [pop,setPop]=useState(false)
    
    
    
    const dropdown = useRef()
    // Drop Down Navbar ------------------- :
    useEffect(()=>{
        
        if(drop){
            dropdown.current.classList.remove('transform') 
            dropdown.current.classList.remove('translate-y-[-70rem]') 
        }else{
            
            dropdown.current.classList.add('transform') 
            dropdown.current.classList.add('translate-y-[-70rem]') 
        }
    },[drop])
    
    //Never Mind ------------------- :
    const menuLinks = useRef()
    
    if(drop){
        document.body.addEventListener('click',(e)=>{
            if (e.target === document.body){
                setDrop(!drop)
            }
        })
    }

    
    //changing Header Color And Size ------------------- :
    window.addEventListener('scroll' ,()=>{
        
        if(window.scrollY >= 570 && window.scrollY <= 1050 ){
            setHeaderBg({bgColor:'bg-black bg-opacity-[50%] backdrop-blur-[20px]',paddingY:'py-[.4rem]'})
        }else if(window.scrollY >= 1050){
            
            setHeaderBg({bgColor:'bg-opacity-100 bg-black',paddingY:'py-[.4rem]'})
        }else{
            setHeaderBg({bgColor:'bg-opacity-40',paddingY:'py-[.5rem]'})

        }
    })
    

    
   
    
    
    
    //Join us hundler -------------;
    const popClickHandler = ()=>{
        setDrop(false)
        setPop(!pop)
    }

  
    
  return (
    <header className='z-10 w-full  fixed  top-0 '>
      

            <div className={`${headerBg.bgColor} transition-all duration-700  rounded-b-md `}>
                <Container>

                    <nav className={`px-[1rem] xl:px-[6rem] flex justify-between  items-center ${headerBg.paddingY} transition-all duration-700`}>
                        <span className=" logo ">
                            <Link to='/'><img src={whiteLogo} alt='logoBrand'  className=' w-[50px] md:w-[90px]'/></Link>
                        </span>   
                        <span className='flex items-center justify-center'>
                            
                            <Button onClick={()=>setDrop(true)} type='my-primary' cls='p-2 flex justify-center items-center gap-2  ' > <span className='text-[1rem] lg:text-[1.2rem] text-white'>Menu</span> <RiMenu2Line color='white' size={25} /></Button>
                        </span>                    
                    </nav>

                </Container>
                <div ref={dropdown} className={` transform translate-y-[-70rem] bg-red-400  transition-all duration-500  top-0  absolute  backdrop-blur-[2px] z-[2] h-full  left-0 w-full  `}>
                    <div  className='  flex flex-col rounded-sm bg-white  '>
                            <div className='border-b '>

                                <Container>
                                    <div className='mini-header py-4 px-[2rem]  flex flex-row-reverse justify-between items-center' >

                                        <span className=' '>
                                            <Button type='my-primary' onClick={()=>setDrop(false)} cls='p-2' ><RiCloseFill size={25} /></Button>
                                        </span>
                                        <span className='w-[200px] text-center text-[2rem] '><Link to='/'><img src={blackLogo} alt='logoBrand' onClick={()=>setDrop(!drop)}  className='w-[60px] md:w-[90px]'/></Link></span>
                                    </div>  
                                </Container>  
                            </div>
                            <div ref={menuLinks}  className='dropown-menu py-[2rem] justify-center text-center md:text-start  flex flex-col rounded-sm'>
                              

                            <Link to='/' className=" link " onClick={()=>setDrop(!drop)}>     <span >Home</span></Link>
                            <Link to='' className=" link " onClick={()=>setDrop(!drop)}>      <span >Items</span></Link>
                            <Link to='/about'  className='link' onClick={()=>setDrop(!drop)}> <span >About</span></Link>
                            <Link to='/contact' className='link' onClick={()=>setDrop(!drop)}><span >Contact</span> </Link>
                            <Link to='' className='link' onClick={popClickHandler}>         <span >Join us</span> </Link>
                            
                                
                                
                            </div>  
                            
                    </div>
                </div>

            </div>


        
    <LoginForm pop={pop} popClickHandler={popClickHandler} />
    </header>
  )
}

export default Header