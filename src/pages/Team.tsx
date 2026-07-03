import React from 'react';
import { TeamCard } from '../components/ui/TeamCard';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  photo: string;
  linkedin: string;
  team: string;
  github?: string;
}

// Complete data list for all 21 members in the single sequence (Advisor + 20 sub-team members)
const teamMembers: TeamMember[] = [
  // Adviser
  {
    id: 'advisor-aric',
    name: 'Aric Pandya',
    role: 'SBG Adviser',
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

export const Team: React.FC = () => {
  const coordinator = {
    name: "Pravesh Patel",
    designation: "Faculty Coordinator",
    role: "SBG Coordinator",
    tagline: "Academic Innovation & Cloud Architect Bridge",
    profileImage: "/gallery/Pravesh.png",
    linkedin: "https://linkedin.com/in/pravesh-patel-43573a10"
  };

  const leader = {
    name: "Harshil Maniyar",
    designation: "AWS SBG Leader",
    role: "Lead Builder",
    tagline: "Technical Leadership & Cloud Innovation Guide",
    profileImage: "/gallery/Harshil.png",
    linkedin: "https://linkedin.com/in/harshil-maniyar-7a20b832a"
  };

  return (
    <div className="relative pt-24 pb-16 font-sans min-h-[90vh] bg-black overflow-hidden">
      {/* Subtle floating particles in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-[#a855f7]/30 rounded-full blur-[2px] animate-pulse" />
        <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-[#d946ef]/20 rounded-full blur-[3px] animate-bounce duration-[8s]" />
        <div className="absolute bottom-[20%] left-[10%] w-2 h-2 bg-[#06b6d4]/30 rounded-full blur-[2px] animate-pulse duration-[5s]" />
        <div className="absolute top-[70%] left-[45%] w-1.5 h-1.5 bg-white/20 rounded-full blur-[1px] animate-ping duration-[6s]" />
      </div>

      {/* Main Section Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4 relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight">
          Our Team
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 font-sans tracking-wide">
          Meet the builders, leaders, and coordinators driving cloud intelligence at Ganpat University.
        </p>
      </section>

      {/* SBG Coordinator & Leader Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Coordinator */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-[#a855f7] text-glow" />
                SBG Coordinator
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#a855f7]/20 to-transparent" />
            </div>
            <div className="w-full max-w-sm flex justify-center">
              <TeamCard
                member={{
                  name: coordinator.name,
                  designation: coordinator.designation,
                  role: coordinator.role,
                  tagline: coordinator.tagline,
                  description: coordinator.tagline,
                  profileImage: coordinator.profileImage,
                  linkedin: coordinator.linkedin
                }}
              />
            </div>
          </div>

          {/* Leader */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-[#d946ef] text-glow" />
                SBG Leader
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d946ef]/20 to-transparent" />
            </div>
            <div className="w-full max-w-sm flex justify-center">
              <TeamCard
                member={{
                  name: leader.name,
                  designation: leader.designation,
                  role: leader.role,
                  tagline: leader.tagline,
                  description: leader.tagline,
                  profileImage: leader.profileImage,
                  linkedin: leader.linkedin
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SBG Adviser Section */}
      {(() => {
        const adviser = teamMembers.find(m => m.team === 'Adviser');
        if (!adviser) return null;
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col items-stretch relative z-10">
            <div className="flex items-center gap-4 mb-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-[#ffaa00] text-glow" />
                SBG Adviser
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ffaa00]/20 to-transparent" />
            </div>
            <div className="w-full max-w-sm mx-auto flex justify-center">
              <TeamCard
                member={{
                  name: adviser.name,
                  designation: adviser.team,
                  role: adviser.role,
                  tagline: adviser.tagline,
                  description: adviser.tagline,
                  profileImage: adviser.photo,
                  linkedin: adviser.linkedin
                }}
              />
            </div>
          </section>
        );
      })()}

      {/* Team Crew Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="flex items-center gap-4 mb-10 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-7 rounded-full bg-[#a855f7] text-glow" />
            SBG Team Members
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#a855f7]/20 to-transparent" />
        </div>

        {/* Responsive Grid Setup: Desktop 4, Tablet 2, Mobile 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.filter(m => m.team !== 'Adviser').map((member) => (
            <TeamCard
              key={member.id}
              member={{
                name: member.name,
                designation: member.team,
                role: member.role,
                tagline: member.tagline,
                description: member.tagline, // Uses tagline as secondary copy
                profileImage: member.photo,
                linkedin: member.linkedin
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
