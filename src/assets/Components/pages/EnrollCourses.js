import React, { useEffect } from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';
import {useUserContext} from '../user Details/UserProvider';
import image from '../../Images/react.png';
import image1 from '../../Images/py.png';
import image2 from '../../Images/js.jpeg';
import image3 from '../../Images/programing.jpeg';
import physics from '../../Images/physics.jpeg';
import chemistery from '../../Images/Chemistry.jpeg';
import Mathematics from '../../Images/match.png';
import axios from 'axios';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';


function EnrollCourses() {
  const {userData} = useUserContext();
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  const { setUserData } = useUserContext();

if(!token ){
  navigate('/login')
}

const coursesByCategory = {};
  userData && userData.CoursesArray.length > 0 &&  userData.CoursesArray.forEach(course => {
    const category = course.category;
    if (!coursesByCategory[category]) {
      coursesByCategory[category] = [];
    }
    coursesByCategory[category].push(course);
  });

  const userDetailsFunction =async()=>{
    try {
      let response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/userDetails`,{
        headers: {
          token: token
        }
      })
      const data  = response.data
      setUserData(data);
    } catch (error) {
    }
    
    }
useEffect(()=>{
  userDetailsFunction()
},[])


  const enrollHandler = async id => {
    try {
      if (!token) {
        toast.error('Please login & then Try to enroll');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        let response = await axios.post(
          `${process.env.REACT_APP_BASEURL}/api/delcoursesHander`,
          {id},
          {
            headers: {
              token: token,
            },
          },
        );
        if (response.status == 200) {
          toast.success('Course has been Deleted!');
          userDetailsFunction()
        } else {
          userDetailsFunction()
          toast.error('Enrollment failed!');
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Navbar />
      { Object.keys(coursesByCategory).length > 0 ?
      Object.keys(coursesByCategory).map((category, index) => (
        <div className="bg-gray-100 py-8 ">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 inline  border-gray-500">
              {category}
            </h2>
            <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             
              {coursesByCategory[category].map((course, index) => {
                return (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      style={{height: '200px', width: '100%'}}
                      className="w-70 h-30 object-cover"
                      src={
                        course.title === ('Javascript' || 'React')
                          ? image2
                          : category == 'Physics'
                          ? physics
                          : category === 'Chemistry'
                          ? chemistery
                          : category == 'Mathematics'
                          ? Mathematics
                          : image3
                      }
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900">{course.title}</h3>

                      <p className="text-base text-gray-700">{course?.description}</p>
                    </div>
                    <div className="flex items-end  justify-center bg-blue-500 w-full">
                      <button
                        className="text-white font-bold  px-4 py-2 rounded"
                        onClick={() => enrollHandler(course._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )) : <div className='h-96 flex justify-center align-center'> No Cours Enroll</div>
    }
      <Footer />
    </>
  );
}

export default EnrollCourses;
