import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, Smartphone, Brain, Package, Cloud, Palette,
  Rocket, Building2, Blocks, ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications built with React, Next.js, and modern technologies. Blazing fast, accessible, and scalable.',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter with premium UX.',
    color: 'from-blue-500 to-cyan-600',
    glow: 'rgba(59,130,246,0.15)',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Intelligent automation, LLM integration, RAG pipelines, and custom AI models that give your business a competitive edge.',
    color: 'from-emerald-500 to-cyan-600',
    glow: 'rgba(16,185,129,0.15)',
  },
  {
    icon: Package,
    title: 'SaaS Products',
    description: 'End-to-end SaaS development from architecture to launch. Multi-tenancy, billing, analytics, and everything in between.',
    color: 'from-orange-500 to-red-600',
    glow: 'rgba(249,115,22,0.15)',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'AWS, GCP, Azure deployments with Kubernetes orchestration, CI/CD pipelines, and monitoring for enterprise-grade reliability.',
    color: 'from-sky-500 to-blue-600',
    glow: 'rgba(14,165,233,0.15)',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Stunning interfaces and intuitive user experiences. Design systems, prototyping, and usability testing that converts.',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.15)',
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Ship your startup MVP in weeks, not months. Rapid prototyping with quality code that scales as you grow.',
    color: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.15)',
  },
  {
    icon: Building2,
    title: 'Enterprise Software',
    description: 'Complex enterprise systems, integrations, and workflows built for scale, security, and long-term maintainability.',
    color: 'from-slate-400 to-slate-600',
    glow: 'rgba(148,163,184,0.12)',
  },
  {
    icon: Blocks,
    title: 'Blockchain Solutions',
    description: 'Smart contracts, DeFi protocols, NFT platforms, and Web3 infrastructure on Ethereum, Solana, and more.',
    color: 'from-violet-500 to-blue-600',
    glow: 'rgba(139,92,246,0.15)',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative glass-card rounded-2xl p-6 cursor-pointer overflow-hidden"
      style={{ '--glow-color': service.glow } as React.CSSProperties}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${service.glow}, transparent 70%)` }}
      />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${service.glow}, transparent)`, padding: '1px' }}
      />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className="text-white" strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Arrow */}
      <div className="flex items-center gap-1.5 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 text-sm font-medium">
        Learn more
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-[#050816] relative overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">What We Build</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight"
          >
            Services that{' '}
            <span className="text-gradient">Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From concept to deployment, we build technology solutions that drive real business results. Every line of code written with purpose.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-4">
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
