import React, { useState } from 'react'
import catalogueItems from '../data/catalogueItems'

// Destructure the onOpenCatalogue prop here
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
    <section id="menu" className='bg-[#faf9f6] py-24 px-6 lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        
        {/* Modern Header */}
        <div className='mb-20'>
          <span className='text-xs font-black uppercase tracking-[0.3em] text-yellow-600'>Freshly Baked</span>
          <h2 className='text-6xl font-black uppercase tracking-tighter text-neutral-900 lg:text-8xl leading-[0.85]'>
            Select your <br /> <span className='text-yellow-500'>Portion.</span>
          </h2>
        </div>

        {/* Horizontal Scroller */}
        <div className='flex gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory scroll-smooth'>
          {allItems.map((item) => (
            <div key={item.id} className='min-w-[320px] md:min-w-100 snap-start'>
              <div className='group relative aspect-4/5 overflow-hidden rounded-3xl bg-neutral-200'>
                <img src={item.image} alt={item.name} className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' />
                
                <div className='absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-transparent p-8 flex flex-col justify-end text-white'>
                  <h3 className='text-3xl font-black tracking-tighter transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0'>{item.name}</h3>
                  
                  <div className='mt-6 flex flex-col gap-4 border-t border-white/20 pt-6 transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto'>
                    <div className='flex items-center justify-between bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/10'>
                      <span className='text-[10px] font-black uppercase tracking-widest pl-2 text-white/80'>
                        Qty ({item.category === 'Cupcakes' ? 'pcs' : 'kg'})
                      </span>
                      <div className='flex items-center gap-4 bg-neutral-900 rounded-lg p-1'>
                        <button onClick={() => updateQty(item.id, -1)} className='h-8 w-8 flex items-center justify-center font-bold hover:text-yellow-500'> – </button>
                        <span className='w-4 text-center font-black text-sm'>{quantities[item.id] || 1}</span>
                        <button onClick={() => updateQty(item.id, 1)} className='h-8 w-8 flex items-center justify-center font-bold hover:text-yellow-500'> + </button>
                      </div>
                    </div>

                    <button onClick={() => handleOrder(item)} className='w-full rounded-xl bg-yellow-500 py-4 text-[10px] font-black uppercase tracking-widest text-neutral-900 transition-all hover:bg-white active:scale-95 shadow-lg'>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. THE MODERN TOGGLE BUTTON - Updated to trigger Catalogue */}
        <div className='mt-20 flex flex-col items-center justify-center gap-4'>
          <button
            onClick={handleOpenCatalogue}
            className='group relative flex items-center gap-4 rounded-full bg-neutral-900 px-10 py-5 text-white transition-all duration-500 hover:bg-yellow-500 hover:pr-14 hover:shadow-[0_20px_50px_rgba(234,179,8,0.3)] active:scale-95'
          >
            <span className='relative z-10 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-black'>
              View Full Catalogue
            </span>

            <div className='relative flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-black group-hover:translate-x-2'>
              <svg 
                className='h-3 w-3 transition-transform duration-500 group-hover:text-yellow-500' 
                fill='none' stroke='currentColor' viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </div>
          </button>
          <p className='text-[10px] font-bold uppercase tracking-widest text-neutral-400 animate-pulse'>
            Explore 18+ Signature Flavors
          </p>
        </div>

        {/* Inline List View (Keep if you want a toggle-able simple list here too) */}
        <div className='mt-12 flex justify-center'>
            <button 
                onClick={() => setShowFullMenu(!showFullMenu)}
                className='text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors underline'
            >
                {showFullMenu ? 'Hide List' : 'Quick Price List'}
            </button>
        </div>

        {showFullMenu && (
          <div className='mt-16 max-w-4xl mx-auto space-y-6'>
             {allItems.map(item => (
               <div key={item.id} className='flex flex-wrap items-center justify-between py-6 border-b border-neutral-200 gap-4 group'>
                 <div className='flex flex-col'>
                    <span className='font-bold text-xl text-neutral-800 group-hover:text-yellow-600 transition-colors'>{item.name}</span>
                    <span className='text-[10px] font-black uppercase text-neutral-400 mt-2 tracking-widest'>
                      {item.category === 'Cupcakes' ? `₹${item.price1kg}/pc` : `₹${item.price1kg}/kg`}
                    </span>
                 </div>

                 <div className='flex items-center gap-4 sm:gap-8'>
                    <div className='flex items-center gap-3 bg-neutral-100 rounded-full px-3 py-1 border border-neutral-200'>
                      <button onClick={() => updateQty(item.id, -1)} className='text-neutral-500 hover:text-black'>–</button>
                      <span className='w-6 text-center font-black text-xs text-neutral-900'>{quantities[item.id] || 1}</span>
                      <button onClick={() => updateQty(item.id, 1)} className='text-neutral-500 hover:text-black'>+</button>
                    </div>

                    <button onClick={() => handleOrder(item)} className='text-[10px] font-black uppercase tracking-widest bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all shadow-md active:scale-95'>
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