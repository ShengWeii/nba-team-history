/*
 * 球隊清單：全站唯一的資料來源。
 * 首頁卡片、球隊代表色、「其他球隊」導覽都由這裡自動產生。
 * 新增球隊時，在陣列最後面加一筆，欄位格式照下面的資料（規則見 CLAUDE.md 第 8 節）。
 *
 * id            英文小寫隊名，必須與 teams/<id>.html 檔名一致
 * nameZh        中文全名（城市＋隊名）
 * nameEn        英文全名
 * conference    "東區" 或 "西區"
 * division      分組
 * founded       成立年份（數字）
 * championships 總冠軍數（數字），必須與頁面「冠軍年份」區塊一致
 * tagline       一句話標語，20 字內
 * colors        primary：主色（hero 背景、卡片色條）；secondary：重點色（數字、強調）
 */
window.TEAMS = [
  {
    id: "lakers",
    nameZh: "洛杉磯湖人",
    nameEn: "Los Angeles Lakers",
    conference: "西區",
    division: "太平洋組",
    founded: 1947,
    championships: 17,
    tagline: "紫金王朝，巨星輩出的好萊塢球隊",
    colors: { primary: "#552583", secondary: "#FDB927" }
  },
  {
    id: "celtics",
    nameZh: "波士頓塞爾提克",
    nameEn: "Boston Celtics",
    conference: "東區",
    division: "大西洋組",
    founded: 1946,
    championships: 18,
    tagline: "綠衫軍，NBA 冠軍數最多的球隊",
    colors: { primary: "#007A33", secondary: "#BA9653" }
  },
  {
    id: "warriors",
    nameZh: "金州勇士",
    nameEn: "Golden State Warriors",
    conference: "西區",
    division: "太平洋組",
    founded: 1946,
    championships: 7,
    tagline: "從費城到灣區，三分球改變了籃球",
    colors: { primary: "#1D428A", secondary: "#FFC72C" }
  },
  {
    id: "bulls",
    nameZh: "芝加哥公牛",
    nameEn: "Chicago Bulls",
    conference: "東區",
    division: "中央組",
    founded: 1966,
    championships: 6,
    tagline: "兩度三連霸，喬丹打造的紅色王朝",
    colors: { primary: "#CE1141", secondary: "#FFFFFF" }
  }
];
