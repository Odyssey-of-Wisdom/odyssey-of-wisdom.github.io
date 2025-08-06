import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import HomeWrapper from './components/HomeWrapper' // ← import this

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ backgroundColor: '#F3E2D4' }}>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
