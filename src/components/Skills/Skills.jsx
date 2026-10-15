import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Skills.module.css';

const getCategoryIcon = (categoryId) => {
  switch (categoryId) {
    case 'advanced':
    case 'backend':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    case 'intermediate':
    case 'frontend':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case 'basic':
    case 'automation':
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      );
  }
};

const Skills = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

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

        {/* Filter Navigation */}
        <div className={styles.filterBar}>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t.skills.filterAll}
          </button>
          {t.skills.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.filterBtn} ${activeFilter === category.id ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Categories and Badges Grid */}
        <div className={styles.categoriesGrid}>
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
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`${styles.skillBadgeItem} ${
                      skill.highlight ? styles.skillHighlight : ''
                    }`}
                  >
                    <div className={styles.skillLeft}>
                      <span className={styles.skillIndicator} />
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
