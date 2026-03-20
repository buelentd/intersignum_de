// app/datenschutz/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { LogoBlue } from '@/components/Logo'
import styles from './datenschutz.module.css'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — intersignum',
  description: 'Datenschutzerklärung der intersignum UG (haftungsbeschränkt), Berlin.',
  robots: { index: false },
}

const sections = [
  {
    id: 'verantwortlicher',
    title: 'Verantwortlicher',
    content: (
      <>
        <p>Diese Datenschutzerklärung klärt über die Art, den Umfang und Zwecke der Erhebung und Verwendung von Daten der Besucher und Nutzer (nachfolgend zusammenfassend bezeichnet als „Nutzer") durch den nachfolgend genannten Anbieter als datenschutzrechtlich verantwortliche Stelle auf.</p>
        <div className={styles.addressBox}>
          <address>
            intersignum UG (haftungsbeschränkt)<br />
            Pasewalker Str. 15<br />
            13127 Berlin, Germany<br /><br />
            E-Mail: <a href="mailto:kontakt@intersignum.de">kontakt@intersignum.de</a>
          </address>
        </div>
        <p style={{ marginTop: 16 }}>Bei Fragen zum Datenschutz erreichen Sie uns unter der oben angegebenen E-Mail-Adresse.</p>
      </>
    ),
  },
  {
    id: 'serverlog',
    title: 'Erhebung von Zugriffsdaten',
    content: (
      <>
        <p>Der Anbieter erhebt Daten über jeden Zugriff auf das Onlineangebot (so genannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.</p>
        <p>Der Anbieter verwendet die Protokolldaten ohne Zuordnung zur Person des Nutzers oder sonstiger Profilerstellung entsprechend den gesetzlichen Bestimmungen nur für statistische Auswertungen zum Zweck des Betriebs, der Sicherheit und der Optimierung des Onlineangebotes. Der Anbieter behält sich jedoch vor, die Protokolldaten nachträglich zu überprüfen, wenn aufgrund konkreter Anhaltspunkte der berechtigte Verdacht einer rechtswidrigen Nutzung besteht.</p>
      </>
    ),
  },
  {
    id: 'personendaten',
    title: 'Erhebung und Nutzung personenbezogener Daten',
    content: (
      <>
        <p>Personenbezogene Daten werden vom Anbieter nur dann erhoben und genutzt, wenn dies gesetzlich erlaubt ist oder die Nutzer in die Datenerhebung einwilligen. Bei der Kontaktaufnahme mit dem Anbieter per E-Mail oder über das Kontaktformular werden die Angaben des Nutzers zwecks Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen entstehen, gespeichert.</p>
        <p>Der Anbieter hat organisatorische, vertragliche und technische Sicherheitsmaßnahmen getroffen, um sicherzustellen, dass die Vorschriften der Datenschutzgesetze eingehalten werden und zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder der Zugriff unberechtigter Personen verhindert wird.</p>
      </>
    ),
  },
  {
    id: 'weitergabe',
    title: 'Datenweiterleitung an Dritte',
    content: (
      <>
        <p>Die Daten der Nutzer werden nur dann an Dritte weiter geleitet, wenn dies gesetzlich erlaubt ist oder ein Nutzer in die Weiterleitung eingewilligt hat. Das ist zum Beispiel der Fall wenn die Weiterleitung der Daten der Erfüllung vertraglicher Verpflichtungen gegenüber dem Nutzer dient.</p>
        <p>Die personenbezogenen Daten der Nutzer werden keineswegs an Dritte zu Werbezwecken oder zwecks Erstellung von Nutzerprofilen verkauft oder weitergeleitet.</p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: (
      <>
        <p>Der Anbieter setzt im Rahmen seines Onlineangebotes „Cookies" ein. Cookies sind kleine Dateien, die auf dem Computer der Nutzer abgelegt werden und Informationen für Anbieter speichern können. Temporäre Cookies werden nach dem Schließen des Browsers gelöscht, permanente Cookies bleiben für einen vorgegebenen Zeitraum erhalten und können beim erneuten Aufruf des Onlineangebotes die gespeicherten Informationen zur Verfügung stellen.</p>
        <p>Der Nutzer kann auf den Einsatz der Cookies Einfluss nehmen. Die meisten Browser verfügen über eine Option, mit der das Speichern von Cookies eingeschränkt oder komplett verhindert wird. Der Anbieter bemüht sich, das Onlineangebot so zu gestalten, dass der Einsatz von Cookies nicht notwendig ist.</p>
      </>
    ),
  },
  {
    id: 'rechte',
    title: 'Widerruf, Änderungen, Berichtigungen und Aktualisierungen',
    content: (
      <p>Der Nutzer hat das Recht, auf Antrag unentgeltlich Auskunft zu erhalten über die personenbezogenen Daten, die vom Anbieter über ihn gespeichert wurden. Kontaktdaten finden sich im Impressum des Anbieters. Zusätzlich hat der Nutzer das Recht auf Berichtigung unrichtiger Daten, Sperrung und Löschung seiner personenbezogenen Daten, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.</p>
    ),
  },
  {
    id: 'aenderungen',
    title: 'Änderungen der Datenschutzerklärung',
    content: (
      <p>Der Anbieter behält sich vor, die Datenschutzerklärung zu ändern, um sie an geänderte Rechtslage oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen.</p>
    ),
  },
]

export default function Datenschutz() {
  return (
    <>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" aria-label="intersignum Startseite">
            <LogoBlue height={22} />
          </Link>
          <nav className={styles.nav}>
            <Link href="/#leistungen">Leistungen</Link>
            <Link href="/#kunden">Referenzen</Link>
            <Link href="/#ansatz">Über uns</Link>
            <Link href="/#kontakt" className={styles.btnNav}>Kontakt aufnehmen</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* PAGE HERO */}
        <div className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Startseite</Link>
              <span aria-hidden="true">›</span>
              <span>Datenschutzerklärung</span>
            </nav>
            <h1>Datenschutzerklärung</h1>
            <p className={styles.pageMeta}>intersignum UG (haftungsbeschränkt) · Berlin</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className={styles.contentWrap}>

          {/* Inhaltsverzeichnis */}
          <nav className={styles.toc} aria-label="Inhaltsverzeichnis">
            <p className={styles.tocTitle}>Inhalt</p>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{i + 1}. {s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Abschnitte */}
          {sections.map((s) => (
            <div key={s.id} id={s.id} className={styles.dsSection}>
              <h2>{s.title}</h2>
              {s.content}
            </div>
          ))}

        </div>
      </main>

      <Footer />
    </>
  )
}
