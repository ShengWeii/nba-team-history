# NBA 球隊史｜三分鐘認識一支球隊

用繁體中文介紹 NBA 各球隊歷史的網站。每支球隊一頁，固定包含：基本資料、隊史時間軸、代表球星、經典時刻、冠軍年份、參考資料。

**網站：** https://shengweii.github.io/nba-team-history/

## 這個專案的重點：CLAUDE.md

這是政大「生成式 AI」課程的作業。重點不是只做一個網頁，而是先寫一份給 AI 閱讀的規則文件 [`CLAUDE.md`](CLAUDE.md)，讓 AI 之後可以照同一套方式持續新增球隊。

`CLAUDE.md` 規定了：

- 專案目的與目標讀者
- 技術限制（純 HTML/CSS/JS、相對路徑）
- 檔案結構與命名規則
- 網站風格（深色運動風、代表色只寫在資料檔）
- 每個球隊頁面固定的 6 個區塊與數量要求
- 資料正確性規則（必須查證、不可編造）
- 新增球隊的步驟與完成前檢查清單

## 如何新增一支球隊

在專案資料夾開啟 Claude Code，輸入：

```
新增芝加哥公牛
```

AI 會讀取 `CLAUDE.md`，自動完成：複製模板 → 填入查證過的內容 → 在 `data/teams.js` 登記 → 更新已完成清單。首頁卡片與「其他球隊」導覽會自動出現新球隊。

## 檔案結構

```
├── CLAUDE.md          專案規則（給 AI 看）
├── index.html         首頁
├── teams/             各球隊頁面（_template.html 為模板）
├── assets/css/        樣式
├── assets/js/         共用程式
└── data/teams.js      球隊清單（唯一資料來源）
```

## 本機預覽

直接雙擊 `index.html`，或執行：

```bash
python3 -m http.server 8000
```

再打開 http://localhost:8000

---

本站為非官方粉絲介紹網站，與 NBA 及各球隊無關。
