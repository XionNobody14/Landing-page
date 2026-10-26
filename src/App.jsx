import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgressBar from './components/Common/ScrollProgressBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Metrics from './components/Metrics/Metrics';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <LanguageProvider>
      <div className="portfolioApp">
        <ScrollProgressBar />
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main id="main-content">
          {activeTab === 'home' && (
            <>
              <Hero setActiveTab={setActiveTab} />
              <Metrics />
              <Projects />
            </>
          )}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'education' && <Education />}
          {activeTab === 'contact' && <Contact />}
        </main>
      </div>
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
