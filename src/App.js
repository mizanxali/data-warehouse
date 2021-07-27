import React from 'react'
import Banner from './components/Banner/Banner'

import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import SubHero from './components/SubHero/SubHero'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <SubHero />
      <Features />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  )
}

export default App
