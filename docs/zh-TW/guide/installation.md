# 安裝

Sudoku 在 App Store 上以通用 App 形式提供，一次購買即可支援 iPhone、iPad 與 Mac。

## 下載

- **App Store**：[下載 Sudoku](https://apps.apple.com/app/id6793606018) — 適用於 iPhone、iPad 與 Mac 的通用 App

### App Store（建議方式）

App Store 版本可自動更新，並與你的所有 Apple 裝置無縫整合。

- **App Store ID**：6793606018
- **連結**：https://apps.apple.com/app/id6793606018
- **平台**：iPhone、iPad、Mac（通用 App）
- **價格**：目前價格請參閱 App Store 頁面

## 安裝步驟

### iPhone / iPad

1. 在裝置上開啟 **App Store**
2. 搜尋「Sudoku」，或使用上方直接連結
3. 點一下 **取得** 或 **購買** 即可下載
4. App 會自動安裝
5. 從主畫面啟動 Sudoku

### Mac

1. 在 Mac 上開啟 **App Store**
2. 搜尋「Sudoku」，或使用上方直接連結
3. 按一下 **取得** 或 **購買**
4. App 會自動下載並安裝
5. 從「應用程式」檔案夾或 Launchpad 啟動 Sudoku

## 首次啟動

第一次啟動 Sudoku 時，App 會請求存取 iCloud（用於同步）與 Game Center（用於排行榜與成就）的權限。這些都是選用的——即使不允許，遊戲仍可完全離線運作。

## 更新

更新由 App Store 自動處理。若要手動檢查更新，請開啟 App Store，前往 **帳號 → 更新項目** 區塊。

## 解除安裝

### iPhone / iPad

1. 長按 Sudoku App 圖示
2. 點一下 **移除 App** → **刪除 App**

### Mac

1. 結束 Sudoku
2. 將 `Sudoku.app` 從 `Applications` 拖曳到垃圾桶
3. （選用）移除 App 資料：

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

## 系統需求

- **iPhone/iPad**：iOS/iPadOS 16.0 或以上版本
- **Mac**：macOS 15.0（Sequoia）或以上版本
- **CPU**：Apple Silicon（M 系列）
- **記憶體**：至少 2GB
- **儲存空間**：約 50 MB
- **網路**：遊玩時不需要（iCloud／Game Center 為選用）

## 疑難排解

若安裝過程中遇到問題：

- **macOS 阻擋 App**：開啟 **系統設定 → 隱私權與安全性**，對 Sudoku 按一下 **仍要打開**
- **App 沒有出現**：重新啟動 App Store 或你的裝置後再試一次

需要更多協助，請參閱[疑難排解指南](./troubleshooting)，或在專案儲存庫提出 issue。
