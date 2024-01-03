import './Cate.css'
import {ItemCard} from '../index'
import axios from 'axios'
import '../../tailwindcss.css'
import { useEffect ,useState } from 'react'








const Cate = ({sectionRef}) => {
  const [cat ,setCat ] = useState([])
  useEffect( ()=>{
    const fetching=async ()=>{
      await axios.get('http://127.0.0.1:3001/catigories')
      .then(data=>setCat(data.data))
      .catch(err=>{
        console.log('server Error ')
      })
    }
    fetching()
  },[])

    
  return (
    <>
    <div ref={sectionRef} className='my-[4rem] mb-[2rem] ' >
      <div className='flex flex-col justify-center items-center gap-10 text-[3rem]  py-[1rem]'>
      <h3 className="lg:text-[4rem] md:text-[3rem] text-[2rem] font-bold  ">CATEGORIES</h3>
        <div className='flex items-start justify-center gap-2 md:gap-4 flex-wrap'>

        {
          cat.map(item=>{
            return (
              <ItemCard key={item._id} name={item.name}  imgName={item.img_url} />
            )
          })
        }
        </div>
      </div>
      <div className='flex items-start justify-center gap-4 flex-wrap'>
       
      </div>
    </div>
    </>
  )
}

export default Cate