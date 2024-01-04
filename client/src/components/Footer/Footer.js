import './Footer.css';
import logoBlack from  './../../assets/images/NamX_Logo-White.png';
import {Link } from 'react-router-dom'


import React from 'react';

const Footer = () => {
  return (

    
        // <footer className="bg-black py-12">
        //   <div className="container mx-auto">
        //     <p className="text-white text-center">
        //       Copyright &copy; NamX_COMPANY 🤍 2023. All rights reserved.
        //     </p>
        //     <div>
        //         <img src={logoBlack} alt='Brand Logo' />
        //     </div>
            
        //   </div>
        // </footer>
    
    
    <div className='bg-black p-4'>
        
        <footer className=" rounded-lg shadow   ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col items-center justify-start " >
                    <span>
                        <Link>
                            <img src={logoBlack} alt='logo Brand Namx' className='p-0 m-0 lg:max-w-[13rem] max-w-[10rem] ' />
                        </Link>
                    </span>
                    
                    <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500  dark:text-gray-400">
                        <li>
                            <Link to="/about" className="mr-4 hover:underline md:mr-6 md:text-[1rem] ">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6 md:text-[1rem]">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6 md:text-[1rem] ">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline md:text-[1rem]">Contact</Link>
                        </li>
                    </ul>
                    <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/ttps://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>


    </div>

      )
    };
 

export default Footer;