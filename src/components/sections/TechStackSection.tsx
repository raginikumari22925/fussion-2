import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techCategories = [
  {
    name: 'Frontend',
    color: 'from-cyan-500 to-blue-600',
    techs: [
      { name: 'React', icon: '⚛' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind', icon: '~' },
      { name: 'Framer', icon: 'F' },
    ],
  },
  {
    name: 'Backend',
    color: 'from-emerald-500 to-teal-600',
    techs: [
      { name: 'Node.js', icon: '⬡' },
      { name: 'Express', icon: 'Ex' },
      { name: 'Python', icon: 'Py' },
      { name: 'GraphQL', icon: '◈' },
      { name: 'REST', icon: '⟡' },
    ],
  },
  {
    name: 'Database',
    color: 'from-blue-500 to-indigo-600',
    techs: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: 'R' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'Prisma', icon: 'P' },
    ],
  },
  {
    name: 'Cloud',
    color: 'from-orange-500 to-red-600',
    techs: [
      { name: 'AWS', icon: '☁' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⎈' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Terraform', icon: '⟡' },
    ],
  },
  {
    name: 'AI / ML',
    color: 'from-violet-500 to-blue-600',
    techs: [
      { name: 'OpenAI', icon: '◯' },
      { name: 'LangChain', icon: '⛓' },
      { name: 'HuggingFace', icon: '🤗' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Pinecone', icon: '🌲' },
    ],
  },
  {
    name: 'Data Science',
    color: 'from-amber-500 to-rose-600',
    techs: [
      { name: 'Pandas', icon: 'Pd' },
      { name: 'NumPy', icon: 'Np' },
      { name: 'Scikit-learn', icon: 'Sk' },
      { name: 'Jupyter', icon: 'Jp' },
      { name: 'Power BI', icon: 'BI' },
    ],
  },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-[#050816] relative overflow-hidden" id="tech">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Technology Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5"
          >
            Powered by{' '}
            <span className="text-gradient">Best-in-Class</span>{' '}
            Tech
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            We use the same tools as the top 1% of technology teams. Battle-tested, modern, and scalable.
          </motion.p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass-card rounded-2xl p-6 overflow-hidden relative"
            >
              {/* Header gradient */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="flex items-center gap-2 mb-5">
                <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="text-white font-bold text-lg">{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, ti) => (
                  <motion.div
                    key={ti}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/4 border border-white/6 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200 cursor-default group/tech"
                  >
                    <span className="text-base leading-none w-5 text-center">{tech.icon}</span>
                    <span className="text-slate-300 text-sm font-medium group-hover/tech:text-white transition-colors">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
