import React from 'react';
import user from '../assets/photo.avif';
import { MdFileDownload } from "react-icons/md";

const About = () => {
  
  return (
    <div name="About" className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          
          <div className="w-full md:w-2/3 text-center md:text-left space-y-6 md:space-y-8">
            
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">About</h1>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I am a passionate Software Developer and Machine learning Enthusiast, having a strong foundation in Data Structures and Algorithms. 
              I specialize in building scalable applications with clean code, optimizing performance, and creating dynamic, responsive user interfaces.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">Internship Experience</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I worked as a <strong>Software developer intern</strong> at 
              <a href="https://afrisauti.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Afrisauti vas ltd </a> 
              in Nairobi,Where i played a crucial role in the maintenance of the digital music distribution platform. Leveraging
my skills in Software development, database administration, and Machine Learning. I contributed to
various aspects of software development within the organization.
              During this internship, I streamlined database operations and improved query performance, leading
to faster load times and enhanced user experience on the Afrisauti Platform,i also Investigated and Prototype AI-driven solutions for content
recommendation and sentiment analysis, laying the groundwork for future enhancements
to the Afrisauti platform. Successfully implemented features for optimisins content distribution
across multiple online platforms, resulting in increased visibility and engagement for
Afrisauti artists and content creators
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">Contact Information</h2>
            <ul className="list-none space-y-2">
              <li>Email: <a href="mailto:jameskano801@gmail.com" className="text-blue-600 hover:underline">jameskano801@gmail.com</a></li>
              <li>GitHub Profile: <a href="https://github.com/jamesndau" className="text-blue-600 hover:underline">https://github.com/jamesndau</a></li>
              <li>Portfolio: <a href="https://jayso-18c16.web.app/index.html" className="text-blue-600 hover:underline">https://jayso-18c16.web.app/index.html</a></li>
            </ul>

            <h2 className="text-blue-600 font-bold text-2xl">Career Objective</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            My career goal is to leverage my technical expertise and passion for machine learning and software development to make a positive impact to industry. 
            Am eager to contribute to innovative projects, enhance my knowledge, and grow alongside a talented team.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">Educational Qualifications</h2>
            <ul className="list-none space-y-2">
              <li>Bachelor of Science in Computer Science (B.Sc) - Maseno University, Kisumu (Graduated with 2nd Class(Upper Divison))</li>
              <li>Secondary School(KCSE) - Matinyani Boys Secondary School, Kitui (Attained B+)</li>
              <li>Primary School (KCPE) - Pelena Academy School, Kitui (357/500)</li>
            </ul>

            <h2 className="text-blue-600 font-bold text-2xl">Soft Skills</h2>
            <ul className="list-none space-y-2">
              <li>Fluent in English</li>
              <li>Excellent communication skills</li>
              <li>Strong analytical and problem-solving abilities</li>
              <li>Team player with collaboration skills</li>
              <li>Adaptable and quick learner</li>
              <li>Effective time management and organizational skills</li>
            </ul>

            <h2 className="text-blue-600 font-bold text-2xl mt-8">Skills & Expertise</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
              With a solid foundation in Software development, I have honed my skills across a wide range of technologies, including:
            </p>

            <ul className="list-none space-y-2 mt-4">
              <li><span className="font-bold">Frontend Development:</span> React, Vue and Tailwind CSS.</li>
              <li><span className="font-bold">Backend Development:</span> Node.js, Express.js, Slim and RESTful APIs.</li>
              <li><span className="font-bold">Machine Learning:</span> Scikit-learn, Pytorch,Tensorflow and Supervised,Unsupervised and Reinforcement learning</li>
              <li><span className="font-bold">Data Structures & Algorithms:</span> Problem-solving skills with expertise in JavaScript, C, Python, and Java.</li>
              <li><span className="font-bold">Version Control:</span> Git and GitHub for efficient code management and collaboration.</li>
              <li><span className="font-bold">Database Management:</span> MySQL,NoSQL databases with MongoDB and Mongoose ODM.</li>
              <li><span className="font-bold">Testing & Debugging:</span> Experience with unit and integration testing using Jest</li>
              <li><span className="font-bold">Agile & Scrum:</span> Familiar with Agile methodologies and Scrum practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
