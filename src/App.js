import './App.css';
import Navbar from './assets/Components/Navbar'
// import Carousel from './assets/Components/Carsole'
import Home from './assets/Components/Home'
// import Spinner from './assets/Components/Spinner'
import Cards from './assets/Components/Cards'
import Testimonial from './assets/Components/Testimonial';
import InstructorProfiles from './assets/Components/Instructor';
import PricingPlans from './assets/Components/Plan';
import CtaFunc from './assets/Components/CtaFunc.js';
import FAQ from './assets/Components/Faqs';
import ContactInfo from './assets/Components/Contact'
// import Footer from './assets/Components/Footer'
import AboutPage from './assets/Components/pages/About';
import SignupModule from './assets/Components/pages/Signup';


import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Navbar/>} />
      {/* <Route path='home' element={ <Navbar/>} />

      <Route path='About' element={ <Navbar/>} />

      <Route path='Blogs' element={ <Navbar/>} /> */}

      {/* <Route path='Contactinfo' element={ <Navbar/>} /> */}
      <Route path='signup' element={<SignupModule/>} />

  </Routes>
  <Navbar/>
  {/* <SignupModule/> */}
  <Home/>
  {/* <Carousel/> */}
  <Cards/>
  <Testimonial/>
  <InstructorProfiles/>
  <PricingPlans/>
  <CtaFunc/>
  <FAQ/>
  <ContactInfo/>
  {/* <Spinner/> */}
  <AboutPage/>
  
  {/* <Footer/> */}
    </>
  );
}

export default App;
