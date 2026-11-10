import React from 'react'
import Hero from './Hero'
import Menu from './Menu'
import About from './About'
import WhyUS from './WhyUS'
import Contact from './Contact'



const Home = () => {
    
  return (
    <div className="bg-cream pt-20">
        <Hero/>
        <Menu/>
        <About/>
        <WhyUS/>
        <Contact/>
    </div>
  )
}

export default Home