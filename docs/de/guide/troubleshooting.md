# Problembehandlung

Diese Seite sammelt häufige Probleme und zeigt, wie Sie sie beheben.

## Die App startet nicht oder stürzt beim Start ab

Symptome: Sudoku öffnet sich nicht, stürzt sofort ab oder zeigt einen unerwarteten Fehler.

Schritte zum Ausprobieren:

1. Stellen Sie sicher, dass Ihr Gerät die Mindestanforderungen erfüllt (iOS/iPadOS 16+, macOS 15+).
2. Beenden Sie die App erzwungen und starten Sie sie erneut.
3. Starten Sie Ihr Gerät neu.
4. Installieren Sie die App aus dem App Store neu.
5. Wenn das Problem weiterhin besteht, eröffnen Sie ein Issue im Projekt-Repository mit den Details.

## Leistungsprobleme

Wenn das Spiel ruckelt oder langsam ist:

1. Schließen Sie andere ressourcenintensive Anwendungen.
2. Prüfen Sie auf dem Mac die Aktivitätsanzeige auf hohe CPU-Auslastung.
3. Wählen Sie auf älteren Geräten einen leichteren Schwierigkeitsgrad (Leicht oder Mittel).

## iCloud-Synchronisierung funktioniert nicht

Wenn Ihr Fortschritt nicht zwischen Geräten synchronisiert wird:

1. Stellen Sie sicher, dass Sie auf allen Geräten mit derselben Apple-ID angemeldet sind.
2. Prüfen Sie, ob iCloud Drive in den Systemeinstellungen (Mac) bzw. Einstellungen (iOS/iPadOS) aktiviert ist.
3. Vergewissern Sie sich, dass eine aktive Internetverbindung besteht.
4. Schalten Sie iCloud für Sudoku in den Einstellungen unter [Ihr Name] → iCloud → Apps, die iCloud verwenden, aus und wieder ein.
5. Starten Sie alle Geräte neu und versuchen Sie es erneut.

## Game Center stellt keine Verbindung her

Wenn Game Center-Erfolge oder Ranglisten nicht aktualisiert werden:

1. Stellen Sie sicher, dass Sie bei Game Center angemeldet sind (iOS: Einstellungen → Game Center; Mac: Systemeinstellungen).
2. Prüfen Sie Ihre Internetverbindung.
3. Melden Sie sich bei Game Center ab und wieder an.

## Protokolle anzeigen

Zur Fehleranalyse von Abstürzen sind Anwendungsprotokolle hilfreich. In sandboxed Builds (App Store) auf dem Mac finden Sie diese unter:

```
~/Library/Containers/com.w3cub.sudoku/Data/Library/Logs/sudoku/sudoku.log
```

Unter iOS/iPadOS verbinden Sie Ihr Gerät mit einem Mac und zeigen die Protokolle in Console.app an, gefiltert nach „Sudoku“.

## App zurücksetzen

So setzen Sie die Einstellungen zurück und löschen lokale Daten (Mac):

1. Beenden Sie Sudoku
2. Entfernen Sie den Container (Vorsicht – dabei werden alle Einstellungen, Statistiken und Spielstände gelöscht):

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

3. Öffnen Sie Sudoku erneut und richten Sie die App neu ein.

Unter iPhone/iPad löschen Sie die App und installieren Sie sie neu, um alle Daten zurückzusetzen.

**Hinweis**: Wenn Sie die iCloud-Synchronisierung nutzen, kann ein Zurücksetzen auf einem Gerät dazu führen, dass die Daten nach dem Neustart erneut aus iCloud geladen werden. Für ein vollständiges Zurücksetzen auf allen Geräten müssen Sie die App möglicherweise auf jedem Gerät zurücksetzen.

## Problem melden

Wenn Sie ein Issue eröffnen, geben Sie bitte an:

- Gerätetyp (iPhone, iPad oder Mac)
- Betriebssystemversion (Einstellungen → Allgemein → Info)
- Sudoku-Version (Einstellungen → Über)
- Schritte zum Reproduzieren
- Protokolle oder Screenshots, falls verfügbar

So können Maintainer das Problem schneller eingrenzen und beheben.
