import  { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom'; 
import { LoginRequest }  from "../API/Api"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    // Password validation
    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters long',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    return valid;
  };

  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }

    validateForm();
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the login logic here

      LoginRequest(email, password)
      .then((result) => {
         if(result === true){         
           toast.success("Login Successful");
           window.location.href='/ '; 
         }
         else {
          if(result.error === "User not found"){
             setErrors({ email : "User Not Found" });
             toast.error('User not found');
          }
          else if(result.error ==="Invalide Password"){
             setErrors({ password: "Invalid Password" });
          
          }
          else {
            return false
          }
         }
          
      })
      .catch((error) => {
        console.log('Error in signup request');
        alert("Invalid email or password");
      })





    //   console.log('Login successful', email, password);
    } else {
      console.log('Form validation failed. Please check errors.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='form drop-shadow-xl' onSubmit={handleSubmit}>

      <h1 className="text-center font-bold mb-5 text-3xl text-primary">Welcome To <span className='text-primary'>Dally Report </span> Please <span className="text-center font-bold mb-5 text-3xl text-fifth">Login</span></h1>
        
        <div>
          <label htmlFor="email">Email :</label>
          <input className='text-primary'
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <p style={{ color: 'red' }}>{errors.email}</p>
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input className='relative text-primary'
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          <span className="relative" onClick={handleTogglePassword}>
            {showPassword ? < AiOutlineEye className="absolute right-2 top-[0] " /> : <AiOutlineEyeInvisible className='absolute right-2 top-[0] ' />}
          </span>
          <p style={{ color: 'red' }}>{errors.password}</p>
        </div>
        <button className='button'>Log In</button>
        <p className="smoleText mt-5">Don't have an account? Please <Link to={'/registation'} className='font-bold text-third cursor-pointer'>Ragistar</Link> </p>
         <Link to={'/forgot-password'} className='font-bold text-secondary cursor-pointer'>Forget Password</Link> 
      </form>
    </div>
  );
};

export default Login;