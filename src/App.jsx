import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import ScrollProgressBar from './components/Common/ScrollProgressBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Metrics from './components/Metrics/Metrics';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function PortfolioContent() {
  const [activeTab, setActiveTab] = useState('home');
  const { language } = useLanguage();

  // Dynamic Page Title Update (SEO & UX - Item 5)
  useEffect(() => {
    const titles = {
      es: {
        home: 'Andrés Chávez | Desarrollador de Software & IA',
        experience: 'Experiencia Profesional | Andrés Chávez',
        skills: 'Habilidades Técnicas | Andrés Chávez',
        education: 'Formación Académica | Andrés Chávez',
        contact: 'Contacto | Andrés Chávez',
        404: '404 - Página no encontrada | Andrés Chávez'
      },
      en: {
        home: 'Andrés Chávez | Software Developer & AI',
        experience: 'Professional Experience | Andrés Chávez',
        skills: 'Technical Skills | Andrés Chávez',
        education: 'Academic Background | Andrés Chávez',
        contact: 'Contact | Andrés Chávez',
        404: '404 - Page Not Found | Andrés Chávez'
      }
    };
    const currentLang = language === 'en' ? 'en' : 'es';
    document.title = titles[currentLang][activeTab] || titles[currentLang].home;
  }, [activeTab, language]);

  // URL / Path & Hash sync (Item 3: 404 Route handling)
  useEffect(() => {
    const validTabs = ['home', 'experience', 'skills', 'education', 'contact'];
    const handleRoute = () => {
      const pathname = window.location.pathname.replace(/^\/|\/$/g, '');
      if (!pathname || pathname === 'index.html') {
        const hash = window.location.hash.replace('#', '');
        if (validTabs.includes(hash)) {
          setActiveTab(hash);
        }
      } else if (validTabs.includes(pathname)) {
        setActiveTab(pathname);
      } else {
        setActiveTab('404');
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);
    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('hashchange', handleRoute);
    };
  }, []);

  return (
    <div className="portfolioApp">
      <ScrollProgressBar />
      {activeTab !== '404' && <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />}
      <main id="main-content">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <Metrics />
            <Projects />
          </>
        )}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'contact' && <Contact />}
        {activeTab === '404' && <NotFound setActiveTab={setActiveTab} />}
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
