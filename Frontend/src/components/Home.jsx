import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Home = ({ onOpenCatalogue }) => {
  const containerRef = useRef(null)
  const heroImage = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1920&q=80"

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.8 } })
      
      // 1. STAGGERED ENTRANCE
      tl.from('.hero-image', { 
        scale: 1.2, 
        opacity: 0, 
        duration: 2.5 
      }, 0)
      .from('.reveal-text', { 
        y: 60, 
        opacity: 0, 
        stagger: 0.15 
      }, '-=1.8')
      .from('.drifting-panel', { 
        scale: 0.8, 
        opacity: 0, 
        y: 40, 
        stagger: 0.2,
        ease: 'back.out(1.7)' 
      }, '-=1.2')
      .from('.hero-btns', { 
        opacity: 0, 
        y: 20 
      }, '-=1')

      // 2. INFINITE FLOATING (Subtle & Smooth)
      gsap.to('.drifting-panel', {
        y: '-=15',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.5,
          from: "random"
        }
      })

      // 3. MOUSE PARALLAX EFFECT
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const xPos = (clientX / window.innerWidth - 0.5) * 30
        const yPos = (clientY / window.innerHeight - 0.5) * 30

        gsap.to('.drifting-panel', {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.05
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)

    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <main 
      ref={containerRef} 
      className='relative min-h-screen w-full overflow-hidden bg-[#0a0a0c] text-white pt-32 pb-10 selection:bg-yellow-500 selection:text-black'
    >
      
      {/* BACKGROUND VISUALS */}
      <div className='absolute inset-0 z-0'>
        <img 
          src={heroImage} 
          alt="Artisan Cake" 
          className='hero-image h-full w-full object-cover opacity-45 mix-blend-luminosity lg:opacity-60'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent'></div>
      </div>

      <div className='relative z-20 mx-auto max-w-7xl px-6 lg:px-12'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start'>
          
          {/* LEFT: TEXT CONTENT */}
          <div className='lg:col-span-8 lg:pt-4'>
            <div className='reveal-text mb-4 flex items-center gap-3'>
              <span className='h-[1px] w-10 bg-yellow-500'></span>
              <p className='text-[9px] font-black uppercase tracking-[0.4em] text-yellow-500'>BENGALURU • ESTD. 2023</p>
            </div>
            
            <h1 className='reveal-text text-[clamp(3.5rem,10vw,7rem)] font-black uppercase leading-[0.78] tracking-tighter'>
              SOWMYA'S <br />
              <span className='italic text-transparent' style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>BAKES &</span> <br />
              <span className='text-yellow-400'>CAKES</span>
            </h1>

            <p className='reveal-text mt-6 max-w-md text-sm font-medium leading-relaxed text-neutral-400 md:text-base'>
              Hand made 100% eggless artisan desserts for special moments. 
              Fresh ingredients, mother's love, delivered to your door.
            </p>

            <div className='hero-btns mt-8 flex flex-wrap gap-4'>
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className='group relative flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-black transition-all hover:bg-yellow-400 active:scale-95 shadow-xl'
              >
                <span className='text-[10px] font-black uppercase tracking-widest'>Explore Menu</span>
                <div className='flex h-5 w-5 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1'>
                   <svg className='h-3 w-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M17 8l4 4m0 0l-4 4m4-4H3' /></svg>
                </div>
              </button>
              
              <button 
                onClick={onOpenCatalogue}
                className='rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-7 py-3.5 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:border-yellow-400/50 hover:bg-white/10'
              >
                View Catalogue
              </button>
            </div>
          </div>

          {/* RIGHT: FLOATING STATS */}
          <div className='flex flex-col gap-4 lg:col-span-4 lg:items-end lg:pt-12'>
            <div className='drifting-panel w-full max-w-[240px] rounded-[1.5rem] border border-white/10 bg-black/50 p-6 shadow-2xl backdrop-blur-xl'>
               <p className='text-[8px] font-black text-neutral-500 uppercase tracking-widest mb-3'>Community</p>
               <h3 className='text-4xl font-black text-white tracking-tighter'>200+</h3>
               <p className='text-[9px] font-bold text-yellow-400 uppercase tracking-widest mt-1'>Smiles Delivered</p>
            </div>

            <div className='drifting-panel w-full max-w-[240px] rounded-[1.5rem] border border-white/10 bg-black/50 p-6 shadow-2xl backdrop-blur-xl'>
                <div className='flex items-center gap-2'>
                   <div className='h-2 w-2 rounded-full bg-yellow-400 animate-pulse'></div>
                   <p className='text-lg font-black uppercase tracking-tight'>Taking Orders</p>
                </div>
                <p className='text-[8px] font-bold text-neutral-500 mt-1 tracking-widest uppercase'>Anekal Area</p>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}

export default Home