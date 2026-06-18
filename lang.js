// 언어 토글: 기본 KO, 선택을 localStorage에 기억. 브라우저가 한국어가 아니면 EN 기본.
(function () {
  function pick() {
    var saved = localStorage.getItem("fb_lang");
    if (saved === "ko" || saved === "en") return saved;
    var n = (navigator.language || "en").toLowerCase();
    return n.indexOf("ko") === 0 ? "ko" : "en";
  }
  function apply(lang) {
    document.documentElement.setAttribute("lang", lang === "ko" ? "ko" : "en");
    var blocks = document.querySelectorAll("[lang-block]");
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].classList.toggle("show", blocks[i].getAttribute("lang-block") === lang);
    }
    var btns = document.querySelectorAll(".langbtn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("active", btns[j].getAttribute("data-lang") === lang);
    }
    localStorage.setItem("fb_lang", lang);
  }
  window.setLang = function (l) { apply(l); };
  document.addEventListener("DOMContentLoaded", function () { apply(pick()); });
})();
