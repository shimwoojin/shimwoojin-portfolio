import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { useLanguage } from './context/LanguageContext'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

function Home({ isDarkMode, toggleDarkMode }) {
  const { t } = useLanguage()

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>{t.footer.copyright}</p>
      </footer>
    </>
  )
}

function App() {
  // 저장된 선택 > 시스템 설정 순으로 초기 테마 결정
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </div>
  )
}

export default App
