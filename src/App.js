import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Skills from './component/Skills'
import About from './component/About'
import Work from './component/Work'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
    </div>
  )
}

export default App
