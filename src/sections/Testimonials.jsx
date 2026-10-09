import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gymData } from '../data/gymData'

const Testimonials = () => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const quotes = containerRef.current.querySelectorAll('.quote-item')
    
    gsap.fromTo(quotes, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    )
  }, [])

  return (
    <section id="reviews" ref={containerRef} className="py-24 md:py-32 bg-gym-gray relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-display tracking-[0.2em] text-gym-red mb-4">THE COMMUNITY</h2>
            <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              PROVEN <br/>
              RESULTS.
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{gymData.rating} <span className="text-gym-red">★</span></div>
            <div className="text-sm font-display tracking-widest text-white/50 uppercase">From {gymData.reviewsCount} Reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {gymData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="quote-item flex flex-col h-full border-t border-white/10 pt-8 relative group">
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-gym-red transition-all duration-500 group-hover:w-full"></div>
              
              <div className="text-gym-red mb-6 opacity-50 font-serif text-6xl leading-none">"</div>
              
              <p className="text-lg md:text-xl font-body text-white/90 italic mb-8 flex-grow">
                {testimonial.quote}
              </p>
              
              <div>
                <div className="text-gym-red flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="text-sm font-display tracking-widest text-white/50 uppercase">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
