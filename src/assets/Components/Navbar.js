
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'HOME',
      to: "HOME"
    },
    {
      id: 2,
      link: 'About',
      to: "about"
    },
    {
      id: 3,
      link: 'Courses',
      to: "Courses"
    },
    {
      id: 4,
      link: 'Services',
      to: "Services"
    },
    {
      id: 5,
      link: 'FaQs',
      to: "faqs"
    },
    {
      id: 6,
      link: 'Contact Me',
      to: "Contact"
    },
    {
      id: 7,
      link: 'Signup',
      to: "signup"
    },
  ];

  return (
    <>
      <nav className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-white text-3xl">EASY EDUCATION</h1>
            <div className="flex md:hidden">
              <button
                onClick={() => setNav(!nav)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {nav ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
            <ul className="hidden md:flex space-x-4 text-white">
              {links.map((item) => (
                <li
                  key={item.id}
                  className="text-lg font-medium hover:text-gray-300 cursor-pointer"
                >
                   <Link to={item.to}>{item.link}</Link>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
        {nav && (
          <div className="md:hidden">
            <ul className="bg-gray-800 space-y-4 py-4 text-center">
              {links.map((item) => (
                <li
                  key={item.id}
                  className="text-lg font-medium text-white hover:text-gray-300 cursor-pointer"
                >
                  {item.link}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

