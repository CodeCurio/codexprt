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
        <Tittle subtittle='Our Location' tittle='Find Us On Maps'/>
        <iframe width="1100" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=620&amp;height=600&amp;hl=en&amp;q=%20Kursi%20Rd,%20Tedhi%20Pulia,%20Gaurabagh%20Lucknow+(codexprt)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <Footer/>
      </div>
    </div>
  )
}

export default App