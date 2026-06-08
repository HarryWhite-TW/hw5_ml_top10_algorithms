# Machine Learning TOP 10 Algorithms

一個以「機器學習十大演算法」為主題的互動式單頁網站，設計成深色未來感 AI dashboard。作品可直接開啟 `index.html` 執行，不需要 React、Vite、npm 或任何建置工具。

## Demo 說明

本網站像一份互動式機器學習手冊與小型沙盒，使用者可以瀏覽十大演算法、搜尋與篩選、調整參數 demo、複製 Python-style 程式片段、完成小測驗，並使用可收合的 demo-only AI 助理介面練習問答。

## 作業需求摘要

- 使用 vanilla HTML、CSS、JavaScript。
- 網站必須能直接用瀏覽器開啟 `index.html`。
- 主題為 Machine Learning TOP 10 Algorithms。
- 使用繁體中文作為主要內容語言，保留英文演算法名稱。
- 加入互動功能、比較矩陣、學習路線圖與開發紀錄。
- AI 助理介面只提供示範回覆，不連接任何真實 API。

## Features

- 深色 AI dashboard 視覺風格：玻璃擬態卡片、漸層 glow、柔和邊框與 hover 動畫。
- 左側演算法導覽：點選後即時更新主內容。
- 搜尋與篩選：支援關鍵字、類別與難度篩選。
- 十大演算法完整內容：中文名、英文名、分類、難度、核心概念、公式、使用情境、優缺點、程式片段與學習問題。
- 參數沙盒：依演算法切換不同 slider demo，並以 canvas 顯示互動視覺化。
- 比較矩陣：快速比較可解釋性、速度、資料量與典型用途。
- Mini Quiz：五題選擇題，送出後顯示分數與解釋。
- 學習進度：記錄已瀏覽演算法數量。
- Mark as learned：使用 `localStorage` 保存已學會狀態。
- 程式碼複製按鈕：快速複製每個演算法的小片段。
- Demo AI assistant：以可收合抽屜呈現，不阻擋主要學習內容；包含 API key 輸入 UI，但只儲存 masked demo state，完全不發送外部請求。

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`
- Canvas 2D API

## File Structure

```text
hw5_ml_top10_algorithms/
├── index.html
├── style.css
├── script.js
├── README.md
├── BUILD_LOG.md
└── .gitignore
```

## How to Run Locally

1. 開啟專案資料夾。
2. 直接用瀏覽器開啟 `index.html`。
3. 不需要安裝套件，也不需要啟動伺服器。

## GitHub Pages Deployment

1. 將專案推送到 GitHub repository。
2. 進入 GitHub repository 的 `Settings`。
3. 選擇 `Pages`。
4. Source 選擇主要分支，例如 `main`。
5. Folder 選擇 root。
6. 儲存後等待 GitHub Pages 產生公開網址。

## AI 使用說明

本作業使用 AI 協助完成：

- 規劃網站資訊架構。
- 整理十大機器學習演算法內容。
- 設計互動功能與使用者體驗。
- 撰寫 HTML、CSS、JavaScript。
- 補上 README 與 BUILD_LOG，保存開發過程。

學生仍需要理解內容、檢查結果、測試互動功能，並確認網頁符合老師要求。

## Security Note

- 本網站沒有連接任何真實 API。
- 沒有硬編碼任何 API key。
- API key input 只是模擬真實產品介面。
- Save 按鈕只會在 `localStorage` 儲存 `masked-demo-key` 這種示範狀態。
- AI assistant 回覆全部由前端關鍵字規則產生。
- AI assistant 預設收合為右側 `AI 助教` 分頁，需要時才展開。

## Learning Reflection

這個作品讓我練習把機器學習知識轉成可互動的網頁內容。除了整理演算法本身，我也學到如何設計資訊層級、建立篩選與狀態保存、使用 canvas 做簡單視覺化，以及在不連接真實 API 的情況下做出安全的 demo 產品介面。

## Future Improvements

- 增加更多小型資料集 demo。
- 加入演算法適用情境的決策流程圖。
- 讓 quiz 支援更多題庫與重新挑戰。
- 補上更多模型評估指標，例如 accuracy、F1、RMSE 與 silhouette score。
