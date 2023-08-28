import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AlertPopup from '../Alert/Alert';

const PasswordReset= () => {
  const initialValues = {
    password: '',
    confirmPassword: '',
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);


  const validationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  const navigate = useNavigate()

  const handleSubmit = async(values) => {
    let token = localStorage.getItem("token");
  try{
      let response = await axios.post("http://localhost:3200/api/passwordReset", {email:values.email},
      {
        headers: {
          'token':token,
        },
      }
      ) 
if(response.status=200){
  navigate('/')
}
    }catch(error){
    console.log(error)
  }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevState) => !prevState);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Password Reset</h2>

<div className="relative">
                <label htmlFor="password" className="block text-lg mb-1">
                  Password
                </label>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-10 mt-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <ErrorMessage name="password" component="div" className="text-red-500 mt-3" />
              </div>
        
<div className="relative mb-4">
                <label htmlFor="confirmPassword" className="block text-lg mb-1">
                  Confirm Password
                </label>
                <Field
                  type={showPassword2 ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility2}
                  className="absolute right-2 top-10 mt-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                </button>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mt-1" />
              </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Reset Password
        </button>
      </Form>
    </Formik>
  );
};

export default PasswordReset;
