import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={styles.switcherWrapper}
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <div
        className={`${styles.activeGlider} ${
          language === 'es' ? styles.gliderLeft : styles.gliderRight
        }`}
        aria-hidden="true"
      />
      <button
        type="button"
        className={`${styles.langButton} ${language === 'es' ? styles.active : ''}`}
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        aria-label="Cambiar idioma a Español (ES)"
        title="Cambiar a Español"
      >
        <span className={styles.flagIcon} aria-hidden="true">MX</span>
        <span>ES</span>
      </button>

      <button
        type="button"
        className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="Switch language to English (EN)"
        title="Switch to English"
      >
        <span className={styles.flagIcon} aria-hidden="true">US</span>
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
