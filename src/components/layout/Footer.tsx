import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { LinkedinIcon, MeetupIcon, InstagramIcon } from '../ui/SocialIcons';
import { Logo } from '../ui/Logo';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030510] border-t border-white/10 text-slate-400 py-16 overflow-hidden z-10">
      {/* Background space glow grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,153,0,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand Info Column */}
          <div className="space-y-4">
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
                href="https://www.linkedin.com/company/aws-student-builder-group-guni/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-[#0077b5] hover:text-[#0077b5] flex items-center justify-center bg-white/5 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.instagram.com/aws.sbg_guni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-[#e1306c] hover:text-[#e1306c] flex items-center justify-center bg-white/5 transition-all hover:scale-105"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4.5 h-4.5" />
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
        <div className="text-center text-xs font-sans">
          <p>
            &copy; {currentYear} AWS Student Builder Group - Ganpat University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
