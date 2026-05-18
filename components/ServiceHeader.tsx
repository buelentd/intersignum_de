import Link from 'next/link'
import { LogoBlue } from './Logo'
import styles from './ServiceHeader.module.css'

const leistungen = [
  { href: '/it-beratung',    label: 'IT-Beratung' },
  { href: '/webentwicklung', label: 'Webentwicklung' },
  { href: '/ki-saas',        label: 'KI & SaaS' },
  { href: '/data',           label: 'Data & Integration' },
]

export default function ServiceHeader({ current }: { current: string }) {
  return (
    <header className={styles.header} id="main-header">
      <div className={styles.headerInner}>
        <Link href="/" aria-label="intersignum Startseite">
          <LogoBlue height={22} />
        </Link>
        <nav className={styles.nav}>
          <div className={styles.dropdown}>
            <span className={styles.dropdownTrigger}>Leistungen ▾</span>
            <div className={styles.dropdownMenu}>
              {leistungen.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`${styles.dropdownItem} ${current === l.href ? styles.active : ''}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#kunden">Referenzen</Link>
          <Link href="/#ansatz">Über uns</Link>
          <Link href="/#kontakt" className={styles.btnNav}>Kontakt aufnehmen</Link>
        </nav>
      </div>
    </header>
  )
}
