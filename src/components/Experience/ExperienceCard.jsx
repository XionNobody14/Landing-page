import React from 'react';
import styles from './Experience.module.css';

const ExperienceCard = ({ roleData, isCurrent }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.timelineMarker} aria-hidden="true">
        <span className={styles.timelineMarkerInner} />
      </div>

      <article className={styles.experienceCard}>
        <div className={styles.cardTopHeader}>
          <div className={styles.companyBadge}>
            <svg
              className={styles.companyIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>{roleData.company}</span>
          </div>

          <span className={`${styles.periodPill} ${isCurrent ? styles.currentTag : ''}`}>
            {roleData.period}
          </span>
        </div>

        <h3 className={styles.roleTitle}>{roleData.role}</h3>

        <div className={styles.locationText}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{roleData.location}</span>
        </div>

        <p className={styles.roleDescription}>
          {roleData.description}
        </p>

        {/* Bullet Points */}
        <ul className={styles.achievementsList}>
          {roleData.achievements.map((item, index) => (
            <li key={index} className={styles.achievementItem}>
              <svg
                className={styles.bulletIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Tags */}
        <div className={styles.techSection}>
          <span className={styles.techTitle}>Stack & Herramientas / Technologies</span>
          <div className={styles.techList}>
            {roleData.technologies.map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;
