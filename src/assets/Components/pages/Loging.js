import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AlertPopup from '../Alert/Alert';

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertmsg, setshowAlertmsg] = useState(false);


  const initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    axios
      .post('http://localhost:3200/api/login', values)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        setShowAlert(true);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((err) => {
        setShowAlert(true);
        setshowAlertmsg(true)
        console.log(err.message, 'error returned')

      });

  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />

      {showAlert && <AlertPopup message={showAlertmsg ? "User Not found" : "You have successfully logged in"} type={showAlertmsg ? "error" : "success"} onClose={() => setShowAlert(false)} />}


      <div className="flex items-center justify-center min-h-[72vh]  bg-gray-100">
        <div className="bg-white rounded-md shadow-md p-5 w-[36%]">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">Login</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-lg mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
              </div>
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
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Login

              </button>
              <div className="flex justify-between mt-4">
                <NavLink to="/signup" className="text-blue-500">
                  Don't have an Account?
                </NavLink>
                <NavLink to="/ForgetPassword" className="text-blue-500">
                  Forget Password
                </NavLink>
              </div>

            </Form>
          </Formik>

        </div>
      </div>

      <Footer />

    </>
  );
};

export default Login;
