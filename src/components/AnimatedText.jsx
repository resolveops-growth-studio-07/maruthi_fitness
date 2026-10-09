import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const AnimatedText = ({ text, className = "", as: Component = "div" }) => {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    const chars = textRef.current.querySelectorAll('.char')
    
    gsap.fromTo(chars, 
      { 
        y: 100, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        }
      }
    )
  }, [text])

  // Split text into words and then characters to preserve word wrapping
  const words = text.split(' ')

  return (
    <Component ref={textRef} className={`overflow-hidden ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <span 
              key={charIndex} 
              className="char inline-block"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  )
}

export default AnimatedText
