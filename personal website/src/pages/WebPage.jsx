import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import Footer from '../components/Footer/Footer'

const WebPage = () => {
  return (
    <div className='flex flex-col'>
        <div className='min-h-screen flex flex-col gap-4'>
          <NavBar />
          <Hero />
        </div>
      <div className='flex flex-col gap-12'>
        <About />
        <Experience />
        < Projects />
        <GetInTouch />
      </div>
      <Footer/>
    </div>
  )
}

export default WebPage
