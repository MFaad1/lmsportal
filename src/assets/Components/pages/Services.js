import React, {useEffect} from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from './Footer';
import image2 from '../../Images/course image.jpg';
import image3 from '../../Images/learning image.avif';
import image4 from '../../Images/instruct.png';
import AOS from 'aos';

import 'aos/dist/aos.css';
const ServicePage = () => {
  const services = [
    {
      heading: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      heading: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-4">Our Services</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">Our Mission</h2>
          <p className="text-lg mt-5">
            Path Solution is dedicated to providing accessible and high-quality education to students worldwide. Our mission is to empower individuals to achieve their educational goals and advance their careers through flexible and personalized
            learning experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-up">
            <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">Online Courses</h2>
            <p className="text-lg mt-5">We offer a comprehensive range of online courses in various subjects and disciplines to cater to diverse learning needs. Our extensive catalog includes courses designed to enhance knowledge, develop new skills, and expand horizons. Whether you're interested in programming, business, arts, sciences, or any other field, our online courses provide engaging content, interactive exercises, and expert guidance. With flexible scheduling and self-paced options, you can learn at your own convenience and pace, making education accessible to all.</p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-down">
            <img src={image2} alt="Course Offerings" className="max-w-50 max-h-50" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-down">
          <div className="md:w-1/2">
            <img src={image3} alt="Flexible Learning" className="max-w-50 max-h-50" />
          </div>

          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">E-Books and Study Materials</h2>
            <p className="text-lg mt-5">Access our vast collection of e-books and study materials curated by experts in their respective fields. These digital resources serve as valuable companions to your learning journey, offering in-depth explanations, practice exercises, and additional insights. Our e-books cover a wide range of subjects, ensuring that you have the necessary reference materials to support your studies. Whether you need to dive deeper into a concept or prepare for an exam, our e-books and study materials provide the knowledge you seek at your fingertips.</p>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-up" >
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold border-b-2 inline border-gray-500 mb-10">Workshops and Webinars</h2>
            <p className="text-lg mt-5">
            Our tutoring services provide personalized academic support to help you excel in your studies. Our team of experienced tutors is dedicated to assisting students in understanding complex topics, improving their skills, and boosting their confidence. Whether you require one-on-one tutoring sessions or group study sessions, our tutors are equipped with the expertise and resources to address your specific learning needs. With their guidance and support, you'll be able to overcome challenges, clarify doubts, and achieve academic success.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-down">
            <img src={image4} alt="Expert Instructors" className="max-w-50 max-h-50" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-down">
          <div className="md:w-1/2">
            <img src={image3} alt="Flexible Learning" className="max-w-50 max-h-50" />
          </div>

          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">Tutoring and Academic Support</h2>
            <p className="text-lg mt-5">
            Our tutoring services provide personalized academic support to help you excel in your studies. Our team of experienced tutors is dedicated to assisting students in understanding complex topics, improving their skills, and boosting their confidence. Whether you require one-on-one tutoring sessions or group study sessions, our tutors are equipped with the expertise and resources to address your specific learning needs. With their guidance and support, you'll be able to overcome challenges, clarify doubts, and achieve academic success.
            </p>
          </div>
        </div>



        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-up">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold border-b-2 inline border-gray-500 mb-10">
            Skill Development Programs</h2>
            <p className="text-lg mt-5">Our skill development programs are designed to equip you with in-demand skills that are valuable in today's job market. From coding and digital marketing to data analysis and graphic design, we offer programs that focus on practical application and hands-on learning. Our expert instructors provide step-by-step guidance, real-world projects, and industry-relevant case studies to enhance your skills and make you job-ready. Stay ahead of the curve and position yourself for success with our skill development programs.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-down">
            <img src={image4} alt="Expert Instructors" className="max-w-50 max-h-50" />
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-down">
          <div className="md:w-1/2">
            <img src={image3} alt="Flexible Learning" className="max-w-50 max-h-50" />
          </div>

          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">
            Exam Preparation</h2>
            <p className="text-lg mt-5">Prepare for exams with our comprehensive exam preparation resources. We offer a range of practice tests, mock exams, and study plans designed to help you familiarize yourself with the exam format, assess your knowledge, and identify areas that require further attention. Our exam preparation materials are crafted by subject matter experts and align with the latest exam patterns and syllabi. By utilizing our resources and following our tailored study plans, you'll be well-prepared and confident on the day of your exam.</p>
          </div>
        </div>


    
        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-up">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold border-b-2 inline border-gray-500 mb-10">Career Guidance</h2>
            <p className="text-lg mt-5">Making informed decisions about your educational and career path is crucial. Our career guidance services provide valuable insights, information, and resources to help you navigate the ever-evolving job market. Our career counselors can assist you in exploring various career options, identifying your strengths and interests, and providing guidance on the skills and qualifications needed for different professions. Additionally, we offer resources on job trends, industry insights, resume building, interview preparation, and networking strategies to help you make the most informed career choices.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-down">
            <img src={image4} alt="Expert Instructors" className="max-w-50 max-h-50" />
          </div>
        </div>


        


        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-down">
          <div className="md:w-1/2">
            <img src={image3} alt="Flexible Learning" className="max-w-50 max-h-50" />
          </div>

          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">Language Learning</h2>
            <p className="text-lg mt-5">
            Unlock a world of opportunities by enhancing your language skills with our language courses. Whether you're a beginner or aiming for advanced fluency, our language learning programs cater to learners of all levels. Immerse yourself in interactive lessons, practice conversational skills, and delve into the cultural aspects of the language. Our experienced instructors and comprehensive curriculum ensure that you develop a strong foundation in grammar, vocabulary, and pronunciation, empowering you to communicate confidently in your target language.</p>
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-up">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold border-b-2 inline border-gray-500 mb-10">Student Community and Networking</h2>
            <p className="text-lg mt-5">Join our vibrant student community and engage with fellow learners who share similar educational interests. Our online platform provides a space for collaboration, discussion, and networking. Connect with peers, form study groups, participate in forums, and exchange knowledge and experiences. Building a strong network of like-minded individuals can enhance your learning journey and open doors to future collaborations and opportunities. </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2"data-aos="fade-down">
            <img src={image4} alt="Expert Instructors" className="max-w-50 max-h-50" />
          </div>
        </div>










        <div className="flex flex-col md:flex-row items-center justify-center mb-8" data-aos="fade-down">
          <div className="md:w-1/2">
            <img src={image3} alt="Flexible Learning" className="max-w-50 max-h-50" />
          </div>

          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-10">
            Certification and Accreditation</h2>
            <p className="text-lg mt-5">Earn industry-recognized certifications and accreditations through our courses and programs. These credentials serve as a validation of your expertise and can significantly enhance your credibility in the job market. Our certification programs cover a wide range of disciplines and are designed to meet industry standards. By completing our accredited courses, you'll gain a competitive edge, demonstrate your proficiency, and increase your career prospects.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
