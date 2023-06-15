import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';

const ServicePage = () => {
  const services = [
    {
      heading: "Service 1",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      heading: "Service 2",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-4xl max-w-7xl font-bold text-center my-8">Our Services</h1>
        <div className="flex flex-wrap">
          {services.map((service, index) => (
            <div key={index + 1} className="my-4 mx-auto w-full md:w-1/2 lg:w-1/4 px-4">
              <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl p-8 bg-gray-100 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{service.heading}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ServicePage;
