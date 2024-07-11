System.register(['./index-cdf65239.js', './impl-73464bf7.js'], (function (exports) {
    'use strict';
    var EDITOR, native;
    return {
        setters: [function (module) {
            EDITOR = module.bB;
        }, function (module) {
            native = module.n;
        }],
        execute: (function () {

            exports({
                e: ensureWasmModuleReady,
                i: instantiateWasm
            });

            function instantiateWasm(wasmUrl, importObject) {
              return fetchBuffer(wasmUrl).then(arrayBuffer => WebAssembly.instantiate(arrayBuffer, importObject));
            }
            function fetchBuffer(binaryUrl) {
              return new Promise((resolve, reject) => {
                try {
                  if (EDITOR) ;
                  binaryUrl = `src/cocos-js/${binaryUrl}`;
                  const arrayBuffer = native.fileUtils.getDataFromFile(binaryUrl);
                  resolve(arrayBuffer);
                } catch (e) {
                  reject(e);
                }
              });
            }
            function ensureWasmModuleReady() {
              return Promise.resolve();
            }

        })
    };
}));
