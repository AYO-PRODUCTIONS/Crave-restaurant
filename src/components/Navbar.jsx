import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-5 bg-cream text-espresso ">
       <div className="flex items-center justify-between"> 
        <h1 className="text-2xl font-bold text-orange">CRAVE</h1>

        
        <ul className="hidden md:flex space-x-7 text-lg font-medium">
            <li><a className="hover:text-orange transition-colors duration-200" href="#home">Home</a></li>
            <li><a className="hover:text-orange transition-colors duration-200" href="#menu">Menu</a></li>
            <li><a className="hover:text-orange transition-colors duration-200" href="#about">About</a></li>
            <li><a className="hover:text-orange transition-colors duration-200" href="#contact">Contact</a></li>
        </ul>

        <a href="#menu" className="hidden md:block bg-orange text-white rounded-full px-5 py-2 font-medium hover:bg-espresso transition-colors duration-300">
            Order Now
        </a>
        
        <button className="md:hidden text-espresso p-1 rounded-lg" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
       </div>

        <div id="mobile-navigation" className={`md:hidden mt-5 bg-beige overflow-hidden rounded-lg transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className='p-5' onClick={() => setIsOpen(!isOpen)}>
            <ul className="flex flex-col gap-4 m-3 text-lg font-medium">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#menu" className="inline-block mt-5 bg-orange text-white rounded-full px-5 py-2 font-medium">
                Order Now
            </a>
            </div>
        </div>

    </nav>
  )
}

export default Navbar