# 疑難排解

本頁彙整常見問題與解決方式。

## 應用程式無法啟動或一開啟就閃退

症狀：Sudoku 打不開、一開啟就閃退，或出現非預期的錯誤。

可嘗試的步驟：

1. 確認裝置符合最低系統需求（iOS/iPadOS 16+、macOS 15+）。
2. 強制結束 App 後重新啟動。
3. 重新啟動裝置。
4. 從 App Store 重新安裝 App。
5. 若問題仍未解決，請在專案儲存庫提出 issue 並附上詳細資訊。

## 效能問題

如果遊戲卡頓或反應遲緩：

1. 關閉其他耗資源的應用程式。
2. 在 Mac 上，用「活動監視器」檢查是否有 CPU 使用率過高的情況。
3. 在較舊的裝置上，可嘗試較簡單的難度（簡單或中等）。

## iCloud 同步沒有作用

如果進度沒有在裝置間同步：

1. 確認所有裝置都登入同一個 Apple ID。
2. 確認已在「系統設定」（Mac）或「設定」（iOS/iPadOS）中啟用 iCloud 雲碟。
3. 確認網路連線正常。
4. 在「設定」→［你的名字］→ iCloud →「使用 iCloud 的 App」中，將 Sudoku 的 iCloud 關閉後再重新開啟。
5. 重新啟動所有裝置後再試一次。

## Game Center 無法連線

如果 Game Center 的成就或排行榜沒有更新：

1. 確認已登入 Game Center（iOS 為「設定」→「Game Center」；Mac 為「系統設定」）。
2. 檢查網路連線。
3. 登出 Game Center 後再重新登入。

## 檢視日誌

排查閃退問題時，應用程式日誌會很有幫助。在 Mac 的沙箱（App Store）版本中，請查看：

```
~/Library/Containers/com.w3cub.sudoku/Data/Library/Logs/sudoku/sudoku.log
```

在 iOS/iPadOS 上，請將裝置連接到 Mac，並使用 Console.app 檢視日誌，以「Sudoku」作為篩選條件。

## 重設 App

若要重設設定並清除本機資料（Mac）：

1. 結束 Sudoku
2. 移除容器（請小心——這會刪除所有設定、統計資料與遊戲存檔）：

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

3. 重新開啟 Sudoku 並重新設定。

在 iPhone/iPad 上，刪除並重新安裝 App 即可重設所有資料。

**注意**：如果你使用 iCloud 同步，在某一台裝置上重設後，重新啟動時可能會再次從 iCloud 下載資料。若要在所有裝置上徹底重設，可能需要每台裝置都各自重設一次。

## 回報問題

提出 issue 時，請附上：

- 裝置類型（iPhone、iPad 或 Mac）
- 作業系統版本（設定 → 一般 → 關於本機）
- Sudoku 版本（設定 → 關於）
- 重現步驟
- 日誌或截圖（若有）

這些資訊能幫助維護人員更快找出並修正問題。
