import React from 'react'

const About = () => {
  return (
    <section className='relative overflow-hidden bg-white py-14 px-4 sm:py-20 sm:px-6 lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:gap-20'>
          
          {/* Left Side: Image/Visual (Replace src with a real cake photo later) */}
          <div className='relative w-full lg:w-1/2'>
            <div className='absolute -top-3 -left-3 h-full w-full rounded-2xl bg-yellow-500/10 sm:-top-4 sm:-left-4'></div>
            <div className='relative overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl'>
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" 
                alt="Signature Cake" 
                className='h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-full'
              />
            </div>
            {/* Experience Badge */}
            <div className='absolute -bottom-6 -right-6 hidden rounded-xl bg-neutral-900 p-6 text-white shadow-xl sm:block'>
              <p className='text-3xl font-black text-yellow-400'>100%</p>
              <p className='text-[10px] font-bold uppercase tracking-widest text-neutral-400'>Fresh & Handmade</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className='flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left'>
            <span className='text-xs font-bold uppercase tracking-[0.2em] text-yellow-600 sm:text-sm'>
              The Heart of our Kitchen
            </span>
            <h2 className='mt-3 text-3xl font-black uppercase tracking-tighter text-neutral-900 sm:mt-4 sm:text-5xl lg:text-6xl'>
              Baked with <br />
              <span className='text-yellow-500'>Mother's Love</span>
            </h2>
            
            <div className='mt-6 space-y-5 text-sm leading-relaxed text-neutral-600 sm:mt-8 sm:space-y-6 sm:text-lg'>
              <p>
                At <strong>Sowmya's Cakes and Bakes</strong>, we believe that the best treats aren't just made with flour and sugar—they're made with passion and precision. What started as a small home kitchen experiment has grown into a destination for premium, handcrafted desserts.
              </p>
              <p>
                Every cake we bake is a masterpiece designed specifically for your special moments. From birthdays to weddings, we use only the finest ingredients to ensure that every bite is as magical as the celebration itself.
              </p>
            </div>

            {/* Feature List */}
            <div className='mt-8 grid w-full grid-cols-1 gap-5 border-t border-neutral-100 pt-8 sm:mt-10 sm:grid-cols-2 sm:gap-6 sm:pt-10'>
              <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
                <h4 className='text-sm font-black uppercase tracking-wider text-neutral-900'>Premium Quality</h4>
                <p className='mt-1 text-xs text-neutral-500 font-medium'>No preservatives, just pure ingredients.</p>
              </div>
              <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
                <h4 className='text-sm font-black uppercase tracking-wider text-neutral-900'>Custom Designs</h4>
                <p className='mt-1 text-xs text-neutral-500 font-medium'>Your vision, baked into reality.</p>
              </div>
            </div>

            <button className='mt-10 w-full rounded-full border-2 border-neutral-900 bg-neutral-900 px-6 py-3 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-neutral-900 sm:mt-12 sm:w-auto sm:px-10 sm:py-4 sm:text-xs'>
              Learn More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About