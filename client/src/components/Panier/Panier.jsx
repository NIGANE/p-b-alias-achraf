import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { hidePanier } from '../../store/showPanierSlice'
import { IoClose } from "react-icons/io5";
import { removeItem } from './../../store/cartSlice'
import { FaLongArrowAltRight } from "react-icons/fa";

const Panier = () => {
    const dispatch = useDispatch()
    const totalPrice = useSelector(state => state.cart.totalPrice)
    
    const PanierList = useSelector(state => state.cart.items)


    return (
        <div>
        
        <div className="relative z-[100]" >
 
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 overflow-hidden">
            <div  className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                
                <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        <div className="ml-3 flex h-7 items-center">
                        <button onClick={()=>dispatch(hidePanier())} type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 text-2xl">
                            <IoClose />
                        </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flow-root">
                        <ul  className="-my-6 divide-y divide-gray-200">
                            
                            
                            {PanierList.map((item,index) => {
                                let url = `http://localhost:3001/products/${item.img_url[0]}`;
                                return (
                                    <li key={index} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src={url} alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                <span >{item.name}</span>
                                                </h3>
                                                <p className="ml-4">${item.price}</p>
                                            </div>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">{item.qt}</p>

                                            <div className="flex">
                                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>{dispatch(removeItem(item))}}>Remove</button>
                                            </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                            
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total Price</p>
                        <p>{totalPrice}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a href="/" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                        or {" "}
                        <button onClick={()=>dispatch(hidePanier())} type="button" className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center gap-1">
                            Continue Shopping <FaLongArrowAltRight />
                        </button>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
    )
  
}

export default Panier