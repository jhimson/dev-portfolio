/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import LOGO from '../assets/images/j•p.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {Link as ScrollLink} from 'react-scroll'
import resume from "../assets/files/jhimson_pamisa.pdf"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        //! Main navbar wrapper ~~~START
        <div className='flex flex-col justify-between py-3 mx-auto lg:flex-row lg:p-0 navbar-container'>
            <div className="flex items-center justify-between lg:mx-24">
                <div className="flex cursor-pointer">
                    <img src={LOGO} alt="" className='w-24 h-24 lg:h-32 lg:w-32'/>
                </div>
                <div className="flex mr-4 lg:hidden">
                    {toggle ? <AiOutlineClose size='3em' className='font-bold text-red-600 cursor-pointer'onClick={() => setToggle(!toggle)}/> : <GiHamburgerMenu size='3em' className='font-extrabold text-white cursor-pointer' onClick={() => setToggle(!toggle)}/> }
                </div>
            </div>

            <div className={`${toggle ? 'flex' : 'hidden'} flex-col justify-center lg:items-center pb-4 lg:pb-0 lg:flex`}>
                <nav>
                    <ul className="flex flex-col px-8 lg:flex-row">
                        <li className="text-gray-500"><ScrollLink to='projects' smooth={true}><a href="" className='nav-item'>Projects</a></ScrollLink></li>
                        <li className="text-gray-500"><ScrollLink to='tech-stack' smooth={true}><a href="" className='nav-item'>Tech Stack</a></ScrollLink></li>
                        <li className="text-gray-500"><a href={resume} target={'_blank'} className='nav-item' download={true}>Resume</a></li>
                    </ul>
                </nav>
            </div>
        </div> //! Main navbar wrapper ~~~END
        
    )
}

export default Navbar
