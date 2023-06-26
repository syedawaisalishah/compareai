(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [761], {
        76853: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/r/[...slug]", function() {
                return r(99119)
            }])
        },
        54038: function(e, t, r) {
            "use strict";
            var o = r(85893),
                n = r(67294),
                l = r(59401),
                i = r.n(l),
                a = r(77817),
                u = r(78519),
                s = r(68232),
                c = r(70103);
            let p = e => {
                var t, r, l, p, d, v;
                let {
                    app: f
                } = e, [y, h] = (0, n.useState)(!1), m = () => {
                    h(!0)
                }, g = () => {
                    h(!1)
                };
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)("div", {
                        children: [(0, o.jsx)("h1", {
                            className: i().appTitle,
                            children: (null == f ? void 0 : f.appTitle) || "Untitled"
                        }), (0, o.jsxs)("div", {
                            className: i().creatorName,
                            children: ["by", (null == f ? void 0 : null === (t = f.createdBy) || void 0 === t ? void 0 : t.avatar) && (0, o.jsx)(c.Z, {
                                size: 30,
                                src: (null == f ? void 0 : f.isOfficialTemplate) ? "/static/branding/avatar.png" : null == f ? void 0 : null === (r = f.createdBy) || void 0 === r ? void 0 : r.avatar,
                                givenName: null == f ? void 0 : null === (l = f.createdBy) || void 0 === l ? void 0 : l.displayName
                            }), (0, o.jsx)(s.Z, {
                                className: i().userLink,
                                href: (null == f ? void 0 : f.isOfficialTemplate) ? "/template-library" : "/user/".concat(null == f ? void 0 : null === (p = f.createdBy) || void 0 === p ? void 0 : p.hash),
                                style: {
                                    color: null == f ? void 0 : f.colorText
                                },
                                children: (0, o.jsx)("strong", {
                                    children: (null == f ? void 0 : f.isOfficialTemplate) ? "brancher.ai" : (null == f ? void 0 : null === (d = f.createdBy) || void 0 === d ? void 0 : d.displayName) || "Anonymous"
                                })
                            })]
                        }), (null == f ? void 0 : f.description) && (0, o.jsx)("h2", {
                            className: i().description,
                            children: null == f ? void 0 : f.description
                        }), ((null == f ? void 0 : f.isOfficialTemplate) || (null == f ? void 0 : null === (v = f.createdBy) || void 0 === v ? void 0 : v.showShareOptions)) && (0, o.jsx)("button", {
                            type: "button",
                            className: i().resultActionButton,
                            style: {
                                borderColor: null == f ? void 0 : f.colorText,
                                color: null == f ? void 0 : f.colorText
                            },
                            onClick: m,
                            children: (0, o.jsxs)("div", {
                                className: i().resultActionButtonLayout,
                                children: [(0, o.jsx)(a.Z, {
                                    size: 24,
                                    icon: "share",
                                    color: null == f ? void 0 : f.colorText
                                }), "Share"]
                            })
                        })]
                    }), (0, o.jsx)(u.Z, {
                        isOpen: y,
                        appTitle: null == f ? void 0 : f.appTitle,
                        onRequestClose: g,
                        shareUrl: "".concat("https://app.brancher.ai", "/").concat(null == f ? void 0 : f.hash),
                        shareType: "app"
                    })]
                })
            };
            t.Z = p
        },
        73594: function(e, t, r) {
            "use strict";
            var o = r(85893);
            r(67294);
            var n = r(84770),
                l = r.n(n),
                i = r(20343);
            let a = () => (0, o.jsxs)(i.Z, {
                href: "https://www.brancher.ai",
                className: l().madeWithLink,
                children: [(0, o.jsx)("img", {
                    src: "/static/branding/square-or-circular-avatar.png",
                    className: l().madeWithLogo,
                    alt: "Logo"
                }), "Made with Brancher.ai"]
            });
            t.Z = a
        },
        99119: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return g
                },
                default: function() {
                    return _
                }
            });
            var o = r(85893),
                n = r(67294),
                l = r(54887),
                i = r(35280),
                a = r(73606),
                u = r(11163),
                s = r(497),
                c = r.n(s),
                p = r(78519),
                d = r(54038),
                v = r(71079),
                f = r(68232),
                y = r(73594);
            let h = e => {
                    var t, r, l, i, s, h, m, g, _, x, j, b, B, T, N, A, k;
                    let {
                        appResult: w
                    } = e, L = (0, u.useRouter)(), {
                        user: O
                    } = (0, a.aF)(), [F, S] = (0, n.useState)(!1), [R, C] = (0, n.useState)(), E = () => {
                        var e;
                        localStorage.setItem("callbackPath", "/".concat(null == w ? void 0 : null === (e = w.app) || void 0 === e ? void 0 : e.hash)), L.push("/api/auth/login").then(() => {
                            window.scrollTo(0, 0)
                        })
                    }, I = () => {
                        C(void 0), S(!1)
                    };
                    return (0, o.jsxs)("div", {
                        className: c().container,
                        children: [(0, o.jsx)("div", {
                            className: c().content,
                            children: (0, o.jsxs)("div", {
                                className: c().inputOutputLayout,
                                children: [(0, o.jsxs)("section", {
                                    className: c().inputLayout,
                                    children: [(0, o.jsx)(d.Z, {
                                        app: null == w ? void 0 : w.app
                                    }), (0, o.jsxs)("div", {
                                        children: [(0, o.jsxs)("div", {
                                            children: [(0, o.jsx)("h2", {
                                                className: c().wantToTry,
                                                children: "Want to try this app out yourself?"
                                            }), (0, o.jsxs)("div", {
                                                className: c().resultActionWrapper,
                                                children: [O && (0, o.jsx)(f.Z, {
                                                    className: c().tryThisAppButton,
                                                    style: {
                                                        borderColor: null == w ? void 0 : null === (t = w.app) || void 0 === t ? void 0 : t.colorText,
                                                        color: null == w ? void 0 : null === (r = w.app) || void 0 === r ? void 0 : r.colorText
                                                    },
                                                    href: "/".concat(null == w ? void 0 : null === (l = w.app) || void 0 === l ? void 0 : l.hash),
                                                    children: "Try This App"
                                                }), !O && (0, o.jsx)("button", {
                                                    className: c().tryThisAppButton,
                                                    style: {
                                                        borderColor: null == w ? void 0 : null === (i = w.app) || void 0 === i ? void 0 : i.colorText,
                                                        color: null == w ? void 0 : null === (s = w.app) || void 0 === s ? void 0 : s.colorText
                                                    },
                                                    onClick: E,
                                                    children: "Sign In / Up"
                                                })]
                                            }), (0, o.jsx)("hr", {
                                                className: c().separator,
                                                style: {
                                                    borderColor: null == w ? void 0 : null === (h = w.app) || void 0 === h ? void 0 : h.colorText
                                                }
                                            })]
                                        }), (0, o.jsx)("ul", {
                                            className: c().inputs,
                                            children: null == w ? void 0 : null === (m = w.inputs) || void 0 === m ? void 0 : m.map((e, t) => (0, o.jsx)("li", {
                                                children: ["text", "dropdown", "multipleChoice"].includes(null == e ? void 0 : e.type) && (0, o.jsxs)("div", {
                                                    children: [(0, o.jsx)("p", {
                                                        className: c().inputLabel,
                                                        children: null == e ? void 0 : e.label
                                                    }), (0, o.jsx)("p", {
                                                        className: c().inputValue,
                                                        children: null == e ? void 0 : e.value
                                                    })]
                                                })
                                            }, t))
                                        })]
                                    })]
                                }), (0, o.jsx)("section", {
                                    children: (0, o.jsx)(v.Z, {
                                        app: null == w ? void 0 : w.app,
                                        appResult: w,
                                        showBrancherBranding: null == w ? void 0 : null === (g = w.app) || void 0 === g ? void 0 : null === (_ = g.createdBy) || void 0 === _ ? void 0 : _.showBrancherBranding,
                                        showShareOptions: null == w ? void 0 : null === (x = w.app) || void 0 === x ? void 0 : null === (j = x.createdBy) || void 0 === j ? void 0 : j.showShareOptions,
                                        colorBackground: null == w ? void 0 : null === (b = w.app) || void 0 === b ? void 0 : b.colorBackground,
                                        colorText: null == w ? void 0 : null === (B = w.app) || void 0 === B ? void 0 : B.colorText,
                                        colorButton: null == w ? void 0 : null === (T = w.app) || void 0 === T ? void 0 : T.colorButton
                                    })
                                })]
                            })
                        }), (0, o.jsx)(p.Z, {
                            isOpen: F,
                            appTitle: null == w ? void 0 : null === (N = w.app) || void 0 === N ? void 0 : N.appTitle,
                            onRequestClose: I,
                            shareUrl: null == R ? void 0 : R.url,
                            shareType: null == R ? void 0 : R.type
                        }), (null == w ? void 0 : null === (A = w.app) || void 0 === A ? void 0 : null === (k = A.createdBy) || void 0 === k ? void 0 : k.showBrancherBranding) && (0, o.jsx)(y.Z, {})]
                    })
                },
                m = e => {
                    var t, r, n, a, u, s, c, p, d, v, f, y, m, g, _, x, j;
                    let {
                        appResult: b
                    } = e, B = {
                        appTitle: null == b ? void 0 : null === (t = b.app) || void 0 === t ? void 0 : t.appTitle,
                        colorButton: null == b ? void 0 : null === (r = b.app) || void 0 === r ? void 0 : r.colorButton,
                        colorBackground: null == b ? void 0 : null === (n = b.app) || void 0 === n ? void 0 : n.colorBackground,
                        colorText: null == b ? void 0 : null === (a = b.app) || void 0 === a ? void 0 : a.colorText,
                        createdBy: (null == b ? void 0 : null === (u = b.app) || void 0 === u ? void 0 : u.isOfficialTemplate) ? "brancher.ai" : (null == b ? void 0 : null === (s = b.app) || void 0 === s ? void 0 : null === (c = s.createdBy) || void 0 === c ? void 0 : c.displayName) || "Anonymous",
                        showBrancherBranding: null == b ? void 0 : null === (p = b.app) || void 0 === p ? void 0 : null === (d = p.createdBy) || void 0 === d ? void 0 : d.showBrancherBranding,
                        logo: null == b ? void 0 : null === (v = b.app) || void 0 === v ? void 0 : null === (f = v.createdBy) || void 0 === f ? void 0 : f.logo
                    }, T = l.Z.stringify(B);
                    return (0, o.jsx)(i.Z, {
                        app: null == b ? void 0 : b.app,
                        colorBackground: null == b ? void 0 : null === (y = b.app) || void 0 === y ? void 0 : y.colorBackground,
                        colorText: null == b ? void 0 : null === (m = b.app) || void 0 === m ? void 0 : m.colorText,
                        title: null == b ? void 0 : null === (g = b.app) || void 0 === g ? void 0 : g.appTitle,
                        description: null == b ? void 0 : null === (_ = b.app) || void 0 === _ ? void 0 : _.description,
                        featuredImage: "api/apps/featured-image?".concat(T),
                        showBrancherBranding: null == b ? void 0 : null === (x = b.app) || void 0 === x ? void 0 : null === (j = x.createdBy) || void 0 === j ? void 0 : j.showBrancherBranding,
                        showFooter: !1,
                        children: (0, o.jsx)(h, {
                            appResult: b
                        })
                    })
                };
            var g = !0,
                _ = m
        },
        59401: function(e) {
            e.exports = {
                appTitle: "AppDetail_appTitle__NHE5J",
                creatorName: "AppDetail_creatorName__iAX2N",
                userLink: "AppDetail_userLink__14KhO",
                description: "AppDetail_description__x_Hft",
                resultActionButton: "AppDetail_resultActionButton__MHM0f",
                resultActionButtonLayout: "AppDetail_resultActionButtonLayout__FExgu",
                resultLogo: "AppDetail_resultLogo__wQ_og"
            }
        },
        497: function(e) {
            e.exports = {
                container: "AppResultLayout_container__dVjrz",
                content: "AppResultLayout_content__Oeske",
                wantToTry: "AppResultLayout_wantToTry__KuQMu",
                resultActionWrapper: "AppResultLayout_resultActionWrapper__HPdqI",
                tryThisAppButton: "AppResultLayout_tryThisAppButton__GYg_W",
                separator: "AppResultLayout_separator__zHZ2U",
                inputOutputLayout: "AppResultLayout_inputOutputLayout__Zqsbs",
                inputLayout: "AppResultLayout_inputLayout__JPYIG",
                inputs: "AppResultLayout_inputs__tLSUU",
                inputLabel: "AppResultLayout_inputLabel__b7eQR",
                inputValue: "AppResultLayout_inputValue__S0c7U"
            }
        },
        84770: function(e) {
            e.exports = {
                madeWithLink: "MadeWithBrancher_madeWithLink__3qpVF",
                madeWithLogo: "MadeWithBrancher_madeWithLogo__37e6X"
            }
        },
        54887: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return B
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                exclude: function() {
                    return b
                },
                extract: function() {
                    return h
                },
                parse: function() {
                    return m
                },
                parseUrl: function() {
                    return _
                },
                pick: function() {
                    return j
                },
                stringify: function() {
                    return g
                },
                stringifyUrl: function() {
                    return x
                }
            });
            let n = "%[a-f0-9]{2}",
                l = RegExp("(" + n + ")|([^%]+?)", "gi"),
                i = RegExp("(" + n + ")+", "gi");

            function a(e, t) {
                if (!("string" == typeof e && "string" == typeof t)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === e || "" === t) return [];
                let r = e.indexOf(t);
                return -1 === r ? [] : [e.slice(0, r), e.slice(r + t.length)]
            }
            let u = e => null == e,
                s = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`),
                c = Symbol("encodeFragmentIdentifier");

            function p(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function d(e, t) {
                return t.encode ? t.strict ? s(e) : encodeURIComponent(e) : e
            }

            function v(e, t) {
                return t.decode ? function(e) {
                    if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                    try {
                        return decodeURIComponent(e)
                    } catch {
                        return function(e) {
                            let t = {
                                    "%FE%FF": "��",
                                    "%FF%FE": "��"
                                },
                                r = i.exec(e);
                            for (; r;) {
                                try {
                                    t[r[0]] = decodeURIComponent(r[0])
                                } catch {
                                    let e = function(e) {
                                        try {
                                            return decodeURIComponent(e)
                                        } catch {
                                            let t = e.match(l) || [];
                                            for (let r = 1; r < t.length; r++) t = (e = (function e(t, r) {
                                                try {
                                                    return [decodeURIComponent(t.join(""))]
                                                } catch {}
                                                if (1 === t.length) return t;
                                                r = r || 1;
                                                let o = t.slice(0, r),
                                                    n = t.slice(r);
                                                return Array.prototype.concat.call([], e(o), e(n))
                                            })(t, r).join("")).match(l) || [];
                                            return e
                                        }
                                    }(r[0]);
                                    e !== r[0] && (t[r[0]] = e)
                                }
                                r = i.exec(e)
                            }
                            t["%C2"] = "�";
                            let o = Object.keys(t);
                            for (let r of o) e = e.replace(RegExp(r, "g"), t[r]);
                            return e
                        }(e)
                    }
                }(e) : e
            }

            function f(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function y(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function h(e) {
                e = f(e);
                let t = e.indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function m(e, t) {
                p((t = {
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1,
                    ...t
                }).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, o) => {
                                    if (t = /\[(\d*)]$/.exec(e), e = e.replace(/\[\d*]$/, ""), !t) {
                                        o[e] = r;
                                        return
                                    }
                                    void 0 === o[e] && (o[e] = {}), o[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, o) => {
                                    if (t = /(\[])$/.exec(e), e = e.replace(/\[]$/, ""), !t) {
                                        o[e] = r;
                                        return
                                    }
                                    if (void 0 === o[e]) {
                                        o[e] = [r];
                                        return
                                    }
                                    o[e] = [...o[e], r]
                                };
                            case "colon-list-separator":
                                return (e, r, o) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        o[e] = r;
                                        return
                                    }
                                    if (void 0 === o[e]) {
                                        o[e] = [r];
                                        return
                                    }
                                    o[e] = [...o[e], r]
                                };
                            case "comma":
                            case "separator":
                                return (t, r, o) => {
                                    let n = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        l = "string" == typeof r && !n && v(r, e).includes(e.arrayFormatSeparator);
                                    r = l ? v(r, e) : r;
                                    let i = n || l ? r.split(e.arrayFormatSeparator).map(t => v(t, e)) : null === r ? r : v(r, e);
                                    o[t] = i
                                };
                            case "bracket-separator":
                                return (t, r, o) => {
                                    let n = /(\[])$/.test(t);
                                    if (t = t.replace(/\[]$/, ""), !n) {
                                        o[t] = r ? v(r, e) : r;
                                        return
                                    }
                                    let l = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => v(t, e));
                                    if (void 0 === o[t]) {
                                        o[t] = l;
                                        return
                                    }
                                    o[t] = [...o[t], ...l]
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [...[r[e]].flat(), t]
                                }
                        }
                    }(t),
                    o = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return o;
                for (let n of e.split("&")) {
                    if ("" === n) continue;
                    let e = t.decode ? n.replace(/\+/g, " ") : n,
                        [l, i] = a(e, "=");
                    void 0 === l && (l = e), i = void 0 === i ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? i : v(i, t), r(v(l, t), i, o)
                }
                for (let [e, r] of Object.entries(o))
                    if ("object" == typeof r && null !== r)
                        for (let [e, o] of Object.entries(r)) r[e] = y(o, t);
                    else o[e] = y(r, t);
                return !1 === t.sort ? o : (!0 === t.sort ? Object.keys(o).sort() : Object.keys(o).sort(t.sort)).reduce((e, t) => {
                    let r = o[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }

            function g(e, t) {
                if (!e) return "";
                p((t = {
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    ...t
                }).arrayFormatSeparator);
                let r = r => t.skipNull && u(e[r]) || t.skipEmptyString && "" === e[r],
                    o = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, o) => {
                                    let n = r.length;
                                    return void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? r : null === o ? [...r, [d(t, e), "[", n, "]"].join("")] : [...r, [d(t, e), "[", d(n, e), "]=", d(o, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? r : null === o ? [...r, [d(t, e), "[]"].join("")] : [...r, [d(t, e), "[]=", d(o, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? r : null === o ? [...r, [d(t, e), ":list="].join("")] : [...r, [d(t, e), ":list=", d(o, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (o, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? o : (n = null === n ? "" : n, 0 === o.length) ? [
                                        [d(r, e), t, d(n, e)].join("")
                                    ] : [
                                        [o, d(n, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? r : null === o ? [...r, d(t, e)] : [...r, [d(t, e), "=", d(o, e)].join("")]
                        }
                    }(t),
                    n = {};
                for (let [t, o] of Object.entries(e)) r(t) || (n[t] = o);
                let l = Object.keys(n);
                return !1 !== t.sort && l.sort(t.sort), l.map(r => {
                    let n = e[r];
                    return void 0 === n ? "" : null === n ? d(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? d(r, t) + "[]" : n.reduce(o(r), []).join("&") : d(r, t) + "=" + d(n, t)
                }).filter(e => e.length > 0).join("&")
            }

            function _(e, t) {
                t = {
                    decode: !0,
                    ...t
                };
                let [r, o] = a(e, "#");
                return void 0 === r && (r = e), {
                    url: r ? .split("?") ? .[0] ? ? "",
                    query: m(h(e), t),
                    ...t && t.parseFragmentIdentifier && o ? {
                        fragmentIdentifier: v(o, t)
                    } : {}
                }
            }

            function x(e, t) {
                t = {
                    encode: !0,
                    strict: !0,
                    [c]: !0,
                    ...t
                };
                let r = f(e.url).split("?")[0] || "",
                    o = h(e.url),
                    n = { ...m(o, {
                            sort: !1
                        }),
                        ...e.query
                    },
                    l = g(n, t);
                l && (l = `?${l}`);
                let i = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                if (e.fragmentIdentifier) {
                    let o = new URL(r);
                    o.hash = e.fragmentIdentifier, i = t[c] ? o.hash : `#${e.fragmentIdentifier}`
                }
                return `${r}${l}${i}`
            }

            function j(e, t, r) {
                r = {
                    parseFragmentIdentifier: !0,
                    [c]: !1,
                    ...r
                };
                let {
                    url: o,
                    query: n,
                    fragmentIdentifier: l
                } = _(e, r);
                return x({
                    url: o,
                    query: function(e, t) {
                        let r = {};
                        if (Array.isArray(t))
                            for (let o of t) {
                                let t = Object.getOwnPropertyDescriptor(e, o);
                                t ? .enumerable && Object.defineProperty(r, o, t)
                            } else
                                for (let o of Reflect.ownKeys(e)) {
                                    let n = Object.getOwnPropertyDescriptor(e, o);
                                    if (n.enumerable) {
                                        let l = e[o];
                                        t(o, l, e) && Object.defineProperty(r, o, n)
                                    }
                                }
                        return r
                    }(n, t),
                    fragmentIdentifier: l
                }, r)
            }

            function b(e, t, r) {
                let o = Array.isArray(t) ? e => !t.includes(e) : (e, r) => !t(e, r);
                return j(e, o, r)
            }
            var B = o
        }
    },
    function(e) {
        e.O(0, [910, 767, 950, 280, 929, 774, 888, 179], function() {
            return e(e.s = 76853)
        }), _N_E = e.O()
    }
]);