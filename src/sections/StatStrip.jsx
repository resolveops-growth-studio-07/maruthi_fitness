import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gymData } from '../data/gymData'

const StatStrip = () => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const numbers = containerRef.current.querySelectorAll('.stat-number')
    
    numbers.forEach((num) => {
      const target = parseFloat(num.getAttribute('data-value'))
      const isDecimal = target % 1 !== 0
      const hasPlus = num.getAttribute('data-plus') === 'true'
      
      gsap.to(num, {
        innerHTML: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        snap: { innerHTML: isDecimal ? 0.1 : 1 },
        onUpdate: function() {
          const val = Number(this.targets()[0].innerHTML)
          this.targets()[0].innerHTML = isDecimal ? val.toFixed(1) : Math.round(val)
          if(hasPlus) this.targets()[0].innerHTML += '+'
        }
      })
    })
  }, [])

  return (
    <section className="bg-gym-gray py-12 md:py-0 border-y border-white/5">
      <div ref={containerRef} className="flex flex-col md:flex-row w-full h-full">
        
        {/* Stat 1 */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-gym-red font-display text-sm opacity-50">01</div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 flex items-baseline">
            <span className="stat-number" data-value="4.9" data-plus="false">0.0</span>
            <span className="text-2xl text-gym-red ml-1">★</span>
          </div>
          <p className="text-xs md:text-sm font-display tracking-[0.2em] text-white/50 uppercase">Public Rating</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gym-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

        {/* Stat 2 */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-gym-red font-display text-sm opacity-50">02</div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2">
            <span className="stat-number" data-value="275" data-plus="true">0</span>
          </div>
          <p className="text-xs md:text-sm font-display tracking-[0.2em] text-white/50 uppercase">Google Reviews</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gym-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

        {/* Stat 3 */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-gym-red font-display text-sm opacity-50">03</div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2">
            <span className="stat-number" data-value="100" data-plus="false">0</span>%
          </div>
          <p className="text-xs md:text-sm font-display tracking-[0.2em] text-white/50 uppercase">Commitment</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gym-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

        {/* Stat 4 */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-gym-red font-display text-sm opacity-50">04</div>
          <div className="text-2xl md:text-3xl font-display font-bold text-white mb-2 leading-tight">
            PREMIUM<br/>FACILITY
          </div>
          <p className="text-xs md:text-sm font-display tracking-[0.2em] text-white/50 uppercase">Coimbatore</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gym-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

      </div>
    </section>
  )
}

export default StatStrip
