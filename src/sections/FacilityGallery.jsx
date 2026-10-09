import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const FacilityGallery = () => {
  const sectionRef = useRef(null)
  const mainImageRef = useRef(null)
  const subImage1Ref = useRef(null)
  const subImage2Ref = useRef(null)

  useEffect(() => {
    // Parallax effects
    gsap.to(mainImageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })

    gsap.to(subImage1Ref.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })

    gsap.to(subImage2Ref.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })
  }, [])

  return (
    <section ref={sectionRef} id="facility" className="py-24 md:py-32 bg-gym-gray relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-12 lg:pt-0">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[0.9] text-white mb-8">
              SPACIOUS<br/>
              <span className="text-gym-red">ATMOSPHERE.</span>
            </h2>
            <p className="text-white/70 font-body text-lg mb-12 max-w-md">
              A well-maintained, expansive training ground designed to give you the space you need to perform at your best. From warm-up zones to dedicated lifting areas.
            </p>

            <div className="relative h-[400px] w-full overflow-hidden mt-8 hidden lg:block">
              <img 
                ref={subImage1Ref}
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
                alt="Facility Detail"
                className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative h-[50vh] lg:h-[70vh] w-full overflow-hidden">
              <img 
                ref={mainImageRef}
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
                alt="Main Facility"
                className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
              />
              <div className="absolute inset-0 bg-gym-dark/20 mix-blend-multiply"></div>
              
              {/* Floating Label */}
              <div className="absolute bottom-8 right-8 bg-gym-red text-white font-display text-xs tracking-widest px-4 py-2 uppercase">
                Premium Layout
              </div>
            </div>

            {/* Mobile/Tablet Sub Image */}
            <div className="relative h-64 w-full overflow-hidden mt-8 lg:hidden">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
                alt="Facility Detail"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Overlapping smaller image */}
        <div className="absolute top-[20%] left-[45%] w-64 h-80 z-20 hidden xl:block shadow-2xl">
          <div className="w-full h-full relative overflow-hidden">
             <img 
              ref={subImage2Ref}
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
              alt="Gym Equipment"
              className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default FacilityGallery
