# HW5｜機器學習 TOP 10 演算法互動式網頁

> **網站連結：**
> https://harrywhite-tw.github.io/hw5_ml_top10_algorithms/

## 一、專案簡介

本專案為 HW5 作業成果，主題為「機器學習 TOP 10 演算法互動式網頁」。
作業目標是運用 AI 輔助工具完成一個具備互動性、視覺設計與學習導向內容的靜態網頁，並將完整開發過程保存至 GitHub，作為作業紀錄與作品展示。

本網站以「互動式機器學習學習手冊」為設計方向，整理十個常見的機器學習演算法，包含核心概念、適用場景、優缺點、簡易程式碼片段、比較矩陣、小測驗，以及 demo 版 AI 學習助教介面。

---

## 二、作業需求對應

本作業要求包含以下重點：

1. 將機器學習 TOP 10 演算法製作成網頁。
2. 網頁需具備互動式內容。
3. 網頁中需包含 AI 小助手對話介面。
4. 專案名稱需以 `hw5_` 開頭。
5. 將製作過程與成果保存至 GitHub。
6. 透過 AI 工具輔助完成一個具備完整度與展示價值的網頁作品。

本專案依照上述要求完成，並將網站部署至 GitHub Pages，方便瀏覽與驗證。

---

## 三、網站功能

### 1. 演算法互動探索

網站收錄以下十個機器學習演算法：

1. Linear Regression｜線性迴歸
2. Logistic Regression｜邏輯斯迴歸
3. Decision Tree｜決策樹
4. Random Forest｜隨機森林
5. Support Vector Machine｜支援向量機
6. K-Nearest Neighbors｜K 近鄰
7. K-Means Clustering｜K-Means 分群
8. Naive Bayes｜樸素貝氏
9. Gradient Boosting｜梯度提升
10. Principal Component Analysis｜主成分分析

每個演算法皆包含：

* 中文名稱與英文名稱
* 類別與難度標籤
* 核心概念說明
* 初學者友善解釋
* 重要公式或觀念
* 適用場景
* 優點與限制
* Python 程式碼片段
* 常見學習問題
* 參數互動示範區

---

### 2. 搜尋與篩選功能

使用者可以透過以下方式快速找到演算法：

* 關鍵字搜尋
* 類別篩選
* 難度篩選
* 左側演算法列表切換

此設計讓網站不只是靜態閱讀頁面，而是具備基本互動操作的學習工具。

---

### 3. 參數沙盒

部分演算法提供簡易參數互動示範，例如：

* 線性迴歸斜率調整
* KNN 的 K 值調整
* K-Means 分群數調整
* 決策樹深度調整

此功能用於幫助使用者理解模型參數變化對結果或模型行為的影響。

---

### 4. 演算法比較矩陣

網站提供演算法比較表，整理不同演算法在以下面向的差異：

* 演算法類別
* 可解釋性
* 執行速度
* 適合資料量
* 常見用途

此區塊協助使用者從整體角度理解不同演算法的適用情境。

---

### 5. 五題快速小測驗

網站內建簡易測驗功能，讓使用者在瀏覽後可以檢查自己對演算法的基本理解。
測驗提交後會顯示分數與回饋，增加學習互動性。

---

### 6. Demo AI 演算法助教

網站包含一個可收合的 AI 助教介面，具備：

* API Key 輸入框介面
* Demo 對話區
* 快捷提問按鈕
* 基於關鍵字的示範回覆
* 可展開與收合的右側抽屜設計

需要特別說明的是，本作業版本的 AI 助教為 demo-only 設計，並未串接真實 API，也不會送出或儲存真實 API Key。此設計主要用於模擬真實產品中的 AI 助手互動介面。

---

## 四、技術使用

本專案採用純前端技術完成：

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Git / GitHub
* GitHub Pages

未使用 React、Vue、Vite、Next.js、npm 或其他建置工具。
因此本網站可以直接透過瀏覽器開啟 `index.html` 執行，也可以透過 GitHub Pages 部署。

---

## 五、專案結構

```text
hw5_ml_top10_algorithms/
├── index.html
├── style.css
├── script.js
├── README.md
├── BUILD_LOG.md
└── .gitignore
```

檔案說明：

```text
index.html      網頁主結構
style.css       視覺設計、版面配置、響應式樣式
script.js       互動功能、演算法資料、測驗、AI 助教 demo
README.md       專案正式說明文件
BUILD_LOG.md    作業製作過程紀錄
.gitignore      Git 忽略規則
```

---

## 六、如何在本機執行

下載或 clone 專案後，直接開啟 `index.html` 即可。

```powershell
Invoke-Item .\index.html
```

或在檔案總管中直接雙擊 `index.html`。

---

## 七、GitHub Pages 部署方式

本專案使用 GitHub Pages 部署，設定方式如下：

1. 進入 GitHub Repository。
2. 點選 `Settings`。
3. 進入 `Pages`。
4. Source 選擇 `Deploy from a branch`。
5. Branch 選擇 `main`。
6. Folder 選擇 `/ root`。
7. 儲存後等待 GitHub Pages 建置完成。

部署完成後，即可透過 GitHub Pages 網址公開瀏覽網站。

---

## 八、AI 輔助開發說明

本專案使用 AI 工具輔助完成以下工作：

* 作業需求拆解
* 網頁架構規劃
* HTML / CSS / JavaScript 初版生成
* 互動功能設計
* AI 助教 demo 介面設計
* README 與 BUILD_LOG 文件整理
* GitHub 發佈流程確認
* 最終版面修正與品質檢查

透過 AI 輔助，本作業能以較少步驟完成具備互動性、展示性與文件紀錄的網頁作品。

---

## 九、安全性說明

本網站雖然包含 AI 助教介面，但目前版本並未連接任何真實 API。

安全設計如下：

* 未串接 Gemini、OpenAI 或其他 API。
* 未硬編碼任何 API Key。
* API Key 輸入框僅用於模擬產品介面。
* 不會將輸入內容送到外部伺服器。
* 不包含 `fetch` 或 `XMLHttpRequest` 等網路請求。
* AI 回覆為前端 JavaScript 中的 demo 關鍵字回應。

此設計可避免 API Key 外洩與不必要的資安風險。

---

## 十、學習反思

這次作業的重點不只是完成一個網頁，而是驗證如何透過 AI 工具快速完成一個具備展示價值的前端作品。

在過程中，我學習到：

1. 如何將作業需求轉換為明確的網頁功能。
2. 如何透過 AI 協助規劃版面、互動與文件。
3. 如何使用 Git 保存專案成果。
4. 如何透過 GitHub Pages 發佈靜態網站。
5. 如何在加入 AI 助手介面時，同時注意 API Key 與資安問題。
6. 如何將作品整理成可展示、可驗證、可回顧的 GitHub 專案。

---

## 十一、未來改進方向

未來若要繼續擴充此專案，可以加入：

* 真實 Gemini 或 OpenAI API 串接
* 更完整的演算法視覺化動畫
* 更多互動式測驗題目
* 學習進度儀表板
* 多語系切換
* RWD 細節優化
* 每個演算法的獨立詳細頁面
* 更完整的作品集首頁整合

---

## 十二、專案狀態

目前版本已完成：

* 機器學習 TOP 10 演算法內容整理
* 互動式演算法探索功能
* Demo AI 助教介面
* GitHub 專案保存
* GitHub Pages 網站部署
* README 與 BUILD_LOG 文件紀錄
