import React, { useEffect } from 'react';
import Postgres from '../assets/images/postgres.webp';
import Mongodb from '../assets/images/mongodb.png';
import Node from '../assets/images/node.png';
import Express from '../assets/images/express.png';
import ReactJS from '../assets/images/react.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="bg-blue-100 " id="tech-stack">
      <h1 className="text-6xl font-bold text-center font-Dosis">
        Few technologies I’ve been working with recently:
      </h1>
      <div className="flex flex-wrap justify-center mt-48">
        <span className="flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-float">
          <LazyLoadImage src={Postgres} />
        </span>
        <span className="flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-float">
          <LazyLoadImage src={Mongodb} />
        </span>
        <span className="flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-refloat">
          <LazyLoadImage src={Express} />
        </span>
        <span className="flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-float">
          <LazyLoadImage src={ReactJS} />
        </span>
        <span className="flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-refloat">
          <LazyLoadImage src={Node} />
        </span>
      </div>
    </div>
    // <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100" id='tech-stack' data-aos='fade-left'>

    // </div>
  );
};

export default TechStack;
