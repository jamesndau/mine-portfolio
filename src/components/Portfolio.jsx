import React from 'react';

import sms from'../assets/sms.png';
import detect from'../assets/detect.png';
import broker from'../assets/broker.png';
import payment from'../assets/payment.png';
import recommender from'../assets/recommender.png';
import profile from'../assets/profile.png';
import streaming from'../assets/streaming.png';
import mdundo from'../assets/mdundo.png';
import convert from'../assets/convert.png';




const Portfolio = () => {
  const cardFiles = [
    {
      id: 1,
      logo: sms,
      name: 'Small Scale Business Mgt System(SSMS)',
      details:
        'Developed a Small Scale Business Management System using php for backend and react js for frontend, allowing customers to buy goods easily, Business owners to order goods on time to avoid low stock which could lead to delays. The app helps producers and Business owners to make wise decisions by providing good financial records.',
      sourceCode: 'https://github.com/jamesndau/small-scale-mgt-system',
      
    },
    {
      id: 2,
      logo: convert,
      name: 'MP3 to Wav converter',
      details:
        'Built a fully-functional MP3 to WAV converter platform using Reactjs, Tailwind CSS, and Php for backend. The app has friendly user interface which is easy to upload  mp3 files and download of converted WAV files. I was motivated to build the app after noticing my fellow coleagues in the organisation needed to upload wav files for the music distribution and the platforms available had maxmun number of conversions per day which was a bit challenging for smooth operation',
      sourceCode: 'https://github.com/jamesndau/converting-mp3-to-wav',
    },
    {
      id: 3,
      logo: mdundo,
      name: 'Artists Revenue Scrapper(Mdundo)',
      details:
        'Developed a Artists Revenue Scrapper for mdundo platform using Node js. It takes all the artists in the db, checks the profile of each artist in the mdundo platform and records the stats(payments) for specific months. the data is then sent to the db for easy disbursment of funds to the artists . This helped to reduce time taken to record artist payments by avoiding to check artist profile one after the other considering the organization has more than 500 artists',
      sourceCode: 'https://github.com/afrisauti-vas/mdundo-scrapper',
      
    },
    {
      id: 4,
      logo: recommender,
      name: 'Music Recommender Engine',
      details:
        'Developed a Music Recommender Engine using node js . Designed a mobile-friendly UI with Tailwind CSS, featuring real-time updates, and detailed file displays.',
      sourceCode: 'https://github.com/jamesndau/music-recommendation-engine/tree/recommend-new-user',
    },
    {
      id: 5,
      logo: detect,
      name: 'Feature Detection(BPM,Key,Mood)',
      details:
        'Developed a feature detection using Node js with seamless file uploads, and file size validation (up to 20MB). This features are used for music recommendation sytem for recommending new users and Existing ones.',
      sourceCode: 'https://github.com/jamesndau/bpm-detector/tree/bpm',
    },
    {
      id: 6,
      logo: streaming,
      name: 'Video Streaming App',
      details:
        'Developed a video streaming app using vue js, with seamless Video uploads. Designed a mobile-friendly UI with Tailwind CSS, featuring real-time updates, and detailed video displays.',
      sourceCode: 'https://github.com/afrisauti-vas/somatime-web',
      url: 'https://somatime.netlify.app/',
    },
    {
      id: 7,
      logo: broker,
      name: 'Message broker(create subscriber)',
      details:
        'Designed Message broker for creating subscriber.',
      sourceCode: 'https://github.com/SuryaPratap03/FileSharingApp',
    },
    {
      id: 8,
      logo: profile,
      name: 'Artist Profile Page)',
      details:
        'Designed a platform for sharing songs of an Artist on all digital platforms in one single page.It provides tools for artists to promote and distribute their music, including smart links, landing pages and advertising campaigns',
      sourceCode: 'https://github.com/jamesndau/artists-profile-rectjs/tree/master',
    },
    {
      id: 9,
      logo: payment,
      name: 'Serverless-Api mpesa payment',
      details:
        'Developed a serverless - API Mpesa Payment using aws rabbitmq and node js to store messages. Also builts consumer for completing mpesa transactions and deletes once ack, using node js',
      sourceCode: 'https://github.com/jamesndau/serverless-api-mpesa-payment',
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
