import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedText from '../components/AnimatedText'

const EquipmentSection = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(imageRef.current,
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    )
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-gym-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Image */}
          <div className="w-full lg:w-2/3 relative h-[60vh] lg:h-[80vh] z-10" ref={imageRef}>
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
              alt="High quality imported equipment" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Red overlay line */}
            <div className="absolute top-1/2 -right-4 w-8 h-1 bg-gym-red hidden lg:block"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/3 mt-12 lg:mt-0 lg:-ml-24 relative z-20 bg-gym-dark lg:bg-transparent p-6 lg:p-0">
            <div className="lg:bg-gym-dark lg:p-12 lg:shadow-2xl lg:border-l-4 border-gym-red">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                <AnimatedText text="EQUIPPED TO" className="block" />
                <AnimatedText text="PERFORM." className="block text-gym-red" />
              </h2>
              
              <p className="text-white/80 font-body mb-8 leading-relaxed">
                We believe your potential is limited only by your dedication and your tools. Maruthi Fitness features modern, well-maintained, high-quality imported equipment to ensure every workout pushes you closer to your goals.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white font-display uppercase tracking-widest text-sm">
                  <span className="w-8 h-[1px] bg-gym-red"></span>
                  Imported Gear
                </li>
                <li className="flex items-center gap-4 text-white font-display uppercase tracking-widest text-sm">
                  <span className="w-8 h-[1px] bg-gym-red"></span>
                  Well-Maintained
                </li>
                <li className="flex items-center gap-4 text-white font-display uppercase tracking-widest text-sm">
                  <span className="w-8 h-[1px] bg-gym-red"></span>
                  Modern Selection
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      
      {/* Background Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-5 z-0 flex whitespace-nowrap">
        <span className="text-[15rem] font-display font-bold text-white uppercase leading-none">QUALITY MACHINERY </span>
        <span className="text-[15rem] font-display font-bold text-white uppercase leading-none">QUALITY MACHINERY </span>
      </div>
    </section>
  )
}

export default EquipmentSection
