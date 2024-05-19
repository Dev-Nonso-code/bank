import React from 'react'
import {Navbar, Hero, Features, Testimonials, Footer} from './components/components-export'

function App() {
  return (
    <div className="App bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
