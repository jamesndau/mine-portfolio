import React from 'react';
import panchayat from '../assets/panchayat.png';
import foodmania from '../assets/foodmania.png';
import filesharingapp from '../assets/filesharingapp.png';
import RestroApp from '../assets/RestroApp.png';

const Portfolio = () => {
  const cardFiles = [
    {
      id: 1,
      logo: panchayat,
      name: 'Panchayat - Chat App',
      details:
        'Developed a real-time chat application using the MERN stack and Socket.IO, allowing users to join multiple rooms, exchange messages instantly, and view timestamps. Integrated Cloudinary for profile image uploads and designed a responsive UI for a seamless experience across devices.',
      sourceCode: 'https://github.com/SuryaPratap03/FileSharingApp',
      url: 'https://fastidious-blancmange-74d464.netlify.app/',
    },
    {
      id: 2,
      logo: RestroApp,
      name: 'Restro App - Restaurant Management App',
      details:
        'Built a fully-functional food ordering platform using Next.js 13 with App Router, Tailwind CSS, and MongoDB Atlas. The app features user authentication, delivery partner, and restaurant owner roles with JWT-based authorization. Implemented real-time cart updates, checkout functionality, and restaurant management. Used Redux Toolkit for efficient state management and deployed the app on Vercel for optimal performance.',
      sourceCode: 'https://github.com/SuryaPratap03/RestroApp',
      url: 'https://restro-app-ic9q.vercel.app/',
    },
    {
      id: 3,
      logo: filesharingapp,
      name: 'File Sharing App',
      details:
        'Developed a file-sharing app using React with seamless file uploads, instant link sharing, and file size validation (up to 5MB). Designed a mobile-friendly UI with Tailwind CSS, featuring real-time updates, clipboard link copying, and detailed file displays.',
      sourceCode: 'https://github.com/SuryaPratap03/FileSharingApp',
      url: 'https://file-sharing-app-mu-six.vercel.app/',
    },
  ];

  return (
    <div name="Portfolio" className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">My Work</h1>
        <span className="underline text-blue-600 text-lg hover:text-blue-500 transition duration-300">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {cardFiles.map((file) => (
            <div
              key={file.id}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center"
              style={{ minHeight: '400px' }}
            >
              <img
                src={file.logo}
                alt={`${file.name} Logo`}
                className="w-32 h-32 object-contain mb-4"
              />
              <h1 className="text-xl mb-2 font-semibold text-gray-800 text-center">
                {file.name}
              </h1>
              <p className="text-gray-700 text-center text-sm mb-4">
                {file.details}
              </p>
              <div className="mt-auto flex space-x-4">
                <a
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
                  href={file.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
                <a
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300"
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
