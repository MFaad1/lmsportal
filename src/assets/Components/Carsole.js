import React from 'react';

const Carousel = () => {
  return (
    <div
      className="h-2/3 sm:h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1610788725779-e51d62d1e571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)' }}
    >
      <h1 className="text-4xl text-white mb-4">
        Welcome to Geeks UI Learning Application
      </h1>
      <p className="text-white text-lg mb-6">
        Hand-picked Instructor and expertly crafted courses, designed for the
        modern students and entrepreneur
      </p>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Browse for Courses
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Are You an Instructor?
        </button>
      </div>
    </div>
  );
};

export default Carousel;
