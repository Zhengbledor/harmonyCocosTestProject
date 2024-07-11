import type { DedicatedWorkerGlobalScope } from "@ohos:worker";
import type { MessageEvent } from "@ohos:worker";
export class PortProxy {
    private autoId: number = 0;
    public actionHandleMap = {};
    private port: DedicatedWorkerGlobalScope = null;
    public _messageHandle?: (e: MessageEvent<any>) => void;
    constructor(b1403) {
        this.port = b1403;
        this.port.onmessage = this.onMessage.bind(this);
    }
    public onMessage(x1402) {
        let y1402 = x1402['data'];
        if (y1402.type != "syncResult" && this._messageHandle) {
            this._messageHandle(x1402);
        }
        else if (y1402.type == "syncResult") {
            const { id: z1402, response: a1403 } = y1402.data;
            if (!this.actionHandleMap[z1402]) {
                return;
            }
            this.actionHandleMap[z1402].call(this, a1403);
            delete this.actionHandleMap[z1402];
        }
    }
    public postReturnMessage(v1402: any, w1402: any) {
        if (v1402.type == "sync" && w1402 != null && w1402 != undefined) {
            this.port.postMessage({ type: "syncResult", data: { id: v1402.data.cbId, response: w1402 } });
        }
    }
    public postMessage(t1402: string, u1402: any) {
        this.port.postMessage({ type: "async", data: { name: t1402, param: u1402 } });
    }
    public postSyncMessage(k1402: string, l1402: any) {
        const m1402 = this.autoId++;
        return new Promise((o1402, p1402) => {
            const q1402 = {
                type: "sync",
                data: { cbId: m1402, name: k1402, param: l1402 }
            };
            this.port.postMessage(q1402);
            this.actionHandleMap[m1402] = (s1402) => {
                o1402(s1402);
            };
        });
    }
}
