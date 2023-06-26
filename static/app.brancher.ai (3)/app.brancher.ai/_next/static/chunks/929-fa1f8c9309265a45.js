(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [929], {
        71079: function(t, e, o) {
            "use strict";
            var l = o(85893),
                n = o(67294),
                s = o(6767),
                a = o.n(s),
                i = o(20640),
                r = o.n(i),
                c = o(46293),
                u = o(4913),
                d = o(2797),
                p = o.n(d),
                h = o(20343),
                _ = o(49080),
                m = o(77817),
                v = o(9905),
                x = o(78519),
                g = o(56518);
            let j = t => {
                var e, o, s, i;
                let {
                    app: d,
                    appResult: j,
                    showBrancherBranding: b,
                    showShareOptions: y,
                    colorText: k,
                    colorBackground: N
                } = t, {
                    showSuccessMessage: C,
                    showErrorMessage: f
                } = (0, _.Z)(), A = (0, n.useRef)(null), w = a()(N).isLight(), M = a()(N).isDark(), [S, Z] = (0, n.useState)(!1), [O, L] = (0, n.useState)(!1), [B, I] = (0, n.useState)(), T = () => {
                    var t, e, o, l, n;
                    if (!j.outputs || (null === (t = j.outputs) || void 0 === t ? void 0 : t.length) === 0) {
                        f({
                            title: "Output not found"
                        });
                        return
                    }
                    let s = r()(null === (e = null === (o = null === (l = null === (n = j.outputs) || void 0 === n ? void 0 : n.filter(t => t.isVisible)) || void 0 === l ? void 0 : l.filter(t => "text" === t.type)) || void 0 === o ? void 0 : o.map(t => t.content)) || void 0 === e ? void 0 : e.join("\n\n"));
                    s && C({
                        title: "Output copied to your clipboard"
                    })
                }, z = async () => {
                    Z(!0), setTimeout(() => {
                        U()
                    }, 0)
                }, U = (0, n.useCallback)(async () => {
                    if (null !== A.current) try {
                        let t = await (0, c.YM)(A.current, {
                                cacheBust: !0
                            }),
                            e = document.createElement("a");
                        b ? e.download = "brancher.ai-".concat(j.hash, ".png") : e.download = "".concat(j.hash, ".png"), e.href = t, e.click()
                    } catch (t) {
                        console.error(t), f({
                            title: "Failed to save as image"
                        })
                    } finally {
                        setTimeout(() => {
                            Z(!1)
                        }, 500)
                    }
                }, [null == j ? void 0 : j.hash, b, f]), q = () => {
                    I({
                        url: "".concat("https://app.brancher.ai", "/r/").concat(j.hash),
                        type: "result"
                    }), L(!0)
                }, R = () => {
                    I({
                        url: "".concat("https://app.brancher.ai", "/").concat(null == d ? void 0 : d.hash),
                        type: "app"
                    }), L(!0)
                }, W = () => {
                    I(void 0), L(!1)
                }, D = t => {
                    let {
                        attributes: e,
                        content: o
                    } = t, {
                        href: n,
                        ...s
                    } = e;
                    return (0, l.jsx)(h.Z, {
                        href: n,
                        ...s,
                        style: {
                            color: k,
                            textDecoration: "underline"
                        },
                        children: o
                    })
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: p().outputSection,
                        children: [(null == j ? void 0 : j.currentStep) === (null == j ? void 0 : j.totalSteps) && (0, l.jsxs)("div", {
                            className: p().resultActions,
                            children: [y && (0, l.jsx)(v.Z, {
                                Button: (0, l.jsx)("button", {
                                    type: "button",
                                    className: p().resultActionButton,
                                    style: {
                                        borderColor: k,
                                        color: k
                                    },
                                    children: (0, l.jsxs)("div", {
                                        className: p().resultActionButtonLayout,
                                        children: [(0, l.jsx)(m.Z, {
                                            size: 32,
                                            icon: "share",
                                            color: k
                                        }), (0, l.jsx)("div", {
                                            className: p().isMobile,
                                            children: "Share"
                                        })]
                                    })
                                }),
                                menu: [{
                                    label: "Share Results Page",
                                    type: "button",
                                    isDestructive: !1,
                                    onClick: q
                                }, {
                                    label: "Share This App",
                                    type: "button",
                                    isDestructive: !1,
                                    onClick: R
                                }],
                                alignment: "left"
                            }), (0, l.jsx)("button", {
                                type: "button",
                                className: p().resultActionButton,
                                style: {
                                    borderColor: k,
                                    color: k
                                },
                                onClick: z,
                                children: (0, l.jsxs)("div", {
                                    className: p().resultActionButtonLayout,
                                    children: [(0, l.jsx)(m.Z, {
                                        size: 32,
                                        icon: "download",
                                        color: k
                                    }), (0, l.jsx)("div", {
                                        className: p().isMobile,
                                        children: "Save As Image"
                                    })]
                                })
                            }), (0, l.jsx)("button", {
                                type: "button",
                                className: p().resultActionButton,
                                style: {
                                    borderColor: k,
                                    color: k
                                },
                                onClick: T,
                                children: (0, l.jsxs)("div", {
                                    className: p().resultActionButtonLayout,
                                    children: [(0, l.jsx)(m.Z, {
                                        size: 32,
                                        icon: "text",
                                        color: k
                                    }), (0, l.jsx)("div", {
                                        className: p().isMobile,
                                        children: "Copy Text"
                                    })]
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: p().outputsWrapper,
                            style: {
                                borderColor: k
                            },
                            children: (0, l.jsxs)("div", {
                                ref: A,
                                style: {
                                    background: N
                                },
                                children: [(0, l.jsxs)("ul", {
                                    className: p().outputs,
                                    children: [null === (e = null == j ? void 0 : null === (o = j.outputs) || void 0 === o ? void 0 : o.filter(t => t.isVisible)) || void 0 === e ? void 0 : e.map((t, e) => {
                                        var o;
                                        return (0, l.jsxs)("li", {
                                            className: p().outputItem,
                                            style: {
                                                borderColor: k
                                            },
                                            children: [(null == t ? void 0 : t.type) === "text" && (0, l.jsx)("div", {
                                                className: p().outputText,
                                                children: (0, l.jsx)(u.Z, {
                                                    options: {
                                                        render: D
                                                    },
                                                    children: null == t ? void 0 : t.content
                                                })
                                            }), (null == t ? void 0 : t.type) === "images" && (0, l.jsx)("ul", {
                                                className: p().outputImages,
                                                children: null === (o = null == t ? void 0 : t.content) || void 0 === o ? void 0 : o.map(t => (0, l.jsx)("li", {
                                                    children: (0, l.jsx)(h.Z, {
                                                        href: t,
                                                        children: (0, l.jsx)("img", {
                                                            src: t,
                                                            alt: "Generated Image",
                                                            className: p().outputImage,
                                                            width: 1024,
                                                            height: 1024
                                                        })
                                                    })
                                                }, t))
                                            })]
                                        }, e)
                                    }), (null == j ? void 0 : j.currentStep) < (null == j ? void 0 : j.totalSteps) && !(null == j ? void 0 : j.error) && (0, l.jsx)("li", {
                                        className: p().outputItem,
                                        style: {
                                            borderColor: k
                                        },
                                        children: (0, l.jsx)(g.Z, {})
                                    }), (null == j ? void 0 : j.error) && (0, l.jsx)("li", {
                                        className: p().outputItem,
                                        style: {
                                            borderColor: k
                                        },
                                        children: (0, l.jsx)(h.Z, {
                                            style: {
                                                color: k,
                                                textDecoration: "underline"
                                            },
                                            href: null == j ? void 0 : null === (s = j.error) || void 0 === s ? void 0 : s.helpArticle,
                                            children: null == j ? void 0 : null === (i = j.error) || void 0 === i ? void 0 : i.message
                                        })
                                    })]
                                }), b && S && (0, l.jsxs)("div", {
                                    className: p().outputLogo,
                                    children: [M && (0, l.jsx)("img", {
                                        src: "/static/branding/logo-on-dark.svg",
                                        className: p().resultLogo,
                                        alt: "brancher.ai"
                                    }), w && (0, l.jsx)("img", {
                                        src: "/static/branding/logo-on-white.svg",
                                        className: p().resultLogo,
                                        alt: "brancher.ai"
                                    })]
                                })]
                            })
                        })]
                    }), (0, l.jsx)(x.Z, {
                        isOpen: O,
                        appTitle: null == d ? void 0 : d.appTitle,
                        onRequestClose: W,
                        shareUrl: null == B ? void 0 : B.url,
                        shareType: null == B ? void 0 : B.type
                    })]
                })
            };
            e.Z = j
        },
        78519: function(t, e, o) {
            "use strict";
            var l = o(85893),
                n = o(67294),
                s = o(20640),
                a = o.n(s),
                i = o(69111),
                r = o(1653),
                c = o(49770),
                u = o(73606),
                d = o(69761),
                p = o(58e3),
                h = o.n(p),
                _ = o(65256),
                m = o(49080),
                v = o(66663);
            let x = t => {
                let {
                    appTitle: e,
                    shareUrl: o,
                    shareType: s,
                    isOpen: p,
                    onRequestClose: x
                } = t, {
                    user: g
                } = (0, u.aF)(), {
                    data: j
                } = (0, c.Z)(g ? "/api/user" : null, v.Z), b = [o, (null == j ? void 0 : j.hash) ? "?utm_campaign=app_page%26utm_id=".concat(null == j ? void 0 : j.hash) : null].join(""), {
                    showSuccessMessage: y
                } = (0, m.Z)(), [k, N] = (0, n.useState)(!1), C = () => {
                    let t = "",
                        l = "".concat(o, "?utm_source=twitter%26utm_campaign=app_page%26utm_medium=social");
                    (null == j ? void 0 : j.hash) && (l += "%26utm_id=".concat(null == j ? void 0 : j.hash)), "app" === s ? t = (0, i.encode)("Try this AI-powered app called ".concat(encodeURIComponent(e), ": ").concat(l, " %0a\n\nMade using @brancherdotai")) : "result" === s && (t = (0, i.encode)("My results from using an AI-powered app called ".concat(encodeURIComponent(e), ": ").concat(l, " %0a\n\nMade using @brancherdotai"))), window.open("https://twitter.com/intent/tweet?text=".concat(t), "_blank")
                }, f = () => {
                    let t = "".concat(o, "?utm_source=linkedin%26utm_campaign=app_page%26utm_medium=social");
                    (null == j ? void 0 : j.hash) && (t += "%26utm_id=".concat(null == j ? void 0 : j.hash)), window.open("https://www.linkedin.com/shareArticle/?mini=true%26title=".concat(encodeURIComponent(e), "&url=").concat((0, i.encode)(t)), "_blank")
                }, A = () => {
                    let t = "".concat(o, "?utm_source=facebook%26utm_campaign=app_page%26utm_medium=social");
                    (null == j ? void 0 : j.hash) && (t += "%26utm_id=".concat(null == j ? void 0 : j.hash)), window.open("https://www.facebook.com/sharer/sharer.php?u=".concat((0, i.encode)(t)), "_blank")
                }, w = () => {
                    N(!k)
                }, M = () => {
                    if (!b) return;
                    let t = a()(b);
                    t && y({
                        title: "URL copied to your clipboard"
                    })
                };
                return (0, l.jsx)(d.Z, {
                    isOpen: p,
                    onRequestClose: x,
                    Content: (0, l.jsxs)("div", {
                        children: [(0, l.jsx)("div", {
                            className: h().appTitle,
                            children: e
                        }), k && b && (0, l.jsx)("div", {
                            className: h().qrWrapper,
                            children: (0, l.jsx)("div", {
                                className: h().qr,
                                children: (0, l.jsx)(r.Z, {
                                    value: b
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: h().socialMediaButtons,
                            children: [(0, l.jsx)(_.Z, {
                                icon: "logo-twitter",
                                onClick: C,
                                size: 60,
                                iconSize: 40,
                                kind: "secondary"
                            }), (0, l.jsx)(_.Z, {
                                icon: "logo-linkedin",
                                onClick: f,
                                size: 60,
                                iconSize: 40,
                                kind: "secondary"
                            }), (0, l.jsx)(_.Z, {
                                icon: "logo-facebook",
                                onClick: A,
                                size: 60,
                                iconSize: 40,
                                kind: "secondary"
                            }), (0, l.jsx)(_.Z, {
                                icon: "qr-code",
                                onClick: w,
                                size: 60,
                                iconSize: 40,
                                kind: "secondary"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: h().shareInput,
                            children: [(0, l.jsx)("div", {
                                className: h().shareUrl,
                                children: b
                            }), (0, l.jsx)("button", {
                                type: "button",
                                onClick: M,
                                className: h().copyLink,
                                children: "Copy Link"
                            })]
                        })]
                    })
                })
            };
            e.Z = x
        },
        56518: function(t, e, o) {
            "use strict";
            var l = o(85893);
            o(67294);
            var n = o(47923),
                s = o.n(n);
            let a = () => (0, l.jsx)("div", {
                className: s().container
            });
            e.Z = a
        },
        69761: function(t, e, o) {
            "use strict";
            var l = o(85893);
            o(67294);
            var n = o(83253),
                s = o.n(n),
                a = o(74644),
                i = o(57283),
                r = o.n(i),
                c = o(65256);
            let u = {
                    overlay: {
                        backgroundColor: "var(--colorOverlay)"
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        padding: "var(--spacing4) var(--spacing5)",
                        maxWidth: "95%",
                        border: "0",
                        overflow: "auto",
                        borderRadius: "var(--borderRadius2)",
                        backgroundColor: "var(--colorGray0)",
                        color: "var(--colorGray8)"
                    }
                },
                d = t => {
                    let {
                        title: e,
                        isOpen: o = !1,
                        width: n = (0, a.Z)(624),
                        onRequestClose: i,
                        Content: d,
                        Footer: p,
                        shouldCloseOnOverlayClick: h = !0
                    } = t;
                    return (0, l.jsx)(s(), {
                        isOpen: o,
                        onRequestClose: i,
                        contentLabel: e,
                        style: { ...u,
                            content: { ...u.content,
                                width: n
                            }
                        },
                        shouldCloseOnOverlayClick: h,
                        children: (0, l.jsxs)("div", {
                            "data-theme": "light",
                            children: [(0, l.jsxs)("div", {
                                className: r().header,
                                children: [(0, l.jsx)("h1", {
                                    className: r().modalTitle,
                                    children: e
                                }), (0, l.jsx)(c.Z, {
                                    kind: "secondary",
                                    icon: "x",
                                    onClick: i
                                })]
                            }), (0, l.jsxs)("form", {
                                children: [(0, l.jsx)("div", {
                                    className: r().content,
                                    children: d
                                }), (0, l.jsx)("div", {
                                    className: r().footer,
                                    children: p
                                })]
                            })]
                        })
                    })
                };
            e.Z = d
        },
        2797: function(t) {
            t.exports = {
                outputSection: "AppOutput_outputSection__ssbXw",
                outputsWrapper: "AppOutput_outputsWrapper__u7O4M",
                outputs: "AppOutput_outputs__WUq4T",
                outputItem: "AppOutput_outputItem__Uwlsi",
                outputText: "AppOutput_outputText__wQsB0",
                outputImages: "AppOutput_outputImages__Xdhlz",
                outputImage: "AppOutput_outputImage__ACBwx",
                outputLogo: "AppOutput_outputLogo__JGUEA",
                resultActions: "AppOutput_resultActions__ysAyg",
                resultActionButton: "AppOutput_resultActionButton__QM5CW",
                resultActionButtonLayout: "AppOutput_resultActionButtonLayout__g3u6v",
                resultLogo: "AppOutput_resultLogo__LXsWC",
                isMobile: "AppOutput_isMobile__FUq0K"
            }
        },
        58e3: function(t) {
            t.exports = {
                appTitle: "ShareModal_appTitle__jJzc_",
                qrWrapper: "ShareModal_qrWrapper__OVGd5",
                qr: "ShareModal_qr__uQCbU",
                socialMediaButtons: "ShareModal_socialMediaButtons__d0FAN",
                shareInput: "ShareModal_shareInput__yME0H",
                shareUrl: "ShareModal_shareUrl__zx5SH",
                copyLink: "ShareModal_copyLink__5eHZN"
            }
        },
        47923: function(t) {
            t.exports = {
                container: "Loader_container__VVcwk",
                rotation: "Loader_rotation__148Ud"
            }
        },
        57283: function(t) {
            t.exports = {
                header: "BaseModal_header___MWoM",
                modalTitle: "BaseModal_modalTitle__MSigN",
                content: "BaseModal_content__zbr90",
                footer: "BaseModal_footer__HbWws"
            }
        }
    }
]);