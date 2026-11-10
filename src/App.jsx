import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Navbar />

        <main>
        <Home />
        </main>

        <Footer />
    </div>
  )
}

export default App