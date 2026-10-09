import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Button from '../components/Button'

const Hero = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial state
    gsap.set(imageRef.current, { scale: 1.2 })
    gsap.set(overlayRef.current, { scaleY: 1, transformOrigin: 'top' })

    // Entrance Animation
    tl.to(overlayRef.current, {
      scaleY: 0,
      duration: 1.5,
      ease: 'power4.inOut',
    })
    .to(imageRef.current, {
      scale: 1,
      duration: 2,
      ease: 'power2.out',
    }, '-=1.5')
    
    // Animate content elements
    const elements = contentRef.current.children
    tl.fromTo(elements, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      '-=1'
    )

    // Subtle parallax on scroll
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    // Mouse movement interaction (Desktop only)
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return
      
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20

      gsap.to(imageRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out'
      })
      
      gsap.to(contentRef.current, {
        x: -xPos * 0.5,
        y: -yPos * 0.5,
        duration: 1,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full overflow-hidden bg-gym-dark">
      {/* Reveal Overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-gym-dark z-30"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
          alt="Maruthi Fitness Training Facility" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient overlays for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-gym-dark/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gym-dark via-gym-dark/30 to-transparent w-full lg:w-2/3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <div ref={contentRef} className="max-w-4xl pt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-gym-red"></span>
            <p className="text-sm font-display tracking-[0.2em] text-white/80 uppercase">
              Coimbatore, Tamil Nadu
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] text-white mb-4 mix-blend-lighten">
            BUILT<br />
            FOR<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #E63946', color: 'transparent' }}>MORE.</span>
          </h1>

          <p className="text-lg md:text-xl font-body text-white/70 max-w-md mb-10 mt-6 border-l-2 border-gym-red pl-4">
            CrossFit & Functional Training. Premium equipment, expert coaching, and an environment designed for serious results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contact" variant="primary">
              Start Your Journey
            </Button>
            <Button href="#facility" variant="ghost" className="border-white/20 border hover:border-gym-red">
              Explore The Gym
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70 hidden md:flex">
        <span className="text-[10px] font-display uppercase tracking-widest text-white transform -rotate-90 origin-bottom mb-8">Scroll</span>
        <div className="w-[1px] h-16 bg-white/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gym-red animate-[scrollDown_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}

export default Hero
