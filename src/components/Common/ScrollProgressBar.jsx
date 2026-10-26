import React, { useEffect, useRef } from 'react';
import styles from './ScrollProgressBar.module.css';

const ScrollProgressBar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const progressEl = progressRef.current;
    if (!progressEl) return;

    // Fallback for browsers that do not natively support CSS scroll-driven animations
    const supportsScrollTimeline =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline', 'scroll()');

    if (supportsScrollTimeline) return;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const ratio = scrollable > 0 ? Math.min(Math.max(scrolled / scrollable, 0), 1) : 0;
      progressEl.style.transform = `scaleX(${ratio})`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className={styles.progressTrack} aria-hidden="true">
      <div ref={progressRef} className={styles.progressBar} />
    </div>
  );
};

export default ScrollProgressBar;
