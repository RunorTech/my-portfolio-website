import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import Footer from '../components/Footer/Footer'

const WebPage = () => {
  return (
    <div>
     <NavBar/>
     <Hero/>
     <About/>
     <Experience/>
     < Projects/>
     <GetInTouch/>
     <Footer/>
    </div>
  )
}

export default WebPage
