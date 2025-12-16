import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
           </div>
           <div className="mt-4 md:mt-0 text-slate-400 max-w-md text-right">
             Verified expertise in Cloud, AI, and DevOps methodologies.
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="relative bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={64} />
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-400 mt-4 border-t border-slate-700 pt-4">
                <span>Completed / Due</span>
                <span className="font-mono text-blue-300">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;