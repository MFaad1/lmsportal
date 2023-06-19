import React from 'react';
import image from '../../Images/react.png';
import image1 from '../../Images/py.png';
import image2 from '../../Images/js.jpg';
import image3 from '../../Images/phy.jpg';




const Card = () => {

  

  return (
    <div className="max-w-5xl mx-auto">
    <div className='my-10 '>

      <h1 className="text-3xl font-bold border-b-2 inline  border-gray-500">Courses</h1>

    </div>
      <div className="flex flex-wrap mx-4">

        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <img className="h-48 w-full object-cover" src={image} alt="React Course" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">React Course</h2>
              <p className="text-gray-500">Learn the fundamentals of React and build interactive web applications.</p>
              <a href="#" className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <img className="h-48 w-full object-cover" src={image1} alt="React Course" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Javascript Course</h2>
              <p className="text-gray-500">Learn the fundamentals of Javascript and build interactive web applications.</p>
              <a href="#" className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
                Enroll Now
              </a>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <img className="h-48 w-50 object-cover" src={image2} alt="React Course" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Python Course</h2>
              <p className="text-gray-500">Learn the fundamentals of Python and build interactive web applications.</p>
              <a href="#" className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
                Enroll Now
              </a>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <img className="h-48 w-50 object-cover" src={image3} alt="React Course" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Physics Course</h2>
              <p className="text-gray-500">Learn the fundamentals of Physics and Know the world</p>
              <a href="#" className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        





        </div>
        </div>

        )}
export default Card;