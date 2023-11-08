import './Input.css'
import './../../tailwindcss.css';




const Input = ({cls,label,id,errMess,icon,...others}) => {
  
  

  return (
    <div className={cls}>
        
        {icon ? <label htmlFor={id} className='icon'>{icon}</label> : ''}
        
        <input id={id}   style={{paddingLeft:'3rem' }}  className={`my-input ${cls}`} {...others}   />
        {/* <span className='err-mess' >{errMess}</span> */}
    
    </div>
  )
}

export default Input