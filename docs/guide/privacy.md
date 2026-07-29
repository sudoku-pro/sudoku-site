# Privacy Policy

Sudoku is an offline-first application with optional cloud features. This page explains what (if any) data the app collects and how it is used.

## Offline Core — No Data Collection for Gameplay

- The core puzzle game is fully playable offline. No network access is required to play.
- All game data — settings, game state, pencil notes, and statistics — is stored locally on your device.
- There are no ads, no analytics, and no third-party tracking SDKs.

## Optional Cloud Features

### iCloud Sync (CloudKit)

When you sign in to iCloud and enable sync:

- Game saves, statistics, settings, and daily challenge progress are synced to your personal **iCloud account** via Apple's CloudKit service.
- Data is encrypted in transit and at rest by Apple's infrastructure.
- Only you can access your synced data using your Apple ID.
- This feature is entirely optional — the app works perfectly without it.

### Game Center

When you sign in to Game Center:

- Leaderboard scores (best completion times per difficulty) may be shared on public leaderboards.
- Achievement progress is recorded by Apple's Game Center service.
- Your Game Center display name is visible to other players on leaderboards.
- This feature is entirely optional.

## The Only Other Network Access: "More Apps"

The sole non-cloud network feature is an optional **"More Apps"** section in Settings, which fetches a list of sibling apps from our servers. This feature:

- Only activates when you navigate to Settings → More Apps.
- Fetches a lightweight list of app names and links — no personal data is sent or stored.
- Can be completely ignored and does not affect gameplay in any way.

## What We Do Not Collect

- We do not collect personal information, files, images, or browsing history.
- We do not send any game data to external servers (except as described above for iCloud/Game Center).
- We do not include third-party analytics or advertising SDKs.
- We do not use crash reporting or telemetry services.

## Permissions

Sudoku requires minimal permissions:

- **iCloud** (optional): For syncing game data across devices via CloudKit.
- **Game Center** (optional): For leaderboards and achievements.
- **Network** (optional): For iCloud sync, Game Center, and "More Apps".

No location, contacts, camera, microphone, or other privacy-sensitive permissions are requested.

## Data Retention

- Local data remains on your device until you uninstall the app or reset it.
- iCloud-synced data follows Apple's iCloud data retention policies.
- Game Center data follows Apple's Game Center policies.

## Privacy Requests

Since Sudoku stores all data locally (and optionally in your personal iCloud), there is no server-side data that we control or access. To clear all app data:

- **Uninstall the app** from your device(s).
- **Reset iCloud data**: In Settings → [Your Name] → iCloud → Manage Account Storage → Sudoku → Delete Data.
- **Mac local reset**: See the Troubleshooting guide for container removal instructions.

## Children's Privacy

Sudoku does not actively collect personal information from anyone, including children. The app does not require accounts, chat features, or social networking.

## Contact

For privacy questions, open an issue at the project repository (https://github.com/sudoku-pro/sudoku-site) or contact us at sudoku@w3cub.com.
