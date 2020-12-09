import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typical from 'react-typical'
import DevImage from '../assets/images/Formal Pic.png'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center' style={{backgroundColor: '#091c29'}}>
            <div className="flex flex-col min-h-screen lg:flex-row-reverse">
                <div className='lg:ml-72'>
                    <LazyLoadImage src={DevImage} effect="blur" className='w-full rounded-lg opacity-40 lg:w-4/5 lg:h-4/5'/>
                </div>
                <div className='flex flex-col items-center justify-center text-center text-white font-Dosis'>
                    <div className='my-4 text-3xl font-bold lg:text-8xl'>
                        <h2>
                            Hi!
                            <br/>
                            My name is Jhim.
                        </h2>
                    </div>
                    <div className='inline-block my-4 text-4xl text-gray-500'>
                        <Typical
                            steps={['I am', 2000, 'I am a Self-taught Developer', 2000, 'I am a Web Developer', 2000, 'I am a Mobile Developer', 2000]}
                            loop={Infinity}
                            wrapper="h2"
                        />
                    </div>
                    <div>
                        <button className='px-10 py-2 mt-4 text-2xl bg-indigo-600 rounded-lg animate-float'>Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
