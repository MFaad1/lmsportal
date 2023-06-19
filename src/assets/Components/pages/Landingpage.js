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

export default function Landingpage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once:true
    });
  }, []);

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

