import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Metrics from './components/Metrics/Metrics';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <LanguageProvider>
      <div className="portfolioApp">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>
          {activeTab === 'home' && (
            <>
              <Hero setActiveTab={setActiveTab} />
              <Metrics />
            </>
          )}
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
