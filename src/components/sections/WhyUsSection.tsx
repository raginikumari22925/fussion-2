import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Zap, Shield, Brain, Headphones, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Senior engineers with 5-15 years of experience at top tech companies. No juniors on your critical projects.',
    metric: '35+',
    metricLabel: 'Team Members',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'We ship MVPs in weeks, not months. Agile processes and battle-tested workflows ensure on-time delivery.',
    metric: '2-6',
    metricLabel: 'Week MVPs',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    desc: 'Built to handle 10x your current load. Cloud-native, microservices-ready architecture from day one.',
    metric: '10x',
    metricLabel: 'Scale Ready',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'SOC2-compliant processes, penetration testing, and security audits ensure your data stays protected.',
    metric: '0',
    metricLabel: 'Security Breaches',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    desc: 'Every product we build considers AI augmentation. We future-proof your tech stack for the AI era.',
    metric: '40+',
    metricLabel: 'AI Integrations',
    color: 'from-violet-500 to-blue-600',
  },
  {
    icon: Headphones,
    title: 'Long-Term Support',
    desc: 'We\'re not a build-and-disappear agency. Long-term partnerships with dedicated support and maintenance.',
    metric: '24/7',
    metricLabel: 'Support Available',
    color: 'from-sky-500 to-cyan-600',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-[#050816] relative overflow-hidden" id="why-us">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Why FusionFrameTech</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5"
          >
            Built Different,{' '}
            <span className="text-gradient">Built Better</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            We don't just write code — we architect solutions. Here's what makes us different.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group glass-card rounded-2xl p-6 relative overflow-hidden"
              >
                {/* Top bar gradient */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" strokeWidth={1.8} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-gradient">{reason.metric}</div>
                    <div className="text-slate-500 text-xs">{reason.metricLabel}</div>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
