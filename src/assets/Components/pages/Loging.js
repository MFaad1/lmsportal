import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {NavLink } from 'react-router-dom';


const Login = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    // Perform signup logic here
    console.log(values);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="container flex flex-col h-screen items-center justify-center mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="max-w-md">
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
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <p>Need Account <NavLink to="/signup" className="text-blue-500">Signup Here! </NavLink></p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

