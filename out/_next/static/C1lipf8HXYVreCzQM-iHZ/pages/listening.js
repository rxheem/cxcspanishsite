(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    "7W2i": function(e, t, n) {
      var r = n("SksO");
      e.exports = function(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && r(e, t);
      };
    },
    A3CJ: function(e, t, n) {
      e.exports = (function(e, t, n, r, s, i, o, l, a, p) {
        "use strict";
        function d(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function c(e) {
          for (var t, n = 1; n < arguments.length; n++)
            (t = null == arguments[n] ? {} : arguments[n]),
              n % 2
                ? d(Object(t), !0).forEach(function(n) {
                    l(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : d(Object(t)).forEach(function(n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(t, n)
                    );
                  });
          return e;
        }
        (e = e && e.hasOwnProperty("default") ? e.default : e),
          (t = t && t.hasOwnProperty("default") ? t.default : t),
          (n = n && n.hasOwnProperty("default") ? n.default : n),
          (r = r && r.hasOwnProperty("default") ? r.default : r),
          (s = s && s.hasOwnProperty("default") ? s.default : s),
          (i = i && i.hasOwnProperty("default") ? i.default : i),
          (o = o && o.hasOwnProperty("default") ? o.default : o),
          (l = l && l.hasOwnProperty("default") ? l.default : l);
        var u = "default" in a ? a.default : a,
          f = {},
          g =
            (p.node,
            p.node,
            p.bool,
            p.string,
            p.oneOfType([p.string, p.array]),
            p.func,
            p.func,
            p.func,
            (function(a) {
              function p(e) {
                var n;
                t(this, p),
                  (n = r(this, s(p).call(this, e))),
                  l(i(n), "srcToArray", function(e) {
                    return (Array.isArray(e) ? e : [e]).filter(function(e) {
                      return e;
                    });
                  }),
                  l(i(n), "onLoad", function() {
                    (f[n.sourceList[n.state.currentIndex]] = !0),
                      n.i && n.setState({ isLoaded: !0 });
                  }),
                  l(i(n), "onError", function() {
                    if (((f[n.sourceList[n.state.currentIndex]] = !1), !n.i))
                      return !1;
                    for (
                      var e, t = n.state.currentIndex + 1;
                      t < n.sourceList.length;
                      t++
                    ) {
                      if (!((e = n.sourceList[t]) in f)) {
                        n.setState({ currentIndex: t });
                        break;
                      }
                      if (!0 === f[e])
                        return (
                          n.setState({
                            currentIndex: t,
                            isLoading: !1,
                            isLoaded: !0
                          }),
                          !0
                        );
                      f[e];
                    }
                    return t === n.sourceList.length
                      ? n.setState({ isLoading: !1 })
                      : void n.loadImg();
                  }),
                  l(i(n), "loadImg", function() {
                    (n.i = new Image()),
                      (n.i.src = n.sourceList[n.state.currentIndex]),
                      n.props.crossorigin &&
                        (n.i.crossOrigin = n.props.crossorigin),
                      n.props.decode && n.i.decode
                        ? n.i
                            .decode()
                            .then(n.onLoad)
                            .catch(n.onError)
                        : ((n.i.onload = n.onLoad), (n.i.onerror = n.onError));
                  }),
                  l(i(n), "unloadImg", function() {
                    (n.i.onerror = null), (n.i.onload = null), (n.i.src = "");
                    try {
                      delete n.i.src;
                    } catch (e) {}
                    delete n.i;
                  }),
                  (n.loaderContainer = e.loaderContainer || e.container),
                  (n.unloaderContainer = e.unloaderContainer || e.container),
                  (n.sourceList = n.srcToArray(n.props.src));
                for (
                  var o = 0;
                  o < n.sourceList.length && n.sourceList[o] in f;
                  o++
                )
                  if (!0 === f[n.sourceList[o]])
                    return (
                      (n.state = {
                        currentIndex: o,
                        isLoading: !1,
                        isLoaded: !0
                      }),
                      r(n)
                    );
                return (
                  (n.state = n.sourceList.length
                    ? { currentIndex: 0, isLoading: !0, isLoaded: !1 }
                    : { isLoading: !1, isLoaded: !1 }),
                  n
                );
              }
              return (
                o(p, a),
                n(p, [
                  {
                    key: "componentDidMount",
                    value: function() {
                      this.state.isLoading && this.loadImg();
                    }
                  },
                  {
                    key: "componentWillUnmount",
                    value: function() {
                      this.i && this.unloadImg();
                    }
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                      var t = this;
                      (this.loaderContainer = e.loaderContainer || e.container),
                        (this.unloaderContainer =
                          e.unloaderContainer || e.container);
                      var n = this.srcToArray(e.src),
                        r = n.filter(function(e) {
                          return -1 === t.sourceList.indexOf(e);
                        }),
                        s = this.sourceList.filter(function(e) {
                          return -1 === n.indexOf(e);
                        });
                      if (r.length || s.length) {
                        if (((this.sourceList = n), !n.length))
                          return this.setState({ isLoading: !1, isLoaded: !1 });
                        this.setState(
                          { currentIndex: 0, isLoading: !0, isLoaded: !1 },
                          this.loadImg
                        );
                      }
                    }
                  },
                  {
                    key: "render",
                    value: function() {
                      var t = this.props,
                        n = t.container,
                        r = t.loader,
                        s = t.unloader,
                        i =
                          (t.src,
                          t.decode,
                          t.loaderContainer,
                          t.unloaderContainer,
                          t.mockImage,
                          e(t, [
                            "container",
                            "loader",
                            "unloader",
                            "src",
                            "decode",
                            "loaderContainer",
                            "unloaderContainer",
                            "mockImage"
                          ]));
                      if (this.state.isLoaded) {
                        var o = c(
                          {},
                          { src: this.sourceList[this.state.currentIndex] },
                          {},
                          i
                        );
                        return n(u.createElement("img", o));
                      }
                      return !this.state.isLoaded && this.state.isLoading
                        ? r
                          ? this.loaderContainer(r)
                          : null
                        : this.state.isLoaded || this.state.isLoading
                        ? void 0
                        : s
                        ? this.unloaderContainer(s)
                        : null;
                    }
                  }
                ]),
                p
              );
            })(a.Component));
        return (
          l(g, "defaultProps", {
            loader: !1,
            unloader: !1,
            decode: !0,
            src: [],
            container: function(e) {
              return e;
            }
          }),
          (g.propTypes = {}),
          g
        );
      })(
        n("QILm"),
        n("lwsE"),
        n("W8MJ"),
        n("a1gu"),
        n("Nsbk"),
        n("PJYZ"),
        n("7W2i"),
        n("lSNA"),
        n("q1tI"),
        n("17x9")
      );
    },
    FO93: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("q1tI"),
        s = n.n(r),
        i = n("QJSi"),
        o = (n("A3CJ"), n("HUOD")),
        l = n.n(o),
        a = (n("b6Qr"), n("5Yp1")),
        p = n("webf"),
        d = s.a.createElement;
      (Error.getInitialProps = function(e) {
        var t = e.res,
          n = e.err;
        return { statusCode: t ? t.statusCode : n ? n.statusCode : 404 };
      }),
        (t.default = function(e) {
          return (
            e.statusCode,
            d(
              a.a,
              null,
              d(
                i.n,
                null,
                d(l.a, {
                  title: "Listening Exercises | CXC Spanish Online",
                  description:
                    "Practice listening with recordings of conversations with native Spanish speaker for your CXC Spanish exam.",
                  pathname: "https://www.cxcspanish.com/listening",
                  siteLanguage: "en",
                  siteLocale: "",
                  twitterUsername: "_rxheem"
                }),
                d(
                  i.c,
                  null,
                  d(i.d, null, d("a", { href: "/" }, "Home")),
                  d(i.d, { active: !0 }, "Listening Exercises")
                ),
                d(
                  p.a,
                  null,
                  d(
                    i.f,
                    null,
                    d(i.j, {
                      style: { width: "100%" },
                      src:
                        "https://english-podcasts.com/wp-content/uploads/2019/09/7-Tips-to-improve-listening-4.png"
                    }),
                    d(
                      i.g,
                      null,
                      d(i.k, null, "Listening Exercises"),
                      d("br", null),
                      d(
                        "p",
                        null,
                        "Our listening exercises are designed to help you improve your Spanish listening skills."
                      ),
                      d(
                        "ul",
                        { style: { marginLeft: "-20px" } },
                        d(
                          "li",
                          null,
                          d(
                            "a",
                            { href: "/listening-exercises/meet-ana" },
                            "Meet Ana"
                          )
                        ),
                        d(
                          "li",
                          { style: { paddingTop: "10px" } },
                          d(
                            "a",
                            { href: "/listening-exercises/meet-nick" },
                            "Meet Nick"
                          )
                        )
                      )
                    ),
                    d(i.h, null)
                  ),
                  d("br", null),
                  d(
                    i.f,
                    null,
                    d(
                      i.g,
                      null,
                      d(i.k, null, "Dialogue"),
                      d(
                        "p",
                        null,
                        "A key ingredient to improving your listening skills are dialogues/ conversations. Let's see what Kelly and Ronoldo have to talk about.",
                        " "
                      ),
                      d(
                        i.C,
                        null,
                        d(
                          i.l,
                          { sm: 12, md: 6, lg: 6, xl: 6 },
                          d(
                            "ul",
                            { style: { marginLeft: "-20px" } },
                            d(
                              "li",
                              null,
                              d(
                                "a",
                                {
                                  href:
                                    "/listening-exercises/una-visita-de-espana"
                                },
                                "Una Visita De Espa\xf1a"
                              )
                            ),
                            d(
                              "li",
                              { style: { paddingTop: "10px" } },
                              d(
                                "a",
                                { href: "/listening-exercises/la-casa-ideal" },
                                "La casa ideal"
                              )
                            ),
                            d(
                              "li",
                              { style: { paddingTop: "10px" } },
                              d(
                                "a",
                                { href: "/listening-exercises/ayer" },
                                "Ayer"
                              )
                            ),
                            d(
                              "li",
                              { style: { paddingTop: "10px" } },
                              d(
                                "a",
                                { href: "/listening-exercises/la-familia" },
                                "La familia"
                              )
                            ),
                            d(
                              "li",
                              { style: { paddingTop: "10px" } },
                              d(
                                "a",
                                { href: "/listening-exercises/el-clima" },
                                "El clima"
                              )
                            ),
                            d(
                              "li",
                              { style: { paddingTop: "10px" } },
                              d(
                                "a",
                                { href: "/listening-exercises/la-navidad" },
                                "La navidad"
                              )
                            )
                          )
                        ),
                        d(
                          i.l,
                          { sm: 12, md: 6, lg: 6, xl: 6 },
                          d(
                            "ul",
                            { style: { marginLeft: "-20px" } },
                            d(
                              "li",
                              null,
                              d(
                                "a",
                                { href: "/listening-exercises/los-estudios" },
                                "Los estudios"
                              )
                            ),
                            d(
                              "li",
                              { style: { paddingTop: "10px" } },
                              d(
                                "a",
                                { href: "/listening-exercises/la-salud" },
                                "La salud"
                              )
                            ),
                            d(
                              "li",
                              { style: { paddingTop: "10px" } },
                              d(
                                "a",
                                { href: "/listening-exercises/los-viajes" },
                                "Los viajes"
                              )
                            )
                          )
                        )
                      )
                    ),
                    d(i.h, null)
                  ),
                  d(
                    "a",
                    { href: "/listening-exercises/spanish-curse-words" },
                    "."
                  )
                )
              )
            )
          );
        });
    },
    Lw9w: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/listening",
        function() {
          return n("FO93");
        }
      ]);
    },
    Nsbk: function(e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    QILm: function(e, t, n) {
      var r = n("8OQS");
      e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          s,
          i = r(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (s = 0; s < o.length; s++)
            (n = o[s]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      };
    },
    SksO: function(e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          n(t, r)
        );
      }
      e.exports = n;
    },
    W8MJ: function(e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      e.exports = function(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      };
    },
    a1gu: function(e, t, n) {
      var r = n("cDf5"),
        s = n("PJYZ");
      e.exports = function(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? s(e) : t;
      };
    },
    cDf5: function(e, t) {
      function n(t) {
        return (
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? (e.exports = n = function(e) {
                return typeof e;
              })
            : (e.exports = n = function(e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    lwsE: function(e, t) {
      e.exports = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    webf: function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        s = n.n(r),
        i = n("QJSi"),
        o = n("b6Qr"),
        l = n("6ot8"),
        a = s.a.createElement,
        p = { display: "inline!important", paddingLeft: "50px" },
        d = { display: "inline" },
        c = { listStyleType: "none", paddingTop: "15px" };
      t.a = function(e) {
        return a(
          "div",
          null,
          a(
            i.C,
            null,
            a(
              i.l,
              { sm: 12, md: 8, lg: 8, xl: 8 },
              e.children,
              a(
                o.BrowserView,
                null,
                a("br", null),
                a(
                  i.f,
                  null,
                  a(
                    "span",
                    { className: "border border-light" },
                    a(
                      "ul",
                      { style: c },
                      a(
                        "li",
                        { style: d },
                        a("i", {
                          style: { color: "#8a3ab9" },
                          className: "fab fa-instagram"
                        }),
                        a(
                          "a",
                          {
                            className: "text-muted",
                            style: { paddingLeft: "10px" },
                            href: "https://www.instagram.com/cxcspanish/",
                            target: "_blank"
                          },
                          "cxcspanish"
                        )
                      ),
                      a(
                        "li",
                        { style: p },
                        a("i", {
                          style: { color: " #3b5998" },
                          className: "fab fa-facebook"
                        }),
                        a(
                          "a",
                          {
                            className: "text-muted",
                            style: { paddingLeft: "10px" },
                            href:
                              "https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii",
                            target: "_blank"
                          },
                          "CXC Spanish Gude"
                        )
                      ),
                      a(
                        "li",
                        { style: p },
                        a("i", {
                          style: { color: "#00acee" },
                          className: "fab fa-twitter"
                        }),
                        a(
                          "a",
                          {
                            className: "text-muted",
                            style: { paddingLeft: "10px" },
                            href: "https://www.twitter.com/cxcspanish",
                            target: "_blank"
                          },
                          "cxcspanish"
                        )
                      )
                    )
                  )
                )
              )
            ),
            a(
              i.l,
              { sm: 12, md: 4, lg: 4, xl: 4 },
              a("br", { className: "d-sm-none" }),
              a(
                i.f,
                null,
                a(i.j, {
                  src:
                    "https://cdn.blog.psafe.com/en/blog/wp-content/uploads/2016/10/BLOG_EN_0610_The-Benefits-of-Dropbox-for-Your-Android.jpg",
                  style: { width: "100%" }
                }),
                a(
                  i.g,
                  null,
                  a(
                    "p",
                    null,
                    "We've sourced all the past papers so you don't have to. Check out our Dropbox folder to get pass paper for any CSEC or CAPE subject."
                  ),
                  a(
                    i.e,
                    {
                      target: "_blank",
                      href:
                        "https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0"
                    },
                    a("i", {
                      style: { paddingRight: "5px" },
                      className: "fab fa-dropbox"
                    }),
                    "View Folder"
                  )
                )
              ),
              a("br", null),
              a(
                i.f,
                null,
                a(
                  i.g,
                  null,
                  a(i.k, { className: "" }, "Essentials"),
                  a("br", null),
                  a(
                    "ul",
                    { style: { marginLeft: "-25px", listStyleType: "none" } },
                    a(
                      "li",
                      null,
                      a(l.a, {
                        title: "Spanish For Dummies",
                        href:
                          "https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"
                      })
                    ),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "Modern Spanish Grammar",
                        href:
                          "https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"
                      })
                    ),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "Spanish Basics",
                        href:
                          "https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"
                      })
                    )
                  )
                )
              ),
              a("br", null),
              a(
                i.f,
                null,
                a(i.j, {
                  src:
                    "https://images.idgesg.net/images/article/2019/04/google-drive-docs-suite-logos-100794638-large.jpg",
                  style: { width: "100%", padding: "20px" }
                }),
                a(
                  i.g,
                  null,
                  a(
                    "p",
                    null,
                    "You can also see the papers on our Google Drive folder, if you are not able to access Dropbox."
                  ),
                  a(
                    i.e,
                    {
                      target: "_blank",
                      theme: "success",
                      href:
                        "https://drive.google.com/open?id=1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4"
                    },
                    a("i", {
                      style: { paddingRight: "5px" },
                      class: "fab fa-google-drive"
                    }),
                    "View Folder"
                  )
                )
              ),
              a(
                "div",
                { style: { display: "none" } },
                a("br", null),
                a(
                  i.f,
                  null,
                  a(
                    i.g,
                    null,
                    a(i.k, { className: "text-info" }, "CSEC Past Papers"),
                    a("br", null),
                    a(
                      "ul",
                      { style: { marginLeft: "-25px", listStyleType: "none" } },
                      a(
                        "li",
                        null,
                        a(l.a, {
                          title: "Economic",
                          href:
                            "https://dl.dropbox.com/s/jxvrisgi1yzevu3/csec%C2%AE_economics_past_papers.pdf?dl=0"
                        })
                      ),
                      a(
                        "li",
                        { style: { paddingTop: "10px" } },
                        a(l.a, {
                          title: "Principles of Business",
                          href:
                            "https://dl.dropbox.com/s/7nqmtd37s999yj0/csecc2ae-principles-of-business-past-papers-2005-2017.pdf?dl=0"
                        })
                      ),
                      a(
                        "li",
                        { style: { paddingTop: "10px" } },
                        a(l.a, {
                          title: "Principles of Accounts",
                          href:
                            "https://dl.dropbox.com/s/mnaf0jko2lwdm0c/csecc2ae-principles-of-accounts-past-papers-2005-2017.pdf?dl=0"
                        })
                      ),
                      a(
                        "li",
                        { style: { paddingTop: "10px" } },
                        a(l.a, {
                          title: "Physics",
                          href:
                            "https://dl.dropbox.com/s/90g671h3mmosk0z/CSEC%20Physics%20January%202019%20P2.pdf?dl=0"
                        })
                      )
                    )
                  )
                )
              ),
              a("br", null),
              a(
                i.f,
                null,
                a(
                  i.g,
                  null,
                  a(i.k, { className: "text-info" }, "CAPE Past Papers"),
                  a("br", null),
                  a(
                    "ul",
                    { style: { marginLeft: "-25px", listStyleType: "none" } },
                    a("li", null, a(l.a, { title: "Spanish", href: "" })),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "Agricultural Science",
                        href:
                          "https://dl.dropbox.com/s/eqc4v3bjrk1yh9j/CAPE%20Agricultural%20Science%20Past%20Papers.pdf?dl=0"
                      })
                    ),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "Biology",
                        href:
                          "https://dl.dropbox.com/s/lzugxqjfns8l7ee/CAPE%20Biology%20Past%20Papers%20unit%201_2%202005-2016.pdf?dl=0"
                      })
                    ),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "Law",
                        href:
                          "https://dl.dropbox.com/s/0tdxb2o1fx4k3ti/CAPE%C2%AE%20Law%20Past%20Papers%20u%201%20_%202%202005%20-2016.pdf?dl=0"
                      })
                    ),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "Food and Nutrition",
                        href:
                          "https://dl.dropbox.com/s/9zzq4eehfvjnsrt/CAPE%20Food%20and%20Nutrition%20Past%20Papers%20Ui%20_U2%202005%20-%202016.pdf?dl=0"
                      })
                    ),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "Sociology",
                        href:
                          "https://dl.dropbox.com/s/x1h7tmn4lam6ryn/CAPE%20Sociology%20Past%20Papers%20U1%20_U%202005-2016.pdf?dl=0"
                      })
                    ),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "French",
                        href:
                          "https://dl.dropbox.com/s/5g8gm6h4jcwikex/CAPE%20French%20Past%20Papers%20U1%20_U2%202005-2016.pdf?dl=0"
                      })
                    ),
                    a(
                      "li",
                      { style: { paddingTop: "10px" } },
                      a(l.a, {
                        title: "Computer Science",
                        href:
                          "https://dl.dropbox.com/s/uifq5ynywxvdga8/CAPE%20Computer%20Science%20Past%20Papers%20u1_U2%202005-2016.pdf?dl=0"
                      })
                    )
                  )
                )
              )
            )
          )
        );
      };
    }
  },
  [["Lw9w", 1, 0]]
]);
