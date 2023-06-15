import React from 'react';
import image from '../../Images/2d720aea-a617-4f9a-8a5a-3ff0ee24be98.jpg'
import { FaInstagram,FaLinkedinIn,FaFacebookF,FaTwitter } from "react-icons/fa";
import {NavLink} from 'react-router-dom';


const Footer = () => {
 
    const links = [
        {
          id: 2,
          link: 'About Us',
          to: "/about"
        },
        {
          id: 3,
          link: 'Courses',
          to: "/Courses"
        },
        {
            id: 4,
            link: 'Blog',
            to: "/Blog"
          },
       
     {
          id: 5,
          link: 'Contact Us',
          to: "/contact"
        },
      ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
        
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


          <div className="flex">
            <img src={image} alt="Path Solution" className="h-15 w-15 mr-2" />
          </div>
 
          <div>
            <h4 className="text-xl font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
    {links.map(items=>{
    return <li key={items.id}>
        <NavLink to={items.to}>{items.link}</NavLink>
      </li>
    })}
</ul> 
         </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p>
              123 Education Street,
              <br />
              Cityville, ABC 12345,
              <br />
              Pakistan
            </p>
            <p className="mt-4">
              Phone: +1 234 567 890
              <br />

            </p>
             <p>
              
              <a href="mailto:info@educationalportal.com">info@educationalportal.com</a>

              </p> 
          </div>

          
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="facebook.com" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook"><FaFacebookF/></i>
              </a>
              <a href="twiter.com" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"><FaTwitter/></i>
              </a>
              <a href="instgram.com" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"><FaInstagram/></i>
              </a>
              <a href="#faceboo.com" className="text-gray-300 hover:text-white color-blue">
                <i className="fab fa-linkedin"><FaLinkedinIn/></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
