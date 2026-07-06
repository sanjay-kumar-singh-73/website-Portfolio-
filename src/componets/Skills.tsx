// import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "React.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 75 },
  { name: "UI/UX Design", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-black text-center mb-16"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-blue-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;