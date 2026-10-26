import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../Common/LanguageSwitcher';
import styles from './Navbar.module.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme state with localStorage persistence and system preference detection
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // fallback
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update data-theme on document element whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // fallback
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Close mobile drawer on Escape key and prevent background scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, tabId) => {
    e.preventDefault();
    closeMobileMenu();
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Mobile Hamburger Button (left side on mobile <= 768px, hidden on desktop) */}
        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-label={t.navbar.menuAria}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Brand Identity (visible in top bar on desktop, hidden in mobile top bar) */}
        <button
          type="button"
          className={styles.brand}
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Andrés Chávez - Inicio"
        >
          <div className={styles.brandLogo}>
            <span>AC</span>
          </div>
          <div className={styles.brandInfo}>
            <span className={styles.brandName}>{t.navbar.brand}</span>
            <span className={styles.brandSub}>{t.navbar.roleShort}</span>
          </div>
        </button>

        {/* Desktop Navigation Tabs (hidden on mobile <= 768px) */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {t.navbar.navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                aria-label={link.label}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Group (Theme Toggle + Language Switcher + Desktop Contact CTA) */}
        <div className={styles.navActions}>
          {/* Zen Light / Dark Mode Toggle Button */}
          <button
            type="button"
            className={styles.themeToggleBtn}
            onClick={toggleTheme}
            aria-label={t.navbar.themeToggleAria}
            title={theme === 'dark' ? t.navbar.themeLight : t.navbar.themeDark}
          >
            {theme === 'dark' ? (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <LanguageSwitcher />

          {/* Desktop Contact CTA Button (hidden on mobile <= 768px) */}
          <button
            type="button"
            className={styles.contactBtn}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <span>{t.navbar.ctaContact}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Backdrop Overlay for Mobile Drawer */}
      <div
        className={`${styles.drawerOverlay} ${mobileMenuOpen ? styles.drawerOverlayOpen : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Lateral Off-Canvas Menu Drawer (slides smoothly from left) */}
      <aside
        className={`${styles.drawerPanel} ${mobileMenuOpen ? styles.drawerPanelOpen : ''}`}
        aria-label="Menú de navegación móvil"
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.drawerHeader}>
          <button
            type="button"
            className={styles.drawerBrand}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <div className={styles.brandLogo}>
              <span>AC</span>
            </div>
            <div className={styles.brandInfo}>
              <span className={styles.brandName}>{t.navbar.brand}</span>
              <span className={styles.brandSub}>{t.navbar.roleShort}</span>
            </div>
          </button>

          <button
            type="button"
            className={styles.drawerCloseBtn}
            onClick={closeMobileMenu}
            aria-label="Cerrar menú"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation list in Mobile Drawer */}
        <nav className={styles.drawerNav}>
          {t.navbar.navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                aria-label={link.label}
                className={`${styles.drawerNavLink} ${isActive ? styles.drawerNavLinkActive : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span>{link.label}</span>
                {isActive && <span className={styles.activeDot} aria-hidden="true" />}
              </button>
            );
          })}
        </nav>

        {/* Drawer Options & Footer */}
        <div className={styles.drawerFooter}>
          {/* Mobile Drawer Theme Option (Accessible & Touch Friendly >= 44px) */}
          <button
            type="button"
            className={styles.drawerThemeOption}
            onClick={toggleTheme}
            aria-label={t.navbar.themeToggleAria}
          >
            <div className={styles.drawerThemeLeft}>
              <span className={styles.drawerThemeIconBox}>
                {theme === 'dark' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </span>
              <span className={styles.drawerThemeLabel}>
                {theme === 'dark' ? t.navbar.themeDark : t.navbar.themeLight}
              </span>
            </div>
            <span className={styles.drawerThemePill}>
              {theme === 'dark' ? t.navbar.themeDarkShort : t.navbar.themeLightShort}
            </span>
          </button>

          {/* Relocated Prominent Contact CTA Button in Drawer */}
          <button
            type="button"
            className={styles.drawerContactBtn}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <span>{t.navbar.ctaContact}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
