import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="bg-beige py-16 px-5 md:px-10">
        <div className="text-center mb-12">
            <span className="text-orange uppercase tracking-widest text-sm font-semibold">
                Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-espresso mt-3">
                Visit CRAVE
            </h2>

            <p className="text-muted mt-4 max-w-xl mx-auto">
                We'd love to welcome you. Come enjoy delicious food and
                make yourself at home.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <MapPin className="text-orange mx-auto mb-4" size={32} />
                <h3 className="text-xl font-bold text-espresso mb-2">
                    Our Location 
                </h3>
                <p className="text-muted">
                    123 Food Street, Your City
                </p>
            </div> {/* Opening hours card */}
            <div className="bg-cream rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Clock className="text-orange mx-auto mb-4" size={32} />
                <h3 className="text-xl font-bold text-espresso mb-2"> 
                    Opening Hours 
                </h3>
                <p className="text-muted">
                    Monday - Sunday 
                </p>
                <p className="text-muted mt-1">
                    9:00 AM - 10:00 PM 
                </p>
            </div>
                    
            <div className="bg-cream rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Phone className="text-orange mx-auto mb-4" size={32} />
                <h3 className="text-xl font-bold text-espresso mb-2">
                    Contact Us
                </h3>
                <p className="text-muted">
                    +234 801 234 5678 
                </p>
                <a href="mailto:hello@crave.com" className="inline-block mt-3 text-orange font-semibold hover:text-espresso transition-colors duration-300" >
                    Send us an email
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact