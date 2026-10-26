import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Education.module.css';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className={styles.educationSection} aria-label="Educación y Reconocimientos">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">{t.education.sectionTag}</span>
          <h1 className="sectionTitle">{t.education.sectionTitle}</h1>
          <p className="sectionSubtitle">{t.education.sectionSubtitle}</p>
        </div>

        <div className={styles.educationGrid}>
          {/* Degrees Column */}
          <div className={styles.degreesColumn}>
            {t.education.degrees.map((deg, idx) => (
              <article key={idx} className={styles.degreeCard}>
                <div className={styles.degreeHeader}>
                  <h3 className={styles.degreeTitle}>{deg.degree}</h3>
                  <span className={styles.periodBadge}>{deg.period}</span>
                </div>

                <div className={styles.institution}>
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
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                  <span>{deg.institution}</span>
                </div>

                <div className={styles.statusWrapper}>
                  <span className={styles.statusPill}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{deg.status}</span>
                  </span>
                  {deg.statusNote && (
                    <span className={styles.statusNote}>({deg.statusNote})</span>
                  )}
                </div>

                <p className={styles.degreeHighlight}>{deg.highlight}</p>
              </article>
            ))}
          </div>

          {/* Languages Column */}
          <aside className={styles.languagesCard} aria-label={t.education.languagesSection.title}>
            <h3 className={styles.langCardTitle}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{t.education.languagesSection.title}</span>
            </h3>

            <div className={styles.langList}>
              {t.education.languagesSection.items.map((lang, idx) => (
                <div key={idx} className={styles.langItem}>
                  <div className={styles.langHeader}>
                    <span className={styles.langName}>{lang.language}</span>
                    <span className={styles.langProficiency}>{lang.proficiency}</span>
                  </div>
                  <p className={styles.langDescription}>{lang.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Education;
