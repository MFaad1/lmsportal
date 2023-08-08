import './App.css';
// import Carousel from './assets/Components/Carsole'
// import Spinner from './assets/Components/Spinner'
// import Footer from './assets/Components/Footer'
import AboutPage from './assets/Components/pages/About';
import Landingpage from './assets/Components/pages/Landingpage';
import Login from './assets/Components/pages/Loging';
import ServicePage from './assets/Components/pages/Services';
import SignupModule from './assets/Components/pages/Signup';
import CoursePage from './assets/Components/pages/Course';
import ForgetPassword from './assets/Components/pages/ForgetPassword';



import { Routes, Route} from 'react-router-dom';
import Teacher from './assets/Components/pages/Teacher';
import Contact from './assets/Components/pages/Contact';
import Qa from './assets/Components/pages/Qa';
import Exam from './assets/Components/pages/Exam';
import Footer from './assets/Components/pages/Footer';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' exact  element={<Landingpage/>} />
      <Route path='Login' exact element={<Login/>} />
      <Route path='signup' exact element={<SignupModule/>} />
      <Route path='about' exact element={ <AboutPage/>} />
      <Route path='services' exact element={<ServicePage/>} />
      <Route path="teachers" exact element={<Teacher/>} />
      <Route path="contact" exact element={<Contact/>} />
      <Route path="QA" exact element={<Qa/>} />
      <Route path="exms" exact element={<Exam/>} />
      <Route path="Courses" exact element={<CoursePage/>} />
      <Route path="foter" exact element={<Footer/>} />
      <Route path="ForgetPassword" exact element={<ForgetPassword/>} />
  </Routes>

  {/* <Carousel/> */}
  {/* <Spinner/> */}
  
  {/* <Footer/> */}
    </>
  );
}

export default App;
