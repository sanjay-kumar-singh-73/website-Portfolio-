// import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: About Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-400">Passionate Coder & Creator</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a dedicated developer with a strong foundation in building scalable web applications. 
              My journey involves transforming complex ideas into clean, efficient, and user-friendly code.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Beyond coding, I am a content creator who loves to share technical knowledge and help 
              others navigate the world of programming.
            </p>
          </motion.div>

          {/* Right: Stats/Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Projects", count: "10+" },
              { title: "Languages", count: "4+" },
              { title: "Design", count: "Clean" },
              { title: "Experience", count: "2026" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center"
              >
                <div className="text-2xl font-black text-blue-500 mb-2">{stat.count}</div>
                <div className="text-slate-400 font-medium">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;