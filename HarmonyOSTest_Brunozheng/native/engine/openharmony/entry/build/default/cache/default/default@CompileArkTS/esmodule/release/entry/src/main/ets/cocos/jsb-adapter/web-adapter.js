(function () {
    function s123(t123, u123, v123) {
        function w123(z123, a124) {
            if (!u123[z123]) {
                if (!t123[z123]) {
                    var b124 = "function" == typeof require && require;
                    if (!a124 && b124)
                        return b124(z123, !0);
                    if (x123)
                        return x123(z123, !0);
                    var c124 = new Error("Cannot find module '" + z123 + "'");
                    throw c124.code = "MODULE_NOT_FOUND", c124;
                }
                var d124 = u123[z123] = {
                    exports: {}
                };
                t123[z123][0].call(d124.exports, function (f124) {
                    var g124 = t123[z123][1][f124];
                    return w123(g124 || f124);
                }, d124, d124.exports, s123, t123, u123, v123);
            }
            return u123[z123].exports;
        }
        for (var x123 = "function" == typeof require && require, y123 = 0; y123 < v123.length; y123++)
            w123(v123[y123]);
        return w123;
    }
    return s123;
})()({
    1: [function (a122, b122, c122) {
            var l122 = b122.exports = {};
            var m122;
            var n122;
            function d122() {
                throw new Error('setTimeout has not been defined');
            }
            function e122() {
                throw new Error('clearTimeout has not been defined');
            }
            (function () {
                try {
                    if (typeof setTimeout === 'function') {
                        m122 = setTimeout;
                    }
                    else {
                        m122 = d122;
                    }
                }
                catch (r123) {
                    m122 = d122;
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        n122 = clearTimeout;
                    }
                    else {
                        n122 = e122;
                    }
                }
                catch (q123) {
                    n122 = e122;
                }
            })();
            function f122(n123) {
                if (m122 === setTimeout) {
                    return setTimeout(n123, 0);
                }
                if ((m122 === d122 || !m122) && setTimeout) {
                    m122 = setTimeout;
                    return setTimeout(n123, 0);
                }
                try {
                    return m122(n123, 0);
                }
                catch (o123) {
                    try {
                        return m122.call(null, n123, 0);
                    }
                    catch (p123) {
                        return m122.call(this, n123, 0);
                    }
                }
            }
            function g122(k123) {
                if (n122 === clearTimeout) {
                    return clearTimeout(k123);
                }
                if ((n122 === e122 || !n122) && clearTimeout) {
                    n122 = clearTimeout;
                    return clearTimeout(k123);
                }
                try {
                    return n122(k123);
                }
                catch (l123) {
                    try {
                        return n122.call(null, k123);
                    }
                    catch (m123) {
                        return n122.call(this, k123);
                    }
                }
            }
            var o122 = [];
            var p122 = false;
            var q122;
            var r122 = -1;
            function h122() {
                if (!p122 || !q122) {
                    return;
                }
                p122 = false;
                if (q122.length) {
                    o122 = q122.concat(o122);
                }
                else {
                    r122 = -1;
                }
                if (o122.length) {
                    i122();
                }
            }
            function i122() {
                if (p122) {
                    return;
                }
                var i123 = f122(h122);
                p122 = true;
                var j123 = o122.length;
                while (j123) {
                    q122 = o122;
                    o122 = [];
                    while (++r122 < j123) {
                        if (q122) {
                            q122[r122].run();
                        }
                    }
                    r122 = -1;
                    j123 = o122.length;
                }
                q122 = null;
                p122 = false;
                g122(i123);
            }
            l122.nextTick = function (f123) {
                var g123 = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var h123 = 1; h123 < arguments.length; h123++) {
                        g123[h123 - 1] = arguments[h123];
                    }
                }
                o122.push(new j122(f123, g123));
                if (o122.length === 1 && !p122) {
                    f122(i122);
                }
            };
            function j122(d123, e123) {
                this.fun = d123;
                this.array = e123;
            }
            j122.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            l122.title = 'browser';
            l122.browser = true;
            l122.env = {};
            l122.argv = [];
            l122.version = '';
            l122.versions = {};
            function k122() { }
            l122.on = k122;
            l122.addListener = k122;
            l122.once = k122;
            l122.off = k122;
            l122.removeListener = k122;
            l122.removeAllListeners = k122;
            l122.emit = k122;
            l122.prependListener = k122;
            l122.prependOnceListener = k122;
            l122.listeners = function (c123) {
                return [];
            };
            l122.binding = function (b123) {
                throw new Error('process.binding is not supported');
            };
            l122.cwd = function () {
                return '/';
            };
            l122.chdir = function (a123) {
                throw new Error('process.chdir is not supported');
            };
            l122.umask = function () {
                return 0;
            };
        }, {}],
    2: [function (p120, q120, r120) {
            (function (t120, u120) {
                (function () {
                    var x120 = p120('process/browser.js').nextTick;
                    var y120 = Function.prototype.apply;
                    var z120 = Array.prototype.slice;
                    var a121 = {};
                    var b121 = 0;
                    r120.setTimeout = function () {
                        return new w120(y120.call(setTimeout, window, arguments), clearTimeout);
                    };
                    r120.setInterval = function () {
                        return new w120(y120.call(setInterval, window, arguments), clearInterval);
                    };
                    r120.clearTimeout = r120.clearInterval = function (z121) {
                        z121.close();
                    };
                    function w120(x121, y121) {
                        this._id = x121;
                        this._clearFn = y121;
                    }
                    w120.prototype.unref = w120.prototype.ref = function () { };
                    w120.prototype.close = function () {
                        this._clearFn.call(window, this._id);
                    };
                    r120.enroll = function (v121, w121) {
                        clearTimeout(v121._idleTimeoutId);
                        v121._idleTimeout = w121;
                    };
                    r120.unenroll = function (u121) {
                        clearTimeout(u121._idleTimeoutId);
                        u121._idleTimeout = -1;
                    };
                    r120._unrefActive = r120.active = function (r121) {
                        clearTimeout(r121._idleTimeoutId);
                        var s121 = r121._idleTimeout;
                        if (s121 >= 0) {
                            r121._idleTimeoutId = setTimeout(function t121() {
                                if (r121._onTimeout)
                                    r121._onTimeout();
                            }, s121);
                        }
                    };
                    r120.setImmediate = typeof t120 === "function" ? t120 : function (n121) {
                        var o121 = b121++;
                        var p121 = arguments.length < 2 ? false : z120.call(arguments, 1);
                        a121[o121] = true;
                        x120(function q121() {
                            if (a121[o121]) {
                                if (p121) {
                                    n121.apply(null, p121);
                                }
                                else {
                                    n121.call(null);
                                }
                                r120.clearImmediate(o121);
                            }
                        });
                        return o121;
                    };
                    r120.clearImmediate = typeof u120 === "function" ? u120 : function (m121) {
                        delete a121[m121];
                    };
                }).call(this);
            }).call(this, p120("timers").setImmediate, p120("timers").clearImmediate);
        }, {
            "process/browser.js": 1,
            "timers": 2
        }],
    3: [function (m117, n117, o117) {
            (function (q117) {
                (function () {
                    "use strict";
                    (function (t117) {
                        (function (o120) {
                            if (typeof define === 'function' && define.amd) {
                                define(['exports'], o120);
                            }
                            else if (typeof o117 === 'object' && typeof o117.nodeName !== 'string') {
                                o120(o117);
                            }
                            else {
                                o120(t117);
                            }
                        })(w117 => {
                            w117.URL = t117.URL || t117.webkitURL;
                            if (t117.Blob && t117.URL) {
                                try {
                                    new Blob();
                                    return;
                                }
                                catch (n120) { }
                            }
                            const x117 = t117.BlobBuilder || t117.WebKitBlobBuilder || t117.MozBlobBuilder || function () {
                                const k118 = function (m120) {
                                    return Object.prototype.toString.call(m120).match(/^\[object\s(.*)\]$/)[1];
                                };
                                const l118 = function d119() {
                                    this.data = [];
                                };
                                const m118 = function e119(j120, k120, l120) {
                                    this.data = j120;
                                    this.size = j120.length;
                                    this.type = k120;
                                    this.encoding = l120;
                                };
                                const n118 = l118.prototype;
                                const o118 = m118.prototype;
                                const p118 = t117.FileReaderSync;
                                const q118 = function (i120) {
                                    this.code = this[this.name = i120];
                                };
                                const r118 = ('NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR ' + 'NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR').split(' ');
                                let s118 = r118.length;
                                const t118 = t117.URL || t117.webkitURL || w117;
                                const u118 = t118.createObjectURL;
                                const v118 = t118.revokeObjectURL;
                                let w118 = t118;
                                const x118 = t117.btoa;
                                const y118 = t117.atob;
                                const z118 = t117.ArrayBuffer;
                                const a119 = t117.Uint8Array;
                                const b119 = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
                                m118.fake = o118.fake = true;
                                while (s118--) {
                                    q118.prototype[r118[s118]] = s118 + 1;
                                }
                                if (!t118.createObjectURL) {
                                    w118 = w117.URL = function (f120) {
                                        const g120 = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                                        let h120;
                                        g120.href = f120;
                                        if (!('origin' in g120)) {
                                            if (g120.protocol.toLowerCase() === 'data:') {
                                                g120.origin = null;
                                            }
                                            else {
                                                h120 = f120.match(b119);
                                                g120.origin = h120 && h120[1];
                                            }
                                        }
                                        return g120;
                                    };
                                }
                                w118.createObjectURL = function (b120) {
                                    let c120 = b120.type;
                                    let d120;
                                    if (c120 === null) {
                                        c120 = 'application/octet-stream';
                                    }
                                    if (b120 instanceof m118) {
                                        d120 = `data:${c120}`;
                                        if (b120.encoding === 'base64') {
                                            return `${d120};base64,${b120.data}`;
                                        }
                                        else if (b120.encoding === 'URI') {
                                            return `${d120},${decodeURIComponent(b120.data)}`;
                                        }
                                        if (x118) {
                                            return `${d120};base64,${x118(b120.data)}`;
                                        }
                                        else {
                                            return `${d120},${encodeURIComponent(b120.data)}`;
                                        }
                                    }
                                    else if (u118) {
                                        return u118.call(t118, b120);
                                    }
                                };
                                w118.revokeObjectURL = function (a120) {
                                    if (a120.substring(0, 5) !== 'data:' && v118) {
                                        v118.call(t118, a120);
                                    }
                                };
                                n118.append = function (t119) {
                                    const u119 = this.data;
                                    if (a119 && (t119 instanceof z118 || t119 instanceof a119)) {
                                        let w119 = '';
                                        const x119 = new a119(t119);
                                        let y119 = 0;
                                        const z119 = x119.length;
                                        for (; y119 < z119; y119++) {
                                            w119 += String.fromCharCode(x119[y119]);
                                        }
                                        u119.push(w119);
                                    }
                                    else if (k118(t119) === 'Blob' || k118(t119) === 'File') {
                                        if (p118) {
                                            const v119 = new p118();
                                            u119.push(v119.readAsBinaryString(t119));
                                        }
                                        else {
                                            throw new q118('NOT_READABLE_ERR');
                                        }
                                    }
                                    else if (t119 instanceof m118) {
                                        if (t119.encoding === 'base64' && y118) {
                                            u119.push(y118(t119.data));
                                        }
                                        else if (t119.encoding === 'URI') {
                                            u119.push(decodeURIComponent(t119.data));
                                        }
                                        else if (t119.encoding === 'raw') {
                                            u119.push(t119.data);
                                        }
                                    }
                                    else {
                                        if (typeof t119 !== 'string') {
                                            t119 += '';
                                        }
                                        u119.push(unescape(encodeURIComponent(t119)));
                                    }
                                };
                                n118.getBlob = function (s119) {
                                    if (!arguments.length) {
                                        s119 = null;
                                    }
                                    return new m118(this.data.join(''), s119, 'raw');
                                };
                                n118.toString = function () {
                                    return '[object BlobBuilder]';
                                };
                                o118.slice = function (o119, p119, q119) {
                                    const r119 = arguments.length;
                                    if (r119 < 3) {
                                        q119 = null;
                                    }
                                    return new m118(this.data.slice(o119, r119 > 1 ? p119 : this.data.length), q119, this.encoding);
                                };
                                o118.toString = function () {
                                    return '[object Blob]';
                                };
                                o118.close = function () {
                                    this.size = 0;
                                    delete this.data;
                                };
                                return l118;
                            }();
                            w117.Blob = function (d118, e118) {
                                const f118 = e118 ? e118.type || '' : '';
                                const g118 = new x117();
                                if (d118) {
                                    for (let i118 = 0, j118 = d118.length; i118 < j118; i118++) {
                                        if (Uint8Array && d118[i118] instanceof Uint8Array) {
                                            g118.append(d118[i118].buffer);
                                        }
                                        else {
                                            g118.append(d118[i118]);
                                        }
                                    }
                                }
                                const h118 = g118.getBlob(f118);
                                if (!h118.slice && h118.webkitSlice) {
                                    h118.slice = h118.webkitSlice;
                                }
                                return h118;
                            };
                            const y117 = Object.getPrototypeOf || function (c118) {
                                return c118.__proto__;
                            };
                            w117.Blob.prototype = y117(new w117.Blob());
                        });
                    })(typeof self !== 'undefined' && self || typeof window !== 'undefined' && window || typeof q117 !== 'undefined' && q117 || typeof globalThis !== 'undefined' && globalThis || (void 0).content || void 0);
                }).call(this);
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}],
    4: [function (o116, p116, q116) {
            "use strict";
            !function () {
                function s116(l117) {
                    this.message = l117;
                }
                var t116 = "undefined" != typeof q116 ? q116 : "undefined" != typeof self ? self : $.global, u116 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                s116.prototype = new Error(), s116.prototype.name = "InvalidCharacterError", t116.btoa || (t116.btoa = function (e117) {
                    for (var f117, g117, h117 = String(e117), i117 = 0, j117 = u116, k117 = ""; h117.charAt(0 | i117) || (j117 = "=", i117 % 1); k117 += j117.charAt(63 & f117 >> 8 - i117 % 1 * 8)) {
                        if (g117 = h117.charCodeAt(i117 += .75), g117 > 255)
                            throw new s116("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                        f117 = f117 << 8 | g117;
                    }
                    return k117;
                }), t116.atob || (t116.atob = function (x116) {
                    var y116 = String(x116).replace(/[=]+$/, "");
                    if (y116.length % 4 == 1)
                        throw new s116("'atob' failed: The string to be decoded is not correctly encoded.");
                    for (var z116, a117, b117 = 0, c117 = 0, d117 = ""; a117 = y116.charAt(c117++); ~a117 && (z116 = b117 % 4 ? 64 * z116 + a117 : a117, b117++ % 4) ? d117 += String.fromCharCode(255 & z116 >> (-2 * b117 & 6)) : 0)
                        a117 = u116.indexOf(a117);
                    return d117;
                });
            }();
        }, {}],
    5: [function (t113, u113, v113) {
            "use strict";
            globalThis.__EDITOR__ = globalThis.process && 'electron' in globalThis.process.versions;
            t113('./wasm');
            const z113 = t113('../jsbWindow');
            jsb.device = jsb.Device;
            const { btoa: a114, atob: b114 } = t113('./base64/base64.min');
            z113.btoa = a114;
            z113.atob = b114;
            const { Blob: c114, URL: d114 } = t113('./Blob');
            z113.Blob = c114;
            z113.URL = d114;
            z113.DOMParser = t113('./xmldom/dom-parser').DOMParser;
            z113.XMLHttpRequest = jsb.XMLHttpRequest;
            z113.SocketIO = jsb.SocketIO;
            z113.WebSocket = jsb.WebSocket;
            t113('./jsb_prepare');
            t113('./jsb-adapter');
            t113('./jsb_audioengine');
            t113('./jsb_input');
            let e114 = null;
            let f114 = 0;
            const g114 = {};
            let h114 = true;
            z113.requestAnimationFrame = function (m116) {
                const n116 = ++f114;
                g114[n116] = m116;
                return n116;
            };
            z113.cancelAnimationFrame = function (l116) {
                delete g114[l116];
            };
            function w113(i116) {
                if (h114) {
                    h114 = false;
                    if (z113.onload) {
                        const k116 = new Event('load');
                        k116._target = globalThis;
                        z113.onload(k116);
                    }
                }
                x113(i116);
                for (const j116 in g114) {
                    e114 = g114[j116];
                    if (e114) {
                        delete g114[j116];
                        e114(i116);
                    }
                }
            }
            let i114 = 0;
            class j114 {
                constructor(d116, e116, f116, g116, h116) {
                    this.cb = d116;
                    this.id = ++i114;
                    this.start = performance.now();
                    this.delay = e116;
                    this.isRepeat = f116;
                    this.target = g116;
                    this.args = h116;
                }
            }
            const k114 = {};
            function x113(a116) {
                let b116;
                for (const c116 in k114) {
                    b116 = k114[c116];
                    if (b116 && b116.cb) {
                        if (a116 - b116.start >= b116.delay) {
                            if (typeof b116.cb === 'string') {
                                Function(b116.cb)();
                            }
                            else if (typeof b116.cb === 'function') {
                                b116.cb.apply(b116.target, b116.args);
                            }
                            if (b116.isRepeat) {
                                b116.start = a116;
                            }
                            else {
                                delete k114[c116];
                            }
                        }
                    }
                }
            }
            function y113(u115, v115) {
                const w115 = u115[0];
                if (!w115) {
                    console.error('createTimeoutInfo doesn\'t pass a callback ...');
                    return 0;
                }
                const x115 = u115.length > 1 ? u115[1] : 0;
                let y115;
                if (u115.length > 2) {
                    y115 = Array.prototype.slice.call(u115, 2);
                }
                const z115 = new j114(w115, x115, v115, this, y115);
                k114[z115.id] = z115;
                return z115.id;
            }
            if (window.oh && window.scriptEngineType === 'napi') {
                console.log(`Openharmony with napi has alreay implemented setTimeout/setInterval`);
            }
            else {
                z113.setTimeout = function (t115) {
                    return y113(arguments, false);
                };
                z113.clearTimeout = function (s115) {
                    delete k114[s115];
                };
                z113.setInterval = function (r115) {
                    return y113(arguments, true);
                };
                z113.clearInterval = z113.clearTimeout;
            }
            z113.alert = console.error.bind(console);
            if (typeof jsb.FileUtils !== 'undefined') {
                jsb.fileUtils = jsb.FileUtils.getInstance();
                delete jsb.FileUtils;
            }
            z113.XMLHttpRequest.prototype.addEventListener = function (l115, m115, n115) {
                this[`on${l115}`] = m115;
            };
            z113.XMLHttpRequest.prototype.removeEventListener = function (i115, j115, k115) {
                this[`on${i115}`] = null;
            };
            if (z113.SocketIO) {
                z113.io = z113.SocketIO;
                z113.SocketIO.prototype._Emit = z113.SocketIO.prototype.emit;
                z113.SocketIO.prototype.emit = function (g115, h115) {
                    if (typeof h115 === 'object') {
                        h115 = JSON.stringify(h115);
                    }
                    this._Emit(g115, h115);
                };
            }
            z113.gameTick = w113;
            jsb.generateGetSet = function (r114) {
                for (const s114 in r114) {
                    const t114 = r114[s114] && r114[s114].prototype;
                    if (!t114)
                        continue;
                    for (const u114 in t114) {
                        const v114 = u114.search(/^get/);
                        if (v114 == -1)
                            continue;
                        let w114 = u114.replace(/^get/, '');
                        const x114 = w114.split('');
                        const y114 = x114[0].toLowerCase();
                        const z114 = x114[0].toUpperCase();
                        x114.splice(0, 1);
                        const a115 = x114.join('');
                        w114 = y114 + a115;
                        const b115 = `set${z114}${a115}`;
                        if (t114.hasOwnProperty(w114))
                            continue;
                        const c115 = t114[b115];
                        const d115 = typeof c115 === 'function';
                        if (d115) {
                            Object.defineProperty(t114, w114, {
                                get() {
                                    return this[u114]();
                                },
                                set(e115) {
                                    this[b115](e115);
                                },
                                configurable: true
                            });
                        }
                        else {
                            Object.defineProperty(t114, w114, {
                                get() {
                                    return this[u114]();
                                },
                                configurable: true
                            });
                        }
                    }
                }
            };
            for (const q114 in z113) {
                if (globalThis[q114] === undefined) {
                    globalThis[q114] = z113[q114];
                }
            }
            if (window.oh && typeof globalThis.XMLHttpRequest !== 'undefined') {
                globalThis.XMLHttpRequest = z113.XMLHttpRequest;
            }
            if (typeof globalThis.window === 'undefined') {
                globalThis.window = globalThis;
            }
            t113('./promise.min');
        }, {
            "../jsbWindow": 44,
            "./Blob": 3,
            "./base64/base64.min": 4,
            "./jsb-adapter": 30,
            "./jsb_audioengine": 35,
            "./jsb_input": 36,
            "./jsb_prepare": 37,
            "./promise.min": 38,
            "./wasm": 39,
            "./xmldom/dom-parser": 40
        }],
    6: [function (m110, n110, o110) {
            "use strict";
            const p110 = m110('./ImageData');
            class q110 {
                constructor() {
                    this.lineWidth = undefined;
                    this.lineJoin = undefined;
                    this.fillStyle = undefined;
                    this.font = undefined;
                    this.lineCap = undefined;
                    this.textAlign = undefined;
                    this.textBaseline = undefined;
                    this.strokeStyle = undefined;
                    this.globalCompositeOperation = undefined;
                    this.shadowBlur = undefined;
                    this.shadowColor = undefined;
                    this.shadowOffsetX = undefined;
                    this.shadowOffsetY = undefined;
                }
            }
            jsb.CanvasRenderingContext2D.prototype._ctor = function () {
                this.__nativeRefs = {};
            };
            class r110 {
                constructor(r113, s113) {
                    this._nativeObj = new jsb.CanvasRenderingContext2D(r113, s113);
                    this._attris = new q110();
                }
                get width() {
                    return this._nativeObj.width;
                }
                set width(q113) {
                    this._nativeObj.width = q113;
                }
                get height() {
                    return this._nativeObj.height;
                }
                set height(p113) {
                    this._nativeObj.height = p113;
                }
                get lineWidth() {
                    return this._attris.lineWidth;
                }
                set lineWidth(o113) {
                    this._attris.lineWidth = o113;
                }
                get lineJoin() {
                    return this._attris.lineJoin;
                }
                set lineJoin(n113) {
                    this._attris.lineJoin = n113;
                }
                get fillStyle() {
                    return this._attris.fillStyle;
                }
                set fillStyle(m113) {
                    this._attris.fillStyle = m113;
                }
                get font() {
                    return this._attris.font;
                }
                set font(l113) {
                    this._attris.font = l113;
                }
                get lineCap() {
                    return this._attris.lineCap;
                }
                set lineCap(k113) {
                    this._attris.lineCap = k113;
                }
                get textAlign() {
                    return this._attris.textAlign;
                }
                set textAlign(j113) {
                    this._attris.textAlign = j113;
                }
                get textBaseline() {
                    return this._attris.textBaseline;
                }
                set textBaseline(i113) {
                    this._attris.textBaseline = i113;
                }
                get strokeStyle() {
                    return this._attris.strokeStyle;
                }
                set strokeStyle(h113) {
                    this._attris.strokeStyle = h113;
                }
                get globalCompositeOperation() {
                    return this._attris.globalCompositeOperation;
                }
                set globalCompositeOperation(g113) {
                    this._attris.globalCompositeOperation = g113;
                }
                get shadowBlur() {
                    return this._attris.shadowBlur;
                }
                set shadowBlur(f113) {
                    this._attris.shadowBlur = f113;
                }
                get shadowColor() {
                    return this._attris.shadowColor;
                }
                set shadowColor(e113) {
                    this._attris.shadowColor = e113;
                }
                get shadowOffsetX() {
                    return this._attris.shadowOffsetX;
                }
                set shadowOffsetX(d113) {
                    this._attris.shadowOffsetX = d113;
                }
                get shadowOffsetY() {
                    return this._attris.shadowOffsetY;
                }
                set shadowOffsetY(c113) {
                    this._attris.shadowOffsetY = c113;
                }
                restore() {
                    this._nativeObj.restore();
                }
                moveTo(a113, b113) {
                    this._nativeObj.moveTo(a113, b113);
                }
                lineTo(y112, z112) {
                    this._nativeObj.lineTo(y112, z112);
                }
                setTransform(s112, t112, u112, v112, w112, x112) {
                    this._nativeObj.setTransform(s112, t112, u112, v112, w112, x112);
                }
                stroke() {
                    this._canvas._dataInner = null;
                    this._nativeObj.stroke();
                }
                measureText(r112) {
                    return this._nativeObj.measureText(r112, this._attris);
                }
                fill() {
                    this._canvas._dataInner = null;
                    this._nativeObj.fill();
                }
                _fillImageData(m112, n112, o112, p112, q112) {
                    this._canvas._dataInner = null;
                    this._nativeObj._fillImageData(m112, n112, o112, p112, q112);
                }
                scale(k112, l112) {
                    this._nativeObj.scale(k112, l112);
                }
                clearRect(g112, h112, i112, j112) {
                    this._canvas._dataInner = null;
                    this._nativeObj.clearRect(g112, h112, i112, j112);
                }
                transform(a112, b112, c112, d112, e112, f112) {
                    this._nativeObj.transform(a112, b112, c112, d112, e112, f112);
                }
                fillText(w111, x111, y111, z111) {
                    this._canvas._dataInner = null;
                    this._nativeObj.fillText(w111, x111, y111, z111, this._attris);
                }
                strokeText(s111, t111, u111, v111) {
                    this._canvas._dataInner = null;
                    this._nativeObj.strokeText(s111, t111, u111, v111, this._attris);
                }
                save() {
                    this._nativeObj.save();
                }
                fillRect(o111, p111, q111, r111) {
                    this._canvas._dataInner = null;
                    this._nativeObj.fillRect(o111, p111, q111, r111, this._attris);
                }
                fetchData() {
                    if (typeof this._nativeObj.fetchData !== 'undefined') {
                        this._nativeObj.fetchData();
                    }
                }
                rotate(n111) {
                    this._nativeObj.rotate(n111);
                }
                beginPath() {
                    this._nativeObj.beginPath();
                }
                rect(j111, k111, l111, m111) {
                    this._nativeObj.rect(j111, k111, l111, m111);
                }
                translate(h111, i111) {
                    this._nativeObj.translate(h111, i111);
                }
                createLinearGradient(d111, e111, f111, g111) {
                    return this._nativeObj.createLinearGradient(d111, e111, f111, g111);
                }
                closePath() {
                    this._nativeObj.closePath();
                }
                putImageData(w110, x110, y110, z110, a111, b111, c111) {
                    this._canvas._data = w110;
                }
                createImageData(u110, v110) {
                    if (typeof u110 === 'number' && typeof v110 === 'number') {
                        return new p110(u110, v110);
                    }
                    else if (u110 instanceof p110) {
                        return new p110(u110.data, u110.width, u110.height);
                    }
                }
                _setCanvasBufferUpdatedCallback(t110) {
                    this._nativeObj._setCanvasBufferUpdatedCallback(t110);
                }
            }
            n110.exports = r110;
        }, {
            "./ImageData": 22
        }],
    7: [function (e110, f110, g110) {
            "use strict";
            class h110 {
                constructor(i110, j110, k110, l110) {
                    this.x = i110 ? i110 : 0;
                    this.y = j110 ? j110 : 0;
                    this.width = k110 ? k110 : 0;
                    this.height = l110 ? l110 : 0;
                    this.left = this.x;
                    this.top = this.y;
                    this.right = this.x + this.width;
                    this.bottom = this.y + this.height;
                }
            }
            f110.exports = h110;
        }, {}],
    8: [function (y109, z109, a110) {
            "use strict";
            const b110 = y109('./Event');
            class c110 extends b110 {
                constructor(d110) {
                    super('devicemotion');
                    if (d110) {
                        this._acceleration = d110.acceleration ? d110.acceleration : {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                        this._accelerationIncludingGravity = d110.accelerationIncludingGravity ? d110.accelerationIncludingGravity : {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                        this._rotationRate = d110.rotationRate ? d110.rotationRate : {
                            alpha: 0,
                            beta: 0,
                            gamma: 0
                        };
                        this._interval = d110.interval;
                    }
                    else {
                        this._acceleration = {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                        this._accelerationIncludingGravity = {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                        this._rotationRate = {
                            alpha: 0,
                            beta: 0,
                            gamma: 0
                        };
                        this._interval = 0;
                    }
                }
                get acceleration() {
                    return this._acceleration;
                }
                get accelerationIncludingGravity() {
                    return this._accelerationIncludingGravity;
                }
                get rotationRate() {
                    return this._rotationRate;
                }
                get interval() {
                    return this._interval;
                }
            }
            z109.exports = c110;
        }, {
            "./Event": 10
        }],
    9: [function (q109, r109, s109) {
            "use strict";
            const t109 = q109('./Node');
            const u109 = q109('./DOMRect');
            const v109 = q109('../../jsbWindow');
            class w109 extends t109 {
                constructor() {
                    super();
                    this.className = '';
                    this.children = [];
                    this.clientLeft = 0;
                    this.clientTop = 0;
                    this.scrollLeft = 0;
                    this.scrollTop = 0;
                }
                get clientWidth() {
                    return 0;
                }
                get clientHeight() {
                    return 0;
                }
                getBoundingClientRect() {
                    return new u109(0, 0, v109.innerWidth, v109.innerHeight);
                }
                removeAttribute(x109) { }
            }
            r109.exports = w109;
        }, {
            "../../jsbWindow": 44,
            "./DOMRect": 7,
            "./Node": 26
        }],
    10: [function (j109, k109, l109) {
            "use strict";
            class m109 {
                constructor(o109, p109) {
                    this._type = o109;
                    this._target = null;
                    this._eventPhase = 2;
                    this._currentTarget = null;
                    this._canceled = false;
                    this._stopped = false;
                    this._passiveListener = null;
                    this._timeStamp = Date.now();
                }
                get type() {
                    return this._type;
                }
                get target() {
                    return this._target;
                }
                get currentTarget() {
                    return this._currentTarget;
                }
                get isTrusted() {
                    return false;
                }
                get timeStamp() {
                    return this._timeStamp;
                }
                composedPath() {
                    const n109 = this._currentTarget;
                    if (n109 === null) {
                        return [];
                    }
                    return [n109];
                }
                get eventPhase() {
                    return this._eventPhase;
                }
                stopPropagation() { }
                stopImmediatePropagation() {
                    this._stopped = true;
                }
                get bubbles() {
                    return false;
                }
                get cancelable() {
                    return true;
                }
                preventDefault() {
                    if (this._passiveListener !== null) {
                        console.warn("Event#preventDefault() was called from a passive listener:", this._passiveListener);
                        return;
                    }
                    if (!this.cancelable) {
                        return;
                    }
                    this._canceled = true;
                }
                get defaultPrevented() {
                    return this._canceled;
                }
                get composed() {
                    return false;
                }
                get timeStamp() {
                    return this._timeStamp;
                }
            }
            m109.NONE = 0;
            m109.CAPTURING_PHASE = 1;
            m109.AT_TARGET = 2;
            m109.BUBBLING_PHASE = 3;
            k109.exports = m109;
        }, {}],
    11: [function (q107, r107, s107) {
            "use strict";
            var u107 = 0;
            var v107 = {
                touch: {},
                mouse: {},
                keyboard: {},
                devicemotion: {}
            };
            var w107 = {
                touch: 0,
                mouse: 0,
                keyboard: 0,
                devicemotion: 0
            };
            var x107 = {
                touch: null,
                mouse: null,
                keyboard: null,
                devicemotion: null
            };
            var y107 = {
                touch: null,
                mouse: null,
                keyboard: null,
                devicemotion: null
            };
            const z107 = {
                touch: ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
                mouse: ['mousedown', 'mousemove', 'mouseup', 'mousewheel'],
                keyboard: ['keydown', 'keyup', 'keypress'],
                devicemotion: ['devicemotion']
            };
            const a108 = 1;
            const b108 = 2;
            const c108 = 3;
            function t107(i109) {
                return i109 && typeof i109 === "object";
            }
            class d108 {
                constructor() {
                    this._targetID = ++u107;
                    this._listenerCount = {
                        touch: 0,
                        mouse: 0,
                        keyboard: 0,
                        devicemotion: 0
                    };
                    this._listeners = new Map();
                }
                _associateSystemEventListener(f109) {
                    var g109;
                    for (var h109 in z107) {
                        g109 = z107[h109];
                        if (g109.indexOf(f109) > -1) {
                            if (x107[h109] && w107[h109] === 0) {
                                x107[h109]();
                            }
                            if (this._listenerCount[h109] === 0)
                                v107[h109][this._targetID] = this;
                            ++this._listenerCount[h109];
                            ++w107[h109];
                            break;
                        }
                    }
                }
                _dissociateSystemEventListener(c109) {
                    var d109;
                    for (var e109 in z107) {
                        d109 = z107[e109];
                        if (d109.indexOf(c109) > -1) {
                            if (this._listenerCount[e109] <= 0)
                                delete v107[e109][this._targetID];
                            --w107[e109];
                            if (y107[e109] && w107[e109] === 0) {
                                y107[e109]();
                            }
                            break;
                        }
                    }
                }
                addEventListener(s108, t108, u108) {
                    if (!t108) {
                        return false;
                    }
                    if (typeof t108 !== "function" && !t107(t108)) {
                        throw new TypeError("'listener' should be a function or an object.");
                    }
                    const v108 = this._listeners;
                    const w108 = t107(u108);
                    const x108 = w108 ? Boolean(u108.capture) : Boolean(u108);
                    const y108 = x108 ? a108 : b108;
                    const z108 = {
                        listener: t108,
                        listenerType: y108,
                        passive: w108 && Boolean(u108.passive),
                        once: w108 && Boolean(u108.once),
                        next: null
                    };
                    let a109 = v108.get(s108);
                    if (a109 === undefined) {
                        v108.set(s108, z108);
                        this._associateSystemEventListener(s108);
                        return true;
                    }
                    let b109 = null;
                    while (a109) {
                        if (a109.listener === t108 && a109.listenerType === y108) {
                            return false;
                        }
                        b109 = a109;
                        a109 = a109.next;
                    }
                    b109.next = z108;
                    this._associateSystemEventListener(s108);
                    return true;
                }
                removeEventListener(k108, l108, m108) {
                    if (!l108) {
                        return false;
                    }
                    const n108 = this._listeners;
                    const o108 = t107(m108) ? Boolean(m108.capture) : Boolean(m108);
                    const p108 = o108 ? a108 : b108;
                    let q108 = null;
                    let r108 = n108.get(k108);
                    while (r108) {
                        if (r108.listener === l108 && r108.listenerType === p108) {
                            if (q108) {
                                q108.next = r108.next;
                            }
                            else if (r108.next) {
                                n108.set(k108, r108.next);
                            }
                            else {
                                n108.delete(k108);
                            }
                            this._dissociateSystemEventListener(k108);
                            return true;
                        }
                        q108 = r108;
                        r108 = r108.next;
                    }
                    return false;
                }
                dispatchEvent(e108) {
                    if (!e108 || typeof e108.type !== "string") {
                        throw new TypeError("\"event.type\" should be a string.");
                    }
                    const f108 = e108.type;
                    var g108 = this['on' + f108];
                    if (g108 && typeof g108 === 'function') {
                        e108._target = e108._currentTarget = this;
                        g108.call(this, e108);
                        e108._target = e108._currentTarget = null;
                        e108._eventPhase = 0;
                        e108._passiveListener = null;
                        if (e108.defaultPrevented)
                            return false;
                    }
                    const h108 = this._listeners;
                    let i108 = h108.get(f108);
                    if (!i108) {
                        return true;
                    }
                    e108._target = e108._currentTarget = this;
                    let j108 = null;
                    while (i108) {
                        if (i108.once) {
                            if (j108) {
                                j108.next = i108.next;
                            }
                            else if (i108.next) {
                                h108.set(f108, i108.next);
                            }
                            else {
                                h108.delete(f108);
                            }
                        }
                        else {
                            j108 = i108;
                        }
                        e108._passiveListener = i108.passive ? i108.listener : null;
                        if (typeof i108.listener === "function") {
                            i108.listener.call(this, e108);
                        }
                        if (e108._stopped) {
                            break;
                        }
                        i108 = i108.next;
                    }
                    e108._target = e108._currentTarget = null;
                    e108._eventPhase = 0;
                    e108._passiveListener = null;
                    return !e108.defaultPrevented;
                }
            }
            r107.exports = d108;
        }, {}],
    12: [function (h107, i107, j107) {
            "use strict";
            const k107 = h107('./EventTarget');
            const l107 = h107('./Event');
            const m107 = h107('../../jsbWindow');
            class n107 extends k107 {
                construct() {
                    this.result = null;
                }
                abort() { }
                readAsArrayBuffer() { }
                readAsDataURL(o107) {
                    this.result = `data:image/png;base64,${m107.btoa(o107)}`;
                    const p107 = new l107('load');
                    this.dispatchEvent(p107);
                }
                readAsText() { }
            }
            i107.exports = n107;
        }, {
            "../../jsbWindow": 44,
            "./Event": 10,
            "./EventTarget": 11
        }],
    13: [function (x106, y106, z106) {
            "use strict";
            class a107 {
                constructor(b107, c107, d107) {
                    this.family = b107;
                    this.source = c107;
                    this.descriptors = d107;
                    this._status = 'unloaded';
                    this._loaded = new Promise((f107, g107) => {
                        this._resolveCB = f107;
                        this._rejectCB = g107;
                    });
                }
                load() {
                }
                get status() {
                    return this._status;
                }
                get loaded() {
                    return this._loaded;
                }
            }
            y106.exports = a107;
        }, {}],
    14: [function (l106, m106, n106) {
            "use strict";
            const o106 = l106('./EventTarget');
            const p106 = l106('./Event');
            class q106 extends o106 {
                constructor() {
                    super();
                    this._status = 'loading';
                }
                get status() {
                    return this._status;
                }
                set onloading(w106) {
                    this.addEventListener('loading', w106);
                }
                set onloadingdone(v106) {
                    this.addEventListener('loadingdone', v106);
                }
                set onloadingerror(u106) {
                    this.addEventListener('loadingerror', u106);
                }
                add(r106) {
                    this._status = r106._status = 'loading';
                    this.dispatchEvent(new p106('loading'));
                    let s106 = jsb.loadFont(r106.family, r106.source);
                    setTimeout(() => {
                        if (s106) {
                            r106._status = this._status = 'loaded';
                            r106._resolveCB();
                            this.dispatchEvent(new p106('loadingdone'));
                        }
                        else {
                            r106._status = this._status = 'error';
                            r106._rejectCB();
                            this.dispatchEvent(new p106('loadingerror'));
                        }
                    }, 0);
                }
                clear() { }
                delete() { }
                load() { }
                ready() { }
            }
            m106.exports = q106;
        }, {
            "./Event": 10,
            "./EventTarget": 11
        }],
    15: [function (k105, l105, m105) {
            "use strict";
            const n105 = k105('./HTMLElement');
            const o105 = k105('./ImageData');
            const p105 = k105('./DOMRect');
            const q105 = k105('./CanvasRenderingContext2D');
            const r105 = k105('../../jsbWindow');
            const s105 = function (k106) {
                k106 = Math.round(k106);
                return k106 < 0 ? 0 : k106 < 255 ? k106 : 255;
            };
            class t105 {
                constructor() {
                    console.log('==> CanvasGradient constructor');
                }
                addColorStop(i106, j106) {
                    console.log('==> CanvasGradient addColorStop');
                }
            }
            class u105 {
                constructor(h106) {
                    this._width = h106;
                }
                get width() {
                    return this._width;
                }
            }
            class v105 extends n105 {
                constructor(f106, g106) {
                    super('canvas');
                    this.id = 'glcanvas';
                    this.type = 'canvas';
                    this.top = 0;
                    this.left = 0;
                    this._width = f106 ? Math.ceil(f106) : 0;
                    this._height = g106 ? Math.ceil(g106) : 0;
                    this._context2D = null;
                    this._dataInner = null;
                }
                getContext(a106, b106) {
                    const c106 = this;
                    if (a106 === '2d') {
                        if (!this._context2D) {
                            this._context2D = new q105(this._width, this._height);
                            this._context2D._canvas = this;
                            this._context2D._setCanvasBufferUpdatedCallback(e106 => {
                                c106._dataInner = new o105(e106, c106._width, c106._height);
                            });
                        }
                        return this._context2D;
                    }
                    return null;
                }
                get _data() {
                    if (this._context2D === null) {
                        return null;
                    }
                    if (!this._dataInner) {
                        this._context2D.fetchData();
                    }
                    return this._dataInner;
                }
                set _data(z105) {
                    this._dataInner = z105;
                }
                set width(y105) {
                    y105 = Math.ceil(y105);
                    if (this._width !== y105) {
                        this._dataInner = null;
                        this._width = y105;
                        if (this._context2D) {
                            this._context2D.width = y105;
                        }
                    }
                }
                get width() {
                    return this._width;
                }
                set height(x105) {
                    x105 = Math.ceil(x105);
                    if (this._height !== x105) {
                        this._dataInner = null;
                        this._height = x105;
                        if (this._context2D) {
                            this._context2D.height = x105;
                        }
                    }
                }
                get height() {
                    return this._height;
                }
                get clientWidth() {
                    return r105.innerWidth;
                }
                get clientHeight() {
                    return r105.innerHeight;
                }
                get data() {
                    if (this._data) {
                        return this._data.data;
                    }
                    return null;
                }
                getBoundingClientRect() {
                    return new p105(0, 0, r105.innerWidth, r105.innerHeight);
                }
                requestPointerLock() {
                    jsb.setCursorEnabled(false);
                }
            }
            l105.exports = v105;
        }, {
            "../../jsbWindow": 44,
            "./CanvasRenderingContext2D": 6,
            "./DOMRect": 7,
            "./HTMLElement": 16,
            "./ImageData": 22
        }],
    16: [function (z104, a105, b105) {
            "use strict";
            const c105 = z104('./Element');
            const { noop: d105 } = z104('./util');
            const e105 = z104('../../jsbWindow');
            class f105 extends c105 {
                constructor(j105 = '') {
                    super();
                    this.tagName = j105.toUpperCase();
                    this.className = '';
                    this.children = [];
                    this.style = {
                        width: `${e105.innerWidth}px`,
                        height: `${e105.innerHeight}px`
                    };
                    this.innerHTML = '';
                    this.parentElement = e105.__canvas;
                }
                setAttribute(h105, i105) {
                    this[h105] = i105;
                }
                getAttribute(g105) {
                    return this[g105];
                }
                focus() { }
            }
            a105.exports = f105;
        }, {
            "../../jsbWindow": 44,
            "./Element": 9,
            "./util": 33
        }],
    17: [function (a104, b104, c104) {
            "use strict";
            function d104(w104, x104, y104) {
                x104 = e104(x104);
                if (x104 in w104) {
                    Object.defineProperty(w104, x104, {
                        value: y104,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                }
                else {
                    w104[x104] = y104;
                }
                return w104;
            }
            function e104(u104) {
                var v104 = f104(u104, "string");
                return typeof v104 === "symbol" ? v104 : String(v104);
            }
            function f104(q104, r104) {
                if (typeof q104 !== "object" || q104 === null)
                    return q104;
                var s104 = q104[Symbol.toPrimitive];
                if (s104 !== undefined) {
                    var t104 = s104.call(q104, r104 || "default");
                    if (typeof t104 !== "object")
                        return t104;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (r104 === "string" ? String : Number)(q104);
            }
            const g104 = a104('./HTMLElement');
            const h104 = a104('./Event');
            class i104 extends g104 {
                constructor(n104, o104, p104) {
                    if (!p104) {
                        throw new TypeError("Illegal constructor, use 'new Image(w, h); instead!'");
                    }
                    super('img');
                    d104(this, "_mipmapLevelDataSize", []);
                    this.width = n104 ? n104 : 0;
                    this.height = o104 ? o104 : 0;
                    this._data = null;
                    this._src = null;
                    this.complete = false;
                    this.crossOrigin = null;
                }
                destroy() {
                    if (this._data) {
                        jsb.destroyImage(this._data);
                        this._data = null;
                    }
                    this._src = null;
                }
                set src(j104) {
                    this._src = j104;
                    if (j104 === '')
                        return;
                    jsb.loadImage(j104, l104 => {
                        if (!l104) {
                            this._data = null;
                            var m104 = new h104('error');
                            this.dispatchEvent(m104);
                            return;
                        }
                        this.width = this.naturalWidth = l104.width;
                        this.height = this.naturalHeight = l104.height;
                        this._data = l104.data;
                        this.complete = true;
                        this._mipmapLevelDataSize = l104.mipmapLevelDataSize;
                        var m104 = new h104('load');
                        this.dispatchEvent(m104);
                    });
                }
                get src() {
                    return this._src;
                }
                get clientWidth() {
                    return this.width;
                }
                get clientHeight() {
                    return this.height;
                }
                getBoundingClientRect() {
                    return new DOMRect(0, 0, this.width, this.height);
                }
            }
            b104.exports = i104;
        }, {
            "./Event": 10,
            "./HTMLElement": 16
        }],
    18: [function (m103, n103, o103) {
            "use strict";
            const p103 = m103('./HTMLElement');
            const q103 = m103('./MediaError');
            const r103 = 0;
            const s103 = 1;
            const t103 = 2;
            const u103 = 3;
            const v103 = 4;
            class w103 extends p103 {
                constructor(z103) {
                    super(z103);
                    this._volume = 1.0;
                    this._duration = 0;
                    this._isEnded = false;
                    this._isMute = false;
                    this._readyState = r103;
                    this._error = new q103();
                }
                addTextTrack() { }
                captureStream() { }
                fastSeek() { }
                load() { }
                pause() { }
                play() { }
                canPlayType(y103) {
                    return '';
                }
                set volume(x103) {
                    this._volume = x103;
                }
                get volume() {
                    return this._volume;
                }
                get duration() {
                    return this._duration;
                }
                get ended() {
                    return this._isEnded;
                }
                get muted() {
                    return this._isMute;
                }
                get readyState() {
                    return this._readyState;
                }
                get error() {
                    return this._error;
                }
                get currentTime() {
                    return 0;
                }
            }
            n103.exports = w103;
        }, {
            "./HTMLElement": 16,
            "./MediaError": 24
        }],
    19: [function (z102, a103, b103) {
            "use strict";
            const c103 = z102('./HTMLElement');
            const d103 = z102('./Event');
            const e103 = [];
            class f103 extends c103 {
                constructor(k103, l103) {
                    super('script');
                }
                set type(j103) {
                    if (j103 === "systemjs-importmap") {
                        if (e103.indexOf(this) === -1) {
                            e103.push(this);
                        }
                    }
                }
                set src(h103) {
                    setTimeout(() => {
                        z102(h103);
                        this.dispatchEvent(new d103('load'));
                    }, 0);
                }
            }
            f103._getAllScriptElementsSystemJSImportType = function () {
                return e103;
            };
            a103.exports = f103;
        }, {
            "./Event": 10,
            "./HTMLElement": 16
        }],
    20: [function (t102, u102, v102) {
            "use strict";
            const w102 = t102('./HTMLMediaElement');
            class x102 extends w102 {
                constructor() {
                    super('video');
                }
                canPlayType(y102) {
                    if (y102 === 'video/mp4')
                        return true;
                    return false;
                }
            }
            u102.exports = x102;
        }, {
            "./HTMLMediaElement": 18
        }],
    21: [function (m102, n102, o102) {
            "use strict";
            let p102 = m102('./HTMLImageElement');
            class q102 extends p102 {
                constructor(r102, s102) {
                    super(r102, s102, true);
                }
            }
            n102.exports = q102;
        }, {
            "./HTMLImageElement": 17
        }],
    22: [function (f102, g102, h102) {
            "use strict";
            class i102 {
                constructor(j102, k102, l102) {
                    if (typeof j102 === 'number' && typeof k102 == 'number') {
                        l102 = k102;
                        k102 = j102;
                        j102 = null;
                    }
                    if (j102 === null) {
                        this._data = new Uint8ClampedArray(k102 * l102 * 4);
                    }
                    else {
                        this._data = j102;
                    }
                    this._width = k102;
                    this._height = l102;
                }
                get data() {
                    return this._data;
                }
                get width() {
                    return this._width;
                }
                get height() {
                    return this._height;
                }
            }
            g102.exports = i102;
        }, {}],
    23: [function (t101, u101, v101) {
            "use strict";
            const w101 = t101('./Event');
            const x101 = {
                '48': ')',
                '49': '!',
                '50': '@',
                '51': '#',
                '52': '$',
                '53': '%',
                '54': '^',
                '55': '&',
                '56': '*',
                '57': '('
            };
            var y101 = false;
            class z101 extends w101 {
                constructor(a102, b102) {
                    super(a102);
                    if (typeof b102 === 'object') {
                        this._altKeyActive = b102.altKey ? b102.altKey : false;
                        this._ctrlKeyActive = b102.ctrlKey ? b102.ctrlKey : false;
                        this._metaKeyActive = b102.metaKey ? b102.metaKey : false;
                        this._shiftKeyActive = b102.shiftKey ? b102.shiftKey : false;
                        this._keyCode = b102.keyCode ? b102.keyCode : -1;
                        this._repeat = b102.repeat ? b102.repeat : false;
                    }
                    else {
                        this._altKeyActive = false;
                        this._ctrlKeyActive = false;
                        this._metaKeyActive = false;
                        this._shiftKeyActive = false;
                        this._keyCode = -1;
                        this._repeat = false;
                    }
                    var c102 = this._keyCode;
                    if (c102 >= 48 && c102 <= 57) {
                        var d102 = c102 - 48;
                        this._code = 'Digit' + d102;
                        this._key = this._shiftKeyActive ? x101[c102] : '' + d102;
                    }
                    else if (c102 >= 10048 && c102 <= 10057) {
                        c102 = this._keyCode = c102 - 10000;
                        var d102 = c102 - 48;
                        this._code = 'Numpad' + d102;
                        this._key = '' + d102;
                    }
                    else if (c102 >= 65 && c102 <= 90) {
                        var e102 = String.fromCharCode(c102);
                        this._code = 'Key' + e102;
                        this._key = this._shiftKeyActive ^ y101 ? e102 : e102.toLowerCase();
                    }
                    else if (c102 >= 97 && c102 <= 122) {
                        var e102 = String.fromCharCode(c102);
                        this._keyCode = c102 - (97 - 65);
                        this._code = 'Key' + e102;
                        this._key = this._shiftKeyActive ^ y101 ? e102.toUpperCase() : e102;
                    }
                    else if (c102 >= 112 && c102 <= 123) {
                        this._code = this._key = 'F' + (c102 - 111);
                    }
                    else if (c102 === 27) {
                        this._code = this._key = 'Escape';
                    }
                    else if (c102 === 189) {
                        this._code = 'Minus';
                        this._key = this._shiftKeyActive ? '_' : '-';
                    }
                    else if (c102 === 187) {
                        this._code = 'Equal';
                        this._key = this._shiftKeyActive ? '+' : '=';
                    }
                    else if (c102 === 220) {
                        this._code = 'Backslash';
                        this._key = this._shiftKeyActive ? '|' : '\\';
                    }
                    else if (c102 === 192) {
                        this._code = 'Backquote';
                        this._key = this._shiftKeyActive ? '~' : '`';
                    }
                    else if (c102 === 8) {
                        this._code = this._key = 'Backspace';
                    }
                    else if (c102 === 13) {
                        this._code = this._key = 'Enter';
                    }
                    else if (c102 === 219) {
                        this._code = 'BracketLeft';
                        this._key = this._shiftKeyActive ? '{' : '[';
                    }
                    else if (c102 === 221) {
                        this._code = 'BracketRight';
                        this._key = this._shiftKeyActive ? '}' : ']';
                    }
                    else if (c102 === 186) {
                        this._code = 'Semicolon';
                        this._key = this._shiftKeyActive ? ':' : ';';
                    }
                    else if (c102 === 222) {
                        this._code = 'Quote';
                        this._key = this._shiftKeyActive ? '"' : "'";
                    }
                    else if (c102 === 9) {
                        this._code = this._key = 'Tab';
                    }
                    else if (c102 === 17) {
                        this._code = 'ControlLeft';
                        this._key = 'Control';
                    }
                    else if (c102 === 20017) {
                        this._keyCode = 17;
                        this._code = 'ControlRight';
                        this._key = 'Control';
                    }
                    else if (c102 === 16) {
                        this._code = 'ShiftLeft';
                        this._key = 'Shift';
                    }
                    else if (c102 === 20016) {
                        this._keyCode = 16;
                        this._code = 'ShiftRight';
                        this._key = 'Shift';
                    }
                    else if (c102 === 18) {
                        this._code = 'AltLeft';
                        this._key = 'Alt';
                    }
                    else if (c102 === 20018) {
                        this._keyCode = 18;
                        this._code = 'AltRight';
                        this._key = 'Alt';
                    }
                    else if (c102 === 91) {
                        this._code = 'MetaLeft';
                        this._key = 'Meta';
                    }
                    else if (c102 === 93) {
                        this._code = 'MetaRight';
                        this._key = 'Meta';
                    }
                    else if (c102 === 37) {
                        this._code = this._key = 'ArrowLeft';
                    }
                    else if (c102 === 38) {
                        this._code = this._key = 'ArrowUp';
                    }
                    else if (c102 === 39) {
                        this._code = this._key = 'ArrowRight';
                    }
                    else if (c102 === 40) {
                        this._code = this._key = 'ArrowDown';
                    }
                    else if (c102 === 20093) {
                        this._keyCode = 93;
                        this._code = this._key = 'ContextMenu';
                    }
                    else if (c102 === 20013) {
                        this._keyCode = 13;
                        this._code = 'NumpadEnter';
                        this._key = 'Enter';
                    }
                    else if (c102 === 107) {
                        this._code = 'NumpadAdd';
                        this._key = '+';
                    }
                    else if (c102 === 109) {
                        this._code = 'NumpadSubtract';
                        this._key = '-';
                    }
                    else if (c102 === 106) {
                        this._code = 'NumpadMultiply';
                        this._key = '*';
                    }
                    else if (c102 === 111) {
                        this._code = 'NumpadDivide';
                        this._key = '/';
                    }
                    else if (c102 === 12) {
                        this._code = 'NumLock';
                        this._key = 'Clear';
                    }
                    else if (c102 === 124) {
                        this._code = this._key = 'F13';
                    }
                    else if (c102 === 36) {
                        this._code = this._key = 'Home';
                    }
                    else if (c102 === 33) {
                        this._code = this._key = 'PageUp';
                    }
                    else if (c102 === 34) {
                        this._code = this._key = 'PageDown';
                    }
                    else if (c102 === 35) {
                        this._code = this._key = 'End';
                    }
                    else if (c102 === 188) {
                        this._code = 'Comma';
                        this._key = this._shiftKeyActive ? '<' : ',';
                    }
                    else if (c102 === 190) {
                        this._code = 'Period';
                        this._key = this._shiftKeyActive ? '>' : '.';
                    }
                    else if (c102 === 191) {
                        this._code = 'Slash';
                        this._key = this._shiftKeyActive ? '?' : '/';
                    }
                    else if (c102 === 32) {
                        this._code = 'Space';
                        this._key = ' ';
                    }
                    else if (c102 === 46) {
                        this._code = this._key = 'Delete';
                    }
                    else if (c102 === 110) {
                        this._code = 'NumpadDecimal';
                        this._key = '.';
                    }
                    else if (c102 === 20) {
                        this._code = this._key = 'CapsLock';
                        if (a102 === 'keyup') {
                            y101 = !y101;
                        }
                    }
                    else {
                        console.log("Unknown keyCode: " + this._keyCode);
                    }
                }
                getModifierState() {
                    return false;
                }
                get altKey() {
                    return this._altKeyActive;
                }
                get code() {
                    return this._code;
                }
                get ctrlKey() {
                    return this._ctrlKeyActive;
                }
                get isComposing() {
                    return false;
                }
                get key() {
                    return this._key;
                }
                get keyCode() {
                    return this._keyCode;
                }
                get location() {
                    return 0;
                }
                get metaKey() {
                    return this._metaKeyActive;
                }
                get repeat() {
                    return this._repeat;
                }
                get shiftKey() {
                    return this._shiftKeyActive;
                }
            }
            u101.exports = z101;
        }, {
            "./Event": 10
        }],
    24: [function (l101, m101, n101) {
            "use strict";
            const o101 = 1;
            const p101 = 2;
            const q101 = 3;
            const r101 = 4;
            class s101 {
                constructor() { }
                get code() {
                    return o101;
                }
                get message() {
                    return "";
                }
            }
            m101.exports = s101;
        }, {}],
    25: [function (e101, f101, g101) {
            "use strict";
            const h101 = e101('./Event');
            class i101 extends h101 {
                constructor(j101, k101) {
                    super(j101);
                    this._button = k101.button;
                    this._which = k101.which;
                    this._wheelDelta = k101.wheelDelta;
                    this._clientX = k101.clientX;
                    this._clientY = k101.clientY;
                    this._screenX = k101.screenX;
                    this._screenY = k101.screenY;
                    this._pageX = k101.pageX;
                    this._pageY = k101.pageY;
                }
                get button() {
                    return this._button;
                }
                get which() {
                    return this._which;
                }
                get wheelDelta() {
                    return this._wheelDelta;
                }
                get clientX() {
                    return this._clientX;
                }
                get clientY() {
                    return this._clientY;
                }
                get screenX() {
                    return this._screenX;
                }
                get screenY() {
                    return this._screenY;
                }
                get pageX() {
                    return this._pageX;
                }
                get pageY() {
                    return this._pageY;
                }
            }
            f101.exports = i101;
        }, {
            "./Event": 10
        }],
    26: [function (n100, o100, p100) {
            "use strict";
            const q100 = n100('./EventTarget');
            const r100 = n100('../../jsbWindow');
            class s100 extends q100 {
                constructor() {
                    super();
                    this.childNodes = [];
                    this.parentNode = r100.__canvas;
                }
                appendChild(d101) {
                    if (d101 instanceof s100) {
                        this.childNodes.push(d101);
                    }
                    else {
                        throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');
                    }
                }
                insertBefore(b101, c101) {
                    return b101;
                }
                replaceChild(z100, a101) {
                    return a101;
                }
                cloneNode() {
                    const y100 = Object.create(this);
                    Object.assign(y100, this);
                    return y100;
                }
                removeChild(u100) {
                    const v100 = this.childNodes.findIndex(x100 => x100 === u100);
                    if (v100 > -1) {
                        return this.childNodes.splice(v100, 1);
                    }
                    return null;
                }
                contains(t100) {
                    return this.childNodes.indexOf(t100) > -1;
                }
            }
            o100.exports = s100;
        }, {
            "../../jsbWindow": 44,
            "./EventTarget": 11
        }],
    27: [function (g100, h100, i100) {
            "use strict";
            const j100 = g100('./Event');
            class k100 extends j100 {
                constructor(l100, m100) {
                    super(l100);
                    this.touches = [];
                    this.targetTouches = [];
                    this.changedTouches = [];
                }
            }
            h100.exports = k100;
        }, {
            "./Event": 10
        }],
    28: [function (j99, k99, l99) {
            "use strict";
            const m99 = j99('./HTMLElement');
            const n99 = j99('./Image');
            const o99 = j99('./HTMLCanvasElement');
            const p99 = j99('./HTMLVideoElement');
            const q99 = j99('./HTMLScriptElement');
            const r99 = j99('./Node');
            const s99 = j99('./FontFaceSet');
            const t99 = j99('../../jsbWindow');
            class u99 extends r99 {
                constructor() {
                    super();
                    this.readyState = 'complete';
                    this.visibilityState = 'visible';
                    this.documentElement = globalThis;
                    this.hidden = false;
                    this.style = {};
                    this.location = j99('./location');
                    this.head = new m99('head');
                    this.body = new m99('body');
                    this.fonts = new s99();
                    this.scripts = [];
                }
                createElementNS(d100, e100, f100) {
                    return this.createElement(e100);
                }
                createElement(c100) {
                    if (c100 === 'canvas') {
                        return new o99(1, 1);
                    }
                    else if (c100 === 'img') {
                        return new n99();
                    }
                    else if (c100 === 'video') {
                        return new p99();
                    }
                    else if (c100 === 'script') {
                        return new q99();
                    }
                    return new m99(c100);
                }
                getElementById(b100) {
                    if (b100 === t99.__canvas.id || b100 === 'canvas') {
                        return t99.__canvas;
                    }
                    return new m99(b100);
                }
                getElementsByTagName(a100) {
                    if (a100 === 'head') {
                        return [v99.head];
                    }
                    else if (a100 === 'body') {
                        return [v99.body];
                    }
                    else if (a100 === 'canvas') {
                        return [t99.__canvas];
                    }
                    return [new m99(a100)];
                }
                getElementsByName(z99) {
                    if (z99 === 'head') {
                        return [v99.head];
                    }
                    else if (z99 === 'body') {
                        return [v99.body];
                    }
                    else if (z99 === 'canvas') {
                        return [t99.__canvas];
                    }
                    return [new m99(z99)];
                }
                querySelector(y99) {
                    if (y99 === 'head') {
                        return v99.head;
                    }
                    else if (y99 === 'body') {
                        return v99.body;
                    }
                    else if (y99 === 'canvas') {
                        return t99.__canvas;
                    }
                    else if (y99 === `#${t99.__canvas.id}`) {
                        return t99.__canvas;
                    }
                    return new m99(y99);
                }
                querySelectorAll(x99) {
                    if (x99 === 'head') {
                        return [v99.head];
                    }
                    else if (x99 === 'body') {
                        return [v99.body];
                    }
                    else if (x99 === 'canvas') {
                        return [t99.__canvas];
                    }
                    else if (x99.startsWith('script[type="systemjs-importmap"]')) {
                        return q99._getAllScriptElementsSystemJSImportType();
                    }
                    return [new m99(x99)];
                }
                createTextNode() {
                    return new m99('text');
                }
                elementFromPoint() {
                    return t99.canvas;
                }
                createEvent(w99) {
                    if (t99[w99]) {
                        return new t99[w99]();
                    }
                    return null;
                }
                exitPointerLock() {
                    jsb.setCursorEnabled(true);
                }
            }
            let v99 = new u99();
            k99.exports = v99;
        }, {
            "../../jsbWindow": 44,
            "./FontFaceSet": 14,
            "./HTMLCanvasElement": 15,
            "./HTMLElement": 16,
            "./HTMLScriptElement": 19,
            "./HTMLVideoElement": 20,
            "./Image": 21,
            "./Node": 26,
            "./location": 31
        }],
    29: [function (j93, k93, l93) {
            "use strict";
            Object.defineProperty(l93, "__esModule", {
                value: true
            });
            l93.DOMException = void 0;
            l93.Headers = q93;
            l93.Request = z93;
            l93.Response = c94;
            l93.fetch = d94;
            const e94 = globalThis;
            const f94 = {
                searchParams: 'URLSearchParams' in e94,
                iterable: 'Symbol' in e94 && 'iterator' in Symbol,
                blob: false,
                formData: 'FormData' in e94,
                arrayBuffer: 'ArrayBuffer' in e94
            };
            function m93(i99) {
                return i99 && DataView.prototype.isPrototypeOf(i99);
            }
            if (f94.arrayBuffer) {
                const f99 = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
                var g94 = ArrayBuffer.isView || function (h99) {
                    return h99 && f99.indexOf(Object.prototype.toString.call(h99)) > -1;
                };
            }
            function n93(e99) {
                if (typeof e99 !== 'string') {
                    e99 = String(e99);
                }
                if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e99) || e99 === '') {
                    throw new TypeError('Invalid character in header field name');
                }
                return e99.toLowerCase();
            }
            function o93(d99) {
                if (typeof d99 !== 'string') {
                    d99 = String(d99);
                }
                return d99;
            }
            function p93(z98) {
                const a99 = {
                    next() {
                        const c99 = z98.shift();
                        return {
                            done: c99 === undefined,
                            value: c99
                        };
                    }
                };
                if (f94.iterable) {
                    a99[Symbol.iterator] = function () {
                        return a99;
                    };
                }
                return a99;
            }
            function q93(r98) {
                this.map = {};
                if (r98 instanceof q93) {
                    r98.forEach(function (x98, y98) {
                        this.append(y98, x98);
                    }, this);
                }
                else if (Array.isArray(r98)) {
                    r98.forEach(function (v98) {
                        this.append(v98[0], v98[1]);
                    }, this);
                }
                else if (r98) {
                    Object.getOwnPropertyNames(r98).forEach(function (t98) {
                        this.append(t98, r98[t98]);
                    }, this);
                }
            }
            q93.prototype.append = function (o98, p98) {
                o98 = n93(o98);
                p98 = o93(p98);
                const q98 = this.map[o98];
                this.map[o98] = q98 ? `${q98}, ${p98}` : p98;
            };
            q93.prototype.delete = function (n98) {
                delete this.map[n93(n98)];
            };
            q93.prototype.get = function (m98) {
                m98 = n93(m98);
                return this.has(m98) ? this.map[m98] : null;
            };
            q93.prototype.has = function (l98) {
                return this.map.hasOwnProperty(n93(l98));
            };
            q93.prototype.set = function (j98, k98) {
                this.map[n93(j98)] = o93(k98);
            };
            q93.prototype.forEach = function (g98, h98) {
                for (const i98 in this.map) {
                    if (this.map.hasOwnProperty(i98)) {
                        g98.call(h98, this.map[i98], i98, this);
                    }
                }
            };
            q93.prototype.keys = function () {
                const c98 = [];
                this.forEach((e98, f98) => {
                    c98.push(f98);
                });
                return p93(c98);
            };
            q93.prototype.values = function () {
                const z97 = [];
                this.forEach(b98 => {
                    z97.push(b98);
                });
                return p93(z97);
            };
            q93.prototype.entries = function () {
                const v97 = [];
                this.forEach((x97, y97) => {
                    v97.push([y97, x97]);
                });
                return p93(v97);
            };
            if (f94.iterable) {
                q93.prototype[Symbol.iterator] = q93.prototype.entries;
            }
            function r93(u97) {
                if (u97.bodyUsed) {
                    return Promise.reject(new TypeError('Already read'));
                }
                u97.bodyUsed = true;
            }
            function s93(o97) {
                return new Promise((q97, r97) => {
                    o97.onload = function () {
                        q97(o97.result);
                    };
                    o97.onerror = function () {
                        r97(o97.error);
                    };
                });
            }
            function t93(l97) {
                const m97 = new FileReader();
                const n97 = s93(m97);
                m97.readAsArrayBuffer(l97);
                return n97;
            }
            function u93(i97) {
                const j97 = new FileReader();
                const k97 = s93(j97);
                j97.readAsText(i97);
                return k97;
            }
            function v93(e97) {
                const f97 = new Uint8Array(e97);
                const g97 = new Array(f97.length);
                for (let h97 = 0; h97 < f97.length; h97++) {
                    g97[h97] = String.fromCharCode(f97[h97]);
                }
                return g97.join('');
            }
            function w93(c97) {
                if (c97.slice) {
                    return c97.slice(0);
                }
                else {
                    const d97 = new Uint8Array(c97.byteLength);
                    d97.set(new Uint8Array(c97));
                    return d97.buffer;
                }
            }
            function x93() {
                this.bodyUsed = false;
                this._initBody = function (b97) {
                    this._bodyInit = b97;
                    if (!b97) {
                        this._bodyText = '';
                    }
                    else if (typeof b97 === 'string') {
                        this._bodyText = b97;
                    }
                    else if (f94.blob && Blob.prototype.isPrototypeOf(b97)) {
                        this._bodyBlob = b97;
                    }
                    else if (f94.formData && FormData.prototype.isPrototypeOf(b97)) {
                        this._bodyFormData = b97;
                    }
                    else if (f94.searchParams && URLSearchParams.prototype.isPrototypeOf(b97)) {
                        this._bodyText = b97.toString();
                    }
                    else if (f94.arrayBuffer && f94.blob && m93(b97)) {
                        this._bodyArrayBuffer = w93(b97.buffer);
                        this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    }
                    else if (f94.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(b97) || g94(b97))) {
                        this._bodyArrayBuffer = w93(b97);
                    }
                    else {
                        this._bodyText = b97 = Object.prototype.toString.call(b97);
                    }
                    if (!this.headers.get('content-type')) {
                        if (typeof b97 === 'string') {
                            this.headers.set('content-type', 'text/plain;charset=UTF-8');
                        }
                        else if (this._bodyBlob && this._bodyBlob.type) {
                            this.headers.set('content-type', this._bodyBlob.type);
                        }
                        else if (f94.searchParams && URLSearchParams.prototype.isPrototypeOf(b97)) {
                            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                        }
                    }
                };
                if (f94.blob) {
                    this.blob = function () {
                        const a97 = r93(this);
                        if (a97) {
                            return a97;
                        }
                        if (this._bodyBlob) {
                            return Promise.resolve(this._bodyBlob);
                        }
                        else if (this._bodyArrayBuffer) {
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        }
                        else if (this._bodyFormData) {
                            throw new Error('could not read FormData body as blob');
                        }
                        else {
                            return Promise.resolve(new Blob([this._bodyText]));
                        }
                    };
                    this.arrayBuffer = function () {
                        if (this._bodyArrayBuffer) {
                            return r93(this) || Promise.resolve(this._bodyArrayBuffer);
                        }
                        else {
                            return this.blob().then(t93);
                        }
                    };
                }
                this.text = function () {
                    const x96 = r93(this);
                    if (x96) {
                        return x96;
                    }
                    if (this._bodyBlob) {
                        return u93(this._bodyBlob);
                    }
                    else if (this._bodyArrayBuffer) {
                        return Promise.resolve(v93(this._bodyArrayBuffer));
                    }
                    else if (this._bodyFormData) {
                        throw new Error('could not read FormData body as text');
                    }
                    else {
                        return Promise.resolve(this._bodyText);
                    }
                };
                if (f94.formData) {
                    this.formData = function () {
                        return this.text().then(a94);
                    };
                }
                this.json = function () {
                    return this.text().then(JSON.parse);
                };
                return this;
            }
            const h94 = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'PATCH'];
            function y93(r96) {
                const s96 = r96.toUpperCase();
                return h94.indexOf(s96) > -1 ? s96 : r96;
            }
            function z93(o96, p96) {
                p96 = p96 || {};
                let q96 = p96.body;
                if (o96 instanceof z93) {
                    if (o96.bodyUsed) {
                        throw new TypeError('Already read');
                    }
                    this.url = o96.url;
                    this.credentials = o96.credentials;
                    if (!p96.headers) {
                        this.headers = new q93(o96.headers);
                    }
                    this.method = o96.method;
                    this.mode = o96.mode;
                    this.signal = o96.signal;
                    if (!q96 && o96._bodyInit != null) {
                        q96 = o96._bodyInit;
                        o96.bodyUsed = true;
                    }
                }
                else {
                    this.url = String(o96);
                }
                this.credentials = p96.credentials || this.credentials || 'same-origin';
                if (p96.headers || !this.headers) {
                    this.headers = new q93(p96.headers);
                }
                this.method = y93(p96.method || this.method || 'GET');
                this.mode = p96.mode || this.mode || null;
                this.signal = p96.signal || this.signal;
                this.referrer = null;
                if ((this.method === 'GET' || this.method === 'HEAD') && q96) {
                    throw new TypeError('Body not allowed for GET or HEAD requests');
                }
                this._initBody(q96);
            }
            z93.prototype.clone = function () {
                return new z93(this, {
                    body: this._bodyInit
                });
            };
            function a94(h96) {
                const i96 = new FormData();
                h96.trim().split('&').forEach(k96 => {
                    if (k96) {
                        const l96 = k96.split('=');
                        const m96 = l96.shift().replace(/\+/g, ' ');
                        const n96 = l96.join('=').replace(/\+/g, ' ');
                        i96.append(decodeURIComponent(m96), decodeURIComponent(n96));
                    }
                });
                return i96;
            }
            function b94(z95) {
                const a96 = new q93();
                const b96 = z95.replace(/\r?\n[\t ]+/g, ' ');
                b96.split(/\r?\n/).forEach(d96 => {
                    const e96 = d96.split(':');
                    const f96 = e96.shift().trim();
                    if (f96) {
                        const g96 = e96.join(':').trim();
                        a96.append(f96, g96);
                    }
                });
                return a96;
            }
            x93.call(z93.prototype);
            function c94(x95, y95) {
                if (!y95) {
                    y95 = {};
                }
                this.type = 'default';
                this.status = y95.status === undefined ? 200 : y95.status;
                this.ok = this.status >= 200 && this.status < 300;
                this.statusText = 'statusText' in y95 ? y95.statusText : 'OK';
                this.headers = new q93(y95.headers);
                this.url = y95.url || '';
                this._initBody(x95);
            }
            x93.call(c94.prototype);
            c94.prototype.clone = function () {
                return new c94(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new q93(this.headers),
                    url: this.url
                });
            };
            c94.error = function () {
                const w95 = new c94(null, {
                    status: 0,
                    statusText: ''
                });
                w95.type = 'error';
                return w95;
            };
            const i94 = [301, 302, 303, 307, 308];
            c94.redirect = function (u95, v95) {
                if (i94.indexOf(v95) === -1) {
                    throw new RangeError('Invalid status code');
                }
                return new c94(null, {
                    status: v95,
                    headers: {
                        location: u95
                    }
                });
            };
            var j94 = e94.DOMException;
            l93.DOMException = j94;
            try {
                new j94();
            }
            catch (p95) {
                l93.DOMException = j94 = function (r95, s95) {
                    this.message = r95;
                    this.name = s95;
                    const t95 = Error(r95);
                    this.stack = t95.stack;
                };
                j94.prototype = Object.create(Error.prototype);
                j94.prototype.constructor = j94;
            }
            function d94(x94, y94) {
                return new Promise((a95, b95) => {
                    const d95 = new z93(x94, y94);
                    if (d95.signal && d95.signal.aborted) {
                        return b95(new j94('Aborted', 'AbortError'));
                    }
                    const e95 = new XMLHttpRequest();
                    function c95() {
                        e95.abort();
                    }
                    e95.onload = function () {
                        const n95 = {
                            status: e95.status,
                            statusText: e95.statusText,
                            headers: b94(e95.getAllResponseHeaders() || '')
                        };
                        n95.url = 'responseURL' in e95 ? e95.responseURL : n95.headers.get('X-Request-URL');
                        const o95 = 'response' in e95 ? e95.response : e95.responseText;
                        a95(new c94(o95, n95));
                    };
                    e95.onerror = function () {
                        b95(new TypeError('Network request failed'));
                    };
                    e95.ontimeout = function () {
                        b95(new TypeError('Network request failed'));
                    };
                    e95.onabort = function () {
                        b95(new j94('Aborted', 'AbortError'));
                    };
                    e95.open(d95.method, d95.url, true);
                    if (d95.credentials === 'include') {
                        e95.withCredentials = true;
                    }
                    else if (d95.credentials === 'omit') {
                        e95.withCredentials = false;
                    }
                    if ('responseType' in e95 && f94.blob) {
                        e95.responseType = 'blob';
                    }
                    d95.headers.forEach((l95, m95) => {
                        e95.setRequestHeader(m95, l95);
                    });
                    if (d95.signal) {
                        d95.signal.addEventListener('abort', c95);
                        e95.onreadystatechange = function () {
                            if (e95.readyState === 4) {
                                d95.signal.removeEventListener('abort', c95);
                            }
                        };
                    }
                    e95.send(typeof d95._bodyInit === 'undefined' ? null : d95._bodyInit);
                });
            }
            d94.polyfill = true;
        }, {}],
    30: [function (g93, h93, i93) {
            "use strict";
            g93('./window');
        }, {
            "./window": 34
        }],
    31: [function (c93, d93, e93) {
            "use strict";
            const f93 = {
                href: 'game.js',
                pathname: 'game.js',
                search: '',
                hash: '',
                protocol: '',
                reload() { }
            };
            d93.exports = f93;
        }, {}],
    32: [function (x92, y92, z92) {
            "use strict";
            let { noop: a93 } = x92('./util');
            const b93 = {
                platform: __getOS(),
                language: __getCurrentLanguage(),
                appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
                userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 NetType/WIFI Language/zh_CN',
                onLine: true,
                geolocation: {
                    getCurrentPosition: a93,
                    watchPosition: a93,
                    clearWatch: a93
                },
                maxTouchPoints: 10
            };
            y92.exports = b93;
        }, {
            "./util": 33
        }],
    33: [function (t92, u92, v92) {
            "use strict";
            function w92() { }
            u92.exports = w92;
        }, {}],
    34: [function (t91, u91, v91) {
            "use strict";
            const x91 = t91('../../jsbWindow');
            function w91() {
                x91.ontouchstart = null;
                x91.ontouchmove = null;
                x91.ontouchend = null;
                x91.ontouchcancel = null;
                x91.pageXOffset = x91.pageYOffset = x91.clientTop = x91.clientLeft = 0;
                x91.outerWidth = x91.innerWidth;
                x91.outerHeight = x91.innerHeight;
                x91.clientWidth = x91.innerWidth;
                x91.clientHeight = x91.innerHeight;
                x91.top = x91.parent = x91;
                x91.location = t91('./location');
                x91.document = t91('./document');
                x91.navigator = t91('./navigator');
                x91.CanvasRenderingContext2D = t91('./CanvasRenderingContext2D');
                x91.Element = t91('./Element');
                x91.HTMLElement = t91('./HTMLElement');
                x91.HTMLCanvasElement = t91('./HTMLCanvasElement');
                x91.HTMLImageElement = t91('./HTMLImageElement');
                x91.HTMLMediaElement = t91('./HTMLMediaElement');
                x91.HTMLVideoElement = t91('./HTMLVideoElement');
                x91.HTMLScriptElement = t91('./HTMLScriptElement');
                x91.__canvas = new x91.HTMLCanvasElement();
                x91.__canvas._width = x91.innerWidth;
                x91.__canvas._height = x91.innerHeight;
                x91.Image = t91('./Image');
                x91.FileReader = t91('./FileReader');
                x91.FontFace = t91('./FontFace');
                x91.FontFaceSet = t91('./FontFaceSet');
                x91.EventTarget = t91('./EventTarget');
                x91.Event = x91.Event || t91('./Event');
                x91.TouchEvent = t91('./TouchEvent');
                x91.MouseEvent = t91('./MouseEvent');
                x91.KeyboardEvent = t91('./KeyboardEvent');
                x91.DeviceMotionEvent = t91('./DeviceMotionEvent');
                const y91 = t91('./fetch');
                x91.fetch = y91.fetch;
                x91.Headers = y91.Headers;
                x91.Request = y91.Request;
                x91.Response = y91.Response;
                x91.orientation = jsb.device.getDeviceOrientation();
                if (!__EDITOR__) {
                    Object.defineProperty(x91, 'devicePixelRatio', {
                        get() {
                            return jsb.device.getDevicePixelRatio ? jsb.device.getDevicePixelRatio() : 1;
                        },
                        set(s92) { },
                        enumerable: true,
                        configurable: true
                    });
                }
                x91.screen = {
                    availTop: 0,
                    availLeft: 0,
                    availHeight: x91.innerWidth,
                    availWidth: x91.innerHeight,
                    colorDepth: 8,
                    pixelDepth: 8,
                    left: 0,
                    top: 0,
                    width: x91.innerWidth,
                    height: x91.innerHeight,
                    orientation: {
                        type: 'portrait-primary'
                    },
                    onorientationchange(r92) { }
                };
                x91.addEventListener = function (o92, p92, q92) {
                    x91.__canvas.addEventListener(o92, p92, q92);
                };
                x91.removeEventListener = function (l92, m92, n92) {
                    x91.__canvas.removeEventListener(l92, m92, n92);
                };
                x91.dispatchEvent = function (k92) {
                    x91.__canvas.dispatchEvent(k92);
                };
                x91.getComputedStyle = function (j92) {
                    return {
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        height: '0px'
                    };
                };
                x91.resize = function (g92, h92) {
                    x91.innerWidth = g92;
                    x91.innerHeight = h92;
                    x91.outerWidth = x91.innerWidth;
                    x91.outerHeight = x91.innerHeight;
                    x91.__canvas._width = x91.innerWidth;
                    x91.__canvas._height = x91.innerHeight;
                    x91.screen.availWidth = x91.innerWidth;
                    x91.screen.availHeight = x91.innerHeight;
                    x91.screen.width = x91.innerWidth;
                    x91.screen.height = x91.innerHeight;
                    x91.clientWidth = x91.innerWidth;
                    x91.clientHeight = x91.innerHeight;
                    const i92 = new x91.Event('resize');
                    i92._target = x91;
                    x91.dispatchEvent(i92);
                };
                x91.focus = function () { };
                x91.scroll = function () { };
                x91._isInjected = true;
            }
            if (!x91._isInjected) {
                w91();
            }
            if (!__EDITOR__) {
                x91.localStorage = sys.localStorage;
            }
        }, {
            "../../jsbWindow": 44,
            "./CanvasRenderingContext2D": 6,
            "./DeviceMotionEvent": 8,
            "./Element": 9,
            "./Event": 10,
            "./EventTarget": 11,
            "./FileReader": 12,
            "./FontFace": 13,
            "./FontFaceSet": 14,
            "./HTMLCanvasElement": 15,
            "./HTMLElement": 16,
            "./HTMLImageElement": 17,
            "./HTMLMediaElement": 18,
            "./HTMLScriptElement": 19,
            "./HTMLVideoElement": 20,
            "./Image": 21,
            "./KeyboardEvent": 23,
            "./MouseEvent": 25,
            "./TouchEvent": 27,
            "./document": 28,
            "./fetch": 29,
            "./location": 31,
            "./navigator": 32
        }],
    35: [function (n91, o91, p91) {
            "use strict";
            (function (r91) {
                if (!r91 || !r91.AudioEngine)
                    return;
                r91.AudioEngine.AudioState = {
                    ERROR: -1,
                    INITIALZING: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    STOPPED: 3
                };
                r91.AudioEngine.INVALID_AUDIO_ID = -1;
                r91.AudioEngine.TIME_UNKNOWN = -1;
                r91.AudioEngine.play = r91.AudioEngine.play2d;
                r91.AudioEngine.setErrorCallback = () => { };
            })(jsb);
        }, {}],
    36: [function (v89, w89, x89) {
            "use strict";
            const y89 = v89('./jsb-adapter/EventTarget');
            const z89 = v89('./jsb-adapter/Event');
            const a90 = new y89();
            const b90 = {};
            const c90 = {};
            let d90 = 1;
            const e90 = function (j91) {
                if (!j91) {
                    return null;
                }
                const k91 = function (m91) {
                    j91({
                        value: m91.text
                    });
                };
                j91.___index = d90++;
                b90[j91.___index] = k91;
                return k91;
            };
            const f90 = function (h91) {
                if (h91 && h91.___index) {
                    const i91 = b90[h91.___index];
                    delete b90[h91.___index];
                    return i91;
                }
                else {
                    return null;
                }
            };
            const g90 = function (c91, d91) {
                if (d91) {
                    a90.removeEventListener(c91, f90(d91));
                }
                else {
                    const e91 = c90[c91];
                    if (!e91) {
                        return;
                    }
                    for (let f91 = 0, g91 = e91.length; f91 < g91; ++f91) {
                        a90.removeEventListener(c91, e91[f91]);
                    }
                    delete c90[c91];
                }
            };
            const h90 = function (a91, b91) {
                if (!b91 || !a91 || a91 === '') {
                    return;
                }
                if (!c90[a91]) {
                    c90[a91] = [];
                }
                c90[a91].push(b91);
            };
            jsb.inputBox = {
                onConfirm(y90) {
                    const z90 = e90(y90);
                    a90.addEventListener('confirm', z90);
                    h90('confirm', z90);
                },
                offConfirm(x90) {
                    g90('confirm', x90);
                },
                onComplete(v90) {
                    const w90 = e90(v90);
                    a90.addEventListener('complete', w90);
                    h90('complete', w90);
                },
                offComplete(u90) {
                    g90('complete', u90);
                },
                onInput(s90) {
                    const t90 = e90(s90);
                    a90.addEventListener('input', t90);
                    h90('input', t90);
                },
                offInput(r90) {
                    g90('input', r90);
                },
                show(q90) {
                    jsb.showInputBox(q90);
                },
                hide() {
                    jsb.hideInputBox();
                }
            };
            jsb.onTextInput = function (n90, o90) {
                const p90 = new z89(n90);
                p90.text = o90;
                a90.dispatchEvent(p90);
            };
        }, {
            "./jsb-adapter/Event": 10,
            "./jsb-adapter/EventTarget": 11
        }],
    37: [function (z88, a89, b89) {
            "use strict";
            jsb.__obj_ref_id = 0;
            jsb.registerNativeRef = function (r89, s89) {
                if (r89 && s89 && r89 !== s89) {
                    let t89 = s89.__jsb_ref_id;
                    if (t89 === undefined)
                        t89 = s89.__jsb_ref_id = jsb.__obj_ref_id++;
                    let u89 = r89.__nativeRefs;
                    if (!u89) {
                        u89 = r89.__nativeRefs = {};
                    }
                    u89[t89] = s89;
                }
            };
            jsb.unregisterNativeRef = function (n89, o89) {
                if (n89 && o89 && n89 !== o89) {
                    let p89 = o89.__jsb_ref_id;
                    if (p89 === undefined)
                        return;
                    let q89 = n89.__nativeRefs;
                    if (!q89) {
                        return;
                    }
                    delete q89[p89];
                }
            };
            jsb.unregisterAllNativeRefs = function (m89) {
                if (!m89)
                    return;
                delete m89.__nativeRefs;
            };
            jsb.unregisterChildRefsForNode = function (g89, h89) {
                h89 = !!h89;
                let i89 = g89.getChildren(), j89, k89, l89;
                for (j89 = 0, k89 = i89.length; j89 < k89; ++j89) {
                    l89 = i89[j89];
                    jsb.unregisterNativeRef(g89, l89);
                    if (h89) {
                        jsb.unregisterChildRefsForNode(l89, h89);
                    }
                }
            };
        }, {}],
    38: [function (x84, y84, z84) {
            (function (b85, c85) {
                (function () {
                    "use strict";
                    !function (x88, y88) {
                        typeof z84 === 'object' && typeof y84 !== 'undefined' ? y88() : typeof define === 'function' && define.amd ? define(y88) : y88();
                    }(0, () => {
                        function g85(p88) {
                            const q88 = this.constructor;
                            return this.then(v88 => q88.resolve(p88()).then(() => v88), t88 => q88.resolve(p88()).then(() => q88.reject(t88)));
                        }
                        function h85() { }
                        function i85(o88) {
                            if (!(this instanceof i85))
                                throw new TypeError('Promises must be constructed via new');
                            if (typeof o88 !== 'function')
                                throw new TypeError('not a function');
                            this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], n85(o88, this);
                        }
                        function j85(i88, j88) {
                            for (; i88._state === 3;)
                                i88 = i88._value;
                            i88._state !== 0 ? (i88._handled = !0, i85._immediateFn(() => {
                                const l88 = i88._state === 1 ? j88.onFulfilled : j88.onRejected;
                                if (l88 !== null) {
                                    let m88;
                                    try {
                                        m88 = l88(i88._value);
                                    }
                                    catch (n88) {
                                        return void l85(j88.promise, n88);
                                    }
                                    k85(j88.promise, m88);
                                }
                                else
                                    (i88._state === 1 ? k85 : l85)(j88.promise, i88._value);
                            })) : i88._deferreds.push(j88);
                        }
                        function k85(a88, b88) {
                            try {
                                if (b88 === a88)
                                    throw new TypeError('A promise cannot be resolved with itself.');
                                if (b88 && (typeof b88 === 'object' || typeof b88 === 'function')) {
                                    const d88 = b88.then;
                                    if (b88 instanceof i85)
                                        return a88._state = 3, a88._value = b88, void m85(a88);
                                    if (typeof d88 === 'function')
                                        return void n85(function (f88, g88) {
                                            return function () {
                                                f88.apply(g88, arguments);
                                            };
                                        }(d88, b88), a88);
                                }
                                a88._state = 1, a88._value = b88, m85(a88);
                            }
                            catch (c88) {
                                l85(a88, c88);
                            }
                        }
                        function l85(y87, z87) {
                            y87._state = 2, y87._value = z87, m85(y87);
                        }
                        function m85(u87) {
                            u87._state === 2 && u87._deferreds.length === 0 && i85._immediateFn(() => {
                                u87._handled || i85._unhandledRejectionFn(u87._value);
                            });
                            for (let w87 = 0, x87 = u87._deferreds.length; x87 > w87; w87++)
                                j85(u87, u87._deferreds[w87]);
                            u87._deferreds = null;
                        }
                        function n85(m87, n87) {
                            let o87 = !1;
                            try {
                                m87(t87 => {
                                    o87 || (o87 = !0, k85(n87, t87));
                                }, s87 => {
                                    o87 || (o87 = !0, l85(n87, s87));
                                });
                            }
                            catch (p87) {
                                if (o87)
                                    return;
                                o87 = !0, l85(n87, p87);
                            }
                        }
                        const o85 = setTimeout;
                        i85.prototype.catch = function (l87) {
                            return this.then(null, l87);
                        }, i85.prototype.then = function (e87, f87) {
                            const g87 = new this.constructor(h85);
                            return j85(this, new function (i87, j87, k87) {
                                this.onFulfilled = typeof i87 === 'function' ? i87 : null, this.onRejected = typeof j87 === 'function' ? j87 : null, this.promise = k87;
                            }(e87, f87, g87)), g87;
                        }, i85.prototype.finally = g85, i85.all = function (q86) {
                            return new i85((s86, t86) => {
                                function u86(y86, z86) {
                                    try {
                                        if (z86 && (typeof z86 === 'object' || typeof z86 === 'function')) {
                                            const b87 = z86.then;
                                            if (typeof b87 === 'function')
                                                return void b87.call(z86, d87 => {
                                                    u86(y86, d87);
                                                }, t86);
                                        }
                                        v86[y86] = z86, --w86 == 0 && s86(v86);
                                    }
                                    catch (a87) {
                                        t86(a87);
                                    }
                                }
                                if (!q86 || typeof q86.length === 'undefined')
                                    throw new TypeError('Promise.all accepts an array');
                                var v86 = Array.prototype.slice.call(q86);
                                if (v86.length === 0)
                                    return s86([]);
                                for (var w86 = v86.length, x86 = 0; v86.length > x86; x86++)
                                    u86(x86, v86[x86]);
                            });
                        }, i85.resolve = function (n86) {
                            return n86 && typeof n86 === 'object' && n86.constructor === i85 ? n86 : new i85(p86 => {
                                p86(n86);
                            });
                        }, i85.reject = function (j86) {
                            return new i85((l86, m86) => {
                                m86(j86);
                            });
                        }, i85.race = function (d86) {
                            return new i85((f86, g86) => {
                                for (let h86 = 0, i86 = d86.length; i86 > h86; h86++)
                                    d86[h86].then(f86, g86);
                            });
                        }, i85._immediateFn = typeof c85 === 'function' && function (c86) {
                            c85(c86);
                        } || function (b86) {
                            o85(b86, 0);
                        }, i85._unhandledRejectionFn = function (a86) {
                            void 0 !== console && console && console.warn('Possible Unhandled Promise Rejection:', a86);
                        };
                        const p85 = function () {
                            if (typeof self !== 'undefined')
                                return self;
                            if (typeof window !== 'undefined')
                                return window;
                            if (typeof b85 !== 'undefined')
                                return b85;
                            throw Error('unable to locate global object');
                        }();
                        'Promise' in p85 ? p85.Promise.prototype.finally || (p85.Promise.prototype.finally = g85) : p85.Promise = i85;
                    });
                }).call(this);
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, x84("timers").setImmediate);
        }, {
            "timers": 2
        }],
    39: [function (b84, c84, d84) {
            "use strict";
            (function e84() {
                if (!globalThis.WebAssembly) {
                    console.warn('WebAssembly is not supported!');
                    return;
                }
                console.info('injectWebAssembly ...');
                const f84 = WebAssembly.instantiate;
                const g84 = WebAssembly.compile;
                WebAssembly.compile = function (t84) {
                    return new Promise((v84, w84) => {
                        if (!t84) {
                            w84('WebAssembly.compile: Invalid buffer source!');
                        }
                        else if (CC_EDITOR) {
                            v84(g84.call(WebAssembly, t84));
                        }
                        else {
                            v84(new WebAssembly.Module(t84));
                        }
                    });
                };
                WebAssembly.instantiate = function (j84, k84) {
                    let l84;
                    if (j84 instanceof WebAssembly.Module) {
                        l84 = f84(j84, k84);
                    }
                    else {
                        l84 = new Promise((n84, o84) => {
                            WebAssembly.compile(j84).then(q84 => {
                                f84(q84, k84).then(s84 => {
                                    n84({
                                        instance: s84,
                                        module: q84
                                    });
                                }).catch(o84);
                            }).catch(o84);
                        });
                    }
                    return l84;
                };
            })();
        }, {}],
    40: [function (o80, p80, q80) {
            "use strict";
            function r80(a84) {
                this.options = a84 || {
                    locator: {}
                };
            }
            r80.prototype.parseFromString = function (q83, r83) {
                var s83 = this.options;
                var t83 = new z80();
                var u83 = s83.domBuilder || new t80();
                var v83 = s83.errorHandler;
                var w83 = s83.locator;
                var x83 = s83.xmlns || {};
                var y83 = /\/x?html?$/.test(r83);
                var z83 = y83 ? y80.entityMap : {
                    'lt': '<',
                    'gt': '>',
                    'amp': '&',
                    'quot': '"',
                    'apos': "'"
                };
                if (w83) {
                    u83.setDocumentLocator(w83);
                }
                t83.errorHandler = s80(v83, u83, w83);
                t83.domBuilder = s83.domBuilder || u83;
                if (y83) {
                    x83[''] = 'http://www.w3.org/1999/xhtml';
                }
                x83.xml = x83.xml || 'http://www.w3.org/XML/1998/namespace';
                if (q83) {
                    t83.parse(q83, x83, z83);
                }
                else {
                    t83.errorHandler.error("invalid doc source");
                }
                return u83.doc;
            };
            function s80(d83, e83, f83) {
                if (!d83) {
                    if (e83 instanceof t80) {
                        return e83;
                    }
                    d83 = e83;
                }
                var h83 = {};
                var i83 = d83 instanceof Function;
                f83 = f83 || {};
                function g83(j83) {
                    var k83 = d83[j83];
                    if (!k83 && i83) {
                        k83 = d83.length == 2 ? function (p83) {
                            d83(j83, p83);
                        } : d83;
                    }
                    h83[j83] = k83 && function (n83) {
                        k83('[xmldom ' + j83 + ']\t' + n83 + v80(f83));
                    } || function () { };
                }
                g83('warning');
                g83('error');
                g83('fatalError');
                return h83;
            }
            function t80() {
                this.cdata = false;
            }
            function u80(b83, c83) {
                c83.lineNumber = b83.lineNumber;
                c83.columnNumber = b83.columnNumber;
            }
            t80.prototype = {
                startDocument: function () {
                    this.doc = new a81().createDocument(null, null, null);
                    if (this.locator) {
                        this.doc.documentURI = this.locator.systemId;
                    }
                },
                startElement: function (r82, s82, t82, u82) {
                    var v82 = this.doc;
                    var w82 = v82.createElementNS(r82, t82 || s82);
                    var x82 = u82.length;
                    x80(this, w82);
                    this.currentElement = w82;
                    this.locator && u80(this.locator, w82);
                    for (var y82 = 0; y82 < x82; y82++) {
                        var r82 = u82.getURI(y82);
                        var z82 = u82.getValue(y82);
                        var t82 = u82.getQName(y82);
                        var a83 = v82.createAttributeNS(r82, t82);
                        this.locator && u80(u82.getLocator(y82), a83);
                        a83.value = a83.nodeValue = z82;
                        w82.setAttributeNode(a83);
                    }
                },
                endElement: function (m82, n82, o82) {
                    var p82 = this.currentElement;
                    var q82 = p82.tagName;
                    this.currentElement = p82.parentNode;
                },
                startPrefixMapping: function (k82, l82) { },
                endPrefixMapping: function (j82) { },
                processingInstruction: function (g82, h82) {
                    var i82 = this.doc.createProcessingInstruction(g82, h82);
                    this.locator && u80(this.locator, i82);
                    x80(this, i82);
                },
                ignorableWhitespace: function (d82, e82, f82) { },
                characters: function (z81, a82, b82) {
                    z81 = w80.apply(this, arguments);
                    if (z81) {
                        if (this.cdata) {
                            var c82 = this.doc.createCDATASection(z81);
                        }
                        else {
                            var c82 = this.doc.createTextNode(z81);
                        }
                        if (this.currentElement) {
                            this.currentElement.appendChild(c82);
                        }
                        else if (/^\s*$/.test(z81)) {
                            this.doc.appendChild(c82);
                        }
                        this.locator && u80(this.locator, c82);
                    }
                },
                skippedEntity: function (y81) { },
                endDocument: function () {
                    this.doc.normalize();
                },
                setDocumentLocator: function (x81) {
                    if (this.locator = x81) {
                        x81.lineNumber = 0;
                    }
                },
                comment: function (t81, u81, v81) {
                    t81 = w80.apply(this, arguments);
                    var w81 = this.doc.createComment(t81);
                    this.locator && u80(this.locator, w81);
                    x80(this, w81);
                },
                startCDATA: function () {
                    this.cdata = true;
                },
                endCDATA: function () {
                    this.cdata = false;
                },
                startDTD: function (o81, p81, q81) {
                    var r81 = this.doc.implementation;
                    if (r81 && r81.createDocumentType) {
                        var s81 = r81.createDocumentType(o81, p81, q81);
                        this.locator && u80(this.locator, s81);
                        x80(this, s81);
                    }
                },
                warning: function (n81) {
                    console.warn('[xmldom warning]\t' + n81, v80(this.locator));
                },
                error: function (m81) {
                    console.error('[xmldom error]\t' + m81, v80(this.locator));
                },
                fatalError: function (l81) {
                    console.error('[xmldom fatalError]\t' + l81, v80(this.locator));
                    throw l81;
                }
            };
            function v80(k81) {
                if (k81) {
                    return '\n@' + (k81.systemId || '') + '#[line:' + k81.lineNumber + ',col:' + k81.columnNumber + ']';
                }
            }
            function w80(h81, i81, j81) {
                if (typeof h81 == 'string') {
                    return h81.substr(i81, j81);
                }
                else {
                    if (h81.length >= i81 + j81 || i81) {
                        return new java.lang.String(h81, i81, j81) + '';
                    }
                    return h81;
                }
            }
            "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (f81) {
                t80.prototype[f81] = function () {
                    return null;
                };
            });
            function x80(d81, e81) {
                if (!d81.currentElement) {
                    d81.doc.appendChild(e81);
                }
                else {
                    d81.currentElement.appendChild(e81);
                }
            }
            var y80 = o80('./entities');
            var z80 = o80('./sax').XMLReader;
            var a81 = q80.DOMImplementation = o80('./dom').DOMImplementation;
            q80.XMLSerializer = o80('./dom').XMLSerializer;
            q80.DOMParser = r80;
        }, {
            "./dom": 41,
            "./entities": 42,
            "./sax": 43
        }],
    41: [function (z66, a67, b67) {
            "use strict";
            function c67(l80, m80) {
                for (var n80 in l80) {
                    m80[n80] = l80[n80];
                }
            }
            function d67(h80, i80) {
                var j80 = h80.prototype;
                if (!(j80 instanceof i80)) {
                    function k80() { }
                    ;
                    k80.prototype = i80.prototype;
                    k80 = new k80();
                    c67(j80, k80);
                    h80.prototype = j80 = k80;
                }
                if (j80.constructor != h80) {
                    if (typeof h80 != 'function') {
                        console.error("unknow Class:" + h80);
                    }
                    j80.constructor = h80;
                }
            }
            var q68 = 'http://www.w3.org/1999/xhtml';
            var r68 = {};
            var s68 = r68.ELEMENT_NODE = 1;
            var t68 = r68.ATTRIBUTE_NODE = 2;
            var u68 = r68.TEXT_NODE = 3;
            var v68 = r68.CDATA_SECTION_NODE = 4;
            var w68 = r68.ENTITY_REFERENCE_NODE = 5;
            var x68 = r68.ENTITY_NODE = 6;
            var y68 = r68.PROCESSING_INSTRUCTION_NODE = 7;
            var z68 = r68.COMMENT_NODE = 8;
            var a69 = r68.DOCUMENT_NODE = 9;
            var b69 = r68.DOCUMENT_TYPE_NODE = 10;
            var c69 = r68.DOCUMENT_FRAGMENT_NODE = 11;
            var d69 = r68.NOTATION_NODE = 12;
            var e69 = {};
            var f69 = {};
            var g69 = e69.INDEX_SIZE_ERR = (f69[1] = "Index size error", 1);
            var h69 = e69.DOMSTRING_SIZE_ERR = (f69[2] = "DOMString size error", 2);
            var i69 = e69.HIERARCHY_REQUEST_ERR = (f69[3] = "Hierarchy request error", 3);
            var j69 = e69.WRONG_DOCUMENT_ERR = (f69[4] = "Wrong document", 4);
            var k69 = e69.INVALID_CHARACTER_ERR = (f69[5] = "Invalid character", 5);
            var l69 = e69.NO_DATA_ALLOWED_ERR = (f69[6] = "No data allowed", 6);
            var m69 = e69.NO_MODIFICATION_ALLOWED_ERR = (f69[7] = "No modification allowed", 7);
            var n69 = e69.NOT_FOUND_ERR = (f69[8] = "Not found", 8);
            var o69 = e69.NOT_SUPPORTED_ERR = (f69[9] = "Not supported", 9);
            var p69 = e69.INUSE_ATTRIBUTE_ERR = (f69[10] = "Attribute in use", 10);
            var q69 = e69.INVALID_STATE_ERR = (f69[11] = "Invalid state", 11);
            var r69 = e69.SYNTAX_ERR = (f69[12] = "Syntax error", 12);
            var s69 = e69.INVALID_MODIFICATION_ERR = (f69[13] = "Invalid modification", 13);
            var t69 = e69.NAMESPACE_ERR = (f69[14] = "Invalid namespace", 14);
            var u69 = e69.INVALID_ACCESS_ERR = (f69[15] = "Invalid access", 15);
            function e67(e80, f80) {
                if (f80 instanceof Error) {
                    var g80 = f80;
                }
                else {
                    g80 = this;
                    Error.call(this, f69[e80]);
                    this.message = f69[e80];
                    if (Error.captureStackTrace)
                        Error.captureStackTrace(this, e67);
                }
                g80.code = e80;
                if (f80)
                    this.message = this.message + ": " + f80;
                return g80;
            }
            ;
            e67.prototype = Error.prototype;
            c67(e69, e67);
            function f67() { }
            ;
            f67.prototype = {
                length: 0,
                item: function (d80) {
                    return this[d80] || null;
                },
                toString: function (z79, a80) {
                    for (var b80 = [], c80 = 0; c80 < this.length; c80++) {
                        m68(this[c80], b80, z79, a80);
                    }
                    return b80.join('');
                }
            };
            function g67(x79, y79) {
                this._node = x79;
                this._refresh = y79;
                h67(this);
            }
            function h67(u79) {
                var v79 = u79._node._inc || u79._node.ownerDocument._inc;
                if (u79._inc != v79) {
                    var w79 = u79._refresh(u79._node);
                    p68(u79, 'length', w79.length);
                    c67(w79, u79);
                    u79._inc = v79;
                }
            }
            g67.prototype.item = function (t79) {
                h67(this);
                return this[t79];
            };
            d67(g67, f67);
            function i67() { }
            ;
            function j67(q79, r79) {
                var s79 = q79.length;
                while (s79--) {
                    if (q79[s79] === r79) {
                        return s79;
                    }
                }
            }
            function k67(l79, m79, n79, o79) {
                if (o79) {
                    m79[j67(m79, o79)] = n79;
                }
                else {
                    m79[m79.length++] = n79;
                }
                if (l79) {
                    n79.ownerElement = l79;
                    var p79 = l79.ownerDocument;
                    if (p79) {
                        o79 && s67(p79, l79, o79);
                        r67(p79, l79, n79);
                    }
                }
            }
            function l67(f79, g79, h79) {
                var i79 = j67(g79, h79);
                if (i79 >= 0) {
                    var j79 = g79.length - 1;
                    while (i79 < j79) {
                        g79[i79] = g79[++i79];
                    }
                    g79.length = j79;
                    if (f79) {
                        var k79 = f79.ownerDocument;
                        if (k79) {
                            s67(k79, f79, h79);
                            h79.ownerElement = null;
                        }
                    }
                }
                else {
                    throw e67(n69, new Error(f79.tagName + '@' + h79));
                }
            }
            i67.prototype = {
                length: 0,
                item: f67.prototype.item,
                getNamedItem: function (c79) {
                    var d79 = this.length;
                    while (d79--) {
                        var e79 = this[d79];
                        if (e79.nodeName == c79) {
                            return e79;
                        }
                    }
                },
                setNamedItem: function (z78) {
                    var a79 = z78.ownerElement;
                    if (a79 && a79 != this._ownerElement) {
                        throw new e67(p69);
                    }
                    var b79 = this.getNamedItem(z78.nodeName);
                    k67(this._ownerElement, this, z78, b79);
                    return b79;
                },
                setNamedItemNS: function (w78) {
                    var x78 = w78.ownerElement, y78;
                    if (x78 && x78 != this._ownerElement) {
                        throw new e67(p69);
                    }
                    y78 = this.getNamedItemNS(w78.namespaceURI, w78.localName);
                    k67(this._ownerElement, this, w78, y78);
                    return y78;
                },
                removeNamedItem: function (u78) {
                    var v78 = this.getNamedItem(u78);
                    l67(this._ownerElement, this, v78);
                    return v78;
                },
                removeNamedItemNS: function (r78, s78) {
                    var t78 = this.getNamedItemNS(r78, s78);
                    l67(this._ownerElement, this, t78);
                    return t78;
                },
                getNamedItemNS: function (n78, o78) {
                    var p78 = this.length;
                    while (p78--) {
                        var q78 = this[p78];
                        if (q78.localName == o78 && q78.namespaceURI == n78) {
                            return q78;
                        }
                    }
                    return null;
                }
            };
            function m67(l78) {
                this._features = {};
                if (l78) {
                    for (var m78 in l78) {
                        this._features = l78[m78];
                    }
                }
            }
            ;
            m67.prototype = {
                hasFeature: function (i78, j78) {
                    var k78 = this._features[i78.toLowerCase()];
                    if (k78 && (!j78 || j78 in k78)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                },
                createDocument: function (d78, e78, f78) {
                    var g78 = new q67();
                    g78.implementation = this;
                    g78.childNodes = new f67();
                    g78.doctype = f78;
                    if (f78) {
                        g78.appendChild(f78);
                    }
                    if (e78) {
                        var h78 = g78.createElementNS(d78, e78);
                        g78.appendChild(h78);
                    }
                    return g78;
                },
                createDocumentType: function (z77, a78, b78) {
                    var c78 = new d68();
                    c78.name = z77;
                    c78.nodeName = z77;
                    c78.publicId = a78;
                    c78.systemId = b78;
                    return c78;
                }
            };
            function n67() { }
            ;
            n67.prototype = {
                firstChild: null,
                lastChild: null,
                previousSibling: null,
                nextSibling: null,
                attributes: null,
                parentNode: null,
                childNodes: null,
                ownerDocument: null,
                nodeValue: null,
                namespaceURI: null,
                prefix: null,
                localName: null,
                insertBefore: function (x77, y77) {
                    return v67(this, x77, y77);
                },
                replaceChild: function (v77, w77) {
                    this.insertBefore(v77, w77);
                    if (w77) {
                        this.removeChild(w77);
                    }
                },
                removeChild: function (u77) {
                    return u67(this, u77);
                },
                appendChild: function (t77) {
                    return this.insertBefore(t77, null);
                },
                hasChildNodes: function () {
                    return this.firstChild != null;
                },
                cloneNode: function (s77) {
                    return o68(this.ownerDocument || this, this, s77);
                },
                normalize: function () {
                    var q77 = this.firstChild;
                    while (q77) {
                        var r77 = q77.nextSibling;
                        if (r77 && r77.nodeType == u68 && q77.nodeType == u68) {
                            this.removeChild(r77);
                            q77.appendData(r77.data);
                        }
                        else {
                            q77.normalize();
                            q77 = r77;
                        }
                    }
                },
                isSupported: function (o77, p77) {
                    return this.ownerDocument.implementation.hasFeature(o77, p77);
                },
                hasAttributes: function () {
                    return this.attributes.length > 0;
                },
                lookupPrefix: function (k77) {
                    var l77 = this;
                    while (l77) {
                        var m77 = l77._nsMap;
                        if (m77) {
                            for (var n77 in m77) {
                                if (m77[n77] == k77) {
                                    return n77;
                                }
                            }
                        }
                        l77 = l77.nodeType == t68 ? l77.ownerDocument : l77.parentNode;
                    }
                    return null;
                },
                lookupNamespaceURI: function (h77) {
                    var i77 = this;
                    while (i77) {
                        var j77 = i77._nsMap;
                        if (j77) {
                            if (h77 in j77) {
                                return j77[h77];
                            }
                        }
                        i77 = i77.nodeType == t68 ? i77.ownerDocument : i77.parentNode;
                    }
                    return null;
                },
                isDefaultNamespace: function (f77) {
                    var g77 = this.lookupPrefix(f77);
                    return g77 == null;
                }
            };
            function o67(e77) {
                return e77 == '<' && '&lt;' || e77 == '>' && '&gt;' || e77 == '&' && '&amp;' || e77 == '"' && '&quot;' || '&#' + e77.charCodeAt() + ';';
            }
            c67(r68, n67);
            c67(r68, n67.prototype);
            function p67(c77, d77) {
                if (d77(c77)) {
                    return true;
                }
                if (c77 = c77.firstChild) {
                    do {
                        if (p67(c77, d77)) {
                            return true;
                        }
                    } while (c77 = c77.nextSibling);
                }
            }
            function q67() { }
            function r67(y76, z76, a77) {
                y76 && y76._inc++;
                var b77 = a77.namespaceURI;
                if (b77 == 'http://www.w3.org/2000/xmlns/') {
                    z76._nsMap[a77.prefix ? a77.localName : ''] = a77.value;
                }
            }
            function s67(t76, u76, v76, w76) {
                t76 && t76._inc++;
                var x76 = v76.namespaceURI;
                if (x76 == 'http://www.w3.org/2000/xmlns/') {
                    delete u76._nsMap[v76.prefix ? v76.localName : ''];
                }
            }
            function t67(n76, o76, p76) {
                if (n76 && n76._inc) {
                    n76._inc++;
                    var q76 = o76.childNodes;
                    if (p76) {
                        q76[q76.length++] = p76;
                    }
                    else {
                        var r76 = o76.firstChild;
                        var s76 = 0;
                        while (r76) {
                            q76[s76++] = r76;
                            r76 = r76.nextSibling;
                        }
                        q76.length = s76;
                    }
                }
            }
            function u67(j76, k76) {
                var l76 = k76.previousSibling;
                var m76 = k76.nextSibling;
                if (l76) {
                    l76.nextSibling = m76;
                }
                else {
                    j76.firstChild = m76;
                }
                if (m76) {
                    m76.previousSibling = l76;
                }
                else {
                    j76.lastChild = l76;
                }
                t67(j76.ownerDocument, j76);
                return k76;
            }
            function v67(c76, d76, e76) {
                var f76 = d76.parentNode;
                if (f76) {
                    f76.removeChild(d76);
                }
                if (d76.nodeType === c69) {
                    var g76 = d76.firstChild;
                    if (g76 == null) {
                        return d76;
                    }
                    var h76 = d76.lastChild;
                }
                else {
                    g76 = h76 = d76;
                }
                var i76 = e76 ? e76.previousSibling : c76.lastChild;
                g76.previousSibling = i76;
                h76.nextSibling = e76;
                if (i76) {
                    i76.nextSibling = g76;
                }
                else {
                    c76.firstChild = g76;
                }
                if (e76 == null) {
                    c76.lastChild = h76;
                }
                else {
                    e76.previousSibling = h76;
                }
                do {
                    g76.parentNode = c76;
                } while (g76 !== h76 && (g76 = g76.nextSibling));
                t67(c76.ownerDocument || c76, c76);
                if (d76.nodeType == c69) {
                    d76.firstChild = d76.lastChild = null;
                }
                return d76;
            }
            function w67(y75, z75) {
                var a76 = z75.parentNode;
                if (a76) {
                    var b76 = y75.lastChild;
                    a76.removeChild(z75);
                    var b76 = y75.lastChild;
                }
                var b76 = y75.lastChild;
                z75.parentNode = y75;
                z75.previousSibling = b76;
                z75.nextSibling = null;
                if (b76) {
                    b76.nextSibling = z75;
                }
                else {
                    y75.firstChild = z75;
                }
                y75.lastChild = z75;
                t67(y75.ownerDocument, y75, z75);
                return z75;
            }
            q67.prototype = {
                nodeName: '#document',
                nodeType: a69,
                doctype: null,
                documentElement: null,
                _inc: 1,
                insertBefore: function (u75, v75) {
                    if (u75.nodeType == c69) {
                        var w75 = u75.firstChild;
                        while (w75) {
                            var x75 = w75.nextSibling;
                            this.insertBefore(w75, v75);
                            w75 = x75;
                        }
                        return u75;
                    }
                    if (this.documentElement == null && u75.nodeType == s68) {
                        this.documentElement = u75;
                    }
                    return v67(this, u75, v75), u75.ownerDocument = this, u75;
                },
                removeChild: function (t75) {
                    if (this.documentElement == t75) {
                        this.documentElement = null;
                    }
                    return u67(this, t75);
                },
                importNode: function (r75, s75) {
                    return n68(this, r75, s75);
                },
                getElementById: function (n75) {
                    var o75 = null;
                    p67(this.documentElement, function (q75) {
                        if (q75.nodeType == s68) {
                            if (q75.getAttribute('id') == n75) {
                                o75 = q75;
                                return true;
                            }
                        }
                    });
                    return o75;
                },
                createElement: function (k75) {
                    var l75 = new x67();
                    l75.ownerDocument = this;
                    l75.nodeName = k75;
                    l75.tagName = k75;
                    l75.childNodes = new f67();
                    var m75 = l75.attributes = new i67();
                    m75._ownerElement = l75;
                    return l75;
                },
                createDocumentFragment: function () {
                    var j75 = new h68();
                    j75.ownerDocument = this;
                    j75.childNodes = new f67();
                    return j75;
                },
                createTextNode: function (h75) {
                    var i75 = new a68();
                    i75.ownerDocument = this;
                    i75.appendData(h75);
                    return i75;
                },
                createComment: function (f75) {
                    var g75 = new b68();
                    g75.ownerDocument = this;
                    g75.appendData(f75);
                    return g75;
                },
                createCDATASection: function (d75) {
                    var e75 = new c68();
                    e75.ownerDocument = this;
                    e75.appendData(d75);
                    return e75;
                },
                createProcessingInstruction: function (a75, b75) {
                    var c75 = new i68();
                    c75.ownerDocument = this;
                    c75.tagName = c75.target = a75;
                    c75.nodeValue = c75.data = b75;
                    return c75;
                },
                createAttribute: function (y74) {
                    var z74 = new y67();
                    z74.ownerDocument = this;
                    z74.name = y74;
                    z74.nodeName = y74;
                    z74.localName = y74;
                    z74.specified = true;
                    return z74;
                },
                createEntityReference: function (w74) {
                    var x74 = new g68();
                    x74.ownerDocument = this;
                    x74.nodeName = w74;
                    return x74;
                },
                createElementNS: function (r74, s74) {
                    var t74 = new x67();
                    var u74 = s74.split(':');
                    var v74 = t74.attributes = new i67();
                    t74.childNodes = new f67();
                    t74.ownerDocument = this;
                    t74.nodeName = s74;
                    t74.tagName = s74;
                    t74.namespaceURI = r74;
                    if (u74.length == 2) {
                        t74.prefix = u74[0];
                        t74.localName = u74[1];
                    }
                    else {
                        t74.localName = s74;
                    }
                    v74._ownerElement = t74;
                    return t74;
                },
                createAttributeNS: function (n74, o74) {
                    var p74 = new y67();
                    var q74 = o74.split(':');
                    p74.ownerDocument = this;
                    p74.nodeName = o74;
                    p74.name = o74;
                    p74.namespaceURI = n74;
                    p74.specified = true;
                    if (q74.length == 2) {
                        p74.prefix = q74[0];
                        p74.localName = q74[1];
                    }
                    else {
                        p74.localName = o74;
                    }
                    return p74;
                }
            };
            d67(q67, n67);
            function x67() {
                this._nsMap = {};
            }
            ;
            x67.prototype = {
                nodeType: s68,
                hasAttribute: function (m74) {
                    return this.getAttributeNode(m74) != null;
                },
                getAttribute: function (k74) {
                    var l74 = this.getAttributeNode(k74);
                    return l74 && l74.value || '';
                },
                getAttributeNode: function (j74) {
                    return this.attributes.getNamedItem(j74);
                },
                setAttribute: function (g74, h74) {
                    var i74 = this.ownerDocument.createAttribute(g74);
                    i74.value = i74.nodeValue = "" + h74;
                    this.setAttributeNode(i74);
                },
                removeAttribute: function (e74) {
                    var f74 = this.getAttributeNode(e74);
                    f74 && this.removeAttributeNode(f74);
                },
                appendChild: function (d74) {
                    if (d74.nodeType === c69) {
                        return this.insertBefore(d74, null);
                    }
                    else {
                        return w67(this, d74);
                    }
                },
                setAttributeNode: function (c74) {
                    return this.attributes.setNamedItem(c74);
                },
                setAttributeNodeNS: function (b74) {
                    return this.attributes.setNamedItemNS(b74);
                },
                removeAttributeNode: function (a74) {
                    return this.attributes.removeNamedItem(a74.nodeName);
                },
                removeAttributeNS: function (x73, y73) {
                    var z73 = this.getAttributeNodeNS(x73, y73);
                    z73 && this.removeAttributeNode(z73);
                },
                hasAttributeNS: function (v73, w73) {
                    return this.getAttributeNodeNS(v73, w73) != null;
                },
                getAttributeNS: function (s73, t73) {
                    var u73 = this.getAttributeNodeNS(s73, t73);
                    return u73 && u73.value || '';
                },
                setAttributeNS: function (o73, p73, q73) {
                    var r73 = this.ownerDocument.createAttributeNS(o73, p73);
                    r73.value = r73.nodeValue = "" + q73;
                    this.setAttributeNode(r73);
                },
                getAttributeNodeNS: function (m73, n73) {
                    return this.attributes.getNamedItemNS(m73, n73);
                },
                getElementsByTagName: function (g73) {
                    return new g67(this, function (i73) {
                        var j73 = [];
                        p67(i73, function (l73) {
                            if (l73 !== i73 && l73.nodeType == s68 && (g73 === '*' || l73.tagName == g73)) {
                                j73.push(l73);
                            }
                        });
                        return j73;
                    });
                },
                getElementsByTagNameNS: function (z72, a73) {
                    return new g67(this, function (c73) {
                        var d73 = [];
                        p67(c73, function (f73) {
                            if (f73 !== c73 && f73.nodeType === s68 && (z72 === '*' || f73.namespaceURI === z72) && (a73 === '*' || f73.localName == a73)) {
                                d73.push(f73);
                            }
                        });
                        return d73;
                    });
                }
            };
            q67.prototype.getElementsByTagName = x67.prototype.getElementsByTagName;
            q67.prototype.getElementsByTagNameNS = x67.prototype.getElementsByTagNameNS;
            d67(x67, n67);
            function y67() { }
            ;
            y67.prototype.nodeType = t68;
            d67(y67, n67);
            function z67() { }
            ;
            z67.prototype = {
                data: '',
                substringData: function (x72, y72) {
                    return this.data.substring(x72, x72 + y72);
                },
                appendData: function (w72) {
                    w72 = this.data + w72;
                    this.nodeValue = this.data = w72;
                    this.length = w72.length;
                },
                insertData: function (u72, v72) {
                    this.replaceData(u72, 0, v72);
                },
                appendChild: function (t72) {
                    throw new Error(f69[i69]);
                },
                deleteData: function (r72, s72) {
                    this.replaceData(r72, s72, "");
                },
                replaceData: function (m72, n72, o72) {
                    var p72 = this.data.substring(0, m72);
                    var q72 = this.data.substring(m72 + n72);
                    o72 = p72 + o72 + q72;
                    this.nodeValue = this.data = o72;
                    this.length = o72.length;
                }
            };
            d67(z67, n67);
            function a68() { }
            ;
            a68.prototype = {
                nodeName: "#text",
                nodeType: u68,
                splitText: function (i72) {
                    var j72 = this.data;
                    var k72 = j72.substring(i72);
                    j72 = j72.substring(0, i72);
                    this.data = this.nodeValue = j72;
                    this.length = j72.length;
                    var l72 = this.ownerDocument.createTextNode(k72);
                    if (this.parentNode) {
                        this.parentNode.insertBefore(l72, this.nextSibling);
                    }
                    return l72;
                }
            };
            d67(a68, z67);
            function b68() { }
            ;
            b68.prototype = {
                nodeName: "#comment",
                nodeType: z68
            };
            d67(b68, z67);
            function c68() { }
            ;
            c68.prototype = {
                nodeName: "#cdata-section",
                nodeType: v68
            };
            d67(c68, z67);
            function d68() { }
            ;
            d68.prototype.nodeType = b69;
            d67(d68, n67);
            function e68() { }
            ;
            e68.prototype.nodeType = d69;
            d67(e68, n67);
            function f68() { }
            ;
            f68.prototype.nodeType = x68;
            d67(f68, n67);
            function g68() { }
            ;
            g68.prototype.nodeType = w68;
            d67(g68, n67);
            function h68() { }
            ;
            h68.prototype.nodeName = "#document-fragment";
            h68.prototype.nodeType = c69;
            d67(h68, n67);
            function i68() { }
            i68.prototype.nodeType = y68;
            d67(i68, n67);
            function j68() { }
            j68.prototype.serializeToString = function (f72, g72, h72) {
                return k68.call(f72, g72, h72);
            };
            n67.prototype.toString = k68;
            function k68(y71, z71) {
                var a72 = [];
                var b72 = this.nodeType == 9 && this.documentElement || this;
                var c72 = b72.prefix;
                var d72 = b72.namespaceURI;
                if (d72 && c72 == null) {
                    var c72 = b72.lookupPrefix(d72);
                    if (c72 == null) {
                        var e72 = [{
                                namespace: d72,
                                prefix: null
                            }
                        ];
                    }
                }
                m68(this, a72, y71, z71, e72);
                return a72.join('');
            }
            function l68(r71, s71, t71) {
                var u71 = r71.prefix || '';
                var v71 = r71.namespaceURI;
                if (!u71 && !v71) {
                    return false;
                }
                if (u71 === "xml" && v71 === "http://www.w3.org/XML/1998/namespace" || v71 == 'http://www.w3.org/2000/xmlns/') {
                    return false;
                }
                var w71 = t71.length;
                while (w71--) {
                    var x71 = t71[w71];
                    if (x71.prefix == u71) {
                        return x71.namespace != v71;
                    }
                }
                return true;
            }
            function m68(z70, a71, b71, c71, d71) {
                if (c71) {
                    z70 = c71(z70);
                    if (z70) {
                        if (typeof z70 == 'string') {
                            a71.push(z70);
                            return;
                        }
                    }
                    else {
                        return;
                    }
                }
                switch (z70.nodeType) {
                    case s68:
                        if (!d71)
                            d71 = [];
                        var e71 = d71.length;
                        var f71 = z70.attributes;
                        var g71 = f71.length;
                        var h71 = z70.firstChild;
                        var i71 = z70.tagName;
                        b71 = q68 === z70.namespaceURI || b71;
                        a71.push('<', i71);
                        for (var j71 = 0; j71 < g71; j71++) {
                            var k71 = f71.item(j71);
                            if (k71.prefix == 'xmlns') {
                                d71.push({
                                    prefix: k71.localName,
                                    namespace: k71.value
                                });
                            }
                            else if (k71.nodeName == 'xmlns') {
                                d71.push({
                                    prefix: '',
                                    namespace: k71.value
                                });
                            }
                        }
                        for (var j71 = 0; j71 < g71; j71++) {
                            var k71 = f71.item(j71);
                            if (l68(k71, b71, d71)) {
                                var l71 = k71.prefix || '';
                                var m71 = k71.namespaceURI;
                                var n71 = l71 ? ' xmlns:' + l71 : " xmlns";
                                a71.push(n71, '="', m71, '"');
                                d71.push({
                                    prefix: l71,
                                    namespace: m71
                                });
                            }
                            m68(k71, a71, b71, c71, d71);
                        }
                        if (l68(z70, b71, d71)) {
                            var l71 = z70.prefix || '';
                            var m71 = z70.namespaceURI;
                            var n71 = l71 ? ' xmlns:' + l71 : " xmlns";
                            a71.push(n71, '="', m71, '"');
                            d71.push({
                                prefix: l71,
                                namespace: m71
                            });
                        }
                        if (h71 || b71 && !/^(?:meta|link|img|br|hr|input)$/i.test(i71)) {
                            a71.push('>');
                            if (b71 && /^script$/i.test(i71)) {
                                while (h71) {
                                    if (h71.data) {
                                        a71.push(h71.data);
                                    }
                                    else {
                                        m68(h71, a71, b71, c71, d71);
                                    }
                                    h71 = h71.nextSibling;
                                }
                            }
                            else {
                                while (h71) {
                                    m68(h71, a71, b71, c71, d71);
                                    h71 = h71.nextSibling;
                                }
                            }
                            a71.push('</', i71, '>');
                        }
                        else {
                            a71.push('/>');
                        }
                        return;
                    case a69:
                    case c69:
                        var h71 = z70.firstChild;
                        while (h71) {
                            m68(h71, a71, b71, c71, d71);
                            h71 = h71.nextSibling;
                        }
                        return;
                    case t68:
                        return a71.push(' ', z70.name, '="', z70.value.replace(/[<&"]/g, o67), '"');
                    case u68:
                        return a71.push(z70.data.replace(/[<&]/g, o67));
                    case v68:
                        return a71.push('<![CDATA[', z70.data, ']]>');
                    case z68:
                        return a71.push("<!--", z70.data, "-->");
                    case b69:
                        var o71 = z70.publicId;
                        var p71 = z70.systemId;
                        a71.push('<!DOCTYPE ', z70.name);
                        if (o71) {
                            a71.push(' PUBLIC "', o71);
                            if (p71 && p71 != '.') {
                                a71.push('" "', p71);
                            }
                            a71.push('">');
                        }
                        else if (p71 && p71 != '.') {
                            a71.push(' SYSTEM "', p71, '">');
                        }
                        else {
                            var q71 = z70.internalSubset;
                            if (q71) {
                                a71.push(" [", q71, "]");
                            }
                            a71.push(">");
                        }
                        return;
                    case y68:
                        return a71.push("<?", z70.target, " ", z70.data, "?>");
                    case w68:
                        return a71.push('&', z70.nodeName, ';');
                    default:
                        a71.push('??', z70.nodeName);
                }
            }
            function n68(u70, v70, w70) {
                var x70;
                switch (v70.nodeType) {
                    case s68:
                        x70 = v70.cloneNode(false);
                        x70.ownerDocument = u70;
                    case c69:
                        break;
                    case t68:
                        w70 = true;
                        break;
                }
                if (!x70) {
                    x70 = v70.cloneNode(false);
                }
                x70.ownerDocument = u70;
                x70.parentNode = null;
                if (w70) {
                    var y70 = v70.firstChild;
                    while (y70) {
                        x70.appendChild(n68(u70, y70, w70));
                        y70 = y70.nextSibling;
                    }
                }
                return x70;
            }
            function o68(j70, k70, l70) {
                var m70 = new k70.constructor();
                for (var n70 in k70) {
                    var o70 = k70[n70];
                    if (typeof o70 != 'object') {
                        if (o70 != m70[n70]) {
                            m70[n70] = o70;
                        }
                    }
                }
                if (k70.childNodes) {
                    m70.childNodes = new f67();
                }
                m70.ownerDocument = j70;
                switch (m70.nodeType) {
                    case s68:
                        var p70 = k70.attributes;
                        var q70 = m70.attributes = new i67();
                        var r70 = p70.length;
                        q70._ownerElement = m70;
                        for (var s70 = 0; s70 < r70; s70++) {
                            m70.setAttributeNode(o68(j70, p70.item(s70), true));
                        }
                        break;
                        ;
                    case t68:
                        l70 = true;
                }
                if (l70) {
                    var t70 = k70.firstChild;
                    while (t70) {
                        m70.appendChild(o68(j70, t70, l70));
                        t70 = t70.nextSibling;
                    }
                }
                return m70;
            }
            function p68(g70, h70, i70) {
                g70[h70] = i70;
            }
            try {
                if (Object.defineProperty) {
                    Object.defineProperty(g67.prototype, 'length', {
                        get: function () {
                            h67(this);
                            return this.$$length;
                        }
                    });
                    Object.defineProperty(n67.prototype, 'textContent', {
                        get: function () {
                            return y69(this);
                        },
                        set: function (f70) {
                            switch (this.nodeType) {
                                case s68:
                                case c69:
                                    while (this.firstChild) {
                                        this.removeChild(this.firstChild);
                                    }
                                    if (f70 || String(f70)) {
                                        this.appendChild(this.ownerDocument.createTextNode(f70));
                                    }
                                    break;
                                default:
                                    this.data = f70;
                                    this.value = f70;
                                    this.nodeValue = f70;
                            }
                        }
                    });
                    function y69(d70) {
                        switch (d70.nodeType) {
                            case s68:
                            case c69:
                                var e70 = [];
                                d70 = d70.firstChild;
                                while (d70) {
                                    if (d70.nodeType !== 7 && d70.nodeType !== 8) {
                                        e70.push(y69(d70));
                                    }
                                    d70 = d70.nextSibling;
                                }
                                return e70.join('');
                            default:
                                return d70.nodeValue;
                        }
                    }
                    p68 = function (a70, b70, c70) {
                        a70['$$' + b70] = c70;
                    };
                }
            }
            catch (x69) {
            }
            b67.DOMImplementation = m67;
            b67.XMLSerializer = j68;
        }, {}],
    42: [function (w66, x66, y66) {
            "use strict";
            y66.entityMap = {
                lt: '<',
                gt: '>',
                amp: '&',
                quot: '"',
                apos: "'",
                Agrave: "À",
                Aacute: "Á",
                Acirc: "Â",
                Atilde: "Ã",
                Auml: "Ä",
                Aring: "Å",
                AElig: "Æ",
                Ccedil: "Ç",
                Egrave: "È",
                Eacute: "É",
                Ecirc: "Ê",
                Euml: "Ë",
                Igrave: "Ì",
                Iacute: "Í",
                Icirc: "Î",
                Iuml: "Ï",
                ETH: "Ð",
                Ntilde: "Ñ",
                Ograve: "Ò",
                Oacute: "Ó",
                Ocirc: "Ô",
                Otilde: "Õ",
                Ouml: "Ö",
                Oslash: "Ø",
                Ugrave: "Ù",
                Uacute: "Ú",
                Ucirc: "Û",
                Uuml: "Ü",
                Yacute: "Ý",
                THORN: "Þ",
                szlig: "ß",
                agrave: "à",
                aacute: "á",
                acirc: "â",
                atilde: "ã",
                auml: "ä",
                aring: "å",
                aelig: "æ",
                ccedil: "ç",
                egrave: "è",
                eacute: "é",
                ecirc: "ê",
                euml: "ë",
                igrave: "ì",
                iacute: "í",
                icirc: "î",
                iuml: "ï",
                eth: "ð",
                ntilde: "ñ",
                ograve: "ò",
                oacute: "ó",
                ocirc: "ô",
                otilde: "õ",
                ouml: "ö",
                oslash: "ø",
                ugrave: "ù",
                uacute: "ú",
                ucirc: "û",
                uuml: "ü",
                yacute: "ý",
                thorn: "þ",
                yuml: "ÿ",
                nbsp: " ",
                iexcl: "¡",
                cent: "¢",
                pound: "£",
                curren: "¤",
                yen: "¥",
                brvbar: "¦",
                sect: "§",
                uml: "¨",
                copy: "©",
                ordf: "ª",
                laquo: "«",
                not: "¬",
                shy: "­­",
                reg: "®",
                macr: "¯",
                deg: "°",
                plusmn: "±",
                sup2: "²",
                sup3: "³",
                acute: "´",
                micro: "µ",
                para: "¶",
                middot: "·",
                cedil: "¸",
                sup1: "¹",
                ordm: "º",
                raquo: "»",
                frac14: "¼",
                frac12: "½",
                frac34: "¾",
                iquest: "¿",
                times: "×",
                divide: "÷",
                forall: "∀",
                part: "∂",
                exist: "∃",
                empty: "∅",
                nabla: "∇",
                isin: "∈",
                notin: "∉",
                ni: "∋",
                prod: "∏",
                sum: "∑",
                minus: "−",
                lowast: "∗",
                radic: "√",
                prop: "∝",
                infin: "∞",
                ang: "∠",
                and: "∧",
                or: "∨",
                cap: "∩",
                cup: "∪",
                'int': "∫",
                there4: "∴",
                sim: "∼",
                cong: "≅",
                asymp: "≈",
                ne: "≠",
                equiv: "≡",
                le: "≤",
                ge: "≥",
                sub: "⊂",
                sup: "⊃",
                nsub: "⊄",
                sube: "⊆",
                supe: "⊇",
                oplus: "⊕",
                otimes: "⊗",
                perp: "⊥",
                sdot: "⋅",
                Alpha: "Α",
                Beta: "Β",
                Gamma: "Γ",
                Delta: "Δ",
                Epsilon: "Ε",
                Zeta: "Ζ",
                Eta: "Η",
                Theta: "Θ",
                Iota: "Ι",
                Kappa: "Κ",
                Lambda: "Λ",
                Mu: "Μ",
                Nu: "Ν",
                Xi: "Ξ",
                Omicron: "Ο",
                Pi: "Π",
                Rho: "Ρ",
                Sigma: "Σ",
                Tau: "Τ",
                Upsilon: "Υ",
                Phi: "Φ",
                Chi: "Χ",
                Psi: "Ψ",
                Omega: "Ω",
                alpha: "α",
                beta: "β",
                gamma: "γ",
                delta: "δ",
                epsilon: "ε",
                zeta: "ζ",
                eta: "η",
                theta: "θ",
                iota: "ι",
                kappa: "κ",
                lambda: "λ",
                mu: "μ",
                nu: "ν",
                xi: "ξ",
                omicron: "ο",
                pi: "π",
                rho: "ρ",
                sigmaf: "ς",
                sigma: "σ",
                tau: "τ",
                upsilon: "υ",
                phi: "φ",
                chi: "χ",
                psi: "ψ",
                omega: "ω",
                thetasym: "ϑ",
                upsih: "ϒ",
                piv: "ϖ",
                OElig: "Œ",
                oelig: "œ",
                Scaron: "Š",
                scaron: "š",
                Yuml: "Ÿ",
                fnof: "ƒ",
                circ: "ˆ",
                tilde: "˜",
                ensp: " ",
                emsp: " ",
                thinsp: " ",
                zwnj: "‌",
                zwj: "‍",
                lrm: "‎",
                rlm: "‏",
                ndash: "–",
                mdash: "—",
                lsquo: "‘",
                rsquo: "’",
                sbquo: "‚",
                ldquo: "“",
                rdquo: "”",
                bdquo: "„",
                dagger: "†",
                Dagger: "‡",
                bull: "•",
                hellip: "…",
                permil: "‰",
                prime: "′",
                Prime: "″",
                lsaquo: "‹",
                rsaquo: "›",
                oline: "‾",
                euro: "€",
                trade: "™",
                larr: "←",
                uarr: "↑",
                rarr: "→",
                darr: "↓",
                harr: "↔",
                crarr: "↵",
                lceil: "⌈",
                rceil: "⌉",
                lfloor: "⌊",
                rfloor: "⌋",
                loz: "◊",
                spades: "♠",
                clubs: "♣",
                hearts: "♥",
                diams: "♦"
            };
        }, {}],
    43: [function (e61, f61, g61) {
            "use strict";
            var t61 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
            var u61 = new RegExp("[\\-\\.0-9" + t61.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
            var v61 = new RegExp('^' + t61.source + u61.source + '*(?:\:' + t61.source + u61.source + '*)?$');
            var w61 = 0;
            var x61 = 1;
            var y61 = 2;
            var z61 = 3;
            var a62 = 4;
            var b62 = 5;
            var c62 = 6;
            var d62 = 7;
            function h61() { }
            h61.prototype = {
                parse: function (s66, t66, u66) {
                    var v66 = this.domBuilder;
                    v66.startDocument();
                    o61(t66, t66 = {});
                    i61(s66, t66, u66, v66, this.errorHandler);
                    v66.endDocument();
                }
            };
            function i61(c65, d65, e65, f65, g65) {
                function h65(p66) {
                    if (p66 > 0xffff) {
                        p66 -= 0x10000;
                        var q66 = 0xd800 + (p66 >> 10), r66 = 0xdc00 + (p66 & 0x3ff);
                        return String.fromCharCode(q66, r66);
                    }
                    else {
                        return String.fromCharCode(p66);
                    }
                }
                function i65(n66) {
                    var o66 = n66.slice(1, -1);
                    if (o66 in e65) {
                        return e65[o66];
                    }
                    else if (o66.charAt(0) === '#') {
                        return h65(parseInt(o66.substr(1).replace('x', '0x')));
                    }
                    else {
                        g65.error('entity not found:' + n66);
                        return n66;
                    }
                }
                function j65(l66) {
                    if (l66 > r65) {
                        var m66 = c65.substring(r65, l66).replace(/&#?\w+;/g, i65);
                        o65 && k65(r65);
                        f65.characters(m66, 0, l66 - r65);
                        r65 = l66;
                    }
                }
                function k65(j66, k66) {
                    while (j66 >= m65 && (k66 = n65.exec(c65))) {
                        l65 = k66.index;
                        m65 = l65 + k66[0].length;
                        o65.lineNumber++;
                    }
                    o65.columnNumber = j66 - l65 + 1;
                }
                var l65 = 0;
                var m65 = 0;
                var n65 = /.*(?:\r\n?|\n)|.*$/g;
                var o65 = f65.locator;
                var p65 = [{
                        currentNSMap: d65
                    }];
                var q65 = {};
                var r65 = 0;
                while (true) {
                    try {
                        var s65 = c65.indexOf('<', r65);
                        if (s65 < 0) {
                            if (!c65.substr(r65).match(/^\s*$/)) {
                                var t65 = f65.doc;
                                var u65 = t65.createTextNode(c65.substr(r65));
                                t65.appendChild(u65);
                                f65.currentElement = u65;
                            }
                            return;
                        }
                        if (s65 > r65) {
                            j65(s65);
                        }
                        switch (c65.charAt(s65 + 1)) {
                            case '/':
                                var v65 = c65.indexOf('>', s65 + 3);
                                var w65 = c65.substring(s65 + 2, v65);
                                var x65 = p65.pop();
                                if (v65 < 0) {
                                    w65 = c65.substring(s65 + 2).replace(/[\s<].*/, '');
                                    g65.error("end tag name: " + w65 + ' is not complete:' + x65.tagName);
                                    v65 = s65 + 1 + w65.length;
                                }
                                else if (w65.match(/\s</)) {
                                    w65 = w65.replace(/[\s<].*/, '');
                                    g65.error("end tag name: " + w65 + ' maybe not complete');
                                    v65 = s65 + 1 + w65.length;
                                }
                                var y65 = x65.localNSMap;
                                var z65 = x65.tagName == w65;
                                var a66 = z65 || x65.tagName && x65.tagName.toLowerCase() == w65.toLowerCase();
                                if (a66) {
                                    f65.endElement(x65.uri, x65.localName, w65);
                                    if (y65) {
                                        for (var b66 in y65) {
                                            f65.endPrefixMapping(b66);
                                        }
                                    }
                                    if (!z65) {
                                        g65.fatalError("end tag name: " + w65 + ' is not match the current start tagName:' + x65.tagName);
                                    }
                                }
                                else {
                                    p65.push(x65);
                                }
                                v65++;
                                break;
                            case '?':
                                o65 && k65(s65);
                                v65 = q61(c65, s65, f65);
                                break;
                            case '!':
                                o65 && k65(s65);
                                v65 = p61(c65, s65, f65, g65);
                                break;
                            default:
                                o65 && k65(s65);
                                var c66 = new r61();
                                var d66 = p65[p65.length - 1].currentNSMap;
                                var v65 = k61(c65, s65, c66, d66, i65, g65);
                                var e66 = c66.length;
                                if (!c66.closed && n61(c65, v65, c66.tagName, q65)) {
                                    c66.closed = true;
                                    if (!e65.nbsp) {
                                        g65.warning('unclosed xml attribute');
                                    }
                                }
                                if (o65 && e66) {
                                    var f66 = j61(o65, {});
                                    for (var g66 = 0; g66 < e66; g66++) {
                                        var h66 = c66[g66];
                                        k65(h66.offset);
                                        h66.locator = j61(o65, {});
                                    }
                                    f65.locator = f66;
                                    if (l61(c66, f65, d66)) {
                                        p65.push(c66);
                                    }
                                    f65.locator = o65;
                                }
                                else {
                                    if (l61(c66, f65, d66)) {
                                        p65.push(c66);
                                    }
                                }
                                if (c66.uri === 'http://www.w3.org/1999/xhtml' && !c66.closed) {
                                    v65 = m61(c65, v65, c66.tagName, i65, f65);
                                }
                                else {
                                    v65++;
                                }
                        }
                    }
                    catch (i66) {
                        g65.error('element parse error: ' + i66);
                        v65 = -1;
                    }
                    if (v65 > r65) {
                        r65 = v65;
                    }
                    else {
                        j65(Math.max(s65, r65) + 1);
                    }
                }
            }
            function j61(a65, b65) {
                b65.lineNumber = a65.lineNumber;
                b65.columnNumber = a65.columnNumber;
                return b65;
            }
            function k61(o64, p64, q64, r64, s64, t64) {
                var u64;
                var v64;
                var w64 = ++p64;
                var x64 = w61;
                while (true) {
                    var y64 = o64.charAt(w64);
                    switch (y64) {
                        case '=':
                            if (x64 === x61) {
                                u64 = o64.slice(p64, w64);
                                x64 = z61;
                            }
                            else if (x64 === y61) {
                                x64 = z61;
                            }
                            else {
                                throw new Error('attribute equal must after attrName');
                            }
                            break;
                        case '\'':
                        case '"':
                            if (x64 === z61 || x64 === x61) {
                                if (x64 === x61) {
                                    t64.warning('attribute value must after "="');
                                    u64 = o64.slice(p64, w64);
                                }
                                p64 = w64 + 1;
                                w64 = o64.indexOf(y64, p64);
                                if (w64 > 0) {
                                    v64 = o64.slice(p64, w64).replace(/&#?\w+;/g, s64);
                                    q64.add(u64, v64, p64 - 1);
                                    x64 = b62;
                                }
                                else {
                                    throw new Error('attribute value no end \'' + y64 + '\' match');
                                }
                            }
                            else if (x64 == a62) {
                                v64 = o64.slice(p64, w64).replace(/&#?\w+;/g, s64);
                                q64.add(u64, v64, p64);
                                t64.warning('attribute "' + u64 + '" missed start quot(' + y64 + ')!!');
                                p64 = w64 + 1;
                                x64 = b62;
                            }
                            else {
                                throw new Error('attribute value must after "="');
                            }
                            break;
                        case '/':
                            switch (x64) {
                                case w61:
                                    q64.setTagName(o64.slice(p64, w64));
                                case b62:
                                case c62:
                                case d62:
                                    x64 = d62;
                                    q64.closed = true;
                                case a62:
                                case x61:
                                case y61:
                                    break;
                                default:
                                    throw new Error("attribute invalid close char('/')");
                            }
                            break;
                        case '':
                            t64.error('unexpected end of input');
                            if (x64 == w61) {
                                q64.setTagName(o64.slice(p64, w64));
                            }
                            return w64;
                        case '>':
                            switch (x64) {
                                case w61:
                                    q64.setTagName(o64.slice(p64, w64));
                                case b62:
                                case c62:
                                case d62:
                                    break;
                                case a62:
                                case x61:
                                    v64 = o64.slice(p64, w64);
                                    if (v64.slice(-1) === '/') {
                                        q64.closed = true;
                                        v64 = v64.slice(0, -1);
                                    }
                                case y61:
                                    if (x64 === y61) {
                                        v64 = u64;
                                    }
                                    if (x64 == a62) {
                                        t64.warning('attribute "' + v64 + '" missed quot(")!!');
                                        q64.add(u64, v64.replace(/&#?\w+;/g, s64), p64);
                                    }
                                    else {
                                        if (r64[''] !== 'http://www.w3.org/1999/xhtml' || !v64.match(/^(?:disabled|checked|selected)$/i)) {
                                            t64.warning('attribute "' + v64 + '" missed value!! "' + v64 + '" instead!!');
                                        }
                                        q64.add(v64, v64, p64);
                                    }
                                    break;
                                case z61:
                                    throw new Error('attribute value missed!!');
                            }
                            return w64;
                        case '\u0080':
                            y64 = ' ';
                        default:
                            if (y64 <= ' ') {
                                switch (x64) {
                                    case w61:
                                        q64.setTagName(o64.slice(p64, w64));
                                        x64 = c62;
                                        break;
                                    case x61:
                                        u64 = o64.slice(p64, w64);
                                        x64 = y61;
                                        break;
                                    case a62:
                                        var v64 = o64.slice(p64, w64).replace(/&#?\w+;/g, s64);
                                        t64.warning('attribute "' + v64 + '" missed quot(")!!');
                                        q64.add(u64, v64, p64);
                                    case b62:
                                        x64 = c62;
                                        break;
                                }
                            }
                            else {
                                switch (x64) {
                                    case y61:
                                        var z64 = q64.tagName;
                                        if (r64[''] !== 'http://www.w3.org/1999/xhtml' || !u64.match(/^(?:disabled|checked|selected)$/i)) {
                                            t64.warning('attribute "' + u64 + '" missed value!! "' + u64 + '" instead2!!');
                                        }
                                        q64.add(u64, u64, p64);
                                        p64 = w64;
                                        x64 = x61;
                                        break;
                                    case b62:
                                        t64.warning('attribute space is required"' + u64 + '"!!');
                                    case c62:
                                        x64 = x61;
                                        p64 = w64;
                                        break;
                                    case z61:
                                        x64 = a62;
                                        p64 = w64;
                                        break;
                                    case d62:
                                        throw new Error("elements closed character '/' and '>' must be connected to");
                                }
                            }
                    }
                    w64++;
                }
            }
            function l61(a64, b64, c64) {
                var d64 = a64.tagName;
                var e64 = null;
                var f64 = a64.length;
                while (f64--) {
                    var g64 = a64[f64];
                    var h64 = g64.qName;
                    var i64 = g64.value;
                    var j64 = h64.indexOf(':');
                    if (j64 > 0) {
                        var k64 = g64.prefix = h64.slice(0, j64);
                        var l64 = h64.slice(j64 + 1);
                        var m64 = k64 === 'xmlns' && l64;
                    }
                    else {
                        l64 = h64;
                        k64 = null;
                        m64 = h64 === 'xmlns' && '';
                    }
                    g64.localName = l64;
                    if (m64 !== false) {
                        if (e64 == null) {
                            e64 = {};
                            o61(c64, c64 = {});
                        }
                        c64[m64] = e64[m64] = i64;
                        g64.uri = 'http://www.w3.org/2000/xmlns/';
                        b64.startPrefixMapping(m64, i64);
                    }
                }
                var f64 = a64.length;
                while (f64--) {
                    g64 = a64[f64];
                    var k64 = g64.prefix;
                    if (k64) {
                        if (k64 === 'xml') {
                            g64.uri = 'http://www.w3.org/XML/1998/namespace';
                        }
                        if (k64 !== 'xmlns') {
                            g64.uri = c64[k64 || ''];
                        }
                    }
                }
                var j64 = d64.indexOf(':');
                if (j64 > 0) {
                    k64 = a64.prefix = d64.slice(0, j64);
                    l64 = a64.localName = d64.slice(j64 + 1);
                }
                else {
                    k64 = null;
                    l64 = a64.localName = d64;
                }
                var n64 = a64.uri = c64[k64 || ''];
                b64.startElement(n64, l64, d64, a64);
                if (a64.closed) {
                    b64.endElement(n64, l64, d64);
                    if (e64) {
                        for (k64 in e64) {
                            b64.endPrefixMapping(k64);
                        }
                    }
                }
                else {
                    a64.currentNSMap = c64;
                    a64.localNSMap = e64;
                    return true;
                }
            }
            function m61(t63, u63, v63, w63, x63) {
                if (/^(?:script|textarea)$/i.test(v63)) {
                    var y63 = t63.indexOf('</' + v63 + '>', u63);
                    var z63 = t63.substring(u63 + 1, y63);
                    if (/[&<]/.test(z63)) {
                        if (/^script$/i.test(v63)) {
                            x63.characters(z63, 0, z63.length);
                            return y63;
                        }
                        z63 = z63.replace(/&#?\w+;/g, w63);
                        x63.characters(z63, 0, z63.length);
                        return y63;
                    }
                }
                return u63 + 1;
            }
            function n61(o63, p63, q63, r63) {
                var s63 = r63[q63];
                if (s63 == null) {
                    s63 = o63.lastIndexOf('</' + q63 + '>');
                    if (s63 < p63) {
                        s63 = o63.lastIndexOf('</' + q63);
                    }
                    r63[q63] = s63;
                }
                return s63 < p63;
            }
            function o61(l63, m63) {
                for (var n63 in l63) {
                    m63[n63] = l63[n63];
                }
            }
            function p61(z62, a63, b63, c63) {
                var d63 = z62.charAt(a63 + 2);
                switch (d63) {
                    case '-':
                        if (z62.charAt(a63 + 3) === '-') {
                            var e63 = z62.indexOf('-->', a63 + 4);
                            if (e63 > a63) {
                                b63.comment(z62, a63 + 4, e63 - a63 - 4);
                                return e63 + 3;
                            }
                            else {
                                c63.error("Unclosed comment");
                                return -1;
                            }
                        }
                        else {
                            return -1;
                        }
                    default:
                        if (z62.substr(a63 + 3, 6) == 'CDATA[') {
                            var e63 = z62.indexOf(']]>', a63 + 9);
                            b63.startCDATA();
                            b63.characters(z62, a63 + 9, e63 - a63 - 9);
                            b63.endCDATA();
                            return e63 + 3;
                        }
                        var f63 = s61(z62, a63);
                        var g63 = f63.length;
                        if (g63 > 1 && /!doctype/i.test(f63[0][0])) {
                            var h63 = f63[1][0];
                            var i63 = g63 > 3 && /^public$/i.test(f63[2][0]) && f63[3][0];
                            var j63 = g63 > 4 && f63[4][0];
                            var k63 = f63[g63 - 1];
                            b63.startDTD(h63, i63 && i63.replace(/^(['"])(.*?)\1$/, '$2'), j63 && j63.replace(/^(['"])(.*?)\1$/, '$2'));
                            b63.endDTD();
                            return k63.index + k63[0].length;
                        }
                }
                return -1;
            }
            function q61(t62, u62, v62) {
                var w62 = t62.indexOf('?>', u62);
                if (w62) {
                    var x62 = t62.substring(u62, w62).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                    if (x62) {
                        var y62 = x62[0].length;
                        v62.processingInstruction(x62[1], x62[2]);
                        return w62 + 2;
                    }
                    else {
                        return -1;
                    }
                }
                return -1;
            }
            function r61(s62) { }
            r61.prototype = {
                setTagName: function (r62) {
                    if (!v61.test(r62)) {
                        throw new Error('invalid tagName:' + r62);
                    }
                    this.tagName = r62;
                },
                add: function (o62, p62, q62) {
                    if (!v61.test(o62)) {
                        throw new Error('invalid attribute:' + o62);
                    }
                    this[this.length++] = {
                        qName: o62,
                        value: p62,
                        offset: q62
                    };
                },
                length: 0,
                getLocalName: function (n62) {
                    return this[n62].localName;
                },
                getLocator: function (m62) {
                    return this[m62].locator;
                },
                getQName: function (l62) {
                    return this[l62].qName;
                },
                getURI: function (k62) {
                    return this[k62].uri;
                },
                getValue: function (j62) {
                    return this[j62].value;
                }
            };
            function s61(e62, f62) {
                var g62;
                var h62 = [];
                var i62 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                i62.lastIndex = f62;
                i62.exec(e62);
                while (g62 = i62.exec(e62)) {
                    h62.push(g62);
                    if (g62[1])
                        return h62;
                }
            }
            g61.XMLReader = h61;
        }, {}],
    44: [function (a61, b61, c61) {
            "use strict";
            const d61 = globalThis.jsb.window = globalThis.jsb.window || {};
            b61.exports = d61;
        }, {}]
}, {}, [5]);
