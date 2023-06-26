(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [950], {
        20640: function(e, r, t) {
            "use strict";
            var a = t(11742),
                o = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, r) {
                var t, i, n, s, l, c, u, d, p = !1;
                r || (r = {}), n = r.debug || !1;
                try {
                    if (l = a(), c = document.createRange(), u = document.getSelection(), (d = document.createElement("span")).textContent = e, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function(t) {
                            if (t.stopPropagation(), r.format) {
                                if (t.preventDefault(), void 0 === t.clipboardData) {
                                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var a = o[r.format] || o.default;
                                    window.clipboardData.setData(a, e)
                                } else t.clipboardData.clearData(), t.clipboardData.setData(r.format, e)
                            }
                            r.onCopy && (t.preventDefault(), r.onCopy(t.clipboardData))
                        }), document.body.appendChild(d), c.selectNodeContents(d), u.addRange(c), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                    p = !0
                } catch (a) {
                    n && console.error("unable to copy using execCommand: ", a), n && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(r.format || "text", e), r.onCopy && r.onCopy(window.clipboardData), p = !0
                    } catch (a) {
                        n && console.error("unable to copy using clipboardData: ", a), n && console.error("falling back to prompt"), t = "message" in r ? r.message : "Copy to clipboard: #{key}, Enter", i = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", s = t.replace(/#{\s*key\s*}/g, i), window.prompt(s, e)
                    }
                } finally {
                    u && ("function" == typeof u.removeRange ? u.removeRange(c) : u.removeAllRanges()), d && document.body.removeChild(d), l()
                }
                return p
            }
        },
        69111: function(e, r, t) {
            "use strict";
            var a = this && this.__assign || function() {
                return (a = Object.assign || function(e) {
                    for (var r, t = 1, a = arguments.length; t < a; t++)
                        for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = t(57206),
                i = t(92642),
                n = t(59726),
                s = a(a({}, o.namedReferences), {
                    all: o.namedReferences.html5
                }),
                l = {
                    specialChars: /[<>'"&]/g,
                    nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
                    nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
                    extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
                },
                c = {
                    mode: "specialChars",
                    level: "all",
                    numeric: "decimal"
                };
            r.encode = function(e, r) {
                var t = void 0 === r ? c : r,
                    a = t.mode,
                    o = void 0 === a ? "specialChars" : a,
                    i = t.numeric,
                    u = void 0 === i ? "decimal" : i,
                    d = t.level,
                    p = void 0 === d ? "all" : d;
                if (!e) return "";
                var g = l[o],
                    f = s[p].characters,
                    h = "hexadecimal" === u;
                g.lastIndex = 0;
                var t = g.exec(e);
                if (t) {
                    a = "";
                    var i = 0;
                    do {
                        i !== t.index && (a += e.substring(i, t.index));
                        var d = t[0],
                            m = f[d];
                        if (!m) {
                            var b = d.length > 1 ? n.getCodePoint(d, 0) : d.charCodeAt(0);
                            m = (h ? "&#x" + b.toString(16) : "&#" + b) + ";"
                        }
                        a += m, i = t.index + d.length
                    } while (t = g.exec(e));
                    i !== e.length && (a += e.substring(i))
                } else a = e;
                return a
            };
            var u = {
                    scope: "body",
                    level: "all"
                },
                d = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g,
                p = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,
                g = {
                    xml: {
                        strict: d,
                        attribute: p,
                        body: o.bodyRegExps.xml
                    },
                    html4: {
                        strict: d,
                        attribute: p,
                        body: o.bodyRegExps.html4
                    },
                    html5: {
                        strict: d,
                        attribute: p,
                        body: o.bodyRegExps.html5
                    }
                },
                f = a(a({}, g), {
                    all: g.html5
                }),
                h = String.fromCharCode,
                m = h(65533),
                b = {
                    level: "all"
                };
            r.decodeEntity = function(e, r) {
                var t = (void 0 === r ? b : r).level,
                    a = void 0 === t ? "all" : t;
                if (!e) return "";
                var t = e;
                e[e.length - 1];
                var o = s[a].entities[e];
                if (o) t = o;
                else if ("&" === e[0] && "#" === e[1]) {
                    var l = e[2],
                        c = "x" == l || "X" == l ? parseInt(e.substr(3), 16) : parseInt(e.substr(2));
                    t = c >= 1114111 ? m : c > 65535 ? n.fromCodePoint(c) : h(i.numericUnicodeMap[c] || c)
                }
                return t
            }, r.decode = function(e, r) {
                var t, a = void 0 === r ? u : r,
                    o = a.level,
                    l = void 0 === o ? "all" : o,
                    c = a.scope,
                    d = void 0 === c ? "xml" === l ? "strict" : "body" : c;
                if (!e) return "";
                var p = f[l][d],
                    g = s[l].entities,
                    b = "attribute" === d,
                    x = "strict" === d;
                p.lastIndex = 0;
                var v = p.exec(e);
                if (v) {
                    t = "";
                    var y = 0;
                    do {
                        y !== v.index && (t += e.substring(y, v.index));
                        var w = v[0],
                            E = w,
                            q = w[w.length - 1];
                        if (b && "=" === q) E = w;
                        else if (x && ";" !== q) E = w;
                        else {
                            var A = g[w];
                            if (A) E = A;
                            else if ("&" === w[0] && "#" === w[1]) {
                                var k = w[2],
                                    D = "x" == k || "X" == k ? parseInt(w.substr(3), 16) : parseInt(w.substr(2));
                                E = D >= 1114111 ? m : D > 65535 ? n.fromCodePoint(D) : h(i.numericUnicodeMap[D] || D)
                            }
                        }
                        t += E, y = v.index + w.length
                    } while (v = p.exec(e));
                    y !== e.length && (t += e.substring(y))
                } else t = e;
                return t
            }
        },
        57206: function(e, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.bodyRegExps = {
                xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
                html4: /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
                html5: /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
            }, r.namedReferences = {
                xml: {
                    entities: {
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&apos;": "'",
                        "&amp;": "&"
                    },
                    characters: {
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&apos;",
                        "&": "&amp;"
                    }
                },
                html4: {
                    entities: {
                        "&apos;": "'",
                        "&nbsp": "\xa0",
                        "&nbsp;": "\xa0",
                        "&iexcl": "\xa1",
                        "&iexcl;": "\xa1",
                        "&cent": "\xa2",
                        "&cent;": "\xa2",
                        "&pound": "\xa3",
                        "&pound;": "\xa3",
                        "&curren": "\xa4",
                        "&curren;": "\xa4",
                        "&yen": "\xa5",
                        "&yen;": "\xa5",
                        "&brvbar": "\xa6",
                        "&brvbar;": "\xa6",
                        "&sect": "\xa7",
                        "&sect;": "\xa7",
                        "&uml": "\xa8",
                        "&uml;": "\xa8",
                        "&copy": "\xa9",
                        "&copy;": "\xa9",
                        "&ordf": "\xaa",
                        "&ordf;": "\xaa",
                        "&laquo": "\xab",
                        "&laquo;": "\xab",
                        "&not": "\xac",
                        "&not;": "\xac",
                        "&shy": "\xad",
                        "&shy;": "\xad",
                        "&reg": "\xae",
                        "&reg;": "\xae",
                        "&macr": "\xaf",
                        "&macr;": "\xaf",
                        "&deg": "\xb0",
                        "&deg;": "\xb0",
                        "&plusmn": "\xb1",
                        "&plusmn;": "\xb1",
                        "&sup2": "\xb2",
                        "&sup2;": "\xb2",
                        "&sup3": "\xb3",
                        "&sup3;": "\xb3",
                        "&acute": "\xb4",
                        "&acute;": "\xb4",
                        "&micro": "\xb5",
                        "&micro;": "\xb5",
                        "&para": "\xb6",
                        "&para;": "\xb6",
                        "&middot": "\xb7",
                        "&middot;": "\xb7",
                        "&cedil": "\xb8",
                        "&cedil;": "\xb8",
                        "&sup1": "\xb9",
                        "&sup1;": "\xb9",
                        "&ordm": "\xba",
                        "&ordm;": "\xba",
                        "&raquo": "\xbb",
                        "&raquo;": "\xbb",
                        "&frac14": "\xbc",
                        "&frac14;": "\xbc",
                        "&frac12": "\xbd",
                        "&frac12;": "\xbd",
                        "&frac34": "\xbe",
                        "&frac34;": "\xbe",
                        "&iquest": "\xbf",
                        "&iquest;": "\xbf",
                        "&Agrave": "\xc0",
                        "&Agrave;": "\xc0",
                        "&Aacute": "\xc1",
                        "&Aacute;": "\xc1",
                        "&Acirc": "\xc2",
                        "&Acirc;": "\xc2",
                        "&Atilde": "\xc3",
                        "&Atilde;": "\xc3",
                        "&Auml": "\xc4",
                        "&Auml;": "\xc4",
                        "&Aring": "\xc5",
                        "&Aring;": "\xc5",
                        "&AElig": "\xc6",
                        "&AElig;": "\xc6",
                        "&Ccedil": "\xc7",
                        "&Ccedil;": "\xc7",
                        "&Egrave": "\xc8",
                        "&Egrave;": "\xc8",
                        "&Eacute": "\xc9",
                        "&Eacute;": "\xc9",
                        "&Ecirc": "\xca",
                        "&Ecirc;": "\xca",
                        "&Euml": "\xcb",
                        "&Euml;": "\xcb",
                        "&Igrave": "\xcc",
                        "&Igrave;": "\xcc",
                        "&Iacute": "\xcd",
                        "&Iacute;": "\xcd",
                        "&Icirc": "\xce",
                        "&Icirc;": "\xce",
                        "&Iuml": "\xcf",
                        "&Iuml;": "\xcf",
                        "&ETH": "\xd0",
                        "&ETH;": "\xd0",
                        "&Ntilde": "\xd1",
                        "&Ntilde;": "\xd1",
                        "&Ograve": "\xd2",
                        "&Ograve;": "\xd2",
                        "&Oacute": "\xd3",
                        "&Oacute;": "\xd3",
                        "&Ocirc": "\xd4",
                        "&Ocirc;": "\xd4",
                        "&Otilde": "\xd5",
                        "&Otilde;": "\xd5",
                        "&Ouml": "\xd6",
                        "&Ouml;": "\xd6",
                        "&times": "\xd7",
                        "&times;": "\xd7",
                        "&Oslash": "\xd8",
                        "&Oslash;": "\xd8",
                        "&Ugrave": "\xd9",
                        "&Ugrave;": "\xd9",
                        "&Uacute": "\xda",
                        "&Uacute;": "\xda",
                        "&Ucirc": "\xdb",
                        "&Ucirc;": "\xdb",
                        "&Uuml": "\xdc",
                        "&Uuml;": "\xdc",
                        "&Yacute": "\xdd",
                        "&Yacute;": "\xdd",
                        "&THORN": "\xde",
                        "&THORN;": "\xde",
                        "&szlig": "\xdf",
                        "&szlig;": "\xdf",
                        "&agrave": "\xe0",
                        "&agrave;": "\xe0",
                        "&aacute": "\xe1",
                        "&aacute;": "\xe1",
                        "&acirc": "\xe2",
                        "&acirc;": "\xe2",
                        "&atilde": "\xe3",
                        "&atilde;": "\xe3",
                        "&auml": "\xe4",
                        "&auml;": "\xe4",
                        "&aring": "\xe5",
                        "&aring;": "\xe5",
                        "&aelig": "\xe6",
                        "&aelig;": "\xe6",
                        "&ccedil": "\xe7",
                        "&ccedil;": "\xe7",
                        "&egrave": "\xe8",
                        "&egrave;": "\xe8",
                        "&eacute": "\xe9",
                        "&eacute;": "\xe9",
                        "&ecirc": "\xea",
                        "&ecirc;": "\xea",
                        "&euml": "\xeb",
                        "&euml;": "\xeb",
                        "&igrave": "\xec",
                        "&igrave;": "\xec",
                        "&iacute": "\xed",
                        "&iacute;": "\xed",
                        "&icirc": "\xee",
                        "&icirc;": "\xee",
                        "&iuml": "\xef",
                        "&iuml;": "\xef",
                        "&eth": "\xf0",
                        "&eth;": "\xf0",
                        "&ntilde": "\xf1",
                        "&ntilde;": "\xf1",
                        "&ograve": "\xf2",
                        "&ograve;": "\xf2",
                        "&oacute": "\xf3",
                        "&oacute;": "\xf3",
                        "&ocirc": "\xf4",
                        "&ocirc;": "\xf4",
                        "&otilde": "\xf5",
                        "&otilde;": "\xf5",
                        "&ouml": "\xf6",
                        "&ouml;": "\xf6",
                        "&divide": "\xf7",
                        "&divide;": "\xf7",
                        "&oslash": "\xf8",
                        "&oslash;": "\xf8",
                        "&ugrave": "\xf9",
                        "&ugrave;": "\xf9",
                        "&uacute": "\xfa",
                        "&uacute;": "\xfa",
                        "&ucirc": "\xfb",
                        "&ucirc;": "\xfb",
                        "&uuml": "\xfc",
                        "&uuml;": "\xfc",
                        "&yacute": "\xfd",
                        "&yacute;": "\xfd",
                        "&thorn": "\xfe",
                        "&thorn;": "\xfe",
                        "&yuml": "\xff",
                        "&yuml;": "\xff",
                        "&quot": '"',
                        "&quot;": '"',
                        "&amp": "&",
                        "&amp;": "&",
                        "&lt": "<",
                        "&lt;": "<",
                        "&gt": ">",
                        "&gt;": ">",
                        "&OElig;": "Œ",
                        "&oelig;": "œ",
                        "&Scaron;": "Š",
                        "&scaron;": "š",
                        "&Yuml;": "Ÿ",
                        "&circ;": "ˆ",
                        "&tilde;": "˜",
                        "&ensp;": " ",
                        "&emsp;": " ",
                        "&thinsp;": " ",
                        "&zwnj;": "‌",
                        "&zwj;": "‍",
                        "&lrm;": "‎",
                        "&rlm;": "‏",
                        "&ndash;": "–",
                        "&mdash;": "—",
                        "&lsquo;": "‘",
                        "&rsquo;": "’",
                        "&sbquo;": "‚",
                        "&ldquo;": "“",
                        "&rdquo;": "”",
                        "&bdquo;": "„",
                        "&dagger;": "†",
                        "&Dagger;": "‡",
                        "&permil;": "‰",
                        "&lsaquo;": "‹",
                        "&rsaquo;": "›",
                        "&euro;": "€",
                        "&fnof;": "ƒ",
                        "&Alpha;": "Α",
                        "&Beta;": "Β",
                        "&Gamma;": "Γ",
                        "&Delta;": "Δ",
                        "&Epsilon;": "Ε",
                        "&Zeta;": "Ζ",
                        "&Eta;": "Η",
                        "&Theta;": "Θ",
                        "&Iota;": "Ι",
                        "&Kappa;": "Κ",
                        "&Lambda;": "Λ",
                        "&Mu;": "Μ",
                        "&Nu;": "Ν",
                        "&Xi;": "Ξ",
                        "&Omicron;": "Ο",
                        "&Pi;": "Π",
                        "&Rho;": "Ρ",
                        "&Sigma;": "Σ",
                        "&Tau;": "Τ",
                        "&Upsilon;": "Υ",
                        "&Phi;": "Φ",
                        "&Chi;": "Χ",
                        "&Psi;": "Ψ",
                        "&Omega;": "Ω",
                        "&alpha;": "α",
                        "&beta;": "β",
                        "&gamma;": "γ",
                        "&delta;": "δ",
                        "&epsilon;": "ε",
                        "&zeta;": "ζ",
                        "&eta;": "η",
                        "&theta;": "θ",
                        "&iota;": "ι",
                        "&kappa;": "κ",
                        "&lambda;": "λ",
                        "&mu;": "μ",
                        "&nu;": "ν",
                        "&xi;": "ξ",
                        "&omicron;": "ο",
                        "&pi;": "π",
                        "&rho;": "ρ",
                        "&sigmaf;": "ς",
                        "&sigma;": "σ",
                        "&tau;": "τ",
                        "&upsilon;": "υ",
                        "&phi;": "φ",
                        "&chi;": "χ",
                        "&psi;": "ψ",
                        "&omega;": "ω",
                        "&thetasym;": "ϑ",
                        "&upsih;": "ϒ",
                        "&piv;": "ϖ",
                        "&bull;": "•",
                        "&hellip;": "…",
                        "&prime;": "′",
                        "&Prime;": "″",
                        "&oline;": "‾",
                        "&frasl;": "⁄",
                        "&weierp;": "℘",
                        "&image;": "ℑ",
                        "&real;": "ℜ",
                        "&trade;": "™",
                        "&alefsym;": "ℵ",
                        "&larr;": "←",
                        "&uarr;": "↑",
                        "&rarr;": "→",
                        "&darr;": "↓",
                        "&harr;": "↔",
                        "&crarr;": "↵",
                        "&lArr;": "⇐",
                        "&uArr;": "⇑",
                        "&rArr;": "⇒",
                        "&dArr;": "⇓",
                        "&hArr;": "⇔",
                        "&forall;": "∀",
                        "&part;": "∂",
                        "&exist;": "∃",
                        "&empty;": "∅",
                        "&nabla;": "∇",
                        "&isin;": "∈",
                        "&notin;": "∉",
                        "&ni;": "∋",
                        "&prod;": "∏",
                        "&sum;": "∑",
                        "&minus;": "−",
                        "&lowast;": "∗",
                        "&radic;": "√",
                        "&prop;": "∝",
                        "&infin;": "∞",
                        "&ang;": "∠",
                        "&and;": "∧",
                        "&or;": "∨",
                        "&cap;": "∩",
                        "&cup;": "∪",
                        "&int;": "∫",
                        "&there4;": "∴",
                        "&sim;": "∼",
                        "&cong;": "≅",
                        "&asymp;": "≈",
                        "&ne;": "≠",
                        "&equiv;": "≡",
                        "&le;": "≤",
                        "&ge;": "≥",
                        "&sub;": "⊂",
                        "&sup;": "⊃",
                        "&nsub;": "⊄",
                        "&sube;": "⊆",
                        "&supe;": "⊇",
                        "&oplus;": "⊕",
                        "&otimes;": "⊗",
                        "&perp;": "⊥",
                        "&sdot;": "⋅",
                        "&lceil;": "⌈",
                        "&rceil;": "⌉",
                        "&lfloor;": "⌊",
                        "&rfloor;": "⌋",
                        "&lang;": "〈",
                        "&rang;": "〉",
                        "&loz;": "◊",
                        "&spades;": "♠",
                        "&clubs;": "♣",
                        "&hearts;": "♥",
                        "&diams;": "♦"
                    },
                    characters: {
                        "'": "&apos;",
                        "\xa0": "&nbsp;",
                        "\xa1": "&iexcl;",
                        "\xa2": "&cent;",
                        "\xa3": "&pound;",
                        "\xa4": "&curren;",
                        "\xa5": "&yen;",
                        "\xa6": "&brvbar;",
                        "\xa7": "&sect;",
                        "\xa8": "&uml;",
                        "\xa9": "&copy;",
                        ª: "&ordf;",
                        "\xab": "&laquo;",
                        "\xac": "&not;",
                        "\xad": "&shy;",
                        "\xae": "&reg;",
                        "\xaf": "&macr;",
                        "\xb0": "&deg;",
                        "\xb1": "&plusmn;",
                        "\xb2": "&sup2;",
                        "\xb3": "&sup3;",
                        "\xb4": "&acute;",
                        µ: "&micro;",
                        "\xb6": "&para;",
                        "\xb7": "&middot;",
                        "\xb8": "&cedil;",
                        "\xb9": "&sup1;",
                        º: "&ordm;",
                        "\xbb": "&raquo;",
                        "\xbc": "&frac14;",
                        "\xbd": "&frac12;",
                        "\xbe": "&frac34;",
                        "\xbf": "&iquest;",
                        À: "&Agrave;",
                        Á: "&Aacute;",
                        Â: "&Acirc;",
                        Ã: "&Atilde;",
                        Ä: "&Auml;",
                        Å: "&Aring;",
                        Æ: "&AElig;",
                        Ç: "&Ccedil;",
                        È: "&Egrave;",
                        É: "&Eacute;",
                        Ê: "&Ecirc;",
                        Ë: "&Euml;",
                        Ì: "&Igrave;",
                        Í: "&Iacute;",
                        Î: "&Icirc;",
                        Ï: "&Iuml;",
                        Ð: "&ETH;",
                        Ñ: "&Ntilde;",
                        Ò: "&Ograve;",
                        Ó: "&Oacute;",
                        Ô: "&Ocirc;",
                        Õ: "&Otilde;",
                        Ö: "&Ouml;",
                        "\xd7": "&times;",
                        Ø: "&Oslash;",
                        Ù: "&Ugrave;",
                        Ú: "&Uacute;",
                        Û: "&Ucirc;",
                        Ü: "&Uuml;",
                        Ý: "&Yacute;",
                        Þ: "&THORN;",
                        ß: "&szlig;",
                        à: "&agrave;",
                        á: "&aacute;",
                        â: "&acirc;",
                        ã: "&atilde;",
                        ä: "&auml;",
                        å: "&aring;",
                        æ: "&aelig;",
                        ç: "&ccedil;",
                        è: "&egrave;",
                        é: "&eacute;",
                        ê: "&ecirc;",
                        ë: "&euml;",
                        ì: "&igrave;",
                        í: "&iacute;",
                        î: "&icirc;",
                        ï: "&iuml;",
                        ð: "&eth;",
                        ñ: "&ntilde;",
                        ò: "&ograve;",
                        ó: "&oacute;",
                        ô: "&ocirc;",
                        õ: "&otilde;",
                        ö: "&ouml;",
                        "\xf7": "&divide;",
                        ø: "&oslash;",
                        ù: "&ugrave;",
                        ú: "&uacute;",
                        û: "&ucirc;",
                        ü: "&uuml;",
                        ý: "&yacute;",
                        þ: "&thorn;",
                        ÿ: "&yuml;",
                        '"': "&quot;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        Œ: "&OElig;",
                        œ: "&oelig;",
                        Š: "&Scaron;",
                        š: "&scaron;",
                        Ÿ: "&Yuml;",
                        ˆ: "&circ;",
                        "˜": "&tilde;",
                        " ": "&ensp;",
                        " ": "&emsp;",
                        " ": "&thinsp;",
                        "‌": "&zwnj;",
                        "‍": "&zwj;",
                        "‎": "&lrm;",
                        "‏": "&rlm;",
                        "–": "&ndash;",
                        "—": "&mdash;",
                        "‘": "&lsquo;",
                        "’": "&rsquo;",
                        "‚": "&sbquo;",
                        "“": "&ldquo;",
                        "”": "&rdquo;",
                        "„": "&bdquo;",
                        "†": "&dagger;",
                        "‡": "&Dagger;",
                        "‰": "&permil;",
                        "‹": "&lsaquo;",
                        "›": "&rsaquo;",
                        "€": "&euro;",
                        ƒ: "&fnof;",
                        Α: "&Alpha;",
                        Β: "&Beta;",
                        Γ: "&Gamma;",
                        Δ: "&Delta;",
                        Ε: "&Epsilon;",
                        Ζ: "&Zeta;",
                        Η: "&Eta;",
                        Θ: "&Theta;",
                        Ι: "&Iota;",
                        Κ: "&Kappa;",
                        Λ: "&Lambda;",
                        Μ: "&Mu;",
                        Ν: "&Nu;",
                        Ξ: "&Xi;",
                        Ο: "&Omicron;",
                        Π: "&Pi;",
                        Ρ: "&Rho;",
                        Σ: "&Sigma;",
                        Τ: "&Tau;",
                        Υ: "&Upsilon;",
                        Φ: "&Phi;",
                        Χ: "&Chi;",
                        Ψ: "&Psi;",
                        Ω: "&Omega;",
                        α: "&alpha;",
                        β: "&beta;",
                        γ: "&gamma;",
                        δ: "&delta;",
                        ε: "&epsilon;",
                        ζ: "&zeta;",
                        η: "&eta;",
                        θ: "&theta;",
                        ι: "&iota;",
                        κ: "&kappa;",
                        λ: "&lambda;",
                        μ: "&mu;",
                        ν: "&nu;",
                        ξ: "&xi;",
                        ο: "&omicron;",
                        π: "&pi;",
                        ρ: "&rho;",
                        ς: "&sigmaf;",
                        σ: "&sigma;",
                        τ: "&tau;",
                        υ: "&upsilon;",
                        φ: "&phi;",
                        χ: "&chi;",
                        ψ: "&psi;",
                        ω: "&omega;",
                        ϑ: "&thetasym;",
                        ϒ: "&upsih;",
                        ϖ: "&piv;",
                        "•": "&bull;",
                        "…": "&hellip;",
                        "′": "&prime;",
                        "″": "&Prime;",
                        "‾": "&oline;",
                        "⁄": "&frasl;",
                        ℘: "&weierp;",
                        ℑ: "&image;",
                        ℜ: "&real;",
                        "™": "&trade;",
                        ℵ: "&alefsym;",
                        "←": "&larr;",
                        "↑": "&uarr;",
                        "→": "&rarr;",
                        "↓": "&darr;",
                        "↔": "&harr;",
                        "↵": "&crarr;",
                        "⇐": "&lArr;",
                        "⇑": "&uArr;",
                        "⇒": "&rArr;",
                        "⇓": "&dArr;",
                        "⇔": "&hArr;",
                        "∀": "&forall;",
                        "∂": "&part;",
                        "∃": "&exist;",
                        "∅": "&empty;",
                        "∇": "&nabla;",
                        "∈": "&isin;",
                        "∉": "&notin;",
                        "∋": "&ni;",
                        "∏": "&prod;",
                        "∑": "&sum;",
                        "−": "&minus;",
                        "∗": "&lowast;",
                        "√": "&radic;",
                        "∝": "&prop;",
                        "∞": "&infin;",
                        "∠": "&ang;",
                        "∧": "&and;",
                        "∨": "&or;",
                        "∩": "&cap;",
                        "∪": "&cup;",
                        "∫": "&int;",
                        "∴": "&there4;",
                        "∼": "&sim;",
                        "≅": "&cong;",
                        "≈": "&asymp;",
                        "≠": "&ne;",
                        "≡": "&equiv;",
                        "≤": "&le;",
                        "≥": "&ge;",
                        "⊂": "&sub;",
                        "⊃": "&sup;",
                        "⊄": "&nsub;",
                        "⊆": "&sube;",
                        "⊇": "&supe;",
                        "⊕": "&oplus;",
                        "⊗": "&otimes;",
                        "⊥": "&perp;",
                        "⋅": "&sdot;",
                        "⌈": "&lceil;",
                        "⌉": "&rceil;",
                        "⌊": "&lfloor;",
                        "⌋": "&rfloor;",
                        "〈": "&lang;",
                        "〉": "&rang;",
                        "◊": "&loz;",
                        "♠": "&spades;",
                        "♣": "&clubs;",
                        "♥": "&hearts;",
                        "♦": "&diams;"
                    }
                },
                html5: {
                    entities: {
                        "&AElig": "\xc6",
                        "&AElig;": "\xc6",
                        "&AMP": "&",
                        "&AMP;": "&",
                        "&Aacute": "\xc1",
                        "&Aacute;": "\xc1",
                        "&Abreve;": "Ă",
                        "&Acirc": "\xc2",
                        "&Acirc;": "\xc2",
                        "&Acy;": "А",
                        "&Afr;": "\uD835\uDD04",
                        "&Agrave": "\xc0",
                        "&Agrave;": "\xc0",
                        "&Alpha;": "Α",
                        "&Amacr;": "Ā",
                        "&And;": "⩓",
                        "&Aogon;": "Ą",
                        "&Aopf;": "\uD835\uDD38",
                        "&ApplyFunction;": "⁡",
                        "&Aring": "\xc5",
                        "&Aring;": "\xc5",
                        "&Ascr;": "\uD835\uDC9C",
                        "&Assign;": "≔",
                        "&Atilde": "\xc3",
                        "&Atilde;": "\xc3",
                        "&Auml": "\xc4",
                        "&Auml;": "\xc4",
                        "&Backslash;": "∖",
                        "&Barv;": "⫧",
                        "&Barwed;": "⌆",
                        "&Bcy;": "Б",
                        "&Because;": "∵",
                        "&Bernoullis;": "ℬ",
                        "&Beta;": "Β",
                        "&Bfr;": "\uD835\uDD05",
                        "&Bopf;": "\uD835\uDD39",
                        "&Breve;": "˘",
                        "&Bscr;": "ℬ",
                        "&Bumpeq;": "≎",
                        "&CHcy;": "Ч",
                        "&COPY": "\xa9",
                        "&COPY;": "\xa9",
                        "&Cacute;": "Ć",
                        "&Cap;": "⋒",
                        "&CapitalDifferentialD;": "ⅅ",
                        "&Cayleys;": "ℭ",
                        "&Ccaron;": "Č",
                        "&Ccedil": "\xc7",
                        "&Ccedil;": "\xc7",
                        "&Ccirc;": "Ĉ",
                        "&Cconint;": "∰",
                        "&Cdot;": "Ċ",
                        "&Cedilla;": "\xb8",
                        "&CenterDot;": "\xb7",
                        "&Cfr;": "ℭ",
                        "&Chi;": "Χ",
                        "&CircleDot;": "⊙",
                        "&CircleMinus;": "⊖",
                        "&CirclePlus;": "⊕",
                        "&CircleTimes;": "⊗",
                        "&ClockwiseContourIntegral;": "∲",
                        "&CloseCurlyDoubleQuote;": "”",
                        "&CloseCurlyQuote;": "’",
                        "&Colon;": "∷",
                        "&Colone;": "⩴",
                        "&Congruent;": "≡",
                        "&Conint;": "∯",
                        "&ContourIntegral;": "∮",
                        "&Copf;": "ℂ",
                        "&Coproduct;": "∐",
                        "&CounterClockwiseContourIntegral;": "∳",
                        "&Cross;": "⨯",
                        "&Cscr;": "\uD835\uDC9E",
                        "&Cup;": "⋓",
                        "&CupCap;": "≍",
                        "&DD;": "ⅅ",
                        "&DDotrahd;": "⤑",
                        "&DJcy;": "Ђ",
                        "&DScy;": "Ѕ",
                        "&DZcy;": "Џ",
                        "&Dagger;": "‡",
                        "&Darr;": "↡",
                        "&Dashv;": "⫤",
                        "&Dcaron;": "Ď",
                        "&Dcy;": "Д",
                        "&Del;": "∇",
                        "&Delta;": "Δ",
                        "&Dfr;": "\uD835\uDD07",
                        "&DiacriticalAcute;": "\xb4",
                        "&DiacriticalDot;": "˙",
                        "&DiacriticalDoubleAcute;": "˝",
                        "&DiacriticalGrave;": "`",
                        "&DiacriticalTilde;": "˜",
                        "&Diamond;": "⋄",
                        "&DifferentialD;": "ⅆ",
                        "&Dopf;": "\uD835\uDD3B",
                        "&Dot;": "\xa8",
                        "&DotDot;": "⃜",
                        "&DotEqual;": "≐",
                        "&DoubleContourIntegral;": "∯",
                        "&DoubleDot;": "\xa8",
                        "&DoubleDownArrow;": "⇓",
                        "&DoubleLeftArrow;": "⇐",
                        "&DoubleLeftRightArrow;": "⇔",
                        "&DoubleLeftTee;": "⫤",
                        "&DoubleLongLeftArrow;": "⟸",
                        "&DoubleLongLeftRightArrow;": "⟺",
                        "&DoubleLongRightArrow;": "⟹",
                        "&DoubleRightArrow;": "⇒",
                        "&DoubleRightTee;": "⊨",
                        "&DoubleUpArrow;": "⇑",
                        "&DoubleUpDownArrow;": "⇕",
                        "&DoubleVerticalBar;": "∥",
                        "&DownArrow;": "↓",
                        "&DownArrowBar;": "⤓",
                        "&DownArrowUpArrow;": "⇵",
                        "&DownBreve;": "̑",
                        "&DownLeftRightVector;": "⥐",
                        "&DownLeftTeeVector;": "⥞",
                        "&DownLeftVector;": "↽",
                        "&DownLeftVectorBar;": "⥖",
                        "&DownRightTeeVector;": "⥟",
                        "&DownRightVector;": "⇁",
                        "&DownRightVectorBar;": "⥗",
                        "&DownTee;": "⊤",
                        "&DownTeeArrow;": "↧",
                        "&Downarrow;": "⇓",
                        "&Dscr;": "\uD835\uDC9F",
                        "&Dstrok;": "Đ",
                        "&ENG;": "Ŋ",
                        "&ETH": "\xd0",
                        "&ETH;": "\xd0",
                        "&Eacute": "\xc9",
                        "&Eacute;": "\xc9",
                        "&Ecaron;": "Ě",
                        "&Ecirc": "\xca",
                        "&Ecirc;": "\xca",
                        "&Ecy;": "Э",
                        "&Edot;": "Ė",
                        "&Efr;": "\uD835\uDD08",
                        "&Egrave": "\xc8",
                        "&Egrave;": "\xc8",
                        "&Element;": "∈",
                        "&Emacr;": "Ē",
                        "&EmptySmallSquare;": "◻",
                        "&EmptyVerySmallSquare;": "▫",
                        "&Eogon;": "Ę",
                        "&Eopf;": "\uD835\uDD3C",
                        "&Epsilon;": "Ε",
                        "&Equal;": "⩵",
                        "&EqualTilde;": "≂",
                        "&Equilibrium;": "⇌",
                        "&Escr;": "ℰ",
                        "&Esim;": "⩳",
                        "&Eta;": "Η",
                        "&Euml": "\xcb",
                        "&Euml;": "\xcb",
                        "&Exists;": "∃",
                        "&ExponentialE;": "ⅇ",
                        "&Fcy;": "Ф",
                        "&Ffr;": "\uD835\uDD09",
                        "&FilledSmallSquare;": "◼",
                        "&FilledVerySmallSquare;": "▪",
                        "&Fopf;": "\uD835\uDD3D",
                        "&ForAll;": "∀",
                        "&Fouriertrf;": "ℱ",
                        "&Fscr;": "ℱ",
                        "&GJcy;": "Ѓ",
                        "&GT": ">",
                        "&GT;": ">",
                        "&Gamma;": "Γ",
                        "&Gammad;": "Ϝ",
                        "&Gbreve;": "Ğ",
                        "&Gcedil;": "Ģ",
                        "&Gcirc;": "Ĝ",
                        "&Gcy;": "Г",
                        "&Gdot;": "Ġ",
                        "&Gfr;": "\uD835\uDD0A",
                        "&Gg;": "⋙",
                        "&Gopf;": "\uD835\uDD3E",
                        "&GreaterEqual;": "≥",
                        "&GreaterEqualLess;": "⋛",
                        "&GreaterFullEqual;": "≧",
                        "&GreaterGreater;": "⪢",
                        "&GreaterLess;": "≷",
                        "&GreaterSlantEqual;": "⩾",
                        "&GreaterTilde;": "≳",
                        "&Gscr;": "\uD835\uDCA2",
                        "&Gt;": "≫",
                        "&HARDcy;": "Ъ",
                        "&Hacek;": "ˇ",
                        "&Hat;": "^",
                        "&Hcirc;": "Ĥ",
                        "&Hfr;": "ℌ",
                        "&HilbertSpace;": "ℋ",
                        "&Hopf;": "ℍ",
                        "&HorizontalLine;": "─",
                        "&Hscr;": "ℋ",
                        "&Hstrok;": "Ħ",
                        "&HumpDownHump;": "≎",
                        "&HumpEqual;": "≏",
                        "&IEcy;": "Е",
                        "&IJlig;": "Ĳ",
                        "&IOcy;": "Ё",
                        "&Iacute": "\xcd",
                        "&Iacute;": "\xcd",
                        "&Icirc": "\xce",
                        "&Icirc;": "\xce",
                        "&Icy;": "И",
                        "&Idot;": "İ",
                        "&Ifr;": "ℑ",
                        "&Igrave": "\xcc",
                        "&Igrave;": "\xcc",
                        "&Im;": "ℑ",
                        "&Imacr;": "Ī",
                        "&ImaginaryI;": "ⅈ",
                        "&Implies;": "⇒",
                        "&Int;": "∬",
                        "&Integral;": "∫",
                        "&Intersection;": "⋂",
                        "&InvisibleComma;": "⁣",
                        "&InvisibleTimes;": "⁢",
                        "&Iogon;": "Į",
                        "&Iopf;": "\uD835\uDD40",
                        "&Iota;": "Ι",
                        "&Iscr;": "ℐ",
                        "&Itilde;": "Ĩ",
                        "&Iukcy;": "І",
                        "&Iuml": "\xcf",
                        "&Iuml;": "\xcf",
                        "&Jcirc;": "Ĵ",
                        "&Jcy;": "Й",
                        "&Jfr;": "\uD835\uDD0D",
                        "&Jopf;": "\uD835\uDD41",
                        "&Jscr;": "\uD835\uDCA5",
                        "&Jsercy;": "Ј",
                        "&Jukcy;": "Є",
                        "&KHcy;": "Х",
                        "&KJcy;": "Ќ",
                        "&Kappa;": "Κ",
                        "&Kcedil;": "Ķ",
                        "&Kcy;": "К",
                        "&Kfr;": "\uD835\uDD0E",
                        "&Kopf;": "\uD835\uDD42",
                        "&Kscr;": "\uD835\uDCA6",
                        "&LJcy;": "Љ",
                        "&LT": "<",
                        "&LT;": "<",
                        "&Lacute;": "Ĺ",
                        "&Lambda;": "Λ",
                        "&Lang;": "⟪",
                        "&Laplacetrf;": "ℒ",
                        "&Larr;": "↞",
                        "&Lcaron;": "Ľ",
                        "&Lcedil;": "Ļ",
                        "&Lcy;": "Л",
                        "&LeftAngleBracket;": "⟨",
                        "&LeftArrow;": "←",
                        "&LeftArrowBar;": "⇤",
                        "&LeftArrowRightArrow;": "⇆",
                        "&LeftCeiling;": "⌈",
                        "&LeftDoubleBracket;": "⟦",
                        "&LeftDownTeeVector;": "⥡",
                        "&LeftDownVector;": "⇃",
                        "&LeftDownVectorBar;": "⥙",
                        "&LeftFloor;": "⌊",
                        "&LeftRightArrow;": "↔",
                        "&LeftRightVector;": "⥎",
                        "&LeftTee;": "⊣",
                        "&LeftTeeArrow;": "↤",
                        "&LeftTeeVector;": "⥚",
                        "&LeftTriangle;": "⊲",
                        "&LeftTriangleBar;": "⧏",
                        "&LeftTriangleEqual;": "⊴",
                        "&LeftUpDownVector;": "⥑",
                        "&LeftUpTeeVector;": "⥠",
                        "&LeftUpVector;": "↿",
                        "&LeftUpVectorBar;": "⥘",
                        "&LeftVector;": "↼",
                        "&LeftVectorBar;": "⥒",
                        "&Leftarrow;": "⇐",
                        "&Leftrightarrow;": "⇔",
                        "&LessEqualGreater;": "⋚",
                        "&LessFullEqual;": "≦",
                        "&LessGreater;": "≶",
                        "&LessLess;": "⪡",
                        "&LessSlantEqual;": "⩽",
                        "&LessTilde;": "≲",
                        "&Lfr;": "\uD835\uDD0F",
                        "&Ll;": "⋘",
                        "&Lleftarrow;": "⇚",
                        "&Lmidot;": "Ŀ",
                        "&LongLeftArrow;": "⟵",
                        "&LongLeftRightArrow;": "⟷",
                        "&LongRightArrow;": "⟶",
                        "&Longleftarrow;": "⟸",
                        "&Longleftrightarrow;": "⟺",
                        "&Longrightarrow;": "⟹",
                        "&Lopf;": "\uD835\uDD43",
                        "&LowerLeftArrow;": "↙",
                        "&LowerRightArrow;": "↘",
                        "&Lscr;": "ℒ",
                        "&Lsh;": "↰",
                        "&Lstrok;": "Ł",
                        "&Lt;": "≪",
                        "&Map;": "⤅",
                        "&Mcy;": "М",
                        "&MediumSpace;": " ",
                        "&Mellintrf;": "ℳ",
                        "&Mfr;": "\uD835\uDD10",
                        "&MinusPlus;": "∓",
                        "&Mopf;": "\uD835\uDD44",
                        "&Mscr;": "ℳ",
                        "&Mu;": "Μ",
                        "&NJcy;": "Њ",
                        "&Nacute;": "Ń",
                        "&Ncaron;": "Ň",
                        "&Ncedil;": "Ņ",
                        "&Ncy;": "Н",
                        "&NegativeMediumSpace;": "​",
                        "&NegativeThickSpace;": "​",
                        "&NegativeThinSpace;": "​",
                        "&NegativeVeryThinSpace;": "​",
                        "&NestedGreaterGreater;": "≫",
                        "&NestedLessLess;": "≪",
                        "&NewLine;": "\n",
                        "&Nfr;": "\uD835\uDD11",
                        "&NoBreak;": "⁠",
                        "&NonBreakingSpace;": "\xa0",
                        "&Nopf;": "ℕ",
                        "&Not;": "⫬",
                        "&NotCongruent;": "≢",
                        "&NotCupCap;": "≭",
                        "&NotDoubleVerticalBar;": "∦",
                        "&NotElement;": "∉",
                        "&NotEqual;": "≠",
                        "&NotEqualTilde;": "≂̸",
                        "&NotExists;": "∄",
                        "&NotGreater;": "≯",
                        "&NotGreaterEqual;": "≱",
                        "&NotGreaterFullEqual;": "≧̸",
                        "&NotGreaterGreater;": "≫̸",
                        "&NotGreaterLess;": "≹",
                        "&NotGreaterSlantEqual;": "⩾̸",
                        "&NotGreaterTilde;": "≵",
                        "&NotHumpDownHump;": "≎̸",
                        "&NotHumpEqual;": "≏̸",
                        "&NotLeftTriangle;": "⋪",
                        "&NotLeftTriangleBar;": "⧏̸",
                        "&NotLeftTriangleEqual;": "⋬",
                        "&NotLess;": "≮",
                        "&NotLessEqual;": "≰",
                        "&NotLessGreater;": "≸",
                        "&NotLessLess;": "≪̸",
                        "&NotLessSlantEqual;": "⩽̸",
                        "&NotLessTilde;": "≴",
                        "&NotNestedGreaterGreater;": "⪢̸",
                        "&NotNestedLessLess;": "⪡̸",
                        "&NotPrecedes;": "⊀",
                        "&NotPrecedesEqual;": "⪯̸",
                        "&NotPrecedesSlantEqual;": "⋠",
                        "&NotReverseElement;": "∌",
                        "&NotRightTriangle;": "⋫",
                        "&NotRightTriangleBar;": "⧐̸",
                        "&NotRightTriangleEqual;": "⋭",
                        "&NotSquareSubset;": "⊏̸",
                        "&NotSquareSubsetEqual;": "⋢",
                        "&NotSquareSuperset;": "⊐̸",
                        "&NotSquareSupersetEqual;": "⋣",
                        "&NotSubset;": "⊂⃒",
                        "&NotSubsetEqual;": "⊈",
                        "&NotSucceeds;": "⊁",
                        "&NotSucceedsEqual;": "⪰̸",
                        "&NotSucceedsSlantEqual;": "⋡",
                        "&NotSucceedsTilde;": "≿̸",
                        "&NotSuperset;": "⊃⃒",
                        "&NotSupersetEqual;": "⊉",
                        "&NotTilde;": "≁",
                        "&NotTildeEqual;": "≄",
                        "&NotTildeFullEqual;": "≇",
                        "&NotTildeTilde;": "≉",
                        "&NotVerticalBar;": "∤",
                        "&Nscr;": "\uD835\uDCA9",
                        "&Ntilde": "\xd1",
                        "&Ntilde;": "\xd1",
                        "&Nu;": "Ν",
                        "&OElig;": "Œ",
                        "&Oacute": "\xd3",
                        "&Oacute;": "\xd3",
                        "&Ocirc": "\xd4",
                        "&Ocirc;": "\xd4",
                        "&Ocy;": "О",
                        "&Odblac;": "Ő",
                        "&Ofr;": "\uD835\uDD12",
                        "&Ograve": "\xd2",
                        "&Ograve;": "\xd2",
                        "&Omacr;": "Ō",
                        "&Omega;": "Ω",
                        "&Omicron;": "Ο",
                        "&Oopf;": "\uD835\uDD46",
                        "&OpenCurlyDoubleQuote;": "“",
                        "&OpenCurlyQuote;": "‘",
                        "&Or;": "⩔",
                        "&Oscr;": "\uD835\uDCAA",
                        "&Oslash": "\xd8",
                        "&Oslash;": "\xd8",
                        "&Otilde": "\xd5",
                        "&Otilde;": "\xd5",
                        "&Otimes;": "⨷",
                        "&Ouml": "\xd6",
                        "&Ouml;": "\xd6",
                        "&OverBar;": "‾",
                        "&OverBrace;": "⏞",
                        "&OverBracket;": "⎴",
                        "&OverParenthesis;": "⏜",
                        "&PartialD;": "∂",
                        "&Pcy;": "П",
                        "&Pfr;": "\uD835\uDD13",
                        "&Phi;": "Φ",
                        "&Pi;": "Π",
                        "&PlusMinus;": "\xb1",
                        "&Poincareplane;": "ℌ",
                        "&Popf;": "ℙ",
                        "&Pr;": "⪻",
                        "&Precedes;": "≺",
                        "&PrecedesEqual;": "⪯",
                        "&PrecedesSlantEqual;": "≼",
                        "&PrecedesTilde;": "≾",
                        "&Prime;": "″",
                        "&Product;": "∏",
                        "&Proportion;": "∷",
                        "&Proportional;": "∝",
                        "&Pscr;": "\uD835\uDCAB",
                        "&Psi;": "Ψ",
                        "&QUOT": '"',
                        "&QUOT;": '"',
                        "&Qfr;": "\uD835\uDD14",
                        "&Qopf;": "ℚ",
                        "&Qscr;": "\uD835\uDCAC",
                        "&RBarr;": "⤐",
                        "&REG": "\xae",
                        "&REG;": "\xae",
                        "&Racute;": "Ŕ",
                        "&Rang;": "⟫",
                        "&Rarr;": "↠",
                        "&Rarrtl;": "⤖",
                        "&Rcaron;": "Ř",
                        "&Rcedil;": "Ŗ",
                        "&Rcy;": "Р",
                        "&Re;": "ℜ",
                        "&ReverseElement;": "∋",
                        "&ReverseEquilibrium;": "⇋",
                        "&ReverseUpEquilibrium;": "⥯",
                        "&Rfr;": "ℜ",
                        "&Rho;": "Ρ",
                        "&RightAngleBracket;": "⟩",
                        "&RightArrow;": "→",
                        "&RightArrowBar;": "⇥",
                        "&RightArrowLeftArrow;": "⇄",
                        "&RightCeiling;": "⌉",
                        "&RightDoubleBracket;": "⟧",
                        "&RightDownTeeVector;": "⥝",
                        "&RightDownVector;": "⇂",
                        "&RightDownVectorBar;": "⥕",
                        "&RightFloor;": "⌋",
                        "&RightTee;": "⊢",
                        "&RightTeeArrow;": "↦",
                        "&RightTeeVector;": "⥛",
                        "&RightTriangle;": "⊳",
                        "&RightTriangleBar;": "⧐",
                        "&RightTriangleEqual;": "⊵",
                        "&RightUpDownVector;": "⥏",
                        "&RightUpTeeVector;": "⥜",
                        "&RightUpVector;": "↾",
                        "&RightUpVectorBar;": "⥔",
                        "&RightVector;": "⇀",
                        "&RightVectorBar;": "⥓",
                        "&Rightarrow;": "⇒",
                        "&Ropf;": "ℝ",
                        "&RoundImplies;": "⥰",
                        "&Rrightarrow;": "⇛",
                        "&Rscr;": "ℛ",
                        "&Rsh;": "↱",
                        "&RuleDelayed;": "⧴",
                        "&SHCHcy;": "Щ",
                        "&SHcy;": "Ш",
                        "&SOFTcy;": "Ь",
                        "&Sacute;": "Ś",
                        "&Sc;": "⪼",
                        "&Scaron;": "Š",
                        "&Scedil;": "Ş",
                        "&Scirc;": "Ŝ",
                        "&Scy;": "С",
                        "&Sfr;": "\uD835\uDD16",
                        "&ShortDownArrow;": "↓",
                        "&ShortLeftArrow;": "←",
                        "&ShortRightArrow;": "→",
                        "&ShortUpArrow;": "↑",
                        "&Sigma;": "Σ",
                        "&SmallCircle;": "∘",
                        "&Sopf;": "\uD835\uDD4A",
                        "&Sqrt;": "√",
                        "&Square;": "□",
                        "&SquareIntersection;": "⊓",
                        "&SquareSubset;": "⊏",
                        "&SquareSubsetEqual;": "⊑",
                        "&SquareSuperset;": "⊐",
                        "&SquareSupersetEqual;": "⊒",
                        "&SquareUnion;": "⊔",
                        "&Sscr;": "\uD835\uDCAE",
                        "&Star;": "⋆",
                        "&Sub;": "⋐",
                        "&Subset;": "⋐",
                        "&SubsetEqual;": "⊆",
                        "&Succeeds;": "≻",
                        "&SucceedsEqual;": "⪰",
                        "&SucceedsSlantEqual;": "≽",
                        "&SucceedsTilde;": "≿",
                        "&SuchThat;": "∋",
                        "&Sum;": "∑",
                        "&Sup;": "⋑",
                        "&Superset;": "⊃",
                        "&SupersetEqual;": "⊇",
                        "&Supset;": "⋑",
                        "&THORN": "\xde",
                        "&THORN;": "\xde",
                        "&TRADE;": "™",
                        "&TSHcy;": "Ћ",
                        "&TScy;": "Ц",
                        "&Tab;": "	",
                        "&Tau;": "Τ",
                        "&Tcaron;": "Ť",
                        "&Tcedil;": "Ţ",
                        "&Tcy;": "Т",
                        "&Tfr;": "\uD835\uDD17",
                        "&Therefore;": "∴",
                        "&Theta;": "Θ",
                        "&ThickSpace;": "  ",
                        "&ThinSpace;": " ",
                        "&Tilde;": "∼",
                        "&TildeEqual;": "≃",
                        "&TildeFullEqual;": "≅",
                        "&TildeTilde;": "≈",
                        "&Topf;": "\uD835\uDD4B",
                        "&TripleDot;": "⃛",
                        "&Tscr;": "\uD835\uDCAF",
                        "&Tstrok;": "Ŧ",
                        "&Uacute": "\xda",
                        "&Uacute;": "\xda",
                        "&Uarr;": "↟",
                        "&Uarrocir;": "⥉",
                        "&Ubrcy;": "Ў",
                        "&Ubreve;": "Ŭ",
                        "&Ucirc": "\xdb",
                        "&Ucirc;": "\xdb",
                        "&Ucy;": "У",
                        "&Udblac;": "Ű",
                        "&Ufr;": "\uD835\uDD18",
                        "&Ugrave": "\xd9",
                        "&Ugrave;": "\xd9",
                        "&Umacr;": "Ū",
                        "&UnderBar;": "_",
                        "&UnderBrace;": "⏟",
                        "&UnderBracket;": "⎵",
                        "&UnderParenthesis;": "⏝",
                        "&Union;": "⋃",
                        "&UnionPlus;": "⊎",
                        "&Uogon;": "Ų",
                        "&Uopf;": "\uD835\uDD4C",
                        "&UpArrow;": "↑",
                        "&UpArrowBar;": "⤒",
                        "&UpArrowDownArrow;": "⇅",
                        "&UpDownArrow;": "↕",
                        "&UpEquilibrium;": "⥮",
                        "&UpTee;": "⊥",
                        "&UpTeeArrow;": "↥",
                        "&Uparrow;": "⇑",
                        "&Updownarrow;": "⇕",
                        "&UpperLeftArrow;": "↖",
                        "&UpperRightArrow;": "↗",
                        "&Upsi;": "ϒ",
                        "&Upsilon;": "Υ",
                        "&Uring;": "Ů",
                        "&Uscr;": "\uD835\uDCB0",
                        "&Utilde;": "Ũ",
                        "&Uuml": "\xdc",
                        "&Uuml;": "\xdc",
                        "&VDash;": "⊫",
                        "&Vbar;": "⫫",
                        "&Vcy;": "В",
                        "&Vdash;": "⊩",
                        "&Vdashl;": "⫦",
                        "&Vee;": "⋁",
                        "&Verbar;": "‖",
                        "&Vert;": "‖",
                        "&VerticalBar;": "∣",
                        "&VerticalLine;": "|",
                        "&VerticalSeparator;": "❘",
                        "&VerticalTilde;": "≀",
                        "&VeryThinSpace;": " ",
                        "&Vfr;": "\uD835\uDD19",
                        "&Vopf;": "\uD835\uDD4D",
                        "&Vscr;": "\uD835\uDCB1",
                        "&Vvdash;": "⊪",
                        "&Wcirc;": "Ŵ",
                        "&Wedge;": "⋀",
                        "&Wfr;": "\uD835\uDD1A",
                        "&Wopf;": "\uD835\uDD4E",
                        "&Wscr;": "\uD835\uDCB2",
                        "&Xfr;": "\uD835\uDD1B",
                        "&Xi;": "Ξ",
                        "&Xopf;": "\uD835\uDD4F",
                        "&Xscr;": "\uD835\uDCB3",
                        "&YAcy;": "Я",
                        "&YIcy;": "Ї",
                        "&YUcy;": "Ю",
                        "&Yacute": "\xdd",
                        "&Yacute;": "\xdd",
                        "&Ycirc;": "Ŷ",
                        "&Ycy;": "Ы",
                        "&Yfr;": "\uD835\uDD1C",
                        "&Yopf;": "\uD835\uDD50",
                        "&Yscr;": "\uD835\uDCB4",
                        "&Yuml;": "Ÿ",
                        "&ZHcy;": "Ж",
                        "&Zacute;": "Ź",
                        "&Zcaron;": "Ž",
                        "&Zcy;": "З",
                        "&Zdot;": "Ż",
                        "&ZeroWidthSpace;": "​",
                        "&Zeta;": "Ζ",
                        "&Zfr;": "ℨ",
                        "&Zopf;": "ℤ",
                        "&Zscr;": "\uD835\uDCB5",
                        "&aacute": "\xe1",
                        "&aacute;": "\xe1",
                        "&abreve;": "ă",
                        "&ac;": "∾",
                        "&acE;": "∾̳",
                        "&acd;": "∿",
                        "&acirc": "\xe2",
                        "&acirc;": "\xe2",
                        "&acute": "\xb4",
                        "&acute;": "\xb4",
                        "&acy;": "а",
                        "&aelig": "\xe6",
                        "&aelig;": "\xe6",
                        "&af;": "⁡",
                        "&afr;": "\uD835\uDD1E",
                        "&agrave": "\xe0",
                        "&agrave;": "\xe0",
                        "&alefsym;": "ℵ",
                        "&aleph;": "ℵ",
                        "&alpha;": "α",
                        "&amacr;": "ā",
                        "&amalg;": "⨿",
                        "&amp": "&",
                        "&amp;": "&",
                        "&and;": "∧",
                        "&andand;": "⩕",
                        "&andd;": "⩜",
                        "&andslope;": "⩘",
                        "&andv;": "⩚",
                        "&ang;": "∠",
                        "&ange;": "⦤",
                        "&angle;": "∠",
                        "&angmsd;": "∡",
                        "&angmsdaa;": "⦨",
                        "&angmsdab;": "⦩",
                        "&angmsdac;": "⦪",
                        "&angmsdad;": "⦫",
                        "&angmsdae;": "⦬",
                        "&angmsdaf;": "⦭",
                        "&angmsdag;": "⦮",
                        "&angmsdah;": "⦯",
                        "&angrt;": "∟",
                        "&angrtvb;": "⊾",
                        "&angrtvbd;": "⦝",
                        "&angsph;": "∢",
                        "&angst;": "\xc5",
                        "&angzarr;": "⍼",
                        "&aogon;": "ą",
                        "&aopf;": "\uD835\uDD52",
                        "&ap;": "≈",
                        "&apE;": "⩰",
                        "&apacir;": "⩯",
                        "&ape;": "≊",
                        "&apid;": "≋",
                        "&apos;": "'",
                        "&approx;": "≈",
                        "&approxeq;": "≊",
                        "&aring": "\xe5",
                        "&aring;": "\xe5",
                        "&ascr;": "\uD835\uDCB6",
                        "&ast;": "*",
                        "&asymp;": "≈",
                        "&asympeq;": "≍",
                        "&atilde": "\xe3",
                        "&atilde;": "\xe3",
                        "&auml": "\xe4",
                        "&auml;": "\xe4",
                        "&awconint;": "∳",
                        "&awint;": "⨑",
                        "&bNot;": "⫭",
                        "&backcong;": "≌",
                        "&backepsilon;": "϶",
                        "&backprime;": "‵",
                        "&backsim;": "∽",
                        "&backsimeq;": "⋍",
                        "&barvee;": "⊽",
                        "&barwed;": "⌅",
                        "&barwedge;": "⌅",
                        "&bbrk;": "⎵",
                        "&bbrktbrk;": "⎶",
                        "&bcong;": "≌",
                        "&bcy;": "б",
                        "&bdquo;": "„",
                        "&becaus;": "∵",
                        "&because;": "∵",
                        "&bemptyv;": "⦰",
                        "&bepsi;": "϶",
                        "&bernou;": "ℬ",
                        "&beta;": "β",
                        "&beth;": "ℶ",
                        "&between;": "≬",
                        "&bfr;": "\uD835\uDD1F",
                        "&bigcap;": "⋂",
                        "&bigcirc;": "◯",
                        "&bigcup;": "⋃",
                        "&bigodot;": "⨀",
                        "&bigoplus;": "⨁",
                        "&bigotimes;": "⨂",
                        "&bigsqcup;": "⨆",
                        "&bigstar;": "★",
                        "&bigtriangledown;": "▽",
                        "&bigtriangleup;": "△",
                        "&biguplus;": "⨄",
                        "&bigvee;": "⋁",
                        "&bigwedge;": "⋀",
                        "&bkarow;": "⤍",
                        "&blacklozenge;": "⧫",
                        "&blacksquare;": "▪",
                        "&blacktriangle;": "▴",
                        "&blacktriangledown;": "▾",
                        "&blacktriangleleft;": "◂",
                        "&blacktriangleright;": "▸",
                        "&blank;": "␣",
                        "&blk12;": "▒",
                        "&blk14;": "░",
                        "&blk34;": "▓",
                        "&block;": "█",
                        "&bne;": "=⃥",
                        "&bnequiv;": "≡⃥",
                        "&bnot;": "⌐",
                        "&bopf;": "\uD835\uDD53",
                        "&bot;": "⊥",
                        "&bottom;": "⊥",
                        "&bowtie;": "⋈",
                        "&boxDL;": "╗",
                        "&boxDR;": "╔",
                        "&boxDl;": "╖",
                        "&boxDr;": "╓",
                        "&boxH;": "═",
                        "&boxHD;": "╦",
                        "&boxHU;": "╩",
                        "&boxHd;": "╤",
                        "&boxHu;": "╧",
                        "&boxUL;": "╝",
                        "&boxUR;": "╚",
                        "&boxUl;": "╜",
                        "&boxUr;": "╙",
                        "&boxV;": "║",
                        "&boxVH;": "╬",
                        "&boxVL;": "╣",
                        "&boxVR;": "╠",
                        "&boxVh;": "╫",
                        "&boxVl;": "╢",
                        "&boxVr;": "╟",
                        "&boxbox;": "⧉",
                        "&boxdL;": "╕",
                        "&boxdR;": "╒",
                        "&boxdl;": "┐",
                        "&boxdr;": "┌",
                        "&boxh;": "─",
                        "&boxhD;": "╥",
                        "&boxhU;": "╨",
                        "&boxhd;": "┬",
                        "&boxhu;": "┴",
                        "&boxminus;": "⊟",
                        "&boxplus;": "⊞",
                        "&boxtimes;": "⊠",
                        "&boxuL;": "╛",
                        "&boxuR;": "╘",
                        "&boxul;": "┘",
                        "&boxur;": "└",
                        "&boxv;": "│",
                        "&boxvH;": "╪",
                        "&boxvL;": "╡",
                        "&boxvR;": "╞",
                        "&boxvh;": "┼",
                        "&boxvl;": "┤",
                        "&boxvr;": "├",
                        "&bprime;": "‵",
                        "&breve;": "˘",
                        "&brvbar": "\xa6",
                        "&brvbar;": "\xa6",
                        "&bscr;": "\uD835\uDCB7",
                        "&bsemi;": "⁏",
                        "&bsim;": "∽",
                        "&bsime;": "⋍",
                        "&bsol;": "\\",
                        "&bsolb;": "⧅",
                        "&bsolhsub;": "⟈",
                        "&bull;": "•",
                        "&bullet;": "•",
                        "&bump;": "≎",
                        "&bumpE;": "⪮",
                        "&bumpe;": "≏",
                        "&bumpeq;": "≏",
                        "&cacute;": "ć",
                        "&cap;": "∩",
                        "&capand;": "⩄",
                        "&capbrcup;": "⩉",
                        "&capcap;": "⩋",
                        "&capcup;": "⩇",
                        "&capdot;": "⩀",
                        "&caps;": "∩︀",
                        "&caret;": "⁁",
                        "&caron;": "ˇ",
                        "&ccaps;": "⩍",
                        "&ccaron;": "č",
                        "&ccedil": "\xe7",
                        "&ccedil;": "\xe7",
                        "&ccirc;": "ĉ",
                        "&ccups;": "⩌",
                        "&ccupssm;": "⩐",
                        "&cdot;": "ċ",
                        "&cedil": "\xb8",
                        "&cedil;": "\xb8",
                        "&cemptyv;": "⦲",
                        "&cent": "\xa2",
                        "&cent;": "\xa2",
                        "&centerdot;": "\xb7",
                        "&cfr;": "\uD835\uDD20",
                        "&chcy;": "ч",
                        "&check;": "✓",
                        "&checkmark;": "✓",
                        "&chi;": "χ",
                        "&cir;": "○",
                        "&cirE;": "⧃",
                        "&circ;": "ˆ",
                        "&circeq;": "≗",
                        "&circlearrowleft;": "↺",
                        "&circlearrowright;": "↻",
                        "&circledR;": "\xae",
                        "&circledS;": "Ⓢ",
                        "&circledast;": "⊛",
                        "&circledcirc;": "⊚",
                        "&circleddash;": "⊝",
                        "&cire;": "≗",
                        "&cirfnint;": "⨐",
                        "&cirmid;": "⫯",
                        "&cirscir;": "⧂",
                        "&clubs;": "♣",
                        "&clubsuit;": "♣",
                        "&colon;": ":",
                        "&colone;": "≔",
                        "&coloneq;": "≔",
                        "&comma;": ",",
                        "&commat;": "@",
                        "&comp;": "∁",
                        "&compfn;": "∘",
                        "&complement;": "∁",
                        "&complexes;": "ℂ",
                        "&cong;": "≅",
                        "&congdot;": "⩭",
                        "&conint;": "∮",
                        "&copf;": "\uD835\uDD54",
                        "&coprod;": "∐",
                        "&copy": "\xa9",
                        "&copy;": "\xa9",
                        "&copysr;": "℗",
                        "&crarr;": "↵",
                        "&cross;": "✗",
                        "&cscr;": "\uD835\uDCB8",
                        "&csub;": "⫏",
                        "&csube;": "⫑",
                        "&csup;": "⫐",
                        "&csupe;": "⫒",
                        "&ctdot;": "⋯",
                        "&cudarrl;": "⤸",
                        "&cudarrr;": "⤵",
                        "&cuepr;": "⋞",
                        "&cuesc;": "⋟",
                        "&cularr;": "↶",
                        "&cularrp;": "⤽",
                        "&cup;": "∪",
                        "&cupbrcap;": "⩈",
                        "&cupcap;": "⩆",
                        "&cupcup;": "⩊",
                        "&cupdot;": "⊍",
                        "&cupor;": "⩅",
                        "&cups;": "∪︀",
                        "&curarr;": "↷",
                        "&curarrm;": "⤼",
                        "&curlyeqprec;": "⋞",
                        "&curlyeqsucc;": "⋟",
                        "&curlyvee;": "⋎",
                        "&curlywedge;": "⋏",
                        "&curren": "\xa4",
                        "&curren;": "\xa4",
                        "&curvearrowleft;": "↶",
                        "&curvearrowright;": "↷",
                        "&cuvee;": "⋎",
                        "&cuwed;": "⋏",
                        "&cwconint;": "∲",
                        "&cwint;": "∱",
                        "&cylcty;": "⌭",
                        "&dArr;": "⇓",
                        "&dHar;": "⥥",
                        "&dagger;": "†",
                        "&daleth;": "ℸ",
                        "&darr;": "↓",
                        "&dash;": "‐",
                        "&dashv;": "⊣",
                        "&dbkarow;": "⤏",
                        "&dblac;": "˝",
                        "&dcaron;": "ď",
                        "&dcy;": "д",
                        "&dd;": "ⅆ",
                        "&ddagger;": "‡",
                        "&ddarr;": "⇊",
                        "&ddotseq;": "⩷",
                        "&deg": "\xb0",
                        "&deg;": "\xb0",
                        "&delta;": "δ",
                        "&demptyv;": "⦱",
                        "&dfisht;": "⥿",
                        "&dfr;": "\uD835\uDD21",
                        "&dharl;": "⇃",
                        "&dharr;": "⇂",
                        "&diam;": "⋄",
                        "&diamond;": "⋄",
                        "&diamondsuit;": "♦",
                        "&diams;": "♦",
                        "&die;": "\xa8",
                        "&digamma;": "ϝ",
                        "&disin;": "⋲",
                        "&div;": "\xf7",
                        "&divide": "\xf7",
                        "&divide;": "\xf7",
                        "&divideontimes;": "⋇",
                        "&divonx;": "⋇",
                        "&djcy;": "ђ",
                        "&dlcorn;": "⌞",
                        "&dlcrop;": "⌍",
                        "&dollar;": "$",
                        "&dopf;": "\uD835\uDD55",
                        "&dot;": "˙",
                        "&doteq;": "≐",
                        "&doteqdot;": "≑",
                        "&dotminus;": "∸",
                        "&dotplus;": "∔",
                        "&dotsquare;": "⊡",
                        "&doublebarwedge;": "⌆",
                        "&downarrow;": "↓",
                        "&downdownarrows;": "⇊",
                        "&downharpoonleft;": "⇃",
                        "&downharpoonright;": "⇂",
                        "&drbkarow;": "⤐",
                        "&drcorn;": "⌟",
                        "&drcrop;": "⌌",
                        "&dscr;": "\uD835\uDCB9",
                        "&dscy;": "ѕ",
                        "&dsol;": "⧶",
                        "&dstrok;": "đ",
                        "&dtdot;": "⋱",
                        "&dtri;": "▿",
                        "&dtrif;": "▾",
                        "&duarr;": "⇵",
                        "&duhar;": "⥯",
                        "&dwangle;": "⦦",
                        "&dzcy;": "џ",
                        "&dzigrarr;": "⟿",
                        "&eDDot;": "⩷",
                        "&eDot;": "≑",
                        "&eacute": "\xe9",
                        "&eacute;": "\xe9",
                        "&easter;": "⩮",
                        "&ecaron;": "ě",
                        "&ecir;": "≖",
                        "&ecirc": "\xea",
                        "&ecirc;": "\xea",
                        "&ecolon;": "≕",
                        "&ecy;": "э",
                        "&edot;": "ė",
                        "&ee;": "ⅇ",
                        "&efDot;": "≒",
                        "&efr;": "\uD835\uDD22",
                        "&eg;": "⪚",
                        "&egrave": "\xe8",
                        "&egrave;": "\xe8",
                        "&egs;": "⪖",
                        "&egsdot;": "⪘",
                        "&el;": "⪙",
                        "&elinters;": "⏧",
                        "&ell;": "ℓ",
                        "&els;": "⪕",
                        "&elsdot;": "⪗",
                        "&emacr;": "ē",
                        "&empty;": "∅",
                        "&emptyset;": "∅",
                        "&emptyv;": "∅",
                        "&emsp13;": " ",
                        "&emsp14;": " ",
                        "&emsp;": " ",
                        "&eng;": "ŋ",
                        "&ensp;": " ",
                        "&eogon;": "ę",
                        "&eopf;": "\uD835\uDD56",
                        "&epar;": "⋕",
                        "&eparsl;": "⧣",
                        "&eplus;": "⩱",
                        "&epsi;": "ε",
                        "&epsilon;": "ε",
                        "&epsiv;": "ϵ",
                        "&eqcirc;": "≖",
                        "&eqcolon;": "≕",
                        "&eqsim;": "≂",
                        "&eqslantgtr;": "⪖",
                        "&eqslantless;": "⪕",
                        "&equals;": "=",
                        "&equest;": "≟",
                        "&equiv;": "≡",
                        "&equivDD;": "⩸",
                        "&eqvparsl;": "⧥",
                        "&erDot;": "≓",
                        "&erarr;": "⥱",
                        "&escr;": "ℯ",
                        "&esdot;": "≐",
                        "&esim;": "≂",
                        "&eta;": "η",
                        "&eth": "\xf0",
                        "&eth;": "\xf0",
                        "&euml": "\xeb",
                        "&euml;": "\xeb",
                        "&euro;": "€",
                        "&excl;": "!",
                        "&exist;": "∃",
                        "&expectation;": "ℰ",
                        "&exponentiale;": "ⅇ",
                        "&fallingdotseq;": "≒",
                        "&fcy;": "ф",
                        "&female;": "♀",
                        "&ffilig;": "ﬃ",
                        "&fflig;": "ﬀ",
                        "&ffllig;": "ﬄ",
                        "&ffr;": "\uD835\uDD23",
                        "&filig;": "ﬁ",
                        "&fjlig;": "fj",
                        "&flat;": "♭",
                        "&fllig;": "ﬂ",
                        "&fltns;": "▱",
                        "&fnof;": "ƒ",
                        "&fopf;": "\uD835\uDD57",
                        "&forall;": "∀",
                        "&fork;": "⋔",
                        "&forkv;": "⫙",
                        "&fpartint;": "⨍",
                        "&frac12": "\xbd",
                        "&frac12;": "\xbd",
                        "&frac13;": "⅓",
                        "&frac14": "\xbc",
                        "&frac14;": "\xbc",
                        "&frac15;": "⅕",
                        "&frac16;": "⅙",
                        "&frac18;": "⅛",
                        "&frac23;": "⅔",
                        "&frac25;": "⅖",
                        "&frac34": "\xbe",
                        "&frac34;": "\xbe",
                        "&frac35;": "⅗",
                        "&frac38;": "⅜",
                        "&frac45;": "⅘",
                        "&frac56;": "⅚",
                        "&frac58;": "⅝",
                        "&frac78;": "⅞",
                        "&frasl;": "⁄",
                        "&frown;": "⌢",
                        "&fscr;": "\uD835\uDCBB",
                        "&gE;": "≧",
                        "&gEl;": "⪌",
                        "&gacute;": "ǵ",
                        "&gamma;": "γ",
                        "&gammad;": "ϝ",
                        "&gap;": "⪆",
                        "&gbreve;": "ğ",
                        "&gcirc;": "ĝ",
                        "&gcy;": "г",
                        "&gdot;": "ġ",
                        "&ge;": "≥",
                        "&gel;": "⋛",
                        "&geq;": "≥",
                        "&geqq;": "≧",
                        "&geqslant;": "⩾",
                        "&ges;": "⩾",
                        "&gescc;": "⪩",
                        "&gesdot;": "⪀",
                        "&gesdoto;": "⪂",
                        "&gesdotol;": "⪄",
                        "&gesl;": "⋛︀",
                        "&gesles;": "⪔",
                        "&gfr;": "\uD835\uDD24",
                        "&gg;": "≫",
                        "&ggg;": "⋙",
                        "&gimel;": "ℷ",
                        "&gjcy;": "ѓ",
                        "&gl;": "≷",
                        "&glE;": "⪒",
                        "&gla;": "⪥",
                        "&glj;": "⪤",
                        "&gnE;": "≩",
                        "&gnap;": "⪊",
                        "&gnapprox;": "⪊",
                        "&gne;": "⪈",
                        "&gneq;": "⪈",
                        "&gneqq;": "≩",
                        "&gnsim;": "⋧",
                        "&gopf;": "\uD835\uDD58",
                        "&grave;": "`",
                        "&gscr;": "ℊ",
                        "&gsim;": "≳",
                        "&gsime;": "⪎",
                        "&gsiml;": "⪐",
                        "&gt": ">",
                        "&gt;": ">",
                        "&gtcc;": "⪧",
                        "&gtcir;": "⩺",
                        "&gtdot;": "⋗",
                        "&gtlPar;": "⦕",
                        "&gtquest;": "⩼",
                        "&gtrapprox;": "⪆",
                        "&gtrarr;": "⥸",
                        "&gtrdot;": "⋗",
                        "&gtreqless;": "⋛",
                        "&gtreqqless;": "⪌",
                        "&gtrless;": "≷",
                        "&gtrsim;": "≳",
                        "&gvertneqq;": "≩︀",
                        "&gvnE;": "≩︀",
                        "&hArr;": "⇔",
                        "&hairsp;": " ",
                        "&half;": "\xbd",
                        "&hamilt;": "ℋ",
                        "&hardcy;": "ъ",
                        "&harr;": "↔",
                        "&harrcir;": "⥈",
                        "&harrw;": "↭",
                        "&hbar;": "ℏ",
                        "&hcirc;": "ĥ",
                        "&hearts;": "♥",
                        "&heartsuit;": "♥",
                        "&hellip;": "…",
                        "&hercon;": "⊹",
                        "&hfr;": "\uD835\uDD25",
                        "&hksearow;": "⤥",
                        "&hkswarow;": "⤦",
                        "&hoarr;": "⇿",
                        "&homtht;": "∻",
                        "&hookleftarrow;": "↩",
                        "&hookrightarrow;": "↪",
                        "&hopf;": "\uD835\uDD59",
                        "&horbar;": "―",
                        "&hscr;": "\uD835\uDCBD",
                        "&hslash;": "ℏ",
                        "&hstrok;": "ħ",
                        "&hybull;": "⁃",
                        "&hyphen;": "‐",
                        "&iacute": "\xed",
                        "&iacute;": "\xed",
                        "&ic;": "⁣",
                        "&icirc": "\xee",
                        "&icirc;": "\xee",
                        "&icy;": "и",
                        "&iecy;": "е",
                        "&iexcl": "\xa1",
                        "&iexcl;": "\xa1",
                        "&iff;": "⇔",
                        "&ifr;": "\uD835\uDD26",
                        "&igrave": "\xec",
                        "&igrave;": "\xec",
                        "&ii;": "ⅈ",
                        "&iiiint;": "⨌",
                        "&iiint;": "∭",
                        "&iinfin;": "⧜",
                        "&iiota;": "℩",
                        "&ijlig;": "ĳ",
                        "&imacr;": "ī",
                        "&image;": "ℑ",
                        "&imagline;": "ℐ",
                        "&imagpart;": "ℑ",
                        "&imath;": "ı",
                        "&imof;": "⊷",
                        "&imped;": "Ƶ",
                        "&in;": "∈",
                        "&incare;": "℅",
                        "&infin;": "∞",
                        "&infintie;": "⧝",
                        "&inodot;": "ı",
                        "&int;": "∫",
                        "&intcal;": "⊺",
                        "&integers;": "ℤ",
                        "&intercal;": "⊺",
                        "&intlarhk;": "⨗",
                        "&intprod;": "⨼",
                        "&iocy;": "ё",
                        "&iogon;": "į",
                        "&iopf;": "\uD835\uDD5A",
                        "&iota;": "ι",
                        "&iprod;": "⨼",
                        "&iquest": "\xbf",
                        "&iquest;": "\xbf",
                        "&iscr;": "\uD835\uDCBE",
                        "&isin;": "∈",
                        "&isinE;": "⋹",
                        "&isindot;": "⋵",
                        "&isins;": "⋴",
                        "&isinsv;": "⋳",
                        "&isinv;": "∈",
                        "&it;": "⁢",
                        "&itilde;": "ĩ",
                        "&iukcy;": "і",
                        "&iuml": "\xef",
                        "&iuml;": "\xef",
                        "&jcirc;": "ĵ",
                        "&jcy;": "й",
                        "&jfr;": "\uD835\uDD27",
                        "&jmath;": "ȷ",
                        "&jopf;": "\uD835\uDD5B",
                        "&jscr;": "\uD835\uDCBF",
                        "&jsercy;": "ј",
                        "&jukcy;": "є",
                        "&kappa;": "κ",
                        "&kappav;": "ϰ",
                        "&kcedil;": "ķ",
                        "&kcy;": "к",
                        "&kfr;": "\uD835\uDD28",
                        "&kgreen;": "ĸ",
                        "&khcy;": "х",
                        "&kjcy;": "ќ",
                        "&kopf;": "\uD835\uDD5C",
                        "&kscr;": "\uD835\uDCC0",
                        "&lAarr;": "⇚",
                        "&lArr;": "⇐",
                        "&lAtail;": "⤛",
                        "&lBarr;": "⤎",
                        "&lE;": "≦",
                        "&lEg;": "⪋",
                        "&lHar;": "⥢",
                        "&lacute;": "ĺ",
                        "&laemptyv;": "⦴",
                        "&lagran;": "ℒ",
                        "&lambda;": "λ",
                        "&lang;": "⟨",
                        "&langd;": "⦑",
                        "&langle;": "⟨",
                        "&lap;": "⪅",
                        "&laquo": "\xab",
                        "&laquo;": "\xab",
                        "&larr;": "←",
                        "&larrb;": "⇤",
                        "&larrbfs;": "⤟",
                        "&larrfs;": "⤝",
                        "&larrhk;": "↩",
                        "&larrlp;": "↫",
                        "&larrpl;": "⤹",
                        "&larrsim;": "⥳",
                        "&larrtl;": "↢",
                        "&lat;": "⪫",
                        "&latail;": "⤙",
                        "&late;": "⪭",
                        "&lates;": "⪭︀",
                        "&lbarr;": "⤌",
                        "&lbbrk;": "❲",
                        "&lbrace;": "{",
                        "&lbrack;": "[",
                        "&lbrke;": "⦋",
                        "&lbrksld;": "⦏",
                        "&lbrkslu;": "⦍",
                        "&lcaron;": "ľ",
                        "&lcedil;": "ļ",
                        "&lceil;": "⌈",
                        "&lcub;": "{",
                        "&lcy;": "л",
                        "&ldca;": "⤶",
                        "&ldquo;": "“",
                        "&ldquor;": "„",
                        "&ldrdhar;": "⥧",
                        "&ldrushar;": "⥋",
                        "&ldsh;": "↲",
                        "&le;": "≤",
                        "&leftarrow;": "←",
                        "&leftarrowtail;": "↢",
                        "&leftharpoondown;": "↽",
                        "&leftharpoonup;": "↼",
                        "&leftleftarrows;": "⇇",
                        "&leftrightarrow;": "↔",
                        "&leftrightarrows;": "⇆",
                        "&leftrightharpoons;": "⇋",
                        "&leftrightsquigarrow;": "↭",
                        "&leftthreetimes;": "⋋",
                        "&leg;": "⋚",
                        "&leq;": "≤",
                        "&leqq;": "≦",
                        "&leqslant;": "⩽",
                        "&les;": "⩽",
                        "&lescc;": "⪨",
                        "&lesdot;": "⩿",
                        "&lesdoto;": "⪁",
                        "&lesdotor;": "⪃",
                        "&lesg;": "⋚︀",
                        "&lesges;": "⪓",
                        "&lessapprox;": "⪅",
                        "&lessdot;": "⋖",
                        "&lesseqgtr;": "⋚",
                        "&lesseqqgtr;": "⪋",
                        "&lessgtr;": "≶",
                        "&lesssim;": "≲",
                        "&lfisht;": "⥼",
                        "&lfloor;": "⌊",
                        "&lfr;": "\uD835\uDD29",
                        "&lg;": "≶",
                        "&lgE;": "⪑",
                        "&lhard;": "↽",
                        "&lharu;": "↼",
                        "&lharul;": "⥪",
                        "&lhblk;": "▄",
                        "&ljcy;": "љ",
                        "&ll;": "≪",
                        "&llarr;": "⇇",
                        "&llcorner;": "⌞",
                        "&llhard;": "⥫",
                        "&lltri;": "◺",
                        "&lmidot;": "ŀ",
                        "&lmoust;": "⎰",
                        "&lmoustache;": "⎰",
                        "&lnE;": "≨",
                        "&lnap;": "⪉",
                        "&lnapprox;": "⪉",
                        "&lne;": "⪇",
                        "&lneq;": "⪇",
                        "&lneqq;": "≨",
                        "&lnsim;": "⋦",
                        "&loang;": "⟬",
                        "&loarr;": "⇽",
                        "&lobrk;": "⟦",
                        "&longleftarrow;": "⟵",
                        "&longleftrightarrow;": "⟷",
                        "&longmapsto;": "⟼",
                        "&longrightarrow;": "⟶",
                        "&looparrowleft;": "↫",
                        "&looparrowright;": "↬",
                        "&lopar;": "⦅",
                        "&lopf;": "\uD835\uDD5D",
                        "&loplus;": "⨭",
                        "&lotimes;": "⨴",
                        "&lowast;": "∗",
                        "&lowbar;": "_",
                        "&loz;": "◊",
                        "&lozenge;": "◊",
                        "&lozf;": "⧫",
                        "&lpar;": "(",
                        "&lparlt;": "⦓",
                        "&lrarr;": "⇆",
                        "&lrcorner;": "⌟",
                        "&lrhar;": "⇋",
                        "&lrhard;": "⥭",
                        "&lrm;": "‎",
                        "&lrtri;": "⊿",
                        "&lsaquo;": "‹",
                        "&lscr;": "\uD835\uDCC1",
                        "&lsh;": "↰",
                        "&lsim;": "≲",
                        "&lsime;": "⪍",
                        "&lsimg;": "⪏",
                        "&lsqb;": "[",
                        "&lsquo;": "‘",
                        "&lsquor;": "‚",
                        "&lstrok;": "ł",
                        "&lt": "<",
                        "&lt;": "<",
                        "&ltcc;": "⪦",
                        "&ltcir;": "⩹",
                        "&ltdot;": "⋖",
                        "&lthree;": "⋋",
                        "&ltimes;": "⋉",
                        "&ltlarr;": "⥶",
                        "&ltquest;": "⩻",
                        "&ltrPar;": "⦖",
                        "&ltri;": "◃",
                        "&ltrie;": "⊴",
                        "&ltrif;": "◂",
                        "&lurdshar;": "⥊",
                        "&luruhar;": "⥦",
                        "&lvertneqq;": "≨︀",
                        "&lvnE;": "≨︀",
                        "&mDDot;": "∺",
                        "&macr": "\xaf",
                        "&macr;": "\xaf",
                        "&male;": "♂",
                        "&malt;": "✠",
                        "&maltese;": "✠",
                        "&map;": "↦",
                        "&mapsto;": "↦",
                        "&mapstodown;": "↧",
                        "&mapstoleft;": "↤",
                        "&mapstoup;": "↥",
                        "&marker;": "▮",
                        "&mcomma;": "⨩",
                        "&mcy;": "м",
                        "&mdash;": "—",
                        "&measuredangle;": "∡",
                        "&mfr;": "\uD835\uDD2A",
                        "&mho;": "℧",
                        "&micro": "\xb5",
                        "&micro;": "\xb5",
                        "&mid;": "∣",
                        "&midast;": "*",
                        "&midcir;": "⫰",
                        "&middot": "\xb7",
                        "&middot;": "\xb7",
                        "&minus;": "−",
                        "&minusb;": "⊟",
                        "&minusd;": "∸",
                        "&minusdu;": "⨪",
                        "&mlcp;": "⫛",
                        "&mldr;": "…",
                        "&mnplus;": "∓",
                        "&models;": "⊧",
                        "&mopf;": "\uD835\uDD5E",
                        "&mp;": "∓",
                        "&mscr;": "\uD835\uDCC2",
                        "&mstpos;": "∾",
                        "&mu;": "μ",
                        "&multimap;": "⊸",
                        "&mumap;": "⊸",
                        "&nGg;": "⋙̸",
                        "&nGt;": "≫⃒",
                        "&nGtv;": "≫̸",
                        "&nLeftarrow;": "⇍",
                        "&nLeftrightarrow;": "⇎",
                        "&nLl;": "⋘̸",
                        "&nLt;": "≪⃒",
                        "&nLtv;": "≪̸",
                        "&nRightarrow;": "⇏",
                        "&nVDash;": "⊯",
                        "&nVdash;": "⊮",
                        "&nabla;": "∇",
                        "&nacute;": "ń",
                        "&nang;": "∠⃒",
                        "&nap;": "≉",
                        "&napE;": "⩰̸",
                        "&napid;": "≋̸",
                        "&napos;": "ŉ",
                        "&napprox;": "≉",
                        "&natur;": "♮",
                        "&natural;": "♮",
                        "&naturals;": "ℕ",
                        "&nbsp": "\xa0",
                        "&nbsp;": "\xa0",
                        "&nbump;": "≎̸",
                        "&nbumpe;": "≏̸",
                        "&ncap;": "⩃",
                        "&ncaron;": "ň",
                        "&ncedil;": "ņ",
                        "&ncong;": "≇",
                        "&ncongdot;": "⩭̸",
                        "&ncup;": "⩂",
                        "&ncy;": "н",
                        "&ndash;": "–",
                        "&ne;": "≠",
                        "&neArr;": "⇗",
                        "&nearhk;": "⤤",
                        "&nearr;": "↗",
                        "&nearrow;": "↗",
                        "&nedot;": "≐̸",
                        "&nequiv;": "≢",
                        "&nesear;": "⤨",
                        "&nesim;": "≂̸",
                        "&nexist;": "∄",
                        "&nexists;": "∄",
                        "&nfr;": "\uD835\uDD2B",
                        "&ngE;": "≧̸",
                        "&nge;": "≱",
                        "&ngeq;": "≱",
                        "&ngeqq;": "≧̸",
                        "&ngeqslant;": "⩾̸",
                        "&nges;": "⩾̸",
                        "&ngsim;": "≵",
                        "&ngt;": "≯",
                        "&ngtr;": "≯",
                        "&nhArr;": "⇎",
                        "&nharr;": "↮",
                        "&nhpar;": "⫲",
                        "&ni;": "∋",
                        "&nis;": "⋼",
                        "&nisd;": "⋺",
                        "&niv;": "∋",
                        "&njcy;": "њ",
                        "&nlArr;": "⇍",
                        "&nlE;": "≦̸",
                        "&nlarr;": "↚",
                        "&nldr;": "‥",
                        "&nle;": "≰",
                        "&nleftarrow;": "↚",
                        "&nleftrightarrow;": "↮",
                        "&nleq;": "≰",
                        "&nleqq;": "≦̸",
                        "&nleqslant;": "⩽̸",
                        "&nles;": "⩽̸",
                        "&nless;": "≮",
                        "&nlsim;": "≴",
                        "&nlt;": "≮",
                        "&nltri;": "⋪",
                        "&nltrie;": "⋬",
                        "&nmid;": "∤",
                        "&nopf;": "\uD835\uDD5F",
                        "&not": "\xac",
                        "&not;": "\xac",
                        "&notin;": "∉",
                        "&notinE;": "⋹̸",
                        "&notindot;": "⋵̸",
                        "&notinva;": "∉",
                        "&notinvb;": "⋷",
                        "&notinvc;": "⋶",
                        "&notni;": "∌",
                        "&notniva;": "∌",
                        "&notnivb;": "⋾",
                        "&notnivc;": "⋽",
                        "&npar;": "∦",
                        "&nparallel;": "∦",
                        "&nparsl;": "⫽⃥",
                        "&npart;": "∂̸",
                        "&npolint;": "⨔",
                        "&npr;": "⊀",
                        "&nprcue;": "⋠",
                        "&npre;": "⪯̸",
                        "&nprec;": "⊀",
                        "&npreceq;": "⪯̸",
                        "&nrArr;": "⇏",
                        "&nrarr;": "↛",
                        "&nrarrc;": "⤳̸",
                        "&nrarrw;": "↝̸",
                        "&nrightarrow;": "↛",
                        "&nrtri;": "⋫",
                        "&nrtrie;": "⋭",
                        "&nsc;": "⊁",
                        "&nsccue;": "⋡",
                        "&nsce;": "⪰̸",
                        "&nscr;": "\uD835\uDCC3",
                        "&nshortmid;": "∤",
                        "&nshortparallel;": "∦",
                        "&nsim;": "≁",
                        "&nsime;": "≄",
                        "&nsimeq;": "≄",
                        "&nsmid;": "∤",
                        "&nspar;": "∦",
                        "&nsqsube;": "⋢",
                        "&nsqsupe;": "⋣",
                        "&nsub;": "⊄",
                        "&nsubE;": "⫅̸",
                        "&nsube;": "⊈",
                        "&nsubset;": "⊂⃒",
                        "&nsubseteq;": "⊈",
                        "&nsubseteqq;": "⫅̸",
                        "&nsucc;": "⊁",
                        "&nsucceq;": "⪰̸",
                        "&nsup;": "⊅",
                        "&nsupE;": "⫆̸",
                        "&nsupe;": "⊉",
                        "&nsupset;": "⊃⃒",
                        "&nsupseteq;": "⊉",
                        "&nsupseteqq;": "⫆̸",
                        "&ntgl;": "≹",
                        "&ntilde": "\xf1",
                        "&ntilde;": "\xf1",
                        "&ntlg;": "≸",
                        "&ntriangleleft;": "⋪",
                        "&ntrianglelefteq;": "⋬",
                        "&ntriangleright;": "⋫",
                        "&ntrianglerighteq;": "⋭",
                        "&nu;": "ν",
                        "&num;": "#",
                        "&numero;": "№",
                        "&numsp;": " ",
                        "&nvDash;": "⊭",
                        "&nvHarr;": "⤄",
                        "&nvap;": "≍⃒",
                        "&nvdash;": "⊬",
                        "&nvge;": "≥⃒",
                        "&nvgt;": ">⃒",
                        "&nvinfin;": "⧞",
                        "&nvlArr;": "⤂",
                        "&nvle;": "≤⃒",
                        "&nvlt;": "<⃒",
                        "&nvltrie;": "⊴⃒",
                        "&nvrArr;": "⤃",
                        "&nvrtrie;": "⊵⃒",
                        "&nvsim;": "∼⃒",
                        "&nwArr;": "⇖",
                        "&nwarhk;": "⤣",
                        "&nwarr;": "↖",
                        "&nwarrow;": "↖",
                        "&nwnear;": "⤧",
                        "&oS;": "Ⓢ",
                        "&oacute": "\xf3",
                        "&oacute;": "\xf3",
                        "&oast;": "⊛",
                        "&ocir;": "⊚",
                        "&ocirc": "\xf4",
                        "&ocirc;": "\xf4",
                        "&ocy;": "о",
                        "&odash;": "⊝",
                        "&odblac;": "ő",
                        "&odiv;": "⨸",
                        "&odot;": "⊙",
                        "&odsold;": "⦼",
                        "&oelig;": "œ",
                        "&ofcir;": "⦿",
                        "&ofr;": "\uD835\uDD2C",
                        "&ogon;": "˛",
                        "&ograve": "\xf2",
                        "&ograve;": "\xf2",
                        "&ogt;": "⧁",
                        "&ohbar;": "⦵",
                        "&ohm;": "Ω",
                        "&oint;": "∮",
                        "&olarr;": "↺",
                        "&olcir;": "⦾",
                        "&olcross;": "⦻",
                        "&oline;": "‾",
                        "&olt;": "⧀",
                        "&omacr;": "ō",
                        "&omega;": "ω",
                        "&omicron;": "ο",
                        "&omid;": "⦶",
                        "&ominus;": "⊖",
                        "&oopf;": "\uD835\uDD60",
                        "&opar;": "⦷",
                        "&operp;": "⦹",
                        "&oplus;": "⊕",
                        "&or;": "∨",
                        "&orarr;": "↻",
                        "&ord;": "⩝",
                        "&order;": "ℴ",
                        "&orderof;": "ℴ",
                        "&ordf": "\xaa",
                        "&ordf;": "\xaa",
                        "&ordm": "\xba",
                        "&ordm;": "\xba",
                        "&origof;": "⊶",
                        "&oror;": "⩖",
                        "&orslope;": "⩗",
                        "&orv;": "⩛",
                        "&oscr;": "ℴ",
                        "&oslash": "\xf8",
                        "&oslash;": "\xf8",
                        "&osol;": "⊘",
                        "&otilde": "\xf5",
                        "&otilde;": "\xf5",
                        "&otimes;": "⊗",
                        "&otimesas;": "⨶",
                        "&ouml": "\xf6",
                        "&ouml;": "\xf6",
                        "&ovbar;": "⌽",
                        "&par;": "∥",
                        "&para": "\xb6",
                        "&para;": "\xb6",
                        "&parallel;": "∥",
                        "&parsim;": "⫳",
                        "&parsl;": "⫽",
                        "&part;": "∂",
                        "&pcy;": "п",
                        "&percnt;": "%",
                        "&period;": ".",
                        "&permil;": "‰",
                        "&perp;": "⊥",
                        "&pertenk;": "‱",
                        "&pfr;": "\uD835\uDD2D",
                        "&phi;": "φ",
                        "&phiv;": "ϕ",
                        "&phmmat;": "ℳ",
                        "&phone;": "☎",
                        "&pi;": "π",
                        "&pitchfork;": "⋔",
                        "&piv;": "ϖ",
                        "&planck;": "ℏ",
                        "&planckh;": "ℎ",
                        "&plankv;": "ℏ",
                        "&plus;": "+",
                        "&plusacir;": "⨣",
                        "&plusb;": "⊞",
                        "&pluscir;": "⨢",
                        "&plusdo;": "∔",
                        "&plusdu;": "⨥",
                        "&pluse;": "⩲",
                        "&plusmn": "\xb1",
                        "&plusmn;": "\xb1",
                        "&plussim;": "⨦",
                        "&plustwo;": "⨧",
                        "&pm;": "\xb1",
                        "&pointint;": "⨕",
                        "&popf;": "\uD835\uDD61",
                        "&pound": "\xa3",
                        "&pound;": "\xa3",
                        "&pr;": "≺",
                        "&prE;": "⪳",
                        "&prap;": "⪷",
                        "&prcue;": "≼",
                        "&pre;": "⪯",
                        "&prec;": "≺",
                        "&precapprox;": "⪷",
                        "&preccurlyeq;": "≼",
                        "&preceq;": "⪯",
                        "&precnapprox;": "⪹",
                        "&precneqq;": "⪵",
                        "&precnsim;": "⋨",
                        "&precsim;": "≾",
                        "&prime;": "′",
                        "&primes;": "ℙ",
                        "&prnE;": "⪵",
                        "&prnap;": "⪹",
                        "&prnsim;": "⋨",
                        "&prod;": "∏",
                        "&profalar;": "⌮",
                        "&profline;": "⌒",
                        "&profsurf;": "⌓",
                        "&prop;": "∝",
                        "&propto;": "∝",
                        "&prsim;": "≾",
                        "&prurel;": "⊰",
                        "&pscr;": "\uD835\uDCC5",
                        "&psi;": "ψ",
                        "&puncsp;": " ",
                        "&qfr;": "\uD835\uDD2E",
                        "&qint;": "⨌",
                        "&qopf;": "\uD835\uDD62",
                        "&qprime;": "⁗",
                        "&qscr;": "\uD835\uDCC6",
                        "&quaternions;": "ℍ",
                        "&quatint;": "⨖",
                        "&quest;": "?",
                        "&questeq;": "≟",
                        "&quot": '"',
                        "&quot;": '"',
                        "&rAarr;": "⇛",
                        "&rArr;": "⇒",
                        "&rAtail;": "⤜",
                        "&rBarr;": "⤏",
                        "&rHar;": "⥤",
                        "&race;": "∽̱",
                        "&racute;": "ŕ",
                        "&radic;": "√",
                        "&raemptyv;": "⦳",
                        "&rang;": "⟩",
                        "&rangd;": "⦒",
                        "&range;": "⦥",
                        "&rangle;": "⟩",
                        "&raquo": "\xbb",
                        "&raquo;": "\xbb",
                        "&rarr;": "→",
                        "&rarrap;": "⥵",
                        "&rarrb;": "⇥",
                        "&rarrbfs;": "⤠",
                        "&rarrc;": "⤳",
                        "&rarrfs;": "⤞",
                        "&rarrhk;": "↪",
                        "&rarrlp;": "↬",
                        "&rarrpl;": "⥅",
                        "&rarrsim;": "⥴",
                        "&rarrtl;": "↣",
                        "&rarrw;": "↝",
                        "&ratail;": "⤚",
                        "&ratio;": "∶",
                        "&rationals;": "ℚ",
                        "&rbarr;": "⤍",
                        "&rbbrk;": "❳",
                        "&rbrace;": "}",
                        "&rbrack;": "]",
                        "&rbrke;": "⦌",
                        "&rbrksld;": "⦎",
                        "&rbrkslu;": "⦐",
                        "&rcaron;": "ř",
                        "&rcedil;": "ŗ",
                        "&rceil;": "⌉",
                        "&rcub;": "}",
                        "&rcy;": "р",
                        "&rdca;": "⤷",
                        "&rdldhar;": "⥩",
                        "&rdquo;": "”",
                        "&rdquor;": "”",
                        "&rdsh;": "↳",
                        "&real;": "ℜ",
                        "&realine;": "ℛ",
                        "&realpart;": "ℜ",
                        "&reals;": "ℝ",
                        "&rect;": "▭",
                        "&reg": "\xae",
                        "&reg;": "\xae",
                        "&rfisht;": "⥽",
                        "&rfloor;": "⌋",
                        "&rfr;": "\uD835\uDD2F",
                        "&rhard;": "⇁",
                        "&rharu;": "⇀",
                        "&rharul;": "⥬",
                        "&rho;": "ρ",
                        "&rhov;": "ϱ",
                        "&rightarrow;": "→",
                        "&rightarrowtail;": "↣",
                        "&rightharpoondown;": "⇁",
                        "&rightharpoonup;": "⇀",
                        "&rightleftarrows;": "⇄",
                        "&rightleftharpoons;": "⇌",
                        "&rightrightarrows;": "⇉",
                        "&rightsquigarrow;": "↝",
                        "&rightthreetimes;": "⋌",
                        "&ring;": "˚",
                        "&risingdotseq;": "≓",
                        "&rlarr;": "⇄",
                        "&rlhar;": "⇌",
                        "&rlm;": "‏",
                        "&rmoust;": "⎱",
                        "&rmoustache;": "⎱",
                        "&rnmid;": "⫮",
                        "&roang;": "⟭",
                        "&roarr;": "⇾",
                        "&robrk;": "⟧",
                        "&ropar;": "⦆",
                        "&ropf;": "\uD835\uDD63",
                        "&roplus;": "⨮",
                        "&rotimes;": "⨵",
                        "&rpar;": ")",
                        "&rpargt;": "⦔",
                        "&rppolint;": "⨒",
                        "&rrarr;": "⇉",
                        "&rsaquo;": "›",
                        "&rscr;": "\uD835\uDCC7",
                        "&rsh;": "↱",
                        "&rsqb;": "]",
                        "&rsquo;": "’",
                        "&rsquor;": "’",
                        "&rthree;": "⋌",
                        "&rtimes;": "⋊",
                        "&rtri;": "▹",
                        "&rtrie;": "⊵",
                        "&rtrif;": "▸",
                        "&rtriltri;": "⧎",
                        "&ruluhar;": "⥨",
                        "&rx;": "℞",
                        "&sacute;": "ś",
                        "&sbquo;": "‚",
                        "&sc;": "≻",
                        "&scE;": "⪴",
                        "&scap;": "⪸",
                        "&scaron;": "š",
                        "&sccue;": "≽",
                        "&sce;": "⪰",
                        "&scedil;": "ş",
                        "&scirc;": "ŝ",
                        "&scnE;": "⪶",
                        "&scnap;": "⪺",
                        "&scnsim;": "⋩",
                        "&scpolint;": "⨓",
                        "&scsim;": "≿",
                        "&scy;": "с",
                        "&sdot;": "⋅",
                        "&sdotb;": "⊡",
                        "&sdote;": "⩦",
                        "&seArr;": "⇘",
                        "&searhk;": "⤥",
                        "&searr;": "↘",
                        "&searrow;": "↘",
                        "&sect": "\xa7",
                        "&sect;": "\xa7",
                        "&semi;": ";",
                        "&seswar;": "⤩",
                        "&setminus;": "∖",
                        "&setmn;": "∖",
                        "&sext;": "✶",
                        "&sfr;": "\uD835\uDD30",
                        "&sfrown;": "⌢",
                        "&sharp;": "♯",
                        "&shchcy;": "щ",
                        "&shcy;": "ш",
                        "&shortmid;": "∣",
                        "&shortparallel;": "∥",
                        "&shy": "\xad",
                        "&shy;": "\xad",
                        "&sigma;": "σ",
                        "&sigmaf;": "ς",
                        "&sigmav;": "ς",
                        "&sim;": "∼",
                        "&simdot;": "⩪",
                        "&sime;": "≃",
                        "&simeq;": "≃",
                        "&simg;": "⪞",
                        "&simgE;": "⪠",
                        "&siml;": "⪝",
                        "&simlE;": "⪟",
                        "&simne;": "≆",
                        "&simplus;": "⨤",
                        "&simrarr;": "⥲",
                        "&slarr;": "←",
                        "&smallsetminus;": "∖",
                        "&smashp;": "⨳",
                        "&smeparsl;": "⧤",
                        "&smid;": "∣",
                        "&smile;": "⌣",
                        "&smt;": "⪪",
                        "&smte;": "⪬",
                        "&smtes;": "⪬︀",
                        "&softcy;": "ь",
                        "&sol;": "/",
                        "&solb;": "⧄",
                        "&solbar;": "⌿",
                        "&sopf;": "\uD835\uDD64",
                        "&spades;": "♠",
                        "&spadesuit;": "♠",
                        "&spar;": "∥",
                        "&sqcap;": "⊓",
                        "&sqcaps;": "⊓︀",
                        "&sqcup;": "⊔",
                        "&sqcups;": "⊔︀",
                        "&sqsub;": "⊏",
                        "&sqsube;": "⊑",
                        "&sqsubset;": "⊏",
                        "&sqsubseteq;": "⊑",
                        "&sqsup;": "⊐",
                        "&sqsupe;": "⊒",
                        "&sqsupset;": "⊐",
                        "&sqsupseteq;": "⊒",
                        "&squ;": "□",
                        "&square;": "□",
                        "&squarf;": "▪",
                        "&squf;": "▪",
                        "&srarr;": "→",
                        "&sscr;": "\uD835\uDCC8",
                        "&ssetmn;": "∖",
                        "&ssmile;": "⌣",
                        "&sstarf;": "⋆",
                        "&star;": "☆",
                        "&starf;": "★",
                        "&straightepsilon;": "ϵ",
                        "&straightphi;": "ϕ",
                        "&strns;": "\xaf",
                        "&sub;": "⊂",
                        "&subE;": "⫅",
                        "&subdot;": "⪽",
                        "&sube;": "⊆",
                        "&subedot;": "⫃",
                        "&submult;": "⫁",
                        "&subnE;": "⫋",
                        "&subne;": "⊊",
                        "&subplus;": "⪿",
                        "&subrarr;": "⥹",
                        "&subset;": "⊂",
                        "&subseteq;": "⊆",
                        "&subseteqq;": "⫅",
                        "&subsetneq;": "⊊",
                        "&subsetneqq;": "⫋",
                        "&subsim;": "⫇",
                        "&subsub;": "⫕",
                        "&subsup;": "⫓",
                        "&succ;": "≻",
                        "&succapprox;": "⪸",
                        "&succcurlyeq;": "≽",
                        "&succeq;": "⪰",
                        "&succnapprox;": "⪺",
                        "&succneqq;": "⪶",
                        "&succnsim;": "⋩",
                        "&succsim;": "≿",
                        "&sum;": "∑",
                        "&sung;": "♪",
                        "&sup1": "\xb9",
                        "&sup1;": "\xb9",
                        "&sup2": "\xb2",
                        "&sup2;": "\xb2",
                        "&sup3": "\xb3",
                        "&sup3;": "\xb3",
                        "&sup;": "⊃",
                        "&supE;": "⫆",
                        "&supdot;": "⪾",
                        "&supdsub;": "⫘",
                        "&supe;": "⊇",
                        "&supedot;": "⫄",
                        "&suphsol;": "⟉",
                        "&suphsub;": "⫗",
                        "&suplarr;": "⥻",
                        "&supmult;": "⫂",
                        "&supnE;": "⫌",
                        "&supne;": "⊋",
                        "&supplus;": "⫀",
                        "&supset;": "⊃",
                        "&supseteq;": "⊇",
                        "&supseteqq;": "⫆",
                        "&supsetneq;": "⊋",
                        "&supsetneqq;": "⫌",
                        "&supsim;": "⫈",
                        "&supsub;": "⫔",
                        "&supsup;": "⫖",
                        "&swArr;": "⇙",
                        "&swarhk;": "⤦",
                        "&swarr;": "↙",
                        "&swarrow;": "↙",
                        "&swnwar;": "⤪",
                        "&szlig": "\xdf",
                        "&szlig;": "\xdf",
                        "&target;": "⌖",
                        "&tau;": "τ",
                        "&tbrk;": "⎴",
                        "&tcaron;": "ť",
                        "&tcedil;": "ţ",
                        "&tcy;": "т",
                        "&tdot;": "⃛",
                        "&telrec;": "⌕",
                        "&tfr;": "\uD835\uDD31",
                        "&there4;": "∴",
                        "&therefore;": "∴",
                        "&theta;": "θ",
                        "&thetasym;": "ϑ",
                        "&thetav;": "ϑ",
                        "&thickapprox;": "≈",
                        "&thicksim;": "∼",
                        "&thinsp;": " ",
                        "&thkap;": "≈",
                        "&thksim;": "∼",
                        "&thorn": "\xfe",
                        "&thorn;": "\xfe",
                        "&tilde;": "˜",
                        "&times": "\xd7",
                        "&times;": "\xd7",
                        "&timesb;": "⊠",
                        "&timesbar;": "⨱",
                        "&timesd;": "⨰",
                        "&tint;": "∭",
                        "&toea;": "⤨",
                        "&top;": "⊤",
                        "&topbot;": "⌶",
                        "&topcir;": "⫱",
                        "&topf;": "\uD835\uDD65",
                        "&topfork;": "⫚",
                        "&tosa;": "⤩",
                        "&tprime;": "‴",
                        "&trade;": "™",
                        "&triangle;": "▵",
                        "&triangledown;": "▿",
                        "&triangleleft;": "◃",
                        "&trianglelefteq;": "⊴",
                        "&triangleq;": "≜",
                        "&triangleright;": "▹",
                        "&trianglerighteq;": "⊵",
                        "&tridot;": "◬",
                        "&trie;": "≜",
                        "&triminus;": "⨺",
                        "&triplus;": "⨹",
                        "&trisb;": "⧍",
                        "&tritime;": "⨻",
                        "&trpezium;": "⏢",
                        "&tscr;": "\uD835\uDCC9",
                        "&tscy;": "ц",
                        "&tshcy;": "ћ",
                        "&tstrok;": "ŧ",
                        "&twixt;": "≬",
                        "&twoheadleftarrow;": "↞",
                        "&twoheadrightarrow;": "↠",
                        "&uArr;": "⇑",
                        "&uHar;": "⥣",
                        "&uacute": "\xfa",
                        "&uacute;": "\xfa",
                        "&uarr;": "↑",
                        "&ubrcy;": "ў",
                        "&ubreve;": "ŭ",
                        "&ucirc": "\xfb",
                        "&ucirc;": "\xfb",
                        "&ucy;": "у",
                        "&udarr;": "⇅",
                        "&udblac;": "ű",
                        "&udhar;": "⥮",
                        "&ufisht;": "⥾",
                        "&ufr;": "\uD835\uDD32",
                        "&ugrave": "\xf9",
                        "&ugrave;": "\xf9",
                        "&uharl;": "↿",
                        "&uharr;": "↾",
                        "&uhblk;": "▀",
                        "&ulcorn;": "⌜",
                        "&ulcorner;": "⌜",
                        "&ulcrop;": "⌏",
                        "&ultri;": "◸",
                        "&umacr;": "ū",
                        "&uml": "\xa8",
                        "&uml;": "\xa8",
                        "&uogon;": "ų",
                        "&uopf;": "\uD835\uDD66",
                        "&uparrow;": "↑",
                        "&updownarrow;": "↕",
                        "&upharpoonleft;": "↿",
                        "&upharpoonright;": "↾",
                        "&uplus;": "⊎",
                        "&upsi;": "υ",
                        "&upsih;": "ϒ",
                        "&upsilon;": "υ",
                        "&upuparrows;": "⇈",
                        "&urcorn;": "⌝",
                        "&urcorner;": "⌝",
                        "&urcrop;": "⌎",
                        "&uring;": "ů",
                        "&urtri;": "◹",
                        "&uscr;": "\uD835\uDCCA",
                        "&utdot;": "⋰",
                        "&utilde;": "ũ",
                        "&utri;": "▵",
                        "&utrif;": "▴",
                        "&uuarr;": "⇈",
                        "&uuml": "\xfc",
                        "&uuml;": "\xfc",
                        "&uwangle;": "⦧",
                        "&vArr;": "⇕",
                        "&vBar;": "⫨",
                        "&vBarv;": "⫩",
                        "&vDash;": "⊨",
                        "&vangrt;": "⦜",
                        "&varepsilon;": "ϵ",
                        "&varkappa;": "ϰ",
                        "&varnothing;": "∅",
                        "&varphi;": "ϕ",
                        "&varpi;": "ϖ",
                        "&varpropto;": "∝",
                        "&varr;": "↕",
                        "&varrho;": "ϱ",
                        "&varsigma;": "ς",
                        "&varsubsetneq;": "⊊︀",
                        "&varsubsetneqq;": "⫋︀",
                        "&varsupsetneq;": "⊋︀",
                        "&varsupsetneqq;": "⫌︀",
                        "&vartheta;": "ϑ",
                        "&vartriangleleft;": "⊲",
                        "&vartriangleright;": "⊳",
                        "&vcy;": "в",
                        "&vdash;": "⊢",
                        "&vee;": "∨",
                        "&veebar;": "⊻",
                        "&veeeq;": "≚",
                        "&vellip;": "⋮",
                        "&verbar;": "|",
                        "&vert;": "|",
                        "&vfr;": "\uD835\uDD33",
                        "&vltri;": "⊲",
                        "&vnsub;": "⊂⃒",
                        "&vnsup;": "⊃⃒",
                        "&vopf;": "\uD835\uDD67",
                        "&vprop;": "∝",
                        "&vrtri;": "⊳",
                        "&vscr;": "\uD835\uDCCB",
                        "&vsubnE;": "⫋︀",
                        "&vsubne;": "⊊︀",
                        "&vsupnE;": "⫌︀",
                        "&vsupne;": "⊋︀",
                        "&vzigzag;": "⦚",
                        "&wcirc;": "ŵ",
                        "&wedbar;": "⩟",
                        "&wedge;": "∧",
                        "&wedgeq;": "≙",
                        "&weierp;": "℘",
                        "&wfr;": "\uD835\uDD34",
                        "&wopf;": "\uD835\uDD68",
                        "&wp;": "℘",
                        "&wr;": "≀",
                        "&wreath;": "≀",
                        "&wscr;": "\uD835\uDCCC",
                        "&xcap;": "⋂",
                        "&xcirc;": "◯",
                        "&xcup;": "⋃",
                        "&xdtri;": "▽",
                        "&xfr;": "\uD835\uDD35",
                        "&xhArr;": "⟺",
                        "&xharr;": "⟷",
                        "&xi;": "ξ",
                        "&xlArr;": "⟸",
                        "&xlarr;": "⟵",
                        "&xmap;": "⟼",
                        "&xnis;": "⋻",
                        "&xodot;": "⨀",
                        "&xopf;": "\uD835\uDD69",
                        "&xoplus;": "⨁",
                        "&xotime;": "⨂",
                        "&xrArr;": "⟹",
                        "&xrarr;": "⟶",
                        "&xscr;": "\uD835\uDCCD",
                        "&xsqcup;": "⨆",
                        "&xuplus;": "⨄",
                        "&xutri;": "△",
                        "&xvee;": "⋁",
                        "&xwedge;": "⋀",
                        "&yacute": "\xfd",
                        "&yacute;": "\xfd",
                        "&yacy;": "я",
                        "&ycirc;": "ŷ",
                        "&ycy;": "ы",
                        "&yen": "\xa5",
                        "&yen;": "\xa5",
                        "&yfr;": "\uD835\uDD36",
                        "&yicy;": "ї",
                        "&yopf;": "\uD835\uDD6A",
                        "&yscr;": "\uD835\uDCCE",
                        "&yucy;": "ю",
                        "&yuml": "\xff",
                        "&yuml;": "\xff",
                        "&zacute;": "ź",
                        "&zcaron;": "ž",
                        "&zcy;": "з",
                        "&zdot;": "ż",
                        "&zeetrf;": "ℨ",
                        "&zeta;": "ζ",
                        "&zfr;": "\uD835\uDD37",
                        "&zhcy;": "ж",
                        "&zigrarr;": "⇝",
                        "&zopf;": "\uD835\uDD6B",
                        "&zscr;": "\uD835\uDCCF",
                        "&zwj;": "‍",
                        "&zwnj;": "‌"
                    },
                    characters: {
                        Æ: "&AElig;",
                        "&": "&amp;",
                        Á: "&Aacute;",
                        Ă: "&Abreve;",
                        Â: "&Acirc;",
                        А: "&Acy;",
                        𝔄: "&Afr;",
                        À: "&Agrave;",
                        Α: "&Alpha;",
                        Ā: "&Amacr;",
                        "⩓": "&And;",
                        Ą: "&Aogon;",
                        𝔸: "&Aopf;",
                        "⁡": "&af;",
                        Å: "&angst;",
                        𝒜: "&Ascr;",
                        "≔": "&coloneq;",
                        Ã: "&Atilde;",
                        Ä: "&Auml;",
                        "∖": "&ssetmn;",
                        "⫧": "&Barv;",
                        "⌆": "&doublebarwedge;",
                        Б: "&Bcy;",
                        "∵": "&because;",
                        ℬ: "&bernou;",
                        Β: "&Beta;",
                        𝔅: "&Bfr;",
                        𝔹: "&Bopf;",
                        "˘": "&breve;",
                        "≎": "&bump;",
                        Ч: "&CHcy;",
                        "\xa9": "&copy;",
                        Ć: "&Cacute;",
                        "⋒": "&Cap;",
                        ⅅ: "&DD;",
                        ℭ: "&Cfr;",
                        Č: "&Ccaron;",
                        Ç: "&Ccedil;",
                        Ĉ: "&Ccirc;",
                        "∰": "&Cconint;",
                        Ċ: "&Cdot;",
                        "\xb8": "&cedil;",
                        "\xb7": "&middot;",
                        Χ: "&Chi;",
                        "⊙": "&odot;",
                        "⊖": "&ominus;",
                        "⊕": "&oplus;",
                        "⊗": "&otimes;",
                        "∲": "&cwconint;",
                        "”": "&rdquor;",
                        "’": "&rsquor;",
                        "∷": "&Proportion;",
                        "⩴": "&Colone;",
                        "≡": "&equiv;",
                        "∯": "&DoubleContourIntegral;",
                        "∮": "&oint;",
                        ℂ: "&complexes;",
                        "∐": "&coprod;",
                        "∳": "&awconint;",
                        "⨯": "&Cross;",
                        𝒞: "&Cscr;",
                        "⋓": "&Cup;",
                        "≍": "&asympeq;",
                        "⤑": "&DDotrahd;",
                        Ђ: "&DJcy;",
                        Ѕ: "&DScy;",
                        Џ: "&DZcy;",
                        "‡": "&ddagger;",
                        "↡": "&Darr;",
                        "⫤": "&DoubleLeftTee;",
                        Ď: "&Dcaron;",
                        Д: "&Dcy;",
                        "∇": "&nabla;",
                        Δ: "&Delta;",
                        𝔇: "&Dfr;",
                        "\xb4": "&acute;",
                        "˙": "&dot;",
                        "˝": "&dblac;",
                        "`": "&grave;",
                        "˜": "&tilde;",
                        "⋄": "&diamond;",
                        ⅆ: "&dd;",
                        𝔻: "&Dopf;",
                        "\xa8": "&uml;",
                        "⃜": "&DotDot;",
                        "≐": "&esdot;",
                        "⇓": "&dArr;",
                        "⇐": "&lArr;",
                        "⇔": "&iff;",
                        "⟸": "&xlArr;",
                        "⟺": "&xhArr;",
                        "⟹": "&xrArr;",
                        "⇒": "&rArr;",
                        "⊨": "&vDash;",
                        "⇑": "&uArr;",
                        "⇕": "&vArr;",
                        "∥": "&spar;",
                        "↓": "&downarrow;",
                        "⤓": "&DownArrowBar;",
                        "⇵": "&duarr;",
                        "̑": "&DownBreve;",
                        "⥐": "&DownLeftRightVector;",
                        "⥞": "&DownLeftTeeVector;",
                        "↽": "&lhard;",
                        "⥖": "&DownLeftVectorBar;",
                        "⥟": "&DownRightTeeVector;",
                        "⇁": "&rightharpoondown;",
                        "⥗": "&DownRightVectorBar;",
                        "⊤": "&top;",
                        "↧": "&mapstodown;",
                        𝒟: "&Dscr;",
                        Đ: "&Dstrok;",
                        Ŋ: "&ENG;",
                        Ð: "&ETH;",
                        É: "&Eacute;",
                        Ě: "&Ecaron;",
                        Ê: "&Ecirc;",
                        Э: "&Ecy;",
                        Ė: "&Edot;",
                        𝔈: "&Efr;",
                        È: "&Egrave;",
                        "∈": "&isinv;",
                        Ē: "&Emacr;",
                        "◻": "&EmptySmallSquare;",
                        "▫": "&EmptyVerySmallSquare;",
                        Ę: "&Eogon;",
                        𝔼: "&Eopf;",
                        Ε: "&Epsilon;",
                        "⩵": "&Equal;",
                        "≂": "&esim;",
                        "⇌": "&rlhar;",
                        ℰ: "&expectation;",
                        "⩳": "&Esim;",
                        Η: "&Eta;",
                        Ë: "&Euml;",
                        "∃": "&exist;",
                        ⅇ: "&exponentiale;",
                        Ф: "&Fcy;",
                        𝔉: "&Ffr;",
                        "◼": "&FilledSmallSquare;",
                        "▪": "&squf;",
                        𝔽: "&Fopf;",
                        "∀": "&forall;",
                        ℱ: "&Fscr;",
                        Ѓ: "&GJcy;",
                        ">": "&gt;",
                        Γ: "&Gamma;",
                        Ϝ: "&Gammad;",
                        Ğ: "&Gbreve;",
                        Ģ: "&Gcedil;",
                        Ĝ: "&Gcirc;",
                        Г: "&Gcy;",
                        Ġ: "&Gdot;",
                        𝔊: "&Gfr;",
                        "⋙": "&ggg;",
                        𝔾: "&Gopf;",
                        "≥": "&geq;",
                        "⋛": "&gtreqless;",
                        "≧": "&geqq;",
                        "⪢": "&GreaterGreater;",
                        "≷": "&gtrless;",
                        "⩾": "&ges;",
                        "≳": "&gtrsim;",
                        𝒢: "&Gscr;",
                        "≫": "&gg;",
                        Ъ: "&HARDcy;",
                        ˇ: "&caron;",
                        "^": "&Hat;",
                        Ĥ: "&Hcirc;",
                        ℌ: "&Poincareplane;",
                        ℋ: "&hamilt;",
                        ℍ: "&quaternions;",
                        "─": "&boxh;",
                        Ħ: "&Hstrok;",
                        "≏": "&bumpeq;",
                        Е: "&IEcy;",
                        Ĳ: "&IJlig;",
                        Ё: "&IOcy;",
                        Í: "&Iacute;",
                        Î: "&Icirc;",
                        И: "&Icy;",
                        İ: "&Idot;",
                        ℑ: "&imagpart;",
                        Ì: "&Igrave;",
                        Ī: "&Imacr;",
                        ⅈ: "&ii;",
                        "∬": "&Int;",
                        "∫": "&int;",
                        "⋂": "&xcap;",
                        "⁣": "&ic;",
                        "⁢": "&it;",
                        Į: "&Iogon;",
                        𝕀: "&Iopf;",
                        Ι: "&Iota;",
                        ℐ: "&imagline;",
                        Ĩ: "&Itilde;",
                        І: "&Iukcy;",
                        Ï: "&Iuml;",
                        Ĵ: "&Jcirc;",
                        Й: "&Jcy;",
                        𝔍: "&Jfr;",
                        𝕁: "&Jopf;",
                        𝒥: "&Jscr;",
                        Ј: "&Jsercy;",
                        Є: "&Jukcy;",
                        Х: "&KHcy;",
                        Ќ: "&KJcy;",
                        Κ: "&Kappa;",
                        Ķ: "&Kcedil;",
                        К: "&Kcy;",
                        𝔎: "&Kfr;",
                        𝕂: "&Kopf;",
                        𝒦: "&Kscr;",
                        Љ: "&LJcy;",
                        "<": "&lt;",
                        Ĺ: "&Lacute;",
                        Λ: "&Lambda;",
                        "⟪": "&Lang;",
                        ℒ: "&lagran;",
                        "↞": "&twoheadleftarrow;",
                        Ľ: "&Lcaron;",
                        Ļ: "&Lcedil;",
                        Л: "&Lcy;",
                        "⟨": "&langle;",
                        "←": "&slarr;",
                        "⇤": "&larrb;",
                        "⇆": "&lrarr;",
                        "⌈": "&lceil;",
                        "⟦": "&lobrk;",
                        "⥡": "&LeftDownTeeVector;",
                        "⇃": "&downharpoonleft;",
                        "⥙": "&LeftDownVectorBar;",
                        "⌊": "&lfloor;",
                        "↔": "&leftrightarrow;",
                        "⥎": "&LeftRightVector;",
                        "⊣": "&dashv;",
                        "↤": "&mapstoleft;",
                        "⥚": "&LeftTeeVector;",
                        "⊲": "&vltri;",
                        "⧏": "&LeftTriangleBar;",
                        "⊴": "&trianglelefteq;",
                        "⥑": "&LeftUpDownVector;",
                        "⥠": "&LeftUpTeeVector;",
                        "↿": "&upharpoonleft;",
                        "⥘": "&LeftUpVectorBar;",
                        "↼": "&lharu;",
                        "⥒": "&LeftVectorBar;",
                        "⋚": "&lesseqgtr;",
                        "≦": "&leqq;",
                        "≶": "&lg;",
                        "⪡": "&LessLess;",
                        "⩽": "&les;",
                        "≲": "&lsim;",
                        𝔏: "&Lfr;",
                        "⋘": "&Ll;",
                        "⇚": "&lAarr;",
                        Ŀ: "&Lmidot;",
                        "⟵": "&xlarr;",
                        "⟷": "&xharr;",
                        "⟶": "&xrarr;",
                        𝕃: "&Lopf;",
                        "↙": "&swarrow;",
                        "↘": "&searrow;",
                        "↰": "&lsh;",
                        Ł: "&Lstrok;",
                        "≪": "&ll;",
                        "⤅": "&Map;",
                        М: "&Mcy;",
                        " ": "&MediumSpace;",
                        ℳ: "&phmmat;",
                        𝔐: "&Mfr;",
                        "∓": "&mp;",
                        𝕄: "&Mopf;",
                        Μ: "&Mu;",
                        Њ: "&NJcy;",
                        Ń: "&Nacute;",
                        Ň: "&Ncaron;",
                        Ņ: "&Ncedil;",
                        Н: "&Ncy;",
                        "​": "&ZeroWidthSpace;",
                        "\n": "&NewLine;",
                        𝔑: "&Nfr;",
                        "⁠": "&NoBreak;",
                        "\xa0": "&nbsp;",
                        ℕ: "&naturals;",
                        "⫬": "&Not;",
                        "≢": "&nequiv;",
                        "≭": "&NotCupCap;",
                        "∦": "&nspar;",
                        "∉": "&notinva;",
                        "≠": "&ne;",
                        "≂̸": "&nesim;",
                        "∄": "&nexists;",
                        "≯": "&ngtr;",
                        "≱": "&ngeq;",
                        "≧̸": "&ngeqq;",
                        "≫̸": "&nGtv;",
                        "≹": "&ntgl;",
                        "⩾̸": "&nges;",
                        "≵": "&ngsim;",
                        "≎̸": "&nbump;",
                        "≏̸": "&nbumpe;",
                        "⋪": "&ntriangleleft;",
                        "⧏̸": "&NotLeftTriangleBar;",
                        "⋬": "&ntrianglelefteq;",
                        "≮": "&nlt;",
                        "≰": "&nleq;",
                        "≸": "&ntlg;",
                        "≪̸": "&nLtv;",
                        "⩽̸": "&nles;",
                        "≴": "&nlsim;",
                        "⪢̸": "&NotNestedGreaterGreater;",
                        "⪡̸": "&NotNestedLessLess;",
                        "⊀": "&nprec;",
                        "⪯̸": "&npreceq;",
                        "⋠": "&nprcue;",
                        "∌": "&notniva;",
                        "⋫": "&ntriangleright;",
                        "⧐̸": "&NotRightTriangleBar;",
                        "⋭": "&ntrianglerighteq;",
                        "⊏̸": "&NotSquareSubset;",
                        "⋢": "&nsqsube;",
                        "⊐̸": "&NotSquareSuperset;",
                        "⋣": "&nsqsupe;",
                        "⊂⃒": "&vnsub;",
                        "⊈": "&nsubseteq;",
                        "⊁": "&nsucc;",
                        "⪰̸": "&nsucceq;",
                        "⋡": "&nsccue;",
                        "≿̸": "&NotSucceedsTilde;",
                        "⊃⃒": "&vnsup;",
                        "⊉": "&nsupseteq;",
                        "≁": "&nsim;",
                        "≄": "&nsimeq;",
                        "≇": "&ncong;",
                        "≉": "&napprox;",
                        "∤": "&nsmid;",
                        𝒩: "&Nscr;",
                        Ñ: "&Ntilde;",
                        Ν: "&Nu;",
                        Œ: "&OElig;",
                        Ó: "&Oacute;",
                        Ô: "&Ocirc;",
                        О: "&Ocy;",
                        Ő: "&Odblac;",
                        𝔒: "&Ofr;",
                        Ò: "&Ograve;",
                        Ō: "&Omacr;",
                        Ω: "&ohm;",
                        Ο: "&Omicron;",
                        𝕆: "&Oopf;",
                        "“": "&ldquo;",
                        "‘": "&lsquo;",
                        "⩔": "&Or;",
                        𝒪: "&Oscr;",
                        Ø: "&Oslash;",
                        Õ: "&Otilde;",
                        "⨷": "&Otimes;",
                        Ö: "&Ouml;",
                        "‾": "&oline;",
                        "⏞": "&OverBrace;",
                        "⎴": "&tbrk;",
                        "⏜": "&OverParenthesis;",
                        "∂": "&part;",
                        П: "&Pcy;",
                        𝔓: "&Pfr;",
                        Φ: "&Phi;",
                        Π: "&Pi;",
                        "\xb1": "&pm;",
                        ℙ: "&primes;",
                        "⪻": "&Pr;",
                        "≺": "&prec;",
                        "⪯": "&preceq;",
                        "≼": "&preccurlyeq;",
                        "≾": "&prsim;",
                        "″": "&Prime;",
                        "∏": "&prod;",
                        "∝": "&vprop;",
                        𝒫: "&Pscr;",
                        Ψ: "&Psi;",
                        '"': "&quot;",
                        𝔔: "&Qfr;",
                        ℚ: "&rationals;",
                        𝒬: "&Qscr;",
                        "⤐": "&drbkarow;",
                        "\xae": "&reg;",
                        Ŕ: "&Racute;",
                        "⟫": "&Rang;",
                        "↠": "&twoheadrightarrow;",
                        "⤖": "&Rarrtl;",
                        Ř: "&Rcaron;",
                        Ŗ: "&Rcedil;",
                        Р: "&Rcy;",
                        ℜ: "&realpart;",
                        "∋": "&niv;",
                        "⇋": "&lrhar;",
                        "⥯": "&duhar;",
                        Ρ: "&Rho;",
                        "⟩": "&rangle;",
                        "→": "&srarr;",
                        "⇥": "&rarrb;",
                        "⇄": "&rlarr;",
                        "⌉": "&rceil;",
                        "⟧": "&robrk;",
                        "⥝": "&RightDownTeeVector;",
                        "⇂": "&downharpoonright;",
                        "⥕": "&RightDownVectorBar;",
                        "⌋": "&rfloor;",
                        "⊢": "&vdash;",
                        "↦": "&mapsto;",
                        "⥛": "&RightTeeVector;",
                        "⊳": "&vrtri;",
                        "⧐": "&RightTriangleBar;",
                        "⊵": "&trianglerighteq;",
                        "⥏": "&RightUpDownVector;",
                        "⥜": "&RightUpTeeVector;",
                        "↾": "&upharpoonright;",
                        "⥔": "&RightUpVectorBar;",
                        "⇀": "&rightharpoonup;",
                        "⥓": "&RightVectorBar;",
                        ℝ: "&reals;",
                        "⥰": "&RoundImplies;",
                        "⇛": "&rAarr;",
                        ℛ: "&realine;",
                        "↱": "&rsh;",
                        "⧴": "&RuleDelayed;",
                        Щ: "&SHCHcy;",
                        Ш: "&SHcy;",
                        Ь: "&SOFTcy;",
                        Ś: "&Sacute;",
                        "⪼": "&Sc;",
                        Š: "&Scaron;",
                        Ş: "&Scedil;",
                        Ŝ: "&Scirc;",
                        С: "&Scy;",
                        𝔖: "&Sfr;",
                        "↑": "&uparrow;",
                        Σ: "&Sigma;",
                        "∘": "&compfn;",
                        𝕊: "&Sopf;",
                        "√": "&radic;",
                        "□": "&square;",
                        "⊓": "&sqcap;",
                        "⊏": "&sqsubset;",
                        "⊑": "&sqsubseteq;",
                        "⊐": "&sqsupset;",
                        "⊒": "&sqsupseteq;",
                        "⊔": "&sqcup;",
                        𝒮: "&Sscr;",
                        "⋆": "&sstarf;",
                        "⋐": "&Subset;",
                        "⊆": "&subseteq;",
                        "≻": "&succ;",
                        "⪰": "&succeq;",
                        "≽": "&succcurlyeq;",
                        "≿": "&succsim;",
                        "∑": "&sum;",
                        "⋑": "&Supset;",
                        "⊃": "&supset;",
                        "⊇": "&supseteq;",
                        Þ: "&THORN;",
                        "™": "&trade;",
                        Ћ: "&TSHcy;",
                        Ц: "&TScy;",
                        "	": "&Tab;",
                        Τ: "&Tau;",
                        Ť: "&Tcaron;",
                        Ţ: "&Tcedil;",
                        Т: "&Tcy;",
                        𝔗: "&Tfr;",
                        "∴": "&therefore;",
                        Θ: "&Theta;",
                        "  ": "&ThickSpace;",
                        " ": "&thinsp;",
                        "∼": "&thksim;",
                        "≃": "&simeq;",
                        "≅": "&cong;",
                        "≈": "&thkap;",
                        𝕋: "&Topf;",
                        "⃛": "&tdot;",
                        𝒯: "&Tscr;",
                        Ŧ: "&Tstrok;",
                        Ú: "&Uacute;",
                        "↟": "&Uarr;",
                        "⥉": "&Uarrocir;",
                        Ў: "&Ubrcy;",
                        Ŭ: "&Ubreve;",
                        Û: "&Ucirc;",
                        У: "&Ucy;",
                        Ű: "&Udblac;",
                        𝔘: "&Ufr;",
                        Ù: "&Ugrave;",
                        Ū: "&Umacr;",
                        _: "&lowbar;",
                        "⏟": "&UnderBrace;",
                        "⎵": "&bbrk;",
                        "⏝": "&UnderParenthesis;",
                        "⋃": "&xcup;",
                        "⊎": "&uplus;",
                        Ų: "&Uogon;",
                        𝕌: "&Uopf;",
                        "⤒": "&UpArrowBar;",
                        "⇅": "&udarr;",
                        "↕": "&varr;",
                        "⥮": "&udhar;",
                        "⊥": "&perp;",
                        "↥": "&mapstoup;",
                        "↖": "&nwarrow;",
                        "↗": "&nearrow;",
                        ϒ: "&upsih;",
                        Υ: "&Upsilon;",
                        Ů: "&Uring;",
                        𝒰: "&Uscr;",
                        Ũ: "&Utilde;",
                        Ü: "&Uuml;",
                        "⊫": "&VDash;",
                        "⫫": "&Vbar;",
                        В: "&Vcy;",
                        "⊩": "&Vdash;",
                        "⫦": "&Vdashl;",
                        "⋁": "&xvee;",
                        "‖": "&Vert;",
                        "∣": "&smid;",
                        "|": "&vert;",
                        "❘": "&VerticalSeparator;",
                        "≀": "&wreath;",
                        " ": "&hairsp;",
                        𝔙: "&Vfr;",
                        𝕍: "&Vopf;",
                        𝒱: "&Vscr;",
                        "⊪": "&Vvdash;",
                        Ŵ: "&Wcirc;",
                        "⋀": "&xwedge;",
                        𝔚: "&Wfr;",
                        𝕎: "&Wopf;",
                        𝒲: "&Wscr;",
                        𝔛: "&Xfr;",
                        Ξ: "&Xi;",
                        𝕏: "&Xopf;",
                        𝒳: "&Xscr;",
                        Я: "&YAcy;",
                        Ї: "&YIcy;",
                        Ю: "&YUcy;",
                        Ý: "&Yacute;",
                        Ŷ: "&Ycirc;",
                        Ы: "&Ycy;",
                        𝔜: "&Yfr;",
                        𝕐: "&Yopf;",
                        𝒴: "&Yscr;",
                        Ÿ: "&Yuml;",
                        Ж: "&ZHcy;",
                        Ź: "&Zacute;",
                        Ž: "&Zcaron;",
                        З: "&Zcy;",
                        Ż: "&Zdot;",
                        Ζ: "&Zeta;",
                        ℨ: "&zeetrf;",
                        ℤ: "&integers;",
                        𝒵: "&Zscr;",
                        á: "&aacute;",
                        ă: "&abreve;",
                        "∾": "&mstpos;",
                        "∾̳": "&acE;",
                        "∿": "&acd;",
                        â: "&acirc;",
                        а: "&acy;",
                        æ: "&aelig;",
                        𝔞: "&afr;",
                        à: "&agrave;",
                        ℵ: "&aleph;",
                        α: "&alpha;",
                        ā: "&amacr;",
                        "⨿": "&amalg;",
                        "∧": "&wedge;",
                        "⩕": "&andand;",
                        "⩜": "&andd;",
                        "⩘": "&andslope;",
                        "⩚": "&andv;",
                        "∠": "&angle;",
                        "⦤": "&ange;",
                        "∡": "&measuredangle;",
                        "⦨": "&angmsdaa;",
                        "⦩": "&angmsdab;",
                        "⦪": "&angmsdac;",
                        "⦫": "&angmsdad;",
                        "⦬": "&angmsdae;",
                        "⦭": "&angmsdaf;",
                        "⦮": "&angmsdag;",
                        "⦯": "&angmsdah;",
                        "∟": "&angrt;",
                        "⊾": "&angrtvb;",
                        "⦝": "&angrtvbd;",
                        "∢": "&angsph;",
                        "⍼": "&angzarr;",
                        ą: "&aogon;",
                        𝕒: "&aopf;",
                        "⩰": "&apE;",
                        "⩯": "&apacir;",
                        "≊": "&approxeq;",
                        "≋": "&apid;",
                        "'": "&apos;",
                        å: "&aring;",
                        "\uD835\uDCB6": "&ascr;",
                        "*": "&midast;",
                        ã: "&atilde;",
                        ä: "&auml;",
                        "⨑": "&awint;",
                        "⫭": "&bNot;",
                        "≌": "&bcong;",
                        "϶": "&bepsi;",
                        "‵": "&bprime;",
                        "∽": "&bsim;",
                        "⋍": "&bsime;",
                        "⊽": "&barvee;",
                        "⌅": "&barwedge;",
                        "⎶": "&bbrktbrk;",
                        б: "&bcy;",
                        "„": "&ldquor;",
                        "⦰": "&bemptyv;",
                        β: "&beta;",
                        ℶ: "&beth;",
                        "≬": "&twixt;",
                        𝔟: "&bfr;",
                        "◯": "&xcirc;",
                        "⨀": "&xodot;",
                        "⨁": "&xoplus;",
                        "⨂": "&xotime;",
                        "⨆": "&xsqcup;",
                        "★": "&starf;",
                        "▽": "&xdtri;",
                        "△": "&xutri;",
                        "⨄": "&xuplus;",
                        "⤍": "&rbarr;",
                        "⧫": "&lozf;",
                        "▴": "&utrif;",
                        "▾": "&dtrif;",
                        "◂": "&ltrif;",
                        "▸": "&rtrif;",
                        "␣": "&blank;",
                        "▒": "&blk12;",
                        "░": "&blk14;",
                        "▓": "&blk34;",
                        "█": "&block;",
                        "=⃥": "&bne;",
                        "≡⃥": "&bnequiv;",
                        "⌐": "&bnot;",
                        𝕓: "&bopf;",
                        "⋈": "&bowtie;",
                        "╗": "&boxDL;",
                        "╔": "&boxDR;",
                        "╖": "&boxDl;",
                        "╓": "&boxDr;",
                        "═": "&boxH;",
                        "╦": "&boxHD;",
                        "╩": "&boxHU;",
                        "╤": "&boxHd;",
                        "╧": "&boxHu;",
                        "╝": "&boxUL;",
                        "╚": "&boxUR;",
                        "╜": "&boxUl;",
                        "╙": "&boxUr;",
                        "║": "&boxV;",
                        "╬": "&boxVH;",
                        "╣": "&boxVL;",
                        "╠": "&boxVR;",
                        "╫": "&boxVh;",
                        "╢": "&boxVl;",
                        "╟": "&boxVr;",
                        "⧉": "&boxbox;",
                        "╕": "&boxdL;",
                        "╒": "&boxdR;",
                        "┐": "&boxdl;",
                        "┌": "&boxdr;",
                        "╥": "&boxhD;",
                        "╨": "&boxhU;",
                        "┬": "&boxhd;",
                        "┴": "&boxhu;",
                        "⊟": "&minusb;",
                        "⊞": "&plusb;",
                        "⊠": "&timesb;",
                        "╛": "&boxuL;",
                        "╘": "&boxuR;",
                        "┘": "&boxul;",
                        "└": "&boxur;",
                        "│": "&boxv;",
                        "╪": "&boxvH;",
                        "╡": "&boxvL;",
                        "╞": "&boxvR;",
                        "┼": "&boxvh;",
                        "┤": "&boxvl;",
                        "├": "&boxvr;",
                        "\xa6": "&brvbar;",
                        𝒷: "&bscr;",
                        "⁏": "&bsemi;",
                        "\\": "&bsol;",
                        "⧅": "&bsolb;",
                        "⟈": "&bsolhsub;",
                        "•": "&bullet;",
                        "⪮": "&bumpE;",
                        ć: "&cacute;",
                        "∩": "&cap;",
                        "⩄": "&capand;",
                        "⩉": "&capbrcup;",
                        "⩋": "&capcap;",
                        "⩇": "&capcup;",
                        "⩀": "&capdot;",
                        "∩︀": "&caps;",
                        "⁁": "&caret;",
                        "⩍": "&ccaps;",
                        č: "&ccaron;",
                        ç: "&ccedil;",
                        ĉ: "&ccirc;",
                        "⩌": "&ccups;",
                        "⩐": "&ccupssm;",
                        ċ: "&cdot;",
                        "⦲": "&cemptyv;",
                        "\xa2": "&cent;",
                        𝔠: "&cfr;",
                        ч: "&chcy;",
                        "✓": "&checkmark;",
                        χ: "&chi;",
                        "○": "&cir;",
                        "⧃": "&cirE;",
                        ˆ: "&circ;",
                        "≗": "&cire;",
                        "↺": "&olarr;",
                        "↻": "&orarr;",
                        "Ⓢ": "&oS;",
                        "⊛": "&oast;",
                        "⊚": "&ocir;",
                        "⊝": "&odash;",
                        "⨐": "&cirfnint;",
                        "⫯": "&cirmid;",
                        "⧂": "&cirscir;",
                        "♣": "&clubsuit;",
                        ":": "&colon;",
                        ",": "&comma;",
                        "@": "&commat;",
                        "∁": "&complement;",
                        "⩭": "&congdot;",
                        𝕔: "&copf;",
                        "℗": "&copysr;",
                        "↵": "&crarr;",
                        "✗": "&cross;",
                        𝒸: "&cscr;",
                        "⫏": "&csub;",
                        "⫑": "&csube;",
                        "⫐": "&csup;",
                        "⫒": "&csupe;",
                        "⋯": "&ctdot;",
                        "⤸": "&cudarrl;",
                        "⤵": "&cudarrr;",
                        "⋞": "&curlyeqprec;",
                        "⋟": "&curlyeqsucc;",
                        "↶": "&curvearrowleft;",
                        "⤽": "&cularrp;",
                        "∪": "&cup;",
                        "⩈": "&cupbrcap;",
                        "⩆": "&cupcap;",
                        "⩊": "&cupcup;",
                        "⊍": "&cupdot;",
                        "⩅": "&cupor;",
                        "∪︀": "&cups;",
                        "↷": "&curvearrowright;",
                        "⤼": "&curarrm;",
                        "⋎": "&cuvee;",
                        "⋏": "&cuwed;",
                        "\xa4": "&curren;",
                        "∱": "&cwint;",
                        "⌭": "&cylcty;",
                        "⥥": "&dHar;",
                        "†": "&dagger;",
                        ℸ: "&daleth;",
                        "‐": "&hyphen;",
                        "⤏": "&rBarr;",
                        ď: "&dcaron;",
                        д: "&dcy;",
                        "⇊": "&downdownarrows;",
                        "⩷": "&eDDot;",
                        "\xb0": "&deg;",
                        δ: "&delta;",
                        "⦱": "&demptyv;",
                        "⥿": "&dfisht;",
                        𝔡: "&dfr;",
                        "♦": "&diams;",
                        ϝ: "&gammad;",
                        "⋲": "&disin;",
                        "\xf7": "&divide;",
                        "⋇": "&divonx;",
                        ђ: "&djcy;",
                        "⌞": "&llcorner;",
                        "⌍": "&dlcrop;",
                        $: "&dollar;",
                        𝕕: "&dopf;",
                        "≑": "&eDot;",
                        "∸": "&minusd;",
                        "∔": "&plusdo;",
                        "⊡": "&sdotb;",
                        "⌟": "&lrcorner;",
                        "⌌": "&drcrop;",
                        𝒹: "&dscr;",
                        ѕ: "&dscy;",
                        "⧶": "&dsol;",
                        đ: "&dstrok;",
                        "⋱": "&dtdot;",
                        "▿": "&triangledown;",
                        "⦦": "&dwangle;",
                        џ: "&dzcy;",
                        "⟿": "&dzigrarr;",
                        é: "&eacute;",
                        "⩮": "&easter;",
                        ě: "&ecaron;",
                        "≖": "&eqcirc;",
                        ê: "&ecirc;",
                        "≕": "&eqcolon;",
                        э: "&ecy;",
                        ė: "&edot;",
                        "≒": "&fallingdotseq;",
                        𝔢: "&efr;",
                        "⪚": "&eg;",
                        è: "&egrave;",
                        "⪖": "&eqslantgtr;",
                        "⪘": "&egsdot;",
                        "⪙": "&el;",
                        "⏧": "&elinters;",
                        ℓ: "&ell;",
                        "⪕": "&eqslantless;",
                        "⪗": "&elsdot;",
                        ē: "&emacr;",
                        "∅": "&varnothing;",
                        " ": "&emsp13;",
                        " ": "&emsp14;",
                        " ": "&emsp;",
                        ŋ: "&eng;",
                        " ": "&ensp;",
                        ę: "&eogon;",
                        𝕖: "&eopf;",
                        "⋕": "&epar;",
                        "⧣": "&eparsl;",
                        "⩱": "&eplus;",
                        ε: "&epsilon;",
                        ϵ: "&varepsilon;",
                        "=": "&equals;",
                        "≟": "&questeq;",
                        "⩸": "&equivDD;",
                        "⧥": "&eqvparsl;",
                        "≓": "&risingdotseq;",
                        "⥱": "&erarr;",
                        ℯ: "&escr;",
                        η: "&eta;",
                        ð: "&eth;",
                        ë: "&euml;",
                        "€": "&euro;",
                        "!": "&excl;",
                        ф: "&fcy;",
                        "♀": "&female;",
                        ﬃ: "&ffilig;",
                        ﬀ: "&fflig;",
                        ﬄ: "&ffllig;",
                        𝔣: "&ffr;",
                        ﬁ: "&filig;",
                        fj: "&fjlig;",
                        "♭": "&flat;",
                        ﬂ: "&fllig;",
                        "▱": "&fltns;",
                        ƒ: "&fnof;",
                        𝕗: "&fopf;",
                        "⋔": "&pitchfork;",
                        "⫙": "&forkv;",
                        "⨍": "&fpartint;",
                        "\xbd": "&half;",
                        "⅓": "&frac13;",
                        "\xbc": "&frac14;",
                        "⅕": "&frac15;",
                        "⅙": "&frac16;",
                        "⅛": "&frac18;",
                        "⅔": "&frac23;",
                        "⅖": "&frac25;",
                        "\xbe": "&frac34;",
                        "⅗": "&frac35;",
                        "⅜": "&frac38;",
                        "⅘": "&frac45;",
                        "⅚": "&frac56;",
                        "⅝": "&frac58;",
                        "⅞": "&frac78;",
                        "⁄": "&frasl;",
                        "⌢": "&sfrown;",
                        𝒻: "&fscr;",
                        "⪌": "&gtreqqless;",
                        ǵ: "&gacute;",
                        γ: "&gamma;",
                        "⪆": "&gtrapprox;",
                        ğ: "&gbreve;",
                        ĝ: "&gcirc;",
                        г: "&gcy;",
                        ġ: "&gdot;",
                        "⪩": "&gescc;",
                        "⪀": "&gesdot;",
                        "⪂": "&gesdoto;",
                        "⪄": "&gesdotol;",
                        "⋛︀": "&gesl;",
                        "⪔": "&gesles;",
                        𝔤: "&gfr;",
                        ℷ: "&gimel;",
                        ѓ: "&gjcy;",
                        "⪒": "&glE;",
                        "⪥": "&gla;",
                        "⪤": "&glj;",
                        "≩": "&gneqq;",
                        "⪊": "&gnapprox;",
                        "⪈": "&gneq;",
                        "⋧": "&gnsim;",
                        𝕘: "&gopf;",
                        ℊ: "&gscr;",
                        "⪎": "&gsime;",
                        "⪐": "&gsiml;",
                        "⪧": "&gtcc;",
                        "⩺": "&gtcir;",
                        "⋗": "&gtrdot;",
                        "⦕": "&gtlPar;",
                        "⩼": "&gtquest;",
                        "⥸": "&gtrarr;",
                        "≩︀": "&gvnE;",
                        ъ: "&hardcy;",
                        "⥈": "&harrcir;",
                        "↭": "&leftrightsquigarrow;",
                        ℏ: "&plankv;",
                        ĥ: "&hcirc;",
                        "♥": "&heartsuit;",
                        "…": "&mldr;",
                        "⊹": "&hercon;",
                        𝔥: "&hfr;",
                        "⤥": "&searhk;",
                        "⤦": "&swarhk;",
                        "⇿": "&hoarr;",
                        "∻": "&homtht;",
                        "↩": "&larrhk;",
                        "↪": "&rarrhk;",
                        𝕙: "&hopf;",
                        "―": "&horbar;",
                        𝒽: "&hscr;",
                        ħ: "&hstrok;",
                        "⁃": "&hybull;",
                        í: "&iacute;",
                        î: "&icirc;",
                        и: "&icy;",
                        е: "&iecy;",
                        "\xa1": "&iexcl;",
                        𝔦: "&ifr;",
                        ì: "&igrave;",
                        "⨌": "&qint;",
                        "∭": "&tint;",
                        "⧜": "&iinfin;",
                        "℩": "&iiota;",
                        ĳ: "&ijlig;",
                        ī: "&imacr;",
                        ı: "&inodot;",
                        "⊷": "&imof;",
                        Ƶ: "&imped;",
                        "℅": "&incare;",
                        "∞": "&infin;",
                        "⧝": "&infintie;",
                        "⊺": "&intercal;",
                        "⨗": "&intlarhk;",
                        "⨼": "&iprod;",
                        ё: "&iocy;",
                        į: "&iogon;",
                        𝕚: "&iopf;",
                        ι: "&iota;",
                        "\xbf": "&iquest;",
                        𝒾: "&iscr;",
                        "⋹": "&isinE;",
                        "⋵": "&isindot;",
                        "⋴": "&isins;",
                        "⋳": "&isinsv;",
                        ĩ: "&itilde;",
                        і: "&iukcy;",
                        ï: "&iuml;",
                        ĵ: "&jcirc;",
                        й: "&jcy;",
                        𝔧: "&jfr;",
                        ȷ: "&jmath;",
                        𝕛: "&jopf;",
                        𝒿: "&jscr;",
                        ј: "&jsercy;",
                        є: "&jukcy;",
                        κ: "&kappa;",
                        ϰ: "&varkappa;",
                        ķ: "&kcedil;",
                        к: "&kcy;",
                        𝔨: "&kfr;",
                        ĸ: "&kgreen;",
                        х: "&khcy;",
                        ќ: "&kjcy;",
                        𝕜: "&kopf;",
                        𝓀: "&kscr;",
                        "⤛": "&lAtail;",
                        "⤎": "&lBarr;",
                        "⪋": "&lesseqqgtr;",
                        "⥢": "&lHar;",
                        ĺ: "&lacute;",
                        "⦴": "&laemptyv;",
                        λ: "&lambda;",
                        "⦑": "&langd;",
                        "⪅": "&lessapprox;",
                        "\xab": "&laquo;",
                        "⤟": "&larrbfs;",
                        "⤝": "&larrfs;",
                        "↫": "&looparrowleft;",
                        "⤹": "&larrpl;",
                        "⥳": "&larrsim;",
                        "↢": "&leftarrowtail;",
                        "⪫": "&lat;",
                        "⤙": "&latail;",
                        "⪭": "&late;",
                        "⪭︀": "&lates;",
                        "⤌": "&lbarr;",
                        "❲": "&lbbrk;",
                        "{": "&lcub;",
                        "[": "&lsqb;",
                        "⦋": "&lbrke;",
                        "⦏": "&lbrksld;",
                        "⦍": "&lbrkslu;",
                        ľ: "&lcaron;",
                        ļ: "&lcedil;",
                        л: "&lcy;",
                        "⤶": "&ldca;",
                        "⥧": "&ldrdhar;",
                        "⥋": "&ldrushar;",
                        "↲": "&ldsh;",
                        "≤": "&leq;",
                        "⇇": "&llarr;",
                        "⋋": "&lthree;",
                        "⪨": "&lescc;",
                        "⩿": "&lesdot;",
                        "⪁": "&lesdoto;",
                        "⪃": "&lesdotor;",
                        "⋚︀": "&lesg;",
                        "⪓": "&lesges;",
                        "⋖": "&ltdot;",
                        "⥼": "&lfisht;",
                        𝔩: "&lfr;",
                        "⪑": "&lgE;",
                        "⥪": "&lharul;",
                        "▄": "&lhblk;",
                        љ: "&ljcy;",
                        "⥫": "&llhard;",
                        "◺": "&lltri;",
                        ŀ: "&lmidot;",
                        "⎰": "&lmoustache;",
                        "≨": "&lneqq;",
                        "⪉": "&lnapprox;",
                        "⪇": "&lneq;",
                        "⋦": "&lnsim;",
                        "⟬": "&loang;",
                        "⇽": "&loarr;",
                        "⟼": "&xmap;",
                        "↬": "&rarrlp;",
                        "⦅": "&lopar;",
                        𝕝: "&lopf;",
                        "⨭": "&loplus;",
                        "⨴": "&lotimes;",
                        "∗": "&lowast;",
                        "◊": "&lozenge;",
                        "(": "&lpar;",
                        "⦓": "&lparlt;",
                        "⥭": "&lrhard;",
                        "‎": "&lrm;",
                        "⊿": "&lrtri;",
                        "‹": "&lsaquo;",
                        𝓁: "&lscr;",
                        "⪍": "&lsime;",
                        "⪏": "&lsimg;",
                        "‚": "&sbquo;",
                        ł: "&lstrok;",
                        "⪦": "&ltcc;",
                        "⩹": "&ltcir;",
                        "⋉": "&ltimes;",
                        "⥶": "&ltlarr;",
                        "⩻": "&ltquest;",
                        "⦖": "&ltrPar;",
                        "◃": "&triangleleft;",
                        "⥊": "&lurdshar;",
                        "⥦": "&luruhar;",
                        "≨︀": "&lvnE;",
                        "∺": "&mDDot;",
                        "\xaf": "&strns;",
                        "♂": "&male;",
                        "✠": "&maltese;",
                        "▮": "&marker;",
                        "⨩": "&mcomma;",
                        м: "&mcy;",
                        "—": "&mdash;",
                        𝔪: "&mfr;",
                        "℧": "&mho;",
                        µ: "&micro;",
                        "⫰": "&midcir;",
                        "−": "&minus;",
                        "⨪": "&minusdu;",
                        "⫛": "&mlcp;",
                        "⊧": "&models;",
                        𝕞: "&mopf;",
                        𝓂: "&mscr;",
                        μ: "&mu;",
                        "⊸": "&mumap;",
                        "⋙̸": "&nGg;",
                        "≫⃒": "&nGt;",
                        "⇍": "&nlArr;",
                        "⇎": "&nhArr;",
                        "⋘̸": "&nLl;",
                        "≪⃒": "&nLt;",
                        "⇏": "&nrArr;",
                        "⊯": "&nVDash;",
                        "⊮": "&nVdash;",
                        ń: "&nacute;",
                        "∠⃒": "&nang;",
                        "⩰̸": "&napE;",
                        "≋̸": "&napid;",
                        ŉ: "&napos;",
                        "♮": "&natural;",
                        "⩃": "&ncap;",
                        ň: "&ncaron;",
                        ņ: "&ncedil;",
                        "⩭̸": "&ncongdot;",
                        "⩂": "&ncup;",
                        н: "&ncy;",
                        "–": "&ndash;",
                        "⇗": "&neArr;",
                        "⤤": "&nearhk;",
                        "≐̸": "&nedot;",
                        "⤨": "&toea;",
                        𝔫: "&nfr;",
                        "↮": "&nleftrightarrow;",
                        "⫲": "&nhpar;",
                        "⋼": "&nis;",
                        "⋺": "&nisd;",
                        њ: "&njcy;",
                        "≦̸": "&nleqq;",
                        "↚": "&nleftarrow;",
                        "‥": "&nldr;",
                        𝕟: "&nopf;",
                        "\xac": "&not;",
                        "⋹̸": "&notinE;",
                        "⋵̸": "&notindot;",
                        "⋷": "&notinvb;",
                        "⋶": "&notinvc;",
                        "⋾": "&notnivb;",
                        "⋽": "&notnivc;",
                        "⫽⃥": "&nparsl;",
                        "∂̸": "&npart;",
                        "⨔": "&npolint;",
                        "↛": "&nrightarrow;",
                        "⤳̸": "&nrarrc;",
                        "↝̸": "&nrarrw;",
                        𝓃: "&nscr;",
                        "⊄": "&nsub;",
                        "⫅̸": "&nsubseteqq;",
                        "⊅": "&nsup;",
                        "⫆̸": "&nsupseteqq;",
                        ñ: "&ntilde;",
                        ν: "&nu;",
                        "#": "&num;",
                        "№": "&numero;",
                        " ": "&numsp;",
                        "⊭": "&nvDash;",
                        "⤄": "&nvHarr;",
                        "≍⃒": "&nvap;",
                        "⊬": "&nvdash;",
                        "≥⃒": "&nvge;",
                        ">⃒": "&nvgt;",
                        "⧞": "&nvinfin;",
                        "⤂": "&nvlArr;",
                        "≤⃒": "&nvle;",
                        "<⃒": "&nvlt;",
                        "⊴⃒": "&nvltrie;",
                        "⤃": "&nvrArr;",
                        "⊵⃒": "&nvrtrie;",
                        "∼⃒": "&nvsim;",
                        "⇖": "&nwArr;",
                        "⤣": "&nwarhk;",
                        "⤧": "&nwnear;",
                        ó: "&oacute;",
                        ô: "&ocirc;",
                        о: "&ocy;",
                        ő: "&odblac;",
                        "⨸": "&odiv;",
                        "⦼": "&odsold;",
                        œ: "&oelig;",
                        "⦿": "&ofcir;",
                        𝔬: "&ofr;",
                        "˛": "&ogon;",
                        ò: "&ograve;",
                        "⧁": "&ogt;",
                        "⦵": "&ohbar;",
                        "⦾": "&olcir;",
                        "⦻": "&olcross;",
                        "⧀": "&olt;",
                        ō: "&omacr;",
                        ω: "&omega;",
                        ο: "&omicron;",
                        "⦶": "&omid;",
                        𝕠: "&oopf;",
                        "⦷": "&opar;",
                        "⦹": "&operp;",
                        "∨": "&vee;",
                        "⩝": "&ord;",
                        ℴ: "&oscr;",
                        ª: "&ordf;",
                        º: "&ordm;",
                        "⊶": "&origof;",
                        "⩖": "&oror;",
                        "⩗": "&orslope;",
                        "⩛": "&orv;",
                        ø: "&oslash;",
                        "⊘": "&osol;",
                        õ: "&otilde;",
                        "⨶": "&otimesas;",
                        ö: "&ouml;",
                        "⌽": "&ovbar;",
                        "\xb6": "&para;",
                        "⫳": "&parsim;",
                        "⫽": "&parsl;",
                        п: "&pcy;",
                        "%": "&percnt;",
                        ".": "&period;",
                        "‰": "&permil;",
                        "‱": "&pertenk;",
                        𝔭: "&pfr;",
                        φ: "&phi;",
                        ϕ: "&varphi;",
                        "☎": "&phone;",
                        π: "&pi;",
                        ϖ: "&varpi;",
                        ℎ: "&planckh;",
                        "+": "&plus;",
                        "⨣": "&plusacir;",
                        "⨢": "&pluscir;",
                        "⨥": "&plusdu;",
                        "⩲": "&pluse;",
                        "⨦": "&plussim;",
                        "⨧": "&plustwo;",
                        "⨕": "&pointint;",
                        𝕡: "&popf;",
                        "\xa3": "&pound;",
                        "⪳": "&prE;",
                        "⪷": "&precapprox;",
                        "⪹": "&prnap;",
                        "⪵": "&prnE;",
                        "⋨": "&prnsim;",
                        "′": "&prime;",
                        "⌮": "&profalar;",
                        "⌒": "&profline;",
                        "⌓": "&profsurf;",
                        "⊰": "&prurel;",
                        𝓅: "&pscr;",
                        ψ: "&psi;",
                        " ": "&puncsp;",
                        𝔮: "&qfr;",
                        𝕢: "&qopf;",
                        "⁗": "&qprime;",
                        𝓆: "&qscr;",
                        "⨖": "&quatint;",
                        "?": "&quest;",
                        "⤜": "&rAtail;",
                        "⥤": "&rHar;",
                        "∽̱": "&race;",
                        ŕ: "&racute;",
                        "⦳": "&raemptyv;",
                        "⦒": "&rangd;",
                        "⦥": "&range;",
                        "\xbb": "&raquo;",
                        "⥵": "&rarrap;",
                        "⤠": "&rarrbfs;",
                        "⤳": "&rarrc;",
                        "⤞": "&rarrfs;",
                        "⥅": "&rarrpl;",
                        "⥴": "&rarrsim;",
                        "↣": "&rightarrowtail;",
                        "↝": "&rightsquigarrow;",
                        "⤚": "&ratail;",
                        "∶": "&ratio;",
                        "❳": "&rbbrk;",
                        "}": "&rcub;",
                        "]": "&rsqb;",
                        "⦌": "&rbrke;",
                        "⦎": "&rbrksld;",
                        "⦐": "&rbrkslu;",
                        ř: "&rcaron;",
                        ŗ: "&rcedil;",
                        р: "&rcy;",
                        "⤷": "&rdca;",
                        "⥩": "&rdldhar;",
                        "↳": "&rdsh;",
                        "▭": "&rect;",
                        "⥽": "&rfisht;",
                        𝔯: "&rfr;",
                        "⥬": "&rharul;",
                        ρ: "&rho;",
                        ϱ: "&varrho;",
                        "⇉": "&rrarr;",
                        "⋌": "&rthree;",
                        "˚": "&ring;",
                        "‏": "&rlm;",
                        "⎱": "&rmoustache;",
                        "⫮": "&rnmid;",
                        "⟭": "&roang;",
                        "⇾": "&roarr;",
                        "⦆": "&ropar;",
                        𝕣: "&ropf;",
                        "⨮": "&roplus;",
                        "⨵": "&rotimes;",
                        ")": "&rpar;",
                        "⦔": "&rpargt;",
                        "⨒": "&rppolint;",
                        "›": "&rsaquo;",
                        𝓇: "&rscr;",
                        "⋊": "&rtimes;",
                        "▹": "&triangleright;",
                        "⧎": "&rtriltri;",
                        "⥨": "&ruluhar;",
                        "℞": "&rx;",
                        ś: "&sacute;",
                        "⪴": "&scE;",
                        "⪸": "&succapprox;",
                        š: "&scaron;",
                        ş: "&scedil;",
                        ŝ: "&scirc;",
                        "⪶": "&succneqq;",
                        "⪺": "&succnapprox;",
                        "⋩": "&succnsim;",
                        "⨓": "&scpolint;",
                        с: "&scy;",
                        "⋅": "&sdot;",
                        "⩦": "&sdote;",
                        "⇘": "&seArr;",
                        "\xa7": "&sect;",
                        ";": "&semi;",
                        "⤩": "&tosa;",
                        "✶": "&sext;",
                        𝔰: "&sfr;",
                        "♯": "&sharp;",
                        щ: "&shchcy;",
                        ш: "&shcy;",
                        "\xad": "&shy;",
                        σ: "&sigma;",
                        ς: "&varsigma;",
                        "⩪": "&simdot;",
                        "⪞": "&simg;",
                        "⪠": "&simgE;",
                        "⪝": "&siml;",
                        "⪟": "&simlE;",
                        "≆": "&simne;",
                        "⨤": "&simplus;",
                        "⥲": "&simrarr;",
                        "⨳": "&smashp;",
                        "⧤": "&smeparsl;",
                        "⌣": "&ssmile;",
                        "⪪": "&smt;",
                        "⪬": "&smte;",
                        "⪬︀": "&smtes;",
                        ь: "&softcy;",
                        "/": "&sol;",
                        "⧄": "&solb;",
                        "⌿": "&solbar;",
                        𝕤: "&sopf;",
                        "♠": "&spadesuit;",
                        "⊓︀": "&sqcaps;",
                        "⊔︀": "&sqcups;",
                        𝓈: "&sscr;",
                        "☆": "&star;",
                        "⊂": "&subset;",
                        "⫅": "&subseteqq;",
                        "⪽": "&subdot;",
                        "⫃": "&subedot;",
                        "⫁": "&submult;",
                        "⫋": "&subsetneqq;",
                        "⊊": "&subsetneq;",
                        "⪿": "&subplus;",
                        "⥹": "&subrarr;",
                        "⫇": "&subsim;",
                        "⫕": "&subsub;",
                        "⫓": "&subsup;",
                        "♪": "&sung;",
                        "\xb9": "&sup1;",
                        "\xb2": "&sup2;",
                        "\xb3": "&sup3;",
                        "⫆": "&supseteqq;",
                        "⪾": "&supdot;",
                        "⫘": "&supdsub;",
                        "⫄": "&supedot;",
                        "⟉": "&suphsol;",
                        "⫗": "&suphsub;",
                        "⥻": "&suplarr;",
                        "⫂": "&supmult;",
                        "⫌": "&supsetneqq;",
                        "⊋": "&supsetneq;",
                        "⫀": "&supplus;",
                        "⫈": "&supsim;",
                        "⫔": "&supsub;",
                        "⫖": "&supsup;",
                        "⇙": "&swArr;",
                        "⤪": "&swnwar;",
                        ß: "&szlig;",
                        "⌖": "&target;",
                        τ: "&tau;",
                        ť: "&tcaron;",
                        ţ: "&tcedil;",
                        т: "&tcy;",
                        "⌕": "&telrec;",
                        𝔱: "&tfr;",
                        θ: "&theta;",
                        ϑ: "&vartheta;",
                        þ: "&thorn;",
                        "\xd7": "&times;",
                        "⨱": "&timesbar;",
                        "⨰": "&timesd;",
                        "⌶": "&topbot;",
                        "⫱": "&topcir;",
                        𝕥: "&topf;",
                        "⫚": "&topfork;",
                        "‴": "&tprime;",
                        "▵": "&utri;",
                        "≜": "&trie;",
                        "◬": "&tridot;",
                        "⨺": "&triminus;",
                        "⨹": "&triplus;",
                        "⧍": "&trisb;",
                        "⨻": "&tritime;",
                        "⏢": "&trpezium;",
                        𝓉: "&tscr;",
                        ц: "&tscy;",
                        ћ: "&tshcy;",
                        ŧ: "&tstrok;",
                        "⥣": "&uHar;",
                        ú: "&uacute;",
                        ў: "&ubrcy;",
                        ŭ: "&ubreve;",
                        û: "&ucirc;",
                        у: "&ucy;",
                        ű: "&udblac;",
                        "⥾": "&ufisht;",
                        𝔲: "&ufr;",
                        ù: "&ugrave;",
                        "▀": "&uhblk;",
                        "⌜": "&ulcorner;",
                        "⌏": "&ulcrop;",
                        "◸": "&ultri;",
                        ū: "&umacr;",
                        ų: "&uogon;",
                        𝕦: "&uopf;",
                        υ: "&upsilon;",
                        "⇈": "&uuarr;",
                        "⌝": "&urcorner;",
                        "⌎": "&urcrop;",
                        ů: "&uring;",
                        "◹": "&urtri;",
                        𝓊: "&uscr;",
                        "⋰": "&utdot;",
                        ũ: "&utilde;",
                        ü: "&uuml;",
                        "⦧": "&uwangle;",
                        "⫨": "&vBar;",
                        "⫩": "&vBarv;",
                        "⦜": "&vangrt;",
                        "⊊︀": "&vsubne;",
                        "⫋︀": "&vsubnE;",
                        "⊋︀": "&vsupne;",
                        "⫌︀": "&vsupnE;",
                        в: "&vcy;",
                        "⊻": "&veebar;",
                        "≚": "&veeeq;",
                        "⋮": "&vellip;",
                        𝔳: "&vfr;",
                        𝕧: "&vopf;",
                        𝓋: "&vscr;",
                        "⦚": "&vzigzag;",
                        ŵ: "&wcirc;",
                        "⩟": "&wedbar;",
                        "≙": "&wedgeq;",
                        ℘: "&wp;",
                        𝔴: "&wfr;",
                        𝕨: "&wopf;",
                        𝓌: "&wscr;",
                        𝔵: "&xfr;",
                        ξ: "&xi;",
                        "⋻": "&xnis;",
                        𝕩: "&xopf;",
                        𝓍: "&xscr;",
                        ý: "&yacute;",
                        я: "&yacy;",
                        ŷ: "&ycirc;",
                        ы: "&ycy;",
                        "\xa5": "&yen;",
                        𝔶: "&yfr;",
                        ї: "&yicy;",
                        𝕪: "&yopf;",
                        𝓎: "&yscr;",
                        ю: "&yucy;",
                        ÿ: "&yuml;",
                        ź: "&zacute;",
                        ž: "&zcaron;",
                        з: "&zcy;",
                        ż: "&zdot;",
                        ζ: "&zeta;",
                        𝔷: "&zfr;",
                        ж: "&zhcy;",
                        "⇝": "&zigrarr;",
                        𝕫: "&zopf;",
                        𝓏: "&zscr;",
                        "‍": "&zwj;",
                        "‌": "&zwnj;"
                    }
                }
            }
        },
        92642: function(e, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.numericUnicodeMap = {
                0: 65533,
                128: 8364,
                130: 8218,
                131: 402,
                132: 8222,
                133: 8230,
                134: 8224,
                135: 8225,
                136: 710,
                137: 8240,
                138: 352,
                139: 8249,
                140: 338,
                142: 381,
                145: 8216,
                146: 8217,
                147: 8220,
                148: 8221,
                149: 8226,
                150: 8211,
                151: 8212,
                152: 732,
                153: 8482,
                154: 353,
                155: 8250,
                156: 339,
                158: 382,
                159: 376
            }
        },
        59726: function(e, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.fromCodePoint = String.fromCodePoint || function(e) {
                return String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296, (e - 65536) % 1024 + 56320)
            }, r.getCodePoint = String.prototype.codePointAt ? function(e, r) {
                return e.codePointAt(r)
            } : function(e, r) {
                return (e.charCodeAt(r) - 55296) * 1024 + e.charCodeAt(r + 1) - 56320 + 65536
            }, r.highSurrogateFrom = 55296, r.highSurrogateTo = 56319
        },
        46293: function(e, r, t) {
            "use strict";
            t.d(r, {
                YM: function() {
                    return J
                }
            });
            let a = (() => {
                let e = 0,
                    r = () => `0000${(1679616*Math.random()<<0).toString(36)}`.slice(-4);
                return () => `u${r()}${e+=1}`
            })();

            function o(e) {
                let r = [];
                for (let t = 0, a = e.length; t < a; t++) r.push(e[t]);
                return r
            }

            function i(e, r) {
                let t = e.ownerDocument.defaultView || window,
                    a = t.getComputedStyle(e).getPropertyValue(r);
                return a ? parseFloat(a.replace("px", "")) : 0
            }

            function n(e, r = {}) {
                let t = r.width || function(e) {
                        let r = i(e, "border-left-width"),
                            t = i(e, "border-right-width");
                        return e.clientWidth + r + t
                    }(e),
                    a = r.height || function(e) {
                        let r = i(e, "border-top-width"),
                            t = i(e, "border-bottom-width");
                        return e.clientHeight + r + t
                    }(e);
                return {
                    width: t,
                    height: a
                }
            }

            function s(e) {
                return new Promise((r, t) => {
                    let a = new Image;
                    a.decode = () => r(a), a.onload = () => r(a), a.onerror = t, a.crossOrigin = "anonymous", a.decoding = "async", a.src = e
                })
            }
            async function l(e) {
                return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e => `data:image/svg+xml;charset=utf-8,${e}`)
            }
            async function c(e, r, t) {
                let a = "http://www.w3.org/2000/svg",
                    o = document.createElementNS(a, "svg"),
                    i = document.createElementNS(a, "foreignObject");
                return o.setAttribute("width", `${r}`), o.setAttribute("height", `${t}`), o.setAttribute("viewBox", `0 0 ${r} ${t}`), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(e), l(o)
            }
            let u = (e, r) => {
                if (e instanceof r) return !0;
                let t = Object.getPrototypeOf(e);
                return null !== t && (t.constructor.name === r.name || u(t, r))
            };

            function d(e, r, t) {
                let i = window.getComputedStyle(e, t),
                    n = i.getPropertyValue("content");
                if ("" === n || "none" === n) return;
                let s = a();
                try {
                    r.className = `${r.className} ${s}`
                } catch (e) {
                    return
                }
                let l = document.createElement("style");
                l.appendChild(function(e, r, t) {
                    let a = `.${e}:${r}`,
                        i = t.cssText ? function(e) {
                            let r = e.getPropertyValue("content");
                            return `${e.cssText} content: '${r.replace(/'|"/g,"")}';`
                        }(t) : o(t).map(e => {
                            let r = t.getPropertyValue(e),
                                a = t.getPropertyPriority(e);
                            return `${e}: ${r}${a?" !important":""};`
                        }).join(" ");
                    return document.createTextNode(`${a}{${i}}`)
                }(s, t, i)), r.appendChild(l)
            }
            let p = "application/font-woff",
                g = "image/jpeg",
                f = {
                    woff: p,
                    woff2: p,
                    ttf: "application/font-truetype",
                    eot: "application/vnd.ms-fontobject",
                    png: "image/png",
                    jpg: g,
                    jpeg: g,
                    gif: "image/gif",
                    tiff: "image/tiff",
                    svg: "image/svg+xml",
                    webp: "image/webp"
                };

            function h(e) {
                let r = (function(e) {
                    let r = /\.([^./]*?)$/g.exec(e);
                    return r ? r[1] : ""
                })(e).toLowerCase();
                return f[r] || ""
            }

            function m(e) {
                return -1 !== e.search(/^(data:)/)
            }

            function b(e, r) {
                return `data:${r};base64,${e}`
            }
            async function x(e, r, t) {
                let a = await fetch(e, r);
                if (404 === a.status) throw Error(`Resource "${a.url}" not found`);
                let o = await a.blob();
                return new Promise((e, r) => {
                    let i = new FileReader;
                    i.onerror = r, i.onloadend = () => {
                        try {
                            e(t({
                                res: a,
                                result: i.result
                            }))
                        } catch (e) {
                            r(e)
                        }
                    }, i.readAsDataURL(o)
                })
            }
            let v = {};
            async function y(e, r, t) {
                var a, o, i;
                let n, s;
                let l = (a = e, o = r, i = t.includeQueryParams, s = a.replace(/\?.*/, ""), i && (s = a), /ttf|otf|eot|woff2?/i.test(s) && (s = s.replace(/.*\//, "")), o ? `[${o}]${s}` : s);
                if (null != v[l]) return v[l];
                t.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
                try {
                    let a = await x(e, t.fetchRequestInit, ({
                        res: e,
                        result: t
                    }) => (r || (r = e.headers.get("Content-Type") || ""), t.split(/,/)[1]));
                    n = b(a, r)
                } catch (a) {
                    n = t.imagePlaceholder || "";
                    let r = `Failed to fetch resource: ${e}`;
                    a && (r = "string" == typeof a ? a : a.message), r && console.warn(r)
                }
                return v[l] = n, n
            }
            async function w(e) {
                let r = e.toDataURL();
                return "data:," === r ? e.cloneNode(!1) : s(r)
            }
            async function E(e, r) {
                if (e.currentSrc) {
                    let r = document.createElement("canvas"),
                        t = r.getContext("2d");
                    r.width = e.clientWidth, r.height = e.clientHeight, null == t || t.drawImage(e, 0, 0, r.width, r.height);
                    let a = r.toDataURL();
                    return s(a)
                }
                let t = e.poster,
                    a = h(t),
                    o = await y(t, a, r);
                return s(o)
            }
            async function q(e) {
                var r;
                try {
                    if (null === (r = null == e ? void 0 : e.contentDocument) || void 0 === r ? void 0 : r.body) return await L(e.contentDocument.body, {}, !0)
                } catch (e) {}
                return e.cloneNode(!1)
            }
            async function A(e, r) {
                return u(e, HTMLCanvasElement) ? w(e) : u(e, HTMLVideoElement) ? E(e, r) : u(e, HTMLIFrameElement) ? q(e) : e.cloneNode(!1)
            }
            let k = e => null != e.tagName && "SLOT" === e.tagName.toUpperCase();
            async function D(e, r, t) {
                var a, i;
                let n = [];
                return 0 === (n = k(e) && e.assignedNodes ? o(e.assignedNodes()) : u(e, HTMLIFrameElement) && (null === (a = e.contentDocument) || void 0 === a ? void 0 : a.body) ? o(e.contentDocument.body.childNodes) : o((null !== (i = e.shadowRoot) && void 0 !== i ? i : e).childNodes)).length || u(e, HTMLVideoElement) || await n.reduce((e, a) => e.then(() => L(a, t)).then(e => {
                    e && r.appendChild(e)
                }), Promise.resolve()), r
            }
            async function T(e, r) {
                let t = e.querySelectorAll ? e.querySelectorAll("use") : [];
                if (0 === t.length) return e;
                let a = {};
                for (let o = 0; o < t.length; o++) {
                    let i = t[o],
                        n = i.getAttribute("xlink:href");
                    if (n) {
                        let t = e.querySelector(n),
                            o = document.querySelector(n);
                        t || !o || a[n] || (a[n] = await L(o, r, !0))
                    }
                }
                let o = Object.values(a);
                if (o.length) {
                    let r = "http://www.w3.org/1999/xhtml",
                        t = document.createElementNS(r, "svg");
                    t.setAttribute("xmlns", r), t.style.position = "absolute", t.style.width = "0", t.style.height = "0", t.style.overflow = "hidden", t.style.display = "none";
                    let a = document.createElementNS(r, "defs");
                    t.appendChild(a);
                    for (let e = 0; e < o.length; e++) a.appendChild(o[e]);
                    e.appendChild(t)
                }
                return e
            }
            async function L(e, r, t) {
                return t || !r.filter || r.filter(e) ? Promise.resolve(e).then(e => A(e, r)).then(t => D(e, t, r)).then(r => (function(e, r) {
                    if (u(r, Element)) {
                        var t;
                        ! function(e, r) {
                            let t = r.style;
                            if (!t) return;
                            let a = window.getComputedStyle(e);
                            a.cssText ? (t.cssText = a.cssText, t.transformOrigin = a.transformOrigin) : o(a).forEach(o => {
                                let i = a.getPropertyValue(o);
                                if ("font-size" === o && i.endsWith("px")) {
                                    let e = Math.floor(parseFloat(i.substring(0, i.length - 2))) - .1;
                                    i = `${e}px`
                                }
                                u(e, HTMLIFrameElement) && "display" === o && "inline" === i && (i = "block"), "d" === o && r.getAttribute("d") && (i = `path(${r.getAttribute("d")})`), t.setProperty(o, i, a.getPropertyPriority(o))
                            })
                        }(e, r), d(e, r, ":before"), d(e, r, ":after"), t = r, u(e, HTMLTextAreaElement) && (t.innerHTML = e.value), u(e, HTMLInputElement) && t.setAttribute("value", e.value),
                            function(e, r) {
                                if (u(e, HTMLSelectElement)) {
                                    let t = Array.from(r.children).find(r => e.value === r.getAttribute("value"));
                                    t && t.setAttribute("selected", "")
                                }
                            }(e, r)
                    }
                    return r
                })(e, r)).then(e => T(e, r)) : null
            }
            let C = /url\((['"]?)([^'"]+?)\1\)/g,
                S = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
                R = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
            async function O(e, r, t, a, o) {
                try {
                    let i;
                    let n = t ? function(e, r) {
                            if (e.match(/^[a-z]+:\/\//i)) return e;
                            if (e.match(/^\/\//)) return window.location.protocol + e;
                            if (e.match(/^[a-z]+:/i)) return e;
                            let t = document.implementation.createHTMLDocument(),
                                a = t.createElement("base"),
                                o = t.createElement("a");
                            return t.head.appendChild(a), t.body.appendChild(o), r && (a.href = r), o.href = e, o.href
                        }(r, t) : r,
                        s = h(r);
                    if (o) {
                        let e = await o(n);
                        i = b(e, s)
                    } else i = await y(n, s, a);
                    return e.replace(function(e) {
                        let r = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                        return RegExp(`(url\\(['"]?)(${r})(['"]?\\))`, "g")
                    }(r), `$1${i}$3`)
                } catch (e) {}
                return e
            }

            function N(e) {
                return -1 !== e.search(C)
            }
            async function P(e, r, t) {
                if (!N(e)) return e;
                let a = function(e, {
                        preferredFontFormat: r
                    }) {
                        return r ? e.replace(R, e => {
                            for (;;) {
                                let [t, , a] = S.exec(e) || [];
                                if (!a) return "";
                                if (a === r) return `src: ${t};`
                            }
                        }) : e
                    }(e, t),
                    o = function(e) {
                        let r = [];
                        return e.replace(C, (e, t, a) => (r.push(a), e)), r.filter(e => !m(e))
                    }(a);
                return o.reduce((e, a) => e.then(e => O(e, a, r, t)), Promise.resolve(a))
            }
            async function B(e, r, t) {
                var a;
                let o = null === (a = r.style) || void 0 === a ? void 0 : a.getPropertyValue(e);
                if (o) {
                    let a = await P(o, null, t);
                    return r.style.setProperty(e, a, r.style.getPropertyPriority(e)), !0
                }
                return !1
            }
            async function U(e, r) {
                await B("background", e, r) || await B("background-image", e, r), await B("mask", e, r) || await B("mask-image", e, r)
            }
            async function I(e, r) {
                let t = u(e, HTMLImageElement);
                if (!(t && !m(e.src)) && !(u(e, SVGImageElement) && !m(e.href.baseVal))) return;
                let a = t ? e.src : e.href.baseVal,
                    o = await y(a, h(a), r);
                await new Promise((r, a) => {
                    e.onload = r, e.onerror = a;
                    let i = e;
                    i.decode && (i.decode = r), "lazy" === i.loading && (i.loading = "eager"), t ? (e.srcset = "", e.src = o) : e.href.baseVal = o
                })
            }
            async function H(e, r) {
                let t = o(e.childNodes),
                    a = t.map(e => j(e, r));
                await Promise.all(a).then(() => e)
            }
            async function j(e, r) {
                u(e, Element) && (await U(e, r), await I(e, r), await H(e, r))
            }
            let M = {};
            async function F(e) {
                let r = M[e];
                if (null != r) return r;
                let t = await fetch(e),
                    a = await t.text();
                return r = {
                    url: e,
                    cssText: a
                }, M[e] = r, r
            }
            async function z(e, r) {
                let t = e.cssText,
                    a = /url\(["']?([^"')]+)["']?\)/g,
                    o = t.match(/url\([^)]+\)/g) || [],
                    i = o.map(async o => {
                        let i = o.replace(a, "$1");
                        return i.startsWith("https://") || (i = new URL(i, e.url).href), x(i, r.fetchRequestInit, ({
                            result: e
                        }) => (t = t.replace(o, `url(${e})`), [o, e]))
                    });
                return Promise.all(i).then(() => t)
            }

            function V(e) {
                if (null == e) return [];
                let r = [],
                    t = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ""),
                    a = RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
                for (;;) {
                    let e = a.exec(t);
                    if (null === e) break;
                    r.push(e[0])
                }
                t = t.replace(a, "");
                let o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
                    i = RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
                for (;;) {
                    let e = o.exec(t);
                    if (null === e) {
                        if (null === (e = i.exec(t))) break;
                        o.lastIndex = i.lastIndex
                    } else i.lastIndex = o.lastIndex;
                    r.push(e[0])
                }
                return r
            }
            async function _(e, r) {
                let t = [],
                    a = [];
                return e.forEach(t => {
                    if ("cssRules" in t) try {
                        o(t.cssRules || []).forEach((e, o) => {
                            if (e.type === CSSRule.IMPORT_RULE) {
                                let i = o + 1,
                                    n = e.href,
                                    s = F(n).then(e => z(e, r)).then(e => V(e).forEach(e => {
                                        try {
                                            t.insertRule(e, e.startsWith("@import") ? i += 1 : t.cssRules.length)
                                        } catch (r) {
                                            console.error("Error inserting rule from remote css", {
                                                rule: e,
                                                error: r
                                            })
                                        }
                                    })).catch(e => {
                                        console.error("Error loading remote css", e.toString())
                                    });
                                a.push(s)
                            }
                        })
                    } catch (i) {
                        let o = e.find(e => null == e.href) || document.styleSheets[0];
                        null != t.href && a.push(F(t.href).then(e => z(e, r)).then(e => V(e).forEach(e => {
                            o.insertRule(e, t.cssRules.length)
                        })).catch(e => {
                            console.error("Error loading remote stylesheet", e)
                        })), console.error("Error inlining remote css file", i)
                    }
                }), Promise.all(a).then(() => (e.forEach(e => {
                    if ("cssRules" in e) try {
                        o(e.cssRules || []).forEach(e => {
                            t.push(e)
                        })
                    } catch (r) {
                        console.error(`Error while reading CSS rules from ${e.href}`, r)
                    }
                }), t))
            }
            async function G(e, r) {
                if (null == e.ownerDocument) throw Error("Provided element is not within a Document");
                let t = o(e.ownerDocument.styleSheets),
                    a = await _(t, r);
                return a.filter(e => e.type === CSSRule.FONT_FACE_RULE).filter(e => N(e.style.getPropertyValue("src")))
            }
            async function $(e, r) {
                let t = await G(e, r),
                    a = await Promise.all(t.map(e => {
                        let t = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                        return P(e.cssText, t, r)
                    }));
                return a.join("\n")
            }
            async function Y(e, r) {
                let t = null != r.fontEmbedCSS ? r.fontEmbedCSS : r.skipFonts ? null : await $(e, r);
                if (t) {
                    let r = document.createElement("style"),
                        a = document.createTextNode(t);
                    r.appendChild(a), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r)
                }
            }
            async function K(e, r = {}) {
                let {
                    width: t,
                    height: a
                } = n(e, r), o = await L(e, r, !0);
                await Y(o, r), await j(o, r),
                    function(e, r) {
                        let {
                            style: t
                        } = e;
                        r.backgroundColor && (t.backgroundColor = r.backgroundColor), r.width && (t.width = `${r.width}px`), r.height && (t.height = `${r.height}px`);
                        let a = r.style;
                        null != a && Object.keys(a).forEach(e => {
                            t[e] = a[e]
                        })
                    }(o, r);
                let i = await c(o, t, a);
                return i
            }
            async function Z(e, r = {}) {
                let {
                    width: t,
                    height: a
                } = n(e, r), o = await K(e, r), i = await s(o), l = document.createElement("canvas"), c = l.getContext("2d"), u = r.pixelRatio || function() {
                    let e, r;
                    try {
                        r = process
                    } catch (e) {}
                    let t = r && r.env ? r.env.devicePixelRatio : null;
                    return t && Number.isNaN(e = parseInt(t, 10)) && (e = 1), e || window.devicePixelRatio || 1
                }(), d = r.canvasWidth || t, p = r.canvasHeight || a;
                if (l.width = d * u, l.height = p * u, !r.skipAutoScale) {
                    var g;
                    ((g = l).width > 16384 || g.height > 16384) && (g.width > 16384 && g.height > 16384 ? g.width > g.height ? (g.height *= 16384 / g.width, g.width = 16384) : (g.width *= 16384 / g.height, g.height = 16384) : g.width > 16384 ? (g.height *= 16384 / g.width, g.width = 16384) : (g.width *= 16384 / g.height, g.height = 16384))
                }
                return l.style.width = `${d}`, l.style.height = `${p}`, r.backgroundColor && (c.fillStyle = r.backgroundColor, c.fillRect(0, 0, l.width, l.height)), c.drawImage(i, 0, 0, l.width, l.height), l
            }
            async function J(e, r = {}) {
                let t = await Z(e, r);
                return t.toDataURL()
            }
        },
        4913: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return ek
                }
            });
            var a = t(67294);
            let o = (e, r) => {
                    for (let t in r) e[t] = r[t];
                    return e
                },
                i = "numeric",
                n = "ascii",
                s = "alpha",
                l = "asciinumeric",
                c = "alphanumeric",
                u = "domain",
                d = "emoji",
                p = "whitespace";

            function g(e, r, t) {
                for (let p in r[i] && (r[l] = !0, r[c] = !0), r[n] && (r[l] = !0, r[s] = !0), r[l] && (r[c] = !0), r[s] && (r[c] = !0), r[c] && (r[u] = !0), r[d] && (r[u] = !0), r) {
                    var a, o;
                    let r = ((a = p) in (o = t) || (o[a] = []), o[a]);
                    0 > r.indexOf(e) && r.push(e)
                }
            }

            function f(e) {
                void 0 === e && (e = null), this.j = {}, this.jr = [], this.jd = null, this.t = e
            }
            f.groups = {}, f.prototype = {
                accepts() {
                    return !!this.t
                },
                go(e) {
                    let r = this.j[e];
                    if (r) return r;
                    for (let r = 0; r < this.jr.length; r++) {
                        let t = this.jr[r][0],
                            a = this.jr[r][1];
                        if (a && t.test(e)) return a
                    }
                    return this.jd
                },
                has(e, r) {
                    return void 0 === r && (r = !1), r ? e in this.j : !!this.go(e)
                },
                ta(e, r, t, a) {
                    for (let o = 0; o < e.length; o++) this.tt(e[o], r, t, a)
                },
                tr(e, r, t, a) {
                    let o;
                    return a = a || f.groups, r && r.j ? o = r : (o = new f(r), t && a && g(r, t, a)), this.jr.push([e, o]), o
                },
                ts(e, r, t, a) {
                    let o = this,
                        i = e.length;
                    if (!i) return o;
                    for (let r = 0; r < i - 1; r++) o = o.tt(e[r]);
                    return o.tt(e[i - 1], r, t, a)
                },
                tt(e, r, t, a) {
                    a = a || f.groups;
                    let i = this;
                    if (r && r.j) return i.j[e] = r, r;
                    let n, s = i.go(e);
                    if (s ? (o((n = new f).j, s.j), n.jr.push.apply(n.jr, s.jr), n.jd = s.jd, n.t = s.t) : n = new f, r) {
                        if (a) {
                            if (n.t && "string" == typeof n.t) {
                                let e = o(function(e, r) {
                                    let t = {};
                                    for (let a in r) r[a].indexOf(e) >= 0 && (t[a] = !0);
                                    return t
                                }(n.t, a), t);
                                g(r, e, a)
                            } else t && g(r, t, a)
                        }
                        n.t = r
                    }
                    return i.j[e] = n, n
                }
            };
            let h = (e, r, t, a, o) => e.ta(r, t, a, o),
                m = (e, r, t, a, o) => e.tr(r, t, a, o),
                b = (e, r, t, a, o) => e.ts(r, t, a, o),
                x = (e, r, t, a, o) => e.tt(r, t, a, o),
                v = "WORD",
                y = "UWORD",
                w = "LOCALHOST",
                E = "UTLD",
                q = "SCHEME",
                A = "SLASH_SCHEME",
                k = "OPENBRACE",
                D = "OPENBRACKET",
                T = "OPENANGLEBRACKET",
                L = "OPENPAREN",
                C = "CLOSEBRACE",
                S = "CLOSEBRACKET",
                R = "CLOSEANGLEBRACKET",
                O = "CLOSEPAREN",
                N = "AMPERSAND",
                P = "APOSTROPHE",
                B = "ASTERISK",
                U = "BACKSLASH",
                I = "BACKTICK",
                H = "CARET",
                j = "COLON",
                M = "COMMA",
                F = "DOLLAR",
                z = "EQUALS",
                V = "EXCLAMATION",
                _ = "HYPHEN",
                G = "PERCENT",
                $ = "PIPE",
                Y = "PLUS",
                K = "POUND",
                Z = "QUERY",
                J = "QUOTE",
                X = "SEMI",
                Q = "SLASH",
                W = "TILDE",
                ee = "UNDERSCORE",
                er = "EMOJI";
            var et = Object.freeze({
                __proto__: null,
                WORD: v,
                UWORD: y,
                LOCALHOST: w,
                TLD: "TLD",
                UTLD: E,
                SCHEME: q,
                SLASH_SCHEME: A,
                NUM: "NUM",
                WS: "WS",
                NL: "NL",
                OPENBRACE: k,
                OPENBRACKET: D,
                OPENANGLEBRACKET: T,
                OPENPAREN: L,
                CLOSEBRACE: C,
                CLOSEBRACKET: S,
                CLOSEANGLEBRACKET: R,
                CLOSEPAREN: O,
                AMPERSAND: N,
                APOSTROPHE: P,
                ASTERISK: B,
                AT: "AT",
                BACKSLASH: U,
                BACKTICK: I,
                CARET: H,
                COLON: j,
                COMMA: M,
                DOLLAR: F,
                DOT: "DOT",
                EQUALS: z,
                EXCLAMATION: V,
                HYPHEN: _,
                PERCENT: G,
                PIPE: $,
                PLUS: Y,
                POUND: K,
                QUERY: Z,
                QUOTE: J,
                SEMI: X,
                SLASH: Q,
                TILDE: W,
                UNDERSCORE: ee,
                EMOJI: er,
                SYM: "SYM"
            });
            let ea = /[a-z]/,
                eo = /\p{L}/u,
                ei = /\p{Emoji}/u,
                en = /\d/,
                es = /\s/,
                el = null,
                ec = null;

            function eu(e, r, t, a, o) {
                let i;
                let n = r.length;
                for (let t = 0; t < n - 1; t++) {
                    let n = r[t];
                    e.j[n] ? i = e.j[n] : ((i = new f(a)).jr = o.slice(), e.j[n] = i), e = i
                }
                return (i = new f(t)).jr = o.slice(), e.j[r[n - 1]] = i, i
            }

            function ed(e) {
                let r = [],
                    t = [],
                    a = 0;
                for (; a < e.length;) {
                    let o = 0;
                    for (;
                        "0123456789".indexOf(e[a + o]) >= 0;) o++;
                    if (o > 0) {
                        r.push(t.join(""));
                        for (let r = parseInt(e.substring(a, a + o), 10); r > 0; r--) t.pop();
                        a += o
                    } else t.push(e[a]), a++
                }
                return r
            }
            let ep = {
                defaultProtocol: "http",
                events: null,
                format: ef,
                formatHref: ef,
                nl2br: !1,
                tagName: "a",
                target: null,
                rel: null,
                validate: !0,
                truncate: 1 / 0,
                className: null,
                attributes: null,
                ignoreTags: [],
                render: null
            };

            function eg(e, r) {
                void 0 === r && (r = null);
                let t = o({}, ep);
                e && (t = o(t, e instanceof eg ? e.o : e));
                let a = t.ignoreTags,
                    i = [];
                for (let e = 0; e < a.length; e++) i.push(a[e].toUpperCase());
                this.o = t, r && (this.defaultRender = r), this.ignoreTags = i
            }

            function ef(e) {
                return e
            }
            eg.prototype = {
                o: ep,
                ignoreTags: [],
                defaultRender: e => e,
                check(e) {
                    return this.get("validate", e.toString(), e)
                },
                get(e, r, t) {
                    let a = null != r,
                        o = this.o[e];
                    return o && ("object" == typeof o ? "function" == typeof(o = t.t in o ? o[t.t] : ep[e]) && a && (o = o(r, t)) : "function" == typeof o && a && (o = o(r, t.t, t))), o
                },
                getObj(e, r, t) {
                    let a = this.o[e];
                    return "function" == typeof a && null != r && (a = a(r, t.t, t)), a
                },
                render(e) {
                    let r = e.render(this),
                        t = this.get("render", null, e) || this.defaultRender;
                    return t(r, e.t, e)
                }
            };
            var eh = Object.freeze({
                __proto__: null,
                defaults: ep,
                Options: eg,
                assign: o
            });

            function em(e, r) {
                this.t = "token", this.v = e, this.tk = r
            }

            function eb(e, r) {
                class t extends em {
                    constructor(r, t) {
                        super(r, t), this.t = e
                    }
                }
                for (let e in r) t.prototype[e] = r[e];
                return t.t = e, t
            }
            em.prototype = {
                isLink: !1,
                toString() {
                    return this.v
                },
                toHref(e) {
                    return this.toString()
                },
                toFormattedString(e) {
                    let r = this.toString(),
                        t = e.get("truncate", r, this),
                        a = e.get("format", r, this);
                    return t && a.length > t ? a.substring(0, t) + "…" : a
                },
                toFormattedHref(e) {
                    return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this)
                },
                startIndex() {
                    return this.tk[0].s
                },
                endIndex() {
                    return this.tk[this.tk.length - 1].e
                },
                toObject(e) {
                    return void 0 === e && (e = ep.defaultProtocol), {
                        type: this.t,
                        value: this.toString(),
                        isLink: this.isLink,
                        href: this.toHref(e),
                        start: this.startIndex(),
                        end: this.endIndex()
                    }
                },
                toFormattedObject(e) {
                    return {
                        type: this.t,
                        value: this.toFormattedString(e),
                        isLink: this.isLink,
                        href: this.toFormattedHref(e),
                        start: this.startIndex(),
                        end: this.endIndex()
                    }
                },
                validate(e) {
                    return e.get("validate", this.toString(), this)
                },
                render(e) {
                    let r = this.toHref(e.get("defaultProtocol")),
                        t = e.get("formatHref", r, this),
                        a = e.get("tagName", r, this),
                        i = this.toFormattedString(e),
                        n = {},
                        s = e.get("className", r, this),
                        l = e.get("target", r, this),
                        c = e.get("rel", r, this),
                        u = e.getObj("attributes", r, this),
                        d = e.getObj("events", r, this);
                    return n.href = t, s && (n.class = s), l && (n.target = l), c && (n.rel = c), u && o(n, u), {
                        tagName: a,
                        attributes: n,
                        content: i,
                        eventListeners: d
                    }
                }
            };
            let ex = eb("email", {
                    isLink: !0,
                    toHref() {
                        return "mailto:" + this.toString()
                    }
                }),
                ev = eb("text"),
                ey = eb("nl"),
                ew = eb("url", {
                    isLink: !0,
                    toHref(e) {
                        return void 0 === e && (e = ep.defaultProtocol), this.hasProtocol() ? this.v : `${e}://${this.v}`
                    },
                    hasProtocol() {
                        let e = this.tk;
                        return e.length >= 2 && e[0].t !== w && e[1].t === j
                    }
                }),
                eE = e => new f(e);

            function eq(e, r, t) {
                let a = t[0].s,
                    o = t[t.length - 1].e,
                    i = r.slice(a, o);
                return new e(i, t)
            }
            "undefined" != typeof console && console && console.warn || (() => {});
            let eA = {
                    scanner: null,
                    parser: null,
                    tokenQueue: [],
                    pluginQueue: [],
                    customSchemes: [],
                    initialized: !1
                },
                ek = e => {
                    let r = 0,
                        t = e => {
                            let {
                                tagName: t,
                                attributes: o,
                                content: i
                            } = e;
                            return o.key = `__linkify-lnk-${r++}`, o.class && (o.className = o.class, delete o.class), a.createElement(t, o, i)
                        },
                        c = {
                            key: "__linkify-wrapper"
                        };
                    for (let r in e) "options" !== r && "as" !== r && "tagName" !== r && "children" !== r && (c[r] = e[r]);
                    let ep = new eg(e.options, t),
                        ef = e.as || e.tagName || a.Fragment || "span",
                        em = e.children,
                        eb = a.createElement(ef, c, em);
                    return function e(r, t, c) {
                        if (0 === a.Children.count(r.props.children)) return r;
                        let ep = [];
                        a.Children.forEach(r.props.children, r => {
                            "string" == typeof r ? ep.push.apply(ep, function(e, r, t) {
                                let c = (eA.initialized || function() {
                                        eA.scanner = function(e) {
                                            void 0 === e && (e = []);
                                            let r = {};
                                            f.groups = r;
                                            let t = new f;
                                            null == el && (el = ed("aaa1rp3barth4b0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0faromeo7ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re2s2c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y0eats7k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking0channel11l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t0isalat7u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0at2delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d0network8tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntdoor4ier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5gtv3iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0eles2s3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1nder2le4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster5ia3d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4de2k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0cys3drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7serati6ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic3tual5v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rthwesternmutual14on4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3ssagens7y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cher3ks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w0time7i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ffany5ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0channel7ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xf6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lkswagen7vo3te1ing3o2yage5u0elos6wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2")), null == ec && (ec = ed("ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5تصالات6رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2")), x(t, "'", P), x(t, "{", k), x(t, "[", D), x(t, "<", T), x(t, "(", L), x(t, "}", C), x(t, "]", S), x(t, ">", R), x(t, ")", O), x(t, "&", N), x(t, "*", B), x(t, "@", "AT"), x(t, "`", I), x(t, "^", H), x(t, ":", j), x(t, ",", M), x(t, "$", F), x(t, ".", "DOT"), x(t, "=", z), x(t, "!", V), x(t, "-", _), x(t, "%", G), x(t, "|", $), x(t, "+", Y), x(t, "#", K), x(t, "?", Z), x(t, '"', J), x(t, "/", Q), x(t, ";", X), x(t, "~", W), x(t, "_", ee), x(t, "\\", U);
                                            let a = m(t, en, "NUM", {
                                                [i]: !0
                                            });
                                            m(a, en, a);
                                            let c = m(t, ea, v, {
                                                [n]: !0
                                            });
                                            m(c, ea, c);
                                            let h = m(t, eo, y, {
                                                [s]: !0
                                            });
                                            m(h, ea), m(h, eo, h);
                                            let ep = m(t, es, "WS", {
                                                [p]: !0
                                            });
                                            x(t, "\n", "NL", {
                                                [p]: !0
                                            }), x(ep, "\n"), m(ep, es, ep);
                                            let eg = m(t, ei, er, {
                                                [d]: !0
                                            });
                                            m(eg, ei, eg), x(eg, "️", eg);
                                            let ef = x(eg, "‍");
                                            m(ef, ei, eg);
                                            let eh = [
                                                    [ea, c]
                                                ],
                                                em = [
                                                    [ea, null],
                                                    [eo, h]
                                                ];
                                            for (let e = 0; e < el.length; e++) eu(t, el[e], "TLD", v, eh);
                                            for (let e = 0; e < ec.length; e++) eu(t, ec[e], E, y, em);
                                            g("TLD", {
                                                tld: !0,
                                                ascii: !0
                                            }, r), g(E, {
                                                utld: !0,
                                                alpha: !0
                                            }, r), eu(t, "file", q, v, eh), eu(t, "mailto", q, v, eh), eu(t, "http", A, v, eh), eu(t, "https", A, v, eh), eu(t, "ftp", A, v, eh), eu(t, "ftps", A, v, eh), g(q, {
                                                scheme: !0,
                                                ascii: !0
                                            }, r), g(A, {
                                                slashscheme: !0,
                                                ascii: !0
                                            }, r), e = e.sort((e, r) => e[0] > r[0] ? 1 : -1);
                                            for (let r = 0; r < e.length; r++) {
                                                let a = e[r][0],
                                                    o = e[r][1],
                                                    s = o ? {
                                                        scheme: !0
                                                    } : {
                                                        slashscheme: !0
                                                    };
                                                a.indexOf("-") >= 0 ? s[u] = !0 : ea.test(a) ? en.test(a) ? s[l] = !0 : s[n] = !0 : s[i] = !0, b(t, a, a, s)
                                            }
                                            return b(t, "localhost", w, {
                                                ascii: !0
                                            }), t.jd = new f("SYM"), {
                                                start: t,
                                                tokens: o({
                                                    groups: r
                                                }, et)
                                            }
                                        }(eA.customSchemes);
                                        for (let e = 0; e < eA.tokenQueue.length; e++) eA.tokenQueue[e][1]({
                                            scanner: eA.scanner
                                        });
                                        eA.parser = function(e) {
                                            let {
                                                groups: r
                                            } = e, t = r.domain.concat([N, B, "AT", U, I, H, F, z, _, "NUM", G, $, Y, K, Q, "SYM", W, ee]), a = [P, R, C, S, O, j, M, "DOT", V, T, k, D, L, Z, J, X], o = [N, P, B, U, I, H, C, F, z, _, k, G, $, Y, K, Z, Q, "SYM", W, ee], i = eE(), n = x(i, W);
                                            h(n, o, n), h(n, r.domain, n);
                                            let s = eE(),
                                                l = eE(),
                                                c = eE();
                                            h(i, r.domain, s), h(i, r.scheme, l), h(i, r.slashscheme, c), h(s, o, n), h(s, r.domain, s);
                                            let u = x(s, "AT");
                                            x(n, "AT", u), x(l, "AT", u), x(c, "AT", u);
                                            let d = x(n, "DOT");
                                            h(d, o, n), h(d, r.domain, n);
                                            let p = eE();
                                            h(u, r.domain, p), h(p, r.domain, p);
                                            let g = x(p, "DOT");
                                            h(g, r.domain, p);
                                            let f = eE(ex);
                                            h(g, r.tld, f), h(g, r.utld, f), x(u, w, f);
                                            let m = x(p, _);
                                            h(m, r.domain, p), h(f, r.domain, p), x(f, "DOT", g), x(f, _, m);
                                            let b = x(f, j);
                                            h(b, r.numeric, ex);
                                            let v = x(s, _),
                                                y = x(s, "DOT");
                                            h(v, r.domain, s), h(y, o, n), h(y, r.domain, s);
                                            let E = eE(ew);
                                            h(y, r.tld, E), h(y, r.utld, E), h(E, r.domain, s), h(E, o, n), x(E, "DOT", y), x(E, _, v), x(E, "AT", u);
                                            let q = x(E, j),
                                                A = eE(ew);
                                            h(q, r.numeric, A);
                                            let er = eE(ew),
                                                ea = eE();
                                            h(er, t, er), h(er, a, ea), h(ea, t, er), h(ea, a, ea), x(E, Q, er), x(A, Q, er);
                                            let eo = x(l, j),
                                                ei = x(c, j),
                                                en = x(ei, Q),
                                                es = x(en, Q);
                                            h(l, r.domain, s), x(l, "DOT", y), x(l, _, v), h(c, r.domain, s), x(c, "DOT", y), x(c, _, v), h(eo, r.domain, er), x(eo, Q, er), h(es, r.domain, er), h(es, t, er), x(es, Q, er);
                                            let el = x(er, k),
                                                ec = x(er, D),
                                                eu = x(er, T),
                                                ed = x(er, L);
                                            x(ea, k, el), x(ea, D, ec), x(ea, T, eu), x(ea, L, ed), x(el, C, er), x(ec, S, er), x(eu, R, er), x(ed, O, er), x(el, C, er);
                                            let ep = eE(ew),
                                                eg = eE(ew),
                                                ef = eE(ew),
                                                eh = eE(ew);
                                            h(el, t, ep), h(ec, t, eg), h(eu, t, ef), h(ed, t, eh);
                                            let em = eE(),
                                                eb = eE(),
                                                ev = eE(),
                                                eq = eE();
                                            return h(el, a), h(ec, a), h(eu, a), h(ed, a), h(ep, t, ep), h(eg, t, eg), h(ef, t, ef), h(eh, t, eh), h(ep, a, ep), h(eg, a, eg), h(ef, a, ef), h(eh, a, eh), h(em, t, em), h(eb, t, eg), h(ev, t, ef), h(eq, t, eh), h(em, a, em), h(eb, a, eb), h(ev, a, ev), h(eq, a, eq), x(eg, S, er), x(ef, R, er), x(eh, O, er), x(ep, C, er), x(eb, S, er), x(ev, R, er), x(eq, O, er), x(em, O, er), x(i, w, E), x(i, "NL", ey), {
                                                start: i,
                                                tokens: et
                                            }
                                        }(eA.scanner.tokens);
                                        for (let e = 0; e < eA.pluginQueue.length; e++) eA.pluginQueue[e][1]({
                                            scanner: eA.scanner,
                                            parser: eA.parser
                                        });
                                        eA.initialized = !0
                                    }(), function(e, r, t) {
                                        let a = t.length,
                                            o = 0,
                                            i = [],
                                            n = [];
                                        for (; o < a;) {
                                            let s = e,
                                                l = null,
                                                c = null,
                                                u = 0,
                                                d = null,
                                                p = -1;
                                            for (; o < a && !(l = s.go(t[o].t));) n.push(t[o++]);
                                            for (; o < a && (c = l || s.go(t[o].t));) l = null, (s = c).accepts() ? (p = 0, d = s) : p >= 0 && p++, o++, u++;
                                            if (p < 0)(o -= u) < a && (n.push(t[o]), o++);
                                            else {
                                                n.length > 0 && (i.push(eq(ev, r, n)), n = []), o -= p, u -= p;
                                                let e = d.t,
                                                    a = t.slice(o - u, o);
                                                i.push(eq(e, r, a))
                                            }
                                        }
                                        return n.length > 0 && i.push(eq(ev, r, n)), i
                                    }(eA.parser.start, e, function(e, r) {
                                        let t = function(e) {
                                                let r = [],
                                                    t = e.length,
                                                    a = 0;
                                                for (; a < t;) {
                                                    let o, i = e.charCodeAt(a),
                                                        n = i < 55296 || i > 56319 || a + 1 === t || (o = e.charCodeAt(a + 1)) < 56320 || o > 57343 ? e[a] : e.slice(a, a + 2);
                                                    r.push(n), a += n.length
                                                }
                                                return r
                                            }(r.replace(/[A-Z]/g, e => e.toLowerCase())),
                                            a = t.length,
                                            o = [],
                                            i = 0,
                                            n = 0;
                                        for (; n < a;) {
                                            let s = e,
                                                l = null,
                                                c = 0,
                                                u = null,
                                                d = -1,
                                                p = -1;
                                            for (; n < a && (l = s.go(t[n]));)(s = l).accepts() ? (d = 0, p = 0, u = s) : d >= 0 && (d += t[n].length, p++), c += t[n].length, i += t[n].length, n++;
                                            i -= d, n -= p, c -= d, o.push({
                                                t: u.t,
                                                v: r.slice(i - c, i),
                                                s: i - c,
                                                e: i
                                            })
                                        }
                                        return o
                                    }(eA.scanner.start, e))),
                                    ep = [];
                                for (let e = 0; e < c.length; e++) {
                                    let o = c[e];
                                    if ("nl" === o.t && r.get("nl2br")) {
                                        let e = `__linkify-el-${t.elementId++}`;
                                        ep.push(a.createElement("br", {
                                            key: e
                                        }))
                                    } else if (o.isLink && r.check(o)) {
                                        let e = r.render(o);
                                        if (!("key" in e.props)) {
                                            let r = `__linkify-el-${t.elementId++}`,
                                                o = eh.assign({
                                                    key: r
                                                }, e.props);
                                            e = a.cloneElement(e, o)
                                        }
                                        ep.push(e)
                                    } else ep.push(o.toString())
                                }
                                return ep
                            }(r, t, c)) : a.isValidElement(r) ? "string" == typeof r.type && t.ignoreTags.indexOf(r.type.toUpperCase()) >= 0 ? ep.push(r) : ep.push(e(r, t, c)) : ep.push(r)
                        });
                        let eg = `__linkify-el-${c.elementId++}`,
                            ef = eh.assign({
                                key: eg
                            }, r.props);
                        return a.cloneElement(r, ef, ep)
                    }(eb, ep, {
                        elementId: 0
                    })
                }
        },
        3655: function(e, r, t) {
            var a = t(32792);

            function o(e) {
                this.mode = a.MODE_8BIT_BYTE, this.data = e
            }
            o.prototype = {
                getLength: function(e) {
                    return this.data.length
                },
                write: function(e) {
                    for (var r = 0; r < this.data.length; r++) e.put(this.data.charCodeAt(r), 8)
                }
            }, e.exports = o
        },
        27321: function(e) {
            function r() {
                this.buffer = [], this.length = 0
            }
            r.prototype = {
                get: function(e) {
                    var r = Math.floor(e / 8);
                    return (this.buffer[r] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, r) {
                    for (var t = 0; t < r; t++) this.putBit((e >>> r - t - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    var r = Math.floor(this.length / 8);
                    this.buffer.length <= r && this.buffer.push(0), e && (this.buffer[r] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = r
        },
        49381: function(e) {
            e.exports = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }
        },
        32832: function(e, r, t) {
            var a = t(11518);

            function o(e, r) {
                if (void 0 == e.length) throw Error(e.length + "/" + r);
                for (var t = 0; t < e.length && 0 == e[t];) t++;
                this.num = Array(e.length - t + r);
                for (var a = 0; a < e.length - t; a++) this.num[a] = e[a + t]
            }
            o.prototype = {
                get: function(e) {
                    return this.num[e]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(e) {
                    for (var r = Array(this.getLength() + e.getLength() - 1), t = 0; t < this.getLength(); t++)
                        for (var i = 0; i < e.getLength(); i++) r[t + i] ^= a.gexp(a.glog(this.get(t)) + a.glog(e.get(i)));
                    return new o(r, 0)
                },
                mod: function(e) {
                    if (this.getLength() - e.getLength() < 0) return this;
                    for (var r = a.glog(this.get(0)) - a.glog(e.get(0)), t = Array(this.getLength()), i = 0; i < this.getLength(); i++) t[i] = this.get(i);
                    for (var i = 0; i < e.getLength(); i++) t[i] ^= a.gexp(a.glog(e.get(i)) + r);
                    return new o(t, 0).mod(e)
                }
            }, e.exports = o
        },
        14450: function(e, r, t) {
            var a = t(3655),
                o = t(17611),
                i = t(27321),
                n = t(93160),
                s = t(32832);

            function l(e, r) {
                this.typeNumber = e, this.errorCorrectLevel = r, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            var c = l.prototype;
            c.addData = function(e) {
                var r = new a(e);
                this.dataList.push(r), this.dataCache = null
            }, c.isDark = function(e, r) {
                if (e < 0 || this.moduleCount <= e || r < 0 || this.moduleCount <= r) throw Error(e + "," + r);
                return this.modules[e][r]
            }, c.getModuleCount = function() {
                return this.moduleCount
            }, c.make = function() {
                if (this.typeNumber < 1) {
                    var e = 1;
                    for (e = 1; e < 40; e++) {
                        for (var r = o.getRSBlocks(e, this.errorCorrectLevel), t = new i, a = 0, s = 0; s < r.length; s++) a += r[s].dataCount;
                        for (var s = 0; s < this.dataList.length; s++) {
                            var l = this.dataList[s];
                            t.put(l.mode, 4), t.put(l.getLength(), n.getLengthInBits(l.mode, e)), l.write(t)
                        }
                        if (t.getLengthInBits() <= 8 * a) break
                    }
                    this.typeNumber = e
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            }, c.makeImpl = function(e, r) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                for (var t = 0; t < this.moduleCount; t++) {
                    this.modules[t] = Array(this.moduleCount);
                    for (var a = 0; a < this.moduleCount; a++) this.modules[t][a] = null
                }
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, r), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = l.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r)
            }, c.setupPositionProbePattern = function(e, r) {
                for (var t = -1; t <= 7; t++)
                    if (!(e + t <= -1) && !(this.moduleCount <= e + t))
                        for (var a = -1; a <= 7; a++) r + a <= -1 || this.moduleCount <= r + a || (0 <= t && t <= 6 && (0 == a || 6 == a) || 0 <= a && a <= 6 && (0 == t || 6 == t) || 2 <= t && t <= 4 && 2 <= a && a <= 4 ? this.modules[e + t][r + a] = !0 : this.modules[e + t][r + a] = !1)
            }, c.getBestMaskPattern = function() {
                for (var e = 0, r = 0, t = 0; t < 8; t++) {
                    this.makeImpl(!0, t);
                    var a = n.getLostPoint(this);
                    (0 == t || e > a) && (e = a, r = t)
                }
                return r
            }, c.createMovieClip = function(e, r, t) {
                var a = e.createEmptyMovieClip(r, t);
                this.make();
                for (var o = 0; o < this.modules.length; o++)
                    for (var i = 1 * o, n = 0; n < this.modules[o].length; n++) {
                        var s = 1 * n;
                        this.modules[o][n] && (a.beginFill(0, 100), a.moveTo(s, i), a.lineTo(s + 1, i), a.lineTo(s + 1, i + 1), a.lineTo(s, i + 1), a.endFill())
                    }
                return a
            }, c.setupTimingPattern = function() {
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                for (var r = 8; r < this.moduleCount - 8; r++) null == this.modules[6][r] && (this.modules[6][r] = r % 2 == 0)
            }, c.setupPositionAdjustPattern = function() {
                for (var e = n.getPatternPosition(this.typeNumber), r = 0; r < e.length; r++)
                    for (var t = 0; t < e.length; t++) {
                        var a = e[r],
                            o = e[t];
                        if (null == this.modules[a][o])
                            for (var i = -2; i <= 2; i++)
                                for (var s = -2; s <= 2; s++) - 2 == i || 2 == i || -2 == s || 2 == s || 0 == i && 0 == s ? this.modules[a + i][o + s] = !0 : this.modules[a + i][o + s] = !1
                    }
            }, c.setupTypeNumber = function(e) {
                for (var r = n.getBCHTypeNumber(this.typeNumber), t = 0; t < 18; t++) {
                    var a = !e && (r >> t & 1) == 1;
                    this.modules[Math.floor(t / 3)][t % 3 + this.moduleCount - 8 - 3] = a
                }
                for (var t = 0; t < 18; t++) {
                    var a = !e && (r >> t & 1) == 1;
                    this.modules[t % 3 + this.moduleCount - 8 - 3][Math.floor(t / 3)] = a
                }
            }, c.setupTypeInfo = function(e, r) {
                for (var t = this.errorCorrectLevel << 3 | r, a = n.getBCHTypeInfo(t), o = 0; o < 15; o++) {
                    var i = !e && (a >> o & 1) == 1;
                    o < 6 ? this.modules[o][8] = i : o < 8 ? this.modules[o + 1][8] = i : this.modules[this.moduleCount - 15 + o][8] = i
                }
                for (var o = 0; o < 15; o++) {
                    var i = !e && (a >> o & 1) == 1;
                    o < 8 ? this.modules[8][this.moduleCount - o - 1] = i : o < 9 ? this.modules[8][15 - o - 1 + 1] = i : this.modules[8][15 - o - 1] = i
                }
                this.modules[this.moduleCount - 8][8] = !e
            }, c.mapData = function(e, r) {
                for (var t = -1, a = this.moduleCount - 1, o = 7, i = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                    for (6 == s && s--;;) {
                        for (var l = 0; l < 2; l++)
                            if (null == this.modules[a][s - l]) {
                                var c = !1;
                                i < e.length && (c = (e[i] >>> o & 1) == 1), n.getMask(r, a, s - l) && (c = !c), this.modules[a][s - l] = c, -1 == --o && (i++, o = 7)
                            }
                        if ((a += t) < 0 || this.moduleCount <= a) {
                            a -= t, t = -t;
                            break
                        }
                    }
            }, l.PAD0 = 236, l.PAD1 = 17, l.createData = function(e, r, t) {
                for (var a = o.getRSBlocks(e, r), s = new i, c = 0; c < t.length; c++) {
                    var u = t[c];
                    s.put(u.mode, 4), s.put(u.getLength(), n.getLengthInBits(u.mode, e)), u.write(s)
                }
                for (var d = 0, c = 0; c < a.length; c++) d += a[c].dataCount;
                if (s.getLengthInBits() > 8 * d) throw Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * d + ")");
                for (s.getLengthInBits() + 4 <= 8 * d && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
                for (; !(s.getLengthInBits() >= 8 * d) && (s.put(l.PAD0, 8), !(s.getLengthInBits() >= 8 * d));) s.put(l.PAD1, 8);
                return l.createBytes(s, a)
            }, l.createBytes = function(e, r) {
                for (var t = 0, a = 0, o = 0, i = Array(r.length), l = Array(r.length), c = 0; c < r.length; c++) {
                    var u = r[c].dataCount,
                        d = r[c].totalCount - u;
                    a = Math.max(a, u), o = Math.max(o, d), i[c] = Array(u);
                    for (var p = 0; p < i[c].length; p++) i[c][p] = 255 & e.buffer[p + t];
                    t += u;
                    var g = n.getErrorCorrectPolynomial(d),
                        f = new s(i[c], g.getLength() - 1).mod(g);
                    l[c] = Array(g.getLength() - 1);
                    for (var p = 0; p < l[c].length; p++) {
                        var h = p + f.getLength() - l[c].length;
                        l[c][p] = h >= 0 ? f.get(h) : 0
                    }
                }
                for (var m = 0, p = 0; p < r.length; p++) m += r[p].totalCount;
                for (var b = Array(m), x = 0, p = 0; p < a; p++)
                    for (var c = 0; c < r.length; c++) p < i[c].length && (b[x++] = i[c][p]);
                for (var p = 0; p < o; p++)
                    for (var c = 0; c < r.length; c++) p < l[c].length && (b[x++] = l[c][p]);
                return b
            }, e.exports = l
        },
        17611: function(e, r, t) {
            var a = t(49381);

            function o(e, r) {
                this.totalCount = e, this.dataCount = r
            }
            o.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], o.getRSBlocks = function(e, r) {
                var t = o.getRsBlockTable(e, r);
                if (void 0 == t) throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + r);
                for (var a = t.length / 3, i = [], n = 0; n < a; n++)
                    for (var s = t[3 * n + 0], l = t[3 * n + 1], c = t[3 * n + 2], u = 0; u < s; u++) i.push(new o(l, c));
                return i
            }, o.getRsBlockTable = function(e, r) {
                switch (r) {
                    case a.L:
                        return o.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
                    case a.M:
                        return o.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
                    case a.Q:
                        return o.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
                    case a.H:
                        return o.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, e.exports = o
        },
        11518: function(e) {
            for (var r = {
                    glog: function(e) {
                        if (e < 1) throw Error("glog(" + e + ")");
                        return r.LOG_TABLE[e]
                    },
                    gexp: function(e) {
                        for (; e < 0;) e += 255;
                        for (; e >= 256;) e -= 255;
                        return r.EXP_TABLE[e]
                    },
                    EXP_TABLE: Array(256),
                    LOG_TABLE: Array(256)
                }, t = 0; t < 8; t++) r.EXP_TABLE[t] = 1 << t;
            for (var t = 8; t < 256; t++) r.EXP_TABLE[t] = r.EXP_TABLE[t - 4] ^ r.EXP_TABLE[t - 5] ^ r.EXP_TABLE[t - 6] ^ r.EXP_TABLE[t - 8];
            for (var t = 0; t < 255; t++) r.LOG_TABLE[r.EXP_TABLE[t]] = t;
            e.exports = r
        },
        32792: function(e) {
            e.exports = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            }
        },
        93160: function(e, r, t) {
            var a = t(32792),
                o = t(32832),
                i = t(11518),
                n = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                },
                s = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        for (var r = e << 10; s.getBCHDigit(r) - s.getBCHDigit(s.G15) >= 0;) r ^= s.G15 << s.getBCHDigit(r) - s.getBCHDigit(s.G15);
                        return (e << 10 | r) ^ s.G15_MASK
                    },
                    getBCHTypeNumber: function(e) {
                        for (var r = e << 12; s.getBCHDigit(r) - s.getBCHDigit(s.G18) >= 0;) r ^= s.G18 << s.getBCHDigit(r) - s.getBCHDigit(s.G18);
                        return e << 12 | r
                    },
                    getBCHDigit: function(e) {
                        for (var r = 0; 0 != e;) r++, e >>>= 1;
                        return r
                    },
                    getPatternPosition: function(e) {
                        return s.PATTERN_POSITION_TABLE[e - 1]
                    },
                    getMask: function(e, r, t) {
                        switch (e) {
                            case n.PATTERN000:
                                return (r + t) % 2 == 0;
                            case n.PATTERN001:
                                return r % 2 == 0;
                            case n.PATTERN010:
                                return t % 3 == 0;
                            case n.PATTERN011:
                                return (r + t) % 3 == 0;
                            case n.PATTERN100:
                                return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0;
                            case n.PATTERN101:
                                return r * t % 2 + r * t % 3 == 0;
                            case n.PATTERN110:
                                return (r * t % 2 + r * t % 3) % 2 == 0;
                            case n.PATTERN111:
                                return (r * t % 3 + (r + t) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var r = new o([1], 0), t = 0; t < e; t++) r = r.multiply(new o([1, i.gexp(t)], 0));
                        return r
                    },
                    getLengthInBits: function(e, r) {
                        if (1 <= r && r < 10) switch (e) {
                            case a.MODE_NUMBER:
                                return 10;
                            case a.MODE_ALPHA_NUM:
                                return 9;
                            case a.MODE_8BIT_BYTE:
                            case a.MODE_KANJI:
                                return 8;
                            default:
                                throw Error("mode:" + e)
                        } else if (r < 27) switch (e) {
                            case a.MODE_NUMBER:
                                return 12;
                            case a.MODE_ALPHA_NUM:
                                return 11;
                            case a.MODE_8BIT_BYTE:
                                return 16;
                            case a.MODE_KANJI:
                                return 10;
                            default:
                                throw Error("mode:" + e)
                        } else if (r < 41) switch (e) {
                            case a.MODE_NUMBER:
                                return 14;
                            case a.MODE_ALPHA_NUM:
                                return 13;
                            case a.MODE_8BIT_BYTE:
                                return 16;
                            case a.MODE_KANJI:
                                return 12;
                            default:
                                throw Error("mode:" + e)
                        } else throw Error("type:" + r)
                    },
                    getLostPoint: function(e) {
                        for (var r = e.getModuleCount(), t = 0, a = 0; a < r; a++)
                            for (var o = 0; o < r; o++) {
                                for (var i = 0, n = e.isDark(a, o), s = -1; s <= 1; s++)
                                    if (!(a + s < 0) && !(r <= a + s))
                                        for (var l = -1; l <= 1; l++) !(o + l < 0) && !(r <= o + l) && (0 != s || 0 != l) && n == e.isDark(a + s, o + l) && i++;
                                i > 5 && (t += 3 + i - 5)
                            }
                        for (var a = 0; a < r - 1; a++)
                            for (var o = 0; o < r - 1; o++) {
                                var c = 0;
                                e.isDark(a, o) && c++, e.isDark(a + 1, o) && c++, e.isDark(a, o + 1) && c++, e.isDark(a + 1, o + 1) && c++, (0 == c || 4 == c) && (t += 3)
                            }
                        for (var a = 0; a < r; a++)
                            for (var o = 0; o < r - 6; o++) e.isDark(a, o) && !e.isDark(a, o + 1) && e.isDark(a, o + 2) && e.isDark(a, o + 3) && e.isDark(a, o + 4) && !e.isDark(a, o + 5) && e.isDark(a, o + 6) && (t += 40);
                        for (var o = 0; o < r; o++)
                            for (var a = 0; a < r - 6; a++) e.isDark(a, o) && !e.isDark(a + 1, o) && e.isDark(a + 2, o) && e.isDark(a + 3, o) && e.isDark(a + 4, o) && !e.isDark(a + 5, o) && e.isDark(a + 6, o) && (t += 40);
                        for (var u = 0, o = 0; o < r; o++)
                            for (var a = 0; a < r; a++) e.isDark(a, o) && u++;
                        return t + 10 * (Math.abs(100 * u / r / r - 50) / 5)
                    }
                };
            e.exports = s
        },
        88632: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                },
                o = s(t(45697)),
                i = t(67294),
                n = s(i);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = {
                    bgColor: o.default.oneOfType([o.default.object, o.default.string]).isRequired,
                    bgD: o.default.string.isRequired,
                    fgColor: o.default.oneOfType([o.default.object, o.default.string]).isRequired,
                    fgD: o.default.string.isRequired,
                    size: o.default.number.isRequired,
                    title: o.default.string,
                    viewBoxSize: o.default.number.isRequired,
                    xmlns: o.default.string
                },
                c = (0, i.forwardRef)(function(e, r) {
                    var t = e.bgColor,
                        o = e.bgD,
                        i = e.fgD,
                        s = e.fgColor,
                        l = e.size,
                        c = e.title,
                        u = e.viewBoxSize,
                        d = function(e, r) {
                            var t = {};
                            for (var a in e) !(r.indexOf(a) >= 0) && Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                            return t
                        }(e, ["bgColor", "bgD", "fgD", "fgColor", "size", "title", "viewBoxSize"]);
                    return n.default.createElement("svg", a({}, d, {
                        height: l,
                        ref: r,
                        viewBox: "0 0 " + u + " " + u,
                        width: l
                    }), c ? n.default.createElement("title", null, c) : null, n.default.createElement("path", {
                        d: o,
                        fill: t
                    }), n.default.createElement("path", {
                        d: i,
                        fill: s
                    }))
                });
            c.displayName = "QRCodeSvg", c.propTypes = l, c.defaultProps = {
                title: void 0,
                xmlns: "http://www.w3.org/2000/svg"
            }, r.default = c
        },
        1653: function(e, r, t) {
            "use strict";
            var a = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                },
                o = u(t(14450)),
                i = u(t(49381)),
                n = u(t(45697)),
                s = t(67294),
                l = u(s),
                c = u(t(88632));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = {
                    bgColor: n.default.oneOfType([n.default.object, n.default.string]),
                    fgColor: n.default.oneOfType([n.default.object, n.default.string]),
                    level: n.default.string,
                    size: n.default.number,
                    value: n.default.string.isRequired
                },
                p = (0, s.forwardRef)(function(e, r) {
                    var t = e.bgColor,
                        n = e.fgColor,
                        s = e.level,
                        u = e.size,
                        d = e.value,
                        p = function(e, r) {
                            var t = {};
                            for (var a in e) !(r.indexOf(a) >= 0) && Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                            return t
                        }(e, ["bgColor", "fgColor", "level", "size", "value"]),
                        g = new o.default(-1, i.default[s]);
                    g.addData(d), g.make();
                    var f = g.modules;
                    return l.default.createElement(c.default, a({}, p, {
                        bgColor: t,
                        bgD: f.map(function(e, r) {
                            return e.map(function(e, t) {
                                return e ? "" : "M " + t + " " + r + " l 1 0 0 1 -1 0 Z"
                            }).join(" ")
                        }).join(" "),
                        fgColor: n,
                        fgD: f.map(function(e, r) {
                            return e.map(function(e, t) {
                                return e ? "M " + t + " " + r + " l 1 0 0 1 -1 0 Z" : ""
                            }).join(" ")
                        }).join(" "),
                        ref: r,
                        size: u,
                        viewBoxSize: f.length
                    }))
                });
            p.displayName = "QRCode", p.propTypes = d, p.defaultProps = {
                bgColor: "#FFFFFF",
                fgColor: "#000000",
                level: "L",
                size: 256
            }, r.Z = p
        },
        11742: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var r = document.activeElement, t = [], a = 0; a < e.rangeCount; a++) t.push(e.getRangeAt(a));
                switch (r.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        r.blur();
                        break;
                    default:
                        r = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || t.forEach(function(r) {
                            e.addRange(r)
                        }), r && r.focus()
                    }
            }
        },
        49770: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return n
                }
            });
            var a = t(95591),
                o = t(11753);
            let i = e => (r, t, a) => (a.revalidateOnFocus = !1, a.revalidateIfStale = !1, a.revalidateOnReconnect = !1, e(r, t, a)),
                n = (0, o.xD)(a.ZP, i)
        }
    }
]);