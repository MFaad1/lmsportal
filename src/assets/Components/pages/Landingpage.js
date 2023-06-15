import React from 'react'
import Cards from '../LandingPage/Cards'
import Testimonial from '../LandingPage/Testimonial'
import InstructorProfiles from '../LandingPage/Instructor'
import CtaFunc from '../LandingPage/CtaFunc'
import ContactInfo from '../LandingPage/Contact'
import Navbar from '../LandingPage/Navbar'
import Home from '../LandingPage/Home'
import FAQ from '../LandingPage/Faqs'
import PricingPlans from '../LandingPage/Plan'
import Footer from './Footer'



export default function Landingpage() {
  return (
    <div>
  <Navbar/>
   <Home/>
    <Cards/>
  <Testimonial/>
  <InstructorProfiles/>
  <PricingPlans/>
  <CtaFunc/>
  <FAQ/>
  <ContactInfo/>
  <Footer/>

    </div>
  )
}
