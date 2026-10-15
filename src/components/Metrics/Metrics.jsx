import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Metrics.module.css';

const Metrics = () => {
  const { t } = useLanguage();

  return (
    <section id="metrics" className={styles.metricsSection} aria-label="Métricas de Impacto">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">Track Record</span>
          <h2 className="sectionTitle">{t.metrics.sectionTitle}</h2>
          <p className="sectionSubtitle">{t.metrics.sectionSubtitle}</p>
        </div>

        <div className={styles.metricsGrid}>
          {t.metrics.items.map((item, index) => (
            <article key={index} className={styles.metricCard}>
              <div className={styles.cardHeader}>
                <span className={styles.metricValue}>{item.value}</span>
                <span className={styles.metricUnit}>{item.unit}</span>
              </div>
              <h3 className={styles.metricTitle}>{item.title}</h3>
              <p className={styles.metricDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
