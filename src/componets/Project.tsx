// import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce App",
    desc: "React & TypeScript project with stripe integration.",
    image: "/src/assets/sanjay.jpeg", // Yahan apni image ka path daalein
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Fully responsive portfolio with dark theme & animations.",
    image: "/src/assets/sanjay.jpeg", // Yahan apni image ka path daalein
    github: "#",
    live: "#"
  }
];

const Project = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-all"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{project.desc}</p>
                
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;