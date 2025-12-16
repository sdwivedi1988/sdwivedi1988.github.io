import React from 'react';
import { SKILLS } from '../constants';
import { Cloud, Cog, Server, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Cloud & DevOps': return <Cloud className="text-white" size={24} />;
      case 'Delivery & Governance': return <Layers className="text-white" size={24} />;
      case 'Tools & Platforms': return <Cog className="text-white" size={24} />;
      default: return <Server className="text-white" size={24} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Skills & Competencies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="group">
              <div className="h-full bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(skillGroup.category)}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4">{skillGroup.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block px-3 py-1 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-md shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;