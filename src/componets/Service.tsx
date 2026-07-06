// import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "Web & App Development", desc: "Building fast, responsive, and SEO-friendly websites." },
  { title: "UI/UX Design", desc: "Creating modern, clean, and user-centric interfaces." },
  { title: "You Tuber", desc: "Producing high-quality technical content for developers." },
  { title: "Performance", desc: "Optimizing website speed and core web vitals." }
];

const Service = () => {
  return (
    <section id="services" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          My <span className="text-blue-500">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-500 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;