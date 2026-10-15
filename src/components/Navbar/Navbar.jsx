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

        {/* Desktop Navigation Tabs */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {t.navbar.navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                type="button"
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                style={
                  isActive
                    ? {
                        color: '#ffffff',
                        backgroundColor: 'rgba(125, 128, 218, 0.22)',
                        border: '1px solid rgba(176, 163, 212, 0.35)',
                        fontWeight: 700
                      }
                    : { border: '1px solid transparent' }
                }
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions (Language Switcher + Contact CTA + Mobile Menu Button) */}
        <div className={styles.navActions}>
          <LanguageSwitcher />

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

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t.navbar.menuAria}
          >
            <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.menuBarActive1 : ''}`} />
            <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.menuBarActive2 : ''}`} />
            <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.menuBarActive3 : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        {t.navbar.navLinks.map((link) => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              type="button"
              className={styles.mobileNavLink}
              style={
                isActive
                  ? {
                      color: '#ffffff',
                      backgroundColor: 'rgba(125, 128, 218, 0.25)',
                      borderColor: 'var(--color-primary)'
                    }
                  : {}
              }
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </button>
          );
        })}
        <div className={styles.mobileDrawerActions}>
          <button
            type="button"
            className={styles.mobileContactBtn}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            {t.navbar.ctaContact}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
