import React from 'react'

export const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`container ${className}`}>
    {children}
  </div>
)

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  onClick 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  className?: string,
  onClick?: () => void
}) => {
  const baseStyles = "px-8 py-4 font-black uppercase text-[10px] tracking-[0.3em] transition-all duration-500 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 italic"
  
  const variants = {
    primary: "bg-remag-teal text-white hover:bg-remag-teal/80 shadow-[0_15px_30px_rgba(0,153,153,0.2)]",
    secondary: "bg-remag-green text-white hover:bg-remag-green/80 shadow-[0_15px_30px_rgba(27,153,5,0.2)]",
    outline: "border-2 border-remag-teal text-remag-teal hover:bg-remag-teal hover:text-white",
    ghost: "text-remag-gray-text hover:text-remag-teal"
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}

export const SectionTitle = ({ 
  title, 
  subtitle, 
  light = false,
  align = 'left'
}: { 
  title: string, 
  subtitle?: string, 
  light?: boolean,
  align?: 'left' | 'center'
}) => (
  <div className={`space-y-4 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className={`h-[1px] w-8 ${light ? 'bg-white/30' : 'bg-remag-teal/30'}`} />
        <span className={`text-[10px] font-black uppercase tracking-[0.5em] italic ${light ? 'text-white/60' : 'text-remag-teal'}`}>
          {subtitle}
        </span>
      </div>
    )}
    <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-[0.9] ${light ? 'text-white' : 'text-remag-blue-deep'}`}>
      {title}
    </h2>
  </div>
)
