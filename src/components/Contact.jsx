import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <p className="contact-intro">
          프로젝트 협업이나 문의사항이 있으시면 언제든지 연락주세요!
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
              https://woojin-record.tistory.com/
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
