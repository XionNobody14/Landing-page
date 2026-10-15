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
        title="Cambiar a Español"
      >
        <span className={styles.flagIcon} aria-hidden="true">🇲🇽</span>
        <span>ES</span>
      </button>

      <button
        type="button"
        className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        <span className={styles.flagIcon} aria-hidden="true">🇺🇸</span>
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
