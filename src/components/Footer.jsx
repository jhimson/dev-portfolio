import React from 'react';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-5 h-36"
      style={{ backgroundColor: '#091c29' }}
    >
      <div className="flex space-x-5 icons">
        <a href="https://github.com/jhimson" target={'_blank'}>
          <span className="text-gray-200 cursor-pointer hover:text-purple-400">
            <FaGithub size="1.5em" />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/jhimsonpamisa/" target={'_blank'}>
          <span className="text-gray-200 cursor-pointer hover:text-blue-600">
            <FaLinkedin size="1.5em" />
          </span>
        </a>
        {/* <span className="text-gray-200 cursor-pointer hover:text-blue-300">
          <FaTwitter size="1.5em" />
        </span>
        <span className="text-gray-200 cursor-pointer hover:text-blue-500">
          <FaFacebookSquare size="1.5em" />
        </span>
        <span className="text-gray-200 cursor-pointer hover:text-yellow-400">
          <FaInstagram size="1.5em" />
        </span> */}
      </div>
      <div className="text-xl text-gray-200 copyrights">
        <p>
          &copy; 2022 All rights reserved. – Designed & Coded with 💖 by Jim
          Pamisa
        </p>
      </div>
    </div>
  );
};

export default Footer;
