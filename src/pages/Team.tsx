import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon } from '../components/ui/SocialIcons';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  photo: string;
  linkedin: string;
  github?: string;
  team: string;
}

// Complete data list for all 20 members across 7 sub-teams
const teamMembers: TeamMember[] = [
  // Developer Team
  {
    id: 'dev-yashas',
    name: 'Yashas Raj R',
    role: 'Project Lead',
    tagline: 'Leading the development and research of the Pneumonia Detection System.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    team: 'Developer Team'
  },
  {
    id: 'dev-soha',
    name: 'Soha Jethva',
    role: 'Backend Developer',
    tagline: 'Designing robust database models and scalable cloud infrastructure workflows.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    team: 'Developer Team'
  },
  // PR Team
  {
    id: 'pr-hetvi',
    name: 'Hetvi Dedania',
    role: 'PR Lead',
    tagline: 'Connecting our technical builders with industry leaders and campus events.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'PR Team'
  },
  {
    id: 'pr-anshika',
    name: 'Anshika Tiwari',
    role: 'PR Coordinator',
    tagline: 'Building student engagement and public communication pathways.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'PR Team'
  },
  {
    id: 'pr-hiya',
    name: 'Hiya VipulKumar',
    role: 'Outreach Manager',
    tagline: 'Promoting peer-to-peer cloud learning initiatives across Ganpat University.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'PR Team'
  },
  {
    id: 'pr-dhruv',
    name: 'Dhruv Mehta',
    role: 'PR Executive',
    tagline: 'Fostering digital community building and outreach campaigns.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    team: 'PR Team'
  },
  // Media Team
  {
    id: 'med-mayank',
    name: 'Mayank Tarane',
    role: 'Media Lead',
    tagline: 'Directing the community highlights and professional photography coverage.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Media Team'
  },
  {
    id: 'med-aditya',
    name: 'Aditya Pandya',
    role: 'Video Editor',
    tagline: 'Editing dynamic video content and community boot camp showcases.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Media Team'
  },
  {
    id: 'med-shanvi',
    name: 'Shanvi Sinha',
    role: 'Media Specialist',
    tagline: 'Managing creative event documentation and real-time capture.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Media Team'
  },
  // Creative Team
  {
    id: 'cr-aadyasha',
    name: 'Aadyasha Swar',
    role: 'Creative Lead',
    tagline: 'Curating modern UI aesthetics and community visual styles.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Creative Team'
  },
  {
    id: 'cr-anshu',
    name: 'Anshu Singh',
    role: 'Graphic Designer',
    tagline: 'Designing visual interfaces, assets, and sleek event promotions.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    team: 'Creative Team'
  },
  {
    id: 'cr-heer',
    name: 'Heer Patel',
    role: 'UI Designer',
    tagline: 'Crafting responsive user experiences for our web platforms.',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Creative Team'
  },
  // Event Management Team
  {
    id: 'ev-diksha',
    name: 'Diksha Jayesh',
    role: 'Operations Head',
    tagline: 'Coordinating high-impact offline cloud events and speaker workshops.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Event Management Team'
  },
  {
    id: 'ev-varun',
    name: 'Varun Vishwakarma',
    role: 'Logistics Lead',
    tagline: 'Managing on-site operations, registrations, and venue layouts.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Event Management Team'
  },
  {
    id: 'ev-ashish',
    name: 'Ashish Mourya',
    role: 'Event Executive',
    tagline: 'Supervising student participant flows and sandbox logistics.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Event Management Team'
  },
  {
    id: 'ev-prajapati',
    name: 'Prajapati Ar...',
    role: 'Support Lead',
    tagline: 'Providing general on-site organization and query support.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Event Management Team'
  },
  // Documentation Team
  {
    id: 'doc-vansh',
    name: 'Patel Vansh',
    role: 'Documentation Lead',
    tagline: 'Authoring community project blueprints, agendas, and logs.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    team: 'Documentation Team'
  },
  {
    id: 'doc-krina',
    name: 'Krina Koshti',
    role: 'Content Writer',
    tagline: 'Drafting clear technical descriptions, emails, and announcements.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    team: 'Documentation Team'
  },
  // Technical Team
  {
    id: 'tech-ranjit',
    name: 'Pan Ranjit Ram',
    role: 'Cloud Architect',
    tagline: 'Deploying secure AWS serverless backend services and API gateways.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    team: 'Technical Team'
  },
  {
    id: 'tech-man',
    name: 'Man Patel',
    role: 'DevOps Engineer',
    tagline: 'Automating standard CI/CD deployment pipelines using AWS CodePipeline.',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    team: 'Technical Team'
  }
];

// Preserved exact ordering for display
const TEAM_ORDER = [
  'Developer Team',
  'PR Team',
  'Media Team',
  'Creative Team',
  'Event Management Team',
  'Documentation Team',
  'Technical Team'
];

// Aesthetic style variables for each team domain to ensure custom neon shadow colors
const TEAM_STYLES: Record<string, { glowColor: string; borderColor: string; accentText: string; badgeBg: string }> = {
  'Developer Team': {
    glowColor: 'rgba(6, 182, 212, 0.3)',
    borderColor: 'rgba(6, 182, 212, 0.25)',
    accentText: '#00f5ff',
    badgeBg: 'rgba(6, 182, 212, 0.12)'
  },
  'PR Team': {
    glowColor: 'rgba(255, 170, 0, 0.3)',
    borderColor: 'rgba(255, 170, 0, 0.25)',
    accentText: '#ffaa00',
    badgeBg: 'rgba(255, 170, 0, 0.12)'
  },
  'Media Team': {
    glowColor: 'rgba(14, 165, 233, 0.3)',
    borderColor: 'rgba(14, 165, 233, 0.25)',
    accentText: '#38bdf8',
    badgeBg: 'rgba(14, 165, 233, 0.12)'
  },
  'Creative Team': {
    glowColor: 'rgba(20, 184, 166, 0.3)',
    borderColor: 'rgba(20, 184, 166, 0.25)',
    accentText: '#14b8a6',
    badgeBg: 'rgba(20, 184, 166, 0.12)'
  },
  'Event Management Team': {
    glowColor: 'rgba(245, 158, 11, 0.3)',
    borderColor: 'rgba(245, 158, 11, 0.25)',
    accentText: '#f59e0b',
    badgeBg: 'rgba(245, 158, 11, 0.12)'
  },
  'Documentation Team': {
    glowColor: 'rgba(148, 163, 184, 0.3)',
    borderColor: 'rgba(148, 163, 184, 0.25)',
    accentText: '#94a3b8',
    badgeBg: 'rgba(148, 163, 184, 0.12)'
  },
  'Technical Team': {
    glowColor: 'rgba(249, 115, 22, 0.3)',
    borderColor: 'rgba(249, 115, 22, 0.25)',
    accentText: '#f97316',
    badgeBg: 'rgba(249, 115, 22, 0.12)'
  }
};

const TEAM_CODENAMES: Record<string, string> = {
  'Developer Team': 'SYSTEMS ENGINEERING STATION',
  'PR Team': 'COMMUNICATIONS NETWORK STATION',
  'Media Team': 'VISUAL TRANSMISSION STATION',
  'Creative Team': 'AESTHETICS & GRAPHICS CONSOLE',
  'Event Management Team': 'MISSION LOGISTICS RADAR',
  'Documentation Team': 'MISSION ARCHIVE & LOGS',
  'Technical Team': 'PROPULSION DRIVE DIVISION'
};

export const Team: React.FC = () => {
  // Dynamically group all members by their respective team prior to rendering
  const groupedMembers = React.useMemo(() => {
    return TEAM_ORDER.reduce<Record<string, TeamMember[]>>((acc, teamName) => {
      acc[teamName] = teamMembers.filter((m) => m.team === teamName);
      return acc;
    }, {});
  }, []);

  // Framer Motion variants for member card rendering
  const cardVariants = (glowColor: string, borderColor: string) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    hover: { 
      y: -10, 
      scale: 1.03,
      boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 35px ${glowColor}`,
      borderColor: borderColor,
      transition: { 
        duration: 0.35, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  });

  const imageVariants = {
    hidden: { scale: 1 },
    visible: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="relative pt-24 pb-16 font-sans min-h-[90vh] overflow-hidden">
      {/* Background ambient space glow */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-[#00f5ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[300px] h-[300px] bg-[#ffaa00]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Section Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f5ff] text-glow-blue">
          [MISSION ROSTER // GUNI CREW DIRECTORY]
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight">
          Our Team
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base font-medium">
          Meet the builders, leaders, and Eridian-inspired technicians driving peer-to-peer cloud engineering at Ganpat University.
        </p>
      </section>

      {/* Club Officers & Faculty Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-10 w-full max-w-xl justify-center">
          <div className="h-[1px] flex-1 bg-gradient-to-l from-[#ffaa00]/20 to-transparent" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#ffaa00] text-glow" />
            Club Officers & Faculty
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#ffaa00]/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-center">
          {/* Card 1: Faculty Coordinator */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants('rgba(6, 182, 212, 0.35)', 'rgba(6, 182, 212, 0.25)')}
            className="w-full cursor-pointer h-full"
          >
            {/* Glassmorphic Card Container */}
            <div 
              className="p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden group h-full radar-sweep-indicator"
              style={{
                borderRadius: "24px",
                background: "rgba(10, 11, 20, 0.65)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Ambient teal light glow behind card */}
              <div 
                className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[80px] opacity-25 pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:opacity-45"
                style={{ background: "#00f5ff" }}
              />

              {/* Profile Photo frame */}
              <div 
                className="w-32 h-32 rounded-full overflow-hidden border-3 mb-6 relative bg-slate-900 shadow-md transition-all duration-300 border-[#00f5ff]/30 group-hover:border-[#00f5ff]/70"
              >
                <motion.img
                  variants={imageVariants}
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                  alt="Dr. Amit Patel"
                  className="w-full h-full object-cover origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/40 to-transparent pointer-events-none" />
              </div>

              {/* Full Name & Role */}
              <h3 className="text-2xl font-bold text-white font-heading leading-snug mb-1 tracking-tight">
                Dr. Amit Patel
              </h3>

              <span 
                className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block text-[#00f5ff] px-3 py-1 bg-[#00f5ff]/10 rounded-full animate-pulse"
              >
                Faculty Coordinator [MISSION CONTROL]
              </span>

              {/* Dossier details */}
              <div className="font-mono text-[10px] text-cyan-400/80 mb-4 tracking-wider uppercase border border-cyan-500/10 bg-cyan-950/10 px-3 py-1.5 rounded-lg w-full max-w-[285px]">
                DECK: COGNITIVE CORE // STATUS: STABLE // ID: FACULTY-COORD
              </div>

              {/* Tagline */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm font-sans font-medium">
                Championing academic cloud innovation and bridging the gap between classroom theory and industry standard cloud architecture.
              </p>

              {/* Social Action buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 w-full justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/5 hover:border-[#00f5ff] hover:text-[#00f5ff] text-slate-400 bg-white/5 hover:bg-[#00f5ff]/10 transition-all duration-300 cursor-pointer"
                  title="Dr. Amit Patel's LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/5 hover:border-[#ffaa00] hover:text-[#ffaa00] text-slate-400 bg-white/5 hover:bg-[#ffaa00]/10 transition-all duration-300 cursor-pointer"
                  title="Dr. Amit Patel's GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Club Captain */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants('rgba(255, 170, 0, 0.35)', 'rgba(255, 170, 0, 0.25)')}
            className="w-full cursor-pointer h-full"
          >
            {/* Glassmorphic Card Container */}
            <div 
              className="p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden group h-full radar-sweep-indicator"
              style={{
                borderRadius: "24px",
                background: "rgba(10, 11, 20, 0.65)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 170, 0, 0.2)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Ambient gold light glow behind card */}
              <div 
                className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[80px] opacity-25 pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:opacity-45"
                style={{ background: "#ffaa00" }}
              />

              {/* Profile Photo frame */}
              <div 
                className="w-32 h-32 rounded-full overflow-hidden border-3 mb-6 relative bg-slate-900 shadow-md transition-all duration-300 border-[#ffaa00]/30 group-hover:border-[#ffaa00]/70"
              >
                <motion.img
                  variants={imageVariants}
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
                  alt="Harshil Maniyar"
                  className="w-full h-full object-cover origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/40 to-transparent pointer-events-none" />
              </div>

              {/* Full Name & Role */}
              <h3 className="text-2xl font-bold text-white font-heading leading-snug mb-1 tracking-tight">
                Harshil Maniyar
              </h3>

              <span 
                className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block text-[#ffaa00] px-3 py-1 bg-[#ffaa00]/10 rounded-full animate-pulse"
              >
                Club Captain [COMMAND DECK]
              </span>

              {/* Dossier details */}
              <div className="font-mono text-[10px] text-cyan-400/80 mb-4 tracking-wider uppercase border border-cyan-500/10 bg-cyan-950/10 px-3 py-1.5 rounded-lg w-full max-w-[285px]">
                DECK: MAIN CONSOLE // STATUS: STABLE // ID: COMMANDER-01
              </div>

              {/* Tagline */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm font-sans font-medium">
                Guiding the AWS Student Builder Group at Ganpat University to inspire next-generation cloud builders and technical innovators.
              </p>

              {/* Social Action buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 w-full justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/5 hover:border-[#00f5ff] hover:text-[#00f5ff] text-slate-400 bg-white/5 hover:bg-[#00f5ff]/10 transition-all duration-300 cursor-pointer"
                  title="Harshil Maniyar's LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/5 hover:border-[#ffaa00] hover:text-[#ffaa00] text-slate-400 bg-white/5 hover:bg-[#ffaa00]/10 transition-all duration-300 cursor-pointer"
                  title="Harshil Maniyar's GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Club Adviser */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants('rgba(6, 182, 212, 0.35)', 'rgba(6, 182, 212, 0.25)')}
            className="w-full cursor-pointer h-full"
          >
            {/* Glassmorphic Card Container */}
            <div 
              className="p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden group h-full radar-sweep-indicator"
              style={{
                borderRadius: "24px",
                background: "rgba(10, 11, 20, 0.65)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Ambient teal light glow behind card */}
              <div 
                className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[80px] opacity-25 pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:opacity-45"
                style={{ background: "#00f5ff" }}
              />

              {/* Profile Photo frame */}
              <div 
                className="w-32 h-32 rounded-full overflow-hidden border-3 mb-6 relative bg-slate-900 shadow-md transition-all duration-300 border-[#00f5ff]/30 group-hover:border-[#00f5ff]/70"
              >
                <motion.img
                  variants={imageVariants}
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Prof. Sneha Sharma"
                  className="w-full h-full object-cover origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/40 to-transparent pointer-events-none" />
              </div>

              {/* Full Name & Role */}
              <h3 className="text-2xl font-bold text-white font-heading leading-snug mb-1 tracking-tight">
                Prof. Sneha Sharma
              </h3>

              <span 
                className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block text-[#00f5ff] px-3 py-1 bg-[#00f5ff]/10 rounded-full animate-pulse"
              >
                Club Adviser [GUIDANCE DECK]
              </span>

              {/* Dossier details */}
              <div className="font-mono text-[10px] text-cyan-400/80 mb-4 tracking-wider uppercase border border-cyan-500/10 bg-cyan-950/10 px-3 py-1.5 rounded-lg w-full max-w-[285px]">
                DECK: ADVISORY CONSOLE // STATUS: ACTIVE // ID: ADVISER-01
              </div>

              {/* Tagline */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm font-sans font-medium">
                Guiding student cloud builders through advanced architectural principles, cloud roadmaps, and career development initiatives.
              </p>

              {/* Social Action buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 w-full justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/5 hover:border-[#00f5ff] hover:text-[#00f5ff] text-slate-400 bg-white/5 hover:bg-[#00f5ff]/10 transition-all duration-300 cursor-pointer"
                  title="Prof. Sneha Sharma's LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sub-Teams Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {TEAM_ORDER.map((teamName) => {
          const members = groupedMembers[teamName] || [];
          const style = TEAM_STYLES[teamName];

          if (members.length === 0) return null;

          return (
            <div key={teamName} className="space-y-8">
              {/* Team Heading & Divider */}
              <div className="flex items-center gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
                  <span className="w-1.5 h-7 rounded-full" style={{ backgroundColor: style.accentText }} />
                  {teamName}
                  <span className="text-xs font-mono font-normal tracking-widest text-slate-500 uppercase ml-2 hidden sm:inline select-none">
                    // {TEAM_CODENAMES[teamName]}
                  </span>
                </h2>
                <span 
                  className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full"
                  style={{ color: style.accentText, backgroundColor: style.badgeBg }}
                >
                  {members.length} {members.length === 1 ? 'Crew' : 'Crew'}
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              {/* Grid Layout (Desktop: 4, Laptop: 3, Tablet: 2, Mobile: 1) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {members.map((member) => (
                  <motion.div
                    key={member.id}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={cardVariants(style.glowColor, style.borderColor)}
                    className="h-full cursor-pointer"
                  >
                    {/* Glassmorphic Card Container */}
                    <div 
                      className="p-6 h-full flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
                      style={{
                        borderRadius: "24px",
                        background: "rgba(10, 11, 20, 0.65)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)"
                      }}
                    >
                      {/* Ambient light glow behind card */}
                      <div 
                        className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[80px] opacity-20 pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:opacity-35"
                        style={{ background: style.accentText }}
                      />

                      <div>
                        {/* Profile Photo frame */}
                        <div 
                          className="w-24 h-24 rounded-full overflow-hidden border-2 mb-6 relative bg-slate-900 shadow-md transition-all duration-300"
                          style={{ borderColor: style.borderColor }}
                        >
                          <motion.img
                            variants={imageVariants}
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover origin-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Full Name & Role */}
                        <h3 className="text-xl font-bold text-white font-heading leading-snug mb-1 tracking-tight">
                          {member.name}
                        </h3>

                        <span 
                          className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block"
                          style={{ color: style.accentText }}
                        >
                          {member.role}
                        </span>

                        {/* Tagline */}
                        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium font-sans">
                          {member.tagline}
                        </p>
                      </div>

                      {/* Dossier footer tag */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <div className="flex items-center gap-3">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl border border-white/5 hover:border-[#00f5ff] hover:text-[#00f5ff] text-slate-400 bg-white/5 hover:bg-[#00f5ff]/10 transition-all duration-300 cursor-pointer"
                            title={`${member.name}'s LinkedIn`}
                          >
                            <LinkedinIcon className="w-4 h-4" />
                          </a>

                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-xl border border-white/5 hover:border-[#ffaa00] hover:text-[#ffaa00] text-slate-400 bg-white/5 hover:bg-[#ffaa00]/10 transition-all duration-300 cursor-pointer"
                              title={`${member.name}'s GitHub`}
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        
                        <span className="font-mono text-[9px] text-slate-600 select-none">
                          [ID: {member.id.toUpperCase()}]
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
