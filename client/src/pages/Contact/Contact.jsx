// import { Link } from 'react-router-dom'

import "./../../tailwindcss.css";
import React, { useState,useEffect } from "react";
import { FiDelete } from "react-icons/fi";

const Contact = () => {

  const [formData, setFormData] = useState({
    userName:'',
    email:'',
    message:''
  });
  const [pann , setPann ]  = useState([])
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])

  const btnHandler = ()=>{
    
    
    
    if(formData.email){
        if(formData.userName){
            if(formData.message){
                setPann([...pann,formData]);
                   // Clear input fields
                setFormData({...formData,
                    userName: '',
                    email: '',
                    message: '',
                  });
            }
        }
    }  
  }
 

  const deletePann = (item)=>{
    let arr = pann
    arr.splice(arr.indexOf(item),1)
    setPann([...arr])
  }


  return (
    <div className="">
      <section>
        <div>
          <img
            className="w-full"
            src="https://www.namx-hydrogen.com/img/contact/contact-namx-768w.webp"
            alt="Contact"
          />
        </div>
      </section>
      <section className="">
        <div className="container  mx-auto md:px-6 ">
          <section className=" z-20">
            <div className="container  px-6 md:px-12 ">
              <div className="  rounded-lg   backdrop-blur-[12px]  bg-opacity-0  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[3rem] mb-[1rem] ">
                <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="mx-auto mb-12 text-center lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mx-auto mb-6 h-8 w-8 text-primary text-blue-600 "
                    >
                      <path

                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                      />
                    </svg>
                    <h6 className="font-medium text-blue-600 ">Morocco</h6>
                  </div>
                  <div className="mx-auto mb-12 text-center lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mx-auto mb-6 h-8 w-8 text-primary text-blue-600 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <h6 className="font-medium text-blue-600 ">
                      تراست العاصمة
                    </h6>
                  </div>
                  <div className="mx-auto mb-6 text-center md:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mx-auto mb-6 h-8 w-8 text-primary text-blue-600 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <h6 className="font-medium text-blue-600">
                      + 01 234 567 89
                    </h6>
                  </div>
                  <div className="mx-auto text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mx-auto mb-6 h-8 w-8 text-primary text-blue-600 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                    <h6 className="font-medium text-blue-600">
                      Tax ID: 273 384
                    </h6>
                  </div>
                </div>
                <div className="mx-auto max-w-[700px] ">
                  <form method="post" onSubmit={(e)=>{e.preventDefault()}}>
                    <div className="relative mb-3" >
                      <input
                        onChange={(e)=>setFormData({...formData ,[e.target.name]:e.target.value})}
                        type="text"
                        required
                        value={formData.userName}
                        name="userName"
                        className="peer block min-h-[auto] w-full outline-none  border-[2px] border-blue-200 rounded   py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear  focus:placeholder:opacity-0   motion-reduce:transition-none text-blue-600 focus:bg-blue-200"
                        placeholder="Name"
                      />
                    </div>
                    <div className="relative mb-3" >
                      <input
                        onChange={(e)=>setFormData({...formData ,[e.target.name]:e.target.value})}
                        name = 'email'
                        type="email"
                        required
                        className="peer block min-h-[auto] w-full rounded    py-[0.32rem] px-3 leading-[1.6] outline-none border-[2px] border-blue-200 transition-all duration-200 ease-linear focus:placeholder:opacity-0  text-blue-600 motion-reduce:transition-none focus:bg-blue-200 "
                        placeholder="Email address"
                        value={formData.email}
                      />
                    </div>
                    <div className="relative mb-3" >
                      <textarea
                        onChange={(e)=>setFormData({...formData ,[e.target.name]:e.target.value})}
                        name="message"
                        required
                        className="peer block min-h-[auto] w-full bg-white rounded   py-[0.32rem] px-3 leading-[1.6] outline-none border-[2px] border-blue-200 transition-all duration-200 ease-linear focus:placeholder:opacity-0 focus:bg-blue-200 text-blue-600 motion-reduce:transition-none   "
                        rows="3"
                        placeholder="Your message"
                        value={formData.message}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      onClick={btnHandler}
                      className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-blue-600  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              
              
            </div>
            <div className="flex flex-wrap gap-3 mb-2 " >
                {
                    pann.length > 0
                    ?
                    pann.map((item ,index )=>{
                        return (
                            <div  key={index} className=" relative rounded-lg bg-blue-600 px-2 py-4 text-white"> 
                                <span className="absolute top-0 right-0 mr-2 mt-2 cursor-pointer text-xl" onClick={()=>{deletePann(item)}}><FiDelete /></span>
                               <div>Name : <span>{item.userName.toUpperCase()}</span> </div>
                               <div>Email : <span>{item.email}</span> </div>
                               <div>Message : <span>{item.message}</span> </div>
                            </div>
                        )
                    })
                    :
                    ""
                }
            </div>
          </section>
        </div>
      </section>

    </div>
  );
};

export default Contact;
