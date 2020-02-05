if (process.browser) {
  (function(t, e, s, o) {
    var n, a, c;
    (t.SMCX = t.SMCX || []),
      e.getElementById(o) ||
        ((n = e.getElementsByTagName(s)),
        (a = n[n.length - 1]),
        (c = e.createElement(s)),
        (c.type = "text/javascript"),
        (c.async = !0),
        (c.id = o),
        (c.src = [
          "https:" === location.protocol ? "https://" : "http://",
          "widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd4uqm43QqM49Fa_2FyKnJSgKs7azUGXdtAhR4UEuYSb0wf.js"
        ].join("")),
        a.parentNode.insertBefore(c, a));
  })(window, document, "script", "smcx-sdk");
}
