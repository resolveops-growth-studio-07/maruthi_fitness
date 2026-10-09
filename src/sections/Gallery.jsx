import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gymData } from '../data/gymData'

const Gallery = () => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const images = containerRef.current.querySelectorAll('.gallery-img')
    
    images.forEach((img) => {
      gsap.fromTo(img,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          }
        }
      )
    })
  }, [])

  return (
    <section id="gallery" className="py-24 bg-gym-dark overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white text-center mb-2">THE FACILITY</h2>
        <div className="w-12 h-1 bg-gym-red mx-auto"></div>
      </div>
      
      <div ref={containerRef} className="flex flex-col md:flex-row gap-4 md:gap-8 px-4 md:px-8 max-w-[100rem] mx-auto">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-4 md:gap-8 md:w-1/3">
          <div className="relative h-64 md:h-96 overflow-hidden group">
            <img 
              src={gymData.gallery[0]} 
              alt="Gallery 1" 
              className="gallery-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gym-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="relative h-64 md:h-[30rem] overflow-hidden group">
            <img 
              src={gymData.gallery[1]} 
              alt="Gallery 2" 
              className="gallery-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gym-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 md:gap-8 md:w-2/3">
          <div className="relative h-64 md:h-[30rem] overflow-hidden group">
            <img 
              src={gymData.gallery[2]} 
              alt="Gallery 3" 
              className="gallery-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gym-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="relative h-64 md:h-96 overflow-hidden group">
            <img 
              src={gymData.gallery[3]} 
              alt="Gallery 4" 
              className="gallery-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gym-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Gallery
