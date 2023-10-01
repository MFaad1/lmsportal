import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Cards from '../LandingPage/Cards';
import Testimonial from '../LandingPage/Testimonial';
import InstructorProfiles from '../LandingPage/Instructor';
import CtaFunc from '../LandingPage/CtaFunc';
import ContactInfo from '../LandingPage/Contact';
import Navbar from '../LandingPage/Navbar';
import Home from '../LandingPage/Home';
import FAQ from '../LandingPage/Faqs';
import PricingPlans from '../LandingPage/Plan';
import Footer from './Footer';
import axios from 'axios';
import { useUserContext } from '../user Details/UserProvider';




export default function Landingpage() {
  let token = localStorage.getItem("token")
  const { setUserData } = useUserContext();

const userDetailsFunction =async()=>{
try {
  let response = await axios.get("http://localhost:3200/api/userDetails",{
    headers: {
      token: token
    }
  })
  const data  = response.data
  setUserData(data);
} catch (error) {
}


}

  useEffect(() => {
    userDetailsFunction()
    AOS.init({
      duration: 800,
      once:true
    });
  }, [setUserData]);

  return (
    <div>
      <Navbar />
      <div data-aos="fade-up">
        <Home />
      </div>
      <div data-aos="fade-up">
        <Cards />
      </div>
      <div data-aos="fade-up">
        <Testimonial />
      </div>
      <div data-aos="fade-up">
        <InstructorProfiles />
      </div>
      <div data-aos="fade-up">
        <PricingPlans />
      </div>
      <div data-aos="fade-up">
        <CtaFunc />
      </div>
      <div data-aos="fade-up">
        <FAQ />
      </div>
      <div data-aos="fade-up">
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
}

