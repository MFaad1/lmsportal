import React, { useState } from 'react';
import image from '../../Images/educgirl.png';
import AlertPopup from '../Alert/Alert';
import {useNavigate } from 'react-router-dom';



function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();


  const handleAlert = () => {
   navigate('/Courses')
  };

  return (
    <>
      {showAlert && <AlertPopup message="You have successfully logged in" type="success" onClose={() => setShowAlert(false)} />}

      <div className="flex flex-col md:flex-row max-w-1/2 ml-10">
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Most trusted education platform
          </h1>
          <p className="text-lg md:text-xl mb-6 w-full items-center text-center">
            Grow your skills and advance career. Start, switch, or advance your
            career with more than 5,000 courses, Professional Certificates, and
            degrees from world-class universities and companies.
          </p>

          <div>
            <button className='bg-blue-100 p-5' onClick={handleAlert}>Browse for Courses</button>

          </div>
        </div>
        <div className="w-82 my-20 mx-20 h-82 object-cover rounded-lg  shadow-lg">
          <img src={image} alt="girlImage" className="w-full h-full object-cover" />
        </div>


      </div>
    </>

  );
}

export default Home;

