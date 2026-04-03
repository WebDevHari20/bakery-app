import React, { useState, useEffect, useRef } from 'react' // 1. Added useRef here
import gsap from 'gsap'
import catalogueItems from '../data/catalogueItems'

const Catalogue = ({ allItems = catalogueItems, onOrder, onClose }) => {
  const [quantities, setQuantities] = useState({})
  const containerRef = useRef(null) // 2. Created the ref

  useEffect(() => {
    // 3. Check if containerRef.current exists before running animation
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
      })
    }, containerRef) // Logic is scoped to this ref

    return () => ctx.revert()
  }, [])

  const onButtonEnter = (e) => {
    gsap.to(e.currentTarget.querySelector('.btn-bg'), {
      width: '100%',
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const onButtonLeave = (e) => {
    gsap.to(e.currentTarget.querySelector('.btn-bg'), {
      width: '0%',
      duration: 0.4,
      ease: 'power2.in'
    })
  }

  const updateQty = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }))
  }

  const handleOrder = (item) => {
    const qty = quantities[item.id] || 1
    const unit = item.category === 'Cupcakes' ? 'pcs' : 'kg'
    const enrichedItem = { ...item, quantity: qty, unit }

    if (typeof onOrder === 'function') {
      onOrder(enrichedItem)
      return
    }

    const message = `Hi! I'd like to order ${qty} ${unit} of ${item?.name || 'Custom Cake'} from Sowmya's Cakes and Bakes.`
    const whatsappUrl = `https://wa.me/9148381900?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    // 4. Added ref={containerRef} here. This is the most important fix!
    <div ref={containerRef} className='min-h-screen bg-[#08080a] py-10 px-6 text-white selection:bg-yellow-500 selection:text-black lg:py-24 lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        
        {/* HEADER */}
        <header className='gallery-header mb-16 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end'>
          <div className='space-y-5'>
            <button 
              onClick={onClose}
              className='group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500 hover:text-yellow-400 transition-colors'
            >
              <div className='flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-yellow-400'>
                <svg className='h-4 w-4 rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </div>
              Back to Studio
            </button>
            
            <h1 className='text-5xl font-black uppercase tracking-tighter lg:text-8xl'>
              The <span className='text-yellow-500'>Gallery.</span>
            </h1>
          </div>
          
          <div className='max-w-xs lg:text-right'>
            <p className='text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-2'>Volume 01 // 2026</p>
            <p className='text-sm text-neutral-400 uppercase tracking-tighter'>
              A selection of our finest eggless creations.
            </p>
          </div>
        </header>

        {/* GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {allItems.map((item) => (
            <div key={item.id} className='gallery-item group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5'>
              
              <div className='aspect-video overflow-hidden sm:aspect-square lg:aspect-video'>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6'>
                <div className='space-y-4'>
                  <div className='flex justify-between items-end'>
                    <div className='space-y-1'>
                      <span className='text-[9px] font-bold uppercase tracking-[0.3em] text-yellow-500'>{item.category}</span>
                      <h3 className='text-xl font-black uppercase tracking-tighter text-white leading-tight'>{item.name}</h3>
                    </div>
                    <div className='text-right'>
                      <p className='text-base font-black text-white'>₹{item.price500g || item.price1kg}</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-3 transition-all duration-500 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'>
                    <div className='flex items-center gap-3 rounded-full bg-white/5 px-3 py-1.5 border border-white/10 backdrop-blur-md'>
                      <button onClick={() => updateQty(item.id, -1)} className='text-base font-bold hover:text-yellow-400 transition-colors'>-</button>
                      <span className='min-w-[35px] text-center text-[9px] font-black uppercase tracking-widest'>
                        {quantities[item.id] || 1} {item.category === 'Cupcakes' ? 'pcs' : 'kg'}
                      </span>
                      <button onClick={() => updateQty(item.id, 1)} className='text-base font-bold hover:text-yellow-400 transition-colors'>+</button>
                    </div>

                    <button
                      onMouseEnter={onButtonEnter}
                      onMouseLeave={onButtonLeave}
                      onClick={() => handleOrder(item)}
                      className='relative flex-1 overflow-hidden rounded-full border border-yellow-500 px-5 py-3 transition-all active:scale-95'
                    >
                      <div className='btn-bg absolute top-0 left-0 h-full w-0 bg-yellow-500 pointer-events-none' />
                      <span className='relative z-10 text-[9px] font-black uppercase tracking-[0.2em] text-yellow-500 mix-blend-difference pointer-events-none'>
                        Order
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className='mt-32 border-t border-white/10 pt-20 text-center'>
          <h2 className='text-4xl font-black uppercase tracking-tighter text-white lg:text-7xl'>
            DREAM IT. <br /> <span className='italic text-transparent' style={{ WebkitTextStroke: '1px #fff' }}>WE'LL BAKE IT.</span>
          </h2>
          <button 
            onMouseEnter={onButtonEnter}
            onMouseLeave={onButtonLeave}
            onClick={() => handleOrder({ name: 'Custom Theme Cake' })}
            className='relative mt-12 overflow-hidden rounded-full border border-white px-12 py-6 transition-all active:scale-95'
          >
            <div className='btn-bg absolute top-0 left-0 h-full w-0 bg-white pointer-events-none' />
            <span className='relative z-10 text-[11px] font-black uppercase tracking-[0.3em] text-white mix-blend-difference pointer-events-none'>
              Start Custom Project
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Catalogue