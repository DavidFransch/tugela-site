import { useState } from 'react'
import styles from './Contact.module.css'

type FormState = {
  name: string
  email: string
  company: string
  companySize: string
  budget: string
  interest: string[]
  message: string
}

const companySizes = ['Less than 20', '20–50', '50–100', '100–500', '500+']
const budgets = ['Less than R50K', 'R50K–R200K', 'R200K–R500K', 'R500K+', 'Not sure yet']
const interests = [
  'AI workflow automation',
  'Business intelligence & analytics',
  'ESG / education tools',
  'Retail & POS software',
  'Government / tender project',
  'Something else',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', companySize: '', budget: '', interest: [], message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleInterest = (item: string) => {
    setForm(f => ({
      ...f,
      interest: f.interest.includes(item)
        ? f.interest.filter(i => i !== item)
        : [...f.interest, item],
    }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.company) return
    setLoading(true)
    // Replace this with your form submission endpoint (e.g. Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`page-enter ${styles.page}`}>
        <div className="container">
          <div className={styles.successBlock}>
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.successHeading}>We've got it.</h1>
            <p className={styles.successBody}>Thanks for reaching out. We'll review your message and get back to you within a couple of days to set up a call.</p>
            <p className={styles.successBody}>In the meantime, feel free to have a look at our <a href="/services" className={styles.link}>services page</a> to get a sense of what we build.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`page-enter ${styles.page}`}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.tag}>Contact</div>
          <h1 className={styles.heading}>Tell us where you're at</h1>
          <p className={styles.sub}>Share some context about your business and what you're looking to solve. We'll come back to you within a couple of days to set up a discovery call.</p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formGrid}>

            {/* FORM */}
            <div className={styles.formBlock}>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Your name *</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Work email *</label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="jane@yourcompany.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Company / organisation *</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                />
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Company size</label>
                  <div className={styles.chipGroup}>
                    {companySizes.map(s => (
                      <button
                        key={s}
                        className={`${styles.chip} ${form.companySize === s ? styles.chipActive : ''}`}
                        onClick={() => setForm(f => ({ ...f, companySize: s }))}
                        type="button"
                      >{s}</button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Project budget</label>
                <div className={styles.chipGroup}>
                  {budgets.map(b => (
                    <button
                      key={b}
                      className={`${styles.chip} ${form.budget === b ? styles.chipActive : ''}`}
                      onClick={() => setForm(f => ({ ...f, budget: b }))}
                      type="button"
                    >{b}</button>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>What are you interested in? (select all that apply)</label>
                <div className={styles.chipGroup}>
                  {interests.map(i => (
                    <button
                      key={i}
                      className={`${styles.chip} ${form.interest.includes(i) ? styles.chipActive : ''}`}
                      onClick={() => toggleInterest(i)}
                      type="button"
                    >{i}</button>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Anything else you'd like us to know?</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell us about your business, the problem you're trying to solve, or any context that would be helpful..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={5}
                />
              </div>

              <button
                className={styles.btnPrimary}
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email || !form.company}
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
              <p className={styles.formNote}>No sales pitch. We'll review what you've shared and come back with a plan for a conversation.</p>
            </div>

            {/* SIDEBAR */}
            <div className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideHeading}>What happens next</h3>
                <ol className={styles.stepList}>
                  <li className={styles.stepItem}><span className={styles.stepDot}>1</span><span>We review your submission and do a bit of research on your business</span></li>
                  <li className={styles.stepItem}><span className={styles.stepDot}>2</span><span>We get back to you within 2 business days to schedule a discovery call</span></li>
                  <li className={styles.stepItem}><span className={styles.stepDot}>3</span><span>On the call, we map your operations and identify the highest-value opportunities</span></li>
                  <li className={styles.stepItem}><span className={styles.stepDot}>4</span><span>We propose a solution. You decide if you want to move forward — no pressure</span></li>
                </ol>
              </div>

              <div className={styles.sideCard}>
                <h3 className={styles.sideHeading}>Prefer to reach out directly?</h3>
                <a href="mailto:hello@tugela.ai" className={styles.directLink}>hello@tugela.ai</a>
                <p className={styles.sideNote}>We typically respond within one business day.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
