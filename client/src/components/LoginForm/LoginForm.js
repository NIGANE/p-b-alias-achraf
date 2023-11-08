import './LoginForm.css';
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt,FaLock } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { RiFacebookFill, RiAppleFill } from 'react-icons/ri';
import { Input, Button,Popup } from './../index';
import  {  useState } from 'react';
import './../../tailwindcss.css'

const Form = ({pop,popClickHandler}) => {
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
    <Input cls='my-2'  key={input.id} id={input.id}  {...input} value={formData[input.name]} onChange={handleInputChange} />
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






    
    return (

    <Popup muteTrigger={popClickHandler} trigger={pop}>
          <form onSubmit={handleInputSubmit}>
            <h1 className='form-header'>{formType === 'signin' ? 'Login' : 'Sign Up'}</h1>
            <div className='mini mt-[50px] mb-[30px]'>
              <Button onClick={() => {setFormType('signin');setFormData(initialSigninState)}} cls='py-[.7rem]' type='my-primary'>Sign In</Button>
              <Button onClick={() => {setFormType('signup');setFormData(initialSignupState)}} cls='py-[.7rem]' type='my-primary'>Sign Up</Button>
            </div>
            <div className='sign-form grid grid-cols-1 gap-0 dense-grid '>
             {formInputs}
             <Button type='my-secondary ' cls=' mt-[30px] py-[.6rem] ' onSubmit={handleInputSubmit}>Submit</Button>
            </div>

            <div className="">
              <h2 className='or'>Or {formType === 'signin' ? 'Sign in' : 'Sign up'} Using</h2>
              <div className='social'>
                <Button type='rounded-btn' cls='p-[1rem]'><div><FcGoogle /></div></Button>
                <Button type='rounded-btn' style={{ color: '#0866FF' }} cls='p-[1rem]' ><RiFacebookFill /></Button>
                <Button type='rounded-btn' style={{ color: 'black' }} cls='p-[1rem]'><RiAppleFill /></Button>
              
              </div>
          
             </div>

          </form>
    </Popup>
  );
}

export default Form;
