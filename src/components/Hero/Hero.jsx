import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

const Hero = ({ setActiveTab }) => {
  const { t } = useLanguage();

  const handleScrollToMetrics = (e) => {
    e.preventDefault();
    const metricsElement = document.getElementById('metrics');
    if (metricsElement) {
      metricsElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const handleGoToProjects = (e) => {
    e.preventDefault();
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    } else if (setActiveTab) {
      setActiveTab('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoToContact = (e) => {
    e.preventDefault();
    if (setActiveTab) {
      setActiveTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.heroSection} aria-label={t.hero.fullName}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          {/* Avatar & Status Badge Row */}
          <div className={styles.identityRow}>
            <img
              src="/developer-avatar.svg"
              alt={t.hero.avatarAlt}
              width="60"
              height="60"
              className={styles.heroAvatar}
            />
            <div className={styles.badgeWrapper}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <span>{t.hero.badge}</span>
            </div>
          </div>

          <p className={styles.greeting}>{t.hero.greeting}</p>

          <h1 className={styles.heroName}>
            {t.hero.fullName}
          </h1>

          <div className={styles.heroRole}>
            <span>{t.hero.role}</span>
          </div>

          <div className={styles.locationBadge}>
            <svg
              className={styles.locationIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{t.hero.location}</span>
          </div>

          <p className={styles.heroSummary}>
            {t.hero.summary}
          </p>

          {/* Action CTAs */}
          <div className={styles.ctaContainer}>
            <a
              href="#projects"
              className={styles.primaryCta}
              onClick={handleGoToProjects}
              aria-label={`${t.hero.ctaProjects} - ${t.hero.fullName}`}
            >
              <span>{t.hero.ctaProjects}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>

            <button
              type="button"
              className={styles.secondaryCta}
              onClick={handleGoToContact}
              aria-label={`${t.hero.ctaContact} - ${t.hero.fullName}`}
            >
              <span>{t.hero.ctaContact}</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <a
              href="#metrics"
              className={styles.tertiaryCta}
              onClick={handleScrollToMetrics}
              aria-label={t.hero.ctaExperience}
            >
              <span>{t.hero.ctaExperience}</span>
            </a>
          </div>
        </div>

        {/* Visual Terminal / Architecture Card */}
        <div className={styles.terminalCard}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots} aria-hidden="true">
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <span className={styles.terminalTitle}>{t.hero.terminalTitle}</span>
          </div>

          <div className={styles.terminalBody}>
            <div>
              <span className={styles.jsonBracket}>{'{'}</span>
            </div>
            <div style={{ paddingLeft: '16px' }}>
              <span className={styles.jsonKey}>"engine"</span>: <span className={styles.jsonString}>"{t.hero.codeSnippet.engine}"</span>,
            </div>
            <div style={{ paddingLeft: '16px' }}>
              <span className={styles.jsonKey}>"architecture"</span>: <span className={styles.jsonString}>"{t.hero.codeSnippet.architecture}"</span>,
            </div>
            <div style={{ paddingLeft: '16px' }}>
              <span className={styles.jsonKey}>"coreStack"</span>: <span className={styles.jsonBracket}>[</span>
            </div>
            <div style={{ paddingLeft: '32px' }}>
              {t.hero.codeSnippet.coreSkills.map((skill, idx) => (
                <span key={skill}>
                  <span className={styles.jsonArrayItem}>"{skill}"</span>
                  {idx < t.hero.codeSnippet.coreSkills.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
            <div style={{ paddingLeft: '16px' }}>
              <span className={styles.jsonBracket}>]</span>,
            </div>
            <div style={{ paddingLeft: '16px' }}>
              <span className={styles.jsonKey}>"impact"</span>: <span className={styles.jsonString}>"{t.hero.codeSnippet.impactMetrics}"</span>,
            </div>
            <div style={{ paddingLeft: '16px' }}>
              <span className={styles.jsonKey}>"status"</span>: <span className={styles.jsonString}>"{t.hero.codeSnippet.status}"</span>
            </div>
            <div>
              <span className={styles.jsonBracket}>{'}'}</span>
            </div>

            <div className={styles.codeBadgeRow}>
              <span className={styles.miniPill}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>High Availability</span>
              </span>
              <span className={styles.miniPill}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"></path>
                </svg>
                <span>Agentic Workflows</span>
              </span>
            </div>

            <div className={styles.liveStatus}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Systems Online: 100% Production Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
