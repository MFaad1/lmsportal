import React from 'react';
import {NavLink } from 'react-router-dom';

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
      id: 8,
      link: 'Exame',
      to: "/exms"
    },
    {
      id: 9,
      link: 'Q/A',
      to: "/qa"
    },
    {
      id: 7,
      link: 'Login',
      to: "/login"
    },
  ];
const Navbar = () => {
  return (
    <nav className="bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-white text-3xl">EASY EDUCATION</h1>
          <ul className="hidden md:flex space-x-4 text-white">

          {links.map(({id,link, to})=>{
          return  <li key={id} className="text-lg font-medium">
          <NavLink to={to} activeClassName="text-gray-300">{link}</NavLink>
          </li>
          })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


