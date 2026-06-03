import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, Info 
} from 'lucide-react';


export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Computer Science & Engineering',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="relative pt-24 pb-16 font-sans">
      {/* Background stardust glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00f5ff]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffaa00]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Connect With SBG Hub
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Send queries regarding study group admissions, collaboration pitches, certification sponsorship credentials, or event bookings.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="glass p-8 rounded-2xl border border-white/5 space-y-8 flex-1">
              <h3 className="text-xl font-bold text-white font-heading border-l-3 border-[#00f5ff] pl-3 leading-none text-glow-blue">
                Reach Out Channels
              </h3>
              
              <ul className="space-y-6 text-sm font-sans">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ffaa00]/10 border border-[#ffaa00]/20 flex items-center justify-center text-[#ffaa00] shrink-0 mt-0.5 animate-pulse">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading mb-1">Campus Hub Address</h4>
                    <p className="text-slate-400 leading-relaxed text-xs">
                      AWS Student Builder Group, IT Building, UV Patel College of Engineering, Ganpat University Campus, Mehsana-Gandinagar Highway, Kherva, Gujarat, India - 384315.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading mb-1">Electronic Mailbox</h4>
                    <a href="mailto:awscloudclub@ganpatuniversity.ac.in" className="text-slate-400 hover:text-white transition-colors">
                      awscloudclub@ganpatuniversity.ac.in
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00f5ff]/10 border border-[#00f5ff]/20 flex items-center justify-center text-[#00f5ff] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading mb-1">Hotline Operator</h4>
                    <a href="tel:+917984961282" className="text-slate-400 hover:text-white transition-colors">
                      +91 79849 61282
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Styled Campus Interactive Node Map */}
            <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-[220px] relative overflow-hidden shadow-2xl radar-sweep-indicator">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
              
              {/* Fake High-Tech Map grid */}
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
              
              {/* Glowing University Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#ffaa00] shadow-[0_0_12px_#ffaa00] animate-ping" />
                <span className="w-3 h-3 rounded-full bg-[#ffaa00] border-2 border-white absolute" />
                <span className="text-[10px] font-mono text-white font-bold mt-2 uppercase bg-slate-950 px-2 py-0.5 border border-white/10 rounded">
                  GUNI CAMPUS NODE
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono relative z-10 uppercase">
                <Info className="w-3.5 h-3.5 shrink-0" />
                GPS Coordinates
              </div>

              <div className="flex justify-between items-end text-xs text-slate-500 font-mono relative z-10">
                <span>LAT: 23.5284° N</span>
                <span>LON: 72.4439° E</span>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="glass rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative space-y-6 h-full flex flex-col justify-center"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-heading">
                      Transmit Digital Message
                    </h3>
                    <p className="text-xs text-slate-400">
                      Submit your application or questions to the administrative team. Standard response times are within 48 planetary hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Your Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Aryan Dave"
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:border-[#00f5ff]/60 transition-all font-sans"
                          required
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. student@gnu.ac.in"
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:border-[#00f5ff]/60 transition-all font-sans"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Department / Stream</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white focus:border-[#00f5ff]/60 transition-all select-none font-sans"
                      >
                        <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="Other Technology Branch">Other Technology Branch</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Transmission Content</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write details of your query or membership applications here..."
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:border-[#00f5ff]/60 transition-all font-sans resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs text-black bg-[#ffaa00] hover:bg-amber-400 shadow-md shadow-[#ffaa00]/25 hover:scale-101 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Transmit Packet
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass rounded-2xl p-8 border border-cyan-500/25 shadow-2xl text-center space-y-6 h-full flex flex-col justify-center items-center"
                >
                  <CheckCircle className="w-14 h-14 text-cyan-400 animate-bounce text-glow-blue" />
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-heading">Transmission Concluded</h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-md">
                      Thank you {formData.name}. Your communications packets have been encrypted and received at our coordinate database. We will reply to <span className="text-cyan-400">{formData.email}</span> shortly.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-[#00f5ff]/10 border border-[#00f5ff]/25 text-[#00f5ff] rounded-xl text-xs font-mono uppercase tracking-widest">
                    TRANSMISSION SUCCESSFUL
                  </div>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', department: 'Computer Science & Engineering', message: '' });
                    }}
                    className="px-6 py-2.5 border border-white/10 hover:border-[#00f5ff] text-slate-300 hover:text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all cursor-pointer hover:bg-[#00f5ff]/10"
                  >
                    Open New Connection
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
};
