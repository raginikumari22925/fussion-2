import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const services = [
  'Web Development', 'Mobile Development', 'AI Solutions', 'SaaS Products',
  'Cloud Infrastructure', 'UI/UX Design', 'MVP Development', 'Enterprise Software',
  'Blockchain', 'Technology Consulting', 'Other',
];

const budgets = ['Under $10K', '$10K - $25K', '$25K - $50K', '$50K - $100K', '$100K+'];
const contactEmail = 'fusionframetech.team@gmail.com';
const officeAddress = 'New Delhi';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 1500));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-[#050816] relative overflow-hidden" id="contact">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4"
          >
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Get in Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5"
          >
            Let's Build{' '}
            <span className="text-gradient">Something Great</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-lg mx-auto"
          >
            Have a project in mind? Tell us about it. We'll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Mail, label: 'Email', value: contactEmail, href: `mailto:${contactEmail}` },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
              { icon: MapPin, label: 'Location', value: officeAddress, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="text-white text-sm font-medium hover:text-cyan-400 transition-colors whitespace-pre">{value}</a>
                  ) : (
                    <span className="text-white text-sm font-medium whitespace-pre">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Response time */}
            <div className="glass-card rounded-xl p-5 border-cyan-500/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold">Available for New Projects</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Average response time: <span className="text-white font-semibold">under 2 hours</span>. We read every message personally.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Message Received!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-2xl p-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">Full Name *</label>
                    <input
                      {...register('name')}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">Email *</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">Company</label>
                  <input
                    {...register('company')}
                    placeholder="Your Company (optional)"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">Service *</label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#0A1022]">Select service...</option>
                      {services.map(s => <option key={s} value={s} className="bg-[#0A1022]">{s}</option>)}
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">Budget Range *</label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#0A1022]">Select budget...</option>
                      {budgets.map(b => <option key={b} value={b} className="bg-[#0A1022]">{b}</option>)}
                    </select>
                    {errors.budget && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.budget.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">Project Details *</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
