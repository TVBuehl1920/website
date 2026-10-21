# Prüfplan: nötige Sicherheitsupdates

Genehmigter Auftrag: „Klone das Projekt hier in den Ordner und prüfe die nötigen Sicherheitsupdates“.
Erweiterung: „Einfach auf die neusten sicheren package updates updaten Node, nextjs, react usw“. Das vorhandene Projekt nutzt Gatsby, nicht Next.js; Paket- und Runtime-Updates sind jetzt genehmigt.

## Rahmen und Rollen

- Repository: `TVBuehl1920/website`, Ausgangsbasis `main`; Umsetzungsbranch `codex/security-updates-2026-10-21` im vorhandenen frischen Checkout.
- Ausgangsstand: `c7d79c9a74d9f8c35ae105fe5d6fa42f91605ced`.
- Phase A ist die abgeschlossene Bestandsaufnahme ohne Installation oder Paket-/Codeänderungen. Phase B umfasst genehmigte Updates, Prüfung und bei verifiziertem Ergebnis Commit/PR; kein Deployment.
- Prüfprotokolle liegen außerhalb des Repositorys unter `/tmp`; keine Secrets ausgeben oder speichern.
- Explorer liest und erhebt Befunde. Plan-Worker ändert ausschließlich diesen Plan; ein separater Implementierungs-Worker übernimmt Phase B. Reviewer prüft nur und berichtet, ohne Dateien zu ändern.
- Jede Rolle bekommt einen Auftrag und eine Abschlussbedingung und berichtet in genau fünf Zeilen. Zentrale Aussagen werden vor ihrer weiteren Verwendung geprüft.
- Nach zwei fehlgeschlagenen Versuchen desselben Schritts stoppen, Fehlschläge festhalten und neu planen.

## Schritte und Nachweise

- [x] **1. Checkout prüfen — Explorer**
  - Remote, Branch, HEAD und Arbeitsbaum mit `git remote -v`, `git rev-parse` und `git status` prüfen.
  - Nachweis: geklontes Repository und Ausgangsstand stimmen mit den Angaben oben überein; Arbeitsbaumzustand wurde erhoben.

- [x] **2. Abhängigkeiten ohne Installation prüfen — Explorer / Hauptagent**
  - Manifest und bestehendes Lockfile auf Versionen, Lockfileformat, Node-Anforderungen und Konsistenz prüfen.
  - `npm audit --package-lock-only --json` mit dem bestehenden Lockfile ausführen; Ausgabe und Exitcode unter `/tmp` protokollieren.
  - Laufzeit abgleichen: aktuell Node `v24.22.1`, npm `11.19.1`; projektspezifische Vorgaben sind maßgeblich.
  - Nachweis: Auditbefunde mit direkter/transitiver Herkunft, Schweregrad, betroffenen Versionen und möglichen Aktualisierungspfaden; fehlende Prüfbarkeit ausdrücklich vermerken.

- [x] **3. Externe Sicherheits- und Versionsinformationen prüfen — Explorer / Hauptagent**
  - GitHub-Dependabot-Status für das Repository prüfen; Browserkonto `TVBuehl1920` und CLI-Konto `Krushak81` bei Zugriffsgrenzen berücksichtigen.
  - Relevante aktuelle Versions- und Sicherheitshinweise anhand offizieller Quellen prüfen.
  - README-Angabe `DATO_API_TOKEN` mit Konfiguration `DATO_CMS_API_TOKEN` abgleichen, ohne Tokenwerte zu lesen oder auszugeben.
  - Nachweis: datierte Quellen, geprüfte Versionsangaben, Dependabot-Ergebnis oder konkrete Zugriffsblocker sowie belegter Konfigurationsbefund.

- [x] **4. Maßnahmen priorisieren und Blocker dokumentieren — Explorer / Hauptagent**
  - Erforderliche Sicherheitsupdates nach Risiko, Erreichbarkeit und Aktualisierungsaufwand ordnen.
  - Sicherheitskorrekturen, sonstige Versionsupdates und Konfigurationsbefunde deutlich unterscheiden.
  - Für vorgeschlagene Änderungen die Auswirkungen auf Nutzer, nächste Entwickler und nächste Agenten abwägen.
  - Nachweis: Maßnahmenliste mit betroffenen Paketen, Zielversionen soweit belegt, Begründung, erforderlicher späterer Validierung und offenen Blockern; noch nichts umsetzen.

- [x] **5. Unabhängige Prüfung und Abschlusskontrolle der historischen Phase A — Reviewer / Hauptagent**
  - Reviewer prüft Befunde und Quellen ausschließlich lesend und berichtet in fünf Zeilen.
  - Hauptagent prüft zentrale Aussagen selbst und liest `git diff` sowie `git status` nach Abschluss.
  - Nachweis für den Abschlussstand der historischen Phase A: keine Änderungen an Paket-, Lock- oder Codedateien; ausschließlich `PLAN.md` war beabsichtigte Projektänderung. Nachfolgende genehmigte Phase-B-Änderungen getrennt bewerten.
  - Bericht zur Phase A nennt geprüfte Ergebnisse, Grenzen und nicht ausgeführte Checks; eine umgesetzte Sicherheitskorrektur darf erst durch Phase B belegt werden.

## Historischer Prüfstand der Phase A vom 21.10.2026

- `npm audit --package-lock-only --json`: Exit 1 wegen 151 Paketbefunden (5 kritisch, 60 hoch, 76 moderat, 10 niedrig). Das sind keine 151 nachgewiesen ausnutzbaren Live-Lücken; npm und Dependabot zählen unterschiedlich.
- GitHub zeigt laut Hauptagent im Browser 160 offene Dependabot-Alerts. Beispiel: [form-data-Alert 46](https://github.com/TVBuehl1920/website/security/dependabot/46) über `gatsby-source-datocms@5.1.2`.
- Damaliger CI-Dry-Run: Exit 1 (`EUSAGE`), Manifest/Lock inkonsistent und fehlende Peers. Manifest verlangte `ws >=8.17.1`, Lock enthielt `8.11.0`, Dry-Run löste `8.22.0` auf. Damals keine Installation; `node_modules` fehlte.
- Audit-Zahlen, Lockversionen, Abhängigkeitspfade, Registry-Ergebnisse und CI-Fehler wurden für diesen Plan unmittelbar aus den lokalen Belegen geprüft. Externe Browserbefunde stammen vom Hauptagenten; das damals offene unabhängige Review ist inzwischen abgeschlossen.
- [Node-Sicherheitsupdate vom 21.10.2026](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases): lokale Version `24.22.1` ist laut Hauptagent bereits gepatcht; Hosting-/CI-Version unbekannt.

## Priorisierte Maßnahmen für die genehmigte Umsetzung

| Priorität | Maßnahme und belegter Ausgangsstand | Ziel und spätere Prüfung |
| --- | --- | --- |
| 1 | Reproduzierbare Installation herstellen; Manifest/Lock und Peers abgleichen. Gatsby `5.10.0`, Dato-Quelle `5.1.2`. | Gatsby `5.16.1` mit kompatiblen Gatsby-Plugins im vorhandenen Major; Dato `5.1.5` prüfen. Lock gezielt neu erzeugen, anschließend sauberes `npm ci` und Audit. |
| 1 | Kritische Build-Abhängigkeit `@babel/traverse@7.22.5`. | [Fix ab `7.23.2`](https://github.com/advisories/GHSA-67hx-6x53-jw92) im 7er-Major; kein blindes Babel-8-Upgrade. Build und resultierenden Baum prüfen. |
| 1 | `form-data@2.3.3` unter request, `2.5.1` unter superagent, `3.0.1` auf oberster Lock-Ebene (u. a. über `@types/node-fetch`). | Je Elternpaket Fixzweig `2.5.6`, `3.0.5` oder `4.0.6` prüfen. `request` verlangt `~2.3.2`; pauschales `>=3.0.5` aus der UI passt nicht blind in diesen Pfad. Alle Instanzen nachprüfen. |
| 1 | Dato erbt `datocms-client@3.5.21 → request@2.88.2`; request trägt kritische geerbte Metabefunde. | Dato `5.1.5` behält den alten Client/request-Pfad laut Registry. Restbefunde einzeln auflösen; [eigener request-SSRF-Befund](https://github.com/advisories/GHSA-p8p7-x288-28g6) ist moderat und hat keinen vollständigen Fix. Nötigenfalls separaten Migrationsvorschlag erstellen. |
| 2 | Direkte Abhängigkeiten `lodash@4.17.21`, `postcss@8.4.24`, `ws@8.11.0`. | Registry-Kandidaten `4.18.1`, `8.5.31`, `8.22.0`; bekannte aktuelle ws-Einzeladvisories benötigen mindestens `8.21.0`. Direkte Updates garantieren keine reparierten transitiven Instanzen; PostCSS `7.0.36` existiert zusätzlich unter resolve-url-loader. |
| 2 | `shell-quote@1.8.1` über react-dev-utils; `proxy-addr@2.0.7` über express. | Kandidaten `1.12.0` bzw. `2.0.8`; über kompatible Elternupdates erreichen und Lock/Audit kontrollieren. |
| 2 | `webpack@5.86.0` und alte axios-Pfade über Gatsby/contentful-management. | Webpack `5.112.0` prüfen; [DOM-Clobbering-Fix ab `5.94.0`](https://github.com/advisories/GHSA-4vvj-4cpr-p986) allein deckt neuere Advisories nicht ab. Axios über Eltern aktualisieren, Pfade und Nutzung einzeln bewerten. |
| 3 | Ungepatchte [Gatsby-Dev-SSRF](https://github.com/gatsbyjs/gatsby/security/advisories/GHSA-58f7-w355-p5h3). | Betrifft exponierten Entwicklungsserver, nicht das statische Produktionsergebnis. Entwicklung später an localhost binden und Exposition prüfen. |

Keine Ausführung von `npm audit fix --force`: vorgeschlagene Downgrades (z. B. Dato `2.5.18`) sind kein belastbarer Maßnahmenplan. Die damaligen Kandidaten begrenzten Änderungen für Nutzer und Entwickler; dokumentierte Herkunft und erneute Audits machen den Rest für nächste Agenten nachvollziehbar. Kompatibilität war damals unbewiesen; aktuelle Nachweise und verbleibende Befunde stehen unten.

## Grenzen, Belege und nächster Schritt

- Damals keine Build- oder Browsertests ausgeführt und keine getrackten Tests vorhanden. `.env`, `DATO_CMS_API_TOKEN` und `DATO_ENVIRONMENT` fehlten; spätere Buildprüfung benötigte autorisierte Konfiguration.
- Nicht alle Advisories wurden im konkreten Datenfluss validiert. Host-/CI-Laufzeit und tatsächliche Produktionsausnutzbarkeit bleiben offen.
- Damalige Nebenbefunde: README nannte `DATO_API_TOKEN`, aber `gatsby-config.js:11` nutzte `DATO_CMS_API_TOKEN`; `start` rief das nicht vorhandene Script `develop` auf (vorhanden war `dev`). Korrekturen folgten in Phase B.
- Auditbeleg: `/tmp/turnverein-audit-2026-10-21.json`; CI-Beleg: `/tmp/turnverein-ci-dry-run-2026-10-21.log`; offizielle npm-Registry-Metadaten: `/tmp/turnverein-registry-2026-10-21.json`.
- Originalplan vor Ergebnisergänzung: `/tmp/turnverein-PLAN-before-results-2026-10-21.md`.
- Fehlernotiz: Registry-Hilfsskript scheiterte einmal an `require` mit top-level `await`; korrigierter ES-Modul-Lauf war erfolgreich. Kein zweiter Fehlversuch.
- Bestandsaufnahme bleibt unverändert belegter Ausgangspunkt. Die damals ungeprüfte Umsetzung ist inzwischen nach Maßgabe der unten genannten Nachweise verifiziert; Restbefunde bleiben offen.

### Task 1: Sichere kompatible Paketupdates

- [x] **6. Umsetzung vorbereiten — Implementierungs-Worker:** Branch `codex/security-updates-2026-10-21` von `main` im vorhandenen frisch geklonten Ordner anlegen; vor Änderungen an Paket-, Lock-, Runtime- oder Plandateien Backups unter `/tmp` ohne Überschreiben anlegen. Nachweis: Branch/Status und Backup-Pfade.
- [x] **7. Direkte Pakete und Runtime aktualisieren — Implementierungs-Worker:** neueste sichere kompatible direkte Versionen einschließlich Gatsby, React und Node `24.22.1` prüfen und gezielt übernehmen; kein Wechsel auf Next.js. Nachweis: offizielle Versions-/Kompatibilitätsquellen, nachvollziehbarer Diff und konsistentes Lockfile.
- [x] **8. Transitive Befunde prüfen — Implementierungs-Worker:** oben dokumentierte Pfade und verbleibende Advisories erneut bewerten; keine blinden Major-Overrides oder Force-Downgrades. Nachweis: aufgelöste Versionen und begründete Restbefunde.
- [x] **9. Änderungen verifizieren — Implementierungs-Worker / Hauptagent:** `npm ci`, Audit und Build ausführen; UI mit leerer Eingabe, Doppelklick und Refresh soweit anwendbar und mit vorhandenem CMS-Zugang prüfen. Nachweis: gelesene Ausgaben, Exitcodes und konkrete UI-Ergebnisse; Blocker und ungetestete Teile ausdrücklich festhalten.
- [ ] **10. Review und Lieferung — Reviewer / Hauptagent:** unabhängiges read-only Review, zentrale Aussagen selbst prüfen, Diff/Status kontrollieren. Bei verifiziertem Ergebnis committen, pushen und unmittelbar PR erstellen. Nachweis: Reviewbericht, Prüfergebnisse, Commit und PR-Link; kein Erfolg ohne Beleg.

Vor Erweiterung dieses Planrahmens gesichert: `/tmp/turnverein-PLAN-before-implementation-scope-2026-10-21.md`. Die damalige Übergabe und Prüfung sind erfolgt; Lieferung gemäß Schritt 10 bleibt offen.

## Übergabe bei Unterbrechung

Erledigte Schritte, fehlgeschlagene Versuche, Protokollpfade unter `/tmp` und nächster konkreter Schritt werden hier festgehalten, bevor die Arbeit pausiert.


## Phase-B-Prüfstand vom 21.10.2026

- Backups vor Änderungen: /tmp/turnverein-update-backup-aBTcn0; ursprüngliches Lockfile zusätzlich vor frischer Auflösung gesichert. Branch: `codex/security-updates-2026-10-21`.
- Direkte Pakete auf geprüfte Registry-latest aktualisiert (Gatsby 5.16.1, React/ReactDOM 19.3.1); Tailwind bewusst auf neuestem 3.x (3.4.19), da 4.x eine CSS-Migration mit Darstellungsänderungen wäre. Node 24.22.1 in .nvmrc und engines >=24.22.1 <25. Kein Next.js hinzugefügt.
- Lockfile auf Format 3 frisch erzeugt; `npm ci --no-fund --no-audit` Exit 0 (1747 installierte Pakete). Kein force oder legacy-peer-deps. Gatsby/Dato behalten alte transitive Peer-Anforderungen; `npm ls --all` Exit 1 ist ausdrücklich kein bestandener Check.
- Audit: Ausgang 151 (5 kritisch, 60 hoch, 76 moderat, 10 niedrig); nach direkten Updates 105; nach gezielten Overrides 98 (0 kritisch, 51 hoch, 41 moderat, 6 niedrig). Audit Exit 1 wegen verbleibender Befunde, keine vollständige Sicherheit behaupten. Beleg: /tmp/turnverein-audit-final-2026-10-21.json.
- Overrides nur mit begrenztem Versionszweig: request/form-data 2.5.6 und qs 6.16.1; Lodash 4.18.1 überall; Immutable 3.8.4; Webpack 5.112.0; path-to-regexp 0.1.13. Echter HTTP-Multipart-Regressionscheck vor Override erwartungsgemäß Exit 1 (CRLF-Injektion) und danach Exit 0; dauerhaft unter tests/multipart-security.cjs und `npm run test:security` (Exit 0). Sieben zusätzliche API-/PostCSS-/Webpack-Kompatibilitätschecks Exit 0, Beleg /tmp/turnverein-compatibility-2026-10-21.log.
- Erster Build ohne CMS-Token Exit 1 mit „API token must be provided“. Hauptagent hat danach bestehende autorisierte Kundenkonfiguration lokal in .env bereitgestellt; chmod 600 und Git-Ignore geprüft. TextEdit erzeugte zuerst .env.txt; Hauptagent hat diese Datei zu .env korrigiert. Kein Secretwert in diesem Plan oder den geprüften Buildlogs, .env bleibt ausschließlich beim Hauptagenten und außerhalb Git.
- Echter Build mit CMS-Inhalten Exit 0, 39/39 Seiten. Neue dotenv18-Startmeldung wurde von Gatsby irreführend als ERROR UNKNOWN angezeigt; laut offizieller API nur die Info über config({ quiet: true }) deaktiviert. ENOENT-Fehlerrückgabe bleibt erhalten. Abschließender `npm run build` Exit 0 ohne ERROR/WARN-Meldungen, 39/39 Seiten, Beleg /tmp/turnverein-build-quiet-2026-10-21.log.
- README auf npm/Node und tatsächliches DATO_CMS_API_TOKEN korrigiert; Overridegründe und Regressionscheck dokumentiert. `git diff --check` Exit 0. Keine App-Logikänderungen außerhalb dotenv-Kompatibilität.
- Grenzen: Weiterhin 98 Auditpaketbefunde aus Gatsby/legacy Dato und z.B. sharp 0.32.6, PostCSS7, Axios0.21.4, request/tough-cookie, GraphQL Tools. Ihre Behebung würde geprüfte größere Versions-/API-Migrationen erfordern. Kein blindes npm-audit-Downgrade und keine Major-Overrides. Die damals offene UI-Prüfung und das Review sind abgeschlossen; Commit und PR bleiben offen.
- Keine zwei fehlgeschlagenen Implementierungsversuche desselben Schritts. Ein zu früher Leseversuch des noch laufenden Audit-JSONs und eine Abfrage eines nur verschachtelt installierten Pakets waren erfolglose Read-only-Abfragen; korrekte Belege später gelesen.
- Detaillierter Workerbericht: .superpowers/sdd/PLAN/task-1-report.md. Die damals nächste Eigenprüfung und das read-only Review sind erfolgt; Lieferung folgt danach.

- Hauptagent meldet anschließende echte Browserprüfung auf lokalem Production-Serve127.0.0.1:9000 erfolgreich: Desktop-Darstellung, Sportangebote-Popover, konsistenter Doppelklick, realer CMS-Link /sportangebote/eltern-kind-turnen/ und Reload; mobil390×844 Dialog/Disclosure-Liste/Escape, 404-Layout bei unbekannter URL, keine Browser-errorLogs. Auf geprüften Seiten kein Eingabe-/Submitformular vorhanden, daher leere Eingabe/Doppelsubmit nicht anwendbar. Diese UI-Ergebnisse stammen vom Hauptagenten, nicht vom Worker selbst. Schritt9 damit nach Root-Bericht vervollständigt, Review/Lieferung10 bleibt offen.

- Ergänzung vor Review: dauerhaftes Multipart-Sicherheitsrepro prüft jetzt zusätzlich einen bösartigen Dateinamen mit CRLF/Headerinjektion; normaler Text-/Dateiupload und Feldnamen-Angriff bleiben erhalten. Backup vor Änderung: /tmp/turnverein-filename-regression-G5dWOw. Direkter Original-form-data2.3.3-Kontrolllauf reproduziert Dateinamen-Injektion (erwarteter Exit1, /tmp/turnverein-filename-before-2026-10-21.log); gepatchter echter Dato→request-HTTP-Test besteht alle drei Fälle (Exit0, /tmp/turnverein-filename-after-2026-10-21.log). node --check und git diff --check Exit0. Keine weiteren Codeänderungen/kein Commit.

## Abschließende Verifikation und offene Lieferung

- Frischer read-only Reviewer meldet sämtliche Spezifikations- und Qualitätsprüfungen PASS, ohne konkret notwendige Korrektur. Hauptagent bestätigt Build Exit 0 mit 39 Seiten (`/tmp/turnverein-build-root-verification-2026-10-21.log`) und `test:security` Exit 0 für normalen Upload, Feldnamen- und Dateinamen-CRLF-Angriffe.
- Erneutes Audit des Hauptagenten: Exit 1, unverändert 98 Paketbefunde (0 kritisch, 51 hoch, 41 moderat, 6 niedrig); Zahlen für diese Planergänzung direkt aus `/tmp/turnverein-audit-root-verification-2026-10-21.json` geprüft. Kein vollständiger Sicherheitsabschluss behauptet.
- Hauptagent bestätigt alle 39 statischen Routen per HTTP ohne Fehler sowie 173 Dateien unter public mit null Treffern des exakten CMS-Tokens. Desktop-/Mobilmenü, Disclosure, Escape, Doppelklick, CMS-Unterseiten-Refresh und 404 geprüft; Browserfehlerliste leer. Kein Eingabeformular auf geprüften Seiten: leere Eingabe/Doppelsubmit nicht anwendbar.
- Lokaler Build und Paketengine für Node `24.22.1` verifiziert. Vercel-Projekt `tv-buehl-1920` stand vorher auf `22.x` (dokumentierter Backup-/Rollbackwert). Zwei Eingabeversuche änderten die Auswahl zunächst nicht (AX-Klick fokussierte/selektierte nur; Up+Return blieb wirkungslos); nach Nutzerregel gestoppt und neu geplant.
- Anschließend gelang laut Browserprüfung des Hauptagenten die Umstellung mit dokumentiertem `setValue` von `22.x` auf `24.x`; Save wurde angeklickt. Der aktuelle AX-Zustand zeigt `24.x` ausgewählt und Save deaktiviert; Screenshot: `.superpowers/sdd/PLAN/vercel-node24.jpg`. Damit ist die gespeicherte Einstellung für künftige Builds/Functions belegt. Kein Redeploy oder Produktionsdeployment ausgelöst; kein eigener Browsercheck durch den Plan-Worker.
- Review und Runtime-Einstellung sind erledigt; Schritt 10 bleibt nur wegen Veröffentlichung offen. CLI-Konto `Krushak81` hat im Original nur Leserechte; PR-Publikation nach Commit über Fork erforderlich, ohne Repository-Tokenwechsel. Hauptagent übernimmt Commit und PR.
- Backup vor dieser Abschlussaktualisierung: `/tmp/turnverein-PLAN-before-final-verification-2026-10-21.md`. Keine Codeänderung durch den Plan-Worker.
- Backup vor Ergänzung der gespeicherten Vercel-Einstellung: `/tmp/turnverein-PLAN-before-vercel-saved-2026-10-21.md`.
