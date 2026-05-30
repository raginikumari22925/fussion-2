import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Paintbrush, Code2, TestTube2, Rocket, LifeBuoy } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Planning',
    desc: 'Deep dive into your goals, requirements, and technical landscape. We create a precise project roadmap with milestones.',
    duration: '1-2 weeks',
    deliverables: ['Requirements doc', 'Project roadmap', 'Tech architecture', 'Timeline & budget'],
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Research & Design',
    desc: 'User research, competitive analysis, and wireframing. We craft designs that users love before writing a single line of code.',
    duration: '2-3 weeks',
    deliverables: ['User research', 'Wireframes', 'UI design system', 'Prototype'],
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development',
    desc: 'Iterative development with weekly sprints and demos. Full transparency into progress with daily standups and Slack updates.',
    duration: '4-16 weeks',
    deliverables: ['Sprint demos', 'Code repository', 'Documentation', 'API integration'],
  },
  {
    number: '04',
    icon: TestTube2,
    title: 'Testing & QA',
    desc: 'Rigorous automated and manual testing. Performance benchmarks, security audits, and cross-browser compatibility.',
    duration: '1-2 weeks',
    deliverables: ['Test reports', 'Performance audit', 'Security scan', 'Bug fixes'],
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deployment',
    desc: 'Smooth zero-downtime deployment to production. CI/CD pipelines, monitoring setup, and rollback procedures in place.',
    duration: '3-5 days',
    deliverables: ['Live deployment', 'CI/CD pipeline', 'Monitoring setup', 'Handover docs'],
  },
  {
    number: '06',
    icon: LifeBuoy,
    title: 'Support & Scaling',
    desc: 'Ongoing maintenance, feature additions, and performance optimization. We scale with your success.',
    duration: 'Ongoing',
    deliverables: ['24/7 monitoring', 'Monthly reports', 'Feature updates', 'Scaling support'],
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-[#0A1022] relative overflow-hidden" id="process">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container-xl relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">How We Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5"
          >
            Our <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            A proven methodology refined over 150+ projects. Transparent, agile, and designed for success.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent hidden lg:block" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${i > 0 ? 'lg:-mt-4' : ''}`}
                >
                  {/* Card */}
                  <div className={`${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'} group glass-card rounded-2xl p-6 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300`}>
                    {/* Step number bg */}
                    <div className="absolute top-4 right-4 text-6xl font-black text-white/3 select-none">{step.number}</div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-white" strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="text-cyan-400 text-xs font-mono font-semibold mb-0.5">Step {step.number}</div>
                        <h3 className="text-white font-bold text-lg leading-tight">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{step.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d, di) => (
                        <span key={di} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">
                          {d}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-cyan-400/70 text-xs font-medium">{step.duration}</span>
                    </div>
                  </div>

                  {/* Center dot (visible on desktop) */}
                  <div className={`hidden lg:flex items-center justify-center ${isLeft ? 'lg:col-start-2 lg:col-end-2' : 'lg:col-start-1 lg:col-end-2 lg:row-start-1'} lg:row-start-auto`}>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-[#0A1022] relative z-10 shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
