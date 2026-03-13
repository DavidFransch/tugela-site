import { useNavigate } from 'react-router-dom'
import styles from './About.module.css'

const experience = [
  { period: '2018 – 2024', role: 'Senior Full Stack Engineer', context: 'FinTech · agencies · startups · consulting', detail: 'Six years building production software across the full stack — from consumer-facing applications to backend infrastructure. Worked across company sizes from early-stage startups to professional services firms.' },
  { period: 'Education', role: 'BSc Electrical & Computer Engineering', context: 'University of the Western Cape', detail: 'Grounding in both hardware systems and software engineering — giving a perspective on automation that goes deeper than most pure software practitioners.' },
  { period: '2024 – Present', role: 'Founder, Tugela', context: 'Cape Town · tugela.ai', detail: 'Building AI-powered systems for mid-market businesses and educational institutions. Currently active with UWC and Griffith University on ESG data tools, with ongoing work in retail operations software.' },
]

const partners = [
  { name: 'University of the Western Cape', type: 'Academic partner', location: 'Cape Town, SA' },
  { name: 'Griffith University', type: 'Academic partner', location: 'Brisbane, AU' },
  { name: 'Argonaught Science', type: 'NGO', location: 'South Africa' },
  { name: 'Labyrinth Studios', type: 'Film Studio', location: 'South Africa' },
]

const values = [
  { title: 'Prototype first', body: 'We show you something working before we commit to building the full system. Every time. It\'s how we keep alignment high and surprises low.' },
  { title: 'Right tool, right problem', body: 'We\'re not married to any particular technology stack. We choose tools based on what fits the problem — not what we\'ve already invested in.' },
  { title: 'Transparency throughout', body: 'You\'re a collaborator, not just a brief-giver. We communicate continuously and make the technical decisions legible to non-technical stakeholders.' },
  { title: 'Built to last', body: 'FinTech experience means we think about reliability, security, and scale from day one — not as afterthoughts before launch.' },
]

export default function About() {
  const navigate = useNavigate()

  return (
    <div className={`page-enter ${styles.page}`}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.tag}>About</div>
          <h1 className={styles.heading}>One engineer.<br /><span className={styles.accent}>A strong network.</span><br />A clear focus.</h1>
          <p className={styles.sub}>Tugela is a lean, founder-led consultancy. That's deliberate — it means you get direct access to senior expertise on every project, and a partner who's genuinely invested in the outcome.</p>
        </div>
      </section>

      {/* FOUNDER BIO */}
      <section className={styles.founderSection}>
        <div className="container">
          <div className={styles.founderGrid}>
            <div className={styles.founderAvatar}>
              <div className={styles.avatarPlaceholder}>
                <span className={styles.avatarInitial}>T</span>
                <p className={styles.avatarHint}>Add your photo here</p>
              </div>
            </div>
            <div className={styles.founderBio}>
              <div className={styles.tag}>Founder</div>
              <h2 className={styles.founderName}>Your Name</h2>
              <p className={styles.founderRole}>Founder & Lead Engineer · Tugela</p>
              <p className={styles.founderText}>I started Tugela because I kept seeing the same problem: mid-sized businesses and institutions with genuine operational complexity, stuck between enterprise software that didn't fit and manual processes that didn't scale.</p>
              <p className={styles.founderText}>After six years in FinTech — building systems across agencies, startups, and consulting firms — I knew the tooling existed to solve these problems. What was missing was someone willing to do the hard work of understanding a specific business before proposing a solution.</p>
              <p className={styles.founderText}>That's what Tugela is. A small, focused practice that builds the right thing, with the right tools, for businesses that don't fit the standard playbook.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.tag}>Experience</div>
          <h2 className={styles.sectionHeading}>Background</h2>
          <div className={styles.timeline}>
            {experience.map((e, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>{e.period}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineRole}>{e.role}</h3>
                  <p className={styles.timelineContext}>{e.context}</p>
                  <p className={styles.timelineDetail}>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.tag}>How we work</div>
          <h2 className={styles.sectionHeading}>Principles we build by</h2>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className={styles.partnersSection}>
        <div className="container">
          <div className={styles.tag}>Network & partners</div>
          <h2 className={styles.sectionHeading}>Who we work with</h2>
          <p className={styles.partnersIntro}>On larger projects, I bring in trusted specialists from my network — domain experts, senior engineers, and designers — to ensure the right expertise is always on the problem.</p>
          <div className={styles.partnerGrid}>
            {partners.map(p => (
              <div key={p.name} className={styles.partnerCard}>
                <span className={styles.partnerName}>{p.name}</span>
                <span className={styles.partnerType}>{p.type}</span>
                <span className={styles.partnerLocation}>{p.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeading}>Want to work together?</h2>
          <p className={styles.ctaSub}>Start with a conversation. No pressure, no pitch — just a discussion about your business and where AI might make a difference.</p>
          <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>Get in touch</button>
        </div>
      </section>

    </div>
  )
}
