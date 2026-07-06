import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Section 1: About */}
        <div className="space-y-4">
          <div className="text-2xl font-black text-white">PORT<span className="text-blue-500">FOLIO</span></div>
          <p className="text-slate-400 text-sm">
            Building digital experiences that matter. Passionate about clean code, modern design, and continuous learning.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-blue-500 transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg">Contact</h4>
          <div className="flex items-center gap-3 text-slate-400 text-sm">
            <FaEnvelope className="text-blue-500" /> yourname@email.com
          </div>
          <p className="text-slate-400 text-sm">Based in Delhi, India</p>
        </div>

        {/* Section 4: Newsletter/Social */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg">Follow Me</h4>
          <div className="flex gap-4 text-2xl text-slate-400">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} Designed & Developed by You. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;