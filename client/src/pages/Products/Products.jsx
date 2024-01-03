import React from "react";
import { Lister } from "./../../components/index";
import img from "../../assets/images/4k_wallpaper.jpg";

const Products = () => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="relative">
          <span className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black via-transparent  to-black opacity-[50%] "></span>
          <img src={img} alt="img" className="  z-[-1]" />
        </div>

        <section className="">
          <Lister />
        </section>
      </div>
    </>
  );
};

export default Products;
