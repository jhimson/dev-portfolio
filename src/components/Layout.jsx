import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import TechStack from './TechStack'
import Projects from './Projects'


const Layout = () => {
    return (
        <>
        <Navbar/>
        <Header/>
        <TechStack />
        <Projects/>
        </>
    )
}

export default Layout
