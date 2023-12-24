import './dropdownnav.css'
import {Container ,Button, LoginForm} from './../index'

import {useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import blackLogo from './../../assets/images/NamX_Logo-black.png'
import { Link } from 'react-router-dom';
import './../../tailwindcss.css';
import { useSelector ,useDispatch } from 'react-redux'
import { dropDownActions } from './../../store/dropDownSlice'


const DropDownNav = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.drop.drop)
    const [pop,setPop] = useState(false)
    

    
    
       


    let droping = ''
    if (status){
        droping = 'absolute'
    }else{
        
        droping = 'transform translate-y-[-70rem] absolute'
    }

    const PopHandler = ()=>{
        dispatch(dropDownActions.notDroping());
        setPop(!pop)
    
    }

    

  return (
    <>
        <div  className={` ${droping}     transition-all duration-500  top-0    backdrop-blur-[2px] z-50 h-[100vh] left-0 w-full flex flex-col  `}>
            <div  className='  flex flex-col rounded-sm bg-white '>
                    <div className='border-b '>

                        <Container>
                            <div className='mini-header py-4 px-[2rem]  flex flex-row-reverse justify-between items-center' >

                                <span className=' '>
                                    <Button type='my-primary'  cls='p-2' onClick={()=>dispatch(dropDownActions.notDroping())} ><RiCloseFill size={25} /></Button>
                                </span>
                                <span className='w-[200px] text-center text-[2rem] '><Link to='/' onClick={()=>dispatch(dropDownActions.notDroping())} ><img src={blackLogo} alt='logoBrand'   className='w-[60px] md:w-[90px]'/></Link></span>
                            </div>  
                        </Container>  
                    </div>
                    <div   className='dropown-menu py-[2rem] justify-center text-center md:text-start  flex flex-col rounded-sm'>
                        

                    <Link to='/' className=" link " onClick={()=>dispatch(dropDownActions.notDroping())} >     <span >Home</span></Link>
                    <Link to='/Products' className=" link " onClick={()=>dispatch(dropDownActions.notDroping())}>      <span >Items</span></Link>
                    <Link to='/about'  className='link' onClick={()=>dispatch(dropDownActions.notDroping())}> <span >About</span></Link>
                    <Link to='/' className='link' onClick={()=>dispatch(dropDownActions.notDroping())}><span >Contact</span> </Link>
                            <span className='link' onClick={PopHandler} >Join us</span> 
                    
                        
                        
                    </div>  
                    
            </div>
            <span className='flex-grow ' onClick={()=>dispatch(dropDownActions.notDroping())}>
                
            </span>
        </div>
        <LoginForm pop={pop} PopHandler={PopHandler} />    
    </>
  )
}

export default DropDownNav