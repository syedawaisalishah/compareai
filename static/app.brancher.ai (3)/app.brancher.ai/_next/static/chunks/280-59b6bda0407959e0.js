(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [280], {
        68232: function(e, t, o) {
            "use strict";
            var n = o(85893);
            o(67294);
            var r = o(11163),
                a = o(94184),
                i = o.n(a);
            let l = e => {
                let {
                    id: t,
                    className: o,
                    style: a,
                    activeStyle: l,
                    children: s,
                    onClickCallback: c,
                    href: u,
                    as: d,
                    baseRoute: _,
                    disabled: m,
                    intercomTarget: p
                } = e, v = (0, r.useRouter)(), h = v.asPath, g = _ ? h.includes(_) : h === u, x = e => {
                    e.preventDefault(), c && c(), d ? v.push(u, d).then(() => {
                        window.scrollTo(0, 0)
                    }) : u && v.push(u).then(() => {
                        window.scrollTo(0, 0)
                    })
                };
                return (0, n.jsx)("a", {
                    id: t,
                    href: u,
                    className: i()(o, g && l),
                    onClick: x,
                    "aria-disabled": m,
                    style: a,
                    "data-intercom-target": p,
                    children: s
                })
            };
            t.Z = l
        },
        86572: function(e, t, o) {
            "use strict";
            var n = o(85893);
            o(67294);
            var r = o(94184),
                a = o.n(r),
                i = o(73340),
                l = o.n(i);
            let s = e => {
                let {
                    className: t,
                    size: o = "M"
                } = e;
                return (0, n.jsx)("div", {
                    className: a()(l().container, "S" === o && l().small, "M" === o && l().medium, "L" === o && l().large, t),
                    children: "Coming Soon"
                })
            };
            t.Z = s
        },
        70103: function(e, t, o) {
            "use strict";
            var n = o(85893),
                r = o(67294),
                a = o(94184),
                i = o.n(a),
                l = o(6468),
                s = o.n(l),
                c = o(74644),
                u = o(82544);
            let d = (e, t) => {
                    let o = (null == e ? void 0 : e.charAt(0)) || "",
                        n = (null == t ? void 0 : t.charAt(0)) || "",
                        r = o || n ? [o, n].filter(e => !!e).join("") : "?";
                    return {
                        givenInitial: o,
                        familyInitial: n,
                        initials: r
                    }
                },
                _ = e => {
                    if (["A", "N"].includes(e)) return "var(--colorAccent1)";
                    if (["B", "O"].includes(e)) return "var(--colorAccent2)";
                    if (["C", "P"].includes(e)) return "var(--colorAccent3)";
                    if (["D", "Q"].includes(e)) return "var(--colorAccent4)";
                    if (["E", "R"].includes(e)) return "var(--colorAccent5)";
                    if (["F", "S"].includes(e)) return "var(--colorAccent6)";
                    if (["G", "T"].includes(e)) return "var(--colorAccent7)";
                    else if (["H", "U"].includes(e)) return "var(--colorAccent8)";
                    else if (["I", "V"].includes(e)) return "var(--colorAccent9)";
                    else if (["J", "W"].includes(e)) return "var(--colorAccent10)";
                    else if (["K", "X"].includes(e)) return "var(--colorAccent11)";
                    else if (["L", "Y"].includes(e)) return "var(--colorAccent12)";
                    else if (["M", "Z"].includes(e)) return "var(--colorAccent13)";
                    return "var(--colorGray8)"
                },
                m = e => {
                    let {
                        src: t,
                        size: o = u.E.S,
                        alt: a,
                        givenName: l,
                        familyName: m,
                        withBorder: p = !1,
                        className: v,
                        shouldFallback: h = !1
                    } = e, [g, x] = (0, r.useState)(!1), y = () => {
                        x(!0)
                    }, {
                        givenInitial: f,
                        familyInitial: b,
                        initials: j
                    } = d(l || "", m || ""), N = h ? _(f || b) : void 0;
                    return (0, n.jsxs)("div", {
                        className: i()(s().container, p && s().withBorder, v),
                        style: {
                            width: o,
                            height: o,
                            backgroundColor: N
                        },
                        children: [!g && (0, n.jsx)("img", {
                            src: t,
                            alt: a,
                            width: o,
                            height: o,
                            className: s().avatar,
                            onError: y
                        }), (0, n.jsx)("span", {
                            className: s().initialsContainer,
                            style: {
                                fontSize: (0, c.Z)(o / 2.5),
                                color: "var(--colorWhite)"
                            },
                            children: j
                        })]
                    })
                };
            t.Z = m
        },
        86766: function(e, t, o) {
            "use strict";
            var n = o(85893);
            o(67294);
            var r = o(94184),
                a = o.n(r),
                i = o(91632),
                l = o.n(i),
                s = o(77817);
            let c = e => {
                let {
                    kind: t = "primary",
                    onClick: o,
                    type: r = "button",
                    disabled: i = !1,
                    children: c = "Button",
                    size: u = "M",
                    icon: d,
                    iconPosition: _ = "left",
                    className: m,
                    colorText: p,
                    colorBackground: v,
                    intercomTarget: h
                } = e, g = "var(--colorWhite)";
                return "primary" === t && (g = "var(--colorGray8)"), "secondary" === t && (g = "var(--colorGray1)"), "tertiary" === t && (g = "var(--colorGray8)"), "special" === t && (g = "var(--colorWhite)"), "alert" === t && (g = "var(--colorAlert)"), "secondaryAlert" === t && (g = "var(--colorAlert)"), "text" === t && (g = "var(--colorGray1)"), (0, n.jsx)("button", {
                    className: a()(m, l().button, "primary" === t && l().primaryButton, "secondary" === t && l().secondaryButton, "tertiary" === t && l().tertiaryButton, "special" === t && l().specialButton, "alert" === t && l().alertButton, "secondaryAlert" === t && l().secondaryAlertButton, "custom" === t && l().customButton, "customInverse" === t && l().customButton, "M" === u && l().sizeM, "S" === u && l().sizeS, "text" === t && l().textButton, d && l().withIcon),
                    type: r,
                    disabled: i,
                    onClick: o,
                    style: "custom" === t && {
                        color: p,
                        backgroundColor: v,
                        borderColor: v
                    } || "customInverse" === t && {
                        color: v,
                        backgroundColor: p,
                        borderColor: p
                    } || void 0,
                    "data-intercom-target": h,
                    children: (0, n.jsxs)("div", {
                        className: l().iconContainer,
                        children: [d && "left" === _ && (0, n.jsx)(s.Z, {
                            icon: d,
                            size: 24,
                            color: g
                        }), c, d && "right" === _ && (0, n.jsx)(s.Z, {
                            icon: d,
                            size: 24,
                            color: g
                        })]
                    })
                })
            };
            t.Z = c
        },
        9905: function(e, t, o) {
            "use strict";
            var n = o(85893),
                r = o(67294),
                a = o(19768),
                i = o(94184),
                l = o.n(i),
                s = o(8290),
                c = o.n(s),
                u = o(77817),
                d = o(65256),
                _ = o(86572);
            let m = e => {
                let {
                    menu: t,
                    Button: o = (0, n.jsx)(d.Z, {
                        icon: "menu-outline",
                        kind: "secondary"
                    }),
                    alignment: i = "left"
                } = e, {
                    buttonProps: s,
                    itemProps: m,
                    isOpen: p,
                    setIsOpen: v
                } = (0, a.Z)(null == t ? void 0 : t.length, {
                    focusFirstItemOnClick: !1
                }), h = (0, r.forwardRef)((e, t) => {
                    let {} = e;
                    return (0, r.cloneElement)(o, { ...s,
                        ref: t
                    })
                });
                return h.displayName = "Trigger", (0, n.jsxs)("div", {
                    className: c().container,
                    children: [(0, n.jsx)(h, {}), (0, n.jsx)("div", {
                        className: l()(c().menu, "left" === i && c().menuLeft, "center" === i && c().menuCenter, "right" === i && c().menuRight, "bottom" === i && c().menuBottom, "bottomRight" === i && c().menuBottomRight, "bottomLeft" === i && c().menuBottomLeft, "topRight" === i && c().menuTopRight, p && c().visibleMenu),
                        role: "menu",
                        children: null == t ? void 0 : t.map((e, t) => (0, n.jsxs)("a", {
                            className: l()(c().menuItem, (null == e ? void 0 : e.isDestructive) && c().destructiveMenuItem, ((null == e ? void 0 : e.disabled) || e.comingSoon) && c().disabledMenuItem),
                            onClick: () => {
                                !e.onClick || e.disabled || e.comingSoon || (v(!1), e.onClick())
                            },
                            href: null == e ? void 0 : e.href,
                            ...m[t],
                            children: [(null == e ? void 0 : e.icon) && (0, n.jsx)(u.Z, {
                                icon: null == e ? void 0 : e.icon,
                                size: 20,
                                color: (null == e ? void 0 : e.disabled) || (null == e ? void 0 : e.comingSoon) ? "var(--colorGray3)" : (null == e ? void 0 : e.isDestructive) ? "var(--colorAlert)" : "var(--colorGray8)"
                            }), e.label, e.comingSoon && (0, n.jsx)(_.Z, {
                                size: "M"
                            })]
                        }, t))
                    })]
                })
            };
            t.Z = m
        },
        49080: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return _
                }
            });
            var n = o(85893),
                r = o(67294),
                a = o(22920),
                i = o(19830),
                l = o.n(i),
                s = o(77817),
                c = o(20343);
            let u = e => {
                    let {
                        title: t,
                        message: o,
                        helpArticle: r,
                        type: a
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: l().container,
                        children: [(0, n.jsxs)("div", {
                            children: ["success" === a && (0, n.jsx)("div", {
                                className: l().iconContainerSuccess,
                                children: (0, n.jsx)(s.Z, {
                                    icon: "checkmark",
                                    size: 24,
                                    color: "white"
                                })
                            }), "error" === a && (0, n.jsx)("div", {
                                className: l().iconContainerError,
                                children: (0, n.jsx)(s.Z, {
                                    icon: "alert",
                                    size: 24,
                                    color: "white"
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [t && (0, n.jsx)("h4", {
                                className: l().title,
                                children: t
                            }), o && (0, n.jsx)("p", {
                                className: l().message,
                                children: o
                            })]
                        }), r && (0, n.jsx)("div", {
                            children: (0, n.jsx)(c.Z, {
                                className: l().readDoc,
                                href: r,
                                children: "Read Doc"
                            })
                        })]
                    })
                },
                d = () => {
                    let e = (0, r.useCallback)(e => {
                            let {
                                title: t,
                                message: o
                            } = e;
                            (0, a.Am)((0, n.jsx)(u, {
                                title: t,
                                message: o,
                                type: "success"
                            }))
                        }, []),
                        t = (0, r.useCallback)(e => {
                            let {
                                title: t,
                                message: o
                            } = e;
                            (0, a.Am)((0, n.jsx)(u, {
                                title: t,
                                message: o,
                                type: "error"
                            }))
                        }, []),
                        o = (0, r.useCallback)(e => {
                            var t, o;
                            console.error(e);
                            let r = null == e ? void 0 : null === (t = e.response) || void 0 === t ? void 0 : t.data;
                            (null == e ? void 0 : null === (o = e.response) || void 0 === o ? void 0 : o.status) === 504 ? (0, a.Am)((0, n.jsx)(u, {
                                title: "Execution Time Limit",
                                message: "It took longer than 60 seconds to run the app. If you are the app creator, try to reduce the app complexity.",
                                type: "error"
                            })) : (null == r ? void 0 : r.message) && (0, a.Am)((0, n.jsx)(u, {
                                title: "Error",
                                message: null == r ? void 0 : r.message,
                                helpArticle: null == r ? void 0 : r.helpArticle,
                                type: "error"
                            }))
                        }, []);
                    return {
                        showSuccessMessage: e,
                        showErrorMessage: t,
                        showServerError: o
                    }
                };
            var _ = d
        },
        82544: function(e, t, o) {
            "use strict";
            var n, r;
            o.d(t, {
                E: function() {
                    return n
                }
            }), (r = n || (n = {}))[r.XXS = 18] = "XXS", r[r.XS = 24] = "XS", r[r.S = 36] = "S", r[r.M = 42] = "M", r[r.L = 60] = "L", r[r.XL = 72] = "XL", r[r.XXL = 94] = "XXL"
        },
        35280: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return D
                }
            });
            var n = o(85893),
                r = o(67294),
                a = o(94184),
                i = o.n(a),
                l = o(9482),
                s = o.n(l),
                c = o(56945),
                u = o(73606),
                d = o(95591),
                _ = o(6767),
                m = o.n(_),
                p = o(11163),
                v = o(83871),
                h = o.n(v),
                g = o(68232);
            let x = () => {
                let [e, t] = (0, r.useState)(0);
                return (0, r.useEffect)(() => {
                    let e = window.scrollY,
                        o = t => Math.abs(t - e) > 50,
                        n = () => {
                            let n = window.scrollY;
                            o(n) && (t(n), e = n > 0 ? n : 0)
                        },
                        r = () => window.requestAnimationFrame(n);
                    return window.addEventListener("scroll", r), () => window.removeEventListener("scroll", r)
                }, []), e
            };
            var y = o(86766),
                f = o(70103),
                b = o(82544),
                j = o(9905),
                N = o(66663),
                k = o(83779),
                B = o(49080),
                w = o(65256);
            let A = e => {
                let {
                    app: t,
                    colorBackground: o,
                    colorText: a,
                    logo: l,
                    showBrancherBranding: s
                } = e, c = (0, p.useRouter)(), {
                    user: _
                } = (0, u.aF)(), {
                    data: v
                } = (0, d.ZP)(_ ? "/api/user" : null, N.Z), [A, L] = (0, r.useState)(!1), {
                    showServerError: C,
                    showSuccessMessage: D
                } = (0, B.Z)(), Z = x(), S = m()(o).isLight(), T = m()(o).isDark(), M = () => {
                    window.location.href = "/apps"
                }, I = () => {
                    window.location.href = "/api/auth/login"
                }, O = async () => {
                    L(!0);
                    try {
                        var e;
                        let o = await k.Z.cloneApp({
                            hash: null == t ? void 0 : t.hash
                        });
                        c.push("/apps/".concat(null == o ? void 0 : null === (e = o.data) || void 0 === e ? void 0 : e.hash)).then(() => {
                            window.scrollTo(0, 0), D({
                                title: "Template App Cloned"
                            })
                        })
                    } catch (e) {
                        C(e)
                    } finally {
                        L(!1)
                    }
                };
                return (0, n.jsxs)("nav", {
                    className: i()(h().nav, Z > 50 && h().scrolledNav),
                    children: [(0, n.jsxs)("div", {
                        className: h().primaryNav,
                        children: [l && (0, n.jsxs)("div", {
                            className: h().logoWrapper,
                            children: [(0, n.jsx)("img", {
                                src: l,
                                className: i()(h().customMobileLogo, h().mobileOnly),
                                alt: "Logo"
                            }), (0, n.jsx)("img", {
                                src: l,
                                className: i()(h().customDesktopLogo, h().desktopOnly),
                                alt: "Logo"
                            })]
                        }), s && !l && (0, n.jsxs)(g.Z, {
                            className: h().logoWrapper,
                            href: "https://www.brancher.ai/",
                            children: [(0, n.jsx)("img", {
                                src: "/static/branding/square-or-circular-avatar.svg",
                                className: i()(h().mobileLogo, h().mobileOnly),
                                alt: "brancher.ai"
                            }), T && (0, n.jsx)("img", {
                                src: "/static/branding/logo-on-dark.svg",
                                className: i()(i()(h().desktopLogo, h().desktopOnly)),
                                alt: "brancher.ai"
                            }), S && (0, n.jsx)("img", {
                                src: "/static/branding/logo-on-white.svg",
                                className: i()(h().desktopLogo, h().desktopOnly),
                                alt: "brancher.ai"
                            }), !S && !T && (0, n.jsx)("img", {
                                src: "/static/branding/logo-on-black.svg",
                                className: i()(h().desktopLogo, h().desktopOnly),
                                alt: "brancher.ai"
                            })]
                        }), (0, n.jsx)("div", {
                            className: h().links
                        })]
                    }), (0, n.jsxs)("div", {
                        className: h().links,
                        children: [(null == v ? void 0 : v.isAdmin) && (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)(j.Z, {
                                Button: (0, n.jsx)(w.Z, {
                                    icon: "admin-monogram",
                                    className: h().dropDownButton,
                                    kind: "secondaryFill"
                                }),
                                menu: [{
                                    label: "Clone",
                                    icon: "copy",
                                    type: "button",
                                    isDestructive: !1,
                                    onClick: O,
                                    disabled: !t || A
                                }],
                                alignment: "right"
                            })
                        }), s && !_ && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(y.Z, {
                                colorText: a,
                                colorBackground: o,
                                kind: "customInverse",
                                onClick: M,
                                size: "S",
                                children: (0, n.jsxs)("span", {
                                    children: ["Launch ", (0, n.jsx)("span", {
                                        className: h().extraActionText,
                                        children: "Your Own"
                                    }), " ", "App!"]
                                })
                            }), (0, n.jsx)(y.Z, {
                                colorText: a,
                                colorBackground: o,
                                kind: "custom",
                                onClick: I,
                                size: "S",
                                children: (0, n.jsxs)("span", {
                                    children: ["Sign In ", (0, n.jsx)("span", {
                                        className: h().extraActionText,
                                        children: "/ Up"
                                    })]
                                })
                            })]
                        }), _ && (0, n.jsxs)(n.Fragment, {
                            children: [((null == t ? void 0 : t.isOfficialTemplate) || (null == t ? void 0 : t.isCommunityTemplate)) && (0, n.jsx)(y.Z, {
                                colorText: a,
                                colorBackground: o,
                                kind: "customInverse",
                                onClick: O,
                                size: "S",
                                disabled: A,
                                children: "Use as Template!"
                            }), (0, n.jsx)(j.Z, {
                                Button: (0, n.jsx)("button", {
                                    className: h().dropDownButton,
                                    type: "button",
                                    children: (0, n.jsxs)("div", {
                                        className: h().userCredit,
                                        children: [(0, n.jsx)(f.Z, {
                                            givenName: null == v ? void 0 : v.displayName,
                                            src: null == v ? void 0 : v.avatar,
                                            size: b.E.M
                                        }), (0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("p", {
                                                className: i()(h().name, h().desktopOnly, S && h().colorOnLight, T && h().colorOnDark),
                                                children: null == v ? void 0 : v.displayName
                                            }), (0, n.jsxs)("p", {
                                                className: i()(h().credits, S && h().colorOnLight, T && h().colorOnDark),
                                                children: [(0, n.jsx)("strong", {
                                                    children: (null == v ? void 0 : v.credits) || 0
                                                }), " Credits"]
                                            })]
                                        })]
                                    })
                                }),
                                menu: [{
                                    label: "Apps",
                                    icon: "rocket-launch",
                                    type: "link",
                                    isDestructive: !1,
                                    href: "/apps"
                                }, {
                                    label: "Template Library",
                                    icon: "official-template",
                                    type: "link",
                                    isDestructive: !1,
                                    href: "/template-library"
                                }, {
                                    label: "Subscriptions",
                                    icon: "bolt",
                                    type: "link",
                                    isDestructive: !1,
                                    href: "/account/subscriptions"
                                }, {
                                    label: "Account",
                                    icon: "user-square",
                                    type: "link",
                                    isDestructive: !1,
                                    href: "/account/profile"
                                }, {
                                    label: "Logout",
                                    icon: "log-out-outline",
                                    type: "link",
                                    isDestructive: !1,
                                    href: "/api/auth/logout"
                                }],
                                alignment: "right"
                            })]
                        })]
                    })]
                })
            };
            var L = o(70767);
            let C = e => {
                let {
                    app: t,
                    title: o,
                    description: r,
                    children: a,
                    className: l,
                    colorBackground: u,
                    colorText: d,
                    featuredImage: _,
                    showBrancherBranding: m = !0,
                    showFooter: p = !0,
                    logo: v
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(c.Z, {
                        title: o,
                        description: r,
                        featuredImage: _
                    }), (0, n.jsx)(A, {
                        app: t,
                        colorText: d,
                        colorBackground: u,
                        showBrancherBranding: m,
                        logo: v
                    }), (0, n.jsx)("div", {
                        className: i()(s().content, l),
                        style: {
                            backgroundColor: u,
                            color: d
                        },
                        children: a
                    }), p && (0, n.jsx)(L.Z, {})]
                })
            };
            var D = C
        },
        74644: function(e, t) {
            "use strict";
            let o = e => "".concat(e / 16, "rem");
            t.Z = o
        },
        41819: function(e, t, o) {
            "use strict";
            var n = o(9669),
                r = o.n(n);
            let a = r().create(),
                {
                    CancelToken: i
                } = r();
            t.ZP = a
        },
        83779: function(e, t, o) {
            "use strict";
            var n = o(41819);
            t.Z = {
                fetchApps: () => n.ZP.get("/api/apps"),
                fetchApp: e => n.ZP.get("/api/apps/".concat(e)),
                fetchAppResults: e => n.ZP.get("/api/public/app-results/".concat(e)),
                createApp: () => n.ZP.post("/api/apps"),
                updateApp: (e, t) => n.ZP.patch("/api/apps/".concat(e), t),
                deleteApp: e => n.ZP.delete("/api/apps/".concat(e)),
                runApp: e => n.ZP.post("/api/apps/run", e),
                cloneApp: e => n.ZP.post("/api/apps/clone", e)
            }
        },
        66663: function(e, t, o) {
            "use strict";
            var n = o(9669),
                r = o.n(n);
            let a = e => r().get(e).then(e => e.data);
            t.Z = a
        },
        73340: function(e) {
            e.exports = {
                container: "ComingSoon_container__e0m9A",
                small: "ComingSoon_small__Ak6g2",
                medium: "ComingSoon_medium__lvY2W",
                large: "ComingSoon_large__cvPiN"
            }
        },
        6468: function(e) {
            e.exports = {
                container: "Avatar_container__WS86Q",
                withBorder: "Avatar_withBorder__unK_K",
                initialsContainer: "Avatar_initialsContainer__h5K_2",
                avatar: "Avatar_avatar__deSqZ"
            }
        },
        91632: function(e) {
            e.exports = {
                button: "Button_button__MqjEq",
                primaryButton: "Button_primaryButton__hJbSg",
                secondaryButton: "Button_secondaryButton__3IMXh",
                tertiaryButton: "Button_tertiaryButton__wP5j_",
                specialButton: "Button_specialButton__q6hsm",
                gradient: "Button_gradient__hjK08",
                alertButton: "Button_alertButton___Qjoq",
                secondaryAlertButton: "Button_secondaryAlertButton__8vIqa",
                customButton: "Button_customButton__RoHVu",
                iconContainer: "Button_iconContainer__WNKAX",
                withIcon: "Button_withIcon__QSSxM",
                sizeM: "Button_sizeM__fT69s",
                sizeS: "Button_sizeS__cyxkb",
                textButton: "Button_textButton__pow5I"
            }
        },
        8290: function(e) {
            e.exports = {
                container: "DropDown_container__loAw2",
                menu: "DropDown_menu__OKKn3",
                menuLeft: "DropDown_menuLeft__ZlB0G",
                menuCenter: "DropDown_menuCenter__j9OTX",
                menuRight: "DropDown_menuRight__bsX0l",
                menuBottom: "DropDown_menuBottom__GjC9u",
                menuBottomRight: "DropDown_menuBottomRight__EvjUY",
                menuBottomLeft: "DropDown_menuBottomLeft__aHI2J",
                menuTopRight: "DropDown_menuTopRight__fudWC",
                visibleMenu: "DropDown_visibleMenu__QuGZX",
                menuItem: "DropDown_menuItem__EuRSp",
                destructiveMenuItem: "DropDown_destructiveMenuItem__7VhSd",
                disabledMenuItem: "DropDown_disabledMenuItem__93t_3"
            }
        },
        19830: function(e) {
            e.exports = {
                container: "Toast_container__MZpXt",
                title: "Toast_title__oQavl",
                message: "Toast_message___db0i",
                readDoc: "Toast_readDoc__3RAyn",
                iconContainerError: "Toast_iconContainerError__T_dBU",
                iconContainerSuccess: "Toast_iconContainerSuccess__k3CaT"
            }
        },
        83871: function(e) {
            e.exports = {
                nav: "HeaderNav_nav__T1Hc7",
                scrolledNav: "HeaderNav_scrolledNav__D86z2",
                primaryNav: "HeaderNav_primaryNav__nyzrF",
                logoWrapper: "HeaderNav_logoWrapper__i6MMh",
                customDesktopLogo: "HeaderNav_customDesktopLogo__fHrTS",
                customMobileLogo: "HeaderNav_customMobileLogo__5mnmT",
                desktopLogo: "HeaderNav_desktopLogo__uYhcy",
                mobileLogo: "HeaderNav_mobileLogo__O2BxJ",
                links: "HeaderNav_links__7NqPm",
                link: "HeaderNav_link__uIFNm",
                dropDownButton: "HeaderNav_dropDownButton__w0_4C",
                userCredit: "HeaderNav_userCredit__28GQ5",
                name: "HeaderNav_name__ouYWd",
                credits: "HeaderNav_credits__zG4iJ",
                colorOnLight: "HeaderNav_colorOnLight__LzJLf",
                colorOnDark: "HeaderNav_colorOnDark__UoiCa",
                mobileOnly: "HeaderNav_mobileOnly__rY7eI",
                extraActionText: "HeaderNav_extraActionText__PZh_U",
                desktopOnly: "HeaderNav_desktopOnly__j4Myw"
            }
        },
        9482: function(e) {
            e.exports = {
                nav: "PublicLayout_nav__8UWWu",
                scrolledNav: "PublicLayout_scrolledNav__U8VjD",
                primaryNav: "PublicLayout_primaryNav__2Fx30",
                logoWrapper: "PublicLayout_logoWrapper__cVUe1",
                logo: "PublicLayout_logo__yG10w",
                links: "PublicLayout_links__a97IK",
                link: "PublicLayout_link__tz_oW",
                content: "PublicLayout_content__TNLZQ",
                footer: "PublicLayout_footer__Iu8Tg",
                footerLogo: "PublicLayout_footerLogo__bul3Q"
            }
        }
    }
]);