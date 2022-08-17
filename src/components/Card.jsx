import React from 'react';
import goalAchievement from '../assets/images/goal-achievement.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Card = ({ title, description, image, tools, liveLink, codeLink }) => {
  return (
    <div
      data-aos="zoom-in-left"
      className="h-auto px-6 py-8 mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-11/12 card-container"
    >
      <div className="flex flex-col card-body">
        <h1 className="mb-2 text-2xl font-bold text-left font-Dosis">
          {title}
        </h1>
        <p className="h-20 mb-4 font-semibold text-gray-500 text-md">
          {description}
        </p>
        {/* <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button> */}
      </div>
      <div className="bg-red-200 bg-center card-header">
        <img src={image} alt="" className="w-full h-60" />
      </div>
      <div className="flex flex-col h-24 p-2 mx-auto my-4 text-gray-700 card-body">
        <p className="mb-2 text-lg font-bold font-Dosis">Technologies used: </p>
        {/* <p className='font-semibold text-gray-500'>React, Express, Redux, Tailwindcss</p> */}
        <span className="font-semibold text-gray-500">
          {tools}
        </span>
      </div>
      <div className="flex items-center justify-around gap-x-4">
        <button className="w-1/2 px-4 py-2 mb-1 font-bold text-white transition duration-200 ease-in-out bg-green-500 rounded shadow-lg hover:bg-green-600 focus:outline-none focus:shadow-outline shadow-green-500/50 hover:scale-110">
          <a href={liveLink} target={'_blank'} rel="nonreferrer">
            View Live
          </a>
        </button>
        <button className="w-1/2 px-4 py-2 mb-1 font-bold text-white transition duration-200 ease-in-out rounded shadow-lg hover:bg-rose-600 focus:outline-none focus:shadow-outline bg-rose-500 shadow-rose-500/50 hover:scale-110">
          <a href={codeLink} target={'_blank'} rel="nonreferrer">
            View Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
