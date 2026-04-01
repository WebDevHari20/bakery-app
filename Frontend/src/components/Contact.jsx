import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleWhatsApp = (e) => {
    e.preventDefault()
    // This creates a direct link to WhatsApp with a pre-filled message
    const phoneNumber = "7975389968" // Replace with your mother's phone number
    const text = `Hi Sowmya's Cakes and Bakes! My name is ${formData.name}. I'm interested in: ${formData.message}`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section className='bg-neutral-50 py-14 px-4 sm:py-20 sm:px-6 lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        
        <div className='grid grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2'>
          
          {/* Left Side: Contact Info */}
          <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
            <span className='text-xs font-bold uppercase tracking-widest text-yellow-600 sm:text-sm'>Get in Touch</span>
            <h2 className='mt-3 text-3xl font-black uppercase tracking-tighter text-neutral-900 sm:mt-4 sm:text-5xl lg:text-6xl'>
              Let's Talk <br />
              <span className='text-yellow-500'>Sweets.</span>
            </h2>
            <p className='mt-4 max-w-md text-base text-neutral-600 sm:mt-6 sm:text-lg'>
              Have a specific design in mind or want to check availability for an event? Drop us a message!
            </p>

            <div className='mt-8 w-full max-w-md space-y-6 sm:mt-10 sm:max-w-none sm:space-y-8'>
              <div className='flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white'>
                  <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  </svg>
                </div>
                <div>
                  <h4 className='font-bold text-neutral-900'>Location</h4>
                  <p className='text-sm text-neutral-500 sm:text-base'>////////////</p>
                </div>
              </div>

              <div className='flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white'>
                  <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <div>
                  <h4 className='font-bold text-neutral-900'>Email</h4>
                  <p className='text-sm text-neutral-500 sm:text-base'>////////.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className='mx-auto w-full max-w-xl rounded-3xl bg-white p-5 shadow-2xl sm:max-w-none sm:p-8 lg:p-12'>
            <form onSubmit={handleWhatsApp} className='space-y-6'>
              <div>
                <label className='block text-xs font-black uppercase tracking-widest text-neutral-400'>Your Name</label>
                <input 
                  type='text' 
                  required
                  placeholder='Enter your name'
                  className='mt-2 w-full border-b-2 border-neutral-100 py-3 text-neutral-900 outline-none transition-colors focus:border-yellow-500'
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className='block text-xs font-black uppercase tracking-widest text-neutral-400'>Email Address</label>
                <input 
                  type='email' 
                  required
                  placeholder='email@example.com'
                  className='mt-2 w-full border-b-2 border-neutral-100 py-3 text-neutral-900 outline-none transition-colors focus:border-yellow-500'
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className='block text-xs font-black uppercase tracking-widest text-neutral-400'>What are you looking for?</label>
                <textarea 
                  rows='4'
                  required
                  placeholder='Describe your dream cake...'
                  className='mt-2 w-full border-b-2 border-neutral-100 py-3 text-neutral-900 outline-none transition-colors focus:border-yellow-500 resize-none'
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type='submit'
                className='w-full rounded-xl bg-yellow-500 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-neutral-900 hover:shadow-none active:scale-95 sm:py-5 sm:text-sm'
              >
                Send to WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact