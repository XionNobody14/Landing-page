import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ExperienceCard from './ExperienceCard';
import styles from './Experience.module.css';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className={styles.experienceSection} aria-label="Experiencia Profesional">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">{t.experience.sectionTag}</span>
          <h1 className="sectionTitle">{t.experience.sectionTitle}</h1>
          <p className="sectionSubtitle">{t.experience.sectionSubtitle}</p>
        </div>

        <div className={styles.timelineContainer}>
          {t.experience.roles.map((roleItem, index) => (
            <ExperienceCard
              key={roleItem.id || index}
              roleData={roleItem}
              isCurrent={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
