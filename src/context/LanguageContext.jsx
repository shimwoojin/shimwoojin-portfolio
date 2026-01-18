import React, { createContext, useContext, useState, useEffect } from 'react'
import ko from '../locales/ko'
import en from '../locales/en'

const translations = { ko, en }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // 브라우저 저장된 언어 또는 브라우저 언어 감지
    const saved = localStorage.getItem('language')
    if (saved) return saved

    const browserLang = navigator.language.slice(0, 2)
    return browserLang === 'ko' ? 'ko' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
