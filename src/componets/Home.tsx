// import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import Img from "../assets/sanjay.jpeg"

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 pt-20 overflow-hidden">
            <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Side: Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    {/* <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium tracking-wide"
                    >
                        🚀 Welcome to my digital space
                    </motion.div> */}

                    <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-7xl font-black leading-tight"
                    >
                        Hi, I'm <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600">
                            Sanjay Kr Chauhan
                        </span>
                    </motion.h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Full-stack programmer & content creator. I turn complex ideas into elegant, responsive digital solutions.
                    </p>

                    {/* Social Icons */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-6 justify-center md:justify-start text-3xl"
                    >
                        {[FaGithub, FaLinkedin, FaTwitter].map((Icon, idx) => (
                            <a key={idx} href="#" target="_blank" className="p-3 bg-slate-900 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                                <Icon />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Right Side: Image with Glow Effect */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    {/* Glow background behind image */}
                    <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                    
                    <img 
                        src={Img} 
                        alt="Sanjay Kr Chauhan" 
                        className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl border border-slate-700 shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;