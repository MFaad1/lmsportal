import React,{useEffect, useState} from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';
import image from '../../Images/react.png';
import image1 from '../../Images/py.png';
import image2 from '../../Images/js.jpg';
import axios from 'axios';



const CoursePage = () => {
  const course1 = [
    { image: [image],
      name : "Javascript course",
      descrip: "Learn the fundamentals of Javascript and build interactive web applications.",
      to: '/',
      
    },
    { image: [image1],
      name : "React course",
      descrip: " Learn the fundamentals of React and build interactive web applications."
    },
    { image: [image2],
      name : "Python course",
      descrip: " Learn the fundamentals of Python and build interactive web applications."
    },
  ]

  const [course, setCourse] = useState([])

  const getCourseFunct =async()=>{
    try {
      let response  = await axios.get("http://localhost:3200/api/getCourses")
      console.log('resonse', response.data?.course)
      setCourse(response.data?.course)
    } catch (error) {
      console.log(error, "error occured")
      
    }
  }
  useEffect(()=>{
    getCourseFunct()
  },[])



  return (
    <>
      <Navbar />

  

    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 inline  border-gray-500">
          Trending Courses
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {course && course.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                className="w-70 h-30 object-cover"
                src={course.image}
                alt={course.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {course.title}
                </h3>

                <p className="text-base text-gray-700">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

{/* 
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 inline  border-gray-500">
          Programing
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {course.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                className="w-70 h-30 object-cover"
                src={course.image}
                alt={course.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {course.name}
                </h3>

                <p className="text-base text-gray-700">{course.descrip}</p>
              </div>
            </div>
          ))}
        </div>   
      </div>
    </div>
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 inline  border-gray-500">
          Programing
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {course.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                className="w-70 h-30 object-cover"
                src={course.image}
                alt={course.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {course.name}
                </h3>

                <p className="text-base text-gray-700">{course.descrip}</p>
              </div>
            </div>
          ))}
        </div>   
      </div>
    </div>
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 inline  border-gray-500">
          Programing
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {course.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                className="w-70 h-30 object-cover"
                src={course.image}
                alt={course.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {course.name}
                </h3>

                <p className="text-base text-gray-700">{course.descrip}</p>
              </div>
            </div>
          ))}
        </div>   
      </div>
    </div>
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 inline  border-gray-500">
          Programing
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {course.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                className="w-70 h-30 object-cover"
                src={course.image}
                alt={course.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {course.name}
                </h3>

                <p className="text-base text-gray-700">{course.descrip}</p>
              </div>
            </div>
          ))}
        </div>   
      </div>
    </div>
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 inline  border-gray-500">
          Programing
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {course.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                className="w-70 h-30 object-cover"
                src={course.image}
                alt={course.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {course.name}
                </h3>

                <p className="text-base text-gray-700">{course.descrip}</p>
              </div>
            </div>
          ))}
        </div>   
      </div>
    </div>
       */}



    <Footer/>
    </>
  );
};

export default CoursePage;
