import React, { useEffect } from 'react';
import goalAchievement from '../assets/images/goal-achievement.jpg';
import trivia from '../assets/images/trivia.JPG';
import recipe from '../assets/images/food.JPG';
import theHood from '../assets/images/dashboard.jpg';

import Card from '../components/Card';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="mt-10" id="projects">
      <div
        className="mb-24 text-6xl font-bold text-center font-Dosis projects-header"
        data-aos="fade-left"
      >
        Some apps I’ve Built
      </div>
      <div className="grid min-h-screen xl:grid-cols-3 xl-grid-rows-auto gap-y-8">
        <Card
          title={`Devtability`}
          description={`Devtability is an accountability app for Developers. This app will help developers in maintaining daily coding commitment. It was programmed to check the users if they haven't been coding each day.`}
          image={goalAchievement}
          tools={['React', 'Express', 'Redux', 'PostgreSQL', 'Tailwindcss']}
          liveLink={`https://goal-achievement-app.site/`}
          codeLink={`https://github.com/jhimson/goal-achievement-app`}
        />

        <div
          data-aos="zoom-in-left"
          className="px-4 py-2 mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-3/5"
        >
          <div className="flex flex-col card-body">
            <h1 className="mb-2 text-2xl font-bold text-left font-Dosis">
              Tasty Food Search App
            </h1>
            <p className="mb-4 text-sm font-semibold text-gray-500">
              An application where you can search any food that you like and
              find out the recipe and instructions on how to cook it.
            </p>
          </div>
          <div className="bg-red-200 bg-center card-header">
            <img src={recipe} alt="" className="w-full h-60" />
          </div>
          <div className="flex p-2 mt-2 space-x-1 font-semibold text-gray-700 card-body">
            <p className="px-1 py-1 bg-gray-300 rounded-md">React</p>
            <p className="px-1 py-1 bg-gray-300 rounded-md">Tailwindcss</p>
            <p className="px-1 py-1 bg-gray-300 rounded-md">Edamam API</p>
          </div>
          <div className="flex items-center justify-around">
            <button className="px-5 py-2 mt-10 text-xl text-white bg-blue-400 rounded-lg focus:outline-none hover:bg-blue-500">
              <a
                href="https://tastyfoodsearch.netlify.app/"
                target={'_blank'}
                rel="nonreferrer"
              >
                View Live
              </a>
            </button>
            <button className="px-5 py-2 mt-10 text-xl text-white bg-green-400 rounded-lg focus:outline-none hover:bg-green-500">
              <a
                href="https://github.com/jhimson/recipe-search-app"
                target={'_blank'}
                rel="nonreferrer"
              >
                View Code
              </a>
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in-left"
          className="h-auto px-4 py-2 mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-3/5"
        >
          <div className="flex flex-col card-body">
            <h1 className="mb-2 text-2xl font-bold text-left font-Dosis">
              TheHood - Stock Investment Tracker
            </h1>
            <p className="mb-4 text-sm font-semibold text-gray-500">
              An E-Commerce web application where you can add items to the cart
              and has a checkout functionality using Paypal.
            </p>
          </div>
          <div className="bg-red-200 bg-center card-header">
            <img src={theHood} alt="" className="w-full h-60" />
          </div>
          <div className="flex flex-wrap p-2 mt-2 space-x-1 font-semibold text-gray-700 card-body gap-y-2 gap-x-2">
            <p className="px-2 py-1 bg-gray-300 rounded-md">Tailwindcss</p>
            <p className="px-2 py-1 bg-gray-300 rounded-md">Express</p>
            <p className="px-2 py-1 bg-gray-300 rounded-md">Mongoose</p>
            <p className="px-2 py-1 bg-gray-300 rounded-md">Alphavantage API</p>
            <p className="px-2 py-1 bg-gray-300 rounded-md">Twelvedata API</p>
            <p className="px-2 py-1 bg-gray-300 rounded-md">News API</p>
          </div>
          <div className="flex items-center justify-around">
            <button className="px-5 py-2 text-xl text-white bg-blue-400 rounded-lg focus:outline-none hover:bg-blue-500">
              <a
                href="https://thehoodapp.herokuapp.com/"
                target={'_blank'}
                rel="nonreferrer"
              >
                View Live
              </a>
            </button>
            <button className="px-5 py-2 text-xl text-white bg-green-400 rounded-lg focus:outline-none hover:bg-green-500">
              <a
                href="https://github.com/jhimson/TheHood"
                target={'_blank'}
                rel="nonreferrer"
              >
                View Code
              </a>
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in-left"
          className="px-4 py-2 mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-3/5"
        >
          <div className="flex flex-col card-body">
            <h1 className="mb-2 text-2xl font-bold text-left font-Dosis">
              Trivia Quiz App
            </h1>
            <p className="mb-4 text-sm font-semibold text-gray-500">
              An application where you can take a quiz, learn facts in different
              categories and can select level of difficulty.
            </p>
          </div>
          <div className="bg-red-200 bg-center card-header">
            <img src={trivia} alt="" className="w-full h-60" />
          </div>
          <div className="flex p-2 mt-2 space-x-1 font-semibold text-gray-700 card-body">
            <p className="px-1 py-1 bg-gray-300 rounded-md">React</p>
            <p className="px-1 py-1 bg-gray-300 rounded-md">Redux</p>
            <p className="px-1 py-1 bg-gray-300 rounded-md">Tailwindcss</p>
            <p className="px-1 py-1 bg-gray-300 rounded-md">Opentdb API</p>
          </div>
          <div className="flex items-center justify-around">
            <button className="px-5 py-2 mt-10 text-xl text-white bg-blue-400 rounded-lg focus:outline-none hover:bg-blue-500">
              <a
                href="https://braintriviaquiz.netlify.app/"
                target={'_blank'}
                rel="nonreferrer"
              >
                View Live
              </a>
            </button>
            <button className="px-5 py-2 mt-10 text-xl text-white bg-green-400 rounded-lg focus:outline-none hover:bg-green-500">
              <a
                href="https://github.com/jhimson/trivia-quiz-app"
                target={'_blank'}
                rel="nonreferrer"
              >
                View Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
