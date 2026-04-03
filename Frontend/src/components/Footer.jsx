import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerNavLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Full Catalogue', href: '/catalogue', isExternal: true },
  ]

  return (
    <footer className='section-shell bg-[#0b0b0f] pt-16 pb-8 px-4 text-white sm:px-6 lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
          <div className='md:col-span-2'>
            <h3 className='text-2xl font-black tracking-tighter text-yellow-500'>
              SOWMYA'S CAKES AND BAKES
            </h3>
            <p className='mt-4 max-w-sm text-sm leading-relaxed text-neutral-300'>
              Crafting premium, handcrafted desserts for your most cherished moments. From our home kitchen to your doorstep, every bite is a celebration.
            </p>
            <div className='mt-6 flex gap-4'>
              <a href='https://www.instagram.com/sowmyas_cakes_n_bakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='motion-capsule flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-yellow-500 hover:text-neutral-900'>
                <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-xs font-black uppercase tracking-widest text-white'>Navigation</h4>
            <ul className='mt-6 space-y-4 text-sm font-medium text-neutral-400'>
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='transition-colors hover:text-yellow-400'
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-xs font-black uppercase tracking-widest text-white'>Hours</h4>
            <ul className='mt-6 space-y-4 text-sm font-medium text-neutral-400'>
              <li className='flex justify-between'>
                <span>24/7</span>
                <span className='text-neutral-300'>order before 2 - 3 days</span>
              </li>
              <li className='flex justify-between'>
                <span></span>
                <span className='text-yellow-500 font-bold'>Open for Orders</span>
              </li>
            </ul>
          </div>

        </div>

        <div className='mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row'>
          <p className='text-xs font-medium text-neutral-500'>
            © {currentYear} Sowmya's Cakes and Bakes. All rights reserved.
          </p>
          <p className='text-xs font-medium text-neutral-500'>
            Designed by <span className='text-white font-bold'>Hari</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer