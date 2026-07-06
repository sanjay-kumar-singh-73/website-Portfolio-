// import React from 'react';
import { motion } from 'framer-motion';
// Sahi imports yahan hain
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import Img from "../assets/sanjay.jpeg"

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 pt-20">
            <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12">

                {/* Left Side: Text & Socials */}
                <div className="flex-1 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-4xl font-black mb-6"
                    >
                        Hi, I'm <br />
                        <span className="text-blue-500">Sanjay Kr Chauhan</span>
                    </motion.h1>

                    <p className="text-slate-400 mb-8 text-lg">
                        Programmer & Content Creator. Building cool stuff with React & TypeScript.
                    </p>

                    {/* Social Icons - Sahi tarike se lagaye gaye hain */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-6 justify-center md:justify-start text-3xl" // text-2xl se 3xl kiya taaki saaf dikhe
                    >
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                            <FaTwitter />
                        </a>
                    </motion.div>
                </div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-64 h-64 md:w-80 md:h-80"
                >
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 opacity-20"></div>
                    <img
                        src={Img}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-slate-700"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Home;