if (process.browser) {
  /*	cloudflare-badge	52fae43	CloudflareJS is now only used for our badge, if you're seeing this inserted elsewhere please read https://support.cloudflare.com/hc/en-us/articles/115003155971	*/
  !(function() {
    "use strict";
    function e() {
      try {
        console.warn(r);
      } catch (e) {}
    }
    function t() {
      for (
        var e = function(e) {
            var t = e.getAttribute("data-cfbadgetype"),
              i = a[t];
            if (!i) return "continue";
            var r = (function(e, t, n) {
              var i = "blue";
              n.layout ? ((i = t || i), (t = n.skin)) : (t = t || "gray");
              var r =
                  "https://www.cloudflare.com/static/media/images/web-badges/badges-" +
                  t +
                  ".png",
                a = n.metrics,
                o = n.layout,
                s = n.dynamic,
                c = o ? a[2] * (o[i] || o.icon) : a[0],
                d = a[1],
                u = a[2],
                l = a[3];
              return {
                x: c,
                y: d,
                width: u,
                height: l,
                skinURL: r,
                dynamic: s,
                type: e,
                skin: t
              };
            })(t, e.getAttribute("data-cfbadgeskin"), i);
            r.dynamic
              ? (function(e) {
                  if ("string" == typeof u) return void setTimeout(e, 0, u);
                  u === s &&
                    ((u = c),
                    (function(e) {
                      try {
                        var t = new XMLHttpRequest();
                        t.open("HEAD", window.location.href),
                          (t.onreadystatechange = function() {
                            if (t.readyState === o) {
                              var n = t.getResponseHeader("server"),
                                i =
                                  null == n
                                    ? "unknown"
                                    : /^cloudflare/i.test(n)
                                    ? "active"
                                    : "inactive";
                              e(i);
                            }
                          }),
                          (t.onerror = function() {
                            e("unknown");
                          }),
                          t.send();
                      } catch (n) {
                        setTimeout(e, 0, "unknown");
                      }
                    })(function(e) {
                      u = e;
                      for (var t = 0, n = d; t < n.length; t++) {
                        (0, n[t])(u);
                      }
                    }));
                  d.push(e);
                })(function(t) {
                  return n(e, r, t);
                })
              : n(e, r, "unknown"),
              e.removeAttribute("data-cfbadgetype"),
              e.removeAttribute("data-cfbadgeskin");
          },
          t = 0,
          i = [].slice.call(document.getElementsByTagName("script"));
        t < i.length;
        t++
      ) {
        e(i[t]);
      }
    }
    function n(e, t, n) {
      var i = document.createElement("div"),
        r = document.createElement("a"),
        a = t.dynamic && "active" === n;
      "b" === t.type && "gray" === t.skin && (a = !a),
        i.setAttribute(
          "class",
          "cloudflare-badge cloudflare-badge-type-" +
            t.type +
            " cloudflare-badge-skin-" +
            t.skin
        );
      var o = t.x,
        s = t.y,
        c = t.width,
        d = t.height,
        u = a ? o + c : o;
      i.setAttribute(
        "style",
        "display:block; position:relative; width:" +
          c +
          "px; height:" +
          d +
          "px;background:transparent url(" +
          t.skinURL +
          ") no-repeat -" +
          u +
          "px -" +
          s +
          "px;"
      ),
        i.appendChild(r),
        r.setAttribute("href", "//www.cloudflare.com"),
        r.setAttribute("target", "_blank"),
        r.setAttribute(
          "style",
          "display:block;position:absolute;width:100%;height:100%;margin:0;padding:0;top:0;left:0;border:0;font-size:0;color:transparent;line-height:0;cursor:pointer;"
        ),
        e.parentNode && e.parentNode.insertBefore(i, e);
    }
    var i = ["dkgray", "gray", "blue", "dkblue"],
      r =
        "CloudflareJS has been deprecated, and we no longer insert it into fresh pages. Please read https://support.cloudflare.com/hc/en-us/articles/115003155971 to determine why it is still being loaded.",
      a = {
        a: { dynamic: !0, skin: "dkgray", skins: i, metrics: [0, 0, 241, 52] },
        b: { dynamic: !0, skin: "dkgray", skins: i, metrics: [0, 52, 249, 53] },
        c: {
          dynamic: !0,
          skin: "dkgray",
          skins: i,
          metrics: [0, 105, 270, 50]
        },
        d: {
          dynamic: !0,
          skin: "dkgray",
          skins: i,
          metrics: [0, 155, 270, 50]
        },
        e: { metrics: [571, 0, 122, 216], skin: "dkgray", skins: i },
        f: {
          metrics: [0, 0, 80, 15],
          skin: "small",
          skins: ["icon", "orange", "blue", "logo"],
          layout: { icon: 0, orange: 1, blue: 2, logo: 3 }
        },
        g: { metrics: [482, 0, 89, 31], skin: "dkgray", skins: i }
      };
    window.CloudFlare = {
      push: function(t) {
        return (
          (function(e) {
            return !(
              "function" == typeof e &&
              -1 !== e.toString().indexOf("cloudflare/badge")
            );
          })(t) && e(),
          1
        );
      },
      define: e,
      require: e,
      block: e
    };
    var o = 4,
      s = null,
      c = 1,
      d = [],
      u = s;
    t(), window.addEventListener("onload", t);
  })();
}
