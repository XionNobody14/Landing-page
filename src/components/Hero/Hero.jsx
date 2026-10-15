import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useLanguage();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          {/* Status Badge */}
          <div className={styles.badgeWrapper}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span>{t.hero.badge}</span>
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
              href="#experience"
              className={styles.primaryCta}
              onClick={(e) => handleScrollTo(e, 'experience')}
            >
              <span>{t.hero.ctaExperience}</span>
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

            <a
              href="#contact"
              className={styles.secondaryCta}
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <span>{t.hero.ctaContact}</span>
              <svg
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>

            <a
              href="#contact"
              className={styles.cvDownloadBtn}
              onClick={(e) => handleScrollTo(e, 'contact')}
              title={t.hero.downloadCv}
            >
              <svg
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>{t.hero.downloadCv}</span>
            </a>
          </div>
        </div>

        {/* Visual Terminal / Architecture Card */}
        <div className={styles.terminalCard}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
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
              <span className={styles.miniPill}>⚡ High Availability</span>
              <span className={styles.miniPill}>🛡️ REST / SOAP Security</span>
              <span className={styles.miniPill}>🤖 Agentic Workflows</span>
            </div>

            <div className={styles.liveStatus}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
