import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon, MeetupIcon } from '../ui/SocialIcons';
import { Logo } from '../ui/Logo';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030510] border-t border-white/10 text-slate-400 py-16 overflow-hidden z-10">
      {/* Background space glow grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,153,0,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand Info Column */}
          <div className="md:col-span-1.5 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <Logo size={24} className="group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm font-heading tracking-wide group-hover:text-[#c084fc] transition-colors duration-300">
                  AWS Student Builder Group
                </span>
                <span className="text-[9px] text-blue-400 font-sans tracking-widest uppercase">
                  Ganpat University
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed font-sans pr-4 pt-1">
              Empowering students to engineer the future of cloud computing, DevOps, serverless architectures, and artificial intelligence through hands-on boot camps and collaborative constellations.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-[#ff9900] hover:text-[#ff9900] flex items-center justify-center bg-white/5 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-blue-400 hover:text-blue-400 flex items-center justify-center bg-white/5 transition-all hover:scale-105"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-[#ff9900] hover:text-[#ff9900] flex items-center justify-center bg-white/5 transition-all hover:scale-105"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://ganpatuniversity.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-blue-400 hover:text-blue-400 flex items-center justify-center bg-white/5 transition-all hover:scale-105"
                aria-label="University Website"
              >
                <Globe className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-[#c084fc] hover:text-[#c084fc] flex items-center justify-center bg-white/5 transition-all hover:scale-105"
                aria-label="Meetup Community Group"
              >
                <MeetupIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/" className="hover:text-[#ff9900] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ff9900] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#ff9900] transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#ff9900] transition-colors">
                  Upcoming & Past Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#ff9900] transition-colors">
                  Activity Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ff9900] transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Domains Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-heading">
              Builder Domains
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li className="hover:text-blue-400 transition-colors cursor-default">
                Cloud Computing
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-default">
                Artificial Intelligence
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-default">
                Machine Learning
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-default">
                DevOps & Automation
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-default">
                Cybersecurity & Identity
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-heading">
              Reach Out
            </h4>
            <ul className="space-y-3.5 text-sm font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#ff9900] shrink-0 mt-0.5" />
                <span>
                  Ganpat University (GNU), Mehsana-Gandinagar Highway, Kherva, Gujarat, India - 384315.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-[#ff9900] shrink-0" />
                <a href="mailto:aws.sbg@ganpatuniversity.ac.in" className="hover:text-white transition-colors">
                  aws.sbg@ganpatuniversity.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-[#ff9900] shrink-0" />
                <a href="tel:+912762286080" className="hover:text-white transition-colors">
                  +91 2762 286080
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p>
            &copy; {currentYear} AWS Student Builder Group - Ganpat University. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-500">
              Designed in Partnership with AWS Academy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
