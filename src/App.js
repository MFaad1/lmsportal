import './App.css';

import AboutPage from './assets/Components/pages/About';
import Landingpage from './assets/Components/pages/Landingpage';
import Login from './assets/Components/pages/Loging';
import ServicePage from './assets/Components/pages/Services';
import SignupModule from './assets/Components/pages/Signup';
import CoursePage from './assets/Components/pages/Course';
import ForgetPassword from './assets/Components/pages/ForgetPassword';
import PasswordReset from './assets/Components/pages/PasswordReset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route} from 'react-router-dom';
import Teacher from './assets/Components/pages/Teacher';
import Contact from './assets/Components/pages/Contact';
import Qa from './assets/Components/pages/Qa';
import Exam from './assets/Components/pages/Exam';
import Footer from './assets/Components/pages/Footer';
import EnrollCourses from './assets/Components/pages/EnrollCourses';
import { UserProvider } from './assets/Components/user Details/UserProvider';

function App() {
  return (
    <>
     <div>
      <ToastContainer
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserProvider>
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
      <Route path="PasswordReset" exact element={<PasswordReset/>} />
      <Route path="EnrollCourses" exact element={<EnrollCourses/>} />
  </Routes>
  </UserProvider>
  </div>
  {/* <Carousel/> */}
  {/* <Spinner/> */}
  
  {/* <Footer/> */}
    </>
  );
}

export default App;
