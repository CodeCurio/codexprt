import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Tittle from './components/Tittle/Tittle'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Tittle subtittle='Our Service' tittle='What We Offer'/>
        <Services/>
        <About/>
        <Tittle subtittle='Contact Us' tittle='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App