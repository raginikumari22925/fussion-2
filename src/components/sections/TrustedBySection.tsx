import { motion } from 'framer-motion';

const companies = [
  'Stripe', 'Vercel', 'Linear', 'Figma', 'Notion', 'Loom', 'Resend', 'Planetscale',
  'Supabase', 'Railway', 'Clerk', 'Neon', 'Upstash', 'Trigger.dev', 'Inngest', 'Turso',
];

export default function TrustedBySection() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-16 bg-[#050816] border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-transparent to-[#050816] z-10 pointer-events-none" />

      <div className="container-xl mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-500 text-sm uppercase tracking-widest font-medium"
        >
          Trusted by innovative teams at
        </motion.p>
      </div>

      <div className="flex overflow-hidden" aria-hidden>
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors duration-300 cursor-default select-none"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
              <span className="text-sm font-semibold tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
