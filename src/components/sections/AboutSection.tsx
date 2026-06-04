import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Zap, Shield, Users, Layers } from 'lucide-react';

const values = [
  { icon: Zap, label: 'Innovation', desc: 'Pushing boundaries with cutting-edge technology' },
  { icon: Shield, label: 'Security', desc: 'Security-first approach in everything we build' },
  { icon: Users, label: 'Partnership', desc: 'True partners in your digital transformation' },
  { icon: Layers, label: 'Scalability', desc: 'Architecture built for tomorrow\'s demands' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-[#0A1022] relative overflow-hidden" id="about">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#050816]">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />

              <div className="relative p-8 md:p-10">
                {/* Decorative rings */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  {[64, 48, 32, 20].map((size, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 m-auto rounded-full border border-cyan-500/20 animate-spin-slow"
                      style={{
                        width: `${size * 2 + 24}px`,
                        height: `${size * 2 + 24}px`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        animationDuration: `${20 + i * 8}s`,
                        animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.5)] animate-float">
                      <Zap size={40} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Founded', value: '2020' },
                    { label: 'Team Size', value: '35+' },
                    { label: 'Projects', value: '20' },
                  ].map((m, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
                      <div className="text-2xl font-black text-gradient">{m.value}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 border border-cyan-500/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-xs font-semibold">98% Client Retention</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2.5 border border-blue-500/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white text-xs font-semibold">2+ Countries Served</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-5">
              <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Building the{' '}
              <span className="text-gradient">Digital Backbone</span>{' '}
              of Tomorrow
            </h2>

            <p className="text-slate-400 leading-relaxed mb-5">
              FusionFrameTech was born from a simple belief: great technology should be accessible to every company, not just the Fortune 500. We founded the company with a team of engineers from top tech companies, united by a passion for building things that matter.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              Today, we're a full-stack technology partner helping startups launch, scale companies grow, and enterprises transform. Our work spans 2+ countries, 20 projects, and countless problems solved.
            </p>

            {/* Mission/Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={16} className="text-cyan-400" />
                  <span className="text-white font-semibold text-sm">Mission</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Empower businesses with technology that creates lasting competitive advantages.
                </p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Eye size={16} className="text-blue-400" />
                  <span className="text-white font-semibold text-sm">Vision</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Be the most trusted technology partner for the next generation of digital leaders.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{v.label}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{v.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
