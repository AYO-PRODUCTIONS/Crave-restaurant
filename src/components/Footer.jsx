import React from 'react'
import { Globe, Mail, MessageCircle } from 'lucide-react'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream px-5 md:px-10 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">

            {/* Brand */}
            <div className="max-w-sm">
            <h2 className="text-3xl font-bold text-orange">CRAVE</h2>
            <p className="text-cream/70 mt-3 leading-relaxed">
                Good food. Great moments. Bringing people together,
                one delicious meal at a time.
            </p>
            </div>

            {/* Quick Links */}
            <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-cream/70">
                <li><a href="/" className="hover:text-orange transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-orange transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-orange transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-orange transition-colors">Contact</a></li>
            </ul>
            </div>

            {/* Social Media */}
            <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
                <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-orange transition-colors">
                <FaInstagram size={22} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-orange transition-colors">
                <FaFacebook size={22} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-orange transition-colors">
                <FaXTwitter size={22} />
                </a>
            </div>
        </div>
    </div>


    <div className="border-t border-cream/20 mt-8 pt-5 text-center text-cream/60 text-sm">
        <p>&copy; {new Date().getFullYear()} CRAVE. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer