
import React, {useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import AlertPopup from '../Alert/Alert';
import * as Yup from 'yup';
import axios from 'axios';
import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';

const SignupModule = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState(null);
  const [showAlertmsg, setshowAlertmsg] = useState(false);


  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    axios
      .post(`${process.env.REACT_APP_BASEURL}/api/signup`, values)
      .then((resp) => {
        setShowAlert(true);
        if (resp.data) {
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        }
      })
      .catch((error) => {
        setMessage(error.message);
        setShowAlert(true);    
        setshowAlertmsg(true)
    } )   };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      {showAlert && <AlertPopup message= {showAlertmsg ? message : 'Error occured'} type= {showAlertmsg ? "error": "success"} onClose={() => setShowAlert(false)} />}

    <Navbar/>
    <div className="flex items-center justify-center min-h-[72vh] bg-gray-100">
      <div className="border border-gray-300 rounded-md shadow-sm p-6 bg-white w-[36%]">
        <h2 className="text-2xl font-bold mb-4 text-center">SIGN UP</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-lg">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-lg">
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
            <div className="relative mb-4">
              <label htmlFor="password" className="block mb-2 text-lg">
                Password
              </label>
              <Field
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full relative px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Sign up
            </button>
          </Form>
        </Formik>
        <NavLink to="/login" className="text-blue-500">
                Already Have a Account ? 
              </NavLink>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default SignupModule;

