import React from 'react';
import {NavLink,useLocation  } from 'react-router-dom';


  const links = [
    {
      id: 1,
      link: 'HOME',
      to: "/"
    },
    {
      id: 2,
      link: 'About',
      to: "/about"
    },
    {
      id: 3,
      link: 'Courses',
      to: "/Courses"
    },
    {
      id: 4,
      link: 'Services',
      to: "/Services"
    },
    {
      id: 5,
      link: 'Teachers',
      to: "/teachers"
    },
    {
      id: 6,
      link: 'Contact Me',
      to: "/contact"
    },
    {
      id: 7,
      link: 'Login',
      to: "/login"
    },
  ];
const Navbar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  let token = localStorage.getItem('token')
  console.log(token, "Token")

  return (
    <nav className="bg-blue-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <h1 className="text-white text-3xl">PATH SOLUTION</h1>
        <ul className="hidden md:flex space-x-4 text-white">
          {links.map(({ id, link, to }) => {
            return (
  
              <li key={id} className="text-lg font-medium">
              
                <NavLink
                  to={currentUrl === '/login' && to === '/login' ? '/signup' : to}
                  activeClassName="text-gray-300"
                >
                  {currentUrl === '/login' && link === 'Login' ? 'Sign up' : link}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;


