import React, { useEffect } from 'react';
import devtability from '../assets/images/devtability.png';
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
          image={devtability}
          tools={'React, Express, Redux, PostgreSQL, Tailwindcss'}
          liveLink={`https://devtability.netlify.app`}
          codeLink={`https://github.com/jhimson/Devtability`}
        />

        <Card
          title={`TheHood - Stock Investment Tracker`}
          description={`An E-Commerce web application where you can add items to the cart
          and has a checkout functionality using Paypal.`}
          image={theHood}
          tools={
            'React, Express, MongoDB, Mongoose, Tailwindcss, Alphavantage API, Twelvedata API, News API'
          }
          liveLink={`https://thehoodapp.herokuapp.com`}
          codeLink={`https://github.com/jhimson/TheHood`}
        />

        <Card
          title={`Tasty Food Search App`}
          description={`An application where you can search any food that you like and
          find out the recipe and instructions on how to cook it.`}
          image={recipe}
          tools={'React, Edamam API, Tailwindcss'}
          liveLink={`https://tastyfoodsearch.netlify.app`}
          codeLink={`https://github.com/jhimson/recipe-search-app`}
        />

        <Card
          title={`Trivia Quiz App`}
          description={`An application where you can take a quiz, learn facts in different
          categories and can select level of difficulty.`}
          image={trivia}
          tools={'React, Redux, Tailwindcss, Opentdb API'}
          liveLink={`https://braintriviaquiz.netlify.app`}
          codeLink={`https://github.com/jhimson/trivia-quiz-app`}
        />
      </div>
    </div>
  );
};

export default Projects;
