import React from 'react';
import axios from "axios"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';





const ForgetPassword =() => {
  const initialValues = {
    email: '',
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit =async(values) => {
    let token = localStorage.getItem("token");
    try {
      let response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/emailVarify`, {email:values.email}
      ) 
      if(response.status ==200){
        navigate('/PasswordReset')
      }
    }
    catch(err) {
      console.log(err, "response")

      
    }
   
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>

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
                        <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
            <NavLink to="/login" className="text-blue-500">
              Back to Login
            </NavLink>
              </Form>
          </Formik>

      </div>
    </div>
  );
};

export default ForgetPassword;
