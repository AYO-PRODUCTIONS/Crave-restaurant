import React from 'react'
import heroImg from '../assets/Hero.avif'
const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col md:gap-10 gap-8 md:flex-row items-center px-5 md:px-10 py-5 bg-beige">
        <div  className="md:w-1/2 w-full">
        <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">Sweet · Special · Savory</span>
            <h2 className="text-4xl md:text-5xl font-bold text-espresso">
                Good food.
                <br />
                Great moments.
            </h2>
            <p className="text-base md:text-lg text-espresso mt-4 max-w-lg">
                Discover the finest cuisine in town, crafted with passion and the highest quality ingredients.
            </p>
            <button className="mt-6 animate-bounce bg-orange text-white rounded-full px-5 py-2 font-medium hover:bg-espresso transition-colors duration-300">
                <a href="#menu">Order Now</a>
            </button>
        </div>
        <div className="md:w-1/2 w-full">
            <img  className="rounded-2xl w-full object-cover" src={heroImg} alt="Delicious food"/>
        </div>
    </section>
  )
}

export default Hero