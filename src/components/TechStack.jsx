import React,{useEffect} from 'react'
import Postgres from '../assets/images/postgres.webp'
import Node from '../assets/images/node.png'
import Express from '../assets/images/express.png'
import ReactJS from '../assets/images/react.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const TechStack = () => {

    useEffect(()=>{
        AOS.init({
            duration: 2000
        });
    },[])
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" id='stack' data-aos='fade-left'>
            <h1 className='text-6xl font-bold font-Dosis' >Stack I use</h1>
            <div className='flex flex-wrap justify-center mt-24'>
                <span className='flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-float'><LazyLoadImage src={Postgres}/></span>
                <span className='flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-refloat'><LazyLoadImage src={Express}/></span>
                <span className='flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-float'><LazyLoadImage src={ReactJS}/></span>
                <span className='flex items-center w-40 h-40 p-8 m-2 bg-white rounded-full shadow-2xl animate-refloat'><LazyLoadImage src={Node}/></span>
            </div>
            <p className='w-11/12 mx-auto mt-10 text-2xl text-center lg:max-w-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptates, cumque quisquam perferendis exercitationem accusamus. Veritatis officiis, optio asperiores quisquam ratione dicta blanditiis, in voluptatum neque deleniti cupiditate eaque cum.</p>
        </div>
    )
}

export default TechStack
