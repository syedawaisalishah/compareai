(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [330], {
        50881: function(e, l, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[...slug]", function() {
                return i(79875)
            }])
        },
        43914: function(e, l, i) {
            "use strict";
            var t, o, r, n;
            i.d(l, {
                L: function() {
                    return t
                },
                N: function() {
                    return o
                }
            }), (r = t || (t = {})).DALL_E = "dall-e", r.GPT_3 = "gpt-3", r.GPT_4 = "gpt-4", r.CHATGPT = "chatgpt", r.MIDJOURNEY = "midjourney", r.IMAGEN = "imagen", r.CRAYON = "crayon", r.REAL_ESRGAN = "real-esrgan", r.LATENT_SR = "latent-sr", r.STABLE_DIFFUSION = "stable-diffusion", (n = o || (o = {})).free = "free", n.basic = "basic", n.pro = "pro"
        },
        54038: function(e, l, i) {
            "use strict";
            var t = i(85893),
                o = i(67294),
                r = i(59401),
                n = i.n(r),
                a = i(77817),
                d = i(78519),
                s = i(68232),
                u = i(70103);
            let c = e => {
                var l, i, r, c, v, p;
                let {
                    app: h
                } = e, [m, _] = (0, o.useState)(!1), x = () => {
                    _(!0)
                }, y = () => {
                    _(!1)
                };
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)("h1", {
                            className: n().appTitle,
                            children: (null == h ? void 0 : h.appTitle) || "Untitled"
                        }), (0, t.jsxs)("div", {
                            className: n().creatorName,
                            children: ["by", (null == h ? void 0 : null === (l = h.createdBy) || void 0 === l ? void 0 : l.avatar) && (0, t.jsx)(u.Z, {
                                size: 30,
                                src: (null == h ? void 0 : h.isOfficialTemplate) ? "/static/branding/avatar.png" : null == h ? void 0 : null === (i = h.createdBy) || void 0 === i ? void 0 : i.avatar,
                                givenName: null == h ? void 0 : null === (r = h.createdBy) || void 0 === r ? void 0 : r.displayName
                            }), (0, t.jsx)(s.Z, {
                                className: n().userLink,
                                href: (null == h ? void 0 : h.isOfficialTemplate) ? "/template-library" : "/user/".concat(null == h ? void 0 : null === (c = h.createdBy) || void 0 === c ? void 0 : c.hash),
                                style: {
                                    color: null == h ? void 0 : h.colorText
                                },
                                children: (0, t.jsx)("strong", {
                                    children: (null == h ? void 0 : h.isOfficialTemplate) ? "brancher.ai" : (null == h ? void 0 : null === (v = h.createdBy) || void 0 === v ? void 0 : v.displayName) || "Anonymous"
                                })
                            })]
                        }), (null == h ? void 0 : h.description) && (0, t.jsx)("h2", {
                            className: n().description,
                            children: null == h ? void 0 : h.description
                        }), ((null == h ? void 0 : h.isOfficialTemplate) || (null == h ? void 0 : null === (p = h.createdBy) || void 0 === p ? void 0 : p.showShareOptions)) && (0, t.jsx)("button", {
                            type: "button",
                            className: n().resultActionButton,
                            style: {
                                borderColor: null == h ? void 0 : h.colorText,
                                color: null == h ? void 0 : h.colorText
                            },
                            onClick: x,
                            children: (0, t.jsxs)("div", {
                                className: n().resultActionButtonLayout,
                                children: [(0, t.jsx)(a.Z, {
                                    size: 24,
                                    icon: "share",
                                    color: null == h ? void 0 : h.colorText
                                }), "Share"]
                            })
                        })]
                    }), (0, t.jsx)(d.Z, {
                        isOpen: m,
                        appTitle: null == h ? void 0 : h.appTitle,
                        onRequestClose: y,
                        shareUrl: "".concat("https://app.brancher.ai", "/").concat(null == h ? void 0 : h.hash),
                        shareType: "app"
                    })]
                })
            };
            l.Z = c
        },
        64542: function(e, l, i) {
            "use strict";
            var t = i(85893),
                o = i(67294),
                r = i(49149),
                n = i(53017),
                a = i.n(n),
                d = i(20343),
                s = i(77817);
            let u = e => {
                let {
                    barColor: l,
                    duration: i,
                    message: n,
                    showBrancherBranding: u = !0,
                    displayName: c,
                    website: v,
                    twitter: p,
                    youtube: h,
                    instagram: m,
                    linkedin: _,
                    tiktok: x,
                    facebook: y
                } = e, [b, f] = (0, o.useState)(0);
                return (0, r.default)(() => {
                    b < i ? f(b + 1e3) : b > i && f(i)
                }, 1e3), (0, t.jsxs)("div", {
                    children: [b >= i && (0, t.jsx)("p", {
                        className: a().loaderText,
                        children: "Hold tight! This is taking us a little longer than usual…"
                    }), b < i && (0, t.jsxs)("div", {
                        className: a().loaderText,
                        children: [n, !n && u && (0, t.jsxs)("div", {
                            style: {
                                color: l
                            },
                            children: ["The magic is happening! Follow", " ", (0, t.jsx)(d.Z, {
                                href: "https://twitter.com/brancherdotai",
                                children: (0, t.jsx)("span", {
                                    style: {
                                        color: l,
                                        textDecoration: "underline"
                                    },
                                    children: "@brancherdotai"
                                })
                            }), " ", "and join our", " ", (0, t.jsx)(d.Z, {
                                href: "https://discord.gg/z8WudCsWjT",
                                children: (0, t.jsx)("span", {
                                    style: {
                                        color: l,
                                        textDecoration: "underline"
                                    },
                                    children: "Discord"
                                })
                            }), " ", "while you wait..."]
                        }), !n && !u && (0, t.jsxs)("div", {
                            className: a().messageLine,
                            style: {
                                color: l
                            },
                            children: ["The magic is happening! Follow ", c, " while you wait:", (0, t.jsxs)("ul", {
                                className: a().socialLinks,
                                children: [v && (0, t.jsx)("li", {
                                    children: (0, t.jsx)(d.Z, {
                                        href: v,
                                        children: (0, t.jsx)(s.Z, {
                                            icon: "globe",
                                            size: 24,
                                            color: l
                                        })
                                    })
                                }), p && (0, t.jsx)("li", {
                                    children: (0, t.jsx)(d.Z, {
                                        href: p,
                                        children: (0, t.jsx)(s.Z, {
                                            icon: "twitter",
                                            size: 24,
                                            color: l
                                        })
                                    })
                                }), h && (0, t.jsx)("li", {
                                    children: (0, t.jsx)(d.Z, {
                                        href: h,
                                        children: (0, t.jsx)(s.Z, {
                                            icon: "youtube",
                                            size: 24,
                                            color: l
                                        })
                                    })
                                }), m && (0, t.jsx)("li", {
                                    children: (0, t.jsx)(d.Z, {
                                        href: m,
                                        children: (0, t.jsx)(s.Z, {
                                            icon: "instagram",
                                            size: 24,
                                            color: l
                                        })
                                    })
                                }), _ && (0, t.jsx)("li", {
                                    children: (0, t.jsx)(d.Z, {
                                        href: _,
                                        children: (0, t.jsx)(s.Z, {
                                            icon: "linkedin",
                                            size: 24,
                                            color: l
                                        })
                                    })
                                }), x && (0, t.jsx)("li", {
                                    children: (0, t.jsx)(d.Z, {
                                        href: x,
                                        children: (0, t.jsx)(s.Z, {
                                            icon: "tiktok",
                                            size: 24,
                                            color: l
                                        })
                                    })
                                }), y && (0, t.jsx)("li", {
                                    children: (0, t.jsx)(d.Z, {
                                        href: y,
                                        children: (0, t.jsx)(s.Z, {
                                            icon: "facebook",
                                            size: 24,
                                            color: l
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: a().container,
                        style: {
                            borderColor: l
                        },
                        children: (0, t.jsx)("div", {
                            className: a().progressBar,
                            style: {
                                width: "calc(".concat(b / i * 100, "% + 2px)"),
                                backgroundColor: l
                            }
                        })
                    })]
                })
            };
            l.Z = u
        },
        71170: function(e, l, i) {
            "use strict";
            var t, o, r, n, a, d;
            i.d(l, {
                pd: function() {
                    return o
                }
            }), i(67294), (n = t || (t = {})).Text = "Text", n.Email = "Email", n.Password = "Password", (a = o || (o = {})).Required = "Required", a.InvalidEmail = "InvalidEmail", a.WeakPassword = "WeakPassword", a.InvalidUrl = "InvalidUrl", a.InvalidCustomUrl = "InvalidCustomUrl", (d = r || (r = {})).Default = "Default", d.Saving = "Saving", d.Saved = "Saved", d.Error = "Error"
        },
        40239: function(e, l, i) {
            "use strict";
            var t = i(85893);
            i(67294);
            var o = i(16093),
                r = i(94184),
                n = i.n(r),
                a = i(74163),
                d = i.n(a),
                s = i(71170);
            let u = e => {
                let {
                    className: l,
                    inputClassName: i,
                    labelClassName: r,
                    id: a,
                    label: u,
                    subLabel: c,
                    hideLabel: v = !1,
                    value: p = "",
                    placeholder: h,
                    staticPlaceholder: m,
                    type: _ = "text",
                    error: x,
                    onChange: y,
                    onBlur: b,
                    maxLength: f,
                    isTextArea: g = !1,
                    minRows: j = 3,
                    showMaxLength: L = !1,
                    disabled: T = !1,
                    labelColor: B,
                    intercomTargetLabel: N,
                    intercomTarget: w
                } = e, C = {
                    "aria-invalid": !!x
                }, k = e => {
                    let l = e.target.value;
                    b && b(l)
                }, I = e => {
                    let l = e.target.value;
                    y && y(l)
                };
                return (0, t.jsxs)("label", {
                    htmlFor: a,
                    className: l,
                    children: [!v && (0, t.jsx)("div", {
                        className: d().labelGroup,
                        "data-intercom-target": N,
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: n()(d().labelStyle, r),
                                style: B && {
                                    color: B
                                } || void 0,
                                children: u
                            }), c && (0, t.jsx)("div", {
                                className: d().subLabelStyle,
                                style: B && {
                                    color: B
                                } || void 0,
                                children: c
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: n()(m && d().staticPlaceholderGroup),
                        children: [m && (0, t.jsx)("div", {
                            className: d().staticPlaceholder,
                            children: m
                        }), g ? (0, t.jsx)(o.Z, {
                            id: a,
                            value: p,
                            minRows: j,
                            onChange: I,
                            onBlur: k,
                            placeholder: h,
                            maxLength: f,
                            disabled: T,
                            className: n()(d().textInput, d().textArea, x && d().errorInput, i),
                            "data-intercom-target": w,
                            ...C
                        }) : (0, t.jsx)("input", {
                            id: a,
                            type: _,
                            value: p,
                            onChange: I,
                            onBlur: k,
                            placeholder: h,
                            autoComplete: "off",
                            maxLength: f,
                            disabled: T,
                            className: n()(d().textInput, x && d().errorInput, i),
                            "data-intercom-target": w,
                            ...C
                        })]
                    }), L && f && (0, t.jsxs)("div", {
                        className: d().charLimitIndicator,
                        children: [null == p ? void 0 : p.length, "/", f]
                    }), void 0 !== x && (0, t.jsxs)("div", {
                        className: d().error,
                        "aria-live": "polite",
                        children: [x === s.pd.Required && "This field is required", x === s.pd.InvalidEmail && "The email is invalid", x === s.pd.WeakPassword && "The password is weak", x === s.pd.InvalidUrl && "The URL is invalid, changes will not be saved.", x === s.pd.InvalidCustomUrl && "Please only enter letters, numbers, -, and _"]
                    })]
                })
            };
            l.Z = u
        },
        73594: function(e, l, i) {
            "use strict";
            var t = i(85893);
            i(67294);
            var o = i(84770),
                r = i.n(o),
                n = i(20343);
            let a = () => (0, t.jsxs)(n.Z, {
                href: "https://www.brancher.ai",
                className: r().madeWithLink,
                children: [(0, t.jsx)("img", {
                    src: "/static/branding/square-or-circular-avatar.png",
                    className: r().madeWithLogo,
                    alt: "Logo"
                }), "Made with Brancher.ai"]
            });
            l.Z = a
        },
        3484: function(e, l) {
            "use strict";
            l.Z = {
                "dall-e": {
                    name: "DALL-E",
                    ver: void 0,
                    iconKey: "open-ai",
                    help: "Limit 1 per app",
                    creditCost: 2
                },
                "stable-diffusion": {
                    name: "Stable Diffusion",
                    ver: "2.1",
                    iconKey: "stability-ai",
                    creditCost: 2
                },
                midjourney: {
                    name: "Midjourney",
                    ver: void 0,
                    iconKey: "midjourney",
                    creditCost: 2
                },
                imagen: {
                    name: "Imagen",
                    ver: void 0,
                    iconKey: void 0,
                    creditCost: 2
                },
                crayon: {
                    name: "Crayon",
                    ver: void 0,
                    iconKey: void 0,
                    creditCost: 2
                },
                "real-esrgan": {
                    name: "real-esrgan",
                    ver: void 0,
                    iconKey: void 0,
                    creditCost: 2
                },
                "latent-sr": {
                    name: "latent-sr",
                    ver: void 0,
                    iconKey: void 0,
                    creditCost: 2
                },
                "gpt-3": {
                    name: "GPT-3",
                    ver: void 0,
                    iconKey: "open-ai",
                    creditCost: 1
                },
                chatgpt: {
                    name: "ChatGPT",
                    ver: void 0,
                    iconKey: "open-ai",
                    creditCost: 1
                },
                "gpt-4": {
                    name: "GPT-4",
                    ver: void 0,
                    iconKey: "open-ai",
                    creditCost: 3
                }
            }
        },
        40768: function(e, l, i) {
            "use strict";
            i.d(l, {
                br: function() {
                    return m
                },
                ZM: function() {
                    return h
                },
                M1: function() {
                    return x
                },
                GQ: function() {
                    return _
                },
                jw: function() {
                    return p
                }
            });
            var t = i(73303),
                o = i.n(t),
                r = i(44908),
                n = i.n(r),
                a = i(3484),
                d = i(43914),
                s = i(18446),
                u = i.n(s);
            let c = [{
                    type: "paragraph",
                    children: [{
                        text: ""
                    }]
                }],
                v = e => !!e && u()(e, c),
                p = e => n()(e),
                h = e => {
                    var l;
                    return null === (l = null == e ? void 0 : e.filter(e => {
                        var l;
                        return !v(null == e ? void 0 : null === (l = e.properties) || void 0 === l ? void 0 : l.prompt)
                    })) || void 0 === l ? void 0 : l.map(e => e.type)
                },
                m = e => {
                    var l;
                    let i = null === (l = null == e ? void 0 : e.filter(e => {
                        var l;
                        return !v(null == e ? void 0 : null === (l = e.properties) || void 0 === l ? void 0 : l.prompt)
                    })) || void 0 === l ? void 0 : l.map(e => e.type);
                    return o()(i, e => {
                        var l;
                        return (null === (l = a.Z[e]) || void 0 === l ? void 0 : l.creditCost) || 0
                    })
                },
                _ = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        l = e.reduce((e, l) => {
                            let i = 0;
                            switch (l) {
                                case d.L.CHATGPT:
                                case d.L.GPT_3:
                                    i = 15e3;
                                    break;
                                case d.L.GPT_4:
                                    i = 5e4;
                                    break;
                                case d.L.DALL_E:
                                    i = 2e4
                            }
                            return e + i
                        }, 0);
                    return l
                },
                x = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        l = e.reduce((e, l) => {
                            var i, t;
                            let o = 0;
                            return null == l || null === (i = l.properties) || void 0 === i || null === (t = i.prompt) || void 0 === t || t.forEach(e => {
                                var l;
                                return null == e ? void 0 : null === (l = e.children) || void 0 === l ? void 0 : l.forEach(e => {
                                    "tag" === e.type && (o += 1)
                                })
                            }), e + o
                        }, 0);
                    return l > 12 ? "low" : l > 8 ? "medium" : l > 0 ? "high" : "unknown"
                }
        },
        79875: function(e, l, i) {
            "use strict";
            i.r(l), i.d(l, {
                __N_SSP: function() {
                    return k
                },
                default: function() {
                    return I
                }
            });
            var t = i(85893),
                o = i(67294),
                r = i(54887),
                n = i(35280),
                a = i(73606),
                d = i(6767),
                s = i.n(d),
                u = i(88492),
                c = i(83868),
                v = i.n(c),
                p = i(18446),
                h = i.n(p),
                m = i(57743),
                _ = i.n(m),
                x = i(40239),
                y = i(86766),
                b = i(83779),
                f = i(49080),
                g = i(64542),
                j = i(78519),
                L = i(54038),
                T = i(71079),
                B = i(40768),
                N = i(73594);
            let w = e => {
                    var l, i, r, n, d, c, p, m, w, C, k, I, A;
                    let {
                        app: S,
                        hash: Z,
                        colorText: P,
                        colorButton: E,
                        colorBackground: R
                    } = e, {
                        user: D
                    } = (0, a.aF)(), q = (0, o.useRef)(!1), {
                        showServerError: F,
                        showErrorMessage: U
                    } = (0, f.Z)(), G = (0, o.useRef)(null), O = s()(E).isLight(), [M, W] = (0, o.useState)(!1), [K, z] = (0, o.useState)([]), [H, J] = (0, o.useState)(), [X, Q] = (0, o.useState)(!1), [Y, V] = (0, o.useState)(), $ = (0, o.useRef)([]), [ee, el] = (0, o.useState)(""), ei = (0, o.useCallback)(() => {
                        var e, l;
                        null == S || null === (e = S.formFields) || void 0 === e || e.map((e, l) => {
                            if (["dropdown", "multipleChoice"].includes(e.type)) {
                                var i;
                                null === (i = $.current[l]) || void 0 === i || i.clearValue()
                            }
                        }), z(null == S ? void 0 : null === (l = S.formFields) || void 0 === l ? void 0 : l.map(e => {
                            var l;
                            let i = ["dropdown", "multipleChoice"].includes(e.type) ? void 0 : "";
                            return {
                                id: null == e ? void 0 : e.id,
                                type: null == e ? void 0 : e.type,
                                label: null == e ? void 0 : null === (l = e.properties) || void 0 === l ? void 0 : l.label,
                                value: i
                            }
                        }))
                    }, [null == S ? void 0 : S.formFields]);
                    (0, o.useEffect)(() => {
                        S && !q.current && (ei(), q.current = !0)
                    }, [S, ei]);
                    let et = async (e, l) => {
                            let i = null == K ? void 0 : K.map(i => (null == i ? void 0 : i.id) === e ? { ...i,
                                value: l
                            } : i);
                            z(i)
                        },
                        eo = async e => {
                            if (e.preventDefault(), S) {
                                if (!es && !ee) {
                                    U({
                                        title: "Email is required"
                                    });
                                    return
                                }
                                if (!es && ee && !v()(ee)) {
                                    U({
                                        title: "Email address is invalid"
                                    });
                                    return
                                }
                                if (W(!0), J(void 0), !es && ee) try {
                                    await window.Intercom("boot", {
                                        api_base: "https://api-iam.intercom.io",
                                        app_id: "urktdwi7",
                                        email: ee,
                                        hide_default_launcher: !0
                                    })
                                } catch (e) {
                                    F(e)
                                }
                                try {
                                    let e = await b.Z.runApp({
                                        hash: null == S ? void 0 : S.hash,
                                        formFields: K,
                                        visitorEmail: ee
                                    });
                                    J(null == e ? void 0 : e.data)
                                } catch (e) {
                                    F(e), W(!1)
                                }
                            }
                        },
                        er = (0, o.useCallback)(async () => {
                            if (H) try {
                                let e = await b.Z.fetchAppResults(null == H ? void 0 : H.hash);
                                h()(H, e.data) || J(e.data), G.current && (e.data.currentStep === e.data.totalSteps || e.data.error) && en()
                            } catch (e) {
                                F(e), en()
                            }
                        }, [H, F]),
                        en = () => {
                            G.current && (clearInterval(G.current), G.current = null, W(!1))
                        };
                    (0, o.useEffect)(() => (!G.current && (null == H ? void 0 : H.hash) && H.currentStep < H.totalSteps && !H.error && (W(!0), G.current = setInterval(er, 1e4)), () => {
                        en()
                    }), [null == H ? void 0 : H.hash, null == H ? void 0 : H.currentStep, null == H ? void 0 : H.totalSteps, null == H ? void 0 : H.error, er]);
                    let ea = () => {
                            localStorage.setItem("callbackPath", "/".concat(Z)), window.location.href = "/api/auth/login"
                        },
                        ed = () => {
                            V(void 0), Q(!1)
                        },
                        es = !!D || S.hostCredits;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)("div", {
                            className: _().container,
                            children: [(0, t.jsxs)("div", {
                                className: _().content,
                                children: [S && (null == S ? void 0 : S.isPublished) === !1 && (0, t.jsxs)("section", {
                                    className: _().notPublishedMessage,
                                    children: [(0, t.jsx)("p", {
                                        className: _().errorTitle,
                                        children: "Nothing to see here \uD83D\uDC40"
                                    }), (0, t.jsx)("p", {
                                        className: _().description,
                                        children: "This app is not published yet"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: _().inputOutputLayout,
                                    children: [(null == S ? void 0 : S.isPublished) && (0, t.jsxs)("section", {
                                        className: _().inputLayout,
                                        children: [(0, t.jsx)(L.Z, {
                                            app: S
                                        }), (0, t.jsxs)("form", {
                                            onSubmit: eo,
                                            children: [(0, t.jsxs)("ul", {
                                                className: _().formFields,
                                                children: [null == S ? void 0 : null === (l = S.formFields) || void 0 === l ? void 0 : l.map((e, l) => {
                                                    var i, o, r, n, a, d, s, c, v, p, h, m, y, b, f, g, j, L, T, B;
                                                    return (0, t.jsxs)("li", {
                                                        children: [(null == e ? void 0 : e.type) === "text" && (0, t.jsx)(x.Z, {
                                                            id: null == e ? void 0 : e.id,
                                                            label: (null == e ? void 0 : null === (i = e.properties) || void 0 === i ? void 0 : i.label) || "Unlabeled",
                                                            placeholder: null == e ? void 0 : null === (o = e.properties) || void 0 === o ? void 0 : o.placeholder,
                                                            value: (null === (r = K[l]) || void 0 === r ? void 0 : r.value) || "",
                                                            onChange: l => et(e.id, l),
                                                            disabled: M,
                                                            isTextArea: !0,
                                                            minRows: 1,
                                                            labelClassName: _().textInputLabel,
                                                            inputClassName: _().textInputInput,
                                                            labelColor: P
                                                        }), (null == e ? void 0 : e.type) === "dropdown" && (0, t.jsxs)("label", {
                                                            children: [(0, t.jsx)("p", {
                                                                className: _().label,
                                                                children: (null == e ? void 0 : null === (n = e.properties) || void 0 === n ? void 0 : n.label) || "Unlabeled"
                                                            }), (0, t.jsx)(u.ZP, {
                                                                ref: e => $.current[l] = e,
                                                                id: null == e ? void 0 : e.id,
                                                                value: (null === (a = K[l]) || void 0 === a ? void 0 : a.value) ? {
                                                                    label: null === (d = K[l]) || void 0 === d ? void 0 : d.value,
                                                                    value: null === (s = K[l]) || void 0 === s ? void 0 : s.value
                                                                } : void 0,
                                                                onChange: l => et(e.id, null == l ? void 0 : l.value),
                                                                options: (null === (c = null == e ? void 0 : null === (v = e.properties) || void 0 === v ? void 0 : null === (p = v.choices) || void 0 === p ? void 0 : p.split("\n")) || void 0 === c ? void 0 : c.map(e => ({
                                                                    label: e,
                                                                    value: e
                                                                }))) || [],
                                                                className: "react-select-container-builder",
                                                                classNamePrefix: "react-select",
                                                                placeholder: (null == e ? void 0 : null === (h = e.properties) || void 0 === h ? void 0 : h.placeholder) || "Select an option",
                                                                isClearable: !0,
                                                                isDisabled: M
                                                            })]
                                                        }), (null == e ? void 0 : e.type) === "multipleChoice" && (0, t.jsxs)("label", {
                                                            children: [(0, t.jsx)("p", {
                                                                className: _().label,
                                                                children: (null == e ? void 0 : null === (m = e.properties) || void 0 === m ? void 0 : m.label) || "Unlabeled"
                                                            }), (0, t.jsx)(u.ZP, {
                                                                ref: e => $.current[l] = e,
                                                                id: null == e ? void 0 : e.id,
                                                                value: (null === (y = K[l]) || void 0 === y ? void 0 : y.value) ? null === (b = null === (f = K[l]) || void 0 === f ? void 0 : null === (g = f.value) || void 0 === g ? void 0 : g.split(",")) || void 0 === b ? void 0 : b.map(e => ({
                                                                    label: e,
                                                                    value: e
                                                                })) : void 0,
                                                                onChange: l => {
                                                                    var i;
                                                                    return et(e.id, null === (i = null == l ? void 0 : l.map(e => null == e ? void 0 : e.value)) || void 0 === i ? void 0 : i.join(","))
                                                                },
                                                                options: (null === (j = null == e ? void 0 : null === (L = e.properties) || void 0 === L ? void 0 : null === (T = L.choices) || void 0 === T ? void 0 : T.split("\n")) || void 0 === j ? void 0 : j.map(e => ({
                                                                    label: e,
                                                                    value: e
                                                                }))) || [],
                                                                className: "react-select-container-builder",
                                                                classNamePrefix: "react-select",
                                                                placeholder: (null == e ? void 0 : null === (B = e.properties) || void 0 === B ? void 0 : B.placeholder) || "Select an option",
                                                                isClearable: !0,
                                                                isMulti: !0,
                                                                isDisabled: M
                                                            })]
                                                        })]
                                                    }, null == e ? void 0 : e.id)
                                                }), !es && (0, t.jsx)("li", {
                                                    children: (0, t.jsx)(x.Z, {
                                                        id: "email",
                                                        type: "email",
                                                        label: "Your Email",
                                                        value: ee,
                                                        onChange: el,
                                                        disabled: M,
                                                        labelClassName: _().textInputLabel,
                                                        inputClassName: _().textInputInput,
                                                        labelColor: P,
                                                        subLabel: (0, t.jsxs)("span", {
                                                            children: ["Required.", " ", (0, t.jsx)("button", {
                                                                type: "button",
                                                                onClick: ea,
                                                                className: _().signUpLink,
                                                                style: {
                                                                    color: P
                                                                },
                                                                children: "Sign in / up"
                                                            }), " ", "to skip this step."]
                                                        })
                                                    })
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: _().submitButton,
                                                children: [(0, t.jsx)(y.Z, {
                                                    kind: "custom",
                                                    disabled: M,
                                                    colorText: P,
                                                    onClick: ei,
                                                    children: (0, t.jsx)("div", {
                                                        children: "Clear"
                                                    })
                                                }), !es && (0, t.jsx)(y.Z, {
                                                    type: "submit",
                                                    kind: "custom",
                                                    disabled: M,
                                                    colorText: O ? "#000" : "#fff",
                                                    colorBackground: E,
                                                    children: "Try for Free"
                                                }), es && (0, t.jsx)(y.Z, {
                                                    type: "submit",
                                                    kind: "custom",
                                                    disabled: M,
                                                    colorText: O ? "#000" : "#fff",
                                                    colorBackground: E,
                                                    children: (0, t.jsxs)("div", {
                                                        className: _().creditsRequired,
                                                        children: [(0, t.jsx)("div", {
                                                            children: "Submit"
                                                        }), !(null == S ? void 0 : S.isFreeTemplate) && !(null == S ? void 0 : S.hostCredits) && (0, t.jsxs)("div", {
                                                            className: _().creditsRequiredCredit,
                                                            children: ["(", null == S ? void 0 : S.creditsRequired, " ", (null == S ? void 0 : S.creditsRequired) === 1 ? "Credit" : "Credits", ")"]
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })]
                                    }), (0, t.jsxs)("section", {
                                        className: _().outputSection,
                                        children: [M && (0, t.jsx)(g.Z, {
                                            barColor: P,
                                            duration: (0, B.GQ)(null == S ? void 0 : S.aiModels),
                                            showBrancherBranding: null == S ? void 0 : null === (i = S.createdBy) || void 0 === i ? void 0 : i.showBrancherBranding,
                                            displayName: null == S ? void 0 : null === (r = S.createdBy) || void 0 === r ? void 0 : r.displayName,
                                            website: null == S ? void 0 : null === (n = S.createdBy) || void 0 === n ? void 0 : n.website,
                                            twitter: null == S ? void 0 : null === (d = S.createdBy) || void 0 === d ? void 0 : d.twitter,
                                            youtube: null == S ? void 0 : null === (c = S.createdBy) || void 0 === c ? void 0 : c.youtube,
                                            instagram: null == S ? void 0 : null === (p = S.createdBy) || void 0 === p ? void 0 : p.instagram,
                                            linkedin: null == S ? void 0 : null === (m = S.createdBy) || void 0 === m ? void 0 : m.linkedin,
                                            tiktok: null == S ? void 0 : null === (w = S.createdBy) || void 0 === w ? void 0 : w.tiktok,
                                            facebook: null == S ? void 0 : null === (C = S.createdBy) || void 0 === C ? void 0 : C.facebook
                                        }), H && (0, t.jsx)(T.Z, {
                                            app: S,
                                            appResult: H,
                                            showBrancherBranding: null == S ? void 0 : null === (k = S.createdBy) || void 0 === k ? void 0 : k.showBrancherBranding,
                                            showShareOptions: null == S ? void 0 : null === (I = S.createdBy) || void 0 === I ? void 0 : I.showShareOptions,
                                            colorBackground: R,
                                            colorText: P,
                                            colorButton: E
                                        })]
                                    })]
                                })]
                            }), (0, t.jsx)(j.Z, {
                                isOpen: X,
                                appTitle: null == S ? void 0 : S.appTitle,
                                onRequestClose: ed,
                                shareUrl: null == Y ? void 0 : Y.url,
                                shareType: null == Y ? void 0 : Y.type
                            })]
                        }), (null == S ? void 0 : null === (A = S.createdBy) || void 0 === A ? void 0 : A.showBrancherBranding) && (0, t.jsx)(N.Z, {})]
                    })
                },
                C = e => {
                    var l, i, o, a, d;
                    let {
                        app: s,
                        hash: u
                    } = e, c = {
                        appTitle: s.appTitle,
                        colorButton: s.colorButton,
                        colorBackground: s.colorBackground,
                        colorText: s.colorText,
                        createdBy: s.isOfficialTemplate ? "brancher.ai" : s.createdBy ? null == s ? void 0 : null === (l = s.createdBy) || void 0 === l ? void 0 : l.displayName : "Anonymous",
                        showBrancherBranding: null == s ? void 0 : null === (i = s.createdBy) || void 0 === i ? void 0 : i.showBrancherBranding,
                        logo: null == s ? void 0 : null === (o = s.createdBy) || void 0 === o ? void 0 : o.logo
                    }, v = r.Z.stringify(c);
                    return (0, t.jsx)(n.Z, {
                        app: s,
                        colorBackground: null == s ? void 0 : s.colorBackground,
                        colorText: null == s ? void 0 : s.colorText,
                        title: null == s ? void 0 : s.appTitle,
                        description: null == s ? void 0 : s.description,
                        showBrancherBranding: null == s ? void 0 : null === (a = s.createdBy) || void 0 === a ? void 0 : a.showBrancherBranding,
                        logo: null == s ? void 0 : null === (d = s.createdBy) || void 0 === d ? void 0 : d.logo,
                        featuredImage: "api/apps/featured-image?".concat(v),
                        showFooter: !1,
                        children: (0, t.jsx)(w, {
                            colorText: null == s ? void 0 : s.colorText,
                            colorButton: null == s ? void 0 : s.colorButton,
                            colorBackground: null == s ? void 0 : s.colorBackground,
                            app: s,
                            hash: u
                        })
                    })
                };
            var k = !0,
                I = C
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
        57743: function(e) {
            e.exports = {
                container: "AppLayout_container__HqVTS",
                content: "AppLayout_content__kkd1Q",
                inputOutputLayout: "AppLayout_inputOutputLayout__iKnIq",
                inputLayout: "AppLayout_inputLayout__vI6ya",
                label: "AppLayout_label__CsJN2",
                notPublishedMessage: "AppLayout_notPublishedMessage__8LNte",
                errorTitle: "AppLayout_errorTitle__4_Jc_",
                formFields: "AppLayout_formFields__EF9c3",
                textInputLabel: "AppLayout_textInputLabel__e9Twy",
                textInputInput: "AppLayout_textInputInput__E9DqE",
                submitButton: "AppLayout_submitButton__xhWdC",
                creditsRequired: "AppLayout_creditsRequired__FUvUz",
                creditsRequiredCredit: "AppLayout_creditsRequiredCredit__Johqb",
                signUpLink: "AppLayout_signUpLink__XOvbA",
                outputSection: "AppLayout_outputSection__zvNMu"
            }
        },
        53017: function(e) {
            e.exports = {
                container: "BarLoader_container__13CXr",
                progressBar: "BarLoader_progressBar__qAMDD",
                loaderText: "BarLoader_loaderText__ZkTjh",
                messageLine: "BarLoader_messageLine__3NWNJ",
                socialLinks: "BarLoader_socialLinks__1gvW1",
                gradient: "BarLoader_gradient__rot44"
            }
        },
        74163: function(e) {
            e.exports = {
                labelGroup: "TextInput_labelGroup__wvGU2",
                labelStyle: "TextInput_labelStyle__Sb3Kc",
                subLabelStyle: "TextInput_subLabelStyle__Bvh_l",
                savingLabel: "TextInput_savingLabel__Rzsmr",
                savedLabel: "TextInput_savedLabel__YR9Ce",
                isSaving: "TextInput_isSaving__fj8Dp",
                isSaved: "TextInput_isSaved__wfg2R",
                charLimitIndicator: "TextInput_charLimitIndicator__ohzkp",
                textInput: "TextInput_textInput__xu1K2",
                textArea: "TextInput_textArea__rkCAd",
                error: "TextInput_error__Sm2rm",
                errorInput: "TextInput_errorInput__x_ZM0",
                staticPlaceholderGroup: "TextInput_staticPlaceholderGroup__cDM4y",
                staticPlaceholder: "TextInput_staticPlaceholder__KJpr7"
            }
        },
        84770: function(e) {
            e.exports = {
                madeWithLink: "MadeWithBrancher_madeWithLink__3qpVF",
                madeWithLogo: "MadeWithBrancher_madeWithLogo__37e6X"
            }
        }
    },
    function(e) {
        e.O(0, [910, 767, 557, 950, 492, 136, 280, 929, 774, 888, 179], function() {
            return e(e.s = 50881)
        }), _N_E = e.O()
    }
]);