const algorithms = [
  {
    id: "linear-regression",
    zh: "線性迴歸",
    name: "Linear Regression",
    category: "Regression",
    difficulty: "入門",
    idea: "用一條最能貼近資料趨勢的直線，預測連續數值。",
    explanation: "線性迴歸假設輸入特徵和目標值之間存在近似線性關係。它會調整斜率與截距，讓預測值和真實值的誤差平方總和最小。適合用來理解模型訓練、損失函數與可解釋性。",
    formula: "y = wx + b，最小化 MSE = mean((y - y_hat)^2)",
    useCases: ["房價、銷售額、溫度等連續數值預測", "建立可解釋的基準模型", "觀察特徵和結果的線性趨勢"],
    pros: ["容易理解與解釋", "訓練速度快", "適合作為回歸問題 baseline"],
    cons: ["難以捕捉非線性關係", "容易受離群值影響", "需要注意特徵尺度與共線性"],
    code: "model = LinearRegression()\nmodel.fit(X_train, y_train)\nprediction = model.predict(X_test)",
    question: "如果資料呈現彎曲趨勢，單純線性迴歸可能遇到什麼問題？",
    slider: { label: "Slope 斜率", min: -3, max: 3, step: 0.1, value: 1.2 }
  },
  {
    id: "logistic-regression",
    zh: "邏輯斯迴歸",
    name: "Logistic Regression",
    category: "Classification",
    difficulty: "入門",
    idea: "把線性分數轉成機率，用來判斷資料屬於哪一類。",
    explanation: "雖然名字有迴歸，但邏輯斯迴歸主要用在分類。它透過 sigmoid 或 softmax 將模型輸出轉成機率，常用於二元分類，例如是否流失、是否通過、是否為垃圾郵件。",
    formula: "p = 1 / (1 + e^(-z))，z = wx + b",
    useCases: ["二元分類", "需要機率輸出的風險評估", "可解釋的分類 baseline"],
    pros: ["輸出機率直觀", "速度快、容易部署", "係數可解釋特徵方向"],
    cons: ["線性決策邊界限制", "特徵工程影響很大", "類別不平衡時需額外處理"],
    code: "model = LogisticRegression()\nmodel.fit(X_train, y_train)\nprob = model.predict_proba(X_test)",
    question: "為什麼 Logistic Regression 常被用作分類問題的第一個 baseline？",
    slider: { label: "Decision threshold", min: 0.1, max: 0.9, step: 0.05, value: 0.5 }
  },
  {
    id: "decision-tree",
    zh: "決策樹",
    name: "Decision Tree",
    category: "Classification",
    difficulty: "入門",
    idea: "用一連串 if-else 規則，把資料切成越來越純的群組。",
    explanation: "決策樹會根據特徵條件分裂節點，希望每次分裂後的資料更接近同一類或更容易預測。它像一張可讀的規則圖，很適合展示模型如何做判斷。",
    formula: "Information Gain、Gini Impurity、Tree Depth",
    useCases: ["需要可視化規則的分類任務", "資料型態混合的表格資料", "建立 Random Forest 的基礎概念"],
    pros: ["可解釋性高", "不太需要特徵標準化", "能處理非線性規則"],
    cons: ["深樹容易過擬合", "單棵樹不穩定", "小資料變動可能導致結構大改"],
    code: "model = DecisionTreeClassifier(max_depth=4)\nmodel.fit(X_train, y_train)\nlabel = model.predict(X_test)",
    question: "限制 max_depth 為什麼可以降低過擬合風險？",
    slider: { label: "Max depth", min: 1, max: 8, step: 1, value: 4 }
  },
  {
    id: "random-forest",
    zh: "隨機森林",
    name: "Random Forest",
    category: "Ensemble",
    difficulty: "中階",
    idea: "訓練很多棵不同的決策樹，再用投票或平均得到更穩定結果。",
    explanation: "隨機森林透過抽樣資料與抽樣特徵，建立多棵互相有差異的樹。多模型集成可以降低單棵決策樹過擬合與不穩定的問題，是表格資料中非常常見的強力 baseline。",
    formula: "Bagging + Feature Randomness + Majority Vote / Average",
    useCases: ["表格分類與回歸", "特徵重要性分析", "需要穩定 baseline 的資料競賽"],
    pros: ["準確率通常不錯", "比單棵樹穩定", "可估計特徵重要性"],
    cons: ["模型較大、推論較慢", "可解釋性低於單棵樹", "對高維稀疏資料不一定最佳"],
    code: "model = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\nlabel = model.predict(X_test)",
    question: "Random Forest 如何透過多棵樹降低 variance？",
    slider: { label: "Number of trees", min: 10, max: 200, step: 10, value: 100 }
  },
  {
    id: "svm",
    zh: "支援向量機",
    name: "Support Vector Machine",
    category: "Classification",
    difficulty: "進階",
    idea: "尋找能最大化類別間隔的決策邊界。",
    explanation: "SVM 會找出分隔資料的超平面，並盡量讓邊界到兩側關鍵樣本的距離最大。透過 kernel trick，它也能處理非線性分類，但參數選擇與資料尺度很重要。",
    formula: "Maximize margin；Kernel maps data to higher-dimensional space",
    useCases: ["中小型資料分類", "文字或影像特徵分類", "類別邊界清楚但不一定線性的任務"],
    pros: ["在高維資料上表現好", "margin 思想抗噪音", "kernel 彈性高"],
    cons: ["大型資料訓練成本高", "參數 C 與 kernel 需調整", "機率輸出不如 Logistic 直觀"],
    code: "model = SVC(kernel=\"rbf\", C=1.0)\nmodel.fit(X_train, y_train)\nlabel = model.predict(X_test)",
    question: "SVM 的 margin 越大，對模型泛化能力有什麼幫助？",
    slider: { label: "C regularization", min: 0.1, max: 5, step: 0.1, value: 1 }
  },
  {
    id: "knn",
    zh: "K 近鄰",
    name: "K-Nearest Neighbors",
    category: "Classification",
    difficulty: "入門",
    idea: "看最靠近的新朋友屬於哪一類，多數決決定答案。",
    explanation: "KNN 幾乎沒有訓練過程，而是在預測時找出距離最近的 K 個樣本。它直覺簡單，但很依賴距離定義、特徵尺度與資料量。",
    formula: "Distance metric + majority vote among K neighbors",
    useCases: ["小型資料分類", "推薦或相似案例查找", "解釋距離與特徵尺度的重要性"],
    pros: ["概念非常直觀", "不需要複雜訓練", "可自然處理多類別"],
    cons: ["預測時可能很慢", "特徵尺度影響大", "高維資料距離會變得不可靠"],
    code: "model = KNeighborsClassifier(n_neighbors=5)\nmodel.fit(X_train, y_train)\nlabel = model.predict(X_test)",
    question: "K 太小和 K 太大各自可能造成什麼問題？",
    slider: { label: "K neighbors", min: 1, max: 15, step: 2, value: 5 }
  },
  {
    id: "kmeans",
    zh: "K-Means 分群",
    name: "K-Means Clustering",
    category: "Clustering",
    difficulty: "中階",
    idea: "把資料分成 K 群，讓每個點靠近自己的群中心。",
    explanation: "K-Means 是非監督式學習，沒有標籤也能探索資料結構。演算法會反覆指派資料點到最近中心，再更新中心位置，直到群中心穩定。",
    formula: "Minimize within-cluster sum of squares",
    useCases: ["客群分群", "資料探索", "影像顏色量化"],
    pros: ["速度快、容易實作", "分群結果容易視覺化", "適合球狀群集"],
    cons: ["需要事先選 K", "受初始中心與離群值影響", "不適合形狀複雜的群集"],
    code: "model = KMeans(n_clusters=3, random_state=7)\nmodel.fit(X)\nclusters = model.labels_",
    question: "為什麼 K-Means 需要先決定 n_clusters？",
    slider: { label: "Cluster count", min: 2, max: 6, step: 1, value: 3 }
  },
  {
    id: "naive-bayes",
    zh: "樸素貝氏",
    name: "Naive Bayes",
    category: "Classification",
    difficulty: "中階",
    idea: "用機率推論類別，並假設特徵之間大致獨立。",
    explanation: "Naive Bayes 以貝氏定理計算在某些特徵出現時，各類別的可能性。雖然獨立假設很強，但在文字分類等任務中常常又快又有效。",
    formula: "P(y|x) ∝ P(y) × P(x1|y) × P(x2|y) ...",
    useCases: ["垃圾郵件偵測", "新聞主題分類", "文字情緒分類 baseline"],
    pros: ["訓練與預測都很快", "小資料也能運作", "適合文字詞頻特徵"],
    cons: ["特徵獨立假設不一定合理", "機率校準可能粗糙", "連續特徵需選分布假設"],
    code: "model = MultinomialNB(alpha=1.0)\nmodel.fit(X_train, y_train)\nlabel = model.predict(X_test)",
    question: "Naive Bayes 的 naive 指的是哪個假設？",
    slider: { label: "Smoothing alpha", min: 0.1, max: 2, step: 0.1, value: 1 }
  },
  {
    id: "gradient-boosting",
    zh: "梯度提升",
    name: "Gradient Boosting",
    category: "Ensemble",
    difficulty: "進階",
    idea: "一棵接一棵修正前面模型的錯誤，逐步提升預測能力。",
    explanation: "Gradient Boosting 會依序建立弱模型，每一步都朝著降低損失函數的方向補強。它常在表格資料上有很強表現，但需要控制 learning rate、樹深與迭代次數避免過擬合。",
    formula: "Additive models optimize loss by gradient steps",
    useCases: ["高準確率表格建模", "風險分數、排序與預測任務", "資料競賽與商業預測"],
    pros: ["表格資料表現強", "能捕捉複雜非線性", "可調參數多、彈性高"],
    cons: ["調參較費心", "訓練時間可能較長", "過擬合風險需控制"],
    code: "model = GradientBoostingClassifier(learning_rate=0.05)\nmodel.fit(X_train, y_train)\nlabel = model.predict(X_test)",
    question: "learning rate 太大時，Boosting 模型可能會怎樣？",
    slider: { label: "Learning rate", min: 0.01, max: 0.3, step: 0.01, value: 0.08 }
  },
  {
    id: "pca",
    zh: "主成分分析",
    name: "Principal Component Analysis",
    category: "Dimensionality Reduction",
    difficulty: "中階",
    idea: "找出資料變異最大的方向，用較少維度保留主要資訊。",
    explanation: "PCA 不是分類器，而是常用的降維方法。它會把原本可能很多欄位的資料轉換到新的主成分座標，讓資料更容易視覺化、壓縮或作為後續模型輸入。",
    formula: "Eigenvectors of covariance matrix；maximize explained variance",
    useCases: ["高維資料視覺化", "特徵壓縮", "降低噪音與加速模型訓練"],
    pros: ["能壓縮維度", "有助於視覺化", "可減少特徵冗餘"],
    cons: ["主成分不一定好解釋", "線性轉換限制", "需標準化特徵"],
    code: "pca = PCA(n_components=2)\nX_2d = pca.fit_transform(X_scaled)\nprint(pca.explained_variance_ratio_)",
    question: "PCA 的 explained variance ratio 可以幫助我們判斷什麼？",
    slider: { label: "Components", min: 1, max: 6, step: 1, value: 2 }
  }
];

const quizzes = [
  { q: "哪一個演算法主要用於連續數值預測？", options: ["Linear Regression", "K-Means", "Naive Bayes"], answer: 0, why: "Linear Regression 預測的是連續值，例如價格或溫度。" },
  { q: "K-Means 屬於哪一種學習方式？", options: ["監督式分類", "非監督式分群", "強化學習"], answer: 1, why: "K-Means 不需要標籤，目標是找出資料群集。" },
  { q: "哪個模型通常由多棵決策樹投票組成？", options: ["Random Forest", "PCA", "Logistic Regression"], answer: 0, why: "Random Forest 是 Bagging 思想下的多樹集成。" },
  { q: "PCA 最常見的用途是什麼？", options: ["降維與視覺化", "直接寄送 email", "產生 API key"], answer: 0, why: "PCA 找主成分，常用來壓縮高維資料。" },
  { q: "KNN 的 K 值代表什麼？", options: ["樹的深度", "鄰居數量", "學習率"], answer: 1, why: "KNN 預測時會參考最近的 K 個樣本。" }
];

let current = algorithms[0];
const viewed = new Set(JSON.parse(localStorage.getItem("viewedAlgorithms") || "[]"));
const learned = new Set(JSON.parse(localStorage.getItem("learnedAlgorithms") || "[]"));

const els = {
  nav: document.getElementById("algorithmNav"),
  search: document.getElementById("searchInput"),
  category: document.getElementById("categoryFilter"),
  difficulty: document.getElementById("difficultyFilter"),
  zh: document.getElementById("algoChinese"),
  name: document.getElementById("algoName"),
  tag: document.getElementById("algoCategory"),
  diff: document.getElementById("algoDifficulty"),
  idea: document.getElementById("algoIdea"),
  explanation: document.getElementById("algoExplanation"),
  formula: document.getElementById("algoFormula"),
  useCases: document.getElementById("algoUseCases"),
  pros: document.getElementById("algoPros"),
  cons: document.getElementById("algoCons"),
  code: document.getElementById("algoCode"),
  question: document.getElementById("algoQuestion"),
  copy: document.getElementById("copyCode"),
  copyStatus: document.getElementById("copyStatus"),
  learn: document.getElementById("learnButton"),
  slider: document.getElementById("parameterSlider"),
  sliderLabel: document.getElementById("sliderLabel"),
  sliderValue: document.getElementById("sliderValue"),
  sandboxNote: document.getElementById("sandboxNote"),
  canvas: document.getElementById("demoCanvas"),
  viewedCount: document.getElementById("viewedCount"),
  viewProgress: document.getElementById("viewProgress"),
  comparison: document.getElementById("comparisonBody"),
  quizList: document.getElementById("quizList"),
  submitQuiz: document.getElementById("submitQuiz"),
  quizResult: document.getElementById("quizResult"),
  prosCard: document.getElementById("prosCard"),
  consCard: document.getElementById("consCard"),
  apiKey: document.getElementById("apiKeyInput"),
  saveKey: document.getElementById("saveKey"),
  chatLog: document.getElementById("chatLog"),
  chatInput: document.getElementById("chatInput"),
  sendChat: document.getElementById("sendChat")
};

function list(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderNav() {
  const keyword = els.search.value.trim().toLowerCase();
  const category = els.category.value;
  const difficulty = els.difficulty.value;
  const filtered = algorithms.filter((algo) => {
    const text = `${algo.zh} ${algo.name} ${algo.category} ${algo.difficulty} ${algo.idea}`.toLowerCase();
    return (!keyword || text.includes(keyword)) &&
      (category === "all" || algo.category === category) &&
      (difficulty === "all" || algo.difficulty === difficulty);
  });

  els.nav.innerHTML = filtered.map((algo) => `
    <button class="nav-item ${algo.id === current.id ? "active" : ""}" data-id="${algo.id}" type="button">
      <strong>${algo.zh}</strong>
      <span>${algo.name}</span>
    </button>
  `).join("") || `<p class="explanation">沒有符合條件的演算法。</p>`;

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => selectAlgorithm(button.dataset.id));
  });
}

function selectAlgorithm(id) {
  current = algorithms.find((algo) => algo.id === id) || algorithms[0];
  viewed.add(current.id);
  localStorage.setItem("viewedAlgorithms", JSON.stringify([...viewed]));
  renderAlgorithm();
  renderNav();
  updateProgress();
}

function renderAlgorithm() {
  els.zh.textContent = current.zh;
  els.name.textContent = current.name;
  els.tag.textContent = current.category;
  els.diff.textContent = current.difficulty;
  els.idea.textContent = current.idea;
  els.explanation.textContent = current.explanation;
  els.formula.textContent = current.formula;
  els.useCases.innerHTML = list(current.useCases);
  els.pros.innerHTML = list(current.pros);
  els.cons.innerHTML = list(current.cons);
  els.code.textContent = current.code;
  els.question.textContent = current.question;

  els.learn.classList.toggle("learned", learned.has(current.id));
  els.learn.textContent = learned.has(current.id) ? "已學會" : "標記已學會";
  configureSlider();
  pulseCards();
}

function configureSlider() {
  const slider = current.slider;
  els.sliderLabel.textContent = slider.label;
  els.slider.min = slider.min;
  els.slider.max = slider.max;
  els.slider.step = slider.step;
  els.slider.value = slider.value;
  updateSandbox();
}

function pulseCards() {
  els.prosCard.classList.remove("pulse");
  els.consCard.classList.remove("pulse");
  window.setTimeout(() => {
    els.prosCard.classList.add("pulse");
    els.consCard.classList.add("pulse");
  }, 20);
  window.setTimeout(() => {
    els.prosCard.classList.remove("pulse");
    els.consCard.classList.remove("pulse");
  }, 700);
}

function updateProgress() {
  els.viewedCount.textContent = `${viewed.size}/10`;
  els.viewProgress.style.width = `${(viewed.size / algorithms.length) * 100}%`;
}

function updateSandbox() {
  const value = Number(els.slider.value);
  els.sliderValue.textContent = `${els.sliderLabel.textContent}: ${value}`;
  const notes = {
    "linear-regression": `斜率 ${value} 會改變線的傾斜程度；斜率越大，x 增加時預測 y 上升越快。`,
    "logistic-regression": `門檻 ${value.toFixed(2)} 會影響模型判成正類的嚴格程度；門檻越高，正類越保守。`,
    "decision-tree": `深度 ${value} 讓樹能切出更多規則，但太深可能把訓練資料記得過細。`,
    "random-forest": `${value} 棵樹通常比少量樹更穩定，但模型大小與推論成本也會增加。`,
    "svm": `C=${value.toFixed(1)} 控制錯分懲罰；較大時會更努力貼合訓練資料。`,
    "knn": `K=${value} 代表參考 ${value} 個鄰居；小 K 靈敏，大 K 平滑。`,
    "kmeans": `${value} 群會讓資料被切成 ${value} 個中心附近的群組。`,
    "naive-bayes": `alpha=${value.toFixed(1)} 可避免沒出現過的詞讓機率變成 0。`,
    "gradient-boosting": `learning rate=${value.toFixed(2)} 越小通常越穩，但需要更多迭代。`,
    "pca": `${value} 個主成分代表用 ${value} 個新軸保留主要變異。`
  };
  els.sandboxNote.textContent = notes[current.id];
  drawDemo(value);
}

function drawDemo(value) {
  const ctx = els.canvas.getContext("2d");
  const w = els.canvas.width;
  const h = els.canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#071018";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(148,163,184,0.18)";
  ctx.lineWidth = 1;
  for (let x = 20; x < w; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 20; y < h; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  if (current.id === "linear-regression") {
    drawPoints(ctx, [[60,170],[110,155],[165,135],[220,115],[290,85],[350,72]], "#53f3b5");
    ctx.strokeStyle = "#46d9ff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(40, 125 - value * -45);
    ctx.lineTo(380, 125 - value * 45);
    ctx.stroke();
    return;
  }

  if (current.id === "kmeans") {
    const centers = [[90,80], [230,72], [320,170], [135,190], [280,128], [190,140]];
    centers.slice(0, value).forEach((center, index) => {
      const color = ["#46d9ff", "#53f3b5", "#ff5ea8", "#ffd166", "#9b8cff", "#ff9f6e"][index];
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(center[0], center[1], 12, 0, Math.PI * 2);
      ctx.fill();
      drawCluster(ctx, center[0], center[1], color, index);
    });
    return;
  }

  if (current.id === "decision-tree") {
    drawTree(ctx, value);
    return;
  }

  if (current.id === "knn") {
    drawPoints(ctx, [[95,75],[120,100],[150,70],[290,165],[318,190],[260,185]], "#9facbf");
    ctx.strokeStyle = "#46d9ff";
    ctx.beginPath();
    ctx.arc(210, 125, 35 + value * 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#ff5ea8";
    ctx.beginPath();
    ctx.arc(210, 125, 8, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  drawGenericMeter(ctx, value);
}

function drawPoints(ctx, points, color) {
  ctx.fillStyle = color;
  points.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawCluster(ctx, cx, cy, color, seed) {
  ctx.fillStyle = color;
  for (let i = 0; i < 8; i += 1) {
    const angle = (i * 1.7 + seed) % 6.28;
    const radius = 16 + ((i * 9 + seed * 7) % 30);
    ctx.globalAlpha = 0.64;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, 5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawTree(ctx, depth) {
  ctx.strokeStyle = "#46d9ff";
  ctx.fillStyle = "#53f3b5";
  ctx.lineWidth = 2;
  const levels = Math.min(depth, 5);
  let nodes = [{ x: 210, y: 30, spread: 150 }];
  for (let level = 0; level < levels; level += 1) {
    const next = [];
    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
      ctx.fill();
      if (level < levels - 1) {
        [-1, 1].forEach((side) => {
          const child = { x: node.x + side * node.spread / 2, y: node.y + 42, spread: node.spread / 1.75 };
          ctx.beginPath();
          ctx.moveTo(node.x, node.y + 8);
          ctx.lineTo(child.x, child.y - 8);
          ctx.stroke();
          next.push(child);
        });
      }
    });
    nodes = next;
  }
}

function drawGenericMeter(ctx, value) {
  const percent = (value - Number(els.slider.min)) / (Number(els.slider.max) - Number(els.slider.min));
  ctx.fillStyle = "rgba(70,217,255,0.12)";
  ctx.fillRect(60, 110, 300, 34);
  ctx.fillStyle = "#46d9ff";
  ctx.fillRect(60, 110, 300 * percent, 34);
  ctx.fillStyle = "#eef4ff";
  ctx.font = "18px sans-serif";
  ctx.fillText(current.name, 70, 95);
  ctx.fillText(`${Math.round(percent * 100)}% demo intensity`, 70, 170);
}

function renderComparison() {
  const meta = {
    "Linear Regression": ["高", "快", "小到中", "連續值預測"],
    "Logistic Regression": ["高", "快", "小到大", "二元分類機率"],
    "Decision Tree": ["高", "快", "小到中", "規則式判斷"],
    "Random Forest": ["中", "中", "中到大", "穩定表格模型"],
    "Support Vector Machine": ["中", "中慢", "小到中", "高維分類"],
    "K-Nearest Neighbors": ["中", "預測慢", "小", "相似案例分類"],
    "K-Means Clustering": ["中", "快", "中到大", "資料分群"],
    "Naive Bayes": ["中高", "很快", "小到大", "文字分類"],
    "Gradient Boosting": ["中低", "中慢", "中到大", "高準確表格任務"],
    "Principal Component Analysis": ["中", "快", "中到大", "降維視覺化"]
  };
  els.comparison.innerHTML = algorithms.map((algo) => {
    const [interpretability, speed, size, use] = meta[algo.name];
    return `<tr><td>${algo.name}</td><td>${algo.category}</td><td>${interpretability}</td><td>${speed}</td><td>${size}</td><td>${use}</td></tr>`;
  }).join("");
}

function renderQuiz() {
  els.quizList.innerHTML = quizzes.map((quiz, index) => `
    <section class="quiz-card">
      <strong>${index + 1}. ${quiz.q}</strong>
      <div class="quiz-options">
        ${quiz.options.map((option, optionIndex) => `
          <label><input type="radio" name="quiz-${index}" value="${optionIndex}">${option}</label>
        `).join("")}
      </div>
      <p class="quiz-feedback" id="feedback-${index}"></p>
    </section>
  `).join("");
}

function gradeQuiz() {
  let score = 0;
  quizzes.forEach((quiz, index) => {
    const picked = document.querySelector(`input[name="quiz-${index}"]:checked`);
    const feedback = document.getElementById(`feedback-${index}`);
    if (picked && Number(picked.value) === quiz.answer) {
      score += 1;
      feedback.textContent = `答對：${quiz.why}`;
      feedback.style.color = "#53f3b5";
    } else {
      feedback.textContent = `再想想：${quiz.why}`;
      feedback.style.color = "#ffd166";
    }
  });
  els.quizResult.textContent = `你的得分：${score}/${quizzes.length}`;
}

function copyCode() {
  navigator.clipboard.writeText(current.code).then(() => {
    els.copyStatus.textContent = "已複製程式片段。";
  }).catch(() => {
    els.copyStatus.textContent = "瀏覽器未允許複製，請手動選取程式碼。";
  });
}

function toggleLearned() {
  if (learned.has(current.id)) {
    learned.delete(current.id);
  } else {
    learned.add(current.id);
  }
  localStorage.setItem("learnedAlgorithms", JSON.stringify([...learned]));
  renderAlgorithm();
}

function saveDemoKey() {
  if (els.apiKey.value.trim()) {
    localStorage.setItem("demoApiKeySaved", "masked-demo-key");
    els.apiKey.value = "";
    addMessage("bot", "已儲存示範狀態：demo key masked。這個頁面不會呼叫任何真實 API。");
  } else {
    addMessage("bot", "請輸入任意示範文字；系統只會保存 masked demo state。");
  }
}

function addMessage(role, text) {
  const node = document.createElement("div");
  node.className = `message ${role}`;
  node.textContent = text;
  els.chatLog.appendChild(node);
  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function demoReply(text) {
  const lower = text.toLowerCase();
  if (lower.includes("regression") || text.includes("迴歸")) {
    return "回歸適合預測連續數值，例如房價、溫度或銷售額。可以先用 Linear Regression 建立基準模型，再觀察誤差、離群值與是否需要更複雜的非線性方法。";
  }
  if (lower.includes("classification") || text.includes("分類")) {
    return "分類是在預測資料屬於哪一個類別，例如通過或不通過、垃圾信或正常信。可以先看標籤是否平衡，再從 Logistic Regression、Decision Tree 或 Naive Bayes 這類容易理解的模型開始。";
  }
  if (lower.includes("clustering") || lower.includes("k-means") || text.includes("分群")) {
    return "分群屬於非監督式學習，重點不是預測標籤，而是找出資料中自然形成的群組。K-Means 常用來做客群分群，但要注意 K 值選擇、特徵尺度與群集形狀。";
  }
  if (lower.includes("which algorithm") || text.includes("怎麼選") || text.includes("如何選") || text.includes("哪個")) {
    return "選演算法時先判斷任務：預測連續數值用回歸，預測類別用分類，沒有標籤想找結構用分群，資料維度太高可考慮 PCA。接著再比較資料量、速度、準確率與可解釋性。";
  }
  return "建議先從簡單、可解釋的模型開始，確認資料型態與任務目標後，再用比較矩陣挑選更合適的演算法。這個助教是 demo-only，不會連接真實 API。";
}

function sendChat() {
  const text = els.chatInput.value.trim();
  if (!text) return;
  addMessage("user", text);
  els.chatInput.value = "";
  window.setTimeout(() => addMessage("bot", demoReply(text)), 220);
}

function init() {
  viewed.add(current.id);
  localStorage.setItem("viewedAlgorithms", JSON.stringify([...viewed]));
  renderNav();
  renderAlgorithm();
  updateProgress();
  renderComparison();
  renderQuiz();
  addMessage("bot", "你好，我是 demo AI 學習助理。可以問我迴歸、分類、分群或如何選演算法。");

  [els.search, els.category, els.difficulty].forEach((input) => input.addEventListener("input", renderNav));
  els.slider.addEventListener("input", updateSandbox);
  els.copy.addEventListener("click", copyCode);
  els.learn.addEventListener("click", toggleLearned);
  els.submitQuiz.addEventListener("click", gradeQuiz);
  els.saveKey.addEventListener("click", saveDemoKey);
  els.sendChat.addEventListener("click", sendChat);
  els.chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendChat();
  });
  document.querySelectorAll(".prompt-chips button").forEach((button) => {
    button.addEventListener("click", () => {
      els.chatInput.value = button.textContent;
      sendChat();
    });
  });
}

init();
