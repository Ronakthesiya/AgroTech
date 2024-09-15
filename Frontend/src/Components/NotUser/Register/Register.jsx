import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [registerData, setRegisterData] = useState({ email: '', username: '', password: '', confirmPassword: '' });
  const [errorData, setErrorData] = useState({});
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Validate the form data
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-z]{2,}$/;
    const passwordRegex = /^(?=.*[!@#$%&?])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%&?]{8,}$/;
    if (registerData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(registerData.email.trim())) {
      errors.email = 'Invalid email format';
    }
    if (registerData.username.trim() === '') {
      errors.username = 'Username is required';
    }
    if (registerData.password.trim() === '') {
      errors.password = 'Password is required';
    }else {
      if (registerData.password.length < 8 ) {
        errors.password = 'Password must be at least 8 characters long';
      } else if (!/[!@#$%&?]/.test(registerData.password)) {
        errors.password = 'Password must include at least one special character';
      } else if (!/[A-Z]/.test(registerData.password)) {
        errors.password = 'Password must include at least one uppercase letter';
      } else if (!/[a-z]/.test(registerData.password)) {
        errors.password = 'Password must include at least one lowercase letter';
      }
    }
    if (registerData.confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm Password is required';
    }
    if (registerData.password != registerData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      registerData.confirmPassword = '';
    }
    if (Object.keys(errors).length > 0) {
      // Set errors and prevent form submission
      setErrorData(errors);
      return;
    } 
    // If there are no errors, perform the registration
    console.log("Registration Successful");
    console.log(registerData);
    // Clear the form
    setRegisterData({ email: '', username: '', password: '', confirmPassword: '' });
    setErrorData({});
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2 mt-5">
        <div className='w-10/12 max-w-[600px] px-6 py-12 rounded-3xl bg-white border-2 border-gray-100'>
          <h1 className='text-5xl font-semibold'>Register</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details to create an account.</p>
          <div className='mt-8'>
            <div className='flex flex-col'>
              <label className='text-lg font-medium'>Email</label>
              <input 
                name="email"
                value={registerData.email}
                onChange={handleInputChange}
                className='w-full border-2 border-gray-100 rounded-lg p-3 mt-1 focus:outline-none focus:border-green-500'
                placeholder="Enter your email"/>
              {errorData.email && <p className="text-red-500 text-sm mt-1">{errorData.email}</p>}
            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-lg font-medium'>Username</label>
              <input 
                name="username"
                value={registerData.username}
                onChange={handleInputChange}
                className='w-full border-2 border-gray-100 rounded-lg p-3 mt-1 focus:outline-none focus:border-green-500'
                placeholder="Enter your username"/>
              {errorData.username && <p className="text-red-500 text-sm mt-1">{errorData.username}</p>}
            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-lg font-medium'>Password</label>
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleInputChange}
                className='w-full border-2 border-gray-100 rounded-lg p-3 mt-1 focus:outline-none focus:border-green-500'
                placeholder="Enter your password"/>
              {errorData.password && <p className="text-red-500 text-sm mt-1">{errorData.password}</p>}
            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-lg font-medium'>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleInputChange}
                className='w-full border-2 border-gray-100 rounded-lg p-3 mt-1 focus:outline-none focus:border-green-500'
                placeholder="Confirm your password"/>
              {errorData.confirmPassword && <p className="text-red-500 text-sm mt-1">{errorData.confirmPassword}</p>}
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
              <button 
                onClick={handleRegister}
                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-green-500 rounded-xl text-white font-bold text-lg'>Register</button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
              <p className='font-medium text-base'>Already have an account?</p>
              <button className='ml-2 font-medium text-base text-green-500' onClick={()=>navigate('/Login')}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;