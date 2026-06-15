import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, Eye, Target, Award, Key, Network, ShieldCheck, 
  MapPin, CheckCircle, GraduationCap, Server, Code, Zap 
} from 'lucide-react';

const TIMELINE = [
  {
    step: 'Phase 01',
    title: 'Cloud Foundations & Academy Sandbox',
    duration: 'Months 1-2',
    icon: GraduationCap,
    desc: 'Understanding cloud models (IaaS, PaaS, SaaS), setting up AWS IAM, working with simple EC2 instances, S3 storage buckets, and understanding security policies.'
  },
  {
    step: 'Phase 02',
    title: 'Architecture & Scalable Systems',
    duration: 'Months 3-4',
    icon: Server,
    desc: 'Deploying highly-available systems. Configuring auto-scaling groups, application load balancers, database replication, and monitoring setups using AWS CloudWatch.'
  },
  {
    step: 'Phase 03',
    title: 'Serverless Deployments & DevOps',
    duration: 'Months 5-6',
    icon: Code,
    desc: 'Transitioning to event-driven serverless architectures. Writing Lambda functions, integrating API Gateway, orchestrating DynamoDB tables, and automating pipeline builds.'
  },
  {
    step: 'Phase 04',
    title: 'GenAI Integrations & Specialist Tracks',
    duration: 'Months 7+',
    icon: Zap,
    desc: 'Harnessing advanced intelligence. Deploying LLM pipelines using AWS Bedrock, model fine-tuning with SageMaker, or diving deep into security and governance scopes.'
  }
];

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
          Learn who we are, our core drivers, and the timeline students traverse to morph from cloud novices into AWS Certified Builders.
        </motion.p>
      </section>

      {/* Mission, Vision, and Objectives Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffaa00]/10 flex items-center justify-center text-[#ffaa00]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Our Mission</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                To democratize cloud learning by integrating high-quality AWS resources with peer-to-peer mentoring. We aim to equip every student with practical engineering capabilities required by modern industry teams.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Our Vision</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                To build a premier, self-sustaining university cloud developer community that serves as a talent nexus for AWS and the global technology market, aligning Ganpat University with state-of-the-art cloud paradigms.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#00f5ff]/10 flex items-center justify-center text-[#00f5ff]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Key Objectives</h3>
              <ul className="text-sm text-slate-400 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00f5ff] shrink-0 mt-0.5" />
                  <span>Execute weekly hands-on labs on AWS sandboxes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00f5ff] shrink-0 mt-0.5" />
                  <span>Mentor members for AWS Certifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00f5ff] shrink-0 mt-0.5" />
                  <span>Collaborate on cloud-native solutions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative bg-[#060814]/45 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-white font-heading">
              Why Join the GNU Builder Hub?
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

      {/* Learning Path Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-white font-heading">
            Student Builder Learning Path
          </h2>
          <p className="text-slate-400 font-sans">
            How we guide you step-by-step from local local-host directories straight to cloud-native cluster infrastructures.
          </p>
        </div>

        {/* Chronological timeline layout */}
        <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          {TIMELINE.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline connector circle node */}
                <div className="absolute -left-[38px] sm:-left-[54px] top-0 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#020205] border border-[#00f5ff] flex items-center justify-center text-[#00f5ff] shadow-[0_0_8px_#00f5ff]/40 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-3 sm:w-4 h-3 sm:h-4" />
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5 space-y-3 hover:border-cyan-400/30 transition-all">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#ffaa00] uppercase">
                      {item.step}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white font-heading">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 relative bg-gradient-to-b from-[#060814]/45 to-transparent border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5" />
                Ganpat University Tech Ecosystem
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">
                AWS Community Impact
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed font-sans">
                Our collaborative footprint stretches across the computer science and information technology disciplines at GNU. By offering hands-on technical labs, we enable student builders to develop project resumes that stand out.
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center min-w-[120px]">
                <div className="text-xl sm:text-2xl font-bold text-[#ffaa00] font-mono">10,000+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Sandbox Labs run</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center min-w-[120px]">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">12+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Open Source repos</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center min-w-[120px]">
                <div className="text-xl sm:text-2xl font-bold text-[#ffaa00] font-mono">100%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Free Sandbox labs</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center min-w-[120px]">
                <div className="text-xl sm:text-2xl font-bold text-cyan-300 font-mono">5+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">AWS Experts hosting</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
