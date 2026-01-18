import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './NotFound.css'

function NotFound() {
  const { language } = useLanguage()

  const content = {
    ko: {
      title: '404',
      subtitle: '페이지를 찾을 수 없습니다',
      description: '요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.',
      homeLink: '홈으로 돌아가기'
    },
    en: {
      title: '404',
      subtitle: 'Page Not Found',
      description: 'The page you requested does not exist or may have been moved.',
      homeLink: 'Back to Home'
    }
  }

  const t = content[language] || content.en

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">{t.title}</h1>
        <h2 className="not-found-subtitle">{t.subtitle}</h2>
        <p className="not-found-description">{t.description}</p>
        <Link to="/" className="not-found-link">
          {t.homeLink}
        </Link>
      </div>
    </div>
  )
}

export default NotFound
