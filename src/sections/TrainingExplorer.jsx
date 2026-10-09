import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { gymData } from '../data/gymData'

const TrainingExplorer = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageContainerRef = useRef(null)
  
  const handleHover = (index) => {
    if (index === activeIndex) return
    setActiveIndex(index)
  }

  useEffect(() => {
    const images = imageContainerRef.current.children
    
    gsap.to(images, {
      opacity: 0,
      scale: 1.05,
      duration: 0.8,
      ease: 'power2.inOut',
      stagger: 0
    })
    
    gsap.to(images[activeIndex], {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.inOut',
    })
  }, [activeIndex])

  return (
    <section id="training" className="py-24 md:py-32 bg-gym-dark text-white relative">
      <div className="px-6 md:px-12 lg:px-24 mb-16 max-w-7xl mx-auto">
        <h2 className="text-sm font-display tracking-[0.2em] text-gym-red mb-4">OUR FOCUS</h2>
        <div className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
          TRAIN WITH <br/>
          <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>PURPOSE.</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:h-[70vh] max-w-[100rem] mx-auto">
        
        {/* Navigation List */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 z-10 lg:-mr-12 mix-blend-difference">
          {gymData.services.map((service, index) => (
            <div 
              key={service.id}
              className="group cursor-pointer py-6 md:py-8 border-b border-white/10 relative"
              onMouseEnter={() => handleHover(index)}
              onClick={() => handleHover(index)}
            >
              <div className="flex items-center gap-4 md:gap-8 relative z-10">
                <span className={`text-sm md:text-lg font-display transition-colors duration-300 ${activeIndex === index ? 'text-gym-red' : 'text-white/30 group-hover:text-white'}`}>
                  0{index + 1}
                </span>
                <h3 className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase transition-all duration-300 ${activeIndex === index ? 'text-white translate-x-4' : 'text-transparent group-hover:text-white/80 group-hover:translate-x-2'}`} style={activeIndex !== index ? { WebkitTextStroke: '1px rgba(255,255,255,0.3)' } : {}}>
                  {service.title}
                </h3>
              </div>
              
              {/* Active description */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-white/70 font-body text-sm md:text-base max-w-md ml-12 md:ml-16 border-l-2 border-gym-red pl-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 ml-12 md:ml-16 mt-4">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-[10px] font-display uppercase tracking-wider px-2 py-1 bg-white/10 text-white rounded-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Display */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative mt-12 lg:mt-0 overflow-hidden">
          <div ref={imageContainerRef} className="absolute inset-0 w-full h-full">
            {gymData.services.map((service, index) => (
              <img 
                key={`img-${service.id}`}
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
              />
            ))}
          </div>
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-gym-dark/20 hidden lg:block"></div>
        </div>

      </div>
    </section>
  )
}

export default TrainingExplorer
