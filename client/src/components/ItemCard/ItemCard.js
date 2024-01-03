import "./ItemCard.css";
import "./../../tailwindcss.css";
import React, { useState } from "react";

const ItemCard = ({ name, imgName }) => {
  const [visibility ,setVisibility ] = useState('invisible')
  let fullpath = `http://localhost:3001/catigories/${imgName}`;

  return (
    <div className="h-auto transform hover:scale-110 transition-all duration-[.5s] hover:z-50 " onMouseEnter={()=>{setVisibility('visible')}} onMouseLeave={()=>{setVisibility('invisible')}}>
      <div className="mx-auto">
        <div className="flex  justify-center ">
          <div className="lg:w-[450px] sm:w-[300px] w-[200px] ">
            <div className="bg-white shadow-xl relative ">

              <div className={`bg-cover bg-center h-32  w-auto sm:h-32 md:h-40 lg:h-64  rounded-lg `} style={{ backgroundImage: `url(${fullpath})` }}></div>
              <div className={`absolute top-0 left-0  w-full h-full bg-black bg-opacity-[50%] rounded-lg flex justify-center items-center  ${visibility} transition ease-in-out duration-[2s] `}>
                <p className="font-bold text-slate-50 text-[1.4rem] md:text-3xl lg:text-5xl ">{name}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
