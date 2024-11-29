import React from 'react';
import profile from '../assets/profile_img.svg';
import { Instagram, Facebook, Github, Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-16 sm:py-20">
      {/* Social Media Icons */}
      <div className="fixed left-2 sm:left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-10">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
        >
          <Instagram className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
        >
          <Facebook className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-700 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
        >
          <Github className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
        >
          <Linkedin className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-8 sm:mt-0">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg mb-4 sm:mb-6 border-4 border-white"
        />

        {/* Name and Role */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center px-2">
          I'm Deepak Kumar Singh
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-center px-2">
          Frontend Developer based in India
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md justify-center px-2">
          {/* Download Resume Button */}
          <a
            href=""
            download="Deepak_Kumar_Singh_Resume.pdf"
            className="bg-white text-purple-500 px-4 sm:px-6 py-2 text-sm md:text-base rounded-2xl shadow-md font-semibold hover:bg-gray-200 transition text-center w-full"
          >
            Download Resume
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 text-sm md:text-base rounded-2xl shadow-md font-semibold hover:bg-white hover:text-black transition text-center w-full"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;