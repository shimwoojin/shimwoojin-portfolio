import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollFadeIn()

  return (
    <section id="contact" className={`contact fade-in-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2>{t.contact.title}</h2>
      <div className="contact-content">
        <p className="contact-intro">
          {t.contact.intro}
        </p>
        <div className="contact-methods">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <a href="mailto:ggoggal@gmail.com">ggoggal@gmail.com</a>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <h3>GitHub</h3>
            <a href="https://github.com/shimwoojin" target="_blank" rel="noopener noreferrer">
              github.com/shimwoojin
            </a>
          </div>
          {/* <div className="contact-item">
            <div className="contact-icon">💬</div>
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/yourprofile
            </a>
          </div> */}
          <div className="contact-item">
            <div className="contact-icon">💬</div>
            <h3>Blog</h3>
            <a href="https://woojin-record.tistory.com/" target="_blank" rel="noopener noreferrer">
              woojin-record.tistory.com/
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
