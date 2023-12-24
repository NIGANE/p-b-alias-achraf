import React from 'react'
import {NavFilter, Lister} from './../../components/index'

const Products = () => {
  return (
    <>
       <div className='h-[40rem] bg-black'>
          <NavFilter /> 
          <Lister /> 
        </div> 
        
    </>
  )
}

export default Products