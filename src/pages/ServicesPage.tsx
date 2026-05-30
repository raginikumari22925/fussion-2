import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import CTASection from '../components/sections/CTASection';

export default function ServicesPage() {
  return (
    <div className="bg-[#050816] min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-5"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">What We Build</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-5"
          >
            Services that{' '}
            <span className="text-gradient">Drive Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            From idea to launch and beyond — we offer end-to-end technology services designed to scale with your ambitions.
          </motion.p>
        </div>
      </section>

      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
