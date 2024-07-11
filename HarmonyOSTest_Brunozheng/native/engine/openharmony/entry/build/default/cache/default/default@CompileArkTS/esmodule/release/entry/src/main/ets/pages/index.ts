if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    workPort?: PortProxy;
}
import nativerender from "@app:com.cocos.openharmony/entry/cocos";
import { WorkerManager } from "@bundle:com.cocos.openharmony/entry/ets/cocos/WorkerManager";
import { ContextType } from "@bundle:com.cocos.openharmony/entry/ets/common/Constants";
import { PortProxy } from "@bundle:com.cocos.openharmony/entry/ets/common/PortProxy";
class Index extends ViewPU {
    constructor(x1403, y1403, z1403, a1404 = -1, b1404 = undefined, c1404) {
        super(x1403, z1403, a1404, c1404);
        if (typeof b1404 === "function") {
            this.paramsGenerator_ = b1404;
        }
        this.workPort = new PortProxy(WorkerManager.getInstance().getWorker());
        this.setInitiallyProvidedValue(y1403);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(w1403: Index_Params) {
        if (w1403.workPort !== undefined) {
            this.workPort = w1403.workPort;
        }
    }
    updateStateVars(v1403: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(u1403) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private workPort: PortProxy;
    onPageShow(): void {
        console.log('[LIFECYCLE-Page] cocos onPageShow');
        nativerender.getContext(ContextType.JSPAGE_LIFECYCLE).onPageShow();
    }
    onPageHide(): void {
        console.log('[LIFECYCLE-Page] cocos onPageHide');
        nativerender.getContext(ContextType.JSPAGE_LIFECYCLE).onPageHide();
    }
    initialRender() {
        this.observeComponentCreation2((s1403, t1403) => {
            Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center });
            Flex.width('100%');
            Flex.height('100%');
        }, Flex);
        this.observeComponentCreation2((n1403, o1403) => {
            XComponent.create({ id: 'xcomponentId', type: 'surface', libraryname: 'cocos' }, "com.cocos.openharmony/entry");
            XComponent.onLoad((r1403) => {
                this.workPort.postMessage("onXCLoad", "XComponent");
            });
            XComponent.onDestroy(() => {
                console.log('cocos onDestroy');
            });
        }, XComponent);
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.cocos.openharmony", moduleName: "entry", pagePath: "pages/index", pageFullPath: "entry/src/main/ets/pages/index", integratedHsp: "false" });
