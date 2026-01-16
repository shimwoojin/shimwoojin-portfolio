import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './pages/Resume'

function Home({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2026 Shim Woojin. All rights reserved.</p>
      </footer>
    </>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
