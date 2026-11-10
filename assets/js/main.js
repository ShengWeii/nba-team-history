/*
 * 全站共用程式，讀取 data/teams.js 的 window.TEAMS：
 * 1. 首頁：在 [data-team-grid] 依東區／西區產生球隊卡片
 * 2. 球隊頁：依 <body data-team="id"> 套用代表色，並在 [data-team-nav] 產生「其他球隊」導覽
 * 3. 首頁統計數字：[data-stat="teams"] 已收錄球隊數、[data-stat="titles"] 冠軍總數
 * 新增球隊不需要修改這個檔案。
 */
(function () {
  var teams = window.TEAMS || [];
  var body = document.body;
  var root = document.documentElement;
  var CONFERENCES = ["東區", "西區"];

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function teamCard(team, href) {
    var card = el("a", "team-card");
    card.href = href;
    card.style.setProperty("--team-primary", team.colors.primary);
    card.style.setProperty("--team-secondary", team.colors.secondary);

    card.appendChild(el("span", "team-card-bar"));
    var info = el("div", "team-card-body");
    info.appendChild(el("p", "team-card-division", team.division));
    info.appendChild(el("h3", "team-card-name", team.nameZh));
    info.appendChild(el("p", "team-card-en", team.nameEn));
    info.appendChild(el("p", "team-card-tagline", team.tagline));

    var meta = el("div", "team-card-meta");
    var founded = el("span");
    founded.appendChild(el("strong", "", String(team.founded)));
    founded.appendChild(document.createTextNode(" 成立"));
    var titles = el("span");
    titles.appendChild(el("strong", "", String(team.championships)));
    titles.appendChild(document.createTextNode(" 座冠軍"));
    meta.appendChild(founded);
    meta.appendChild(titles);
    info.appendChild(meta);

    card.appendChild(info);
    return card;
  }

  // 1. 首頁球隊卡片
  var grid = document.querySelector("[data-team-grid]");
  if (grid) {
    CONFERENCES.forEach(function (conf) {
      var list = teams.filter(function (t) { return t.conference === conf; });
      var group = el("section", "conference");
      var heading = el("h2", "conference-title", conf);
      heading.appendChild(el("span", "conference-count", list.length + " 隊"));
      group.appendChild(heading);

      if (list.length === 0) {
        group.appendChild(el("p", "empty", "尚未收錄球隊"));
      } else {
        var cards = el("div", "team-grid");
        list.forEach(function (t) { cards.appendChild(teamCard(t, "teams/" + t.id + ".html")); });
        group.appendChild(cards);
      }
      grid.appendChild(group);
    });
  }

  // 首頁統計數字
  var statTeams = document.querySelector('[data-stat="teams"]');
  if (statTeams) statTeams.textContent = teams.length;
  var statTitles = document.querySelector('[data-stat="titles"]');
  if (statTitles) {
    statTitles.textContent = teams.reduce(function (sum, t) { return sum + t.championships; }, 0);
  }

  // 2. 球隊頁：代表色與其他球隊導覽
  var teamId = body.getAttribute("data-team");
  if (teamId) {
    var current = teams.filter(function (t) { return t.id === teamId; })[0];
    if (current) {
      root.style.setProperty("--team-primary", current.colors.primary);
      root.style.setProperty("--team-secondary", current.colors.secondary);
    }

    var nav = document.querySelector("[data-team-nav]");
    if (nav) {
      var others = teams.filter(function (t) { return t.id !== teamId; });
      if (others.length === 0) {
        nav.appendChild(el("p", "empty", "目前只收錄這一支球隊"));
      } else {
        var navGrid = el("div", "team-grid team-grid-compact");
        others.forEach(function (t) { navGrid.appendChild(teamCard(t, t.id + ".html")); });
        nav.appendChild(navGrid);
      }
    }
  }
})();
