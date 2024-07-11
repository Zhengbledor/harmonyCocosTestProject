!function () {
    "use strict";
    function p1391(c1402, d1402) {
        return (d1402 || "") + " (SystemJS https://git.io/JvFET#" + c1402 + ")";
    }
    var e1392, f1392 = "undefined" != typeof Symbol, g1392 = "undefined" != typeof self, h1392 = "undefined" != typeof document, i1392 = g1392 ? self : global;
    if (h1392) {
        var j1392 = document.querySelector("base[href]");
        j1392 && (e1392 = j1392.href);
    }
    if (!e1392 && "undefined" != typeof location) {
        var k1392 = (e1392 = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
        -1 !== k1392 && (e1392 = e1392.slice(0, k1392 + 1));
    }
    if (!e1392 && "undefined" != typeof process) {
        var l1392 = process.cwd();
        e1392 = "file://" + ("/" === l1392[0] ? "" : "/") + l1392.replace(/\\/g, "/") + "/";
    }
    var m1392 = /\\/g;
    function q1391(u1401, v1401) {
        if (-1 !== u1401.indexOf("\\") && (u1401 = u1401.replace(m1392, "/")), "/" === u1401[0] && "/" === u1401[1])
            return v1401.slice(0, v1401.indexOf(":") + 1) + u1401;
        if ("." === u1401[0] && ("/" === u1401[1] || "." === u1401[1] && ("/" === u1401[2] || 2 === u1401.length && (u1401 += "/")) || 1 === u1401.length && (u1401 += "/")) || "/" === u1401[0]) {
            var w1401, x1401 = v1401.slice(0, v1401.indexOf(":") + 1);
            if (w1401 = "/" === v1401[x1401.length + 1] ? "file:" !== x1401 ? (w1401 = v1401.slice(x1401.length + 2)).slice(w1401.indexOf("/") + 1) : v1401.slice(8) : v1401.slice(x1401.length + ("/" === v1401[x1401.length])), "/" === u1401[0])
                return v1401.slice(0, v1401.length - w1401.length - 1) + u1401;
            for (var y1401 = w1401.slice(0, w1401.lastIndexOf("/") + 1) + u1401, z1401 = [], a1402 = -1, b1402 = 0; b1402 < y1401.length; b1402++)
                -1 !== a1402 ? "/" === y1401[b1402] && (z1401.push(y1401.slice(a1402, b1402 + 1)), a1402 = -1) : "." === y1401[b1402] ? "." !== y1401[b1402 + 1] || "/" !== y1401[b1402 + 2] && b1402 + 2 !== y1401.length ? "/" === y1401[b1402 + 1] || b1402 + 1 === y1401.length ? b1402 += 1 : a1402 = b1402 : (z1401.pop(), b1402 += 2) : a1402 = b1402;
            return -1 !== a1402 && z1401.push(y1401.slice(a1402)), v1401.slice(0, v1401.length - w1401.length) + z1401.join("");
        }
    }
    function r1391(s1401, t1401) {
        return q1391(s1401, t1401) || (-1 !== s1401.indexOf(":") ? s1401 : q1391("./" + s1401, t1401));
    }
    function s1391(j1401, k1401, l1401, m1401, n1401) {
        for (var o1401 in j1401) {
            var p1401 = q1391(o1401, l1401) || o1401, q1401 = j1401[o1401];
            if ("string" == typeof q1401) {
                var r1401 = w1391(m1401, q1391(q1401, l1401) || q1401, n1401);
                r1401 ? k1401[p1401] = r1401 : v1391("W1", o1401, q1401);
            }
        }
    }
    function t1391(f1401, g1401) {
        if (g1401[f1401])
            return f1401;
        var h1401 = f1401.length;
        do {
            var i1401 = f1401.slice(0, h1401 + 1);
            if (i1401 in g1401)
                return i1401;
        } while (-1 !== (h1401 = f1401.lastIndexOf("/", h1401 - 1)));
    }
    function u1391(b1401, c1401) {
        var d1401 = t1391(b1401, c1401);
        if (d1401) {
            var e1401 = c1401[d1401];
            if (null === e1401)
                return;
            if (!(b1401.length > d1401.length && "/" !== e1401[e1401.length - 1]))
                return e1401 + b1401.slice(d1401.length);
            v1391("W2", d1401, e1401);
        }
    }
    function v1391(x1400, y1400, z1400, a1401) {
        console.warn(p1391(x1400, [z1400, y1400].join(", ")));
    }
    function w1391(r1400, s1400, t1400) {
        for (var u1400 = r1400.scopes, v1400 = t1400 && t1391(t1400, u1400); v1400;) {
            var w1400 = u1391(s1400, u1400[v1400]);
            if (w1400)
                return w1400;
            v1400 = t1391(v1400.slice(0, v1400.lastIndexOf("/")), u1400);
        }
        return u1391(s1400, r1400.imports) || -1 !== s1400.indexOf(":") && s1400;
    }
    var n1392 = f1392 && Symbol.toStringTag, o1392 = f1392 ? Symbol() : "@";
    function x1391() {
        this[o1392] = {};
    }
    var p1392, q1392 = x1391.prototype;
    function y1391(h1399, i1399, j1399) {
        var k1399 = h1399[o1392][i1399];
        if (k1399)
            return k1399;
        var l1399 = [], m1399 = Object.create(null);
        n1392 && Object.defineProperty(m1399, n1392, {
            value: "Module"
        });
        var n1399 = Promise.resolve().then(function () {
            return h1399.instantiate(i1399, j1399);
        }).then(function (g1400) {
            if (!g1400)
                throw Error(p1391(2, i1399));
            var h1400 = g1400[1](function (l1400, m1400) {
                k1399.h = !0;
                var n1400 = !1;
                if ("string" == typeof l1400)
                    l1400 in m1399 && m1399[l1400] === m1400 || (m1399[l1400] = m1400, n1400 = !0);
                else {
                    for (var o1400 in l1400) {
                        m1400 = l1400[o1400];
                        o1400 in m1399 && m1399[o1400] === m1400 || (m1399[o1400] = m1400, n1400 = !0);
                    }
                    l1400.__esModule && (m1399.__esModule = l1400.__esModule);
                }
                if (n1400)
                    for (var p1400 = 0; p1400 < l1399.length; p1400++) {
                        var q1400 = l1399[p1400];
                        q1400 && q1400(m1399);
                    }
                return m1400;
            }, 2 === g1400[1].length ? {
                import: function (k1400) {
                    return h1399.import(k1400, i1399);
                },
                meta: h1399.createContext(i1399)
            } : void 0);
            return k1399.e = h1400.execute || function () { }, [g1400[0], h1400.setters || []];
        }, function (f1400) {
            throw k1399.e = null, k1399.er = f1400, f1400;
        }), o1399 = n1399.then(function (u1399) {
            return Promise.all(u1399[0].map(function (y1399, z1399) {
                var a1400 = u1399[1][z1399];
                return Promise.resolve(h1399.resolve(y1399, i1399)).then(function (c1400) {
                    var d1400 = y1391(h1399, c1400, i1399);
                    return Promise.resolve(d1400.I).then(function () {
                        return a1400 && (d1400.i.push(a1400), !d1400.h && d1400.I || a1400(d1400.n)), d1400;
                    });
                });
            })).then(function (x1399) {
                k1399.d = x1399;
            });
        });
        return o1399.catch(function () { }), k1399 = h1399[o1392][i1399] = {
            id: i1399,
            i: l1399,
            n: m1399,
            I: n1399,
            L: o1399,
            h: !1,
            d: void 0,
            e: void 0,
            er: void 0,
            E: void 0,
            C: void 0,
            p: void 0
        };
    }
    function z1391(y1398, z1398, a1399, b1399) {
        if (!b1399[z1398.id])
            return b1399[z1398.id] = !0, Promise.resolve(z1398.L).then(function () {
                return z1398.p && null !== z1398.p.e || (z1398.p = a1399), Promise.all(z1398.d.map(function (g1399) {
                    return z1391(y1398, g1399, a1399, b1399);
                }));
            }).catch(function (e1399) {
                if (z1398.er)
                    throw e1399;
                throw z1398.e = null, e1399;
            });
    }
    q1392.import = function (m1398, n1398) {
        var o1398 = this;
        return Promise.resolve(o1398.prepareImport()).then(function () {
            return o1398.resolve(m1398, n1398);
        }).then(function (r1398) {
            var s1398 = y1391(o1398, r1398);
            return s1398.C || function (u1398, v1398) {
                return v1398.C = z1391(u1398, v1398, v1398, {}).then(function () {
                    return a1392(u1398, v1398, {});
                }).then(function () {
                    return v1398.n;
                });
            }(o1398, s1398);
        });
    }, q1392.createContext = function (i1398) {
        var j1398 = this;
        return {
            url: i1398,
            resolve: function (k1398, l1398) {
                return Promise.resolve(j1398.resolve(k1398, l1398 || i1398));
            }
        };
    }, q1392.register = function (g1398, h1398) {
        p1392 = [g1398, h1398];
    }, q1392.getRegister = function () {
        var f1398 = p1392;
        return p1392 = void 0, f1398;
    };
    var r1392 = Object.freeze(Object.create(null)), s1392 = Promise.prototype.finally || function (x1397) {
        if ("function" != typeof x1397)
            return this.then(x1397, x1397);
        const y1397 = this.constructor || Promise;
        return this.then(d1398 => y1397.resolve(x1397()).then(() => d1398), b1398 => y1397.resolve(x1397()).then(() => {
            throw b1398;
        }));
    };
    function a1392(f1397, g1397, h1397) {
        if (h1397[g1397.id])
            return g1397.E;
        if (h1397[g1397.id] = !0, !g1397.e) {
            if (g1397.er)
                throw g1397.er;
            return g1397.E ? g1397.E : void 0;
        }
        const j1397 = g1397.e;
        var k1397;
        if (g1397.e = null, g1397.d.forEach(function (u1397) {
            try {
                var v1397 = a1392(f1397, u1397, h1397);
                v1397 && (k1397 = k1397 || []).push(v1397);
            }
            catch (w1397) {
                throw g1397.er = w1397, w1397;
            }
        }), k1397)
            return g1397.E = s1392.call(Promise.all(k1397).then(i1397), function () {
                g1397.E = null;
            });
        var l1397 = i1397();
        if (l1397)
            return g1397.E = s1392.call(l1397, function () {
                g1397.E = null;
            });
        function i1397() {
            try {
                var p1397 = j1397.call(r1392);
                if (p1397)
                    return p1397 = p1397.then(function () {
                        g1397.C = g1397.n;
                    }, function (t1397) {
                        throw g1397.er = t1397, t1397;
                    });
                g1397.C = g1397.n, g1397.L = g1397.I = void 0;
            }
            catch (q1397) {
                throw g1397.er = q1397, q1397;
            }
        }
    }
    i1392.System = new x1391();
    const t1392 = "undefined" != typeof $global ? $global : "function" == typeof getApp ? getApp().GameGlobal : void 0, u1392 = (void 0 !== t1392 ? t1392.System : System).constructor.prototype;
    u1392.instantiate = function (d1397, e1397) {
        throw new Error(`Unable to instantiate ${d1397} from ${e1397}`);
    };
    var v1392 = "undefined" != typeof Symbol && Symbol.toStringTag;
    q1392.get = function (b1397) {
        var c1397 = this[o1392][b1397];
        if (c1397 && null === c1397.e && !c1397.E)
            return c1397.er ? null : c1397.n;
    }, q1392.set = function (w1396, x1396) {
        var y1396;
        v1392 && "Module" === x1396[v1392] ? y1396 = x1396 : (y1396 = Object.assign(Object.create(null), x1396), v1392 && Object.defineProperty(y1396, v1392, {
            value: "Module"
        }));
        var z1396 = Promise.resolve(y1396), a1397 = this[o1392][w1396] || (this[o1392][w1396] = {
            id: w1396,
            i: [],
            h: !1,
            d: [],
            e: null,
            er: void 0,
            E: void 0
        });
        return !a1397.e && !a1397.E && (Object.assign(a1397, {
            n: y1396,
            I: void 0,
            L: void 0,
            C: z1396
        }), y1396);
    }, q1392.has = function (v1396) {
        return !!this[o1392][v1396];
    }, q1392.delete = function (k1396) {
        var l1396 = this[o1392], m1396 = l1396[k1396];
        if (!m1396 || m1396.p && null !== m1396.p.e || m1396.E)
            return !1;
        var n1396 = m1396.i;
        return m1396.d && m1396.d.forEach(function (t1396) {
            var u1396 = t1396.i.indexOf(m1396);
            -1 !== u1396 && t1396.i.splice(u1396, 1);
        }), delete l1396[k1396], function () {
            var q1396 = l1396[k1396];
            if (!q1396 || !n1396 || null !== q1396.e || q1396.E)
                return !1;
            n1396.forEach(function (s1396) {
                q1396.i.push(s1396), s1396(q1396.n);
            }), n1396 = null;
        };
    };
    var w1392 = "undefined" != typeof Symbol && Symbol.iterator;
    q1392.entries = function () {
        var d1396, e1396, f1396 = this, g1396 = Object.keys(f1396[o1392]), h1396 = 0, i1396 = {
            next: function () {
                for (; void 0 !== (e1396 = g1396[h1396++]) && void 0 === (d1396 = f1396.get(e1396));)
                    ;
                return {
                    done: void 0 === e1396,
                    value: void 0 !== e1396 && [e1396, d1396]
                };
            }
        };
        return i1396[w1392] = function () {
            return this;
        }, i1396;
    };
    let x1392 = e1392;
    const y1392 = {
        imports: {},
        scopes: {}
    };
    function b1392(v1395, w1395) {
        !function (y1395, z1395, a1396) {
            var b1396;
            for (b1396 in y1395.imports && s1391(y1395.imports, a1396.imports, z1395, a1396, null), y1395.scopes || {}) {
                var c1396 = r1391(b1396, z1395);
                s1391(y1395.scopes[b1396], a1396.scopes[c1396] || (a1396.scopes[c1396] = {}), z1395, a1396, c1396);
            }
            for (b1396 in y1395.depcache || {})
                a1396.depcache[r1391(b1396, z1395)] = y1395.depcache[b1396];
            for (b1396 in y1395.integrity || {})
                a1396.integrity[r1391(b1396, z1395)] = y1395.integrity[b1396];
        }(v1395, w1395 || x1392, y1392);
    }
    function c1392(l1395) {
        return function (n1395) {
            const o1395 = this;
            let p1395;
            try {
                p1395 = l1395(n1395);
            }
            catch (u1395) {
                return Promise.reject(u1395);
            }
            return q1395 = p1395, Boolean(q1395 && "function" == typeof q1395.then) ? new Promise(s1395 => p1395.then(() => {
                s1395(o1395.getRegister());
            })) : o1395.getRegister();
            var q1395;
        };
    }
    function d1392(e1395, f1395) {
        const g1395 = u1392.instantiate;
        u1392.instantiate = function (i1395, j1395) {
            const k1395 = i1395.substr(0, e1395.length) === e1395 ? i1395.substr(e1395.length) : null;
            return null === k1395 ? g1395.call(this, i1395, j1395) : f1395.call(this, k1395, j1395);
        };
    }
    u1392.resolve = function (z1394, a1395) {
        return w1391(y1392, q1391(z1394, a1395 = a1395 || x1392) || z1394, a1395) || function (c1395, d1395) {
            throw new Error(`Unresolved id: ${c1395} from parentUrl: ${d1395}`);
        }(z1394, a1395);
    }, u1392.prepareImport = function () {
        return Promise.resolve();
    }, u1392.warmup = function ({ pathname: s1394 = "/", importMap: t1394, importMapUrl: u1394, defaultHandler: v1394, handlers: w1394 }) {
        const x1394 = "no-schema:";
        if (x1392 = `no-schema:${s1394}`, b1392(t1394, `no-schema:/${u1394}`), v1394 && d1392(x1394, c1392(v1394)), w1394)
            for (const y1394 of Object.keys(w1394))
                d1392(y1394, c1392(w1394[y1394]));
    }, function (o1393) {
        var q1393 = o1393.System;
        p1393(q1393);
        var r1393, s1393 = q1393.constructor.prototype, t1393 = q1393.constructor, u1393 = function () {
            t1393.call(this), p1393(this);
        };
        function p1393(r1394) {
            r1394.registerRegistry = Object.create(null);
        }
        u1393.prototype = s1393, q1393.constructor = u1393;
        var v1393 = s1393.register;
        s1393.register = function (m1394, n1394, o1394) {
            if ("string" != typeof m1394)
                return v1393.apply(this, arguments);
            var p1394 = [n1394, o1394];
            return this.registerRegistry[m1394] = p1394, r1393 || (r1393 = p1394, Promise.resolve().then(function () {
                r1393 = null;
            })), v1393.apply(this, arguments);
        };
        var w1393 = s1393.resolve;
        s1393.resolve = function (j1394, k1394) {
            try {
                return w1393.call(this, j1394, k1394);
            }
            catch (l1394) {
                if (j1394 in this.registerRegistry)
                    return j1394;
                throw l1394;
            }
        };
        var x1393 = s1393.instantiate;
        s1393.instantiate = function (g1394, h1394) {
            var i1394 = this.registerRegistry[g1394];
            return i1394 ? (this.registerRegistry[g1394] = null, i1394) : x1393.call(this, g1394, h1394);
        };
        var y1393 = s1393.getRegister;
        s1393.getRegister = function () {
            var e1394 = y1393.call(this), f1394 = r1393 || e1394;
            return r1393 = null, f1394;
        };
    }("undefined" != typeof self ? self : global);
}();
