System.register("chunks:///_virtual/resources", [], function () {
    return {
        execute: function () { }
    };
});
(function (x5) {
    x5('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources');
})(function (p5, q5) {
    System.register(p5, [q5], function (s5, t5) {
        return {
            setters: [function (u5) {
                    var v5 = {};
                    for (var w5 in u5) {
                        if (w5 !== "default" && w5 !== "__esModule")
                            v5[w5] = u5[w5];
                    }
                    s5(v5);
                }],
            execute: function () { }
        };
    });
});
