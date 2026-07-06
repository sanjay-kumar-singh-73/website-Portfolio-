// import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Let's work together</h3>
            <p className="text-slate-400">Feel free to reach out for collaborations or project inquiries.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <FaEnvelope className="text-blue-500" /> yourname@email.com
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <FaPhone className="text-blue-500" /> +91 XXXXX XXXXX
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <FaMapMarkerAlt className="text-blue-500" /> Delhi, India
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4 bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <input type="text" placeholder="Name" className="w-full p-4 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500" />
            <input type="email" placeholder="Email" className="w-full p-4 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Message" rows={4} className="w-full p-4 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
            <button className="w-full p-4 bg-blue-600 hover:bg-blue-700 font-bold rounded-lg transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;