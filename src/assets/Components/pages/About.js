import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';
import image2 from '../../Images/course image.jpg';
import image3 from '../../Images/learning image.avif'
import image4 from '../../Images/instruct.png'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">About Path Solution</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">Our Mission</h2>
          <p className="text-lg mt-5">
            Path Solution is dedicated to providing accessible and high-quality education to students worldwide. Our mission is to empower individuals to achieve their educational goals and advance their careers through flexible and personalized
            learning experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">Comprehensive Course Offerings</h2>
            <p className="text-lg mt-5">
              We offer a wide range of courses and programs across various disciplines, including technology, business, arts, sciences, and more. Our courses are designed by industry experts and delivered through engaging and interactive online
              modules. Whether you're a student looking to enhance your knowledge or a professional seeking to upskill, Path Solution provides the tools and resources you need to succeed. 
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img src={image2} alt="Course Offerings" className="max-w-50 max-h-50" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="md:w-1/2">
            <img src={image3} alt="Flexible Learning" className="max-w-50 max-h-50" />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">Flexible Learning Experience</h2>
            <p className="text-lg mt-5">
              At Path Solution, we believe that education should be accessible anytime and anywhere. Our platform offers a seamless learning experience, featuring comprehensive course materials, interactive quizzes, and collaborative discussion
              forums. You can learn at your own pace and access the content from any device, allowing you to fit your education into your busy schedule.
            </p>
          </div>

          
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold border-b-2 inline border-gray-500 mb-10">Expert Instructors</h2>
            <p className="text-lg mt-5">
              Our courses are taught by experienced instructors who are experts in their respective fields. They bring real-world knowledge and practical insights to the learning experience, ensuring that you receive relevant and up-to-date
              information. You'll have the opportunity to learn from industry leaders and gain valuable skills that are in demand in today's job market.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img src={image4} alt="Expert Instructors" className="max-w-50 max-h-50" />
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">Join Path Solution Today</h2>
          <p className="text-lg mt-5">Embark on a transformative educational journey with Path Solution. Start learning, expand your horizons, and unlock new opportunities for personal and professional growth.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg">Join Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
