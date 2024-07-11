import worker from '@ohos:worker';
import nativerender from '@app:com.cocos.openharmony/entry/cocos';
import { ContextType } from '@bundle:com.cocos.openharmony/entry/ets/common/Constants';
import { launchEngine } from '@bundle:com.cocos.openharmony/entry/ets/cocos/game';
import { PortProxy } from '@bundle:com.cocos.openharmony/entry/ets/common/PortProxy';
globalThis.oh = globalThis.oh || {};
if (!console.assert) {
    console.assert = function (r1404, s1404) {
        if (!r1404) {
            throw new Error(s1404);
        }
    };
}
const nativeContext = nativerender.getContext(ContextType.WORKER_INIT);
nativeContext.workerInit();
const nativeEditBox = nativerender.getContext(ContextType.EDITBOX_UTILS);
const nativeWebView = nativerender.getContext(ContextType.WEBVIEW_UTILS);
const nativeVideo = nativerender.getContext(ContextType.VIDEO_UTILS);
let uiPort = new PortProxy(worker.parentPort);
nativeContext.postMessage = function (o1404, p1404) {
    uiPort.postMessage(o1404, p1404);
};
nativeContext.postSyncMessage = async function (l1404, m1404) {
    const n1404 = await uiPort.postSyncMessage(l1404, m1404);
    return n1404;
};
nativeContext.setPostMessageFunction.call(nativeContext, nativeContext.postMessage);
nativeContext.setPostSyncMessageFunction.call(nativeContext, nativeContext.postSyncMessage);
var renderContext = undefined;
uiPort._messageHandle = function (e1404) {
    var f1404 = e1404.data;
    var g1404 = f1404.data;
    switch (g1404.name) {
        case "onXCLoad":
            const h1404 = nativerender.getContext(ContextType.NATIVE_RENDER_API);
            h1404.nativeEngineInit();
            launchEngine().then(() => {
                console.info('launch CC engine finished');
            }).catch(k1404 => {
                console.error('launch CC engine failed');
            });
            globalThis.oh.postMessage = nativeContext.postMessage;
            globalThis.oh.postSyncMessage = nativeContext.postSyncMessage;
            h1404.nativeEngineStart();
            break;
        case "onTextInput":
            nativeEditBox.onTextChange(g1404.param);
            break;
        case "onComplete":
            nativeEditBox.onComplete(g1404.param);
            break;
        case "onPageBegin":
            nativeWebView.shouldStartLoading(g1404.param.viewTag, g1404.param.url);
            break;
        case "onPageEnd":
            nativeWebView.finishLoading(g1404.param.viewTag, g1404.param.url);
            break;
        case "onErrorReceive":
            nativeWebView.failLoading(g1404.param.viewTag, g1404.param.url);
            break;
        case "onVideoEvent":
            if (globalThis.oh && typeof globalThis.oh.onVideoEvent === "function") {
                globalThis.oh.onVideoEvent(g1404.param.videoTag, g1404.param.videoEvent, g1404.param.args);
            }
            else {
                nativeVideo.onVideoEvent(g1404.param.videoTag, g1404.param.videoEvent, g1404.param.args);
            }
            break;
        default:
            console.error("cocos worker: message type unknown");
            break;
    }
};
