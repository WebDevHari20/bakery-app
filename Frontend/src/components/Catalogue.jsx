import React, { useState } from 'react'
import catalogueItems from '../data/catalogueItems'

const Catalogue = ({ allItems = catalogueItems, onOrder, onClose }) => {
  const [quantities, setQuantities] = useState({})

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

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose()
      return
    }

    const homeSection = document.getElementById('home')
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className='min-h-screen bg-[#faf9f6] py-20 px-6 lg:px-16 animate-in fade-in duration-700'>
      <div className='mx-auto max-w-7xl'>
        
        {/* Header with Back Button */}
        <header className='mb-20 flex flex-col items-center text-center'>
          <button 
            onClick={handleClose}
            className='mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-yellow-600 transition-colors'
          >
            <svg className='h-3 w-3 rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
            Back to Home
          </button>
          
          <h1 className='text-6xl font-black uppercase tracking-tighter text-neutral-900 lg:text-9xl'>
            The <span className='text-yellow-500'>Gallery.</span>
          </h1>
          <p className='mt-6 max-w-lg text-sm font-medium text-neutral-500'>
            A visual journey through our kitchen. Every cake is handcrafted with premium ingredients and a mother's touch.
          </p>
        </header>

        {/* Masonry-style Grid */}
        <div className='columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3'>
          {allItems.map((item) => (
            <div 
              key={item.id} 
              className='break-inside-avoid group relative overflow-hidden rounded-4xl bg-neutral-200 shadow-sm transition-all hover:shadow-2xl'
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className='w-full object-cover transition-transform duration-1000 group-hover:scale-110'
              />

              {/* Always visible on mobile, hover reveal on desktop */}
              <div className='absolute inset-0 bg-black/40 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 flex flex-col justify-end p-8 text-white'>
                <span className='text-[10px] font-bold uppercase tracking-widest text-yellow-400'>
                  {item.category}
                </span>
                <h3 className='mt-2 text-2xl font-black tracking-tighter'>{item.name}</h3>
                
                <div className='mt-6 flex items-center justify-between border-t border-white/20 pt-6'>
                  <div className='flex flex-col'>
                    <span className='text-[8px] font-bold uppercase opacity-60'>Price</span>
                    <span className='text-lg font-black'>₹{item.price1kg} / <span className='text-yellow-500'>₹{item.price500g || 'pc'}</span></span>
                  </div>

                  <div className='flex flex-col items-end gap-3'>
                    <div className='flex items-center gap-3 rounded-full bg-black/40 px-3 py-1 border border-white/20'>
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className='h-7 w-7 rounded-full bg-white/10 text-sm font-black hover:bg-white/20'
                      >
                        -
                      </button>
                      <span className='min-w-16 text-center text-[10px] font-black uppercase tracking-widest'>
                        {quantities[item.id] || 1} {item.category === 'Cupcakes' ? 'pcs' : 'kg'}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className='h-7 w-7 rounded-full bg-white/10 text-sm font-black hover:bg-white/20'
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleOrder(item)}
                      className='rounded-full bg-yellow-500 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-black hover:bg-white transition-colors active:scale-90'
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Static label is optional now since details are visible on mobile */}
              <div className='absolute top-6 left-6 hidden'>
                 <span className='rounded-full bg-white/90 px-3 py-1 text-[8px] font-black uppercase tracking-widest text-black backdrop-blur-sm'>
                   {item.name}
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className='mt-32 border-t border-neutral-200 pt-20 text-center'>
          <h2 className='text-3xl font-black uppercase tracking-tighter text-neutral-900'>
            Don't see what you're <br /> <span className='text-yellow-500'>looking for?</span>
          </h2>
          <p className='mt-4 text-sm text-neutral-500'>We specialize in custom themed cakes. Let's build your dream cake together.</p>
          <button 
            onClick={() => handleOrder({ name: 'Custom Theme Cake' })}
            className='mt-10 rounded-full bg-neutral-900 px-12 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-yellow-500 hover:text-black transition-all'
          >
            Request Custom Order
          </button>
        </div>

      </div>
    </div>
  )
}

export default Catalogue