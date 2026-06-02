import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Tag, Compass, ChevronRight, Hourglass, PlayCircle
} from 'lucide-react';
import { EVENTS } from '../data/mockData';
import { EventDetail } from './EventDetail';


export const Events: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedEventId = queryParams.get('id');

  const [activeStatus, setActiveStatus] = useState<'all' | 'upcoming' | 'past'>('all');
  const [activeType, setActiveType] = useState<'all' | 'workshop' | 'hackathon' | 'speaker' | 'community'>('all');

  // If a specific event is selected, render the EventDetail page instead
  if (selectedEventId) {
    const selectedEvent = EVENTS.find(e => e.id === selectedEventId);
    return <EventDetail event={selectedEvent} />;
  }

  const filteredEvents = EVENTS.filter((e) => {
    const statusMatch = activeStatus === 'all' || e.status === activeStatus;
    const typeMatch = activeType === 'all' || e.type === activeType;
    return statusMatch && typeMatch;
  });

  const eventTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'hackathon', name: 'Hackathons' },
    { id: 'speaker', name: 'Speaker Talks' },
    { id: 'community', name: 'Community Hubs' }
  ];

  return (
    <div className="relative pt-24 pb-16 font-sans">
      {/* Space grid background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ff9900]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff9900]">
          // System Events
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Cloud Event Calendars
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Browse our upcoming bootcamps, hands-on academy sessions, global speaker panels, and past university hackathons.
        </p>
      </section>

      {/* Filter Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#080d24]/50 border border-white/5 p-4 rounded-2xl glass">
          
          {/* Status Tabs */}
          <div className="flex bg-slate-900/60 p-1.5 rounded-xl border border-white/5 w-full md:w-auto">
            {['all', 'upcoming', 'past'].map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status as any)}
                className={`flex-1 md:flex-initial px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeStatus === status
                    ? 'bg-[#ff9900] text-black shadow-md shadow-[#ff9900]/10'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Type dropdown buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id as any)}
                className={`px-4 py-2 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeType === type.id
                    ? 'bg-blue-500/10 border-blue-400 text-blue-400'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-200'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 px-6 glass border border-white/5 rounded-2xl max-w-lg mx-auto space-y-6">
            <Compass className="w-12 h-12 text-[#ff9900] mx-auto animate-spin-slow" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-heading">No Orbit Events Located</h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                {activeStatus === 'upcoming'
                  ? 'We are currently scheduling our next cycle of developer bootcamps and workshops. Connect with us on Meetup to stay updated!'
                  : 'There are no current events matching your filter metrics. Try adjusting filters or check back later!'}
              </p>
            </div>
            {activeStatus === 'upcoming' && (
              <div>
                <a
                  href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#ff9900] hover:bg-amber-500 shadow-md shadow-[#ff9900]/10 transition-all cursor-pointer"
                >
                  Join Our Meetup Hub
                </a>
              </div>
            )}
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => {
                const isUpcoming = event.status === 'upcoming';
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    key={event.id}
                    className="glass rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col group h-full"
                  >
                    {/* Image Poster */}
                    <div className="relative h-48 overflow-hidden bg-black shrink-0">
                      <img
                        src={event.poster}
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050714] to-transparent" />
                      
                      {/* Tag badges */}
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-black bg-[#ff9900] shadow-[0_0_8px_rgba(255,153,0,0.3)]">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                      
                      <span className={`absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border ${
                        isUpcoming 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                          : 'bg-slate-700/20 text-slate-400 border-slate-500/20'
                      }`}>
                        {isUpcoming ? <Hourglass className="w-3 h-3 animate-pulse" /> : <PlayCircle className="w-3 h-3" />}
                        {event.status}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-blue-400 text-xs font-mono font-medium uppercase">
                          <Tag className="w-3.5 h-3.5" />
                          {event.type}
                        </div>
                        
                        <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#ff9900] transition-colors leading-snug">
                          {event.name}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-slate-400 font-sans line-clamp-3 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Footer Details Info */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500 truncate max-w-[140px] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#ff9900] shrink-0" />
                          {event.venue}
                        </span>
                        
                        <Link
                          to={`/events?id=${event.id}`}
                          className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-black bg-white group-hover:bg-[#ff9900] rounded-lg transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                        >
                          Inspect
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
};
