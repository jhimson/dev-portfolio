import React, {useState, useEffect} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typical from 'react-typical'
import {Link as ScrollLink} from 'react-scroll'
import DevImage from '../assets/images/Formal Pic.png'

const Header = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    }, [])
    return (
        <div className='flex flex-col items-center justify-center' style={{backgroundColor: '#091c29'}}>
            <div className="flex flex-col min-h-screen lg:flex-row-reverse">
                <div className={`lg:ml-72 ${animated ? "" : 'translate-y-10 opacity-0'} transform transition duration-2000 ease-in-out`}>
                    <LazyLoadImage src={DevImage} effect="blur" className='w-full rounded-lg opacity-40 lg:w-4/5 lg:h-4/5'/>
                </div>
                <div className='flex flex-col items-center justify-center text-left font-Dosis'>
                    <div className={`${animated ? "" : 'translate-y-10 opacity-0'} text-3xl transform transition duration-2000 ease-in-out`}>
                        <h2 className={` text-4xl text-indigo-500`}>
                                Hi, my name is
                        </h2>
                        <p className='my-4 text-3xl font-bold text-gray-300 lg:text-7xl'>Jhimson Pamisa.</p>
                        <p className='my-4 text-3xl font-bold text-center text-gray-500 lg:text-7xl'>I build things for the web.</p>
                        <div className={`${animated ? "" : 'translate-y-10 opacity-0'} transform transition duration-2000 ease-in-out inline-block my-4 text-4xl text-gray-500`}>
                            <Typical
                                steps={['I am', 2000, 'I am a Self-taught Developer', 2000, 'I am a Web Developer', 2000, 'I am a Mobile Developer', 2000]}
                                loop={Infinity}
                                wrapper="h2"
                            />
                        </div>
                        <div>
                        <ScrollLink to='stack' smooth={true}>
                            <button className='px-10 py-2 mt-16 text-2xl text-white bg-indigo-600 rounded-lg sm:mb-4 animate-float focus:outline-none'>Discover More</button>
                        </ScrollLink>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
