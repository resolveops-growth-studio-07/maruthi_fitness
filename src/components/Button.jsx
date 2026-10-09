import React, { forwardRef } from 'react'
import { cn } from '../utils/cn'
import { ArrowRight } from 'lucide-react'

const Button = forwardRef(({ children, className, variant = 'primary', href, icon = true, ...props }, ref) => {
  const baseStyles = "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl px-8 py-4 font-display text-sm font-semibold tracking-widest uppercase transition-all duration-300"
  
  const variants = {
    primary: "bg-gym-red text-white hover:bg-white hover:text-gym-red",
    outline: "border border-gym-red text-gym-red hover:bg-gym-red hover:text-white",
    ghost: "text-white hover:text-gym-red",
    dark: "bg-gym-gray text-white hover:bg-white hover:text-gym-gray"
  }

  const Element = href ? 'a' : 'button'

  return (
    <Element 
      ref={ref}
      href={href}
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </Element>
  )
})

Button.displayName = 'Button'
export default Button
