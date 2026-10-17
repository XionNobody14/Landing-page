import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Skills.module.css';

const getCategoryIcon = (categoryId) => {
  switch (categoryId) {
    case 'backend_data':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'automation_ai':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      );
    case 'frontend_core':
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
  }
};

const Skills = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Close open tooltip when clicking anywhere outside
  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (!e.target.closest(`.${styles.skillBadgeItem}`)) {
        setActiveTooltip(null);
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleBadgeClick = (e, skillName) => {
    e.stopPropagation();
    setActiveTooltip((prev) => (prev === skillName ? null : skillName));
  };

  const filteredCategories = activeFilter === 'all'
    ? t.skills.categories
    : t.skills.categories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className={styles.skillsSection} aria-label="Habilidades Técnicas">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">{t.skills.sectionTag}</span>
          <h2 className="sectionTitle">{t.skills.sectionTitle}</h2>
          <p className="sectionSubtitle">{t.skills.sectionSubtitle}</p>
        </div>

        {/* Filter Chips Bar (Smooth horizontal scroll on mobile) */}
        <div className={styles.filterScrollWrapper}>
          <div className={styles.filterBar} role="tablist" aria-label="Filtros de habilidades">
            {t.skills.filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.filterBtn} ${isActive ? styles.filterActive : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className={`${styles.categoriesGrid} ${activeFilter !== 'all' ? styles.singleCategoryGrid : ''}`}>
          {filteredCategories.map((cat) => (
            <article key={cat.id} className={styles.categoryCard}>
              <div className={styles.categoryTop}>
                <div className={styles.categoryIconBox}>
                  {getCategoryIcon(cat.id)}
                </div>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
              </div>

              <p className={styles.categoryDesc}>{cat.description}</p>

              <div className={styles.skillsBadgeList}>
                {cat.skills.map((skill) => {
                  const isTooltipOpen = activeTooltip === skill.name;
                  return (
                    <div
                      key={skill.name}
                      tabIndex="0"
                      role="button"
                      aria-expanded={isTooltipOpen}
                      aria-label={`${skill.name} - ${skill.level}`}
                      className={`${styles.skillBadgeItem} ${
                        skill.highlight ? styles.skillHighlight : ''
                      } ${isTooltipOpen ? styles.skillBadgeOpen : ''}`}
                      onClick={(e) => handleBadgeClick(e, skill.name)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleBadgeClick(e, skill.name);
                        }
                      }}
                    >
                      <div className={styles.skillLeft}>
                        <span className={styles.skillIndicator} />
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>

                      <div className={styles.skillRight}>
                        <span className={styles.skillLevel}>{skill.level}</span>
                        <span className={styles.infoHintIcon} title={t.skills.tapHint}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
                        </span>
                      </div>

                      {/* Tooltip con micro-descripción de aplicación real */}
                      {isTooltipOpen && (
                        <div
                          className={styles.tooltipBox}
                          role="tooltip"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className={styles.tooltipHeader}>
                            <span className={styles.tooltipTitle}>{skill.name}</span>
                            <button
                              type="button"
                              className={styles.tooltipCloseBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTooltip(null);
                              }}
                              aria-label={t.skills.closeTooltip}
                            >
                              ✕
                            </button>
                          </div>
                          <p className={styles.tooltipText}>{skill.description}</p>
                          <div className={styles.tooltipArrow} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
