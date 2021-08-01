import React,{useEffect} from 'react'
import sharmine from '../assets/images/sharmine.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Projects = () => {
    useEffect(()=>{
        AOS.init({
            duration: 2000
        });
    },[])
    return (
        <div className='mt-10' id='projects'>
            <div className='mb-24 text-6xl font-bold text-center font-Dosis projects-header' data-aos='fade-left'>Some Things I’ve Built</div>
            <div className='grid justify-center min-h-screen xl:grid-cols-4'>
            <div data-aos='flip-left' className="mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-2/3">
                <div className="p-2 bg-red-200 card-header">
                    <img src={sharmine} alt="" className='w-full h-72'/>
                </div>
                <div className="flex flex-col p-2 card-body">
                    <h1 className='text-2xl font-bold text-center font-Dosis'>Tasty Food Search</h1>
                    <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                </div>
            </div>

            <div data-aos='flip-left' className="mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-2/3">
                <div className="p-2 bg-red-200 card-header">
                    <img src={sharmine} alt="" className='w-full h-72'/>
                </div>
                <div className="flex flex-col p-2 card-body">
                    <h1 className='text-2xl font-bold text-center font-Dosis'>Tasty Food Search</h1>
                    <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                </div>
            </div>

            <div data-aos='flip-left' className="mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-2/3">
                <div className="p-2 bg-red-200 card-header">
                    <img src={sharmine} alt="" className='w-full h-72'/>
                </div>
                <div className="flex flex-col p-2 card-body">
                    <h1 className='text-2xl font-bold text-center font-Dosis'>Tasty Food Search</h1>
                    <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                </div>
            </div>

            <div data-aos='flip-left' className="mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-2/3">
                <div className="p-2 bg-red-200 card-header">
                    <img src={sharmine} alt="" className='w-full h-72'/>
                </div>
                <div className="flex flex-col p-2 card-body">
                    <h1 className='text-2xl font-bold text-center font-Dosis'>Tasty Food Search</h1>
                    <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects
