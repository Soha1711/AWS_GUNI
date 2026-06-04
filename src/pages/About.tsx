import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, Target, Award, Key, Network, ShieldCheck 
} from 'lucide-react';


const BENEFITS = [
  {
    title: 'AWS Academy Learning Sandbox',
    desc: 'Access real AWS resources without personal credit card billing. Build labs and experiments inside secure sandbox modules.',
    icon: Award
  },
  {
    title: 'Discount Voucher Access',
    desc: 'Eligible active members receive vouchers for substantial discounts on AWS Certification exams (Cloud Practitioner, Solutions Architect).',
    icon: Key
  },
  {
    title: 'Exclusive Hackathons & Prizes',
    desc: 'Compete in annual cloud hackathons like SpaceHack with exclusive mentoring and cash/credits pools.',
    icon: Network
  },
  {
    title: 'Global Career Opportunities',
    desc: 'Get connected with AWS User Groups, alumni networks, and industry recruiters seeking certified cloud developers.',
    icon: ShieldCheck
  }
];

const OBJECTIVES = [
  { id: '01', text: 'Promote AWS and Cloud Computing Awareness' },
  { id: '02', text: 'Provide Hands-On Technical Learning' },
  { id: '03', text: 'Support AWS Certification Preparation' },
  { id: '04', text: 'Encourage Innovation and Project Development' },
  { id: '05', text: 'Bridge Industry and Academia' },
  { id: '06', text: 'Develop Leadership and Professional Skills' },
  { id: '07', text: 'Build a Strong Technical Community' },
  { id: '08', text: 'Promote Emerging Technologies (Cloud, DevOps, AI/ML, Cybersecurity, Generative AI)' },
  { id: '09', text: 'Enhance Career Readiness and Employability' },
  { id: '10', text: 'Establish Ganpat University as a Technology and Cloud Innovation Hub' },
  { id: '11', text: 'Foster Research and Innovation Culture' },
  { id: '12', text: 'Encourage Participation in Hackathons and Technical Competitions' },
  { id: '13', text: 'Strengthen Industry Collaboration and Networking Opportunities' },
  { id: '14', text: 'Support Peer-to-Peer Learning and Knowledge Sharing' },
  { id: '15', text: 'Empower Students to Become Future Technology Leaders' }
];

export const About: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 font-sans">
      {/* Background glow effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00f5ff]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffaa00]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 space-y-4">
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight"
        >
          Engineering the Cloud Horizon
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto text-slate-400 text-base sm:text-lg"
        >
          Learn who we are, our core drivers, and how we help students morph from cloud novices into AWS Certified Builders.
        </motion.p>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-orange p-8 rounded-2xl border border-[#ffaa00]/25 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffaa00]/10 flex items-center justify-center text-[#ffaa00]">
                <Target className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                The AWS Student Builder Group at Ganpat University is committed to promoting cloud computing, Generative AI, DevOps, and emerging AWS technologies among students from all academic disciplines. Through hands-on workshops, technical sessions, certification guidance, industry engagement, and collaborative projects, the group aims to bridge the gap between academic learning and industry expectations while nurturing innovation, leadership, and professional excellence.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-blue p-8 rounded-2xl border border-cyan-500/25 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                To establish a thriving cloud and emerging technologies ecosystem at Ganpat University through the AWS Student Builder Group (AWS SBG), empowering students with industry-relevant skills, fostering innovation, and developing future technology leaders capable of creating impactful solutions using cloud computing and modern technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Objectives Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight"
          >
            Key Objectives
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 font-sans"
          >
            Our core pillars driving technology adoption, skill-building, and academic excellence at GUNI.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {OBJECTIVES.map((obj, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
              }}
              className="glass p-6 rounded-2xl border border-white/5 flex gap-4 hover:border-cyan-500/40 hover:bg-white/[0.02] transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="font-mono text-base font-bold text-cyan-400 bg-cyan-500/10 w-10 h-10 rounded-xl flex items-center justify-center border border-cyan-500/20 shrink-0 group-hover:bg-[#ffaa00]/10 group-hover:text-[#ffaa00] group-hover:border-[#ffaa00]/20 transition-colors duration-300">
                {obj.id}
              </div>
              <div className="flex items-center">
                <p className="text-sm font-medium text-slate-200 leading-relaxed font-sans group-hover:text-white transition-colors duration-300">
                  {obj.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative bg-[#060814]/45 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-white font-heading">
              Why Join the GUNI Builder Hub?
            </h2>
            <p className="text-slate-400 font-sans">
              Accelerate your engineering journey. As a certified group backed by AWS Academy and Ganpat University, we offer privileges designed for career launches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-white/10 flex gap-4 hover:border-[#00f5ff]/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#ffaa00]/10 flex items-center justify-center text-[#ffaa00] shrink-0">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-heading">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
