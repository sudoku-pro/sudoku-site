# 故障排查

本页汇总了常见问题及其解决办法。

## 应用无法启动或启动即崩溃

现象：Sudoku 打不开、刚启动就崩溃，或显示意外错误。

可尝试的步骤：

1. 确认设备满足最低要求（iOS/iPadOS 16+、macOS 15+）。
2. 强制退出应用后重新启动。
3. 重启设备。
4. 从 App Store 重新安装应用。
5. 如果问题依旧，请在项目仓库中提交 issue 并附上详细信息。

## 性能问题

如果游戏卡顿或运行缓慢：

1. 关闭其他占用资源较多的应用。
2. 在 Mac 上，打开“活动监视器”检查是否有高 CPU 占用。
3. 在较旧的设备上，可以试试更简单的难度（简单或中等）。

## iCloud 同步不工作

如果进度没有在设备间同步：

1. 确认所有设备登录的是同一个 Apple ID。
2. 检查 macOS 的“系统设置”或 iOS/iPadOS 的“设置”中是否已启用 iCloud 云盘。
3. 确认网络连接正常。
4. 在“设置 → [你的名字] → iCloud → 使用 iCloud 的 App”中，将 Sudoku 的 iCloud 开关关闭后再重新打开。
5. 重启所有设备后重试。

## Game Center 无法连接

如果 Game Center 的成就或排行榜没有更新：

1. 确认已登录 Game Center（iOS 上为“设置 → Game Center”；Mac 上为“系统设置”）。
2. 检查网络连接。
3. 退出 Game Center 登录后重新登录。

## 查看日志

排查崩溃时，应用日志会很有帮助。在 Mac 上使用沙盒（App Store 版）构建时，请查看：

```
~/Library/Containers/com.w3cub.sudoku/Data/Library/Logs/sudoku/sudoku.log
```

在 iOS/iPadOS 上，将设备连接到 Mac，使用 Console.app 查看日志，并按“Sudoku”筛选。

## 重置应用

如需重置设置并清除本地数据（Mac）：

1. 退出 Sudoku
2. 删除容器（请谨慎——这会删除所有设置、统计数据和游戏存档）：

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

3. 重新打开 Sudoku 并重新配置。

在 iPhone/iPad 上，删除并重新安装应用即可重置所有数据。

**注意**：如果你使用了 iCloud 同步，在某一台设备上重置后，应用重新启动时可能会再次从 iCloud 下载数据。若要在所有设备上彻底重置，可能需要在每台设备上分别执行重置。

## 报告问题

提交 issue 时，请附上：

- 设备类型（iPhone、iPad 或 Mac）
- 系统版本（设置 → 通用 → 关于本机）
- Sudoku 版本（设置 → 关于）
- 复现步骤
- 如有，附上日志或截图

这能帮助维护者更快地定位并修复问题。
