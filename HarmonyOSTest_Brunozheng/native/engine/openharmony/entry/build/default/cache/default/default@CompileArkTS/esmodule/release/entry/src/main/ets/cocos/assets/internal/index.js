System.register("chunks:///_virtual/internal", [], function () {
    return {
        execute: function () { }
    };
});
(function (i) {
    i('virtual:///prerequisite-imports/internal', 'chunks:///_virtual/internal');
})(function (a, b) {
    System.register(a, [b], function (d, e) {
        return {
            setters: [function (f) {
                    var g = {};
                    for (var h in f) {
                        if (h !== "default" && h !== "__esModule")
                            g[h] = f[h];
                    }
                    d(g);
                }],
            execute: function () { }
        };
    });
});
