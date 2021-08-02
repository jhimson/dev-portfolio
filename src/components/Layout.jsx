import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import TechStack from './TechStack'
import Projects from './Projects'
import Footer from './Footer'


const Layout = () => {
    return (
        <>
        <Navbar/>
        <Header/>
        <TechStack />
        <Projects/>
        <Footer/>
        </>
    )
}

export default Layout
