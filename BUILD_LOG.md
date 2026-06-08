# BUILD_LOG

## Project Goal

本專案目標是完成一個可直接開啟的單頁網站，主題為「Machine Learning TOP 10 Algorithms」。網站要兼具課堂作業可讀性與 GitHub 作品集展示感，並呈現 AI 輔助開發的過程。

## AI-assisted Planning

開發前先請 AI 協助拆解需求，確認限制條件：

- 不使用 React、Vite、Next.js、Tailwind、npm 或建置工具。
- 只使用 `index.html`、`style.css`、`script.js` 與文件檔。
- 內容主語言使用繁體中文。
- AI assistant 只能是 demo-only，不能呼叫任何真實 API。
- 互動功能必須由前端 JavaScript 實作。

AI 協助把需求整理成主要區塊：Hero、演算法導覽、內容探索、比較矩陣、小測驗、學習路線圖、AI assistant demo 與 GitHub record reminder。

## Website Structure Design

網站採用三欄 dashboard 架構：

- 左側是搜尋、類別篩選、難度篩選與十大演算法導覽。
- 中央是主要學習內容，包含演算法卡片、比較表、小測驗與學習路線圖。
- 右側是浮動 AI assistant demo panel。

首頁 hero 區以「interactive machine learning handbook and sandbox」為定位，讓頁面看起來不只是報告，而像一個可操作的學習工作台。

## Interaction Design

互動設計包含：

- 點擊左側演算法按鈕，中央內容即時切換。
- 搜尋與篩選可縮小演算法清單。
- `localStorage` 記錄已瀏覽演算法與已學會演算法。
- 進度條顯示已瀏覽數量。
- Pros / Cons 卡片在切換演算法時有 highlight 動畫。
- 程式片段可用 Copy 按鈕複製。
- Mini Quiz 可計算分數並顯示每題解釋。

## Parameter Sandbox

每個演算法都有一個 slider demo：

- Linear Regression：調整斜率並改變線條。
- Logistic Regression：調整分類門檻。
- Decision Tree：調整樹深並改變樹狀圖。
- Random Forest：調整樹的數量。
- SVM：調整 regularization C。
- KNN：調整 K 值並改變鄰居範圍。
- K-Means：調整 cluster count 並改變群中心。
- Naive Bayes：調整 smoothing alpha。
- Gradient Boosting：調整 learning rate。
- PCA：調整 components 數量。

視覺化使用 Canvas 2D API，不依賴外部套件。

## AI Assistant Demo Design

AI assistant panel 模擬真實產品常見的 API key 輸入與聊天介面，但安全上完全不連接外部服務。

設計原則：

- API key 欄位只是一個 UI demo。
- Save 按鈕不保存真實 key，只保存 masked demo state。
- Chat 回覆由關鍵字規則產生。
- 支援 regression、classification、clustering、which algorithm 等提示。
- 頁面沒有任何網路請求或真實 API endpoint。

## Security Consideration

安全檢查重點：

- 不硬編碼 API key。
- 不加入外部追蹤腳本。
- 不發送網路請求。
- 不修改使用者本機其他檔案。
- 所有學習狀態只存在瀏覽器 `localStorage`。

## Git/GitHub Preservation Plan

建議的 Git 保存方式：

1. 建立初始專案結構。
2. Commit HTML layout。
3. Commit CSS visual design。
4. Commit JavaScript interactions。
5. Commit README and BUILD_LOG。
6. 推送到 GitHub 後啟用 GitHub Pages。

這樣老師可以看到作品不是一次性貼上，而是經過規劃、實作、驗證與整理。

## Final Validation Checklist

- [x] `index.html` 正確連結 `style.css`。
- [x] `index.html` 正確連結 `script.js`。
- [x] 包含十大機器學習演算法。
- [x] 搜尋與篩選互動已實作。
- [x] 演算法切換互動已實作。
- [x] 參數 sandbox 與 canvas demo 已實作。
- [x] Mini Quiz 已實作。
- [x] Code copy button 已實作。
- [x] 學習進度與 mark as learned 使用 `localStorage`。
- [x] AI assistant 為 demo-only。
- [x] 沒有真實 API call。
- [x] 沒有硬編碼 API key。
- [x] README 已完成。
- [x] BUILD_LOG 已完成。
- [x] `.gitignore` 已加入基本忽略規則。
