import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-blue-900/50 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter">
          PORT<span className="text-blue-500">FOLIO</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl text-blue-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Sidebar (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-slate-900 border-b border-blue-900/50"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-lg font-medium hover:text-blue-400 transition-colors" 
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;