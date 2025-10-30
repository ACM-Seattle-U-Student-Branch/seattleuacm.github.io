import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Events from './pages/Events'
import HackSU from './pages/HackSU'

function App() {

  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/hacksu" element={<HackSU />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App
