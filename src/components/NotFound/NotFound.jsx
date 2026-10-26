import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './NotFound.module.css';

const NotFound = ({ setActiveTab }) => {
  const { t } = useLanguage();

  const handleReturnHome = () => {
    if (typeof window !== 'undefined' && window.history) {
      window.history.pushState(null, '', '/');
    }
    if (setActiveTab) {
      setActiveTab('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.notFoundSection} aria-label={t.notFound?.title || '404'}>
      <div className="container">
        <div className={styles.notFoundCard}>
          <div className={styles.zenRing} aria-hidden="true">
            <span className={styles.codeBadge}>404</span>
          </div>

          <span className="sectionTag">{t.notFound?.tag || 'Error 404'}</span>
          <h1 className={styles.title}>{t.notFound?.title || 'Página no encontrada'}</h1>
          <p className={styles.subtitle}>
            {t.notFound?.subtitle || 'La sección o página que buscas no existe o ha sido reubicada.'}
          </p>

          <button
            type="button"
            className={styles.backHomeBtn}
            onClick={handleReturnHome}
            aria-label={t.notFound?.backHome || 'Volver al Inicio'}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>{t.notFound?.backHome || 'Volver al Inicio'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
