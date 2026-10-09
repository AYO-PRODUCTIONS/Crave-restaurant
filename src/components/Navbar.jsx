import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-5 bg-cream text-espresso ">
       <div className="flex items-center justify-between"> 
        <h1 className="text-2xl font-bold text-orange">CRAVE</h1>

        
        <ul className="hidden md:flex space-x-7 text-lg font-medium">
            <li><a className="hover:text-orange transition-colors duration-200" href="/">Home</a></li>
            <li><a className="hover:text-orange transition-colors duration-200" href="#menu">Menu</a></li>
            <li><a className="hover:text-orange transition-colors duration-200" href="#about">About</a></li>
            <li><a className="hover:text-orange transition-colors duration-200" href="#contact">Contact</a></li>
        </ul>

        <button className="hidden md:block bg-orange text-white rounded-full px-5 py-2 font-medium hover:bg-espresso transition-colors duration-300">
           <a href="#menu">Order Now</a>
        </button>
        
        <button className="md:hidden text-espresso" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
       </div>

        <div className={`md:hidden mt-5 bg-beige overflow-hidden rounded-lg transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className='p-5'>
            <ul className="flex flex-col gap-4 m-3 text-lg font-medium">
                <li><a href="/">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button  className="mt-5 bg-orange text-white rounded-full px-5 py-2 font-medium">
                <a href="#menu">Order Now</a>
            </button>
            </div>
        </div>

    </nav>
  )
}

export default Navbar