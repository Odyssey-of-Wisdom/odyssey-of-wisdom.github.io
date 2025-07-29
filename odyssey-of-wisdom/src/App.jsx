import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#F3E2D4' }}>
        <Hero />
        <AboutUs />
        <Projects />
        <Feedback />
      </main>
      <Footer />
    </>
  )
}

export default App
