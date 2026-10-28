# Datenschutzoptionen

Sudoku ist eine Offline-First-App mit minimalem Datenumgang. Diese Seite erläutert Ihre Datenschutzoptionen und wie Sie Ihre Daten kontrollieren.

## Ihre Daten bleiben standardmäßig auf Ihrem Gerät

- Alle Spieldaten — Einstellungen, Spielstand, Notizen und Statistiken — werden standardmäßig lokal auf Ihrem Gerät gespeichert.
- Das Kernspiel benötigt keinerlei Netzwerkzugriff.
- Es gibt keine Werbung, keine Analyse und kein Tracking.

## Optionale Cloud-Funktionen

### iCloud-Synchronisierung

Wenn Sie die iCloud-Synchronisierung aktivieren:

- Daten werden ausschließlich mit **Ihrem persönlichen iCloud-Account** synchronisiert — nicht mit einem von uns kontrollierten Server.
- Apples CloudKit übernimmt die Verschlüsselung bei der Übertragung und im Ruhezustand.
- Sie können dies jederzeit deaktivieren: Einstellungen → [Ihr Name] → iCloud → Apps, die iCloud verwenden → Sudoku ausschalten.

### Game Center

Wenn Sie Game Center nutzen:

- Ranglistenpunkte können öffentlich unter Ihrem Game-Center-Anzeigenamen erscheinen.
- Der Erfolgsfortschritt wird von Game Center erfasst.
- Sie können dies deaktivieren, indem Sie sich in den Einstellungen bei Game Center abmelden.

## Die einzige Nicht-Cloud-Netzwerkfunktion: „Weitere Apps“

Der einzige weitere Netzwerkzugriff ist der optionale Bereich **„Weitere Apps“** in den Einstellungen, der eine Liste weiterer Apps abruft. Diese Funktion:

- sendet keine personenbezogenen Daten — sie ruft lediglich eine Liste von App-Namen und Links ab.
- kann vollständig ignoriert werden, ohne das Spiel zu beeinträchtigen.
- verfolgt Sie nicht und speichert keine Kennungen.

## Ihre Daten löschen

So entfernen Sie alle App-Daten von Ihrem Gerät:

- **iPhone/iPad**: Löschen Sie die App und installieren Sie sie neu
- **Mac**: Beenden Sie Sudoku und entfernen Sie anschließend den Container:

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

So löschen Sie zusätzlich die mit iCloud synchronisierten Daten:
1. Öffnen Sie **Einstellungen → [Ihr Name] → iCloud → Account-Speicher verwalten**
2. Suchen Sie Sudoku in der App-Liste
3. Tippen Sie auf **Daten löschen**

Dadurch werden alle Einstellungen, Statistiken, Spielstände und Fortschritte bei täglichen Herausforderungen dauerhaft aus iCloud gelöscht.

## Kein Tracking, keine Werbung

Sudoku enthält keine Werbung, keine Analyse, keine Tracking-Pixel und keine Integrationen zur Datenweitergabe an Dritte. Die App benötigt für das Spielen keinen Netzwerkzugriff.

## Übersicht der Datenschutzanfragen

| Anfrage | Erforderlich? | Funktion |
|---------|-----------|-------------|
| Lokale Speicherung | Ja (automatisch) | Speichert Spieldaten auf dem Gerät |
| iCloud-Synchronisierung | Optional | Synchronisiert Daten über CloudKit zwischen Ihren Geräten |
| Game Center | Optional | Ranglisten & Erfolge |
| Netzwerk („Weitere Apps“) | Optional | Ruft die Liste weiterer Apps ab |

Da keine personenbezogenen Daten erhoben oder an von uns kontrollierte Server übertragen werden, gibt es keine zentrale Datenbank, auf die zugegriffen werden könnte oder die gelöscht oder übertragen werden müsste. Alle Daten liegen entweder lokal oder werden von Apples Diensten (iCloud/Game Center) verwaltet.

## Kontakt

Wenn Sie Fragen zu diesem Ablauf haben, eröffnen Sie ein Issue unter `https://github.com/sudoku-pro/sudoku-site/issues` oder schreiben Sie eine E-Mail an sudoku@w3cub.com.
