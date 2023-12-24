import './Button.css'


const Button = ({children,type,cls,event ,...other}) => {
  
  const classes= type === 'rounded-btn' ? `my-rounded-btn ` :`btn-normal ${type}`;

  return (
    <>
      <button className={`${classes} ${cls} `} onClick={event}  {...other}>
          {children}
        
      </button>
      
    </>
  )
}



// const ButtonPrimary = ({children ,eventHandler}) => {
//   return (
//     <>
//     <button className='button primary' onClick={eventHandler}>
//         {children}
//     </button>
//     </>
//   )
// }
// const ButtonSeccondary = ({children ,eventHandler}) => {
//   return (
//     <>
//         <button className='button secondary' onClick={eventHandler}>
//             {children}
//         </button>
//     </>
//   )
// }

export default Button
// export {ButtonSeccondary}
 