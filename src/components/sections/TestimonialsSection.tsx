import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    company: 'NeuralCommerce Inc.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    text: 'ArunSarthakTech delivered our AI-powered platform in just 10 weeks. The quality was exceptional — the codebase is clean, scalable, and our users love the experience. They\'re not just developers, they\'re true technology partners.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'ChainVault Protocol',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    text: 'Building DeFi protocols requires extreme precision. ArunSarthakTech\'s blockchain team passed every security audit with zero vulnerabilities. We hit $50M TVL within 3 months of launch. Incredible work.',
    rating: 5,
  },
  {
    name: 'Dr. Amanda Foster',
    role: 'Founder',
    company: 'HealthSync Platform',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    text: 'Healthcare software requires strict HIPAA compliance and impeccable UX. ArunSarthakTech nailed both. Our platform onboarded 10,000+ patients in the first quarter. The attention to detail is unmatched.',
    rating: 5,
  },
  {
    name: 'James Park',
    role: 'VP Engineering',
    company: 'LogiFlow Enterprise',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    text: 'Our enterprise system processes 500K+ daily shipments across 40 countries. ArunSarthakTech built it to handle 10x our current load from day one. Zero downtime in 18 months of production.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Product Lead',
    company: 'EduVerse Learning',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    text: 'The mobile app ArunSarthakTech built for us is genuinely beautiful. 100,000+ students use it daily and the App Store rating is 4.9 stars. They understood our vision from day one and exceeded every expectation.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visibleCount = 3;
  const visible = Array.from({ length: visibleCount }, (_, i) => testimonials[(current + i) % testimonials.length]);

  return (
    <section className="section-padding bg-[#050816] relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Client Love</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5"
          >
            What Clients{' '}
            <span className="text-gradient">Say About Us</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {visible.map((t, i) => (
            <motion.div
              key={`${current}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden ${i === 1 ? 'border-cyan-500/20 md:-mt-4 md:-mb-4' : ''}`}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-cyan-500/20">
                <Quote size={40} strokeWidth={1} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-4">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500/20"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-cyan-400 w-6' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
