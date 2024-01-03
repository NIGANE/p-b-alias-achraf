import React from "react";
import { Link } from "react-router-dom";
import {Button} from "../index";


const Card_v2 = ({src,title,price,addToCartHandler,id}) => {
  let url = `http://localhost:3001/products/${src[0]}`;

  
  return (
    <div className="w-[150px] sm:w-[200px]  md:w-[250px] lg:w-[300px] xl:w-[400px] ">
      <div className="flex flex-col items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg ">
        <Link to='#'>
          <img
            className=" h-auto rounded-t-lg"
            src={url}
            alt="product"
          />
        </Link>
        <div className="md:px-3  md:pb-5 w-[100%]">
          <Link to='#'>
            <h5 className="text-sm md:text-xl text-center md:text-left font-[600] tracking-tight  text-gray-900">
              {title}
            </h5>
          </Link>

          <div className="flex flex-col md:flex-row items-center justify-between  gap-4 sm:gap-0 w-[100%]">
            <span className="md:text-l text-center md:text-left    font-bold text-green-700  md:self-center">
              ${price}
            </span>
            <Button
              onClick={()=>{addToCartHandler(id)}}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-[100%] md:w-auto md:px-3 py-1.5 text-center "
            >
              Add to cart
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card_v2;
