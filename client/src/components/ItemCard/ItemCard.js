import './ItemCard.css'
// import img from './../../assets/images/testImage.jpg'
import './../../tailwindcss.css'

import React from 'react'
// import imagexn from './../../assets/images/CatImg/cat_sport.jpg'

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
                {/* <p className="text-3xl text-gray-900">$750,000</p> */}
                {/* <p className="text-gray-700">742 Evergreen Terrace</p> */}
              </div>
              
                
            </div>
          </div>
        </div>
      </div>
      
      

        
      {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img class="rounded-t-lg" src={img} alt="" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div> */}

    </div>
  )
}

export default ItemCard