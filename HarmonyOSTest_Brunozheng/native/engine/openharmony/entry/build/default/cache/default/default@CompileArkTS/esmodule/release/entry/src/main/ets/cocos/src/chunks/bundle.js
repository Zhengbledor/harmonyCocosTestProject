System.register([], function (n124, o124) {
    return {
        execute: function () {
            System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (q124) {
                return {
                    execute: function () {
                        q124({
                            applyDecoratedDescriptor: function (v124, w124, x124, y124, z124) {
                                var a125 = {};
                                Object.keys(y124).forEach(function (f125) {
                                    a125[f125] = y124[f125];
                                }), a125.enumerable = !!a125.enumerable, a125.configurable = !!a125.configurable, ("value" in a125 || a125.initializer) && (a125.writable = !0);
                                a125 = x124.slice().reverse().reduce(function (d125, e125) {
                                    return e125(v124, w124, d125) || d125;
                                }, a125), z124 && void 0 !== a125.initializer && (a125.value = a125.initializer ? a125.initializer.call(z124) : void 0, a125.initializer = void 0);
                                void 0 === a125.initializer && (Object.defineProperty(v124, w124, a125), a125 = null);
                                return a125;
                            },
                            initializerDefineProperty: function (r124, s124, t124, u124) {
                                if (!t124)
                                    return;
                                Object.defineProperty(r124, s124, {
                                    enumerable: t124.enumerable,
                                    configurable: t124.configurable,
                                    writable: t124.writable,
                                    value: t124.initializer ? t124.initializer.call(u124) : void 0
                                });
                            }
                        });
                    }
                };
            });
        }
    };
});
