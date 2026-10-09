import React from 'react'
import iconFresh from '../assets/icon-fresh.png';
import iconChef from '../assets/icon-chef.png';
import iconCozy from '../assets/icon-cozy.png';

const WhyUS = () => {
  const reasons = [
    { id: 1, title: 'Fresh Ingredients', description: 'We source only the freshest ingredients to ensure every dish is bursting with flavor.', icon: iconFresh },
    { id: 2, title: 'Expert Chefs', description: 'Our team of skilled chefs brings creativity and passion to every plate.', icon: iconChef },
    { id: 3, title: 'Cozy Atmosphere', description: 'We pride ourselves on providing a welcoming atmosphere and attentive service.', icon: iconCozy  }
  ];
  return (
    <section id="why-us" className="bg-cream py-16 px-5 md:px-10">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-espresso">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  py-12">
       {reasons.map(reason => (
        <div key={reason.id} className="bg-beige hover:translate-y-1 flex flex-col items-center rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-6">
          <img src={reason.icon} alt={reason.title} className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold text-espresso mb-2">{reason.title}</h3>
          <p className="text-muted text-center">{reason.description}</p>
        </div>
       ))}
      </div>
    </section>
  )
}

export default WhyUS