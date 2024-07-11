import UIAbility from "@ohos:app.ability.UIAbility";
import nativerender from "@app:com.cocos.openharmony/entry/cocos";
import { ContextType } from "@bundle:com.cocos.openharmony/entry/ets/common/Constants";
import type window from "@ohos:window";
const nativeContext = nativerender.getContext(ContextType.ENGINE_UTILS);
const nativeAppLifecycle = nativerender.getContext(ContextType.APP_LIFECYCLE);
export default class MainAbility extends UIAbility {
    onCreate(i1403, j1403) {
        globalThis.abilityWant = i1403;
        nativeAppLifecycle.onCreate();
        nativeContext.resourceManagerInit(this.context.resourceManager);
        let k1403 = "createAudioSession";
    }
    onDestroy() {
        nativeAppLifecycle.onDestroy();
    }
    onWindowStageCreate(c1403) {
        c1403.loadContent("pages/index", (g1403, h1403) => {
            if (g1403.code) {
                console.error('Failed to load the content. Cause:' + JSON.stringify(g1403));
                return;
            }
        });
        c1403.getMainWindow().then((f1403: window.Window) => {
            f1403.setWindowSystemBarEnable([]);
        });
        nativeContext.writablePathInit(this.context.cacheDir);
    }
    onWindowStageDestroy() {
    }
    onForeground() {
        nativeAppLifecycle.onShow();
    }
    onBackground() {
        nativeAppLifecycle.onHide();
    }
}
;
