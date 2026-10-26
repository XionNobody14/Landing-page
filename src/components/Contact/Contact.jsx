import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Contact.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Interactive Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Backend',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const formRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const validateField = (field, value) => {
    const trimmed = (value || '').trim();
    if (field === 'name') {
      return trimmed.length >= 2;
    }
    if (field === 'email') {
      return EMAIL_REGEX.test(trimmed);
    }
    if (field === 'message') {
      return trimmed.length >= 15;
    }
    return true;
  };

  // Synchronize programmatic aria-invalid with visual :user-invalid and interaction state
  const syncAriaInvalid = (el, fieldName, currentVal, isFieldTouched) => {
    if (!el) return;
    let nativeUserInvalid = false;
    try {
      if (typeof CSS !== 'undefined' && CSS.supports('selector(:user-invalid)')) {
        nativeUserInvalid = el.matches(':user-invalid');
      }
    } catch {
      nativeUserInvalid = false;
    }
    const isCustomValid = validateField(fieldName, currentVal);
    const shouldMarkInvalid = nativeUserInvalid || (isFieldTouched && !isCustomValid);

    if (shouldMarkInvalid) {
      el.setAttribute('aria-invalid', 'true');
    } else {
      el.removeAttribute('aria-invalid');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus === 'error') {
      setFormStatus('idle');
    }
    if (touched[name]) {
      syncAriaInvalid(e.target, name, value, true);
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    syncAriaInvalid(e.target, name, value, true);
  };

  const isNameInvalid = touched.name && !validateField('name', formData.name);
  const isEmailInvalid = touched.email && !validateField('email', formData.email);
  const isMessageInvalid = touched.message && !validateField('message', formData.message);

  const isNameValid = touched.name && validateField('name', formData.name);
  const isEmailValid = touched.email && validateField('email', formData.email);
  const isMessageValid = touched.message && validateField('message', formData.message);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);

    const validName = validateField('name', formData.name);
    const validEmail = validateField('email', formData.email);
    const validMessage = validateField('message', formData.message);

    if (!validName || !validEmail || !validMessage) {
      setFormStatus('error');
      if (formRef.current) {
        const firstInvalid = formRef.current.querySelector(
          !validName
            ? '#contact-name'
            : !validEmail
            ? '#contact-email'
            : '#contact-message'
        );
        if (firstInvalid) {
          firstInvalid.setAttribute('aria-invalid', 'true');
          firstInvalid.focus();
        }
      }
      return;
    }

    setFormStatus('loading');

    const selectedSubject = formData.subject || 'Backend';
    const targetEmail = 'andreschavezv2003@gmail.com';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: `[Portafolio - ${selectedSubject}] Mensaje de ${formData.name.trim()}`,
          motivo: selectedSubject,
          message: formData.message.trim()
        })
      });

      if (response.ok) {
        setFormStatus('success');
        return;
      }
    } catch {
      // Fallback to mailto below if network request is blocked or offline
    }

    const mailtoSubject = encodeURIComponent(
      `[Portafolio - ${selectedSubject}] ${formData.name.trim()}`
    );
    const mailtoBody = encodeURIComponent(
      `Nombre / Empresa: ${formData.name.trim()}\nCorreo: ${formData.email.trim()}\nMotivo de Contacto: ${selectedSubject}\n\nMensaje:\n${formData.message.trim()}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormStatus('success');
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: 'Backend', message: '' });
    setTouched({ name: false, email: false, message: false });
    setFormStatus('idle');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contact.emailValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contacto">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">{t.contact.sectionTag}</span>
          <h2 className="sectionTitle">{t.contact.sectionTitle}</h2>
          <p className="sectionSubtitle">{t.contact.sectionSubtitle}</p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Details & Quick Actions */}
          <div className={styles.contactCard}>
            <h3 className={styles.cardHeading}>{t.contact.infoTitle}</h3>

            <div className={styles.infoList}>
              {/* Email */}
              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.infoTextGroup}>
                  <span className={styles.infoLabel}>{t.contact.emailLabel}</span>
                  <a
                    href={`mailto:${t.contact.emailValue}`}
                    className={styles.infoValue}
                    aria-label={`${t.contact.emailLabel}: ${t.contact.emailValue}`}
                  >
                    {t.contact.emailValue}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.infoTextGroup}>
                  <span className={styles.infoLabel}>{t.contact.phoneLabel}</span>
                  <a
                    href={`tel:${t.contact.phoneValue}`}
                    className={styles.infoValue}
                    aria-label={`${t.contact.phoneLabel}: ${t.contact.phoneFormatted}`}
                  >
                    {t.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.infoTextGroup}>
                  <span className={styles.infoLabel}>{t.contact.locationLabel}</span>
                  <span className={styles.infoValue}>{t.contact.locationValue}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Row */}
            <div className={styles.primaryActionsList} style={{ marginTop: '20px' }}>
              <button
                type="button"
                className={`${styles.actionButton} ${styles.btnCopy}`}
                onClick={handleCopyEmail}
                aria-label={t.contact.copyEmailAction}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>{t.contact.copyEmailAction}</span>
              </button>

              {copied && (
                <div className={styles.toastNotice} role="status" aria-live="polite">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{t.contact.copiedNotice}</span>
                </div>
              )}

              <button
                type="button"
                className={`${styles.actionButton} ${styles.btnCv}`}
                onClick={() => setIsModalOpen(true)}
                aria-label={t.contact.downloadCvAction}
                title={t.contact.modal.title}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>{t.contact.downloadCvAction}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <span className={styles.socialLabel}>Profiles / Perfiles:</span>
              <div className={styles.socialLinksGroup}>
                {t.contact.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialPill}
                    aria-label={social.ariaLabel || (social.name === 'LinkedIn' ? 'LinkedIn - Andrés Chávez' : 'GitHub - XionNobody14')}
                  >
                    {social.name === 'LinkedIn' ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Real-Time Validated Contact Form */}
          <div className={styles.actionsCard}>
            <div>
              <h3 className={styles.cardHeading}>{t.contact.form.title}</h3>
            </div>

            {formStatus === 'success' ? (
              <div className={styles.formSuccessCard} role="status" aria-live="polite">
                <div className={styles.successIconCircle} aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className={styles.successTitle}>{t.contact.form.submitSuccessTitle}</h4>
                <p className={styles.successText}>{t.contact.form.submitSuccessText}</p>
                <button
                  type="button"
                  className={styles.resetFormBtn}
                  onClick={handleResetForm}
                  aria-label={t.contact.form.sendAnother}
                >
                  {t.contact.form.sendAnother}
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                className={styles.interactiveForm}
                onSubmit={handleFormSubmit}
                noValidate
              >
                {formStatus === 'error' && (
                  <div className={styles.formAlertBanner} role="alert">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div>
                      <strong>{t.contact.form.submitErrorTitle}: </strong>
                      <span>{t.contact.form.submitErrorText}</span>
                    </div>
                  </div>
                )}

                {/* Field 1: Name (Hint placed ABOVE input per modern-web-guidance) */}
                <div className={styles.formField}>
                  <label htmlFor="contact-name" className={styles.fieldLabel}>
                    {t.contact.form.nameLabel} <span className={styles.requiredMark} aria-hidden="true">*</span>
                  </label>
                  <span id="contact-name-hint" className={styles.fieldHint}>
                    {t.contact.form.nameHint}
                  </span>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    autoComplete="name"
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    aria-describedby="contact-name-hint"
                    aria-errormessage="contact-name-error"
                    className={`${styles.fieldInput} ${
                      isNameInvalid ? styles.inputInvalid : ''
                    } ${isNameValid ? styles.inputValid : ''}`}
                  />
                  <div
                    id="contact-name-error"
                    className={`${styles.fieldErrorMsg} ${
                      isNameInvalid ? styles.fieldErrorVisible : ''
                    }`}
                    role="alert"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>{t.contact.form.nameError}</span>
                  </div>
                </div>

                {/* Field 2: Email (Hint placed ABOVE input per modern-web-guidance) */}
                <div className={styles.formField}>
                  <label htmlFor="contact-email" className={styles.fieldLabel}>
                    {t.contact.form.emailLabel} <span className={styles.requiredMark} aria-hidden="true">*</span>
                  </label>
                  <span id="contact-email-hint" className={styles.fieldHint}>
                    {t.contact.form.emailHint}
                  </span>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    aria-describedby="contact-email-hint"
                    aria-errormessage="contact-email-error"
                    className={`${styles.fieldInput} ${
                      isEmailInvalid ? styles.inputInvalid : ''
                    } ${isEmailValid ? styles.inputValid : ''}`}
                  />
                  <div
                    id="contact-email-error"
                    className={`${styles.fieldErrorMsg} ${
                      isEmailInvalid ? styles.fieldErrorVisible : ''
                    }`}
                    role="alert"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>{t.contact.form.emailError}</span>
                  </div>
                </div>

                {/* Field 3: Subject / Role */}
                <div className={styles.formField}>
                  <label htmlFor="contact-subject" className={styles.fieldLabel}>
                    {t.contact.form.subjectLabel}
                  </label>
                  <span id="contact-subject-hint" className={styles.fieldHint}>
                    {t.contact.form.subjectHint}
                  </span>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    aria-describedby="contact-subject-hint"
                    className={styles.fieldSelect}
                  >
                    {t.contact.form.subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 4: Message (Hint placed ABOVE textarea) */}
                <div className={styles.formField}>
                  <label htmlFor="contact-message" className={styles.fieldLabel}>
                    {t.contact.form.messageLabel} <span className={styles.requiredMark} aria-hidden="true">*</span>
                  </label>
                  <span id="contact-message-hint" className={styles.fieldHint}>
                    {t.contact.form.messageHint}
                  </span>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                    minLength={15}
                    placeholder={t.contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    aria-describedby="contact-message-hint"
                    aria-errormessage="contact-message-error"
                    className={`${styles.fieldTextarea} ${
                      isMessageInvalid ? styles.inputInvalid : ''
                    } ${isMessageValid ? styles.inputValid : ''}`}
                  />
                  <div
                    id="contact-message-error"
                    className={`${styles.fieldErrorMsg} ${
                      isMessageInvalid ? styles.fieldErrorVisible : ''
                    }`}
                    role="alert"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>{t.contact.form.messageError}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  aria-busy={formStatus === 'loading'}
                  aria-label={t.contact.form.submitIdle}
                  className={`${styles.actionButton} ${styles.btnMail} ${styles.submitFormBtn}`}
                >
                  {formStatus === 'loading' ? (
                    <>
                      <span className={styles.spinnerIcon} aria-hidden="true" />
                      <span>{t.contact.form.submitLoading}</span>
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      <span>{t.contact.form.submitIdle}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* CV Download Modal */}
        {isModalOpen && (
          <div
            className={styles.modalBackdrop}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-cv-title"
          >
            <div className={styles.modalContainer}>
              <div className={styles.modalHeader}>
                <div className={styles.modalHeadingGroup}>
                  <h3 id="modal-cv-title" className={styles.modalTitle}>
                    {t.contact.modal.title}
                  </h3>
                  <p className={styles.modalSubtitle}>
                    {t.contact.modal.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.modalCloseBtn}
                  onClick={() => setIsModalOpen(false)}
                  aria-label={t.contact.modal.close}
                  title={t.contact.modal.close}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className={styles.modalGrid}>
                {/* Option 1: Español */}
                <a
                  href="/CV_Andres_Chavez_ES.pdf"
                  download="CV_Andres_Chavez_ES.pdf"
                  className={styles.downloadCard}
                  aria-label={`${t.contact.modal.title} - ${t.contact.modal.optionEs}`}
                >
                  <div className={styles.cardIconBox}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <h4 className={styles.cardLangTitle}>{t.contact.modal.optionEs}</h4>
                  <span className={styles.cardDetail}>{t.contact.modal.optionEsDetail}</span>
                  <div className={styles.cardActionBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>PDF</span>
                  </div>
                </a>

                {/* Option 2: Inglés */}
                <a
                  href="/CV_Andres_Chavez_EN.pdf"
                  download="CV_Andres_Chavez_EN.pdf"
                  className={styles.downloadCard}
                  aria-label={`${t.contact.modal.title} - ${t.contact.modal.optionEn}`}
                >
                  <div className={styles.cardIconBox}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <h4 className={styles.cardLangTitle}>{t.contact.modal.optionEn}</h4>
                  <span className={styles.cardDetail}>{t.contact.modal.optionEnDetail}</span>
                  <div className={styles.cardActionBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>PDF</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div>
              <p>© {new Date().getFullYear()} Andrés Alejandro Chávez Vázquez. {t.footer.rights}</p>
              <p style={{ marginTop: '4px', fontSize: '0.8rem' }}>{t.footer.developedWith}</p>
            </div>

            <button
              type="button"
              className={styles.backToTopBtn}
              onClick={handleScrollToTop}
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
