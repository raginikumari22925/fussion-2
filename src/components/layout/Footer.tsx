import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'Mobile Apps', href: '/services' },
    { label: 'AI Solutions', href: '/services' },
    { label: 'SaaS Products', href: '/services' },
    { label: 'Cloud Infrastructure', href: '/services' },
    { label: 'Blockchain', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const contactEmail = 'fusionframetech.team@gmail.com';
const officeAddress = 'Office no 104 DDA COMPLEX JANAK PURI C BLOCK PANKHA ROAD NEW DELHI 110058';

export default function Footer() {
  return (
    <footer className="relative bg-[#030711] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <Zap size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base leading-none">FusionFrame</span>
                <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase leading-none mt-0.5">Tech</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Building future-ready digital experiences. We help startups and businesses transform ideas into powerful digital products.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                <Mail size={14} className="text-cyan-500/70" />
                {contactEmail}
              </a>
              <a href="tel:+919122240210" className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                <Phone size={14} className="text-cyan-500/70" />
                +91 9122240210
              </a>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <MapPin size={14} className="text-cyan-500/70" />
                {officeAddress}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-10 border-b border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Stay ahead of the curve</h3>
              <p className="text-slate-400 text-sm">Get the latest insights on technology, AI, and digital transformation.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
              />
              <button type="submit" className="btn-primary py-2.5 px-5 whitespace-nowrap">
                <span className="relative z-10 flex items-center gap-1.5">Subscribe <ArrowUpRight size={14} /></span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} FusionFrameTech. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</Link>
            <span className="text-white/10">·</span>
            <Link to="/terms" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</Link>
            <span className="text-white/10">·</span>
            <span className="text-slate-600 text-xs">Built with precision in New Delhi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
