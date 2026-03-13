import { useNavigate } from 'react-router-dom'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'AI Workflow Automation',
    description: 'We identify the repetitive, manual processes inside your business and replace them with intelligent automated systems. Your team stops doing the work that doesn\'t need a human, and starts focusing on the work that does.',
    outcomes: ['Automated data entry and processing', 'Intelligent document handling', 'Cross-system workflow orchestration', 'Automated reporting and alerts'],
  },
  {
    num: '02',
    title: 'Business Intelligence & AI Analytics',
    description: 'Your business is generating data you\'re not using. We build AI-powered dashboards and analysis tools that surface the patterns and insights buried in your operations — so you can make better decisions faster.',
    outcomes: ['Custom analytics dashboards', 'AI-assisted data interpretation', 'Operational performance tracking', 'Predictive trend analysis'],
  },
  {
    num: '03',
    title: 'ESG & Education Tools',
    description: 'We build purpose-built platforms for educational institutions and organisations with environmental and social reporting requirements. Currently active with UWC and Griffith University on pilot ESG data projects.',
    outcomes: ['ESG data collection and reporting', 'Research collaboration platforms', 'Institutional compliance tools', 'Pilot-to-rollout deployment'],
  },
  {
    num: '04',
    title: 'Retail & POS Systems',
    description: 'Custom point-of-sale and retail operations software built for fashion, specialty retail, and businesses with niche operational models that off-the-shelf POS systems can\'t accommodate.',
    outcomes: ['Custom POS development', 'Inventory and order management', 'Customer data and loyalty systems', 'Multi-location support'],
  },
]

const industries = [
  { label: 'Education', desc: 'Universities, schools, research institutions' },
  { label: 'NGOs & nonprofits', desc: 'Impact reporting, programme management' },
  { label: 'Retail & fashion', desc: 'POS, inventory, customer operations' },
  { label: 'Professional services', desc: 'Agencies, consultancies, advisory firms' },
  { label: 'Government', desc: 'Provincial and national tender projects' },
  { label: 'FinTech & finance', desc: 'Compliance, reporting, workflow automation' },
]

const faqs = [
  { q: 'How is Tugela different from a regular software agency?', a: 'Most agencies take a brief and disappear until they have something finished. We work with you continuously — from discovery through to deployment — with a prototype in your hands early so you can shape the outcome before it\'s built.' },
  { q: 'Do I need a technical background to work with you?', a: 'No. Our process is designed around making complexity legible. We translate the technical decisions into plain language throughout, so you\'re always in a position to give meaningful feedback.' },
  { q: 'How long does a typical project take?', a: 'A prototype is typically ready within 2–4 weeks. Full builds vary by complexity, but our phased approach means you\'re seeing working software throughout — not waiting months for a big reveal.' },
  { q: 'What if we\'re not sure what we need?', a: 'That\'s what the discovery call is for. We\'ll map your operations, identify where AI can have the most impact, and propose a solution. There\'s no commitment required at that stage.' },
  { q: 'Can you work within our existing tools and infrastructure?', a: 'Yes. We build to fit your existing stack wherever possible — whether that\'s integrating with your current cloud provider, CRM, or internal systems.' },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <div className={`page-enter ${styles.page}`}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.tag}>Services</div>
          <h1 className={styles.heading}>What we build</h1>
          <p className={styles.sub}>Custom AI systems across four areas where automation makes the biggest operational difference.</p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className={styles.servicesSection}>
        <div className="container">
          {services.map((s) => (
            <div key={s.num} className={styles.serviceCard}>
              <div className={styles.serviceLeft}>
                <span className={styles.serviceNum}>{s.num}</span>
                <h2 className={styles.serviceTitle}>{s.title}</h2>
                <p className={styles.serviceDesc}>{s.description}</p>
              </div>
              <ul className={styles.outcomeList}>
                {s.outcomes.map(o => (
                  <li key={o} className={styles.outcomeItem}>
                    <span className={styles.outcomeDot} />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className={styles.industriesSection}>
        <div className="container">
          <div className={styles.tag}>Industries</div>
          <h2 className={styles.sectionHeading}>Who we work with</h2>
          <div className={styles.industryGrid}>
            {industries.map(i => (
              <div key={i.label} className={styles.industryCard}>
                <span className={styles.industryLabel}>{i.label}</span>
                <span className={styles.industryDesc}>{i.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS RECAP */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.tag}>Our process</div>
          <h2 className={styles.sectionHeading}>Discover → Prototype → Build → Measure</h2>
          <p className={styles.processBody}>Most project failures aren't technical — they're alignment failures. We don't let that happen.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.tag}>FAQs</div>
          <h2 className={styles.sectionHeading}>Common questions</h2>
          <div className={styles.faqList}>
            {faqs.map(f => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{f.q}</summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeading}>Ready to see what's possible?</h2>
          <p className={styles.ctaSub}>Book a free discovery call and we'll map your highest-value automation opportunities.</p>
          <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>Book a free call</button>
        </div>
      </section>

    </div>
  )
}
