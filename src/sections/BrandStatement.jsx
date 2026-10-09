import React, { useRef, useEffect } from 'react'
import AnimatedText from '../components/AnimatedText'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const BrandStatement = () => {
  const lineRef = useRef(null)
  
  useEffect(() => {
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
        }
      }
    )
  }, [])

  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-gym-dark overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 relative z-10">
        
        {/* Left huge statement */}
        <div className="lg:w-3/5">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[0.9] text-white">
            <AnimatedText text="THIS IS MORE" className="block text-white" />
            <AnimatedText text="THAN A" className="block text-white" />
            <AnimatedText text="WORKOUT." className="block text-gym-red" />
          </h2>
        </div>

        {/* Right content */}
        <div className="lg:w-2/5 flex flex-col items-start pt-4 lg:pt-12">
          <div className="flex gap-6 relative">
            {/* Animated vertical line */}
            <div 
              ref={lineRef}
              className="w-1 bg-gym-red transform origin-top"
            ></div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl font-body text-white/80 leading-relaxed">
                Maruthi Fitness is designed for people who take training seriously. We provide a spacious environment equipped with premium imported gear to support your performance.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <div className="text-gym-red font-display text-2xl font-bold">01</div>
                  <h3 className="font-display text-sm tracking-widest text-white uppercase">CrossFit Zone</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-gym-red font-display text-2xl font-bold">02</div>
                  <h3 className="font-display text-sm tracking-widest text-white uppercase">Functional Area</h3>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="text-gym-red font-display text-2xl font-bold">03</div>
                  <h3 className="font-display text-sm tracking-widest text-white uppercase">Elite Equipment</h3>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="text-gym-red font-display text-2xl font-bold">04</div>
                  <h3 className="font-display text-sm tracking-widest text-white uppercase">Expert Trainers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/5 z-0"></div>
    </section>
  )
}

export default BrandStatement
