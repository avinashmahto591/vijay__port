
// export default Navbar;
import React, { useState } from 'react';
import pic from "/vijayy.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

function Navbar() {
  const [menu, setMenu] = useState(false);

  // Added "Resume" to the navigation items
  const navItems = [
    { id: 1, text: "Home", link: "Home" },
    { id: 2, text: "About", link: "About" },
    { id: 3, text: "Portfolio", link: "Portfolio" },
    { id: 4, text: "Skills", link: "Skills" },
    { id: 5, text: "Resume", link: "Resume" }, 
    { id: 6, text: "Contact", link: "Contact" },
  ];

  return (
    <div
      className="
        max-w-screen-2xl container mx-auto px-4 md:px-20
        fixed top-0 left-0 right-0 z-50
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
        shadow-lg text-white
      "
    >
      {/* Navbar Container */}
      <div className="flex justify-between items-center h-16">
        
        {/* Logo / Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            src={pic}
            alt="profile"
            className="h-12 w-12 rounded-full border-2 border-white object-cover"
          />
          <div>
            <h1 className="text-xl font-bold leading-tight">Vijay Kumar</h1>
            <ReactTyped
              className="text-white font-bold"
              strings={["Data Analyst", "Programmer", "Coder"]}
              typeSpeed={20}
              backSpeed={50}
              loop={true}
            /> 
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map(({ id, text, link }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-yellow-300 duration-200 transition-colors"
            >
              <Link 
                to={link} 
                smooth={true} 
                duration={500} 
                offset={-70} 
                activeClass="text-yellow-300"
                spy={true}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menu && (
        <div
          className="
            md:hidden
            absolute
            top-16
            left-0
            w-full
            h-screen
            bg-gradient-to-b from-indigo-600 to-purple-700
            z-40
          "
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold">
            {navItems.map(({ id, text, link }) => (
              <li key={id}>
                <Link
                  onClick={() => setMenu(false)} // Closes menu after clicking
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-yellow-300 underline"
                  spy={true}
                  className="hover:text-yellow-300 duration-200 cursor-pointer"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
