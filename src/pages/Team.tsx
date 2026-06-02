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
    glowColor: 'rgba(59, 130, 246, 0.25)',
    borderColor: 'rgba(59, 130, 246, 0.2)',
    accentText: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.1)'
  },
  'PR Team': {
    glowColor: 'rgba(255, 153, 0, 0.25)',
    borderColor: 'rgba(255, 153, 0, 0.2)',
    accentText: '#ff9900',
    badgeBg: 'rgba(255, 153, 0, 0.1)'
  },
  'Media Team': {
    glowColor: 'rgba(236, 72, 153, 0.25)',
    borderColor: 'rgba(236, 72, 153, 0.2)',
    accentText: '#ec4899',
    badgeBg: 'rgba(236, 72, 153, 0.1)'
  },
  'Creative Team': {
    glowColor: 'rgba(16, 185, 129, 0.25)',
    borderColor: 'rgba(16, 185, 129, 0.2)',
    accentText: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.1)'
  },
  'Event Management Team': {
    glowColor: 'rgba(234, 179, 8, 0.25)',
    borderColor: 'rgba(234, 179, 8, 0.2)',
    accentText: '#eab308',
    badgeBg: 'rgba(234, 179, 8, 0.1)'
  },
  'Documentation Team': {
    glowColor: 'rgba(6, 182, 212, 0.25)',
    borderColor: 'rgba(6, 182, 212, 0.2)',
    accentText: '#06b6d4',
    badgeBg: 'rgba(6, 182, 212, 0.1)'
  },
  'Technical Team': {
    glowColor: 'rgba(239, 68, 68, 0.25)',
    borderColor: 'rgba(239, 68, 68, 0.2)',
    accentText: '#ef4444',
    badgeBg: 'rgba(239, 68, 68, 0.1)'
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
      boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px ${glowColor}`,
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
      {/* Background ambient stardust */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[300px] h-[300px] bg-[#ff9900]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Section Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff9900]">
          // Community Organization
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight">
          Our Team
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base font-medium">
          Meet the builders, leaders, and creators driving technology learning and peer-to-peer cloud engineering at GNU.
        </p>
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
                  {members.length} {members.length === 1 ? 'Member' : 'Members'}
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
                        background: "rgba(11, 16, 38, 0.45)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.35)"
                      }}
                    >
                      {/* Ambient light glow behind card */}
                      <div 
                        className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[80px] opacity-15 pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"
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
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1026]/30 to-transparent pointer-events-none" />
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
                        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                          {member.tagline}
                        </p>
                      </div>

                      {/* Social Action buttons */}
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl border border-white/5 hover:border-[#ff9900] hover:text-[#ff9900] text-slate-400 bg-white/5 hover:bg-[#ff9900]/10 transition-all duration-300 cursor-pointer"
                          title={`${member.name}'s LinkedIn`}
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>

                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl border border-white/5 hover:border-blue-400 hover:text-blue-400 text-slate-400 bg-white/5 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer"
                            title={`${member.name}'s GitHub`}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
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
