import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to build a custom software project?',
    a: 'Timeline depends on project complexity. A typical MVP takes 6-10 weeks. Mid-complexity projects range from 3-6 months. Enterprise systems can take 6-12 months. We always provide detailed timelines during discovery.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer flexible engagement models: fixed-price for well-defined projects, time-and-materials for evolving requirements, and dedicated team models for long-term partnerships. We provide transparent quotes with no hidden costs.',
  },
  {
    q: 'Do you sign NDAs and protect intellectual property?',
    a: 'Absolutely. Every project begins with a comprehensive NDA. All code, designs, and intellectual property created for you belongs entirely to you. We maintain strict confidentiality protocols.',
  },
  {
    q: 'Can you work with our existing team or codebase?',
    a: 'Yes. We integrate seamlessly with existing teams through team augmentation. We also take over and improve legacy codebases — our engineers conduct thorough code reviews and modernization assessments.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'We work across the full stack: React/Next.js frontends, Node.js/Python backends, PostgreSQL/MongoDB databases, AWS cloud infrastructure, React Native mobile apps, Solidity smart contracts, and OpenAI/LangChain AI integrations.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes. We offer tiered maintenance packages including 24/7 monitoring, bug fixes, security patches, performance optimization, and feature additions. Most clients stay with us long after launch.',
  },
  {
    q: 'How do you ensure code quality and security?',
    a: 'We follow industry best practices: code reviews, automated testing (unit, integration, e2e), CI/CD pipelines, OWASP security guidelines, regular dependency audits, and optional third-party security audits for high-stakes applications.',
  },
  {
    q: 'Can you help with both MVP and enterprise-scale products?',
    a: 'Absolutely. We design MVPs with scalability in mind so you never have to rebuild. Our architecture patterns handle both 100 and 10 million users. We\'ve shipped everything from 2-week MVPs to year-long enterprise transformations.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`group border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? 'border-cyan-500/30 bg-cyan-500/3' : 'border-white/5 bg-white/2 hover:border-white/10'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
      >
        <span className={`font-semibold text-base transition-colors ${open ? 'text-cyan-300' : 'text-white'}`}>
          {faq.q}
        </span>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          open ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400 group-hover:bg-white/8'
        }`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-white/5 mb-4" />
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="section-padding bg-[#0A1022] relative overflow-hidden" id="faq">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Common Questions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5"
          >
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-lg mx-auto"
          >
            Everything you need to know before we start building together.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>
  );
}
