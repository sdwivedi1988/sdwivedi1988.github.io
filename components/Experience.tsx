import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{job.role}</h3>
                    <div className="text-xl text-blue-600 font-medium">{job.company}</div>
                  </div>
                  <div className="flex items-center text-slate-500 font-medium bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <Calendar size={18} className="mr-2 text-blue-500" />
                    {job.period}
                  </div>
                </div>
                {job.summary && (
                  <p className="text-slate-600 italic border-l-4 border-blue-200 pl-4 mt-2">
                    {job.summary}
                  </p>
                )}
              </div>

              <div className="p-8">
                {/* Main Achievements / Subsections */}
                {job.subSections ? (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {job.subSections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="font-bold text-slate-800 text-lg border-b border-blue-100 pb-2 mb-3">
                          {section.title}
                        </h4>
                        <ul className="space-y-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-slate-600 leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mr-3"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
                        <CheckCircle2 size={18} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Footer of card for key highlights if needed */}
              {job.id === 'accenture' && (
                <div className="px-8 py-4 bg-blue-900/5 border-t border-blue-100 flex flex-wrap gap-4 text-sm font-medium text-blue-800">
                   <span className="px-3 py-1 bg-white rounded-full border border-blue-200 shadow-sm">ACE Award Winner</span>
                   <span className="px-3 py-1 bg-white rounded-full border border-blue-200 shadow-sm">GenAI Implementation</span>
                   <span className="px-3 py-1 bg-white rounded-full border border-blue-200 shadow-sm">Managed 60+ Pros</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;