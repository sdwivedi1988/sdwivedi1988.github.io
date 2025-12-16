import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-900/30 rounded-full border border-blue-700/50">
            Available for New Opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 font-medium mb-6">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              <Mail size={18} />
              Contact Me
            </a>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-colors text-slate-200">
              <Download size={18} />
              Download CV
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-500" />
              {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-500" />
              {PERSONAL_INFO.phone}
            </div>
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Linkedin size={16} className="text-blue-500" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;