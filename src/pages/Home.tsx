import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Server, ArrowRight, 
  Users, Calendar, ChevronRight, MessageSquare 
} from 'lucide-react';
import { EVENTS } from '../data/mockData';
import { Logo } from '../components/ui/Logo';
import { useMeetupData } from '../utils/meetup';







export const Home: React.FC = () => {
  const { memberCount, pastEvents, isLive } = useMeetupData();
  const [stats, setStats] = useState({ members: 0, events: 0 });
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setStats({
          members: Math.min(Math.round((memberCount / steps) * step), memberCount),
          events: Math.min(Math.round((2 / steps) * step), 2)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isStatsInView, memberCount]);

  // Merge live attendee/rsvp count into static EVENTS data
  const mergedEvents = EVENTS.map(e => {
    const meetupId = e.id === 'event-1' ? '314906294' : e.id === 'event-2' ? '313855270' : null;
    const liveEvent = pastEvents.find(pe => pe.id === meetupId);
    return {
      ...e,
      attendeeCount: liveEvent ? liveEvent.going : (e.id === 'event-1' ? 221 : e.id === 'event-2' ? 675 : 0)
    };
  });

  const upcomingEvents = mergedEvents.filter(e => e.status === 'upcoming').slice(0, 2);
  const pastEventsList = mergedEvents.filter(e => e.status === 'past').slice(0, 2);

  return (
    <div className="relative pt-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92svh] flex items-center justify-center overflow-hidden px-4">
        {/* Glow overlay */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#ff9900]/10 blur-[120px] pointer-events-none animate-pulse" />

        <div className="max-w-5xl mx-auto text-center z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <Logo size={76} className="mx-auto select-none" />
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff9900]/25 bg-[#ff9900]/5 text-[#ff9900] text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(255,153,0,0.06)]">
              <Server className="w-3.5 h-3.5 animate-spin-slow" />
              Vanguard Cloud Community at GNU
            </div>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-heading"
          >
            AWS Student Builder Group <br />
            <span className="bg-gradient-to-r from-[#ff9900] via-amber-400 to-blue-400 bg-clip-text text-transparent text-glow">
              Ganpat University
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-sans leading-relaxed"
          >
            "Connecting Innovators Like Stars in a Constellation." Build cloud-native solutions, study serverless architectures, and light up the tech universe together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm text-black bg-[#ff9900] hover:bg-amber-500 shadow-lg shadow-[#ff9900]/20 hover:shadow-[#ff9900]/40 transition-all text-center"
            >
              Join Community
            </a>
            <Link
              to="/events"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm text-white bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
            >
              Explore Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. STATISTICS COUNTER SECTION */}
      <section ref={statsRef} className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="glass p-6 rounded-2xl border border-white/5 text-center shadow-lg hover:border-blue-500/20 transition-all relative">
            {isLive && (
              <span className="absolute top-3 right-3 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}
            <div className="text-3xl sm:text-5xl font-extrabold text-blue-400 font-mono mb-2">
              {stats.members}+
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-medium flex items-center justify-center gap-1.5">
              Registered Members
              {isLive && <span className="text-[10px] text-emerald-400 font-mono font-bold lowercase tracking-normal">(live)</span>}
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl border border-white/5 text-center shadow-lg hover:border-[#ff9900]/20 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-[#ff9900] font-mono mb-2">
              {stats.events}
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-medium">
              Events Conducted
            </div>
          </div>
        </div>
      </section>

      {/* 5. UPCOMING EVENTS PREVIEW */}
      <section className="py-20 relative bg-[#080c20]/45 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff9900] font-mono">// Event Radar</span>
              <h2 className="text-3xl font-bold text-white font-heading">
                Upcoming Constellations
              </h2>
            </div>
            <Link
              to="/events"
              className="px-5 py-2.5 rounded-xl border border-white/10 hover:border-blue-400 text-sm font-semibold uppercase tracking-wider transition-all bg-white/5 flex items-center gap-2"
            >
              All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col group">
                  <div className="relative h-56 overflow-hidden bg-black shrink-0">
                    <img
                      src={event.poster}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050714] to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-black bg-[#ff9900] shadow-[0_0_10px_#ff9900]/40">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-[#ff9900] transition-colors leading-snug">
                        {event.name}
                      </h3>
                      <p className="text-sm text-slate-400 font-sans line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
                        {event.venue}
                      </span>
                      <Link
                        to={`/events?id=${event.id}`}
                        className="px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white group-hover:bg-[#ff9900] rounded-lg transition-colors flex items-center gap-1 shrink-0"
                      >
                        Inspect
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {/* Fallback info when no upcoming events */}
              <div className="glass rounded-2xl p-8 sm:p-12 border border-white/5 text-center max-w-xl mx-auto space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#ff9900]/10 border border-[#ff9900]/25 flex items-center justify-center mx-auto text-[#ff9900]">
                  <Calendar className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-heading">
                    No Upcoming Events Planned
                  </h3>
                  <p className="text-sm text-slate-400 font-sans leading-relaxed">
                    We are currently planning our next cohort of hands-on cloud labs and speaker webinars. Join our Meetup Hub to be notified instantly as soon as new schedules release!
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-black bg-[#ff9900] hover:bg-amber-500 shadow-md shadow-[#ff9900]/20 hover:scale-101 transition-all cursor-pointer font-sans"
                  >
                    Join Our Meetup Hub
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Past events highlights */}
              {pastEventsList.length > 0 && (
                <div className="space-y-8">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white font-heading">
                      Recent Cloud Gatherings
                    </h3>
                    <p className="text-sm text-slate-400 font-sans max-w-lg mx-auto">
                      Check out attendance metrics and summaries of our recent campus sessions and webinars.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pastEventsList.map((event) => (
                      <div key={event.id} className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col group h-full">
                        <div className="relative h-48 overflow-hidden bg-black shrink-0">
                          <img
                            src={event.poster}
                            alt={event.name}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-75"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050714] to-transparent" />
                          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-black bg-[#ff9900] shadow-[0_0_8px_rgba(255,153,0,0.3)]">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </span>
                          <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border bg-slate-700/20 text-slate-400 border-slate-500/20">
                            PAST EVENT
                          </span>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                                {event.type === 'speaker' ? 'Online Seminar' : 'In-Person Workshop'}
                              </span>
                              {event.attendeeCount !== undefined && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-sans">
                                  <Users className="w-3.5 h-3.5" />
                                  {event.attendeeCount} Members Joined
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#ff9900] transition-colors leading-snug">
                              {event.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-400 font-sans line-clamp-3 leading-relaxed">
                              {event.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-[10px] font-mono text-slate-500 truncate max-w-[180px]">
                              {event.venue}
                            </span>
                            <Link
                              to={`/events?id=${event.id}`}
                              className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-black bg-white group-hover:bg-[#ff9900] rounded-lg transition-colors flex items-center gap-1 shrink-0 font-sans cursor-pointer"
                            >
                              Inspect Details
                              <ChevronRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>





      {/* 8. CALL TO ACTION SECTION */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-blue-950/20 via-[#0a0d24]/50 to-[#ff9900]/5 border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#ff9900]/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-6">
          <MessageSquare className="w-12 h-12 text-[#ff9900] mx-auto animate-bounce" />
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading">
            Connect Your Star to Our Network
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Expand your cloud horizon. Join study circles, collaborate on open-source code repositories, get sponsored for certifications, and build real-world systems.
          </p>
          <div className="pt-4">
            <a
              href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm text-black bg-[#ff9900] hover:bg-amber-500 shadow-xl shadow-[#ff9900]/20 hover:shadow-[#ff9900]/45 transition-all"
            >
              Join Meetup Hub
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
