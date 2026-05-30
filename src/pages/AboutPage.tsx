import { motion } from 'framer-motion';
import { Target, Eye, Zap, Shield, Users, Layers, Award, Globe } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-Founder',
    bio: 'Ex-Google. 15 years building scalable systems. Passionate about AI and developer experience.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Meta. Distributed systems expert. Led engineering teams of 50+ engineers.',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Design',
    bio: 'Award-winning designer. Previously designed products used by 50M+ people.',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Sofia Garcia',
    role: 'Head of AI/ML',
    bio: 'PhD in Machine Learning. Published researcher. Expert in LLMs and computer vision.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'Head of Engineering',
    bio: 'Ex-Stripe. Distributed systems & payments expert. Loves Rust and Go.',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Emma Williams',
    role: 'Head of Product',
    bio: 'Ex-Notion. Product strategist. Bridges the gap between user needs and technical reality.',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
  },
];

const milestones = [
  { year: '2020', event: 'FusionFrameTech founded in San Francisco with a team of 5' },
  { year: '2021', event: 'Shipped 30+ projects, expanded to 20-person team' },
  { year: '2022', event: 'Launched AI practice, served first Fortune 500 client' },
  { year: '2023', event: 'Expanded globally, team grew to 35+ across 3 continents' },
  { year: '2024', event: '150+ projects delivered, 98% client retention rate' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#050816] min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-5"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-5"
          >
            We Build the{' '}
            <span className="text-gradient">Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A team of passionate engineers, designers, and product thinkers united by the belief that great technology should be accessible to every ambitious company.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '35+', label: 'Team Members' },
              { value: '25+', label: 'Countries' },
              { value: '98%', label: 'Retention Rate' },
            ].map((s, i) => (
              <div key={i} className="bg-[#050816] py-8 text-center">
                <div className="text-3xl md:text-4xl font-black text-gradient mb-1">{s.value}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="section-padding bg-[#0A1022]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: 'Mission', color: 'from-cyan-500 to-blue-600', text: 'To empower businesses of all sizes with technology solutions that create real competitive advantages. We believe innovation shouldn\'t be a luxury — it should be the standard for every company building for tomorrow.' },
              { icon: Eye, title: 'Vision', color: 'from-blue-500 to-cyan-600', text: 'To become the most trusted technology partner for the next generation of digital leaders. We envision a world where building great software is fast, reliable, and accessible — and we\'re making that world a reality.' },
            ].map(({ icon: Icon, title, color, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#050816]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Our <span className="text-gradient">Journey</span></h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-cyan-500/40 to-transparent mt-2" />}
                </div>
                <div className="glass-card rounded-xl p-4 flex-1 mb-2">
                  <div className="text-cyan-400 text-xs font-mono font-bold mb-1">{m.year}</div>
                  <p className="text-slate-300 text-sm">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#0A1022]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Meet the <span className="text-gradient">Team</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Senior engineers and designers from the world's best technology companies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-2xl object-cover mb-4 border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors"
                />
                <h3 className="text-white font-bold text-base mb-0.5">{member.name}</h3>
                <div className="text-cyan-400 text-xs font-medium mb-2">{member.role}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
