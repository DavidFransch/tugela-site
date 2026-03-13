import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleContact = () => {
    setMenuOpen(false)
    navigate('/contact')
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoMark}>T</span>
          <span className={styles.logoText}>Tugela</span>
          <span className={styles.logoDomain}>.ai</span>
        </NavLink>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={() => setMenuOpen(false)} end>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={() => setMenuOpen(false)}>About</NavLink>
          <button className={styles.ctaMobile} onClick={handleContact}>Get in touch</button>
        </nav>

        <button className={styles.cta} onClick={handleContact}>Get in touch</button>

        <button className={styles.burger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
        </button>
      </div>
    </header>
  )
}
