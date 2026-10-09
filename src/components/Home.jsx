import React from 'react'
import Hero from './Hero'
import Menu from './Menu'
import About from './About'
import WhyUS from './WhyUS'
import Contact from './Contact'
import Footer from './Footer'


const Home = () => {
    
  return (
    <div className="bg-cream pt-20">
        <Hero/>
        <Menu/>
        <About/>
        <WhyUS/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home