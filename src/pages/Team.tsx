import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon } from '../components/ui/SocialIcons';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  photo: string;
  linkedin: string;
  team: string;
}

// Complete data list for all 20 members across 7 sub-teams
const teamMembers: TeamMember[] = [
  // Developer Team
  {
    id: 'dev-yashas',
    name: 'Yashas Raj R.',
    role: 'Project Lead',
    tagline: 'Leading the development and research of the Pneumonia Detection System.',
    photo: '/gallery/Yashas.png',
    linkedin: 'https://linkedin.com/in/yashas-raj-116037325',
    team: 'Developer Team'
  },
  {
    id: 'dev-soha',
    name: 'Soha Jethva',
    role: 'Backend Developer',
    tagline: 'Designing robust database models and scalable cloud infrastructure workflows.',
    photo: '/gallery/SohaJethva.png',
    linkedin: 'https://linkedin.com/in/soha-jethva',
    team: 'Developer Team'
  },
  // PR Team
  {
    id: 'pr-hetvi',
    name: 'Hetvi Dedania',
    role: 'PR Lead',
    tagline: 'Connecting our technical builders with industry leaders and campus events.',
    photo: 'gallery/Hetvi.png',
    linkedin: 'https://linkedin.com/in/hetvi-dedania-788574383',
    team: 'PR Team'
  },
  {
    id: 'pr-anshika',
    name: 'Anshika Tiwari',
    role: 'PR Coordinator',
    tagline: 'Building student engagement and public communication pathways.',
    photo: 'gallery/Anshika.png',
    linkedin: 'https://linkedin.com/in/anshika-tiwari-171970337',
    team: 'PR Team'
  },
  {
    id: 'pr-hiya',
    name: 'Hiya Vipulkumar Patel',
    role: 'Outreach Manager',
    tagline: 'Promoting peer-to-peer cloud learning initiatives across Ganpat University.',
    photo: 'gallery/Hiya.png',
    linkedin: 'https://linkedin.com/in/hiya-patel-bbb196379',
    team: 'PR Team'
  },
  {
    id: 'pr-dhruv',
    name: 'Dhruv Mehta',
    role: 'PR Executive',
    tagline: 'Fostering digital community building and outreach campaigns.',
    photo: 'gallery/Dhruv.png',
    linkedin: 'https://linkedin.com/in/dhruvmehta18',
    team: 'PR Team'
  },
  // Media Team
  {
    id: 'med-mayank',
    name: 'Mayank Taranekar',
    role: 'Media Lead',
    tagline: 'Directing the community highlights and professional photography coverage.',
    photo: 'gallery/Mayank.png',
    linkedin: 'https://linkedin.com/in/taranekar',
    team: 'Media Team'
  },
  {
    id: 'med-aditya',
    name: 'Aditya Pandya',
    role: 'Video Editor',
    tagline: 'Editing dynamic video content and community boot camp showcases.',
    photo: 'gallery/Aditya.png',
    linkedin: 'https://linkedin.com/in/aditya-pandya-bb1b1032b',
    team: 'Media Team'
  },
  {
    id: 'med-shanvi',
    name: 'Shanvi Sinha',
    role: 'Media Specialist',
    tagline: 'Managing creative event documentation and real-time capture.',
    photo: 'gallery/Shanvi.png',
    linkedin: 'https://linkedin.com/in/shanvi-sinha-745b5431a',
    team: 'Media Team'
  },
  // Creative Team
  {
    id: 'cr-aadyasha',
    name: 'Aadyasha Swar',
    role: 'Creative Lead',
    tagline: 'Curating modern UI aesthetics and community visual styles.',
    photo: '/gallery/Adhyasha.png',
    linkedin: 'https://linkedin.com/in/aadyasha-swar-7575b0347',
    team: 'Creative Team'
  },
  {
    id: 'cr-anshu',
    name: 'Anshu Singh',
    role: 'Graphic Designer',
    tagline: 'Designing visual interfaces, assets, and sleek event promotions.',
    photo: '/gallery/Anshu.png',
    linkedin: 'https://linkedin.com/in/anshu-singh-583651384',
    team: 'Creative Team'
  },
  {
    id: 'cr-heer',
    name: 'Heer Patel',
    role: 'UI Designer',
    tagline: 'Crafting responsive user experiences for our web platforms.',
    photo: '/gallery/Heer.png',
    linkedin: 'https://linkedin.com/in/heer501',
    team: 'Creative Team'
  },
  // Event Management Team
  {
    id: 'ev-diksha',
    name: 'Diksha Jayeshkumar Patel',
    role: 'Operations Head',
    tagline: 'Coordinating high-impact offline cloud events and speaker workshops.',
    photo: '/gallery/Diksha.png',
    linkedin: 'https://linkedin.com/in/diksha-patel0019',
    team: 'Event Management Team'
  },
  {
    id: 'ev-varun',
    name: 'Varun Vishwakarma',
    role: 'Logistics Lead',
    tagline: 'Managing on-site operations, registrations, and venue layouts.',
    photo: '/gallery/Varun.png',
    linkedin: 'https://linkedin.com/in/varun-vishwakarma-b563731b2',
    team: 'Event Management Team'
  },
  {
    id: 'ev-ashish',
    name: 'Ashish Mourya',
    role: 'Event Executive',
    tagline: 'Supervising student participant flows and sandbox logistics.',
    photo: '/gallery/Ashish.png',
    linkedin: 'https://linkedin.com/in/ashish-mourya-706954376',
    team: 'Event Management Team'
  },
  {
    id: 'ev-prajapati',
    name: 'Prajapati Aryan Rakeshbhai',
    role: 'Support Lead',
    tagline: 'Providing general on-site organization and query support.',
    photo: '/gallery/Aryan.png',
    linkedin: 'https://linkedin.com/in/aryan-prajapati-2946vish2211',
    team: 'Event Management Team'
  },
  // Documentation Team
  {
    id: 'doc-vansh',
    name: 'Patel Vansh Gautambhai',
    role: 'Documentation Lead',
    tagline: 'Authoring community project blueprints, agendas, and logs.',
    photo: '/gallery/Vansh.png',
    linkedin: 'https://linkedin.com/in/vansh-patel-2055aa347',
    team: 'Documentation Team'
  },
  {
    id: 'doc-krina',
    name: 'Krina Koshti',
    role: 'Content Writer',
    tagline: 'Drafting clear technical descriptions, emails, and announcements.',
    photo: '/gallery/Krina.png',
    linkedin: 'https://linkedin.com/in/krina-koshti-41429b365',
    team: 'Documentation Team'
  },
  // Technical Team
  {
    id: 'tech-ranjit',
    name: 'Pan Ranit Ramkrishna',
    role: 'Cloud Architect',
    tagline: 'Deploying secure AWS serverless backend services and API gateways.',
    photo: '/gallery/Ranit.png',
    linkedin: 'https://linkedin.com/in/ranit-pan-493b3837a',
    team: 'Technical Team'
  },
  {
    id: 'tech-man',
    name: 'Man Patel',
    role: 'DevOps Engineer',
    tagline: 'Automating standard CI/CD deployment pipelines using AWS CodePipeline.',
    photo: '/gallery/Man.png',
    linkedin: 'https://linkedin.com/in/mann-patel-0300b5308',
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight">
          Our Team
        </h1>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base font-medium">
          Meet the builders, leaders, and Eridian-inspired technicians driving peer-to-peer cloud engineering at Ganpat University.
        </p>
      </section>

      {/* Faculty Coordinator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col items-start">
        <div className="flex items-center gap-4 mb-8 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#00f5ff] text-glow" />
            Faculty Coordinator
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00f5ff]/20 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardVariants('rgba(6, 182, 212, 0.35)', 'rgba(6, 182, 212, 0.25)')}
          className="w-full max-w-md cursor-pointer"
        >
          {/* Glassmorphic Card Container */}
          <div 
            className="p-8 flex flex-col items-start text-left transition-all duration-300 relative overflow-hidden group h-full radar-sweep-indicator"
            style={{
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(10, 11, 20, 0.55) 30%, rgba(4, 5, 10, 0.8) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(6, 182, 212, 0.25)",
              boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.12)"
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
                src="/gallery/Pravesh.png"
                alt="Pravesh Patel"
                className="w-full h-full object-cover origin-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/40 to-transparent pointer-events-none" />
            </div>

            {/* Full Name & Role */}
            <h3 className="text-2xl font-bold text-white font-heading leading-snug mb-1 tracking-tight">
              Pravesh Patel
            </h3>

            <span 
              className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block text-[#00f5ff] px-3 py-1 bg-[#00f5ff]/10 rounded-full"
            >
              Faculty Coordinator
            </span>

            {/* Tagline */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm font-sans font-medium">
              Championing academic cloud innovation and bridging the gap between classroom theory and industry standard cloud architecture.
            </p>

            {/* Social Action buttons */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 w-full justify-start">
              <a
                href="https://linkedin.com/in/pravesh-patel-43573a10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/5 hover:border-[#00f5ff] hover:text-[#00f5ff] text-slate-400 bg-white/5 hover:bg-[#00f5ff]/10 transition-all duration-300 cursor-pointer"
                title="Pravesh Patel's LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Club Captain and Adviser Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col items-start">
        <div className="flex items-center gap-4 mb-8 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#ffaa00] text-glow" />
            Club Captain & Adviser
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ffaa00]/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl justify-start">
          {/* Card 1: Club Captain */}
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
              className="p-8 flex flex-col items-start text-left transition-all duration-300 relative overflow-hidden group h-full radar-sweep-indicator"
              style={{
                borderRadius: "24px",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(10, 11, 20, 0.55) 30%, rgba(4, 5, 10, 0.8) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 170, 0, 0.25)",
                boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.12)"
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
                  src="/gallery/Harshil.png"
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
                className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block text-[#ffaa00] px-3 py-1 bg-[#ffaa00]/10 rounded-full"
              >
                Club Captain
              </span>

              {/* Tagline */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm font-sans font-medium">
                Guiding the AWS Student Builder Group at Ganpat University to inspire next-generation cloud builders and technical innovators.
              </p>

              {/* Social Action buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 w-full justify-start">
                <a
                  href="https://linkedin.com/in/harshil-maniyar-7a20b832a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/5 hover:border-[#00f5ff] hover:text-[#00f5ff] text-slate-400 bg-white/5 hover:bg-[#00f5ff]/10 transition-all duration-300 cursor-pointer"
                  title="Harshil Maniyar's LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Club Adviser */}
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
              className="p-8 flex flex-col items-start text-left transition-all duration-300 relative overflow-hidden group h-full radar-sweep-indicator"
              style={{
                borderRadius: "24px",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(10, 11, 20, 0.55) 30%, rgba(4, 5, 10, 0.8) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(6, 182, 212, 0.25)",
                boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.12)"
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
                  src="/gallery/Aric.png"
                  alt="Aric Pandya"
                  className="w-full h-full object-cover origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/40 to-transparent pointer-events-none" />
              </div>

              {/* Full Name & Role */}
              <h3 className="text-2xl font-bold text-white font-heading leading-snug mb-1 tracking-tight">
                Aric Pandya
              </h3>

              <span 
                className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block text-[#00f5ff] px-3 py-1 bg-[#00f5ff]/10 rounded-full"
              >
                Club Adviser
              </span>

              {/* Tagline */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm font-sans font-medium">
                Guiding student cloud builders through advanced architectural principles, cloud roadmaps, and career development initiatives.
              </p>

              {/* Social Action buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 w-full justify-start">
                <a
                  href="https://linkedin.com/in/aricpandya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/5 hover:border-[#00f5ff] hover:text-[#00f5ff] text-slate-400 bg-white/5 hover:bg-[#00f5ff]/10 transition-all duration-300 cursor-pointer"
                  title="Aric Pandya's LinkedIn"
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
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(10, 11, 20, 0.5) 30%, rgba(4, 5, 10, 0.8) 100%)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
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
                        </div>
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
