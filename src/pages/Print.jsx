import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { coreSkills, experiencedSkills, devTools } from '../components/About'
import { experienceSkills } from '../components/Experience'
import { signatureProjects, archiveProjects, translateProject } from '../data/projects'
import { getProjectVideos, getYoutubeThumbnail } from '../utils/projectVideos'
import './Print.css'

// PDF는 사이트 밖에서 열리므로 내부 링크도 절대 경로로 적는다
const SITE_URL = 'https://shimwoojin-portfolio.vercel.app'
const EMAIL = 'ggoggal@gmail.com'
const GITHUB_URL = 'https://github.com/shimwoojin'
const BLOG_URL = 'https://woojin-record.tistory.com/'

// 인쇄물에서는 링크 텍스트 옆에 실제 주소를 같이 보여줘야 종이/PDF만 봐도 찾아갈 수 있다
const shortUrl = (url) =>
  url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')

// 모달에 흩어져 있던 링크들을 인쇄용 단일 목록으로 모은다 (ProjectModal과 같은 순서)
function collectLinks(project, t) {
  const links = []

  if (project.resumeSection) {
    links.push({ label: t.projects.viewResume, url: `${SITE_URL}/resume#${project.resumeSection}` })
  }
  if (project.github) {
    links.push({ label: t.projects.viewGithub, url: project.github })
  }
  if (project.contributionsUrl) {
    links.push({ label: t.projects.viewContributions, url: project.contributionsUrl })
  }
  if (project.repos) {
    project.repos.forEach(repo => links.push({ label: repo.name, url: repo.url }))
  }
  if (project.pressUrl) {
    const base = project.pressLabel || t.projects.viewPress
    links.push({
      label: project.pressName ? `${base} · ${project.pressName}` : base,
      url: project.pressUrl
    })
  }
  if (project.fabUrl) {
    links.push({ label: t.projects.viewFab, url: project.fabUrl })
  }
  if (project.docsUrl) {
    links.push({ label: t.projects.viewDocs, url: project.docsUrl })
  }
  if (project.deployUrl) {
    links.push({ label: t.projects.viewDeploy, url: project.deployUrl })
  }

  return links
}

function PrintProject({ project, t }) {
  const overview = project.overview || {}
  const overviewItems = [
    { label: t.projects.overviewCompany, value: overview.company },
    { label: t.projects.overviewTeam, value: overview.team },
    { label: t.projects.overviewRole, value: overview.role },
    { label: t.projects.overviewDuration, value: overview.duration }
  ].filter(item => item.value)

  const videos = getProjectVideos(project)
  const links = collectLinks(project, t)

  return (
    <article className="print-project">
      <div className="print-project-head">
        <h3>
          {project.title}
          <span className={`print-type-badge ${project.type}`}>{t.projects.filters[project.type]}</span>
        </h3>
        <span className="print-project-period">{project.period}</span>
      </div>

      {project.headline && <p className="print-project-headline">{project.headline}</p>}

      {overviewItems.length > 0 && (
        <div className="print-overview">
          {overviewItems.map(item => (
            <div className="print-overview-item" key={item.label}>
              <span className="print-overview-label">{item.label}</span>
              <span className="print-overview-value">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      <p className="print-project-description">{project.description}</p>

      {project.details && (
        <div className="print-block">
          <h4>{t.projects.keyWork}</h4>
          <ul className="print-details">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 영상은 PDF에서 재생할 수 없으므로 썸네일 + 주소로 대체한다 */}
      {(project.image || videos.length > 0) && (
        <div className="print-media">
          {project.image && (
            <figure className="print-media-item">
              <img src={project.image} alt={project.title} />
            </figure>
          )}
          {videos.map((video, index) => (
            <figure className="print-media-item" key={video.id}>
              <img src={getYoutubeThumbnail(video.id)} alt="" />
              <figcaption>
                <span className="print-media-label">
                  {video.label || `${t.projects.videoLabel} ${index + 1}`}
                </span>
                <a href={`https://youtu.be/${video.id}`}>youtu.be/{video.id}</a>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="print-block print-tech">
        <h4>{t.projects.techStack}</h4>
        <div className="print-tags">
          {project.tech.map(tech => (
            <span key={tech} className="print-tag">{tech}</span>
          ))}
        </div>
      </div>

      {links.length > 0 && (
        <div className="print-block print-links">
          <h4>{t.print.links}</h4>
          <ul>
            {links.map(link => (
              <li key={link.url}>
                <a href={link.url}>{link.label}</a>
                <span className="print-url">{shortUrl(link.url)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

function Print() {
  const { t } = useLanguage()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // 시그니처 먼저, 이후 아카이브 전체(접힌 이전 프로젝트 포함)를 최신순으로
  const printProjects = [...signatureProjects, ...archiveProjects].map(p => translateProject(p, t))

  return (
    <div className="print-page">
      <nav className="print-nav">
        <Link to="/" className="print-back-link">{t.print.backLink}</Link>
        <button className="print-btn" onClick={() => window.print()}>
          {t.print.printButton}
        </button>
      </nav>
      <p className="print-hint">{t.print.hint}</p>

      <header className="print-header">
        <img className="print-photo" src="/picture_shimwoojin.jpg" alt={t.about.profileAlt} />
        <div className="print-header-text">
          <h1>{t.print.name}</h1>
          <p className="print-role">{t.print.role}</p>
          <p className="print-contact">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span className="print-sep">·</span>
            <a href={GITHUB_URL}>{shortUrl(GITHUB_URL)}</a>
            <span className="print-sep">·</span>
            <a href={BLOG_URL}>{shortUrl(BLOG_URL)}</a>
          </p>
          <p className="print-contact">
            <span className="print-site-label">{t.print.site}</span>
            <a href={SITE_URL}>{shortUrl(SITE_URL)}</a>
            <span className="print-sep">·</span>
            <span className="print-site-label">{t.print.resume}</span>
            <a href={`${SITE_URL}/resume`}>{shortUrl(SITE_URL)}/resume</a>
          </p>
        </div>
      </header>

      <section className="print-section">
        <h2>{t.about.title}</h2>
        <p className="print-intro">{t.about.intro1}</p>
        <p className="print-intro">{t.about.intro2}</p>
        <div className="print-skill-rows">
          <div className="print-skill-row">
            <span className="print-skill-label">{t.about.skillsCore}</span>
            <div className="print-tags">
              {coreSkills.map(skill => <span key={skill} className="print-tag strong">{skill}</span>)}
            </div>
          </div>
          <div className="print-skill-row">
            <span className="print-skill-label">{t.about.skillsExperienced}</span>
            <div className="print-tags">
              {experiencedSkills.map(skill => <span key={skill} className="print-tag">{skill}</span>)}
            </div>
          </div>
          <div className="print-skill-row">
            <span className="print-skill-label">{t.about.devTools}</span>
            <div className="print-tags">
              {devTools.map(tool => <span key={tool} className="print-tag muted">{tool}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="print-section">
        <h2>{t.experience.title}</h2>
        {t.experience.items.map((exp, index) => (
          <div className="print-exp" key={index}>
            <div className="print-exp-head">
              <h3>
                {exp.company}
                {exp.type === 'career' && (
                  <span className="print-type-badge career">{t.experience.workBadge}</span>
                )}
              </h3>
              <span className="print-exp-period">{exp.period}</span>
            </div>
            <p className="print-exp-position">{exp.position}</p>
            {exp.description && <p className="print-exp-description">{exp.description}</p>}
            {experienceSkills[index].length > 0 && (
              <div className="print-tags">
                {experienceSkills[index].map(skill => (
                  <span key={skill} className="print-tag">{skill}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="print-section">
        <h2>{t.projects.title}</h2>
        {printProjects.map(project => (
          <PrintProject key={project.id} project={project} t={t} />
        ))}
      </section>

      <section className="print-section print-contact-section">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.intro}</p>
        <ul className="print-contact-list">
          <li><span className="print-contact-label">Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><span className="print-contact-label">GitHub</span><a href={GITHUB_URL}>{shortUrl(GITHUB_URL)}</a></li>
          <li><span className="print-contact-label">Blog</span><a href={BLOG_URL}>{shortUrl(BLOG_URL)}</a></li>
        </ul>
      </section>

      <footer className="print-footer">{t.footer.copyright}</footer>
    </div>
  )
}

export default Print
