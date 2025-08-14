import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Events from './pages/Events'
import HackSU from './pages/HackSU'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/hacksu" element={<HackSU />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
