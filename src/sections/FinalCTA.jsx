import React from 'react'
import Button from '../components/Button'
import { gymData } from '../data/gymData'

const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-gym-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
          alt="Final CTA Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gym-dark/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-transparent to-gym-dark"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white leading-[0.85] mb-6">
          YOUR<br/>
          <span className="text-gym-red">NEXT LEVEL</span><br/>
          STARTS HERE.
        </h2>
        
        <p className="text-xl md:text-2xl font-body text-white/80 mb-12 max-w-2xl">
          Ready to train with purpose? Join {gymData.name} and experience the best {gymData.positioning.toLowerCase()} facility.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Button href={`tel:${gymData.phoneLink}`} variant="primary" className="px-12 py-5 text-lg">
            Start Your Journey
          </Button>
          <Button href="#contact" variant="outline" className="px-12 py-5 text-lg border-white/30 text-white hover:border-gym-red hover:bg-gym-red hover:text-white">
            Find Location
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
