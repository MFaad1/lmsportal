import React from 'react';
import Navbar from '../LandingPage/Navbar'
import Footer from './Footer';


const AboutPage = () => {
  return (
    <> 
    <Navbar/>
       <div className="container  mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Path Solution</h1>
      <p className="text-lg mb-6">
        Path Solution is an online education platform that aims to provide high-quality and accessible learning resources to students worldwide. Our mission is to empower individuals to achieve their educational goals and advance their careers through flexible and personalized learning experiences.
      </p>
      <p className="text-lg mb-6">
        At Path Solution, we believe that education is the key to personal growth and societal progress. We offer a wide range of courses and programs across various disciplines, including technology, business, arts, and sciences. Our courses are designed by industry experts and delivered through engaging and interactive online modules.
      </p>
      <p className="text-lg mb-6">
        Whether you're a student looking to enhance your knowledge or a professional seeking to upskill, Path Solution provides the tools and resources you need to succeed. Our platform offers a seamless learning experience, featuring comprehensive course materials, interactive quizzes, and collaborative discussion forums. You can learn at your own pace and access the content from anywhere, at any time.
      </p>
      <p className="text-lg">
        Join Path Solution today and embark on a transformative educational journey. Start learning, expand your horizons, and unlock new opportunities for personal and professional growth.
      </p>
    </div>
    <Footer/>
    </>

  );
};

export default AboutPage;
