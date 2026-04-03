import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Menu from './components/Menu'
import Catalogue from './components/Catalogue'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const isCataloguePage = window.location.pathname.startsWith('/catalogue')

  const handleOpenCatalogue = () => {
    const catalogueUrl = new URL('/catalogue', window.location.origin)
    window.open(catalogueUrl.toString(), '_blank', 'noopener,noreferrer')
  }

  const handleBackToHome = () => {
    window.location.href = '/'
  }

  if (isCataloguePage) {
    return (
      <div className='relative min-h-screen w-full overflow-x-hidden bg-[#08080a] text-white selection:bg-yellow-500 selection:text-black'>
        <Catalogue onClose={handleBackToHome} />
      </div>
    )
  }

  return (
    <div className='relative w-full overflow-x-hidden bg-[#0a0a0c] selection:bg-yellow-500 selection:text-black'>
      
      {/* GLOBAL NAVIGATION: Highest Z-Index (9999) */}
      <header className='fixed top-0 left-0 z-[9999] w-full'>
        <Nav />
      </header>

      {/* SECTIONS */}
      <section id='home'>
        <Home onOpenCatalogue={handleOpenCatalogue} />
      </section>

      <section id='menu' className='bg-[#faf9f6]'>
        <Menu onOpenCatalogue={handleOpenCatalogue} />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default App