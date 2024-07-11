System.register([], function (h124, i124) {
    "use strict";
    var j124, k124;
    h124("Application", void 0);
    return {
        setters: [],
        execute: function () {
            h124("Application", j124 = class Application {
                constructor() {
                    this.settingsPath = 'src/settings.json';
                    this.showFPS = false;
                }
                init(m124) {
                    k124 = m124;
                    k124.game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this));
                    k124.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
                }
                onPostInitBase() {
                }
                onPostSystemInit() {
                }
                start() {
                    return k124.game.init({
                        debugMode: false ? k124.DebugMode.INFO : k124.DebugMode.ERROR,
                        settingsPath: this.settingsPath,
                        overrideSettings: {
                            profiling: {
                                showFPS: this.showFPS
                            }
                        }
                    }).then(() => k124.game.run());
                }
            });
        }
    };
});
