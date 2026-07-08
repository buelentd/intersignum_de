import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import ServiceHeader from '../../../components/ServiceHeader'
import styles from './artikel.module.css'

export const metadata: Metadata = {
  title: { absolute: 'Warum IT-Projekte scheitern — und was dagegen hilft | intersignum' },
  description: 'Die häufigsten Fehler in IT-Projekten aus 12 Jahren Praxis: fehlende Anforderungen, Business-IT-Graben, kein Risikomanagement. Mit konkreten Gegenmaßnahmen.',
  alternates: { canonical: 'https://intersignum.de/blog/warum-it-projekte-scheitern' },
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://intersignum.de/blog/warum-it-projekte-scheitern',
    siteName: 'intersignum',
    title: 'Warum IT-Projekte scheitern — und was dagegen hilft',
    description: 'Die häufigsten Fehler in IT-Projekten aus 12 Jahren Praxis — mit konkreten Gegenmaßnahmen.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Warum IT-Projekte scheitern' }],
    publishedTime: '2026-06-15',
    authors: ['intersignum'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warum IT-Projekte scheitern — und was dagegen hilft',
    description: 'Die häufigsten Fehler in IT-Projekten aus 12 Jahren Praxis.',
    images: ['/og-image.png'],
  },
}

export default function ArtikelWarumScheitern() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://intersignum.de' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://intersignum.de/blog' },
      { '@type': 'ListItem', position: 3, name: 'Warum IT-Projekte scheitern', item: 'https://intersignum.de/blog/warum-it-projekte-scheitern' },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Warum IT-Projekte scheitern — und was dagegen hilft',
    description: 'Die häufigsten Fehler in IT-Projekten aus 12 Jahren Praxis — mit konkreten Gegenmaßnahmen.',
    author: { '@type': 'Organization', name: 'intersignum', url: 'https://intersignum.de' },
    publisher: { '@type': 'Organization', name: 'intersignum', url: 'https://intersignum.de' },
    datePublished: '2026-06-15',
    dateModified: '2026-06-15',
    url: 'https://intersignum.de/blog/warum-it-projekte-scheitern',
    mainEntityOfPage: 'https://intersignum.de/blog/warum-it-projekte-scheitern',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ServiceHeader current="/blog" />

      <main className={styles.main}>
        <div className={styles.articleHeader}>
          <div className={styles.articleHeaderInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Startseite</Link>
              <span>›</span>
              <Link href="/blog">Blog</Link>
              <span>›</span>
              <span>Warum IT-Projekte scheitern</span>
            </div>
            <div className={styles.meta}>
              <span className={styles.kategorie}>Projektmanagement</span>
              <span className={styles.lesezeit}>8 min Lesezeit</span>
              <time dateTime="2026-06-15">15. Juni 2026</time>
            </div>
            <h1>Warum IT-Projekte scheitern —<br />und was dagegen hilft</h1>
            <p className={styles.lead}>
              Über 70 % aller IT-Projekte werden verspätet, zu teuer oder mit reduziertem
              Umfang abgeliefert. Wir haben in 12 Jahren und 50+ Projekten immer wieder
              dieselben Muster gesehen. Hier sind sie — ohne Beschönigung.
            </p>
          </div>
        </div>

        <article className={styles.article}>
          <div className={styles.articleInner}>

            <h2>1. Der Business-IT-Graben</h2>
            <p>
              Das ist der häufigste und teuerste Fehler. Business und IT reden aneinander vorbei —
              nicht weil sie dumm sind, sondern weil sie in unterschiedlichen Sprachen denken.
              Der Fachbereich denkt in Prozessen und Ergebnissen. Die IT denkt in Systemen und
              Constraints. Ohne jemanden der übersetzt, entstehen Anforderungen die niemand
              versteht und Lösungen die niemand braucht.
            </p>
            <p>
              <strong>Was hilft:</strong> Eine neutrale Projektleitung die beide Sprachen spricht und
              als permanenter Übersetzer fungiert. Kein Workshop der einmal im Projektstart
              stattfindet — sondern eine Funktion die dauerhaft besetzt ist.
            </p>

            <h2>2. Unvollständige Anforderungen am Projektstart</h2>
            <p>
              "Wir wissen noch nicht genau was wir wollen, aber fangen schon mal an." Dieser
              Satz kostet Unternehmen jedes Jahr Millionen. Unvollständige Anforderungen sind
              keine Kleinigkeit die man später klärt — sie sind der Nährboden für Scope-Creep,
              Nachverhandlungen und Projektabbrüche.
            </p>
            <p>
              Ein besonders häufiges Symptom: Die Anforderungen existieren, aber sie sind
              verstreut in E-Mail-Chains, PowerPoint-Decks und in den Köpfen von drei
              verschiedenen Stakeholdern. Niemand hat sie konsolidiert.
            </p>
            <p>
              <strong>Was hilft:</strong> Investieren Sie 15–20 % des Projektbudgets in eine
              saubere Anforderungsphase. Das ist keine verschwendete Zeit — es ist der günstigste
              Teil des Projekts, denn Änderungen vor dem ersten Code-Commit kosten zehnmal
              weniger als Änderungen nach dem Go-live.
            </p>

            <h2>3. Vendor-Lock-in durch fehlende Marktkenntnisse</h2>
            <p>
              "Der Anbieter hat uns versprochen, dass das System das kann." Wir hören diesen
              Satz regelmäßig — meist kurz nachdem ein Projekt gegen die Wand gefahren ist.
              Anbieter optimieren ihre Versprechen auf den Vertragsabschluss, nicht auf Ihren
              Projekterfolg. Ohne unabhängige technische Bewertung kaufen Sie die Verkaufspräsentation.
            </p>
            <p>
              <strong>Was hilft:</strong> Lassen Sie Systemauswahl und Vendor-Management von
              jemanden führen der keine Provision am Ergebnis hat. Das klingt trivial — ist es
              aber nicht, wenn man sieht wie viele Beratungsunternehmen gleichzeitig Software
              verkaufen.
            </p>

            <h2>4. Kein Risikomanagement — bis es zu spät ist</h2>
            <p>
              Risiken werden in den meisten Projekten nur am Anfang dokumentiert und dann nie
              wieder angeschaut. Dabei verändern sich Risiken laufend: neue Abhängigkeiten
              entstehen, Schlüsselpersonen verlassen das Projekt, technische Entscheidungen
              häufen technische Schulden auf.
            </p>
            <p>
              Ein Risikoregister das nach dem Kickoff in der Schublade verschwindet, ist kein
              Risikomanagement — es ist Theater.
            </p>
            <p>
              <strong>Was hilft:</strong> Wöchentliche Risikoreview als fester Tagesordnungspunkt.
              Nicht als formale Übung, sondern als tatsächliche Auseinandersetzung: Was hat sich
              verändert? Welche Risiken sind eingetreten? Was machen wir jetzt?
            </p>

            <h2>5. Zu viele Stakeholder, zu wenig Entscheidungsverantwortung</h2>
            <p>
              IT-Projekte scheitern nicht an zu wenig Meinungen — sie scheitern an zu wenig
              Entscheidungen. In vielen Projekten sind Dutzende Personen "beteiligt", aber
              niemand ist klar für eine Entscheidung verantwortlich. Das Ergebnis: Endlos-Meetings,
              Eskalationen die im Sand verlaufen, und ein Projekt das sich im Kreis dreht.
            </p>
            <p>
              <strong>Was hilft:</strong> Ein klares RACI zu Projektbeginn — nicht für alle
              Aufgaben, sondern für alle kritischen Entscheidungen. Wer entscheidet? Wer muss
              konsultiert werden? Wer wird informiert? Das muss für jede wesentliche
              Entscheidungsebene klar sein.
            </p>

            <h2>6. Fehlender Wissenstransfer am Ende</h2>
            <p>
              Das Projekt ist "fertig" — aber die internen Teams wissen nicht wie das System
              funktioniert. Der Dienstleister ist weg. Drei Monate später gibt es das erste
              Problem und niemand weiß wie man es löst. Das Projekt war technisch erfolgreich
              und operativ ein Desaster.
            </p>
            <p>
              <strong>Was hilft:</strong> Wissenstransfer als formales Projektmeilenstein
              definieren, nicht als Nice-to-have. Dokumentation, Schulungen und eine
              definierte Hypercare-Phase nach Go-live sind keine Extras — sie sind Teil
              der Projektleistung.
            </p>

            <div className={styles.fazit}>
              <h2>Fazit</h2>
              <p>
                Keiner dieser Fehler ist neu. Keiner ist unvermeidlich. Was sie gemeinsam haben:
                Sie entstehen in der Lücke zwischen Business und IT — und genau dort setzt
                gutes IT-Projektmanagement an.
              </p>
              <p>
                Wenn Sie gerade ein Projekt starten oder ein laufendes Projekt stabilisieren
                wollen: Sprechen Sie mit uns. Das erste Gespräch ist ohne Beratungsgebühr.
              </p>
              <Link href="/#kontakt" className={styles.btnPrimary}>Projekt besprechen →</Link>
            </div>

            <div className={styles.related}>
              <h3>Weiterführend</h3>
              <Link href="/it-projektmanagement" className={styles.relatedLink}>
                IT-Projektmanagement — Was intersignum konkret macht →
              </Link>
              <Link href="/it-beratung" className={styles.relatedLink}>
                IT-Beratung ohne Eigeninteresse →
              </Link>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
