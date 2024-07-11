import worker from "@ohos:worker";
import { Constants } from "@bundle:com.cocos.openharmony/entry/ets/common/Constants";
export class WorkerManager {
    private static instance: WorkerManager;
    private cocosWorker: worker.Worker;
    private constructor() {
        this.cocosWorker =
            new worker.Worker("/entry/ets/workers/cocos_worker.js", { type: "classic", name: "CocosWorker" });
        this.cocosWorker.onerror = (f1402) => {
            let g1402 = f1402.message;
            let h1402 = f1402.filename;
            let i1402 = f1402.lineno;
            let j1402 = f1402.colno;
            console.error(`on Error ${g1402} ${h1402} ${i1402} ${j1402}`);
        };
    }
    public static getInstance(): WorkerManager {
        if (AppStorage.Get(Constants.APP_KEY_WORKER_MANAGER) == null) {
            AppStorage.SetOrCreate(Constants.APP_KEY_WORKER_MANAGER, new WorkerManager);
        }
        return AppStorage.Get(Constants.APP_KEY_WORKER_MANAGER) as WorkerManager;
    }
    public getWorker(): worker.Worker {
        return this.cocosWorker;
    }
}
