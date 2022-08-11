import React from 'react';
import goalAchievement from '../assets/images/goal-achievement.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Modal = () => {
  return (
    <div
      data-aos="zoom-in-left"
      className="px-4 py-2 mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-3/5"
    >
      <div className="flex flex-col card-body">
        <h1 className="mb-2 text-2xl font-bold text-left font-Dosis">
          Personal Development Tracker App
        </h1>
        <p className="mb-4 text-sm font-semibold text-gray-500">
          An application to track your goals, achievements, lesson learned and
          other stuff that makes you aware of your personal development.
        </p>
        {/* <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button> */}
      </div>
      <div className="bg-red-200 bg-center card-header">
        <img src={goalAchievement} alt="" className="w-full h-60" />
      </div>
      <div className="flex justify-center p-2 mt-2 space-x-1 font-semibold text-gray-700 card-body">
        <p className="px-1 py-1 bg-gray-300 rounded-md">React</p>
        <p className="px-1 py-1 bg-gray-300 rounded-md">Redux</p>
        <p className="px-1 py-1 bg-gray-300 rounded-md">Tailwindcss</p>
        <p className="px-1 py-1 bg-gray-300 rounded-md">Express</p>
        <p className="px-1 py-1 bg-gray-300 rounded-md">PostgreSQL</p>
      </div>
      <div className="flex items-center justify-around">
        <button className="px-5 py-2 mt-10 text-xl text-white bg-blue-400 rounded-lg focus:outline-none hover:bg-blue-500">
          <a
            href="https://goal-achievement-app.site/"
            target={'_blank'}
            rel="nonreferrer"
          >
            View Live
          </a>
        </button>
        <button className="px-5 py-2 mt-10 text-xl text-white bg-green-400 rounded-lg focus:outline-none hover:bg-green-500">
          <a
            href="https://github.com/jhimson/goal-achievement-app"
            target={'_blank'}
            rel="nonreferrer"
          >
            View Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default Modal;
