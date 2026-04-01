import React, { useEffect, useRef } from 'react'
import videoSrc from '../assets/videoplayback.mp4'
import gsap from 'gsap'

const Home = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main 
      ref={heroRef}
      className='relative flex min-h-screen items-center justify-center px-4 pt-20'
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className='absolute inset-0 h-full w-full object-cover'
        style={{ filter: 'none' }} 
      >
        <source src={videoSrc} type='video/mp4' />
      </video>

      <div className='absolute inset-0 bg-black/30'></div>

      <div className='relative z-10 mx-auto max-w-4xl text-center text-white'>
        <h1 className='animate-text text-4xl font-black tracking-tight text-yellow-400 sm:text-6xl lg:text-7xl drop-shadow-lg'>
          SOWMYA'S CAKES AND BAKES
        </h1>
        <p className='animate-text mt-6 max-w-2xl mx-auto text-base font-medium leading-relaxed text-white sm:text-lg lg:text-xl drop-shadow-md'>
          Indulge in sweetness at Cakes and Bakes. We craft fresh, premium treats for every occasion. Experience the magic in every bite.
        </p>
        
        <div className='animate-text mt-10'>
          <button className='rounded-full bg-yellow-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-105 active:scale-95'>
            Explore Menu
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home
