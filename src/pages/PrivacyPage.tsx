import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, including when you fill out a contact form, subscribe to our newsletter, or communicate with us.

**Personal Information:** Name, email address, phone number, company name, and any other information you choose to provide.

**Usage Data:** Information about how you interact with our website, including IP address, browser type, pages visited, time spent on pages, and referring URLs.

**Cookies and Tracking Technologies:** We use cookies and similar tracking technologies to track activity on our website and hold certain information.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
• Respond to your inquiries and provide requested services
• Send you technical notices, updates, and support messages
• Send marketing communications (with your consent)
• Monitor and analyze usage patterns to improve our website
• Detect and prevent fraud and abuse
• Comply with legal obligations`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in these circumstances:

**Service Providers:** We may share information with trusted third-party service providers who assist us in operating our website and providing services, subject to confidentiality agreements.

**Legal Requirements:** We may disclose information when required by law or to protect our rights and safety.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your personal information. This includes:
• SSL/TLS encryption for data in transit
• Encrypted storage for sensitive data
• Access controls and authentication
• Regular security audits and penetration testing

However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '5. Cookies Policy',
    content: `We use the following types of cookies:

**Essential Cookies:** Required for the website to function properly.
**Analytics Cookies:** Help us understand how visitors interact with our website.
**Marketing Cookies:** Used to deliver relevant advertisements.

You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your location, you may have the following rights:
• **Access:** Request a copy of the personal data we hold about you
• **Correction:** Request correction of inaccurate or incomplete data
• **Deletion:** Request deletion of your personal data
• **Portability:** Receive your data in a structured, machine-readable format
• **Objection:** Object to processing of your personal data
• **Withdrawal:** Withdraw consent at any time

To exercise these rights, contact us at fusionframetech.team@gmail.com`,
  },
  {
    title: '7. Data Retention',
    content: `We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When data is no longer needed, we securely delete or anonymize it.`,
  },
  {
    title: '8. Contact Us',
    content: `If you have questions about this Privacy Policy, please contact us:

**FusionFrameTech**
Email: fusionframetech.team@gmail.com
Phone: +91 9122240210
Address: Office no 104 DDA COMPLEX JANAK PURI C BLOCK PANKHA ROAD NEW DELHI 110058`,
  },
];

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-400">Last updated: January 1, 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-slate-300 leading-relaxed">
                FusionFrameTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
              </p>
            </motion.div>

            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
