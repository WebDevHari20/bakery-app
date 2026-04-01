import React, { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className='bg-black/80 text-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='shrink-0'>
            <span className='text-lg font-black tracking-tighter text-yellow-400 sm:text-2xl'>
              Cakes & Bakes
            </span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden items-center gap-8 sm:flex'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-sm font-semibold uppercase tracking-widest transition-colors hover:text-yellow-400'
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <div className='flex sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center rounded-md p-2 text-yellow-400 hover:bg-white/10'
            >
              <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                {isOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute left-0 w-full bg-black/95 px-4 pt-2 pb-6 shadow-xl sm:hidden'>
          <div className='flex flex-col space-y-4'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='border-b border-white/10 py-2 text-center text-lg font-medium hover:text-yellow-400'
                onClick={handleLinkClick}
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