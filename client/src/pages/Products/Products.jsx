import React, { useEffect } from "react";
import { Lister, Panier } from "./../../components/index";
import img from "../../assets/images/4k_wallpaper.jpg";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector,useDispatch } from "react-redux";
import { showPanier } from './../../store/showPanierSlice.js'


const Products =  () => {
  const dispatch = useDispatch()
  // const panierList = useSelector((state) => state.cart.items);
  const panier = useSelector(state=> state.panier.showPanier)
 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const panierClickHandler = ()=>{
    dispatch(showPanier())
  }

  return (
    <>
      <div className="bg-slate-50 relative">
        <div className="relative">
          <span className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black via-transparent  to-black opacity-[50%] "></span>
          <img src={img} alt="img" className="  z-[-1]" />
        </div>

        <section className="relative">
          <div onClick={panierClickHandler} className="absolute top-0 right-0 text-2xl p-2 rounded-md border-[2px] border-green-400  hover:bg-green-400 hover:text-white mr-[12px]">
            <RiShoppingCartLine />
          </div>
          <div>
            { 
              panier 
              ? <Panier />
              : ''
            }
          </div>

          <Lister />
        </section>
      </div>
    </>
  );
};

export default Products;
