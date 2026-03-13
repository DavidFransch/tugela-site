import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const clients = ['University of the Western Cape', 'Griffith University', 'Argonaught Science', 'Labyrinth Studios']


const steps = [
  { n: '01', title: 'Discover together', body: 'We sit down with you and get curious about your business — how it runs, where it gets stuck, and where the real opportunities are. This part is energising. Most people haven\'t had someone look this closely at their operations before.' },
  { n: '02', title: 'See it before you commit', body: 'Before we build anything substantial, we put a working prototype in your hands. You can interact with it, react to it, and shape it. No surprises down the line.' },
  { n: '03', title: 'Build it together', body: 'Development happens in the open — regular demos, honest conversations, and room to evolve the solution as we learn more. You\'re never waiting months to see progress.' },
  { n: '04', title: 'Watch it work', body: 'We help you measure the impact once it\'s live. Then we figure out what to build next. The best client relationships are the ones that keep going.' },
]

const differentiators = [
  { title: 'We customise, not configure', body: 'Large firms lock you into the technologies they\'ve already invested in. We select tools based on what fits your problem — not whatever\'s on the approved vendor list.' },
  { title: 'FinTech-grade engineering', body: 'Six years building systems for complex, regulated industries means we think carefully about reliability, security, and scale — not just shipping something fast.' },
  { title: 'You\'re a collaborator', body: 'We walk through the process with you from start to finish. Every prototype review, every demo, every feedback round — you shape the outcome before it\'s locked in.' },
  { title: 'Proven in the field', body: 'Actively working with UWC and Griffith University on ESG data tools. We understand complex, stakeholder-heavy environments.' },
]

const testimonials = [
  { quote: 'Tugela understood our research workflows immediately. The prototype approach meant we could validate the solution before committing — and the final tool has meaningfully changed how we collect and report ESG data.', name: 'University of the Western Cape', role: 'Research Partner' },
  { quote: 'What stood out was the communication throughout. We weren\'t handed a finished product at the end — we shaped it at every stage. That\'s rare in our experience with software partners.', name: 'Argonaught Science', role: 'Client' },
  { quote: 'Fast, pragmatic, and genuinely invested in making it work for us. The automation they built has saved our team significant time every week.', name: 'Labyrinth Studios', role: 'Client' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={`page-enter ${styles.page}`}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroTag}>Built in Cape Town · Operating globally</div>
          <h1 className={styles.heroHeadline}>
            Smarter systems, sharper decisions, better outcomes.
          </h1>
          <p className={styles.heroSub}>
            Intelligent automation for organisations ready to spend less time on process and more time on growth.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>Book a free discovery call</button>
            <button className={styles.btnGhost} onClick={() => navigate('/services')}>See what we build →</button>
          </div>
        </div>
        <div className={styles.heroGlow} aria-hidden />
      </section>

      {/* CLIENT STRIP */}
      <section className={styles.clients}>
        <div className="container">
          <p className={styles.clientsLabel}>Trusted by</p>
          <div className={styles.clientsList}>
            {clients.map(c => <span key={c} className={styles.clientItem}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionTag}>The problem</div>
          <p className={styles.sectionBody}>
            Most businesses are generating more data than they can act on, running more manual processes than they should, and making decisions slower than they need to. The tools exist to fix this — but off-the-shelf software doesn't fit, and large consultancies don't scale down.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionTag}>The solution</div>
          <div className={styles.solutionGrid}>
            <div>
              <p className={styles.sectionBody}>
                We design and build custom automation for the workflows that matter most — from internal operations to customer-facing processes. The result is a system your team actually uses, built around how they already work, freeing them to focus on the decisions that drive growth.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <p className={styles.solutionQuote}>
                "Built on engineering principles, not best guesses.""
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionTag}>How it works</div>
          <h2 className={styles.sectionHeading}>We get into your business together — and build something real.</h2>
          <p className={styles.sectionBody}>This isn't a hand-off process. We dig into how your organisation works, find the opportunities worth building, and create something together — with you shaping it at every step.</p>
          <div className={styles.stepsGrid}>
            {steps.map(s => (
              <div key={s.n} className={styles.stepCard}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionTag}>What clients say</div>
          <h2 className={styles.sectionHeading}>Don't just take our word for it</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>{t.name}</span>
                  <span className={styles.testimonialRole}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionTag}>Why us</div>
          <h2 className={styles.sectionHeading}>Built for businesses that don't fit the standard playbook</h2>
          <div className={styles.diffGrid}>
            {differentiators.map(d => (
              <div key={d.title} className={styles.diffCard}>
                <span className={styles.diffAccent} aria-hidden>—</span>
                <h3 className={styles.diffTitle}>{d.title}</h3>
                <p className={styles.diffBody}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaHeading}>Let's find where AI can make the biggest difference in your business</h2>
              <p className={styles.ctaSub}>Start with a free discovery call. We'll map your highest-value automation opportunities and show you what's possible — no commitment required.</p>
            </div>
            <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>Book a free call</button>
          </div>
        </div>
      </section>

    </div>
  )
}
