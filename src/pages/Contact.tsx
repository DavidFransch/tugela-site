import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import styles from './Contact.module.css'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required'),
  companySize: z.string().optional(),
  budget: z.string().optional(),
  interest: z.array(z.string()).min(0),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

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
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: [],
    },
  })

  const selectedInterests = watch('interest') || []
  const selectedCompanySize = watch('companySize')
  const selectedBudget = watch('budget')

  const toggleInterest = (item: string) => {
    const nextInterests = selectedInterests.includes(item)
      ? selectedInterests.filter(i => i !== item)
      : [...selectedInterests, item]
    setValue('interest', nextInterests)
  }

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      let result
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        result = await response.json()
      } else {
        const text = await response.text()
        result = { error: text || 'Server returned an error without JSON' }
      }

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setSubmitted(true)
    } catch (err: any) {
      setServerError(err.message)
    }
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
            <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Your name *</label>
                <input
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  type="text"
                  placeholder="Jane Smith"
                  {...register('name')}
                />
                {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Work email *</label>
                <input
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  type="email"
                  placeholder="jane@yourcompany.com"
                  {...register('email')}
                />
                {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Company / organisation *</label>
                <input
                  className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                  type="text"
                  placeholder="Acme Corp"
                  {...register('company')}
                />
                {errors.company && <span className={styles.errorText}>{errors.company.message}</span>}
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Company size</label>
                  <div className={styles.chipGroup}>
                    {companySizes.map(s => (
                      <button
                        key={s}
                        type="button"
                        className={`${styles.chip} ${selectedCompanySize === s ? styles.chipActive : ''}`}
                        onClick={() => setValue('companySize', s)}
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
                      type="button"
                      className={`${styles.chip} ${selectedBudget === b ? styles.chipActive : ''}`}
                      onClick={() => setValue('budget', b)}
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
                      type="button"
                      className={`${styles.chip} ${selectedInterests.includes(i) ? styles.chipActive : ''}`}
                      onClick={() => toggleInterest(i)}
                    >{i}</button>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Anything else you'd like us to know?</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell us about your business, the problem you're trying to solve, or any context that would be helpful..."
                  {...register('message')}
                  rows={5}
                />
              </div>

              {serverError && <div className={styles.serverError}>{serverError}</div>}

              <button
                type="submit"
                className={styles.btnPrimary}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
              <p className={styles.formNote}>No sales pitch. We'll review what you've shared and come back with a plan for a conversation.</p>
            </form>

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
