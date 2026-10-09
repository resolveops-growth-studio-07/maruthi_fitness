import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Sections
import Hero from './sections/Hero'
import BrandStatement from './sections/BrandStatement'
import StatStrip from './sections/StatStrip'
import TrainingExplorer from './sections/TrainingExplorer'
import FacilityGallery from './sections/FacilityGallery'
import EquipmentSection from './sections/EquipmentSection'
import Testimonials from './sections/Testimonials'
import Gallery from './sections/Gallery'
import LocationSection from './sections/LocationSection'
import FinalCTA from './sections/FinalCTA'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Global scroll animations
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      gsap.fromTo(section, 
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 95%',
            end: 'top 50%',
            scrub: 1
          }
        }
      )
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="bg-gym-dark min-h-screen text-gym-light font-body selection:bg-gym-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <StatStrip />
        <TrainingExplorer />
        <FacilityGallery />
        <EquipmentSection />
        <Testimonials />
        <Gallery />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
