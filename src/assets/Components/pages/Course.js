import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';


const CoursePage = () => {
  return (
    <>
      <Navbar />

    <div className="bg-white">
      <h1 className="text-4xl font-bold text-center my-8">Course Name</h1>
      <div className="container mx-auto">
        <div className="flex justify-center items-center my-4">
          <div className="w-1/2 p-8 bg-gray-100 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum consequat nisl eu leo lobortis, ut euismod ex
              tincidunt. Nullam efficitur fringilla erat vel fringilla.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="w-1/2 p-8 bg-gray-100 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Course Content</h2>
            <ul className="list-disc pl-6">
              <li>Module 1: Introduction</li>
              <li>Module 2: Advanced Concepts</li>
              <li>Module 3: Hands-on Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CoursePage;
