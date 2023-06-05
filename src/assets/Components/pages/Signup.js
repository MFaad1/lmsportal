import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupModule = () => {
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
    // Perform signup logic here
    console.log(values);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="max-w-md">
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
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-lg">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupModule;
