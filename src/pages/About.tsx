import { useNavigate } from 'react-router-dom'
import styles from './About.module.css'

const experience = [
  { period: '2018 – 2024', role: 'Full Stack Engineer', context: 'FinTech · agencies · startups · consulting', detail: 'Six years building production software across the full stack — from consumer-facing applications to backend infrastructure. Worked across company sizes from early-stage startups to professional consultancies.' },
  { period: 'Education', role: 'BSc Electrical & Computer Engineering', context: 'University of the Western Cape', detail: 'Grounding in both hardware systems and software engineering — giving a perspective on automation that goes deeper than most pure software practitioners.' },
  { period: '2024 – Present', role: 'Founder, Tugela', context: 'Cape Town · tugela.ai', detail: 'Active engagements across education, ESG data, and retail operations — with a focus on building long-term partnerships rather than one-off projects.' },
]

const partners = [
  { name: 'University of the Western Cape', type: 'Academic partner', location: 'Cape Town, SA' },
  { name: 'Griffith University', type: 'Academic partner', location: 'Brisbane, AU' },
  { name: 'Argonaught Science', type: 'NGO', location: 'South Africa' },
  { name: 'Labyrinth Studios', type: 'Film Studio', location: 'South Africa' },
]

const values = [
  { title: 'Prototype first', body: "We show you something working before we commit to building the full system. Every time. It's how we keep alignment high and surprises low." },
  { title: 'Right tool, right problem', body: "We're not married to any particular technology stack. We choose tools based on what fits the problem — not what we've already invested in." },
  { title: 'Rigour over shortcuts', body: "Engineering thinking means we don't guess. We map the problem properly before proposing a solution — and we build things that hold up under real-world conditions, not just in demos." },
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
          <h1 className={styles.heading}>Founded on engineering principles.<br /><span className={styles.accent}>Built around your problem.</span></h1>
          <p className={styles.sub}>Tugela brings together the right expertise for every problem — grounded in engineering thinking, shaped around your specific context, and focused on outcomes that actually move your organisation forward.</p>
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
              <p className={styles.founderRole}>Founder · Tugela</p>
              <p className={styles.founderText}>
                Tugela exists because most organisations are sitting on untapped potential — processes that could run themselves, data that could drive better decisions, and teams spending time on work that software should be doing.
              </p>
              <p className={styles.founderText}>
                With a background in electrical and computer engineering and six years building production systems across FinTech, startups, and consulting — I started Tugela to close that gap. Not with off-the-shelf tools, and not with a generic playbook, but by getting into the detail of how an organisation actually works and building something that fits.
              </p>
              <p className={styles.founderText}>
                Every engagement is a collaboration. We bring the technical depth, the engineering rigour, and the curiosity — you bring the domain knowledge and the ambition. Together we build something worth building.
              </p>
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
          <p className={styles.partnersIntro}>
            Tugela works with a trusted network of specialists and institutional partners — bringing the right expertise to every engagement, whether that's deep domain knowledge, specialised engineering, or research capability.
          </p>
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
          <h2 className={styles.ctaHeading}>Ready to see what's possible?</h2>
          <p className={styles.ctaSub}>Start with a conversation about your organisation — where it's running well, where it's getting stuck, and where intelligent automation could change the game.</p>
          <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>Get in touch</button>
        </div>
      </section>

    </div>
  )
}
