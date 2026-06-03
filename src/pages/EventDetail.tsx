import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Calendar, MapPin, Tag, Users, CheckCircle2, 
  Clock, ShieldAlert, Award, Send 
} from 'lucide-react';
import type { EventItem } from '../data/mockData';
import { MeetupIcon } from '../components/ui/SocialIcons';


interface EventDetailProps {
  event?: EventItem;
}

export const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    enrollment: '',
    department: 'CSE',
    year: '3rd Year'
  });

  if (!event) {
    return (
      <div className="pt-28 pb-16 font-sans text-center max-w-xl mx-auto space-y-6">
        <ShieldAlert className="w-16 h-16 text-red-500 mx-auto" />
        <h2 className="text-2xl font-bold text-white font-heading">Event Node Not Found</h2>
        <p className="text-slate-400">The event node requested could not be resolved in the AWS GUNI space data matrix.</p>
        <Link to="/events" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff9900] text-black font-bold uppercase text-xs rounded-xl">
          <ArrowLeft className="w-4 h-4" /> Back to Orbit Events
        </Link>
      </div>
    );
  }

  const isUpcoming = event.status === 'upcoming';

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.enrollment) {
      alert("Please fill out all registration fields.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      {/* Back to Events Nav */}
      <div className="mb-8">
        <Link 
          to="/events" 
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#ff9900] transition-colors uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Orbit list
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Poster & Details */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Visual Poster */}
          <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl h-[300px] sm:h-[450px]">
            <img
              src={event.poster}
              alt={event.name}
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050714] via-[#050714]/30 to-transparent" />
            
            {/* Status Badges */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#ff9900] shadow-[0_0_15px_rgba(255,153,0,0.3)]">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/40 border border-blue-500/20 backdrop-blur-md">
                  <Tag className="w-3.5 h-3.5" />
                  {event.type}
                </span>
              </div>

              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase border ${
                isUpcoming 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 animate-pulse' 
                  : 'bg-slate-700/20 text-slate-400 border-slate-500/20'
              }`}>
                {event.status} Event
              </span>
            </div>
          </div>

          {/* Core Info Description */}
          <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
              {event.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-y border-white/5 py-4 font-sans">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#ff9900] shrink-0" />
                {event.venue}
              </span>
              {event.speakers && (
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-400 shrink-0" />
                  {event.speakers.length} Speaker(s)
                </span>
              )}
              {(event as any).attendeeCount !== undefined && (
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                  {(event as any).attendeeCount} Members Joined
                </span>
              )}
            </div>

            <div className="space-y-4 font-sans leading-relaxed text-slate-300">
              <h3 className="text-white font-bold text-lg font-heading">Event Overview</h3>
              <p>{event.description}</p>
              <p>{event.details}</p>
            </div>
          </div>

          {/* Speakers Panel */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
              <h3 className="text-white font-bold text-lg font-heading flex items-center gap-2">
                <Users className="w-5 h-5 text-[#ff9900]" />
                Event Speakers & Instructors
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {event.speakers.map((speaker, idx) => (
                  <div key={idx} className="p-4 bg-slate-900/60 border border-white/5 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff9900]/10 border border-[#ff9900]/30 flex items-center justify-center font-bold text-[#ff9900]">
                      {speaker.split(' ')[0][0]}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm font-heading">{speaker}</h4>
                      <p className="text-[10px] text-slate-500 uppercase mt-0.5">AWS Certified Cloud Builder</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Event Itinerary Timeline */}
          {event.itinerary && event.itinerary.length > 0 && (
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
              <h3 className="text-white font-bold text-lg font-heading flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Schedule Timeline
              </h3>
              
              <div className="relative border-l border-white/10 pl-5 space-y-8 font-sans">
                {event.itinerary.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-[#050714] border border-[#ff9900]" />
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#ff9900] tracking-wider font-semibold">
                        {item.time}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {item.activity}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Registration Card / Closed State */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <AnimatePresence mode="wait">
            {isUpcoming ? (
              !formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="glass rounded-2xl p-6 border border-[#ff9900]/30 shadow-2xl relative overflow-hidden space-y-6"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff9900]/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-heading">
                      Register For Space
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">
                      Enrollment is free, backed by AWS Academy. Bring your laptop and your active campus sandbox credentials.
                    </p>
                  </div>

                  <div className="pb-2 border-b border-white/10">
                    <a
                      href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-[#c084fc] hover:bg-purple-600 shadow-md shadow-[#c084fc]/15 hover:scale-101 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MeetupIcon className="w-4 h-4" />
                      RSVP via Meetup
                    </a>
                    <div className="text-center my-3 text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                      or register locally below
                    </div>
                  </div>

                  <form onSubmit={handleRegister} className="space-y-4 text-sm font-sans">
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Full Name</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Aryan Patel"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:border-[#ff9900]/60 transition-all"
                        required
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yourname@ganpatuniversity.ac.in"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:border-[#ff9900]/60 transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Enrollment Number</label>
                      <input
                        type="text"
                        value={formData.enrollment}
                        onChange={(e) => setFormData({ ...formData, enrollment: e.target.value })}
                        placeholder="e.g. 21012011001"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:border-[#ff9900]/60 transition-all"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Dept</label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white focus:border-[#ff9900]/60 transition-all select-none"
                        >
                          <option value="CSE">CSE</option>
                          <option value="IT">IT</option>
                          <option value="CE">CE</option>
                          <option value="ICT">ICT</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 uppercase font-mono tracking-wider">Year</label>
                        <select
                          value={formData.year}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white focus:border-[#ff9900]/60 transition-all select-none"
                        >
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs text-black bg-[#ff9900] hover:bg-amber-500 shadow-md shadow-[#ff9900]/15 hover:scale-101 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Application
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass rounded-2xl p-6 border border-emerald-500/25 shadow-2xl text-center space-y-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-heading">Registration Secured</h3>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      Congratulations {formData.fullName}! Your registration for <span className="text-[#ff9900] font-semibold">{event.name}</span> has been securely written. Check your college inbox at <span className="text-blue-400">{formData.email}</span> for details.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-[11px] font-mono text-emerald-400 uppercase">
                    GNU SBG Hub Ticket #{(Math.random() * 89999 + 10000).toFixed(0)}
                  </div>
                  
                  <Link
                    to="/events"
                    className="w-full block py-2.5 border border-white/10 hover:border-blue-400 text-white hover:bg-white/5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all"
                  >
                    View other events
                  </Link>
                </motion.div>
              )
            ) : (
              <div className="glass rounded-2xl p-6 border border-white/5 shadow-2xl text-center space-y-6">
                <Award className="w-12 h-12 text-blue-400 mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-heading">Event Completed</h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    This technical event has concluded. Study circles, presentations, and resources generated during this event are available for members in our community repository.
                  </p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
