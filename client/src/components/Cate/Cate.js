import './Cate.css'
import {ItemCard} from '../index'
import axios from 'axios'
import '../../tailwindcss.css'
import { useEffect ,useState} from 'react'







const Cate = () => {
  const [categories ,setCategories] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/api')
     .then(res => setCategories(res.data))
     .catch(err =>console.log(err))

  },[])


    console.log(categories)
  return (
    <>
    <div className='my-[4rem]'>
      <div className='flex justify-center text-[3rem]  py-[1rem]'>
        <h3 className=''> {"<<"} Our Fleet {">>"}</h3>
        {/* <h2>Browse By Category</h2> */}
      </div>
      <div className='flex items-start justify-center gap-4 flex-wrap'>
        {
          categories.map((cat)=>{
            return (<ItemCard key={cat.id} name={cat.name}  imgName={cat.img_url} />)
          })
        }
      </div>
    </div>
    </>
  )
}

export default Cate