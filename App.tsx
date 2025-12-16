import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Hero />
      <ImpactStats />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;