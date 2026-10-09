import React, { useEffect, useState } from 'react'
import { cn } from '../utils/cn'
import Button from './Button'
import { gymData } from '../data/gymData'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'TRAINING', href: '#training' },
    { name: 'FACILITY', href: '#facility' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'GALLERY', href: '#gallery' },
  ]

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-500 md:px-12",
          isScrolled ? "bg-gym-dark/90 py-4 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          <a href="#home" className="text-xl md:text-2xl font-display font-bold text-white tracking-widest uppercase">
            <img src="/brand/maruthi-fitness-logo.svg" alt="Maruthi Fitness" className="maruthi-brand-logo" />
          </a>
        </div>

        <nav className="brand-navigation hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[14px] lg:text-[15px] font-nav font-semibold tracking-[0.3px] leading-[1.4] text-[#F5F5F5] hover:text-[#EF3340] active:text-[#EF3340] transition-colors duration-300 ease-in-out relative group uppercase"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#EF3340] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="py-3 px-6 text-xs">
            Join Now
          </Button>
        </div>

        <button 
          className="md:hidden relative z-50 p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={cn("w-full h-0.5 bg-white transition-all duration-300 origin-left", mobileMenuOpen && "rotate-45 translate-x-1 -translate-y-1")}></span>
            <span className={cn("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen && "opacity-0")}></span>
            <span className={cn("w-full h-0.5 bg-white transition-all duration-300 origin-left", mobileMenuOpen && "-rotate-45 translate-x-1 translate-y-1")}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-gym-dark flex flex-col justify-center px-8 transition-transform duration-500 ease-in-out",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="brand-mobile-navigation flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-3xl sm:text-4xl font-nav font-semibold tracking-[0.3px] text-[#F5F5F5] hover:text-[#EF3340] active:text-[#EF3340] transition-colors duration-300 ease-in-out uppercase"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                transitionDelay: mobileMenuOpen ? `${i * 100}ms` : '0ms',
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="text-4xl sm:text-5xl font-display font-bold text-gym-red mt-4 uppercase"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              transitionDelay: mobileMenuOpen ? `${navLinks.length * 100}ms` : '0ms',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            JOIN NOW
          </a>
        </nav>
      </div>
    </>
  )
}

export default Header
