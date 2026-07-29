# Troubleshooting

This page collects common problems and how to resolve them.

## Application won't start or crashes on launch

Symptoms: Sudoku does not open, crashes immediately, or shows an unexpected error.

Steps to try:

1. Ensure your device meets the minimum requirements (iOS/iPadOS 16+, macOS 15+).
2. Force-quit and relaunch the app.
3. Restart your device.
4. Reinstall the app from the App Store.
5. If problems persist, open an issue on the project repository with details.

## Performance issues

If the game is laggy or slow:

1. Close other heavy applications.
2. On Mac, check Activity Monitor for high CPU usage.
3. On older devices, try an easier difficulty level (Easy or Medium).

## iCloud sync not working

If your progress is not syncing across devices:

1. Ensure you are signed into the same Apple ID on all devices.
2. Check that iCloud Drive is enabled in System Settings (Mac) or Settings (iOS/iPadOS).
3. Verify you have an active internet connection.
4. Toggle iCloud off and back on for Sudoku in Settings → [Your Name] → iCloud → Apps Using iCloud.
5. Restart all devices and try again.

## Game Center not connecting

If Game Center achievements or leaderboards are not updating:

1. Ensure you are signed into Game Center (Settings → Game Center on iOS; System Settings on Mac).
2. Check your internet connection.
3. Sign out of Game Center and sign back in.

## View logs

To troubleshoot crashes, application logs are useful. In sandboxed (App Store) builds on Mac, check:

```
~/Library/Containers/com.w3cub.sudoku/Data/Library/Logs/sudoku/sudoku.log
```

On iOS/iPadOS, connect your device to a Mac and use Console.app to view logs, filtering by "Sudoku".

## Resetting the app

To reset settings and clear local data (Mac):

1. Quit Sudoku
2. Remove the container (careful — this deletes all settings, statistics, and game saves):

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

3. Reopen Sudoku and reconfigure.

On iPhone/iPad, delete and reinstall the app to reset all data.

**Note**: If you use iCloud sync, resetting on one device may re-download data from iCloud after relaunch. To fully reset across all devices, you may need to reset on each one.

## Report an issue

When opening an issue, include:

- Device type (iPhone, iPad, or Mac)
- OS version (Settings → General → About)
- Sudoku version (Settings → About)
- Steps to reproduce
- Logs or screenshots if available

This helps maintainers identify and fix the problem faster.
