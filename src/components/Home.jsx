import React from 'react';
import user from '../assets/james.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from 'react-typed';
import { SiDocker, SiTensorflow } from "react-icons/si";


const Home = () => {
  return (
    <div name='Home' className="flex flex-col md:flex-row items-center justify-center bg-blue-50 min-h-screen px-6 py-12 mt-14">

      <div className="w-full md:w-1/2 text-center md:text-left space-y-10 px-4 md:pl-20 ">
        <span className="text-blue-600 text-xl font-medium uppercase tracking-wide">
          Welcome To My Feed
        </span>
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hello, I'm a <span className="text-blue-800">
            <ReactTyped
              strings={['Software Developer...', 'Problem Solver...', 'Machine Learning Enthusiast...']}
              typeSpeed={40}
              backSpeed={50}
              backDelay={1000}
              loop
            />
            </span>
          </h1>
        </div>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        Hi! am a computer science graduate with a deep passion for machine learning and software development. Throughout my academic journey, I've build a strong foundation in computer science principles and programming languages, including Analytical, visualization and software development. As a machine learning enthusiast, I've done several hands-on projects which solves complex problems and drives innovation by applying machine learning algorithms, data visualization etc. 
        These projects have not only improved my technical skills but also fueled curiosity and creativity in exploring the vast possibilities of data driven solutions.
        Driven by a relentless pursuit of excellence and a curiosity to push boundaries, I'm committed to continuous learning and growth in the ever-evolving landscape of technology. With a versatile skill set in machine learning, natural language processing, and software development, 
        I'm able to make meaningful contributions to projects that demand innovation, creativity, and technical expertise.
        </p>

        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-12 md:space-y-0">

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-5">
            <h2 className="text-xl font-semibold text-blue-800">Available on</h2>
            <div className="flex justify-center md:justify-start space-x-8 text-3xl text-blue-800">
              <a href="https://www.facebook.com/profile.php?id=100058513687656"><FaFacebook className="hover:text-blue-600 cursor-pointer" /></a>
              <a href="https://www.linkedin.com/in/james-kano-8843b8273/"><FaLinkedin className="hover:text-blue-600 cursor-pointer" /></a>
              <a href="https://x.com/jay_kanoh"><FaTwitter className="hover:text-blue-600 cursor-pointer" /></a>
              <a href="https://wa.me/+254798698887" title="click to open whatsapp chat"><IoLogoWhatsapp className="hover:text-green-500 cursor-pointer" /></a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end space-y-5">
            <h2 className="text-xl font-semibold text-blue-800">Currently Working On</h2>
            <div className="flex justify-center md:justify-end space-x-8 text-4xl text-blue-800">
              <FaReact className="hover:text-blue-600 cursor-pointer" />
              <FaNodeJs className="hover:text-green-500 cursor-pointer" />
              <SiDocker className="hover:text-blue-500 cursor-pointer" /> 
              <SiTensorflow className="hover:text-orange-500 cursor-pointer" /> 
            </div>
          </div>

        </div>
      </div>

      <div className="w-full md:pl-24 md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <div className="bg-blue-100 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-lg">
          <img
            src={user}
            alt="Profile"
            className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
