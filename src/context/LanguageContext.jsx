import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_lang');
      if (savedLang === 'es' || savedLang === 'en') {
        return savedLang;
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
    return 'es'; // Default language: Español
  });

  const setLanguage = (lang) => {
    if (lang === 'es' || lang === 'en') {
      setLanguageState(lang);
      try {
        localStorage.setItem('portfolio_lang', lang);
      } catch {
        // Safe fallback
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = {
    language,
    toggleLanguage,
    setLanguage,
    t: translations[language] || translations.es
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
