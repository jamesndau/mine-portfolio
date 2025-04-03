import React, { useState } from "react";
import { Link } from "react-scroll";
import user from "../assets/james.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-blue-800 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-2xl container mx-auto px-6 md:px-24 flex items-center justify-between py-4">
        
        <div className="flex items-center space-x-3 md:space-x-6">
          <img
            src={user}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
          />
          <div>
            <h1 className="text-xl font-bold text-white">James Kano</h1>
            <p className="text-sm font-bold text-blue-200">Software Developer</p>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-10">
          <ul className="flex items-center space-x-8 text-base font-bold text-white">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1g04SV1Pm8s6q3VI4rcOGvGUjM4Hv8qfb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 cursor-pointer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="bg-blue-800 text-white md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 font-bold">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1g04SV1Pm8s6q3VI4rcOGvGUjM4Hv8qfb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
