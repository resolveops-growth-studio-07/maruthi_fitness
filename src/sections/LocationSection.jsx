import React from 'react'
import Button from '../components/Button'
import { gymData } from '../data/gymData'

const LocationSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gym-gray relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Info */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <img src="/brand/maruthi-fitness-logo.svg" alt="Maruthi Fitness" className="maruthi-brand-logo mb-6" loading="lazy" />
            <h2 className="text-[40px] md:text-[48px] font-display font-semibold text-white mb-8 leading-[1.1] tracking-normal uppercase">
              FIND YOUR <br/>
              <span className="text-gym-red">TRAINING GROUND.</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-display tracking-widest text-gym-red uppercase mb-2">Location</h3>
                <p className="text-white/80 font-body leading-relaxed max-w-xs">
                  {gymData.name}<br/>
                  {gymData.address.street},<br/>
                  {gymData.address.building},<br/>
                  {gymData.address.area},<br/>
                  {gymData.address.city}, {gymData.address.state} {gymData.address.pincode}
                </p>
                <p className="text-white/50 text-sm mt-2 italic">Ample convenient parking available.</p>
              </div>

              <div>
                <h3 className="text-sm font-display tracking-widest text-gym-red uppercase mb-2">Hours</h3>
                <p className="text-white/80 font-body">
                  <span className="inline-block w-24">Mon - Fri:</span> {gymData.hours.weekdays}<br/>
                  <span className="inline-block w-24">Sat - Sun:</span> {gymData.hours.weekend}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button href={`tel:${gymData.phoneLink}`} variant="primary">
                  Call Maruthi Fitness
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-2/3 h-[50vh] lg:h-[70vh] bg-gym-dark relative grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
            <iframe 
              src={gymData.address.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Maruthi Fitness Location"
              className="absolute inset-0"
            ></iframe>
            {/* Overlay to darken map slightly to fit design */}
            <div className="absolute inset-0 bg-gym-dark/30 pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default LocationSection
