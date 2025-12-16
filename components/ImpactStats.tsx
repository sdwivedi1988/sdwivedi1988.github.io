import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { METRICS } from '../constants';

const ImpactStats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Measurable Impact
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Throughout my career, I have focused on data-driven delivery governance. 
              By implementing GenAI automation, rigorous CI/CD pipelines, and SAFe frameworks, 
              I have consistently improved operational efficiency and delivery predictability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {METRICS.map((metric, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {metric.value}{metric.suffix}
                  </div>
                  <div className="font-semibold text-slate-800 mb-1">{metric.name}</div>
                  <div className="text-xs text-slate-500">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 h-80 bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-inner">
            <h4 className="text-sm font-semibold text-slate-500 uppercase mb-4 tracking-wider text-center">Performance Improvements</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={METRICS}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={120} 
                  tick={{fontSize: 12, fill: '#64748b'}} 
                />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {METRICS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2563eb' : '#4f46e5'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;