import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, Users, Calendar, ChevronRight, MessageSquare 
} from 'lucide-react';
import { EVENTS } from '../data/mockData';
import { Logo } from '../components/ui/Logo';
import CircuitBentoGrid from '../components/ui/CircuitBentoGrid';
import TextType from '../components/ui/TextType';
import { useMeetupData } from '../utils/meetup';
import ShapeGrid from '../components/ui/ShapeGrid';
import { EventsSection } from '../components/ui/EventsSection';





const MARQUEE_ITEMS = [
  { title: "Cloud Practitioner Essentials Bootcamp", category: "Workshop", image: "/gallery/workshop1.png" },
  { title: "Hands-on EC2 & S3 Sandbox Labs", category: "Lab Session", image: "/gallery/workshop2.png" },
  { title: "Serverless GenAI Keynote with AWS Bedrock", category: "Expert Talk", image: "/gallery/speaker1.png" },
  { title: "Interactive Q&A Session", category: "Q&A", image: "/gallery/speaker2.png" },
  { title: "AWS Student Builder Group Kickoff", category: "Community", image: "/gallery/community1.jpeg" },
  { title: "Community Icebreakers & Trivia Winners", category: "Trivia", image: "/gallery/community2.png" }
];

// Typewriter effect custom hook
export const Home: React.FC = () => {
  const { memberCount, pastEvents, upcomingEvents: liveUpcomingEvents, isLive } = useMeetupData();
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
          events: Math.min(Math.round((3 / steps) * step), 3)
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
    const meetupId = e.id === 'event-1' ? '314906294' : (e.id === 'event-2' ? '313855270' : (e.id === 'event-upcoming-1' ? '315424216' : null));
    const liveEvent = [...(pastEvents || []), ...(liveUpcomingEvents || [])].find((pe: any) => pe.id === meetupId);
    return {
      ...e,
      attendeeCount: liveEvent ? liveEvent.going : (e.id === 'event-1' ? 221 : e.id === 'event-2' ? 675 : (e.id === 'event-upcoming-1' ? 232 : 0))
    };
  });

  const upcomingEvents = mergedEvents.filter(e => e.status === 'upcoming').slice(0, 2);
  const pastEventsList = mergedEvents.filter(e => e.status === 'past').slice(0, 2);

  return (
    <div className="relative pt-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92svh] flex items-center justify-center px-4">

        {/* Cubes interactive background -- breaks out of max-w container to fill full viewport */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden'
        }}>
          <ShapeGrid 
            speed={0.54}
            squareSize={40}
            direction='diagonal'
            borderColor="#403750"
            hoverFillColor='#7C3AED'
            shape='square'
            hoverTrailAmount={1}
          />
        </div>

        {/* Vignette — fades dot field into page bg at edges */}
        <div
          className="absolute pointer-events-none"
          style={{ zIndex: 1, top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '100%', background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 35%, #030303 100%)' }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#a855f7]/5 blur-[120px] pointer-events-none animate-pulse" style={{ zIndex: 1 }} />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#d946ef]/5 blur-[120px] pointer-events-none animate-pulse" style={{ zIndex: 1 }} />
        <div className="max-w-5xl mx-auto text-center z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <Logo size={76} className="mx-auto select-none" />
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.1] pb-2 text-glow whitespace-pre-wrap"
          >
            <TextType 
              text={"AWS\nStudent Builder Group\nGanpat University"}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              cursorCharacter="|"
              deletingSpeed={60}
              variableSpeedEnabled={true}
              variableSpeedMin={50}
              loop={false}
            />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300 font-medium font-body leading-relaxed mb-10 tracking-wide text-center"
          >
            A platform to learn, build, and innovate with the power of AWS Cloud. Connecting students with hands-on learning, innovation, and real-world opportunities.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm text-white bg-[#a855f7] hover:bg-purple-600 shadow-lg shadow-[#a855f7]/20 hover:shadow-[#a855f7]/40 transition-all text-center"
            >
              Join Community
            </a>
            <Link
              to="/events"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm text-white bg-white/5 border border-white/10 hover:border-[#a855f7] hover:text-[#a855f7] hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
            >
              Explore Events
              <ArrowRight className="w-4 h-4 text-[#a855f7]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SCROLLING MARQUEE (SIGNAL RAIL) */}
      <section className="py-6 border-y border-white/5 bg-[#040408]/60 overflow-hidden relative group/marquee select-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee gap-6 flex">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] sm:w-[320px] glass p-3 rounded-2xl border border-white/5 flex flex-col gap-3 group/item hover:border-[#a855f7]/30 transition-all duration-300"
            >
              <div className="h-40 w-full overflow-hidden rounded-xl bg-slate-900 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500 opacity-90"
                />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#a855f7] text-white rounded-full">
                  {item.category}
                </span>
              </div>
              <div>
                <h4 className="text-white font-heading text-sm font-semibold tracking-wide truncate group-hover/item:text-[#d946ef] transition-colors duration-300">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>





      {/* 4. STATISTICS COUNTER SECTION */}
      <section ref={statsRef} className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
          <div className="glass p-6 rounded-2xl border border-white/5 text-center shadow-lg hover:border-[#a855f7]/20 transition-all relative">
            {isLive && (
              <span className="absolute top-3 right-3 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}
            <div className="text-3xl sm:text-5xl font-extrabold text-[#a855f7] font-mono mb-2">
              {stats.members}+
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-medium flex items-center justify-center gap-1.5">
              Registered Members
              {isLive && <span className="text-[10px] text-emerald-400 font-mono font-bold lowercase tracking-normal">(live)</span>}
            </div>
          </div>
        </div>
      </section>

      {/* 5. UPCOMING EVENTS PREVIEW */}
      <EventsSection events={upcomingEvents} />

      {/* SCROLL-DRIVEN CIRCUIT BENTO GRID */}
      <CircuitBentoGrid />

      {/* 6. PAST EVENTS HIGHLIGHTS */}
      {pastEventsList.length > 0 && upcomingEvents.length === 0 && (
        <section className="py-20 bg-[#060814]/45 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Recent Cloud Gatherings
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pastEventsList.map((event) => (
                      <div key={event.id} className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col group h-full">
                        <div className="relative h-48 overflow-hidden bg-black shrink-0">
                          <img
                            src={event.poster}
                            alt={event.name}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/60 to-transparent" />
                          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-black bg-[#ffaa00] shadow-[0_0_8px_rgba(255,170,0,0.3)]">
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
                              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                                {event.type === 'speaker' ? 'Online Seminar' : 'In-Person Workshop'}
                              </span>
                              {event.attendeeCount !== undefined && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-sans">
                                  <Users className="w-3.5 h-3.5" />
                                  {event.attendeeCount} Members Joined
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00f5ff] transition-colors leading-snug">
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
                              className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-black bg-white group-hover:bg-[#00f5ff] rounded-lg transition-colors flex items-center gap-1 shrink-0 font-sans cursor-pointer"
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
        </section>
      )}




      {/* 8. CALL TO ACTION SECTION */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-cyan-950/10 via-[#0a0d24]/50 to-[#ffaa00]/5 border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#ffaa00]/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-6">
          <MessageSquare className="w-12 h-12 text-[#00f5ff] mx-auto animate-bounce text-glow-blue" />
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading">
            Connect With Our Community
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Expand your cloud horizon. Join study circles, collaborate on open-source code repositories, get sponsored for certifications, and build real-world systems.
          </p>
          <div className="pt-4">
            <a
              href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm text-black bg-[#ffaa00] hover:bg-amber-400 shadow-xl shadow-[#ffaa00]/25 hover:shadow-[#ffaa00]/45 transition-all"
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
