import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using ArunSarthakTech's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: '2. Use of Website',
    content: `You may use our website for lawful purposes only. You agree not to:
• Use the site in any way that violates applicable local, national, or international laws
• Transmit unsolicited commercial communications
• Attempt to gain unauthorized access to our systems
• Interfere with the proper working of the website
• Reproduce, duplicate, or sell any part of the website without permission`,
  },
  {
    title: '3. Service Terms',
    content: `**Engagement:** All service engagements begin with a signed Statement of Work (SOW) or contract defining scope, timeline, and deliverables.

**Modifications:** Any changes to agreed scope require written approval and may affect timeline and cost.

**Quality Guarantee:** We stand behind our work. If deliverables don't meet agreed specifications, we will fix them at no additional charge.

**Communication:** We maintain regular communication throughout all projects via agreed channels.`,
  },
  {
    title: '4. Intellectual Property',
    content: `**Client Work:** Upon full payment, all intellectual property created specifically for client projects transfers to the client. This includes source code, designs, and documentation.

**Pre-existing IP:** ArunSarthakTech retains ownership of pre-existing tools, frameworks, and methodologies used in project delivery.

**Portfolio Rights:** We reserve the right to include completed projects in our portfolio unless otherwise agreed in writing.

**Third-party IP:** We ensure all third-party components used in projects are properly licensed.`,
  },
  {
    title: '5. Payments and Fees',
    content: `**Payment Schedule:** Payment terms are defined in individual project agreements. Typical arrangements include upfront deposits and milestone-based payments.

**Late Payments:** Invoices not paid within 30 days may incur a late fee of 1.5% per month.

**Refunds:** Refund eligibility depends on project phase and work completed. We work fairly with clients when disputes arise.

**Taxes:** Clients are responsible for applicable taxes in their jurisdiction unless otherwise specified.`,
  },
  {
    title: '6. Confidentiality',
    content: `Both parties agree to maintain confidentiality of proprietary information shared during the engagement. We sign NDAs upon request and treat all client information with the highest level of discretion. This obligation survives termination of the engagement.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by law, ArunSarthakTech shall not be liable for:
• Indirect, incidental, or consequential damages
• Loss of profits or business opportunities
• Data loss beyond what reasonable backups could recover
• Third-party service failures

Our total liability for any claim shall not exceed the fees paid in the three months preceding the claim.`,
  },
  {
    title: '8. User Responsibilities',
    content: `Clients are responsible for:
• Providing accurate requirements and timely feedback
• Supplying necessary access, assets, and information
• Maintaining appropriate licenses for third-party tools you provide
• Ensuring content provided does not infringe third-party rights
• Keeping project credentials and access tokens secure`,
  },
  {
    title: '9. Termination',
    content: `Either party may terminate a project engagement with 30 days written notice. Upon termination:
• Client pays for work completed to date
• ArunSarthakTech delivers all completed work
• Both parties return or destroy confidential information`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms of Service are governed by the laws of India. Any disputes shall be resolved through binding arbitration in Ganganagar.

**Contact:** For legal inquiries, contact arun.sarthaktech@gmail.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[#050816] min-h-screen">
      <section className="relative pt-36 pb-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-5">
              <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Terms of Service</h1>
            <p className="text-slate-400">Last updated: January 1, 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-slate-300 leading-relaxed">
                These Terms of Service govern your use of ArunSarthakTech's website and services. Please read them carefully before engaging our services or using our website.
              </p>
            </motion.div>

            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-card rounded-2xl p-6"
              >
                <h2 className="text-white font-bold text-xl mb-4">{section.title}</h2>
                <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {section.content.split('**').map((part, pi) =>
                    pi % 2 === 1
                      ? <strong key={pi} className="text-slate-200 font-semibold">{part}</strong>
                      : <span key={pi}>{part}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
