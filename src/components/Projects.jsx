import React from 'react'
import sharmine from '../assets/images/sharmine.jpg'

const Projects = () => {
    return (
        <div className='grid justify-center min-h-screen mt-10 xl:grid-cols-4'  id='projects'>
            <div className="mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-2/3">
                <div className="p-2 bg-red-200 card-header">
                    <img src={sharmine} alt="" className='w-full h-72'/>
                </div>
                <div className="flex flex-col p-2 card-body">
                    <h1 className='text-2xl font-bold text-center font-Dosis'>Tasty Food Search</h1>
                    <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                </div>
            </div>

            <div className="mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-2/3">
                <div className="p-2 bg-red-200 card-header">
                    <img src={sharmine} alt="" className='w-full h-72'/>
                </div>
                <div className="flex flex-col p-2 card-body">
                    <h1 className='text-2xl font-bold text-center font-Dosis'>Tasty Food Search</h1>
                    <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                </div>
            </div>

            <div className="mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-2/3">
                <div className="p-2 bg-red-200 card-header">
                    <img src={sharmine} alt="" className='w-full h-72'/>
                </div>
                <div className="flex flex-col p-2 card-body">
                    <h1 className='text-2xl font-bold text-center font-Dosis'>Tasty Food Search</h1>
                    <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                </div>
            </div>

            <div className="mx-auto bg-white border-2 rounded-lg shadow-2xl lg:w-5/6 card-container h-2/3">
                <div className="p-2 bg-red-200 card-header">
                    <img src={sharmine} alt="" className='w-full h-72'/>
                </div>
                <div className="flex flex-col p-2 card-body">
                    <h1 className='text-2xl font-bold text-center font-Dosis'>Tasty Food Search</h1>
                    <button className='px-5 py-2 mt-10 text-xl text-white bg-indigo-600 rounded-lg animate-float focus:outline-none'>Live Demo</button>
                </div>
            </div>
            
        </div>
    )
}

export default Projects
