import React, { useState } from 'react';

const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const handleClick=()=>{

    }
  return (
    <div name='Contact' className="bg-blue-50 min-h-screen flex flex-col items-center py-12">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Me</h1>
        <p className="text-gray-700 text-lg text-center mt-4">
          Please fill out the form below to reach out to me.
        </p>

        <form
          className="mt-8 bg-white shadow-md rounded-lg p-6 space-y-6"
          action="https://getform.io/f/bolmyqya"
          method="POST"
          onClick={handleClick}
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
