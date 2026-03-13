import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>T</span>
          <span className={styles.name}>Tugela<span className={styles.dim}>.ai</span></span>
          <p className={styles.tagline}>AI that works for your business.</p>
        </div>
        <nav className={styles.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} Tugela. All rights reserved.</p>
      </div>
    </footer>
  )
}
