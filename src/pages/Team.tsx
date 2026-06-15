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

// Complete data list for all 21 members in the single sequence (Advisor + 20 sub-team members)
const teamMembers: TeamMember[] = [
  // Adviser
  {
    id: 'advisor-aric',
    name: 'Aric Pandya',
    role: 'Adviser member',
    tagline: 'Guiding student cloud builders through advanced architectural principles, cloud roadmaps, and career development initiatives.',
    photo: '/gallery/Aric.png',
    linkedin: 'https://linkedin.com/in/aricpandya',
    team: 'Adviser'
  },
  // Developer Team
  {
    id: 'dev-yashas',
    name: 'Yashas Raj R',
    role: 'Developer Team member',
    tagline: 'Leading the development and research of the Pneumonia Detection System.',
    photo: '/gallery/Yashas.png',
    linkedin: 'https://linkedin.com/in/yashas-raj-116037325',
    team: 'Developer Team'
  },
  {
    id: 'dev-soha',
    name: 'Soha Jethva',
    role: 'Developer Team member',
    tagline: 'Designing robust database models and scalable cloud infrastructure workflows.',
    photo: '/gallery/SohaJethva.png',
    linkedin: 'https://linkedin.com/in/soha-jethva',
    team: 'Developer Team'
  },
  // PR Team
  {
    id: 'pr-hetvi',
    name: 'Hetvi Dedania',
    role: 'PR Team member',
    tagline: 'Connecting our technical builders with industry leaders and campus events.',
    photo: '/gallery/Hetvi.png',
    linkedin: 'https://linkedin.com/in/hetvi-dedania-788574383',
    team: 'PR Team'
  },
  {
    id: 'pr-anshika',
    name: 'Anshika Tiwari',
    role: 'PR Team member',
    tagline: 'Building student engagement and public communication pathways.',
    photo: '/gallery/Anshika.png',
    linkedin: 'https://linkedin.com/in/anshika-tiwari-171970337',
    team: 'PR Team'
  },
  {
    id: 'pr-hiya',
    name: 'Hiya Vipulkumar Patel',
    role: 'PR Team member',
    tagline: 'Promoting peer-to-peer cloud learning initiatives across Ganpat University.',
    photo: '/gallery/Hiya.png',
    linkedin: 'https://linkedin.com/in/hiya-patel-bbb196379',
    team: 'PR Team'
  },
  {
    id: 'pr-dhruv',
    name: 'Dhruv Mehta',
    role: 'PR Team member',
    tagline: 'Fostering digital community building and outreach campaigns.',
    photo: '/gallery/Dhruv.png',
    linkedin: 'https://linkedin.com/in/dhruvmehta18',
    team: 'PR Team'
  },
  // Media Team
  {
    id: 'med-mayank',
    name: 'Mayank Taranekar',
    role: 'Media Team member',
    tagline: 'Directing the community highlights and professional photography coverage.',
    photo: '/gallery/Mayank.png',
    linkedin: 'https://linkedin.com/in/taranekar',
    team: 'Media Team'
  },
  {
    id: 'med-aditya',
    name: 'Aditya Pandya',
    role: 'Media Team member',
    tagline: 'Editing dynamic video content and community boot camp showcases.',
    photo: '/gallery/Aditya.png',
    linkedin: 'https://linkedin.com/in/aditya-pandya-bb1b1032b',
    team: 'Media Team'
  },
  {
    id: 'med-shanvi',
    name: 'Shanvi Sinha',
    role: 'Media Team member',
    tagline: 'Managing creative event documentation and real-time capture.',
    photo: '/gallery/Shanvi.png',
    linkedin: 'https://linkedin.com/in/shanvi-sinha-745b5431a',
    team: 'Media Team'
  },
  // Creative Team
  {
    id: 'cr-aadyasha',
    name: 'Aadyasha Swar',
    role: 'Creative Team member',
    tagline: 'Curating modern UI aesthetics and community visual styles.',
    photo: '/gallery/Adhyasha.png',
    linkedin: 'https://linkedin.com/in/aadyasha-swar-7575b0347',
    team: 'Creative Team'
  },
  {
    id: 'cr-anshu',
    name: 'Anshu Singh',
    role: 'Creative Team member',
    tagline: 'Designing visual interfaces, assets, and sleek event promotions.',
    photo: '/gallery/Anshu.png',
    linkedin: 'https://linkedin.com/in/anshu-singh-583651384',
    team: 'Creative Team'
  },
  {
    id: 'cr-heer',
    name: 'Heer Patel',
    role: 'Creative Team member',
    tagline: 'Crafting responsive user experiences for our web platforms.',
    photo: '/gallery/Heer.png',
    linkedin: 'https://linkedin.com/in/heer501',
    team: 'Creative Team'
  },
  // Event Management Team
  {
    id: 'ev-diksha',
    name: 'Diksha Jayeshkumar Patel',
    role: 'Event Management Team member',
    tagline: 'Coordinating high-impact offline cloud events and speaker workshops.',
    photo: '/gallery/Diksha.png',
    linkedin: 'https://linkedin.com/in/diksha-patel0019',
    team: 'Event Management Team'
  },
  {
    id: 'ev-varun',
    name: 'Varun Vishwakarma',
    role: 'Event Management Team member',
    tagline: 'Managing on-site operations, registrations, and venue layouts.',
    photo: '/gallery/Varun.png',
    linkedin: 'https://linkedin.com/in/varun-vishwakarma-b563731b2',
    team: 'Event Management Team'
  },
  {
    id: 'ev-ashish',
    name: 'Ashish Mourya',
    role: 'Event Management Team member',
    tagline: 'Supervising student participant flows and sandbox logistics.',
    photo: '/gallery/Ashish.png',
    linkedin: 'https://linkedin.com/in/ashish-mourya-706954376',
    team: 'Event Management Team'
  },
  {
    id: 'ev-prajapati',
    name: 'Prajapati Aryan Rakeshbhai',
    role: 'Event Management Team member',
    tagline: 'Providing general on-site organization and query support.',
    photo: '/gallery/Aryan.png',
    linkedin: 'https://linkedin.com/in/aryan-prajapati-2946vish2211',
    team: 'Event Management Team'
  },
  // Documentation Team
  {
    id: 'doc-vansh',
    name: 'Patel Vansh Gautambhai',
    role: 'Documentation Team member',
    tagline: 'Authoring community project blueprints, agendas, and logs.',
    photo: '/gallery/Vansh.png',
    linkedin: 'https://linkedin.com/in/vansh-patel-2055aa347',
    team: 'Documentation Team'
  },
  {
    id: 'doc-krina',
    name: 'Krina Koshti',
    role: 'Documentation Team member',
    tagline: 'Drafting clear technical descriptions, emails, and announcements.',
    photo: '/gallery/Krina.png',
    linkedin: 'https://linkedin.com/in/krina-koshti-41429b365',
    team: 'Documentation Team'
  },
  // Technical Team
  {
    id: 'tech-ranjit',
    name: 'Pan Ranit Ramkrishna',
    role: 'Technical Team member',
    tagline: 'Deploying secure AWS serverless backend services and API gateways.',
    photo: '/gallery/Ranit.png',
    linkedin: 'https://linkedin.com/in/ranit-pan-493b3837a',
    team: 'Technical Team'
  },
  {
    id: 'tech-man',
    name: 'Man Patel',
    role: 'Technical Team member',
    tagline: 'Automating standard CI/CD deployment pipelines using AWS CodePipeline.',
    photo: '/gallery/Man.png',
    linkedin: 'https://linkedin.com/in/mann-patel-0300b5308',
    team: 'Technical Team'
  }
];

// Aesthetic style variables for each team domain to ensure custom neon shadow colors
const TEAM_STYLES: Record<string, { glowColor: string; borderColor: string; accentText: string; badgeBg: string }> = {
  'Developer Team': {
    glowColor: 'rgba(168, 85, 247, 0.3)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
    accentText: '#c084fc',
    badgeBg: 'rgba(168, 85, 247, 0.12)'
  },
  'PR Team': {
    glowColor: 'rgba(217, 70, 239, 0.3)',
    borderColor: 'rgba(217, 70, 239, 0.25)',
    accentText: '#f472b6',
    badgeBg: 'rgba(217, 70, 239, 0.12)'
  },
  'Media Team': {
    glowColor: 'rgba(236, 72, 153, 0.3)',
    borderColor: 'rgba(236, 72, 153, 0.25)',
    accentText: '#ec4899',
    badgeBg: 'rgba(236, 72, 153, 0.12)'
  },
  'Creative Team': {
    glowColor: 'rgba(168, 85, 247, 0.3)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
    accentText: '#c084fc',
    badgeBg: 'rgba(168, 85, 247, 0.12)'
  },
  'Event Management Team': {
    glowColor: 'rgba(217, 70, 239, 0.3)',
    borderColor: 'rgba(217, 70, 239, 0.25)',
    accentText: '#f472b6',
    badgeBg: 'rgba(217, 70, 239, 0.12)'
  },
  'Documentation Team': {
    glowColor: 'rgba(168, 85, 247, 0.3)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
    accentText: '#c084fc',
    badgeBg: 'rgba(168, 85, 247, 0.12)'
  },
  'Technical Team': {
    glowColor: 'rgba(168, 85, 247, 0.3)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
    accentText: '#c084fc',
    badgeBg: 'rgba(168, 85, 247, 0.12)'
  },
  'Adviser': {
    glowColor: 'rgba(168, 85, 247, 0.3)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
    accentText: '#a855f7',
    badgeBg: 'rgba(168, 85, 247, 0.12)'
  }
};


export const Team: React.FC = () => {
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
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-[#a855f7]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[300px] h-[300px] bg-[#d946ef]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Section Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight">
          Our Team
        </h1>
      </section>

      {/* Faculty Coordinator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col items-stretch">
        <div className="flex items-center gap-4 mb-8 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#a855f7] text-glow" />
            SBG Faculty Coordinator
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#a855f7]/20 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardVariants('rgba(168, 85, 247, 0.35)', 'rgba(168, 85, 247, 0.25)')}
          className="w-full max-w-md cursor-pointer mx-auto"
        >
          {/* Glassmorphic Card Container */}
          <div 
            className="p-8 flex flex-col items-start text-left transition-all duration-300 relative overflow-hidden group h-full radar-sweep-indicator"
            style={{
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(10, 11, 20, 0.55) 30%, rgba(4, 5, 10, 0.8) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
              boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.12)"
            }}
          >
            {/* Ambient teal light glow behind card */}
            <div 
              className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[80px] opacity-25 pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:opacity-45"
              style={{ background: "#a855f7" }}
            />

            {/* Profile Photo frame */}
            <div 
              className="w-32 h-32 rounded-full overflow-hidden border-3 mb-6 relative bg-slate-900 shadow-md transition-all duration-300 border-[#a855f7]/30 group-hover:border-[#a855f7]/70"
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
              className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block text-[#a855f7] px-3 py-1 bg-[#a855f7]/10 rounded-full"
            >
              SBG Faculty Coordinator
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
                className="p-2.5 rounded-xl border border-white/5 hover:border-[#a855f7] hover:text-[#a855f7] text-slate-400 bg-white/5 hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"
                title="Pravesh Patel's LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Club Leader Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col items-stretch">
        <div className="flex items-center gap-4 mb-8 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#d946ef] text-glow" />
            SBG Leader
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d946ef]/20 to-transparent" />
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Card: Club Leader */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants('rgba(217, 70, 239, 0.35)', 'rgba(217, 70, 239, 0.25)')}
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
                border: "1px solid rgba(217, 70, 239, 0.25)",
                boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.12)"
              }}
            >
              {/* Ambient gold light glow behind card */}
              <div 
                className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[80px] opacity-25 pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:opacity-45"
                style={{ background: "#d946ef" }}
              />

              {/* Profile Photo frame */}
              <div 
                className="w-32 h-32 rounded-full overflow-hidden border-3 mb-6 relative bg-slate-900 shadow-md transition-all duration-300 border-[#d946ef]/30 group-hover:border-[#d946ef]/70"
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
                className="text-xs font-mono font-bold uppercase tracking-wider mb-4 block text-[#d946ef] px-3 py-1 bg-[#d946ef]/10 rounded-full"
              >
                SBG Leader
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
                  className="p-2.5 rounded-xl border border-white/5 hover:border-[#d946ef] hover:text-[#d946ef] text-slate-400 bg-white/5 hover:bg-[#d946ef]/10 transition-all duration-300 cursor-pointer"
                  title="Harshil Maniyar's LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Crew Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-4 mb-10 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#a855f7] text-glow" />
            Team Members
          </h2>
          <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full text-[#a855f7] bg-[#a855f7]/10">
            {teamMembers.length} Members
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#a855f7]/20 to-transparent" />
        </div>

        {/* Grid Layout (Desktop: 4, Laptop: 3, Tablet: 2, Mobile: 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
            const style = TEAM_STYLES[member.team] || {
              glowColor: 'rgba(6, 182, 212, 0.3)',
              borderColor: 'rgba(6, 182, 212, 0.25)',
              accentText: '#00f5ff',
              badgeBg: 'rgba(6, 182, 212, 0.12)'
            };

            return (
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

                    {/* Full Name */}
                    <h3 className="text-xl font-bold text-white font-heading leading-snug mb-1 tracking-tight">
                      {member.name}
                    </h3>

                    {/* Which Team */}
                    <span 
                      className="text-xs font-mono font-bold uppercase tracking-wider block mb-1"
                      style={{ color: style.accentText }}
                    >
                      {member.team}
                    </span>

                    {/* Team Member Role Description */}
                    <span className="text-xs text-slate-400 block mb-4">
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
                        className="p-2.5 rounded-xl border border-white/5 hover:border-[#a855f7] hover:text-[#a855f7] text-slate-400 bg-white/5 hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"
                        title={`${member.name}'s LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
