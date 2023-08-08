import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Contact() {
  const initialValues = {
    name: '',
    email: '',
    message: '',
    Subject: '',
  };
  const formRef = React.useRef();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
    Subject: Yup.string().required('Subject is required'),
  });

  const handleSubmit = (values) => {
    emailjs
      .sendForm('service_3le7kke', 'template_ewqxd3o', formRef.current, 'LFND88S9DLSVVav49')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form ref={formRef} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg mb-1">
                Name
              </label>
              <Field
                type="name"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
            </div>

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
            <div>
              <label htmlFor="Subject" className="block text-lg mb-1">
                Subject
              </label>
              <Field
                type="text"
                id="Subject"
                name="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="Subject" component="div" className="text-red-500 mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg mb-1">
                Message
              </label>
              <Field
                as="textarea"
                type="message"
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
