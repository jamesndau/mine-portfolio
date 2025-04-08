import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="border-gray-300 my-6" />
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Connect with Me</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100058513687656"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/jaymoh_kano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://x.com/jay_kanoh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://github.com/jamesndau"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="list-none mt-2 space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Contact(+254798698887)
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} James Kano. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-xs">
              Designed and built by @jayArts
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
