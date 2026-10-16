import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../Common/LanguageSwitcher';
import styles from './Navbar.module.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Group (Language Switcher + Desktop Contact CTA) */}
        <div className={styles.navActions}>
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
                className={`${styles.drawerNavLink} ${isActive ? styles.drawerNavLinkActive : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span>{link.label}</span>
                {isActive && <span className={styles.activeDot} aria-hidden="true" />}
              </button>
            );
          })}
        </nav>

        {/* Relocated Prominent Contact CTA Button in Drawer */}
        <div className={styles.drawerFooter}>
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
