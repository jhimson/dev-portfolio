import React from 'react'
import {FaFacebookSquare, FaLinkedin, FaTwitter, FaGithub, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-5 h-36' style={{backgroundColor: '#091c29'}}>
            <div className="flex space-x-5 icons">
                <span className='text-gray-200'><FaGithub size='1.5em'/></span>
                <span className='text-gray-200'><FaLinkedin size='1.5em'/></span>
                <span className='text-gray-200'><FaTwitter size='1.5em'/></span>
                <span className='text-gray-200'><FaFacebookSquare size='1.5em'/></span>
                <span className='text-gray-200'><FaInstagram size='1.5em'/></span>

            </div>
            <div className='text-xl text-gray-200 copyrights'><p>&copy; 2021 All rights reserved. – Designed & Coded with 💖 by Jhimson Pamisa</p></div>
        </div>
    )
}

export default Footer
