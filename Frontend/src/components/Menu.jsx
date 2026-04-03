import React, { useState } from 'react'
import catalogueItems from '../data/catalogueItems'

const Menu = ({ onOpenCatalogue }) => {
  const [showFullMenu, setShowFullMenu] = useState(false)
  const [quantities, setQuantities] = useState({})

  const WHATSAPP_NUMBER = "9148381900"

  const updateQty = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }))
  }

  const handleOrder = (item) => {
    const qty = quantities[item.id] || 1
    const unit = item.category === 'Cupcakes' ? 'pcs' : 'kg'
    const message = `Hi! I'd like to order ${qty} ${unit} of ${item.name} from Sowmya's Cakes and Bakes.`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const allItems = catalogueItems

  const handleOpenCatalogue = () => {
    if (typeof onOpenCatalogue === 'function') {
      onOpenCatalogue()
      return
    }

    const catalogueUrl = new URL('/catalogue', window.location.origin)
    window.open(catalogueUrl.toString(), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id='menu' className='section-shell bg-[#0f1016] py-24 px-6 text-white lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-20 max-w-3xl space-y-5'>
          <span className='motion-capsule inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-yellow-300'>
            Freshly baked
          </span>
          <h2 className='text-5xl font-black uppercase tracking-tighter text-white lg:text-8xl leading-[0.85]'>
            Select your <br /> <span className='text-yellow-500'>Portion.</span>
          </h2>
          <p className='max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base'>
            Browse the rotating selection of celebration cakes and signature flavours, then open the catalogue for the full collection.
          </p>
        </div>

        <div className='flex gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory scroll-smooth'>
          {allItems.map((item) => (
            <div key={item.id} className='min-w-[320px] md:min-w-100 snap-start'>
              <div className='motion-card group relative aspect-4/5 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80'>
                <img src={item.image} alt={item.name} className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' />
                
                <div className='absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-transparent p-8 flex flex-col justify-end text-white'>
                  <h3 className='text-3xl font-black tracking-tighter transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0'>{item.name}</h3>
                  
                  <div className='mt-6 flex flex-col gap-4 border-t border-white/20 pt-6 transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto'>
                    <div className='flex items-center justify-between rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur-md'>
                      <span className='text-[10px] font-black uppercase tracking-widest pl-2 text-white/80'>
                        Qty ({item.category === 'Cupcakes' ? 'pcs' : 'kg'})
                      </span>
                      <div className='flex items-center gap-4 rounded-lg bg-neutral-950 p-1'>
                        <button onClick={() => updateQty(item.id, -1)} className='flex h-8 w-8 items-center justify-center font-bold hover:text-yellow-500'> – </button>
                        <span className='w-4 text-center font-black text-sm'>{quantities[item.id] || 1}</span>
                        <button onClick={() => updateQty(item.id, 1)} className='flex h-8 w-8 items-center justify-center font-bold hover:text-yellow-500'> + </button>
                      </div>
                    </div>

                    <button onClick={() => handleOrder(item)} className='motion-capsule w-full rounded-xl bg-yellow-500 py-4 text-[10px] font-black uppercase tracking-widest text-neutral-900 transition-all hover:bg-white active:scale-95 shadow-lg'>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-20 flex flex-col items-center justify-center gap-4'>
          <button
            onClick={handleOpenCatalogue}
            className='motion-capsule group relative flex items-center gap-4 rounded-full bg-neutral-900 px-10 py-5 text-white transition-all duration-500 hover:bg-yellow-500 hover:pr-14 hover:shadow-[0_20px_50px_rgba(234,179,8,0.3)] active:scale-95'
          >
            <span className='relative z-10 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-black'>
              View Full Catalogue
            </span>

            <div className='motion-capsule-icon relative flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-black group-hover:translate-x-2'>
              <svg 
                className='h-3 w-3 transition-transform duration-500 group-hover:text-yellow-500' 
                fill='none' stroke='currentColor' viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </div>
          </button>
          <p className='text-[10px] font-bold uppercase tracking-widest text-neutral-400'>
            Explore 18+ Signature Flavors
          </p>
        </div>

        <div className='mt-12 flex justify-center'>
            <button 
                onClick={() => setShowFullMenu(!showFullMenu)}
                className='text-[10px] font-bold uppercase tracking-widest text-neutral-400 underline transition-colors hover:text-yellow-300'
            >
                {showFullMenu ? 'Hide List' : 'Quick Price List'}
            </button>
        </div>

        {showFullMenu && (
          <div className='mt-16 max-w-4xl mx-auto space-y-6'>
             {allItems.map(item => (
               <div key={item.id} className='flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-6 group'>
                 <div className='flex flex-col'>
                    <span className='font-bold text-xl text-white transition-colors group-hover:text-yellow-400'>{item.name}</span>
                    <span className='mt-2 text-[10px] font-black uppercase tracking-widest text-neutral-400'>
                      {item.category === 'Cupcakes' ? `₹${item.price1kg}/pc` : `₹${item.price1kg}/kg`}
                    </span>
                 </div>

                 <div className='flex items-center gap-4 sm:gap-8'>
                    <div className='flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1'>
                      <button onClick={() => updateQty(item.id, -1)} className='text-neutral-400 hover:text-white'>–</button>
                      <span className='w-6 text-center text-xs font-black text-white'>{quantities[item.id] || 1}</span>
                      <button onClick={() => updateQty(item.id, 1)} className='text-neutral-400 hover:text-white'>+</button>
                    </div>

                    <button onClick={() => handleOrder(item)} className='motion-capsule rounded-full bg-yellow-500 px-8 py-3 text-[10px] font-black uppercase tracking-widest text-black shadow-md transition-all hover:bg-white active:scale-95'>
                      Order
                    </button>
                 </div>
               </div>
             ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu