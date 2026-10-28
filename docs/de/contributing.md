# Mitwirken

Wir freuen uns über Beiträge zur Verbesserung der Sudoku-Dokumentation! Ob Sie einen Tippfehler korrigieren, eine neue Anleitung hinzufügen oder bestehende Inhalte verbessern – Ihre Unterstützung ist willkommen.

## Möglichkeiten mitzuwirken

### Verbesserung der Dokumentation
- Tippfehler oder Grammatikfehler korrigieren
- Unklare Anweisungen verständlicher formulieren
- Fehlende Informationen ergänzen
- Veraltete Inhalte aktualisieren
- Formatierung und Lesbarkeit verbessern

### Neue Inhalte
- Anleitungen für häufige Probleme erstellen
- Tutorials oder Beispiele hinzufügen
- Die Dokumentation in andere Sprachen übersetzen
- FAQ-Einträge verfassen

### Technische Beiträge
- Den Build-Prozess verbessern
- Neue Funktionen für die Dokumentationsseite hinzufügen
- Fehler im Deployment-Workflow beheben

## Erste Schritte

### Voraussetzungen
- Node.js 18 oder neuer
- Paketmanager pnpm
- Git

### Entwicklungsumgebung einrichten

1. **Repository auf GitHub forken**
2. **Ihren Fork klonen**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sudoku-site.git
   cd sudoku-site
   ```
3. **Abhängigkeiten installieren**:
   ```bash
   pnpm install
   ```
4. **Entwicklungsserver starten**:
   ```bash
   pnpm docs:dev
   ```
5. `http://localhost:5173` im Browser öffnen

### Änderungen vornehmen

1. Einen neuen Branch für Ihre Änderungen erstellen:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Ihre Änderungen an den Dokumentationsdateien in `docs/` vornehmen
3. Ihre Änderungen durch einen Build der Seite testen:
   ```bash
   pnpm docs:build
   ```
4. Ihre Änderungen committen:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Änderungen einreichen

1. **Ihren Branch** in Ihren Fork **pushen**:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Einen Pull Request** auf GitHub **erstellen**
3. **Auf das Review warten** und Feedback berücksichtigen

## Richtlinien

### Schreibstil
- Klare, prägnante Sprache verwenden
- Wenn möglich im Aktiv schreiben
- Inklusiv und einladend formulieren
- Einheitliche Formatierung verwenden
- Bei Bedarf Codebeispiele einfügen

### Dateistruktur
- Dokumentationsseiten gehören in `docs/`
- Anleitungen gehören in `docs/guide/`
- Dateinamen in Kleinbuchstaben mit Bindestrichen verwenden: `my-new-guide.md`
- Frontmatter ist nicht erforderlich, kann aber für Metadaten genutzt werden

### Links
- Für interne Dokumentation relative Links verwenden
- Bei Bedarf auf externe Ressourcen verlinken
- Sicherstellen, dass alle Links funktionieren

### Bilder und Assets
- Bilder in `docs/public/` oder Unterverzeichnissen ablegen
- Aussagekräftige Dateinamen verwenden
- Bilder für das Web optimieren (möglichst unter 500 KB)

## Verhaltenskodex

Dieses Projekt folgt einem Verhaltenskodex. Mit Ihrer Teilnahme erklären Sie sich bereit:

- respektvoll und inklusiv zu sein
- sich auf konstruktives Feedback zu konzentrieren
- Verantwortung für Fehler zu übernehmen

Details finden Sie in der [CODE_OF_CONDUCT.md](https://github.com/sudoku-pro/sudoku-site/blob/main/CODE_OF_CONDUCT.md).

## Fragen?

Wenn Sie Fragen zum Mitwirken haben:
- Prüfen Sie bestehende [Issues](https://github.com/sudoku-pro/sudoku-site/issues) und [Diskussionen](https://github.com/sudoku-pro/sudoku-site/discussions)
- Erstellen Sie bei Bedarf ein neues Issue
- Wenden Sie sich an die Maintainer

Vielen Dank, dass Sie helfen, die Sudoku-Dokumentation zu verbessern! 🎉
