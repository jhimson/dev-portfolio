import React from 'react'
import sharmine from '../assets/images/sharmine.jpg'

const Projects = () => {
    return (
        <div className='flex justify-center min-h-screen' id='projects'>
            <div className='grid justify-center w-screen grid-cols-3 gap-3 mt-10'>
                <div className='grid grid-cols-3 col-span-3'>
                    <div className="w-2/3 col-start-1 col-end-2 mx-auto bg-white border-2 rounded-lg shadow-2xl h-2/3 card-container">
                        <div className="p-2 card-header">
                            <img src={sharmine} alt="" className='w-full h-96'/>
                        </div>
                        <div className="flex flex-col p-10 card-body">
                            <h1 className='text-2xl font-bold text-center font-Dosis'>E-Commerce Web App</h1>
                            <button className='px-5 py-2 mt-4 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                        </div>
                    </div>
                    <div className="w-2/3 col-start-2 col-end-3 mx-auto bg-white border-2 rounded-lg shadow-2xl h-2/3 card-container">
                        <div className="p-2 card-header">
                            <img src={sharmine} alt="" className='w-full h-96'/>
                        </div>
                        <div className="flex flex-col p-10 card-body">
                            <h1 className='text-2xl font-bold text-center font-Dosis'>Trivia Quiz App</h1>
                            <button className='px-5 py-2 mt-4 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                        </div>
                    </div>
                    <div className="w-2/3 col-start-3 col-end-4 mx-auto bg-white border-2 rounded-lg shadow-2xl h-2/3 card-container">
                        <div className="p-2 card-header">
                            <img src={sharmine} alt="" className='w-full h-96'/>
                        </div>
                        <div className="flex flex-col p-10 card-body">
                            <h1 className='text-2xl font-bold text-center font-Dosis'>Job Hunt Tracker</h1>
                            <button className='px-5 py-2 mt-4 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
