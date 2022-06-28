import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Features from './components/Features'
import Carousels from './components/Carousels'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <Carousels />
        <Features />
        <Testimonials />
        <Statistics />
        <Pricing />
        <Footer />
      </ChakraProvider>
    </div>
  )
}

export default App
