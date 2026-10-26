import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Projects.module.css';

// Clean SVG Data URI generator for architecture emblems (ensures descriptive <img> alt attributes)
const getCategoryDiagramUri = (category) => {
  const configs = {
    enterprise: {
      bg: '%23EFECE6',
      accent: '%238C7355',
      secondary: '%238F9E8B',
      label: 'SQL • ERP'
    },
    ai: {
      bg: '%23EFECE6',
      accent: '%238F9E8B',
      secondary: '%238C7355',
      label: 'LLM • AGENT'
    },
    data: {
      bg: '%23EFECE6',
      accent: '%238C7355',
      secondary: '%23758A72',
      label: 'PY • R • DATA'
    }
  };

  const c = configs[category] || configs.enterprise;
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 72" width="120" height="72"><rect width="120" height="72" rx="12" fill="${c.bg}" stroke="${c.secondary}" stroke-width="1.5"/><circle cx="28" cy="30" r="9" fill="${c.accent}" opacity="0.85"/><circle cx="60" cy="30" r="9" fill="${c.secondary}" opacity="0.9"/><circle cx="92" cy="30" r="9" fill="${c.accent}" opacity="0.85"/><line x1="37" y1="30" x2="51" y2="30" stroke="${c.accent}" stroke-width="2" stroke-dasharray="2 2"/><line x1="69" y1="30" x2="83" y2="30" stroke="${c.accent}" stroke-width="2" stroke-dasharray="2 2"/><text x="60" y="58" text-anchor="middle" font-family="monospace" font-size="9" font-weight="bold" fill="%232D312E">${c.label}</text></svg>`;
};

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedIds, setExpandedIds] = useState({ 'procurement-suite': true });
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalProject(null);
      }
    };

    if (modalProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalProject]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredProjects =
    activeFilter === 'all'
      ? t.projects.items
      : t.projects.items.filter((item) => item.category === activeFilter);

  return (
    <section
      id="projects"
      className={styles.projectsSection}
      aria-label={t.projects.sectionTitle}
    >
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">{t.projects.sectionTag}</span>
          <h2 className="sectionTitle">{t.projects.sectionTitle}</h2>
          <p className="sectionSubtitle">{t.projects.sectionSubtitle}</p>
        </div>

        {/* Category Filter Chips */}
        <div className={styles.filterScrollWrapper}>
          <div
            className={styles.filterBar}
            role="tablist"
            aria-label={t.projects.sectionTag}
          >
            {t.projects.filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${filter.label}`}
                  className={`${styles.filterBtn} ${
                    isActive ? styles.filterActive : ''
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => {
            const isExpanded = !!expandedIds[project.id];
            const breakdownId = `case-breakdown-${project.id}`;

            return (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.cardTopBar}>
                  <div className={styles.metaGroup}>
                    <span className={styles.categoryTag}>
                      {project.categoryLabel}
                    </span>
                    <span className={styles.companyMeta}>
                      {project.company} • {project.period}
                    </span>
                  </div>

                  <span className={styles.metricPill}>
                    <span className={styles.metricDot} aria-hidden="true" />
                    {project.metricBadge}
                  </span>
                </div>

                <div className={styles.cardHeaderRow}>
                  <img
                    src={getCategoryDiagramUri(project.category)}
                    alt={project.imageAlt}
                    width="96"
                    height="58"
                    loading="lazy"
                    className={styles.archThumb}
                  />
                  <div className={styles.titleBlock}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSummary}>{project.summary}</p>
                  </div>
                </div>

                {/* Expandable Problem / Solution / Impact Breakdown */}
                <div
                  id={breakdownId}
                  className={`${styles.psiContainer} ${
                    isExpanded ? styles.psiExpanded : ''
                  }`}
                >
                  <div className={styles.psiInner}>
                    <div className={`${styles.psiBox} ${styles.psiProblem}`}>
                      <div className={styles.psiLabelRow}>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span className={styles.psiHeading}>
                          {t.projects.problemLabel}
                        </span>
                      </div>
                      <p className={styles.psiText}>{project.problem}</p>
                    </div>

                    <div className={`${styles.psiBox} ${styles.psiSolution}`}>
                      <div className={styles.psiLabelRow}>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        <span className={styles.psiHeading}>
                          {t.projects.solutionLabel}
                        </span>
                      </div>
                      <p className={styles.psiText}>{project.solution}</p>
                    </div>

                    <div className={`${styles.psiBox} ${styles.psiImpact}`}>
                      <div className={styles.psiLabelRow}>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className={styles.psiHeading}>
                          {t.projects.impactLabel}
                        </span>
                      </div>
                      <p className={styles.psiText}>{project.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className={styles.techRow}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Footer */}
                <div className={styles.cardFooterActions}>
                  <button
                    type="button"
                    className={styles.expandToggleBtn}
                    onClick={() => toggleExpand(project.id)}
                    aria-expanded={isExpanded}
                    aria-controls={breakdownId}
                    aria-label={`${
                      isExpanded ? t.projects.collapseBtn : t.projects.expandBtn
                    }: ${project.title}`}
                  >
                    <span>
                      {isExpanded
                        ? t.projects.collapseBtn
                        : t.projects.expandBtn}
                    </span>
                    <svg
                      className={`${styles.chevronIcon} ${
                        isExpanded ? styles.chevronRotated : ''
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  <button
                    type="button"
                    className={styles.modalTriggerBtn}
                    onClick={() => setModalProject(project)}
                    aria-label={`${t.projects.modalBtn}: ${project.title}`}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M9 21H3v-6"></path>
                      <path d="M21 3l-7 7"></path>
                      <path d="M3 21l7-7"></path>
                    </svg>
                    <span>{t.projects.modalBtn}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Case Study Quick Modal */}
        {modalProject && (
          <div
            className={styles.modalBackdrop}
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalProject(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
          >
            <div className={styles.modalDialog}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitleGroup}>
                  <div className={styles.modalBadges}>
                    <span className={styles.categoryTag}>
                      {modalProject.categoryLabel}
                    </span>
                    <span className={styles.metricPill}>
                      <span className={styles.metricDot} aria-hidden="true" />
                      {modalProject.metricBadge}
                    </span>
                  </div>
                  <h3 id="case-study-modal-title" className={styles.modalTitle}>
                    {modalProject.title}
                  </h3>
                  <p className={styles.companyMeta}>
                    {modalProject.company} • {modalProject.period}
                  </p>
                </div>

                <button
                  type="button"
                  className={styles.modalCloseBtn}
                  onClick={() => setModalProject(null)}
                  aria-label={t.projects.closeModalAria}
                >
                  <svg
                    width="18"
                    height="18"
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

              <div className={styles.modalBody}>
                <div className={styles.modalDiagramRow}>
                  <img
                    src={getCategoryDiagramUri(modalProject.category)}
                    alt={modalProject.imageAlt}
                    width="120"
                    height="72"
                    className={styles.archThumbLarge}
                  />
                  <p className={styles.modalSummaryText}>
                    {modalProject.summary}
                  </p>
                </div>

                <div className={styles.modalPsiGrid}>
                  <div className={`${styles.psiBox} ${styles.psiProblem}`}>
                    <div className={styles.psiLabelRow}>
                      <span className={styles.psiHeading}>
                        1. {t.projects.problemLabel}
                      </span>
                    </div>
                    <p className={styles.psiText}>{modalProject.problem}</p>
                  </div>

                  <div className={`${styles.psiBox} ${styles.psiSolution}`}>
                    <div className={styles.psiLabelRow}>
                      <span className={styles.psiHeading}>
                        2. {t.projects.solutionLabel}
                      </span>
                    </div>
                    <p className={styles.psiText}>{modalProject.solution}</p>
                  </div>

                  <div className={`${styles.psiBox} ${styles.psiImpact}`}>
                    <div className={styles.psiLabelRow}>
                      <span className={styles.psiHeading}>
                        3. {t.projects.impactLabel}
                      </span>
                    </div>
                    <p className={styles.psiText}>{modalProject.impact}</p>
                  </div>
                </div>

                <div className={styles.techRow}>
                  {modalProject.technologies.map((tech) => (
                    <span key={tech} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
