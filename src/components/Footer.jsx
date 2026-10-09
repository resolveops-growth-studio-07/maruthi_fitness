import React from 'react'
import { gymData } from '../data/gymData'
import { Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gym-dark pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" aria-label="Maruthi Fitness home" className="inline-block mb-2"><img src="/brand/maruthi-fitness-logo.svg" alt="Maruthi Fitness" className="maruthi-brand-logo maruthi-brand-logo-footer" loading="lazy" /></a>
            <p className="text-white/50 font-display tracking-widest text-xs uppercase mb-6">
              {gymData.address.city} | {gymData.positioning}
            </p>
            <p className="text-white/70 font-body text-sm max-w-sm">
              A premium training facility equipped for serious results. We provide the space, the equipment, and the atmosphere. You provide the effort.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-body font-semibold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-2 inline-block">NAVIGATION</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/60 hover:text-gym-red text-sm transition-colors">Home</a></li>
              <li><a href="#training" className="text-white/60 hover:text-gym-red text-sm transition-colors">Training</a></li>
              <li><a href="#facility" className="text-white/60 hover:text-gym-red text-sm transition-colors">Facility</a></li>
              <li><a href="#reviews" className="text-white/60 hover:text-gym-red text-sm transition-colors">Reviews</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-gym-red text-sm transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-body font-semibold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-2 inline-block">CONNECT</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${gymData.phoneLink}`} className="text-white/60 hover:text-gym-red text-sm transition-colors flex items-center gap-2" aria-label="Call Us">
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </li>
              <li><a href={gymData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gym-red text-sm transition-colors">Instagram</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-gym-red text-sm transition-colors">Get Directions</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; {currentYear} {gymData.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-body">
            Designed for Performance.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
