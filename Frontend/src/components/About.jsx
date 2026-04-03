import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const About = () => {
  const sectionRef = useRef(null)

  // Swapped for more "Appetizing" and professional high-contrast cake shots
  const images = {
    process: "https://images.unsplash.com/photo-1557925923-33b27f891f88?q=80&w=800&auto=format&fit=crop", // Close up of premium textures
    featureCake: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop" // Stunning Finished Cake
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: 'power4.out',
      })

      gsap.to('.cake-secondary', {
        y: '-=15',
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut'
      })
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  const handleLearnMore = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className='relative min-h-screen overflow-hidden bg-[#0a0a0c] py-24 px-6 lg:px-16'
    >
      <div className='absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[120px]'></div>

      <div className='relative z-10 mx-auto max-w-[1440px]'>
        <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24'>
          
          {/* LEFT: Cinematic Image Bento Grid */}
          <div className='about-reveal relative h-[600px] lg:col-span-5'>
            <div className='absolute inset-0 h-full w-[85%] overflow-hidden rounded-[2.5rem] bg-neutral-900 shadow-2xl'>
               <img 
                src={images.process} 
                alt="Baking Process" 
                className='h-full w-full object-cover mix-blend-luminosity grayscale-[0.2]' 
               />
               <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
            </div>

            <div className='absolute bottom-10 right-0 h-[60%] w-[50%] rounded-[2rem] border border-white/10'></div>

            <div className='cake-secondary absolute -bottom-6 right-0 aspect-[4/5] w-[60%] overflow-hidden rounded-[2rem] bg-neutral-900 shadow-2xl shadow-black/60'>
               <img 
                src={images.featureCake} 
                alt="Signature Cake" 
                className='h-full w-full object-cover transition-transform duration-1000 hover:scale-110' 
               />
            </div>

            {/* Experience Floating Badge */}
            <div className='cake-secondary absolute -bottom-10 right-4 rounded-3xl border border-white/10 bg-black/80 p-8 backdrop-blur-xl shadow-2xl'>
              <p className='text-4xl font-black text-yellow-400 leading-none'>100%</p>
              <p className='mt-2 text-[9px] font-black uppercase tracking-[0.3em] text-neutral-300'>
                Pure <br /> Eggless
              </p>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className='about-reveal lg:col-span-7 space-y-12 lg:pl-10'>
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <span className='h-[1px] w-12 bg-yellow-500'></span>
                <p className='text-[10px] font-black uppercase tracking-[0.6em] text-yellow-500'>OUR STORY</p>
              </div>
              <h2 className='text-[clamp(3rem,8vw,5.5rem)] font-black uppercase leading-[0.82] tracking-tighter text-white'>
                BAKED <br /> WITH <br />
                <span className='italic text-transparent' style={{ WebkitTextStroke: '1px rgba(255,255,255,0.45)' }}>PURE</span> <br />
                <span className='text-yellow-400'>HONESTY.</span>
              </h2>
            </div>
            
            <div className='max-w-xl space-y-6 text-base font-medium leading-relaxed text-neutral-400 sm:text-lg lg:text-xl'>
              <p>At <span className='text-white'>Sowmya's Cakes and Bakes</span>, we specialize in <strong>100% Eggless</strong> artisanal desserts that never compromise on texture or taste. What began as a home kitchen experiment has evolved into a trusted name for premium, guilt-free treats in Bengaluru.</p>
              <p>We believe great baking comes from pure ingredients. By focusing on egg-free recipes, we ensure our cakes are inclusive, incredibly soft, and packed with honest flavors.</p>
            </div>

            <div className='grid grid-cols-1 gap-6 pt-10 border-t border-white/5 sm:grid-cols-2'>
              <div className='space-y-2'>
                <h4 className='text-xs font-black uppercase tracking-widest text-white'>100% Eggless</h4>
                <p className='text-xs text-neutral-500'>Strictly egg-free kitchen. Perfect for vegetarians and those with allergies.</p>
              </div>
              <div className='space-y-2'>
                <h4 className='text-xs font-black uppercase tracking-widest text-white'>Bespoke Designs</h4>
                <p className='text-xs text-neutral-500'>Custom themes and messages, baked fresh specifically for your order.</p>
              </div>
            </div>

            <button 
              onClick={handleLearnMore}
              className='group relative flex items-center gap-6 overflow-hidden rounded-full bg-white px-10 py-5 text-black transition-all hover:bg-yellow-400 active:scale-95'
            >
              <span className='text-[11px] font-black uppercase tracking-widest'>Learn More</span>
              <div className='h-2 w-2 rounded-full bg-black transition-all group-hover:w-12 flex items-center justify-center overflow-hidden'>
                <svg className='h-4 w-4 opacity-0 group-hover:opacity-100' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About