import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

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
              { value: '20', label: 'Projects Delivered' },
              { value: '35+', label: 'Team Members' },
              { value: '2+', label: 'Countries' },
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

      <CTASection />
    </div>
  );
}
