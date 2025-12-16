import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="mb-8 max-w-md">
              Experienced Delivery Lead ready to drive DevOps transformation and governance for your enterprise. Open to opportunities in Noida or Remote.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Mail size={20} />
                {PERSONAL_INFO.email}
              </a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                {PERSONAL_INFO.linkedin}
              </a>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                {PERSONAL_INFO.phone}
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h4 className="text-white font-bold mb-4">Quick Message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea rows={3} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white" placeholder="Hi Shashank..."></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;