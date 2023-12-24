import './ItemCard.css'
import './../../tailwindcss.css'
import React from 'react'

const ItemCard = ({name ,imgName}) => {

    let fullpath = `http://localhost:3001/images/${imgName}`
    

  return (
    <div className='h-auto transform hover:scale-110 transition-all duration-[.5s]  '>
      <div className="max-w-6xl mx-auto">
        <div className="flex  justify-center ">
          <div className="w-[200px] ">
            <div className="bg-white shadow-xl rounded-lg ">
              <div className={`bg-cover bg-center h-56 rounded-t-lg `} style={{ backgroundImage: `url(${fullpath})`}} >
              
              </div>
              <div className="p-4">
                <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{name}</p>
              </div>
              
                
            </div>
          </div>
        </div>
      </div>
      
      

        
      

    </div>
  )
}

export default ItemCard