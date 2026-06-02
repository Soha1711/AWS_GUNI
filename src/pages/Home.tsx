import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Server, Cpu, Infinity as LoopIcon, Shield, Cloud, ArrowRight, 
  Users, Calendar, Star, GraduationCap, ChevronRight, MessageSquare 
} from 'lucide-react';
import { EVENTS } from '../data/mockData';
import { Logo } from '../components/ui/Logo';

// Domain details helper
const DOMAINS = [
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: Cloud,
    desc: 'Master the foundation of modern infrastructure: compute, storage, databases, and global networking services.',
    techs: ['Amazon EC2', 'Amazon S3', 'AWS Lambda', 'Amazon RDS', 'Amazon VPC'],
    color: 'border-orange-500/20 hover:border-orange-500/50'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: Cpu,
    desc: 'Build smart systems. Deploy generative models and configure pre-trained neural networks for cognitive services.',
    techs: ['Amazon Bedrock', 'Amazon Q', 'AWS Lex', 'AWS Rekognition'],
    color: 'border-blue-500/20 hover:border-blue-500/50'
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: Star,
    desc: 'Dive into algorithms. Train, optimize, and deploy models from scratch for predictive analysis.',
    techs: ['Amazon SageMaker', 'AWS Trainium', 'AWS Inferentia', 'AutoPilot'],
    color: 'border-purple-500/20 hover:border-purple-500/50'
  },
  {
    id: 'devops',
    title: 'DevOps & GitOps',
    icon: LoopIcon,
    desc: 'Automate containerized software releases. Orchestrate cloud delivery pipelines with continuous integration tools.',
    techs: ['AWS CodePipeline', 'Amazon ECS', 'Amazon EKS', 'AWS CodeBuild'],
    color: 'border-emerald-500/20 hover:border-emerald-500/50'
  },
  {
    id: 'sec',
    title: 'Cybersecurity',
    icon: Shield,
    desc: 'Lock down cloud systems. Secure access directories, encrypt records, and mitigate security threats.',
    techs: ['AWS IAM', 'AWS KMS', 'AWS GuardDuty', 'AWS WAF', 'AWS Shield'],
    color: 'border-red-500/20 hover:border-red-500/50'
  }
];

const TESTIMONIALS = [
  {
    quote: "Being part of GNU's AWS Student Builder Group was a turning point. The hands-on serverless labs helped me clear the AWS Developer Associate exam and land my dream internship at an AWS Partner company.",
    author: "Pratik Patel",
    role: "Core Member, CSE Student (Alumni)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The hackathons and speaker sessions here are top-tier. Getting to build on actual AWS Sandboxes and presenting to real AWS Architects gave me confidence that classroom lectures never could.",
    author: "Dhwani Mehta",
    role: "Winner, SpaceHack 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "As a mentor, it's incredible to see these students tackle complex distributed systems. Ganpat University's AWS SBG provides the ideal launchpad for the next generation of cloud architects.",
    author: "Prof. Sneha Sharma",
    role: "Faculty Mentor, GNU IT Department",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  }
];

const SPONSORS = [
  { name: 'AWS Academy', logo: 'AWS Academy' },
  { name: 'Ganpat University', logo: 'GNU' },
  { name: 'AWS User Group Gujarat', logo: 'AWS UG' },
  { name: 'CSI Student Branch GNU', logo: 'CSI GNU' }
];

export const Home: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState(DOMAINS[0]);
  const [stats, setStats] = useState({ members: 0, events: 0, workshops: 0, certs: 0 });
  
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
          members: Math.min(Math.round((350 / steps) * step), 350),
          events: Math.min(Math.round((18 / steps) * step), 18),
          workshops: Math.min(Math.round((12 / steps) * step), 12),
          certs: Math.min(Math.round((65 / steps) * step), 65)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isStatsInView]);

  const upcomingEvents = EVENTS.filter(e => e.status === 'upcoming').slice(0, 2);

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

      {/* 2. ABOUT OVERVIEW SECTION */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#ff9900] font-mono">
              // Cosmic Nexus
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading leading-tight">
              Fueling Innovation in the Cloud Universe
            </h2>
            <p className="text-slate-400 leading-relaxed font-sans">
              The AWS Student Builder Group at Ganpat University acts as an intellectual bridge, taking abstract theories of technology and applying them directly using AWS enterprise resources. We guide students from zero-knowledge concepts through AWS certification paths, serverless computing labs, and hackathons.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm font-heading">AWS Academy Syllabus</h4>
                  <p className="text-xs text-slate-400 mt-1 font-sans">Curated modules matching AWS certification criteria.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#ff9900]/10 border border-[#ff9900]/20 flex items-center justify-center text-[#ff9900] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm font-heading">Peer Constellations</h4>
                  <p className="text-xs text-slate-400 mt-1 font-sans">Collaborate on team hackathons and cloud projects.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/about" className="text-[#ff9900] hover:text-amber-500 font-semibold inline-flex items-center gap-1.5 transition-colors uppercase text-xs tracking-wider">
                Discover More About Us <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Visual Glass Box */}
            <div className="glass rounded-2xl p-6 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-white font-bold text-lg font-heading mb-4 border-b border-white/5 pb-3 flex items-center justify-between">
                <span>Active study nodes</span>
                <span className="px-2 py-0.5 text-[9px] font-mono bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded">ONLINE</span>
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center hover:bg-white/8 transition-colors">
                  <span className="text-sm text-slate-300 font-sans font-medium">AWS Cloud Practitioner Group</span>
                  <span className="text-xs font-mono text-[#ff9900]">60 Students</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center hover:bg-white/8 transition-colors">
                  <span className="text-sm text-slate-300 font-sans font-medium">GenAI Bedrock Incubator</span>
                  <span className="text-xs font-mono text-blue-400">35 Students</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center hover:bg-white/8 transition-colors">
                  <span className="text-sm text-slate-300 font-sans font-medium">Serverless DevOps pipelines</span>
                  <span className="text-xs font-mono text-purple-400">45 Students</span>
                </div>
              </div>

              {/* Decorative nodes */}
              <div className="mt-6 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>GNU CLOUD HOSTED</span>
                <span>PING: 24ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC DOMAINS SECTION */}
      <section className="py-20 relative bg-[#080c20]/45 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff9900] font-mono">// Technical Spheres</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Interactive Builder Domains
            </h2>
            <p className="text-slate-400 font-sans">
              Click on a domain sector below to inspect the focal points, learning tracks, and associated cloud-native AWS technologies we build with.
            </p>
          </div>

          {/* Interactive Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Domain buttons (Left Column) */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none shrink-0">
              {DOMAINS.map((domain) => {
                const IconComp = domain.icon;
                const isSelected = activeDomain.id === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setActiveDomain(domain)}
                    className={`w-full text-left px-5 py-4 rounded-xl border flex items-center gap-4 transition-all duration-300 cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                      isSelected
                        ? 'bg-[#ff9900]/10 border-[#ff9900] text-white shadow-[0_0_15px_rgba(255,153,0,0.1)]'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-200'
                    }`}
                  >
                    <IconComp className={`w-5 h-5 ${isSelected ? 'text-[#ff9900]' : 'text-slate-500'}`} />
                    <span className="font-semibold text-sm sm:text-base font-heading">
                      {domain.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Domain details viewer (Right Column) */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="h-full glass rounded-2xl p-8 border border-white/10 flex flex-col justify-between shadow-2xl relative"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#ff9900]/10 flex items-center justify-center text-[#ff9900]">
                      <activeDomain.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {activeDomain.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 leading-relaxed font-sans text-base">
                    {activeDomain.desc}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono text-[#ff9900]">
                      Core Service Ecosystem
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {activeDomain.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs bg-slate-900 border border-white/5 text-slate-300 rounded-lg hover:border-[#ff9900]/30 transition-all font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-slate-500">
                  <span>GNU STUDENT BUILDER RESOURCE NODE</span>
                  <Link to="/about" className="text-[#ff9900] hover:underline flex items-center gap-1">
                    View roadmap <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS COUNTER SECTION */}
      <section ref={statsRef} className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="glass p-6 rounded-2xl border border-white/5 text-center shadow-lg hover:border-blue-500/20 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-blue-400 font-mono mb-2">
              {stats.members}+
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-medium">
              Registered Members
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl border border-white/5 text-center shadow-lg hover:border-[#ff9900]/20 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-[#ff9900] font-mono mb-2">
              {stats.events}+
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-medium">
              Events Conducted
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5 text-center shadow-lg hover:border-purple-500/20 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-purple-400 font-mono mb-2">
              {stats.workshops}+
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-medium">
              Hands-On Workshops
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5 text-center shadow-lg hover:border-emerald-500/20 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400 font-mono mb-2">
              {stats.certs}+
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-medium">
              AWS Certifications
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
                    <Calendar className="w-3 h-3" />
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
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff9900] font-mono">// Testimonial Signals</span>
          <h2 className="text-3xl font-bold text-white font-heading">
            Voices from the Constellation
          </h2>
          <p className="text-slate-400 font-sans">
            Hear from our student leaders, certification achievers, and faculty coordinators on how SBG impacted their learning orbit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xl relative">
              <div className="absolute -top-4 -left-2 text-6xl text-[#ff9900]/10 font-serif pointer-events-none select-none">“</div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-sans italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/5 mt-6 shrink-0">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-white text-sm font-semibold font-heading">{t.author}</h4>
                  <p className="text-[10px] text-blue-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SPONSORS & PARTNERS */}
      <section className="py-16 relative bg-[#040612] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">
            Co-aligned Institutes & Supporters
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {SPONSORS.map((s, idx) => (
              <span
                key={idx}
                className="text-lg sm:text-xl font-extrabold text-slate-500 tracking-wider hover:text-slate-300 hover:text-glow transition-all duration-300 uppercase select-none cursor-default font-heading"
              >
                {s.logo}
              </span>
            ))}
          </div>
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
