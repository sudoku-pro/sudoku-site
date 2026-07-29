# Privacy Choices

Sudoku is an offline-first app with minimal data practices. This page explains your privacy options and how to control your data.

## Your Data Stays on Your Device (By Default)

- All game data — settings, game state, pencil notes, and statistics — is stored locally on your device by default.
- Core gameplay requires zero network access.
- There are no ads, no analytics, and no tracking.

## Optional Cloud Features

### iCloud Sync

If you choose to enable iCloud sync:

- Data is synced to **your personal iCloud account** only — not to any server we control.
- Apple's CloudKit handles encryption in transit and at rest.
- You can disable this at any time: Settings → [Your Name] → iCloud → Apps Using iCloud → toggle Sudoku off.

### Game Center

If you choose to use Game Center:

- Leaderboard scores may appear publicly under your Game Center display name.
- Achievement progress is recorded by Game Center.
- You can disable this by signing out of Game Center in Settings.

## The Only Non-Cloud Network Feature: "More Apps"

The only other network access is the optional **"More Apps"** section in Settings, which fetches a list of sibling apps. This feature:

- Sends no personal data — it only retrieves a list of app names and links.
- Can be ignored entirely with no impact on gameplay.
- Does not track you or store any identifiers.

## Clearing Your Data

To remove all app data from your device:

- **iPhone/iPad**: Delete and reinstall the app
- **Mac**: Quit Sudoku, then remove the container:

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

To also clear iCloud-synced data:
1. Go to **Settings → [Your Name] → iCloud → Manage Account Storage**
2. Find Sudoku in the app list
3. Tap **Delete Data**

This will permanently delete all settings, statistics, game saves, and daily challenge progress from iCloud.

## No Tracking, No Ads

Sudoku contains no advertising, no analytics, no tracking pixels, and no third-party data-sharing integrations. The app does not require network access for gameplay.

## Privacy Requests Summary

| Request | Required? | What it does |
|---------|-----------|-------------|
| Local storage | Yes (automatic) | Stores game data on device |
| iCloud sync | Optional | Syncs data across your devices via CloudKit |
| Game Center | Optional | Leaderboards & achievements |
| Network ("More Apps") | Optional | Fetches sibling app list |

Since no personal data is collected or transmitted to servers we control, there is no central database to access, delete, or port. All data is either local or managed by Apple's services (iCloud/Game Center).

## Contact

If you have questions about this process, open an issue at `https://github.com/sudoku-pro/sudoku-site/issues` or email sudoku@w3cub.com.
