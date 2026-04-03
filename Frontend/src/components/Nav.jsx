import React, { useState, useEffect } from 'react'
import gsap from 'gsap'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    gsap.from('.nav-container', {
      y: -20,
      opacity: 0.8,
      duration: 1.2,
      ease: 'expo.out',
      delay: 0.8
    })
  }, [])

  return (
    <nav className='nav-container w-full px-6 py-10 lg:px-12'>
      <div className='mx-auto max-w-7xl rounded-full border border-white/25 bg-black/75 px-6 py-3 shadow-2xl shadow-black/60 backdrop-blur-xl lg:px-10'>
        <div className='flex items-center justify-between gap-4'>
          
          <div className='shrink-0'>
            <a href="#home" className='flex items-center gap-2 group'>
              <div className='h-2 w-2 rounded-full bg-yellow-400 transition-all group-hover:scale-150'></div>
              <span className='text-sm font-black uppercase tracking-tighter text-white sm:text-xl'>
                CAKES <span className='text-yellow-400'>&</span> BAKES
              </span>
            </a>
          </div>

          <div className='hidden items-center gap-2 sm:flex'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='relative rounded-full border border-transparent bg-white/5 px-5 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-white transition-all hover:border-white/20 hover:bg-white/15 hover:text-yellow-300'
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className='ml-4 rounded-full bg-yellow-400 px-6 py-2 text-[10px] font-black uppercase tracking-widest text-black shadow-lg shadow-yellow-500/20 transition-transform hover:scale-105 active:scale-95'
            >
              Order Now
            </a>
          </div>

          <div className='flex sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-yellow-300 transition-all active:scale-90'
            >
              <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                {isOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M4 8h16M4 16h16' />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed inset-0 z-[999] flex h-screen w-full flex-col items-center justify-center bg-black/95 backdrop-blur-3xl sm:hidden'>
          <div className='flex flex-col items-center space-y-8'>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className='rounded-full border border-white/20 bg-white/5 px-10 py-3 text-4xl font-black uppercase tracking-tighter text-white transition-colors hover:text-yellow-300'
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav