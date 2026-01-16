import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
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
    </div>
  )
}

export default App
