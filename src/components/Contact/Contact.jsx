import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Contact.module.css';

const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contact.emailValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCv = (e) => {
    // Generate an automatic professional resume printable view / trigger download
    e.preventDefault();
    window.print();
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contacto">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">{t.contact.sectionTag}</span>
          <h2 className="sectionTitle">{t.contact.sectionTitle}</h2>
          <p className="sectionSubtitle">{t.contact.sectionSubtitle}</p>
        </div>

        <div className={styles.contactGrid}>
          {/* Direct Details Card */}
          <div className={styles.contactCard}>
            <h3 className={styles.cardHeading}>{t.contact.infoTitle}</h3>

            <div className={styles.infoList}>
              {/* Email */}
              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.infoTextGroup}>
                  <span className={styles.infoLabel}>{t.contact.emailLabel}</span>
                  <a href={`mailto:${t.contact.emailValue}`} className={styles.infoValue}>
                    {t.contact.emailValue}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.infoTextGroup}>
                  <span className={styles.infoLabel}>{t.contact.phoneLabel}</span>
                  <a href={`tel:${t.contact.phoneValue}`} className={styles.infoValue}>
                    {t.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.infoTextGroup}>
                  <span className={styles.infoLabel}>{t.contact.locationLabel}</span>
                  <span className={styles.infoValue}>{t.contact.locationValue}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <span className={styles.socialLabel}>Profiles / Perfiles:</span>
              <div className={styles.socialLinksGroup}>
                {t.contact.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialPill}
                    aria-label={social.name}
                  >
                    {social.name === 'LinkedIn' ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className={styles.actionsCard}>
            <div>
              <h3 className={styles.cardHeading}>{t.contact.cardTitle}</h3>
              <p className={styles.cardNote}>{t.contact.cardNote}</p>
            </div>

            <div className={styles.primaryActionsList}>
              <a href={`mailto:${t.contact.emailValue}`} className={`${styles.actionButton} ${styles.btnMail}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span>{t.contact.directMailAction}</span>
              </a>

              <a href={`tel:${t.contact.phoneValue}`} className={`${styles.actionButton} ${styles.btnCall}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{t.contact.directCallAction}</span>
              </a>

              <button
                type="button"
                className={`${styles.actionButton} ${styles.btnCopy}`}
                onClick={handleCopyEmail}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>{t.contact.copyEmailAction}</span>
              </button>

              {copied && (
                <div className={styles.toastNotice} role="status">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{t.contact.copiedNotice}</span>
                </div>
              )}

              <button
                type="button"
                className={`${styles.actionButton} ${styles.btnCv}`}
                onClick={handleDownloadCv}
                title="Generar e Imprimir / Descargar CV"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>{t.contact.downloadCvAction}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div>
              <p>© {new Date().getFullYear()} Andrés Alejandro Chávez Vázquez. {t.footer.rights}</p>
              <p style={{ marginTop: '4px', fontSize: '0.8rem' }}>{t.footer.developedWith}</p>
            </div>

            <button
              type="button"
              className={styles.backToTopBtn}
              onClick={handleScrollToTop}
            >
              <span>{t.footer.backToTop}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
