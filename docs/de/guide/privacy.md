# Datenschutzerklärung

Sudoku ist eine Offline-First-Anwendung mit optionalen Cloud-Funktionen. Diese Seite erläutert, welche Daten die App gegebenenfalls erhebt und wie sie verwendet werden.

## Offline-Kern — keine Datenerhebung für das Spielen

- Das Kern-Rätselspiel ist vollständig offline spielbar. Für das Spielen ist kein Netzwerkzugriff erforderlich.
- Alle Spieldaten — Einstellungen, Spielstand, Notizen und Statistiken — werden lokal auf Ihrem Gerät gespeichert.
- Es gibt keine Werbung, keine Analyse und keine Tracking-SDKs von Dritten.

## Optionale Cloud-Funktionen

### iCloud-Synchronisierung (CloudKit)

Wenn Sie sich bei iCloud anmelden und die Synchronisierung aktivieren:

- Spielstände, Statistiken, Einstellungen und Fortschritte bei täglichen Herausforderungen werden über Apples CloudKit-Dienst mit Ihrem persönlichen **iCloud-Account** synchronisiert.
- Daten werden bei der Übertragung und im Ruhezustand durch Apples Infrastruktur verschlüsselt.
- Nur Sie können mit Ihrer Apple-ID auf Ihre synchronisierten Daten zugreifen.
- Diese Funktion ist vollständig optional — die App funktioniert auch ohne sie einwandfrei.

### Game Center

Wenn Sie sich bei Game Center anmelden:

- Ranglistenpunkte (beste Lösungszeiten je Schwierigkeitsgrad) können in öffentlichen Ranglisten veröffentlicht werden.
- Der Erfolgsfortschritt wird von Apples Game-Center-Dienst erfasst.
- Ihr Game-Center-Anzeigename ist für andere Spieler in den Ranglisten sichtbar.
- Diese Funktion ist vollständig optional.

## Der einzige weitere Netzwerkzugriff: „Weitere Apps“

Die einzige Nicht-Cloud-Netzwerkfunktion ist der optionale Bereich **„Weitere Apps“** in den Einstellungen, der eine Liste weiterer Apps von unseren Servern abruft. Diese Funktion:

- wird nur aktiv, wenn Sie zu Einstellungen → Weitere Apps navigieren.
- ruft eine schlanke Liste von App-Namen und Links ab — es werden keine personenbezogenen Daten gesendet oder gespeichert.
- kann vollständig ignoriert werden und beeinflusst das Spiel in keiner Weise.

## Was wir nicht erheben

- Wir erheben keine personenbezogenen Daten, Dateien, Bilder oder Browserverläufe.
- Wir senden keine Spieldaten an externe Server (außer wie oben für iCloud/Game Center beschrieben).
- Wir binden keine Analyse- oder Werbe-SDKs von Dritten ein.
- Wir nutzen keine Dienste für Absturzberichte oder Telemetrie.

## Berechtigungen

Sudoku benötigt nur wenige Berechtigungen:

- **iCloud** (optional): zur Synchronisierung von Spieldaten zwischen Geräten über CloudKit.
- **Game Center** (optional): für Ranglisten und Erfolge.
- **Netzwerk** (optional): für iCloud-Synchronisierung, Game Center und „Weitere Apps“.

Es werden keine Berechtigungen für Standort, Kontakte, Kamera, Mikrofon oder andere datenschutzsensible Bereiche angefordert.

## Datenspeicherung

- Lokale Daten verbleiben auf Ihrem Gerät, bis Sie die App deinstallieren oder zurücksetzen.
- Mit iCloud synchronisierte Daten unterliegen Apples iCloud-Aufbewahrungsrichtlinien.
- Game-Center-Daten unterliegen Apples Game-Center-Richtlinien.

## Datenschutzanfragen

Da Sudoku alle Daten lokal (und optional in Ihrem persönlichen iCloud) speichert, gibt es keine serverseitigen Daten, die wir kontrollieren oder auf die wir zugreifen. So löschen Sie alle App-Daten:

- **Deinstallieren Sie die App** auf Ihrem Gerät bzw. Ihren Geräten.
- **iCloud-Daten zurücksetzen**: Unter Einstellungen → [Ihr Name] → iCloud → Account-Speicher verwalten → Sudoku → Daten löschen.
- **Lokales Zurücksetzen auf dem Mac**: Hinweise zum Entfernen des Containers finden Sie in der Anleitung zur Problembehandlung.

## Datenschutz für Kinder

Sudoku erhebt von niemandem aktiv personenbezogene Daten, auch nicht von Kindern. Die App erfordert keine Konten, keine Chat-Funktionen und keine sozialen Netzwerke.

## Kontakt

Bei Fragen zum Datenschutz eröffnen Sie ein Issue im Projekt-Repository (https://github.com/sudoku-pro/sudoku-site) oder kontaktieren Sie uns unter sudoku@w3cub.com.
