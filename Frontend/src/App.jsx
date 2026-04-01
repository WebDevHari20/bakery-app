import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Menu from './components/Menu'
import Catalogue from './components/Catalogue'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const isCataloguePage = window.location.pathname === '/catalogue'

  const handleOpenCatalogue = () => {
    const catalogueUrl = new URL('/catalogue', window.location.origin)
    window.open(catalogueUrl.toString(), '_blank', 'noopener,noreferrer')
  }

  const handleBackToHome = () => {
    window.location.href = '/'
  }

  const handleCatalogueOrder = (item) => {
    const itemName = item?.name || 'Custom Cake'
    const quantity = item?.quantity || 1
    const unit = item?.unit || 'kg'
    const message = `Hi! I'd like to order ${quantity} ${unit} of ${itemName} from Sowmya's Cakes and Bakes.`
    const whatsappUrl = `https://wa.me/7975389968?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (isCataloguePage) {
    return (
      <div className='relative min-h-screen w-full overflow-x-hidden bg-[#faf9f6]'>
        <Catalogue onOrder={handleCatalogueOrder} onClose={handleBackToHome} />
      </div>
    )
  }

  return (
    <div className='relative w-full overflow-x-hidden bg-black'>
      <div className='fixed top-0 left-0 z-50 w-full'>
        <Nav />
      </div>

      <section id='home'>
        <Home />
      </section>

      <section id='menu'>
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