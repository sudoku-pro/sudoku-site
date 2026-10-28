# 貢獻指南

我們歡迎大家協助改善 Sudoku 的文件！無論是修正錯字、新增指南，或優化現有內容，都非常感謝你的幫忙。

## 參與方式

### 改善文件
- 修正錯字或文法錯誤
- 釐清容易混淆的說明
- 補充缺少的資訊
- 更新過時的內容
- 改善排版與可讀性

### 新增內容
- 撰寫常見問題的處理指南
- 新增教學或範例
- 將文件翻譯成其他語言
- 撰寫常見問題條目

### 技術貢獻
- 改善建置流程
- 為文件站新增功能
- 修正部署流程中的錯誤

## 開始之前

### 先備條件
- Node.js 18 或以上版本
- pnpm 套件管理工具
- Git

### 開發環境設定

1. 在 GitHub 上 **Fork 這個儲存庫**
2. **複製你的 fork**：
   ```bash
   git clone https://github.com/YOUR_USERNAME/sudoku-site.git
   cd sudoku-site
   ```
3. **安裝相依套件**：
   ```bash
   pnpm install
   ```
4. **啟動開發伺服器**：
   ```bash
   pnpm docs:dev
   ```
5. 在瀏覽器開啟 `http://localhost:5173`

### 進行修改

1. 為你的修改建立新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 修改 `docs/` 目錄下的文件檔案
3. 建置網站以測試你的修改：
   ```bash
   pnpm docs:build
   ```
4. 提交你的修改：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 送出修改

1. **推送你的分支**到你的 fork：
   ```bash
   git push origin feature/your-feature-name
   ```
2. 在 GitHub 上 **建立 Pull Request**
3. **等待審查**並回應各項意見

## 撰寫規範

### 寫作風格
- 用語清楚、簡潔
- 盡量使用主動語態
- 保持包容與友善
- 格式維持一致
- 適時附上程式碼範例

### 檔案結構
- 文件頁面放在 `docs/`
- 指南放在 `docs/guide/`
- 檔名使用小寫並以連字號分隔：`my-new-guide.md`
- Frontmatter 非必要，但可用來記錄中繼資料

### 連結
- 站內文件請使用相對連結
- 適時連結到外部資源
- 確認所有連結皆可正常開啟

### 圖片與資源
- 圖片請放在 `docs/public/` 或其子目錄
- 檔名要能說明內容
- 圖片請為網頁最佳化（建議小於 500KB）

## 行為準則

本專案遵循行為準則。參與即表示你同意：

- 尊重他人、包容多元
- 聚焦於建設性的意見
- 為自己的錯誤負責

詳情請參閱 [CODE_OF_CONDUCT.md](https://github.com/sudoku-pro/sudoku-site/blob/main/CODE_OF_CONDUCT.md)。

## 有問題嗎？

若你對貢獻流程有疑問：

- 先查看現有的 [issues](https://github.com/sudoku-pro/sudoku-site/issues) 與 [discussions](https://github.com/sudoku-pro/sudoku-site/discussions)
- 必要時建立新的 issue
- 聯絡維護人員

感謝你協助改善 Sudoku 文件！🎉
