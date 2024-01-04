import React from "react";
import "./../../tailwindcss.css";
import { Rounded } from "./../index";
import { useSelector ,useDispatch} from "react-redux";
import { CardV2 } from "./../index";
import { addToCart } from "./../../store/cartSlice";
import { show } from './../../store/loginPop'

const Lister = () => {
  const products = useSelector((state) => state.products.products);
  
  const signed = useSelector((state) => state.user.signed);
  const dispatch = useDispatch()


  const addToCartHandler = (id) => {
    if (signed) {
      const item = products.find(item=> item._id === id)
      dispatch(addToCart(item))
    }
    else{
      dispatch(show())
    }
  };

  const list = products.map((item, index) => {
    return (
      <CardV2
        key={index}
        title={item.name}
        src={item.img_url}
        price={item.price}
        addToCartHandler={addToCartHandler}
        id={item._id}
      />
    );
  });
  
  return (
    <div className="mt-[2rem] flex flex-col justify-center items-center ">
      <h3 className="text-[2rem] md:text-[3rem] container ps-[2rem] tracking-tight text-center  font-semibold text-indigo-500">
        Product Lists
      </h3>
      <Rounded>
        <div className="flex justify-center gap-4 flex-wrap py-[2rem] rounded-lg">
          {list}
        </div>
      </Rounded>
    </div>
  );
};

export default Lister;
