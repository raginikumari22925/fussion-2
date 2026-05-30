import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'NeuralCommerce',
    category: 'AI + E-commerce',
    description: 'AI-powered e-commerce platform with personalized product recommendations and conversational shopping assistant serving 2M+ users.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tags: ['React', 'OpenAI', 'Node.js', 'AWS'],
    color: 'from-cyan-500 to-blue-600',
    stats: { metric: '2M+', label: 'Monthly Users' },
  },
  {
    title: 'ChainVault DeFi',
    category: 'Blockchain + DeFi',
    description: 'Decentralized finance protocol with automated yield optimization, cross-chain bridging, and $50M+ TVL at peak.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tags: ['Solidity', 'React', 'Ethereum', 'Hardhat'],
    color: 'from-amber-500 to-orange-600',
    stats: { metric: '$50M+', label: 'Total Value Locked' },
  },
  {
    title: 'HealthSync Platform',
    category: 'Healthcare + SaaS',
    description: 'HIPAA-compliant telehealth platform connecting 10,000+ patients with doctors through AI-assisted diagnostics and scheduling.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Docker'],
    color: 'from-emerald-500 to-teal-600',
    stats: { metric: '10K+', label: 'Active Patients' },
  },
  {
    title: 'LogiFlow Enterprise',
    category: 'Enterprise + Logistics',
    description: 'End-to-end supply chain management system for Fortune 500 company processing 500K+ daily shipments across 40 countries.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'Kubernetes', 'MongoDB'],
    color: 'from-blue-500 to-cyan-600',
    stats: { metric: '500K+', label: 'Daily Shipments' },
  },
  {
    title: 'EduVerse Learning',
    category: 'EdTech + Mobile',
    description: 'Gamified learning mobile app with AI tutoring, adaptive curriculum, and real-time collaboration for K-12 students.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tags: ['React Native', 'OpenAI', 'Firebase', 'TypeScript'],
    color: 'from-violet-500 to-blue-600',
    stats: { metric: '100K+', label: 'Students' },
  },
  {
    title: 'PropTech Nexus',
    category: 'Real Estate + Analytics',
    description: 'Real estate analytics platform with ML-powered price prediction, 3D property tours, and automated valuation reports.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tags: ['Next.js', 'Python', 'Three.js', 'AWS'],
    color: 'from-rose-500 to-pink-600',
    stats: { metric: '99.9%', label: 'Uptime' },
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}>
            {project.category}
          </span>
        </div>

        {/* Stat */}
        <div className="absolute top-4 right-4 glass rounded-xl px-3 py-1.5 text-center">
          <div className="text-white font-black text-sm">{project.stats.metric}</div>
          <div className="text-slate-400 text-xs">{project.stats.label}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, ti) => (
            <span key={ti} className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-all">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-cyan-400 text-sm font-medium group-hover:gap-2.5 transition-all">
          View Case Study <ExternalLink size={13} />
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="section-padding bg-[#0A1022] relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Our Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5"
          >
            Products We've{' '}
            <span className="text-gradient">Shipped</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            From early-stage startups to enterprise platforms — here's a selection of our most impactful work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-4">
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
