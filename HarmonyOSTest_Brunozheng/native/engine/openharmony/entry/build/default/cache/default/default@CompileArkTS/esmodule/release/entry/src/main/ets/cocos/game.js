import importMap from '@bundle:com.cocos.openharmony/entry/ets/cocos/src/import-map';
const commonJSModuleMap = {
    '/src/application.js'() { return import('@bundle:com.cocos.openharmony/entry/ets/cocos/src/application'); },
    '/src/chunks/bundle.js'() { return import('@bundle:com.cocos.openharmony/entry/ets/cocos/src/chunks/bundle'); },
    '/src/cocos-js/cc.js'() { return import('@bundle:com.cocos.openharmony/entry/ets/cocos/src/cocos-js/cc'); },
    'assets/internal/index.js'() { return import('@bundle:com.cocos.openharmony/entry/ets/cocos/assets/internal/index'); },
    'assets/resources/index.js'() { return import('@bundle:com.cocos.openharmony/entry/ets/cocos/assets/resources/index'); },
    'assets/main/index.js'() { return import('@bundle:com.cocos.openharmony/entry/ets/cocos/assets/main/index'); },
    '/src/settings.js'() { return import('@bundle:com.cocos.openharmony/entry/ets/cocos/src/settings'); },
};
export function loadModule(s6) {
    const t6 = commonJSModuleMap[s6];
    return t6?.();
}
const startTimeList = {};
console.time = function (r6) {
    startTimeList[r6] = Date.now();
};
console.timeEnd = function (q6) {
    console.log(q6 + ' ' + (Date.now() - startTimeList[q6]));
    delete startTimeList[q6];
};
const onTouch = () => new Promise(p6 => p6());
export function launchEngine() {
    window.global = window;
    window.oh = window.oh || {};
    return import('@bundle:com.cocos.openharmony/entry/ets/cocos/jsb-adapter/sys-ability-polyfill').then(({ systemReady: b6 }) => {
        return b6().then(() => {
            window.oh.loadModule = loadModule;
            return import('@bundle:com.cocos.openharmony/entry/ets/cocos/jsb-adapter/web-adapter').then(() => {
                return import('@bundle:com.cocos.openharmony/entry/ets/cocos/src/system.bundle').then(() => {
                    System.warmup({
                        importMap: importMap,
                        importMapUrl: './src/import-map.js',
                        defaultHandler: (n6) => {
                            console.info('urlNoSchema ', n6);
                            return loadModule(n6);
                        },
                    });
                    return System.import('./src/application.js').then(({ Application: m6 }) => {
                        return new m6();
                    }).then((h6) => {
                        return System.import('cc').then((k6) => {
                            return import('@bundle:com.cocos.openharmony/entry/ets/cocos/jsb-adapter/engine-adapter').then(() => {
                                k6.macro.CLEANUP_IMAGE_CACHE = false;
                                return h6.init(k6);
                            });
                        }).then(() => {
                            return h6.start();
                        });
                    });
                });
            });
        });
    }).catch((a6) => {
        console.error('imported failed', a6.message, a6.stack);
    });
}
