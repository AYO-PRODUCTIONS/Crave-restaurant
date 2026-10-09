import React from 'react'
import aboutImg from '../assets/About.avif';
const About = () => {
  return (
  <section id="about" className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-10 py-16 bg-cream">
      <img className="md:w-1/2 w-full rounded-2xl object-cover" src={aboutImg} alt="Freshly prepared food at CRAVE"/>

      <div className="md:w-1/2 w-full">
          <span className="text-orange uppercase tracking-widest text-lg font-semibold">
            About CRAVE
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-espresso mt-3">
            More Than Just Food
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            At CRAVE, we believe great food brings people together. We combine fresh ingredients, bold flavours, and passionate cooking to create memorable dining experiences.
          </p>
          <p className="text-muted mt-3 leading-relaxed">
            Whether you're sharing a meal with friends or enjoying a quiet dinner, we're here to make every moment special.
          </p>
          <button className="mt-6 animate-bounce bg-orange text-white rounded-full px-5 py-2 font-medium hover:bg-espresso transition-colors duration-300">
            Learn More
          </button>
      </div>
  </section>
  )
}

export default About