import './LoginForm.css';
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt,FaLock } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { RiFacebookFill, RiAppleFill } from 'react-icons/ri';
import { Input, Button,Popup } from './../index';
import  {  useState } from 'react';
import './../../tailwindcss.css'
// import {useHistory} from 'react-router-dom'
// import { useHistory } from 'react-router-dom';

const Form = ({pop,PopHandler}) => {
  const [formType, setFormType] = useState('signin');

  const initialSigninState = {
    email: '',
    password: ''
  };

  const initialSignupState = {
    username: '',
    email: '',
    password: ''
  };

  const [formData, setFormData] = useState(
    initialSigninState
    
  );
 

  const inputsSignin = [
    {
      id: '1a', 
      icon:<FaUserAlt /> ,
      name: "email",
      type: 'email',
      placeholder: 'Email',
      label: 'Email Or Number',
      errMess: 'errMess'
      
    },
    {
      id: '2a', 
      icon:<FaLock /> ,
      name: "password",
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errMess: 'errMess'
    }
  ];

  const inputsSignup = [
    
    {
      id: '2b', 
      icon:<AiOutlineMail /> ,
      name: "email",
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
      errMess: 'errMess'
    },
    {
      id: '1b', 
      icon:<FaUserAlt /> ,
      name: "username",
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errMess: 'errMess'
    },
    {
      id: "4b", 
      icon:<FaLock /> ,
      name: "password",
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errMess: 'errMess'
    }
  ];

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // Handle form submission here
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });  
  }
  
  const mapInputs = formType === 'signin' ? inputsSignin : inputsSignup;

  const formInputs = mapInputs.map((input) => (
    <Input cls=''  key={input.id} id={input.id}  {...input} value={formData[input.name]} onChange={handleInputChange} />
  ));
   

    // put your coode here mothefucker
    // put your coode here mothefuckerY
    // put your coode here mothefucker
    // put your coode here mothefucker
    // put your coode here mothefucker
    // put your coode here mothefucker
    // put your coode here mothefucker
    // put your coode here mothefucker
    // put your coode here mothefucker
    // put your coode here mothefucker




    // styles 
    const bottom = {
      text:'text-center mt-4',
      btn:'text-2xl text-red'
    }

    
    return (

    <Popup  trigger={pop} PopHandler={PopHandler} cls='w-[502px] md:w-[502px] '>
          <form onSubmit={handleInputSubmit}>
            <h3 className='form-header mb-[30px]'>{
            formType === 'signin' ?
             <span>Log in</span>
             
             :
             <span>Sign up</span> 
            
            }
            
            </h3>
            <div className='text-center'>Welcom{formType === 'signin' ? ' back':""}! Please enter your details</div>
            <div className='flex flex-col py-5 '>
             {formInputs}
             <Button type='my-secondary ' cls=' mt-[30px] py-[.6rem] max-w-auto self-center w-fit ' onSubmit={handleInputSubmit}>Submit</Button>
            </div>

            <div className="">
              <h2 className='or'>Or {formType === 'signin' ? 'Sign in' : 'Sign up'} Using</h2>
              <div className='social'>
                <Button type='rounded-btn' cls='p-[.5rem]' ><FcGoogle /></Button>
                <Button type='rounded-btn' style={{ color: '#0866FF' }} cls='p-[.5rem]' ><RiFacebookFill /></Button>
                <Button type='rounded-btn' style={{ color: 'black' }} cls='p-[.5rem]'><RiAppleFill /></Button>
              
              </div>
          
             </div>

             {formType === 'signin' ?
              <p className={bottom.text}>don't have an account? <button cls={'text-black text-2xl'}  onClick={() => {setFormType('signup');setFormData(initialSignupState)}}>Sign up</button> </p>
                :
                <p className={bottom.text}>Already have an account? <button cls={`${bottom.btn}`} onClick={() => {setFormType('signin');setFormData(initialSigninState)}}>log in</button> </p>
                 } 

          </form>
    </Popup>
  );
}

export default Form;
