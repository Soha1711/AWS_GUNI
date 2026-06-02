import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ShieldAlert, Cpu, Palette } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';
import { LinkedinIcon, GithubIcon } from '../components/ui/SocialIcons';

export const Team: React.FC = () => {
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<'all' | 'leadership' | 'technical' | 'marketing'>('all');

  const filterTabs = [
    { id: 'all', name: 'Whole Constellation', icon: Users },
    { id: 'leadership', name: 'Leadership & Mentors', icon: ShieldAlert },
    { id: 'technical', name: 'Technical Stars', icon: Cpu },
    { id: 'marketing', name: 'Marketing & Design', icon: Palette }
  ];

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    if (selectedRoleFilter === 'all') return true;
    if (selectedRoleFilter === 'leadership') {
      return m.role === 'coordinator' || m.role === 'mentor' || m.role === 'core' || m.role === 'executive';
    }
    if (selectedRoleFilter === 'technical') {
      return m.role === 'technical';
    }
    if (selectedRoleFilter === 'marketing') {
      return m.role === 'marketing';
    }
    return true;
  });

  // Helper to group by role category for structured presentation
  const roleGroups = [
    { title: 'Faculty Advisors & Coordinators', roles: ['coordinator', 'mentor'] },
    { title: 'Student Core & Operations Leads', roles: ['core', 'executive'] },
    { title: 'Cloud Engineers & Architects', roles: ['technical'] },
    { title: 'Marketing, Content & Creative Designers', roles: ['marketing'] }
  ];

  return (
    <div className="relative pt-24 pb-16 font-sans">
      {/* Background stardust */}
      <div className="absolute top-1/3 left-1/10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-[300px] h-[300px] bg-[#ff9900]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff9900]">
          // The Crew Core
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Meet the Innovators
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Connecting students, faculty coordinates, and industry mentors. Together, we orchestrate cloud computing labs and community developments.
        </p>
      </section>

      {/* Filters bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedRoleFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRoleFilter(tab.id as any)}
                className={`px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#ff9900]/10 border-[#ff9900] text-[#ff9900] shadow-[0_0_12px_rgba(255,153,0,0.12)]'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grouped Directories grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {roleGroups.map((group) => {
          // Check if there are members matching these roles in the current filtered members list
          const groupMembers = filteredMembers.filter((m) => group.roles.includes(m.role));
          if (groupMembers.length === 0) return null;

          return (
            <div key={group.title} className="space-y-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading border-l-3 border-[#ff9900] pl-3 leading-none">
                {group.title}
              </h2>

              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {groupMembers.map((member) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      key={member.id}
                      className="team-glow-card rounded-2xl overflow-hidden p-5 flex flex-col items-center text-center shadow-lg"
                    >
                      {/* Photo Container */}
                      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 mb-5 relative bg-slate-900 shadow-md">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1026]/40 to-transparent" />
                      </div>

                      {/* Info */}
                      <h3 className="text-lg font-bold text-white font-heading leading-tight mb-1 truncate max-w-full">
                        {member.name}
                      </h3>
                      
                      <span className="text-[11px] font-mono text-[#ff9900] font-semibold uppercase tracking-wider mb-2 text-center h-8 flex items-center justify-center">
                        {member.position}
                      </span>
                      
                      <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6 px-1 h-10 flex items-center justify-center overflow-hidden">
                        {member.department}
                      </p>

                      {/* Social Actions */}
                      <div className="flex items-center gap-3.5 mt-auto">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-white/5 hover:border-[#ff9900] hover:text-[#ff9900] text-slate-400 bg-white/5 hover:bg-[#ff9900]/5 transition-colors cursor-pointer"
                          title={`${member.name}'s LinkedIn`}
                        >
                          <LinkedinIcon className="w-4.5 h-4.5" />
                        </a>
                        
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/5 hover:border-blue-400 hover:text-blue-400 text-slate-400 bg-white/5 hover:bg-blue-400/5 transition-colors cursor-pointer"
                            title={`${member.name}'s GitHub`}
                          >
                            <GithubIcon className="w-4.5 h-4.5" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
