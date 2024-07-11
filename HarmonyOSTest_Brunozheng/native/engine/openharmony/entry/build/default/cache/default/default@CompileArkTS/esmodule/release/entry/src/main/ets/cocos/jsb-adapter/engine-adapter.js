(function () {
    function r59(s59, t59, u59) {
        function v59(y59, z59) {
            if (!t59[y59]) {
                if (!s59[y59]) {
                    var a60 = "function" == typeof require && require;
                    if (!z59 && a60)
                        return a60(y59, !0);
                    if (w59)
                        return w59(y59, !0);
                    var b60 = new Error("Cannot find module '" + y59 + "'");
                    throw b60.code = "MODULE_NOT_FOUND", b60;
                }
                var c60 = t59[y59] = {
                    exports: {}
                };
                s59[y59][0].call(c60.exports, function (e60) {
                    var f60 = s59[y59][1][e60];
                    return v59(f60 || e60);
                }, c60, c60.exports, r59, s59, t59, u59);
            }
            return t59[y59].exports;
        }
        for (var w59 = "function" == typeof require && require, x59 = 0; x59 < u59.length; x59++)
            v59(u59[x59]);
        return v59;
    }
    return r59;
})()({
    1: [function (o59, p59, q59) {
            "use strict";
            o59('./jsb-assets-manager.js');
            o59('./jsb-game.js');
            o59('./jsb-gfx.js');
            o59('./jsb-loader.js');
            if (window.oh) {
                o59('./jsb-videoplayer-openharmony.js');
            }
            else {
                o59('./jsb-videoplayer.js');
            }
            o59('./jsb-webview.js');
            o59('./jsb-editbox.js');
            o59('./jsb-editor-support.js');
            o59('./jsb-spine-skeleton.js');
            o59('./jsb-dragonbones.js');
            if (cc.physics && cc.physics.PhysicsSystem.PHYSICS_PHYSX) {
                o59('./jsb-physics.js');
            }
        }, {
            "./jsb-assets-manager.js": 2,
            "./jsb-dragonbones.js": 4,
            "./jsb-editbox.js": 5,
            "./jsb-editor-support.js": 6,
            "./jsb-game.js": 8,
            "./jsb-gfx.js": 9,
            "./jsb-loader.js": 10,
            "./jsb-physics.js": 11,
            "./jsb-spine-skeleton.js": 12,
            "./jsb-videoplayer-openharmony.js": 13,
            "./jsb-videoplayer.js": 14,
            "./jsb-webview.js": 15
        }],
    2: [function (l59, m59, n59) {
            "use strict";
            if (jsb.AssetsManager) {
                jsb.AssetsManager.State = {
                    UNINITED: 0,
                    UNCHECKED: 1,
                    PREDOWNLOAD_VERSION: 2,
                    DOWNLOADING_VERSION: 3,
                    VERSION_LOADED: 4,
                    PREDOWNLOAD_MANIFEST: 5,
                    DOWNLOADING_MANIFEST: 6,
                    MANIFEST_LOADED: 7,
                    NEED_UPDATE: 8,
                    READY_TO_UPDATE: 9,
                    UPDATING: 10,
                    UNZIPPING: 11,
                    UP_TO_DATE: 12,
                    FAIL_TO_UPDATE: 13
                };
                jsb.Manifest.DownloadState = {
                    UNSTARTED: 0,
                    DOWNLOADING: 1,
                    SUCCESSED: 2,
                    UNMARKED: 3
                };
                jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST = 0;
                jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST = 1;
                jsb.EventAssetsManager.ERROR_PARSE_MANIFEST = 2;
                jsb.EventAssetsManager.NEW_VERSION_FOUND = 3;
                jsb.EventAssetsManager.ALREADY_UP_TO_DATE = 4;
                jsb.EventAssetsManager.UPDATE_PROGRESSION = 5;
                jsb.EventAssetsManager.ASSET_UPDATED = 6;
                jsb.EventAssetsManager.ERROR_UPDATING = 7;
                jsb.EventAssetsManager.UPDATE_FINISHED = 8;
                jsb.EventAssetsManager.UPDATE_FAILED = 9;
                jsb.EventAssetsManager.ERROR_DECOMPRESS = 10;
            }
        }, {}],
    3: [function (y57, z57, a58) {
            "use strict";
            const { getUserDataPath: b58, readJsonSync: c58, makeDirSync: d58, writeFileSync: e58, deleteFile: f58, rmdirSync: g58 } = y57('./jsb-fs-utils');
            let h58 = null;
            let i58 = false;
            const j58 = /^\w+:\/\/.*/;
            const k58 = {
                cacheDir: 'gamecaches',
                cachedFileName: 'cacheList.json',
                deleteInterval: 500,
                writeFileInterval: 2000,
                cachedFiles: null,
                version: '1.1',
                getCache(k59) {
                    this.updateLastTime(k59);
                    return this.cachedFiles.has(k59) ? `${this.cacheDir}/${this.cachedFiles.get(k59).url}` : '';
                },
                getTemp(j59) {
                    return '';
                },
                init() {
                    this.cacheDir = `${b58()}/${this.cacheDir}`;
                    const h59 = `${this.cacheDir}/${this.cachedFileName}`;
                    const i59 = c58(h59);
                    if (i59 instanceof Error || !i59.version || i59.version !== this.version) {
                        if (!(i59 instanceof Error))
                            g58(this.cacheDir, true);
                        this.cachedFiles = new cc.AssetManager.Cache();
                        d58(this.cacheDir, true);
                        e58(h59, JSON.stringify({
                            files: this.cachedFiles._map,
                            version: this.version
                        }), 'utf8');
                    }
                    else {
                        this.cachedFiles = new cc.AssetManager.Cache(i59.files);
                    }
                },
                updateLastTime(f59) {
                    if (this.cachedFiles.has(f59)) {
                        const g59 = this.cachedFiles.get(f59);
                        g59.lastTime = Date.now();
                    }
                },
                _write() {
                    h58 = null;
                    e58(`${this.cacheDir}/${this.cachedFileName}`, JSON.stringify({
                        files: this.cachedFiles._map,
                        version: this.version
                    }), 'utf8');
                },
                writeCacheFile() {
                    if (!h58) {
                        h58 = setTimeout(this._write.bind(this), this.writeFileInterval);
                    }
                },
                cacheFile(c59, d59, e59) {
                    this.cachedFiles.add(c59, {
                        bundle: e59,
                        url: d59,
                        lastTime: Date.now()
                    });
                    this.writeCacheFile();
                },
                clearCache() {
                    g58(this.cacheDir, true);
                    this.cachedFiles = new cc.AssetManager.Cache();
                    d58(this.cacheDir, true);
                    clearTimeout(h58);
                    this._write();
                    cc.assetManager.bundles.forEach(b59 => {
                        if (j58.test(b59.base))
                            this.makeBundleFolder(b59.name);
                    });
                },
                clearLRU() {
                    if (i58)
                        return;
                    i58 = true;
                    const p58 = [];
                    const q58 = this;
                    this.cachedFiles.forEach((y58, z58) => {
                        if (y58.bundle === 'internal')
                            return;
                        p58.push({
                            originUrl: z58,
                            url: this.getCache(z58),
                            lastTime: y58.lastTime
                        });
                    });
                    p58.sort((w58, x58) => w58.lastTime - x58.lastTime);
                    p58.length = Math.floor(p58.length / 3);
                    if (p58.length === 0)
                        return;
                    for (let u58 = 0, v58 = p58.length; u58 < v58; u58++) {
                        this.cachedFiles.remove(p58[u58].originUrl);
                    }
                    clearTimeout(h58);
                    this._write();
                    function o58() {
                        const t58 = p58.pop();
                        f58(t58.url);
                        if (p58.length > 0) {
                            setTimeout(o58, q58.deleteInterval);
                        }
                        else {
                            i58 = false;
                        }
                    }
                    setTimeout(o58, q58.deleteInterval);
                },
                removeCache(m58) {
                    if (this.cachedFiles.has(m58)) {
                        const n58 = this.getCache(m58);
                        this.cachedFiles.remove(m58);
                        clearTimeout(h58);
                        this._write();
                        f58(n58);
                    }
                },
                makeBundleFolder(l58) {
                    d58(`${this.cacheDir}/${l58}`, true);
                }
            };
            cc.assetManager.cacheManager = z57.exports = k58;
        }, {
            "./jsb-fs-utils": 7
        }],
    4: [function (j50, k50, l50) {
            "use strict";
            const m50 = j50('./jsb-cache-manager');
            (function () {
                if (globalThis.dragonBones === undefined || globalThis.middleware === undefined)
                    return;
                const o50 = cc.internal.ArmatureDisplay;
                if (o50 === undefined)
                    return;
                const p50 = globalThis.dragonBones;
                const q50 = globalThis.middleware;
                Object.defineProperty(p50, 'timeScale', {
                    get() {
                        return this._timeScale;
                    },
                    set(w57) {
                        this._timeScale = w57;
                        const x57 = this.CCFactory.getInstance();
                        x57.setTimeScale(w57);
                    },
                    configurable: true
                });
                q50.generateGetSet(p50);
                const r50 = cc.color(0, 0, 255, 255);
                const s50 = cc.color(255, 0, 0, 255);
                const t50 = cc.color(0, 255, 0, 255);
                p50.EventObject.START = 'start';
                p50.EventObject.LOOP_COMPLETE = 'loopComplete';
                p50.EventObject.COMPLETE = 'complete';
                p50.EventObject.FADE_IN = 'fadeIn';
                p50.EventObject.FADE_IN_COMPLETE = 'fadeInComplete';
                p50.EventObject.FADE_OUT = 'fadeOut';
                p50.EventObject.FADE_OUT_COMPLETE = 'fadeOutComplete';
                p50.EventObject.FRAME_EVENT = 'frameEvent';
                p50.EventObject.SOUND_EVENT = 'soundEvent';
                p50.DragonBones = {
                    ANGLE_TO_RADIAN: Math.PI / 180,
                    RADIAN_TO_ANGLE: 180 / Math.PI
                };
                const u50 = p50.CCFactory.prototype;
                u50.createArmatureNode = function (s57, t57, u57) {
                    u57 = u57 || new cc.Node();
                    let v57 = u57.getComponent(o50);
                    if (!v57) {
                        v57 = u57.addComponent(o50);
                    }
                    u57.name = t57;
                    v57._armatureName = t57;
                    v57._dragonAsset = s57.dragonAsset;
                    v57._dragonAtlasAsset = s57.dragonAtlasAsset;
                    v57._init();
                    return v57;
                };
                const v50 = u50.replaceSkin;
                u50.replaceSkin = function (o57, p57, q57, r57) {
                    if (q57 === undefined)
                        q57 = false;
                    r57 = r57 || [];
                    v50.call(this, o57, p57, q57, r57);
                };
                const w50 = u50.changeSkin;
                u50.changeSkin = function (l57, m57, n57) {
                    w50.call(this, l57, m57, n57);
                };
                p50.CCFactory.getInstance = function () {
                    return p50.CCFactory.getFactory();
                };
                const x50 = p50.AnimationState.prototype;
                const y50 = x50.isPlaying;
                Object.defineProperty(x50, 'isPlaying', {
                    get() {
                        return y50.call(this);
                    }
                });
                const z50 = p50.Armature.prototype;
                z50.addEventListener = function (i57, j57, k57) {
                    this.__persistentDisplay__ = this.getDisplay();
                    this.__persistentDisplay__.on(i57, j57, k57);
                };
                z50.removeEventListener = function (f57, g57, h57) {
                    this.__persistentDisplay__ = this.getDisplay();
                    this.__persistentDisplay__.off(f57, g57, h57);
                };
                const a51 = p50.CCArmatureDisplay.prototype;
                Object.defineProperty(a51, 'node', {
                    get() {
                        return this;
                    }
                });
                a51.getRootNode = function () {
                    const e57 = this.getRootDisplay();
                    return e57 && e57._ccNode;
                };
                a51.convertToWorldSpace = function (a57) {
                    let b57 = this.convertToRootSpace(a57.x, a57.y);
                    b57 = cc.v3(b57.x, b57.y, 0);
                    const c57 = this.getRootNode();
                    if (!c57)
                        return b57;
                    const d57 = c57._uiProps.uiTransformComp.convertToWorldSpaceAR(b57);
                    return d57;
                };
                a51.initEvent = function () {
                    if (this._eventTarget) {
                        return;
                    }
                    this._eventTarget = new cc.EventTarget();
                    this.setDBEventCallback(function (z56) {
                        this._eventTarget.emit(z56.type, z56);
                    });
                };
                a51.on = function (v56, w56, x56) {
                    this.initEvent();
                    this._eventTarget.on(v56, w56, x56);
                    this.addDBEventListener(v56, w56);
                };
                a51.off = function (s56, t56, u56) {
                    this.initEvent();
                    this._eventTarget.off(s56, t56, u56);
                    this.removeDBEventListener(s56, t56);
                };
                a51.once = function (p56, q56, r56) {
                    this.initEvent();
                    this._eventTarget.once(p56, q56, r56);
                    this.addDBEventListener(p56, q56);
                };
                const b51 = cc.internal.DragonBonesAtlasAsset.prototype;
                let c51 = 1;
                const d51 = {};
                const e51 = new WeakMap();
                const f51 = {};
                b51.removeRecordTexture = function (m56) {
                    if (!m56)
                        return;
                    delete f51[m56.image.url];
                    const n56 = m56.__textureIndex__;
                    if (n56) {
                        const o56 = d51[n56];
                        if (o56 && e51.has(o56)) {
                            e51.delete(o56);
                            delete d51[n56];
                        }
                    }
                };
                b51.recordTexture = function () {
                    if (this._texture && this._oldTexture !== this._texture) {
                        this.removeRecordTexture(this._oldTexture);
                        const l56 = d51[c51] = {
                            key: c51
                        };
                        e51.set(l56, this._texture);
                        this._oldTexture = this._texture;
                        this._texture.__textureIndex__ = c51;
                        c51++;
                    }
                };
                b51.getTextureByIndex = function (j56) {
                    const k56 = d51[j56];
                    if (!k56)
                        return null;
                    return e51.get(k56);
                };
                b51.updateTextureAtlasData = function (e56) {
                    const f56 = this._texture.image.url;
                    const g56 = f51[f56];
                    let h56;
                    if (g56) {
                        h56 = g56.index;
                        this._textureAtlasData = e56.getTextureAtlasDataByIndex(g56.name, h56);
                        const i56 = d51[g56.index];
                        e51.set(i56, this._texture);
                        this._texture.__textureIndex__ = h56;
                        if (this._textureAtlasData) {
                            return;
                        }
                    }
                    else {
                        this.recordTexture();
                    }
                    h56 = this._texture.__textureIndex__;
                    this.jsbTexture = new q50.Texture2D();
                    this.jsbTexture.setRealTextureIndex(h56);
                    this.jsbTexture.setPixelsWide(this._texture.width);
                    this.jsbTexture.setPixelsHigh(this._texture.height);
                    this.jsbTexture.setRealTexture(this._texture);
                    this._textureAtlasData = e56.parseTextureAtlasData(this.atlasJson, this.jsbTexture, this._uuid);
                    f51[f56] = {
                        name: this._textureAtlasData.name,
                        index: h56
                    };
                };
                b51.init = function (c56) {
                    this._factory = c56;
                    if (!this._uuid) {
                        const d56 = JSON.parse(this.atlasJson);
                        this._uuid = d56.name;
                    }
                    if (this._textureAtlasData) {
                        c56.addTextureAtlasData(this._textureAtlasData, this._uuid);
                    }
                    else {
                        this.updateTextureAtlasData(c56);
                    }
                };
                b51._clear = function (b56) {
                    if (this._factory) {
                        this._factory.removeTextureAtlasData(this._uuid, true);
                        this._factory.removeDragonBonesDataByUUID(this._uuid, true);
                    }
                    this._textureAtlasData = null;
                    if (!b56) {
                        this.recordTexture();
                    }
                };
                b51.destroy = function () {
                    this.removeRecordTexture(this._texture);
                    this._clear(true);
                    cc.Asset.prototype.destroy.call(this);
                };
                const g51 = cc.internal.DragonBonesAsset.prototype;
                g51.init = function (v55, w55) {
                    this._factory = v55 || p50.CCFactory.getInstance();
                    if (!this._uuid && this.dragonBonesJson) {
                        const a56 = JSON.parse(this.dragonBonesJson);
                        this._uuid = a56.name;
                    }
                    const x55 = `${this._uuid}#${w55}`;
                    const y55 = this._factory.getDragonBonesData(x55);
                    if (y55)
                        return x55;
                    let z55 = null;
                    if (this.dragonBonesJson) {
                        z55 = this.dragonBonesJson;
                    }
                    else {
                        z55 = m50.getCache(this.nativeUrl) || this.nativeUrl;
                    }
                    this._factory.parseDragonBonesDataByPath(z55, x55);
                    return x55;
                };
                const h51 = p50.ArmatureCacheMgr.getInstance();
                p50.armatureCacheMgr = h51;
                g51._clear = function () {
                    if (this._factory) {
                        this._factory.removeDragonBonesDataByUUID(this._uuid, true);
                    }
                    h51.removeArmatureCache(this._uuid);
                };
                const i51 = cc.internal.UIRenderer.prototype;
                const j51 = cc.internal.ArmatureDisplay.prototype;
                const k51 = cc.internal.ArmatureDisplay.AnimationCacheMode;
                const l51 = cc.internal.ArmatureSystem;
                j51.initFactory = function () {
                    this._factory = p50.CCFactory.getFactory();
                };
                Object.defineProperty(j51, 'armatureName', {
                    get() {
                        return this._armatureName;
                    },
                    set(s55) {
                        this._armatureName = s55;
                        const t55 = this.getAnimationNames(this._armatureName);
                        if (!this.animationName || t55.indexOf(this.animationName) < 0) {
                            this.animationName = '';
                        }
                        const u55 = this._armature;
                        if (this._armature) {
                            if (!this.isAnimationCached()) {
                                this._factory.remove(this._armature);
                            }
                            this._armature = null;
                        }
                        this._nativeDisplay = null;
                        this._refresh();
                        if (u55 && u55 !== this._armature) {
                            u55.dispose();
                        }
                        if (this._armature && !this.isAnimationCached() && this.shouldSchedule) {
                            this._factory.add(this._armature);
                        }
                    },
                    visible: false
                });
                Object.defineProperty(j51, 'premultipliedAlpha', {
                    get() {
                        if (this._premultipliedAlpha === undefined) {
                            return false;
                        }
                        return this._premultipliedAlpha;
                    },
                    set(r55) {
                        this._premultipliedAlpha = r55;
                        if (this._nativeDisplay) {
                            this._nativeDisplay.setOpacityModifyRGB(this._premultipliedAlpha);
                        }
                    }
                });
                const m51 = j51._initDebugDraw;
                j51._initDebugDraw = function () {
                    m51.call(this);
                    if (this._armature && !this.isAnimationCached()) {
                        this._nativeDisplay.setDebugBonesEnabled(this.debugBones);
                    }
                };
                j51._buildArmature = function () {
                    if (!this.dragonAsset || !this.dragonAtlasAsset || !this.armatureName) {
                        return;
                    }
                    if (this._nativeDisplay) {
                        this._nativeDisplay.dispose();
                        this._nativeDisplay._comp = null;
                        this._nativeDisplay = null;
                    }
                    const e55 = this.dragonAtlasAsset._uuid;
                    this._armatureKey = this.dragonAsset.init(this._factory, e55);
                    if (this.isAnimationCached()) {
                        const q55 = this._cacheMode === k51.SHARED_CACHE;
                        this._nativeDisplay = new p50.CCArmatureCacheDisplay(this.armatureName, this._armatureKey, e55, q55);
                        if (this.shouldSchedule)
                            this._nativeDisplay.beginSchedule();
                        this._armature = this._nativeDisplay.armature();
                    }
                    else {
                        this._nativeDisplay = this._factory.buildArmatureDisplay(this.armatureName, this._armatureKey, '', e55);
                        if (!this._nativeDisplay) {
                            return;
                        }
                        this._nativeDisplay.setDebugBonesEnabled(this.debugBones);
                        this._armature = this._nativeDisplay.armature();
                        this._armature.animation.timeScale = this.timeScale;
                        if (this.shouldSchedule)
                            this._factory.add(this._armature);
                    }
                    const f55 = this._eventTarget._callbackTable;
                    const g55 = function () { };
                    for (const o55 in f55) {
                        const p55 = f55[o55];
                        if (!p55 || !p55.callbackInfos || !p55.callbackInfos.length)
                            continue;
                        if (this.isAnimationCached()) {
                            this._nativeDisplay.addDBEventListener(o55);
                        }
                        else {
                            this._nativeDisplay.addDBEventListener(o55, g55);
                        }
                    }
                    this._preCacheMode = this._cacheMode;
                    this._nativeDisplay._ccNode = this.node;
                    this._nativeDisplay._comp = this;
                    this._nativeDisplay._eventTarget = this._eventTarget;
                    this._sharedBufferOffset = this._nativeDisplay.getSharedBufferOffset();
                    this._sharedBufferOffset[0] = 0;
                    this._useAttach = false;
                    this._nativeDisplay.setOpacityModifyRGB(this.premultipliedAlpha);
                    const h55 = this.color;
                    this._nativeDisplay.setColor(h55.r, h55.g, h55.b, h55.a);
                    this._nativeDisplay.setDBEventCallback(function (n55) {
                        this._eventTarget.emit(n55.type, n55);
                    });
                    const i55 = this.getMaterialTemplate();
                    this._nativeDisplay.setMaterial(i55);
                    this._nativeDisplay.setRenderEntity(this._renderEntity.nativeObj);
                    this.attachUtil.init(this);
                    if (this._armature) {
                        const l55 = this._armature.armatureData;
                        const m55 = l55.aABB;
                        this.node._uiProps.uiTransformComp.setContentSize(m55.width, m55.height);
                    }
                    if (this.animationName) {
                        this.playAnimation(this.animationName, this.playTimes);
                    }
                    this.markForUpdateRenderData();
                };
                j51._updateColor = function () {
                    if (this._nativeDisplay) {
                        const d55 = this.color;
                        this._nativeDisplay.setColor(d55.r, d55.g, d55.b, d55.a);
                    }
                };
                j51.playAnimation = function (b55, c55) {
                    this.playTimes = c55 === undefined ? -1 : c55;
                    this.animationName = b55;
                    if (this._nativeDisplay) {
                        if (this.isAnimationCached()) {
                            return this._nativeDisplay.playAnimation(b55, this.playTimes);
                        }
                        else if (this._armature) {
                            return this._armature.animation.play(b55, this.playTimes);
                        }
                    }
                    return null;
                };
                j51.updateAnimationCache = function (a55) {
                    if (!this.isAnimationCached())
                        return;
                    if (this._nativeDisplay) {
                        if (a55) {
                            this._nativeDisplay.updateAnimationCache(a55);
                        }
                        else {
                            this._nativeDisplay.updateAllAnimationCache();
                        }
                    }
                };
                j51.invalidAnimationCache = function () {
                    if (!this.isAnimationCached())
                        return;
                    if (this._nativeDisplay) {
                        this._nativeDisplay.updateAllAnimationCache();
                    }
                };
                const n51 = i51.onEnable;
                j51.onEnable = function () {
                    if (n51) {
                        n51.call(this);
                    }
                    this.shouldSchedule = true;
                    if (this._armature) {
                        if (this.isAnimationCached()) {
                            this._nativeDisplay.onEnable();
                        }
                        else {
                            this._factory.add(this._armature);
                        }
                    }
                    this._flushAssembler();
                    l51.getInstance().add(this);
                    q50.retain();
                };
                const o51 = i51.onDisable;
                j51.onDisable = function () {
                    if (o51) {
                        o51.call(this);
                    }
                    if (this._armature && !this.isAnimationCached()) {
                        this._factory.remove(this._armature);
                    }
                    l51.getInstance().remove(this);
                    q50.release();
                };
                const p51 = j51.updateMaterial;
                j51.updateMaterial = function () {
                    p51.call(this);
                    if (this._nativeDisplay) {
                        const z54 = this.getMaterialTemplate();
                        this._nativeDisplay.setMaterial(z54);
                    }
                };
                j51.once = function (w54, x54, y54) {
                    if (this._nativeDisplay) {
                        if (this.isAnimationCached()) {
                            this._nativeDisplay.addDBEventListener(w54);
                        }
                        else {
                            this._nativeDisplay.addDBEventListener(w54, x54);
                        }
                    }
                    this._eventTarget.once(w54, x54, y54);
                };
                j51.addEventListener = function (t54, u54, v54) {
                    if (this._nativeDisplay) {
                        if (this.isAnimationCached()) {
                            this._nativeDisplay.addDBEventListener(t54);
                        }
                        else {
                            this._nativeDisplay.addDBEventListener(t54, u54);
                        }
                    }
                    this._eventTarget.on(t54, u54, v54);
                };
                j51.removeEventListener = function (q54, r54, s54) {
                    if (this._nativeDisplay) {
                        if (this.isAnimationCached()) {
                            this._nativeDisplay.removeDBEventListener(q54);
                        }
                        else {
                            this._nativeDisplay.removeDBEventListener(q54, r54);
                        }
                    }
                    this._eventTarget.off(q54, r54, s54);
                };
                const q51 = j51.onDestroy;
                j51.onDestroy = function () {
                    q51.call(this);
                    if (this._nativeDisplay) {
                        this._nativeDisplay.dispose();
                        this._nativeDisplay._comp = null;
                        this._nativeDisplay = null;
                    }
                };
                j51.setAnimationCacheMode = function (p54) {
                    if (this._preCacheMode !== p54) {
                        this._cacheMode = p54;
                        this._buildArmature();
                        if (this._armature && !this.isAnimationCached() && this.shouldSchedule) {
                            this._factory.add(this._armature);
                        }
                        this._updateSocketBindings();
                        this.markForUpdateRenderData();
                    }
                };
                j51.updateAnimation = function () {
                    const b54 = this._nativeDisplay;
                    if (!b54)
                        return;
                    const c54 = this.node;
                    if (!c54)
                        return;
                    if (this.__preColor__ === undefined || !this.color.equals(this.__preColor__)) {
                        const o54 = this.color;
                        b54.setColor(o54.r, o54.g, o54.b, o54.a);
                        this.__preColor__ = o54;
                    }
                    const d54 = this.socketNodes;
                    if (!this._useAttach && d54.size > 0) {
                        this._useAttach = true;
                        b54.setAttachEnabled(true);
                    }
                    this.markForUpdateRenderData();
                    if (!this.isAnimationCached() && this._debugDraw && this.debugBones) {
                        const e54 = this._nativeDisplay;
                        this._debugData = this._debugData || e54.getDebugData();
                        if (!this._debugData)
                            return;
                        const f54 = this._debugDraw;
                        f54.clear();
                        const g54 = this._debugData;
                        let h54 = 0;
                        f54.lineWidth = 5;
                        f54.strokeColor = s50;
                        f54.fillColor = r50;
                        const i54 = g54[h54++];
                        for (let j54 = 0; j54 < i54; j54 += 4) {
                            const k54 = g54[h54++];
                            const l54 = g54[h54++];
                            const m54 = g54[h54++];
                            const n54 = g54[h54++];
                            f54.moveTo(k54, l54);
                            f54.lineTo(m54, n54);
                            f54.stroke();
                            f54.circle(k54, l54, Math.PI * 2);
                            f54.fill();
                            if (j54 === 0) {
                                f54.fillColor = t50;
                            }
                        }
                    }
                };
                const r51 = cc.mat4();
                j51._render = function () { };
                j51._updateBatch = function () {
                    if (this.nativeDisplay) {
                        this.nativeDisplay.setBatchEnabled(this.enableBatch);
                        this.markForUpdateRenderData();
                    }
                };
                j51.syncAttachedNode = function () {
                    const o53 = this._nativeDisplay;
                    if (!o53)
                        return;
                    const p53 = this._sharedBufferOffset;
                    if (!p53)
                        return;
                    const q53 = this.sockets;
                    if (q53.length > 0) {
                        const r53 = q50.attachInfoMgr;
                        const s53 = r53.attachInfo;
                        const t53 = p53[0];
                        p53[0] = 0;
                        const u53 = this.socketNodes;
                        for (let v53 = q53.length - 1; v53 >= 0; v53--) {
                            const w53 = q53[v53];
                            const x53 = w53.target;
                            const y53 = w53.boneIndex;
                            if (!x53)
                                continue;
                            if (!x53.isValid) {
                                u53.delete(w53.path);
                                q53.splice(v53, 1);
                                continue;
                            }
                            const z53 = r51;
                            const a54 = t53 + y53 * 16;
                            z53.m00 = s53[a54];
                            z53.m01 = s53[a54 + 1];
                            z53.m04 = s53[a54 + 4];
                            z53.m05 = s53[a54 + 5];
                            z53.m12 = s53[a54 + 12];
                            z53.m13 = s53[a54 + 13];
                            x53.matrix = z53;
                        }
                    }
                };
                const s51 = cc.internal.DragonBonesAssembler;
                s51.createData = function (n53) { };
                s51.updateRenderData = function (m53) {
                    m53._render();
                };
                s51.fillBuffers = function (k53, l53) { };
            })();
        }, {
            "./jsb-cache-manager": 3
        }],
    5: [function (q48, r48, s48) {
            "use strict";
            (function () {
                if (!(cc && cc.internal && cc.internal.EditBox)) {
                    return;
                }
                const w48 = cc.internal.EditBox;
                const x48 = w48.KeyboardReturnType;
                const y48 = w48.InputMode;
                const z48 = w48.InputFlag;
                const a49 = cc.mat4();
                function u48(i50) {
                    switch (i50) {
                        case y48.EMAIL_ADDR:
                            return 'email';
                        case y48.NUMERIC:
                        case y48.DECIMAL:
                            return 'number';
                        case y48.PHONE_NUMBER:
                            return 'phone';
                        case y48.URL:
                            return 'url';
                        case y48.SINGLE_LINE:
                        case y48.ANY:
                        default:
                            return 'text';
                    }
                }
                function v48(h50) {
                    switch (h50) {
                        case x48.DEFAULT:
                        case x48.DONE:
                            return 'done';
                        case x48.SEND:
                            return 'send';
                        case x48.SEARCH:
                            return 'search';
                        case x48.GO:
                            return 'go';
                        case x48.NEXT:
                            return 'next';
                    }
                    return 'done';
                }
                const b49 = w48._EditBoxImpl;
                class c49 extends b49 {
                    init(g50) {
                        if (!g50) {
                            cc.error('EditBox init failed');
                            return;
                        }
                        this._delegate = g50;
                    }
                    beginEditing() {
                        const x49 = this;
                        const y49 = this._delegate;
                        const z49 = y49.inputMode === y48.ANY;
                        const a50 = this._getRect();
                        this.setMaxLength(y49.maxLength);
                        let b50 = u48(y49.inputMode);
                        if (y49.inputFlag === z48.PASSWORD) {
                            b50 = 'password';
                        }
                        function u49(f50) {
                            y49._editBoxEditingReturn();
                        }
                        function v49(e50) {
                            if (e50.value.length > x49._maxLength) {
                                e50.value = e50.value.slice(0, x49._maxLength);
                            }
                            if (y49.string !== e50.value) {
                                y49._editBoxTextChanged(e50.value);
                            }
                        }
                        function w49(d50) {
                            x49.endEditing();
                        }
                        jsb.inputBox.onInput(v49);
                        jsb.inputBox.onConfirm(u49);
                        jsb.inputBox.onComplete(w49);
                        if (!cc.sys.isMobile) {
                            y49._hideLabels();
                        }
                        const c50 = y49.textLabel;
                        jsb.inputBox.show({
                            defaultValue: y49.string,
                            maxLength: x49._maxLength,
                            multiple: z49,
                            confirmHold: false,
                            confirmType: v48(y49.returnType),
                            inputType: b50,
                            originX: a50.x,
                            originY: a50.y,
                            width: a50.width,
                            height: a50.height,
                            isBold: c50.isBold,
                            isItalic: c50.isItalic,
                            isUnderline: c50.isUnderline,
                            underlineColor: 0x00000000,
                            fontSize: c50.fontSize,
                            fontColor: c50.color.toRGBValue(),
                            backColor: 0x00ffffff,
                            backgroundColor: y49.placeholderLabel.color.toRGBValue(),
                            textAlignment: c50.horizontalAlign
                        });
                        this._editing = true;
                        y49._editBoxEditingDidBegan();
                    }
                    endEditing() {
                        this._editing = false;
                        if (!cc.sys.isMobile) {
                            this._delegate._showLabels();
                        }
                        jsb.inputBox.offConfirm();
                        jsb.inputBox.offInput();
                        jsb.inputBox.offComplete();
                        jsb.inputBox.hide();
                        this._delegate._editBoxEditingDidEnded();
                    }
                    setMaxLength(t49) {
                        if (!isNaN(t49)) {
                            if (t49 < 0) {
                                t49 = 65535;
                            }
                            this._maxLength = t49;
                        }
                    }
                    _getRect() {
                        const d49 = this._delegate.node;
                        let e49 = cc.view._scaleX;
                        let f49 = cc.view._scaleY;
                        const g49 = jsb.device.getDevicePixelRatio() || 1;
                        d49.getWorldMatrix(a49);
                        const h49 = d49._uiProps.uiTransformComp;
                        const i49 = cc.v3();
                        let j49 = 0;
                        let k49 = 0;
                        if (h49) {
                            const r49 = h49.contentSize;
                            const s49 = h49.anchorPoint;
                            j49 = r49.width;
                            k49 = r49.height;
                            i49.x = -s49.x * j49;
                            i49.y = -s49.y * k49;
                        }
                        const l49 = new cc.Mat4();
                        cc.Mat4.fromTranslation(l49, i49);
                        cc.Mat4.multiply(a49, l49, a49);
                        e49 /= g49;
                        f49 /= g49;
                        const m49 = a49.m00 * e49;
                        const n49 = a49.m05 * f49;
                        const o49 = cc.view._viewportRect;
                        const p49 = o49.x / g49;
                        const q49 = o49.y / g49;
                        return {
                            x: a49.m12 * e49 + p49,
                            y: a49.m13 * f49 + q49,
                            width: j49 * m49,
                            height: k49 * n49
                        };
                    }
                }
                w48._EditBoxImpl = c49;
            })();
        }, {}],
    6: [function (j47, k47, l47) {
            "use strict";
            (function () {
                if (!globalThis.middleware)
                    return;
                const n47 = globalThis.middleware;
                const o47 = n47.MiddlewareManager.getInstance();
                let p47 = 0;
                const q47 = cc.director;
                const r47 = cc.game;
                n47.reset = function () {
                    n47.preRenderComponent = null;
                    n47.preRenderBufferIndex = 0;
                    n47.indicesStart = 0;
                    n47.resetIndicesStart = false;
                };
                n47.reset();
                n47.retain = function () {
                    p47++;
                };
                n47.release = function () {
                    if (p47 === 0) {
                        cc.warn('middleware reference error: reference count should be greater than 0');
                        return;
                    }
                    p47--;
                };
                q47.on(cc.Director.EVENT_BEFORE_UPDATE, () => {
                    if (p47 === 0)
                        return;
                    o47.update(r47.deltaTime);
                });
                q47.on(cc.Director.EVENT_BEFORE_DRAW, () => {
                    if (p47 === 0)
                        return;
                    o47.render(r47.deltaTime);
                    n47.reset();
                    if (globalThis.dragonBones) {
                        const p48 = cc.internal.ArmatureSystem.getInstance();
                        p48.prepareRenderData();
                    }
                    if (globalThis.spine) {
                        const o48 = cc.internal.SpineSkeletonSystem.getInstance();
                        o48.prepareRenderData();
                    }
                });
                const s47 = o47.getAttachInfoMgr();
                s47.attachInfo = s47.getSharedBuffer();
                s47.setResizeCallback(function () {
                    this.attachInfo = this.getSharedBuffer();
                });
                n47.attachInfoMgr = s47;
                n47.generateGetSet = function (a48) {
                    for (const b48 in a48) {
                        const c48 = a48[b48] && a48[b48].prototype;
                        if (!c48)
                            continue;
                        for (const d48 in c48) {
                            const e48 = d48.search(/^get/);
                            if (e48 === -1)
                                continue;
                            let f48 = d48.replace(/^get/, '');
                            const g48 = f48.split('');
                            const h48 = g48[0].toLowerCase();
                            const i48 = g48[0].toUpperCase();
                            g48.splice(0, 1);
                            const j48 = g48.join('');
                            f48 = h48 + j48;
                            const k48 = `set${i48}${j48}`;
                            if (c48.hasOwnProperty(f48))
                                continue;
                            const l48 = c48[k48];
                            const m48 = typeof l48 === 'function';
                            if (m48) {
                                Object.defineProperty(c48, f48, {
                                    get() {
                                        return this[d48]();
                                    },
                                    set(n48) {
                                        this[k48](n48);
                                    },
                                    configurable: true
                                });
                            }
                            else {
                                Object.defineProperty(c48, f48, {
                                    get() {
                                        return this[d48]();
                                    },
                                    configurable: true
                                });
                            }
                        }
                    }
                };
            })();
        }, {}],
    7: [function (w43, x43, y43) {
            "use strict";
            const z43 = jsb.fileUtils;
            let a44 = null;
            const b44 = new cc.AssetManager.Cache();
            let c44 = '';
            jsb.Downloader.prototype._ctor = function () {
                this.__nativeRefs = {};
            };
            const d44 = {
                fs: z43,
                initJsbDownloader(s46, t46) {
                    a44 = new jsb.Downloader({
                        countOfMaxProcessingTasks: s46 || 32,
                        timeoutInSeconds: t46 || 30,
                        tempFileNameSuffix: '.tmp'
                    });
                    c44 = `${d44.getUserDataPath()}/temp`;
                    !z43.isDirectoryExist(c44) && z43.createDirectory(c44);
                    a44.onSuccess = h47 => {
                        if (!b44.has(h47.requestURL))
                            return;
                        const { onComplete: i47 } = b44.remove(h47.requestURL);
                        i47 && i47(null, h47.storagePath);
                    };
                    a44.onError = (c47, d47, e47, f47) => {
                        if (!b44.has(c47.requestURL))
                            return;
                        const { onComplete: g47 } = b44.remove(c47.requestURL);
                        cc.error(`Download file failed: path: ${c47.requestURL} message: ${f47}, ${d47}`);
                        g47(new Error(f47), null);
                    };
                    a44.onProgress = (x46, y46, z46, a47) => {
                        if (!b44.has(x46.requestURL))
                            return;
                        const { onProgress: b47 } = b44.get(x46.requestURL);
                        b47 && b47(z46, a47);
                    };
                },
                getUserDataPath() {
                    return z43.getWritablePath().replace(/[\/\\]*$/, '');
                },
                checkFsValid() {
                    if (!z43) {
                        cc.warn('can not get the file system!');
                        return false;
                    }
                    return true;
                },
                deleteFile(p46, q46) {
                    const r46 = z43.removeFile(p46);
                    if (r46 === true) {
                        q46 && q46(null);
                    }
                    else {
                        cc.warn(`Delete file failed: path: ${p46}`);
                        q46 && q46(new Error('delete file failed'));
                    }
                },
                downloadFile(j46, k46, l46, m46, n46) {
                    b44.add(j46, {
                        onProgress: m46,
                        onComplete: n46
                    });
                    let o46 = k46;
                    if (!o46)
                        o46 = `${c44}/${performance.now()}${cc.path.extname(j46)}`;
                    a44.createDownloadTask(j46, o46, l46);
                },
                saveFile(e46, f46, g46) {
                    let h46 = null;
                    const i46 = z43.writeDataToFile(z43.getDataFromFile(e46), f46);
                    z43.removeFile(e46);
                    if (!i46) {
                        h46 = new Error(`Save file failed: path: ${e46}`);
                        cc.warn(h46.message);
                    }
                    g46 && g46(h46);
                },
                copyFile(z45, a46, b46) {
                    let c46 = null;
                    const d46 = z43.writeDataToFile(z43.getDataFromFile(z45), a46);
                    if (!d46) {
                        c46 = new Error(`Copy file failed: path: ${z45}`);
                        cc.warn(c46.message);
                    }
                    b46 && b46(c46);
                },
                writeFile(t45, u45, v45, w45) {
                    let x45 = null;
                    let y45 = null;
                    if (v45 === 'utf-8' || v45 === 'utf8') {
                        x45 = z43.writeStringToFile(u45, t45);
                    }
                    else {
                        x45 = z43.writeDataToFile(u45, t45);
                    }
                    if (!x45) {
                        y45 = new Error(`Write file failed: path: ${t45}`);
                        cc.warn(y45.message);
                    }
                    w45 && w45(y45);
                },
                writeFileSync(p45, q45, r45) {
                    let s45 = null;
                    if (r45 === 'utf-8' || r45 === 'utf8') {
                        s45 = z43.writeStringToFile(q45, p45);
                    }
                    else {
                        s45 = z43.writeDataToFile(q45, p45);
                    }
                    if (!s45) {
                        cc.warn(`Write file failed: path: ${p45}`);
                        return new Error(`Write file failed: path: ${p45}`);
                    }
                },
                readFile(k45, l45, m45) {
                    let n45 = null;
                    let o45 = null;
                    if (l45 === 'utf-8' || l45 === 'utf8') {
                        n45 = z43.getStringFromFile(k45);
                    }
                    else {
                        n45 = z43.getDataFromFile(k45);
                    }
                    if (!n45) {
                        o45 = new Error(`Read file failed: path: ${k45}`);
                        cc.warn(o45.message);
                    }
                    m45 && m45(o45, n45);
                },
                readDir(f45, g45) {
                    let h45 = null;
                    let i45 = null;
                    try {
                        h45 = z43.listFiles(f45);
                    }
                    catch (j45) {
                        cc.warn(`Read dir failed: path: ${f45} message: ${j45.message}`);
                        i45 = new Error(j45.message);
                    }
                    g45 && g45(i45, h45);
                },
                readText(d45, e45) {
                    d44.readFile(d45, 'utf8', e45);
                },
                readArrayBuffer(b45, c45) {
                    d44.readFile(b45, '', c45);
                },
                readJson(u44, v44) {
                    d44.readFile(u44, 'utf8', (x44, y44) => {
                        let z44 = null;
                        if (!x44) {
                            try {
                                z44 = JSON.parse(y44);
                            }
                            catch (a45) {
                                cc.warn(`Read json failed: path: ${u44} message: ${a45.message}`);
                                x44 = new Error(a45.message);
                            }
                        }
                        v44 && v44(x44, z44);
                    });
                },
                readJsonSync(r44) {
                    try {
                        const t44 = z43.getStringFromFile(r44);
                        return JSON.parse(t44);
                    }
                    catch (s44) {
                        cc.warn(`Read json failed: path: ${r44} message: ${s44.message}`);
                        return new Error(s44.message);
                    }
                },
                makeDirSync(o44, p44) {
                    const q44 = z43.createDirectory(o44);
                    if (!q44) {
                        cc.warn(`Make directory failed: path: ${o44}`);
                        return new Error(`Make directory failed: path: ${o44}`);
                    }
                },
                rmdirSync(l44, m44) {
                    const n44 = z43.removeDirectory(l44);
                    if (!n44) {
                        cc.warn(`rm directory failed: path: ${l44}`);
                        return new Error(`rm directory failed: path: ${l44}`);
                    }
                },
                exists(i44, j44) {
                    const k44 = z43.isFileExist(i44);
                    j44 && j44(k44);
                },
                loadSubpackage(f44, g44, h44) {
                    throw new Error('not implement');
                }
            };
            globalThis.fsUtils = x43.exports = d44;
        }, {}],
    8: [function (n43, o43, p43) {
            "use strict";
            cc.game.restart = function () {
                cc.director.getScene().destroy();
                cc.Object._deferredDestroy();
                __restartVM();
            };
            jsb.onError(function (t43, u43, v43) {
                console.error(t43, u43, v43);
            });
            jsb.onMemoryWarning = function () {
                cc.game.emit(cc.Game.EVENT_LOW_MEMORY);
            };
        }, {}],
    9: [function (f41, g41, h41) {
            "use strict";
            const i41 = gfx.Device.prototype;
            const j41 = gfx.Swapchain.prototype;
            const k41 = gfx.Buffer.prototype;
            const l41 = gfx.Texture.prototype;
            const m41 = gfx.DescriptorSet.prototype;
            const n41 = f41('../jsbWindow');
            const o41 = i41.copyTexImagesToTexture;
            i41.copyTexImagesToTexture = function (h43, i43, j43) {
                const k43 = [];
                if (h43) {
                    for (let l43 = 0; l43 < h43.length; ++l43) {
                        const m43 = h43[l43];
                        if (m43 instanceof n41.HTMLCanvasElement) {
                            k43.push(m43._data.data);
                        }
                        else if (m43 instanceof n41.HTMLImageElement) {
                            k43.push(m43._data);
                        }
                        else {
                            console.log('copyTexImagesToTexture: Convert texImages to data buffers failed');
                            return;
                        }
                    }
                }
                o41.call(this, k43, i43, j43);
            };
            const p41 = i41.createSwapchain;
            i41.createSwapchain = function (g43) {
                g43.windowHandle = n41.windowHandle;
                return p41.call(this, g43);
            };
            const q41 = j41.initialize;
            j41.initialize = function (f43) {
                f43.windowHandle = n41.windowHandler;
                q41.call(this, f43);
            };
            const r41 = k41.update;
            k41.update = function (y42, z42) {
                if (y42.byteLength === 0)
                    return;
                let a43;
                if (this.cachedUsage & 0x40) {
                    const { drawInfos: b43 } = y42;
                    y42 = new Uint32Array(b43.length * 7);
                    let c43 = 0;
                    let d43;
                    for (let e43 = 0; e43 < b43.length; ++e43) {
                        c43 = e43 * 7;
                        d43 = b43[e43];
                        y42[c43] = d43.vertexCount;
                        y42[c43 + 1] = d43.firstVertex;
                        y42[c43 + 2] = d43.indexCount;
                        y42[c43 + 3] = d43.firstIndex;
                        y42[c43 + 4] = d43.vertexOffset;
                        y42[c43 + 5] = d43.instanceCount;
                        y42[c43 + 6] = d43.firstInstance;
                    }
                    a43 = y42.byteLength;
                }
                else if (z42 !== undefined) {
                    a43 = z42;
                }
                else {
                    a43 = y42.byteLength;
                }
                r41.call(this, y42, a43);
            };
            const s41 = i41.createBuffer;
            i41.createBuffer = function (w42) {
                let x42;
                if (w42.buffer) {
                    x42 = s41.call(this, w42, true);
                }
                else {
                    x42 = s41.call(this, w42, false);
                }
                x42.cachedUsage = w42.usage;
                return x42;
            };
            const t41 = k41.initialize;
            k41.initialize = function (v42) {
                if (v42.buffer) {
                    t41.call(this, v42, true);
                }
                else {
                    t41.call(this, v42, false);
                }
            };
            const u41 = i41.createTexture;
            i41.createTexture = function (u42) {
                if (u42.texture) {
                    return u41.call(this, u42, true);
                }
                return u41.call(this, u42, false);
            };
            const v41 = l41.initialize;
            l41.initialize = function (t42) {
                if (t42.texture) {
                    v41.call(this, t42, true);
                }
                else {
                    v41.call(this, t42, false);
                }
            };
            m41.bindBuffer = function (q42, r42, s42) {
                this.dirtyJSB = m41.bindBufferJSB.call(this, q42, r42, s42 || 0);
            };
            m41.bindSampler = function (n42, o42, p42) {
                this.dirtyJSB = m41.bindSamplerJSB.call(this, n42, o42, p42 || 0);
            };
            m41.bindTexture = function (j42, k42, l42, m42) {
                this.dirtyJSB = m41.bindTextureJSB.call(this, j42, k42, l42 || 0, m42 || 0);
            };
            const w41 = m41.update;
            m41.update = function () {
                if (!this.dirtyJSB)
                    return;
                w41.call(this);
                this.dirtyJSB = false;
            };
            Object.defineProperty(i41, 'uboOffsetAlignment', {
                get() {
                    if (this.cachedUboOffsetAlignment === undefined) {
                        this.cachedUboOffsetAlignment = this.getUboOffsetAlignment();
                    }
                    return this.cachedUboOffsetAlignment;
                }
            });
        }, {
            "../jsbWindow": 16
        }],
    10: [function (u35, v35, w35) {
            "use strict";
            const m36 = u35('../jsbWindow');
            const n36 = u35('./jsb-cache-manager');
            const { downloadFile: o36, readText: p36, readArrayBuffer: q36, readJson: r36, getUserDataPath: s36, initJsbDownloader: t36 } = u35('./jsb-fs-utils');
            const u36 = /^\w+:\/\/.*/;
            const v36 = cc.assetManager.downloader;
            const w36 = cc.assetManager.parser;
            const x36 = cc.assetManager.presets;
            v36.maxConcurrency = 30;
            v36.maxRequestsPerFrame = 60;
            x36.preload.maxConcurrency = 15;
            x36.preload.maxRequestsPerFrame = 30;
            x36.scene.maxConcurrency = 32;
            x36.scene.maxRequestsPerFrame = 64;
            x36.bundle.maxConcurrency = 32;
            x36.bundle.maxRequestsPerFrame = 64;
            let y36 = 0;
            const z36 = {};
            const a37 = 5;
            const b37 = {};
            function x35(y40, z40, a41) {
                if (typeof z40 === 'function') {
                    a41 = z40;
                    z40 = null;
                }
                if (b37[y40])
                    return a41 && a41();
                y35(y40, (c41, d41, e41) => {
                    if (window.oh && window.scriptEngineType === 'napi') {
                        window.oh.loadModule(c41);
                    }
                    else if (__EDITOR__) {
                        globalThis.__require(c41);
                    }
                    else {
                        globalThis.require(c41);
                    }
                    b37[y40] = true;
                    e41 && e41(null);
                }, z40, z40.onFileProgress, a41);
            }
            function y35(g40, h40, i40, j40, k40) {
                const l40 = z35(g40, i40);
                if (l40.inLocal) {
                    h40(l40.url, i40, k40);
                }
                else if (l40.inCache) {
                    n36.updateLastTime(g40);
                    h40(l40.url, i40, (w40, x40) => {
                        if (w40) {
                            n36.removeCache(g40);
                        }
                        k40(w40, x40);
                    });
                }
                else {
                    const m40 = Date.now();
                    let n40 = '';
                    const o40 = z36[g40];
                    if (o40) {
                        n40 = o40.storagePath;
                    }
                    else if (i40.__cacheBundleRoot__) {
                        n40 = `${i40.__cacheBundleRoot__}/${m40}${y36++}${cc.path.extname(g40)}`;
                    }
                    else {
                        n40 = `${m40}${y36++}${cc.path.extname(g40)}`;
                    }
                    o36(g40, `${n36.cacheDir}/${n40}`, i40.header, j40, (q40, r40) => {
                        if (q40) {
                            if (o40) {
                                o40.retryCount++;
                                if (o40.retryCount >= a37) {
                                    delete z36[g40];
                                }
                            }
                            else {
                                z36[g40] = {
                                    retryCount: 0,
                                    storagePath: n40
                                };
                            }
                            k40(q40, null);
                            return;
                        }
                        delete z36[g40];
                        h40(r40, i40, (t40, u40) => {
                            if (!t40) {
                                n36.cacheFile(g40, n40, i40.__cacheBundleRoot__);
                            }
                            k40(t40, u40);
                        });
                    });
                }
            }
            function z35(b40, c40) {
                let d40 = false;
                let e40 = false;
                if (u36.test(b40) && !b40.startsWith('file://')) {
                    if (c40.reload) {
                        return {
                            url: b40
                        };
                    }
                    else {
                        const f40 = n36.getCache(b40);
                        if (f40) {
                            e40 = true;
                            b40 = f40;
                        }
                    }
                }
                else {
                    d40 = true;
                    if (b40.startsWith('file://')) {
                        b40 = b40.replace(/^file:\/\//, '');
                    }
                }
                return {
                    url: b40,
                    inLocal: d40,
                    inCache: e40
                };
            }
            function a36(y39, z39, a40) {
                a40(null, y39);
            }
            function b36(v39, w39, x39) {
                y35(v39, a36, w39, w39.onFileProgress, x39);
            }
            function c36(r39) {
                const s39 = r39.lastIndexOf('.ttf');
                if (s39 === -1)
                    return r39;
                const t39 = r39.lastIndexOf('/');
                let u39;
                if (t39 === -1) {
                    u39 = `${r39.substring(0, s39)}_LABEL`;
                }
                else {
                    u39 = `${r39.substring(t39 + 1, s39)}_LABEL`;
                }
                if (u39.indexOf(' ') !== -1) {
                    u39 = `"${u39}"`;
                }
                return u39;
            }
            function d36(o39, p39, q39) {
                p36(o39, q39);
            }
            function e36(l39, m39, n39) {
                r36(l39, n39);
            }
            function f36(i39, j39, k39) {
                y35(i39, d36, j39, j39.onFileProgress, k39);
            }
            function g36(f39, g39, h39) {
                q36(f39, h39);
            }
            function h36(c39, d39, e39) {
                y35(c39, e36, d39, d39.onFileProgress, e39);
            }
            function i36(o38, p38, q38) {
                const r38 = cc.path.basename(o38);
                const s38 = p38.version || v36.bundleVers[r38];
                let t38;
                if (u36.test(o38) || o38.startsWith(s36())) {
                    t38 = o38;
                    n36.makeBundleFolder(r38);
                }
                else if (v36.remoteBundles.indexOf(r38) !== -1) {
                    t38 = `${v36.remoteServerAddress}remote/${r38}`;
                    n36.makeBundleFolder(r38);
                }
                else {
                    t38 = `assets/${r38}`;
                }
                const u38 = `${t38}/cc.config.${s38 ? `${s38}.` : ''}json`;
                p38.__cacheBundleRoot__ = r38;
                h36(u38, p38, (w38, x38) => {
                    if (w38) {
                        return q38(w38, null);
                    }
                    const y38 = x38;
                    y38 && (y38.base = `${t38}/`);
                    if (y38.hasPreloadScript) {
                        const z38 = `${t38}/index.${s38 ? `${s38}.` : ''}${y38.encrypted ? 'jsc' : `js`}`;
                        x35(z38, p38, b39 => {
                            if (b39) {
                                return q38(b39, null);
                            }
                            q38(null, y38);
                        });
                    }
                    else {
                        q38(null, y38);
                    }
                });
            }
            function j36(l38, m38, n38) {
                y35(l38, g36, m38, m38.onFileProgress, n38);
            }
            function k36(e38, f38, g38) {
                const h38 = c36(e38);
                const i38 = new m36.FontFace(h38, `url('${e38}')`);
                m36.document.fonts.add(i38);
                i38.load();
                i38.loaded.then(() => {
                    g38(null, h38);
                }, () => {
                    cc.warnID(4933, h38);
                    g38(null, h38);
                });
            }
            const c37 = w36.parsePlist;
            const d37 = function (y37, z37, a38) {
                p36(y37, (c38, d38) => {
                    if (c38)
                        return a38(c38);
                    c37(d38, z37, a38);
                });
            };
            w36.parsePVRTex = v36.downloadDomImage;
            w36.parsePKMTex = v36.downloadDomImage;
            w36.parseASTCTex = v36.downloadDomImage;
            w36.parsePlist = d37;
            v36.downloadScript = x35;
            v36._downloadArrayBuffer = j36;
            v36._downloadJson = h36;
            function l36(q37, r37, s37) {
                cc.AudioPlayer.load(q37).then(w37 => {
                    const x37 = {
                        player: w37,
                        url: q37,
                        duration: w37.duration,
                        type: w37.type
                    };
                    s37(null, x37);
                }).catch(v37 => {
                    s37(v37);
                });
            }
            v36.register({
                '.js': x35,
                '.jsc': x35,
                '.png': b36,
                '.jpg': b36,
                '.bmp': b36,
                '.jpeg': b36,
                '.gif': b36,
                '.ico': b36,
                '.tiff': b36,
                '.webp': b36,
                '.image': b36,
                '.pvr': b36,
                '.pkm': b36,
                '.astc': b36,
                '.mp3': b36,
                '.ogg': b36,
                '.wav': b36,
                '.m4a': b36,
                '.mp4': b36,
                '.avi': b36,
                '.mov': b36,
                '.mpg': b36,
                '.mpeg': b36,
                '.rm': b36,
                '.rmvb': b36,
                '.txt': b36,
                '.xml': b36,
                '.vsh': b36,
                '.fsh': b36,
                '.atlas': b36,
                '.tmx': b36,
                '.tsx': b36,
                '.fnt': b36,
                '.plist': b36,
                '.json': h36,
                '.ExportJson': b36,
                '.binary': b36,
                '.bin': b36,
                '.dbbin': b36,
                '.skel': b36,
                '.font': b36,
                '.eot': b36,
                '.ttf': b36,
                '.woff': b36,
                '.svg': b36,
                '.ttc': b36,
                bundle: i36,
                default: f36
            });
            w36.register({
                '.png': v36.downloadDomImage,
                '.jpg': v36.downloadDomImage,
                '.bmp': v36.downloadDomImage,
                '.jpeg': v36.downloadDomImage,
                '.gif': v36.downloadDomImage,
                '.ico': v36.downloadDomImage,
                '.tiff': v36.downloadDomImage,
                '.webp': v36.downloadDomImage,
                '.image': v36.downloadDomImage,
                '.mp3': l36,
                '.ogg': l36,
                '.wav': l36,
                '.m4a': l36,
                '.pvr': v36.downloadDomImage,
                '.pkm': v36.downloadDomImage,
                '.astc': v36.downloadDomImage,
                '.binary': g36,
                '.bin': g36,
                '.dbbin': g36,
                '.skel': g36,
                '.txt': d36,
                '.xml': d36,
                '.vsh': d36,
                '.fsh': d36,
                '.atlas': d36,
                '.tmx': d36,
                '.tsx': d36,
                '.fnt': d36,
                '.plist': d37,
                '.font': k36,
                '.eot': k36,
                '.ttf': k36,
                '.woff': k36,
                '.svg': k36,
                '.ttc': k36,
                '.ExportJson': e36
            });
            if (CC_BUILD) {
                cc.assetManager.transformPipeline.append(l37 => {
                    const m37 = l37.output = l37.input;
                    for (let n37 = 0, o37 = m37.length; n37 < o37; n37++) {
                        const p37 = m37[n37];
                        if (p37.config) {
                            p37.options.__cacheBundleRoot__ = p37.config.name;
                        }
                        if (p37.ext === '.cconb') {
                            p37.url = p37.url.replace(p37.ext, '.bin');
                        }
                        else if (p37.ext === '.ccon') {
                            p37.url = p37.url.replace(p37.ext, '.json');
                        }
                    }
                });
            }
            const e37 = cc.assetManager.init;
            cc.assetManager.init = function (h37) {
                e37.call(cc.assetManager, h37);
                const i37 = cc.settings.querySettings('assets', 'jsbDownloaderMaxTasks');
                const j37 = cc.settings.querySettings('assets', 'jsbDownloaderTimeout');
                t36(i37, j37);
                n36.init();
            };
        }, {
            "../jsbWindow": 16,
            "./jsb-cache-manager": 3,
            "./jsb-fs-utils": 7
        }],
    11: [function (i21, j21, k21) {
            "use strict";
            const v21 = globalThis['jsb.physics'];
            v21.CACHE = {
                trimesh: {},
                convex: {},
                height: {},
                material: {}
            };
            v21.OBJECT = {
                books: [],
                ptrToObj: {},
                raycastOptions: {
                    origin: null,
                    unitDir: null,
                    distance: 0,
                    mask: 0,
                    queryTrigger: true
                }
            };
            v21.CONFIG = {
                heightScale: 1 / 512
            };
            const w21 = v21.OBJECT.books;
            const x21 = v21.OBJECT.ptrToObj;
            const y21 = v21.OBJECT.raycastOptions;
            const z21 = {
                type: 'onTriggerEnter',
                selfCollider: null,
                otherCollider: null,
                impl: null
            };
            const a22 = {
                type: 'onCollisionEnter',
                selfCollider: null,
                otherCollider: null,
                contacts: [],
                impl: null
            };
            const b22 = {
                type: 'onControllerColliderHit',
                controller: null,
                collider: null,
                worldPosition: null,
                worldNormal: null,
                motionDirection: null,
                motionLength: 0
            };
            const c22 = {
                type: 'onControllerTriggerEnter',
                characterController: null,
                collider: null,
                impl: null
            };
            function l21(q35, r35, s35, t35) {
                z21.type = q35;
                z21.impl = t35;
                if (r35.needTriggerEvent) {
                    z21.selfCollider = r35;
                    z21.otherCollider = s35;
                    r35.emit(q35, z21);
                }
                if (s35.needTriggerEvent) {
                    z21.selfCollider = s35;
                    z21.otherCollider = r35;
                    s35.emit(q35, z21);
                }
            }
            function m21(m35, n35, o35, p35) {
                c22.type = m35;
                c22.impl = p35;
                c22.characterController = n35;
                c22.collider = o35;
                if (o35.needTriggerEvent) {
                    o35.emit(m35, c22);
                }
                if (n35.needTriggerEvent) {
                    n35.emit(m35, c22);
                }
            }
            const d22 = new cc.Quat();
            const e22 = [];
            const f22 = 12;
            class g22 {
                constructor(l35) {
                    this.event = l35;
                    this.impl = null;
                    this.colliderA = null;
                    this.colliderB = null;
                    this.index = 0;
                }
                get isBodyA() {
                    return this.colliderA.uuid === this.event.selfCollider.uuid;
                }
                getLocalPointOnA(k35) {
                    this.getWorldPointOnB(k35);
                    cc.Vec3.subtract(k35, k35, this.colliderA.node.worldPosition);
                }
                getLocalPointOnB(j35) {
                    this.getWorldPointOnB(j35);
                    cc.Vec3.subtract(j35, j35, this.colliderB.node.worldPosition);
                }
                getWorldPointOnA(i35) {
                    this.getWorldPointOnB(i35);
                }
                getWorldPointOnB(g35) {
                    const h35 = this.index * f22;
                    g35.x = this.impl[h35];
                    g35.y = this.impl[h35 + 1];
                    g35.z = this.impl[h35 + 2];
                }
                getLocalNormalOnA(f35) {
                    this.getWorldNormalOnA(f35);
                    cc.Quat.conjugate(d22, this.colliderA.node.worldRotation);
                    cc.Vec3.transformQuat(f35, f35, d22);
                }
                getLocalNormalOnB(e35) {
                    this.getWorldNormalOnB(e35);
                    cc.Quat.conjugate(d22, this.colliderB.node.worldRotation);
                    cc.Vec3.transformQuat(out, out, d22);
                }
                getWorldNormalOnA(d35) {
                    this.getWorldNormalOnB(d35);
                    if (!this.isBodyA)
                        cc.Vec3.negate(d35, d35);
                }
                getWorldNormalOnB(b35) {
                    const c35 = this.index * f22 + 3;
                    b35.x = this.impl[c35];
                    b35.y = this.impl[c35 + 1];
                    b35.z = this.impl[c35 + 2];
                }
            }
            function n21(s34, t34, u34, v34, w34) {
                a22.type = s34;
                a22.impl = v34;
                const x34 = a22.contacts;
                e22.push.apply(e22, x34);
                x34.length = 0;
                const y34 = w34.length / f22;
                for (let z34 = 0; z34 < y34; z34++) {
                    const a35 = e22.length > 0 ? e22.pop() : new g22(a22);
                    a35.colliderA = t34;
                    a35.colliderB = u34;
                    a35.impl = w34;
                    a35.index = z34;
                    x34.push(a35);
                }
                if (t34.needCollisionEvent) {
                    a22.selfCollider = t34;
                    a22.otherCollider = u34;
                    t34.emit(s34, a22);
                }
                if (u34.needCollisionEvent) {
                    a22.selfCollider = u34;
                    a22.otherCollider = t34;
                    u34.emit(s34, a22);
                }
            }
            function o21(n34, o34, p34, q34) {
                b22.type = n34;
                const r34 = q34.length / 10;
                b22.worldPosition = new cc.Vec3(q34[0], q34[1], q34[2]);
                b22.worldNormal = new cc.Vec3(q34[3], q34[4], q34[5]);
                b22.motionDirection = new cc.Vec3(q34[6], q34[7], q34[8]);
                b22.motionLength = q34[9];
                b22.controller = o34;
                b22.collider = p34;
                o34.emit(n34, b22);
            }
            class h22 {
                get impl() {
                    return this._impl;
                }
                constructor() {
                    this._impl = new v21.World();
                }
                setGravity(m34) {
                    this._impl.setGravity(m34.x, m34.y, m34.z);
                }
                setAllowSleep(l34) {
                    this._impl.setAllowSleep(l34);
                }
                setDefaultMaterial(k34) { }
                step(h34, i34, j34) {
                    this._impl.step(h34);
                }
                set debugDrawFlags(g34) {
                    this._impl.setDebugDrawFlags(g34);
                }
                get debugDrawFlags() {
                    return this._impl.getDebugDrawFlags();
                }
                set debugDrawConstraintSize(f34) {
                    this._impl.setDebugDrawConstraintSize(f34);
                }
                get debugDrawConstraintSize() {
                    return this._impl.getDebugDrawConstraintSize();
                }
                raycast(w33, x33, y33, z33) {
                    y21.origin = w33.o;
                    y21.unitDir = w33.d;
                    y21.mask = x33.mask >>> 0;
                    y21.distance = x33.maxDistance;
                    y21.queryTrigger = !!x33.queryTrigger;
                    const a34 = this._impl.raycast(y21);
                    if (a34) {
                        const b34 = this._impl.raycastResult();
                        for (let c34 = 0; c34 < b34.length; c34++) {
                            const d34 = b34[c34];
                            const e34 = y33.add();
                            e34._assign(d34.hitPoint, d34.distance, x21[d34.shape].collider, d34.hitNormal);
                            z33.push(e34);
                        }
                    }
                    return a34;
                }
                raycastClosest(r33, s33, t33) {
                    y21.origin = r33.o;
                    y21.unitDir = r33.d;
                    y21.mask = s33.mask >>> 0;
                    y21.distance = s33.maxDistance;
                    y21.queryTrigger = !!s33.queryTrigger;
                    const u33 = this._impl.raycastClosest(y21);
                    if (u33) {
                        const v33 = this._impl.raycastClosestResult();
                        t33._assign(v33.hitPoint, v33.distance, x21[v33.shape].collider, v33.hitNormal);
                    }
                    return u33;
                }
                sweepBox(g33, h33, i33, j33, k33, l33) {
                    y21.origin = g33.o;
                    y21.unitDir = g33.d;
                    y21.mask = j33.mask >>> 0;
                    y21.distance = j33.maxDistance;
                    y21.queryTrigger = !!j33.queryTrigger;
                    const m33 = this._impl.sweepBox(y21, h33.x, h33.y, h33.z, i33.w, i33.x, i33.y, i33.z);
                    if (m33) {
                        const n33 = this._impl.sweepResult();
                        for (let o33 = 0; o33 < n33.length; o33++) {
                            const p33 = n33[o33];
                            const q33 = k33.add();
                            q33._assign(p33.hitPoint, p33.distance, x21[p33.shape].collider, p33.hitNormal);
                            l33.push(q33);
                        }
                    }
                    return m33;
                }
                sweepBoxClosest(z32, a33, b33, c33, d33) {
                    y21.origin = z32.o;
                    y21.unitDir = z32.d;
                    y21.mask = c33.mask >>> 0;
                    y21.distance = c33.maxDistance;
                    y21.queryTrigger = !!c33.queryTrigger;
                    const e33 = this._impl.sweepBoxClosest(y21, a33.x, a33.y, a33.z, b33.w, b33.x, b33.y, b33.z);
                    if (e33) {
                        const f33 = this._impl.sweepClosestResult();
                        d33._assign(f33.hitPoint, f33.distance, x21[f33.shape].collider, f33.hitNormal);
                    }
                    return e33;
                }
                sweepSphere(p32, q32, r32, s32, t32) {
                    y21.origin = p32.o;
                    y21.unitDir = p32.d;
                    y21.mask = r32.mask >>> 0;
                    y21.distance = r32.maxDistance;
                    y21.queryTrigger = !!r32.queryTrigger;
                    const u32 = this._impl.sweepSphere(y21, q32);
                    if (u32) {
                        const v32 = this._impl.sweepResult();
                        for (let w32 = 0; w32 < v32.length; w32++) {
                            const x32 = v32[w32];
                            const y32 = s32.add();
                            y32._assign(x32.hitPoint, x32.distance, x21[x32.shape].collider, x32.hitNormal);
                            t32.push(y32);
                        }
                    }
                    return u32;
                }
                sweepSphereClosest(j32, k32, l32, m32) {
                    y21.origin = j32.o;
                    y21.unitDir = j32.d;
                    y21.mask = l32.mask >>> 0;
                    y21.distance = l32.maxDistance;
                    y21.queryTrigger = !!l32.queryTrigger;
                    const n32 = this._impl.sweepSphereClosest(y21, k32);
                    if (n32) {
                        const o32 = this._impl.sweepClosestResult();
                        m32._assign(o32.hitPoint, o32.distance, x21[o32.shape].collider, o32.hitNormal);
                    }
                    return n32;
                }
                sweepCapsule(x31, y31, z31, a32, b32, c32, d32) {
                    y21.origin = x31.o;
                    y21.unitDir = x31.d;
                    y21.mask = b32.mask >>> 0;
                    y21.distance = b32.maxDistance;
                    y21.queryTrigger = !!b32.queryTrigger;
                    const e32 = this._impl.sweepCapsule(y21, y31, z31, a32.w, a32.x, a32.y, a32.z);
                    if (e32) {
                        const f32 = this._impl.sweepResult();
                        for (let g32 = 0; g32 < f32.length; g32++) {
                            const h32 = f32[g32];
                            const i32 = c32.add();
                            i32._assign(h32.hitPoint, h32.distance, x21[h32.shape].collider, h32.hitNormal);
                            d32.push(i32);
                        }
                    }
                    return e32;
                }
                sweepCapsuleClosest(p31, q31, r31, s31, t31, u31) {
                    y21.origin = p31.o;
                    y21.unitDir = p31.d;
                    y21.mask = t31.mask >>> 0;
                    y21.distance = t31.maxDistance;
                    y21.queryTrigger = !!t31.queryTrigger;
                    const v31 = this._impl.sweepCapsuleClosest(y21, q31, r31, s31.w, s31.x, s31.y, s31.z);
                    if (v31) {
                        const w31 = this._impl.sweepClosestResult();
                        u31._assign(w31.hitPoint, w31.distance, x21[w31.shape].collider, w31.hitNormal);
                    }
                    return v31;
                }
                emitEvents() {
                    this.emitTriggerEvent();
                    this.emitCollisionEvent();
                    this.emitCCTCollisionEvent();
                    this.emitCCTTriggerEvent();
                    this._impl.emitEvents();
                }
                syncSceneToPhysics() {
                    this._impl.syncSceneToPhysics();
                }
                syncAfterEvents() {
                }
                destroy() {
                    this._impl.destroy();
                }
                emitTriggerEvent() {
                    const g31 = this._impl.getTriggerEventPairs();
                    const h31 = g31.length / 3;
                    for (let i31 = 0; i31 < h31; i31++) {
                        const j31 = i31 * 3;
                        const k31 = x21[g31[j31 + 0]];
                        const l31 = x21[g31[j31 + 1]];
                        if (!k31 || !l31)
                            continue;
                        const m31 = k31.collider;
                        const n31 = l31.collider;
                        if (!(m31 && m31.isValid && n31 && n31.isValid))
                            continue;
                        if (!m31.needTriggerEvent && !n31.needTriggerEvent)
                            continue;
                        const o31 = g31[j31 + 2];
                        if (o31 === 1) {
                            l21('onTriggerStay', m31, n31, g31);
                        }
                        else if (o31 === 0) {
                            l21('onTriggerEnter', m31, n31, g31);
                        }
                        else {
                            l21('onTriggerExit', m31, n31, g31);
                        }
                    }
                }
                emitCollisionEvent() {
                    const x30 = this._impl.getContactEventPairs();
                    const y30 = x30.length / 4;
                    for (let z30 = 0; z30 < y30; z30++) {
                        const a31 = z30 * 4;
                        const b31 = x21[x30[a31 + 0]];
                        const c31 = x21[x30[a31 + 1]];
                        if (!b31 || !c31)
                            continue;
                        const d31 = b31.collider;
                        const e31 = c31.collider;
                        if (!(d31 && d31.isValid && e31 && e31.isValid))
                            continue;
                        if (!d31.needCollisionEvent && !e31.needCollisionEvent)
                            continue;
                        const f31 = x30[a31 + 2];
                        if (f31 === 1) {
                            n21('onCollisionStay', d31, e31, x30, x30[a31 + 3]);
                        }
                        else if (f31 === 0) {
                            n21('onCollisionEnter', d31, e31, x30, x30[a31 + 3]);
                        }
                        else {
                            n21('onCollisionExit', d31, e31, x30, x30[a31 + 3]);
                        }
                    }
                }
                emitCCTCollisionEvent() {
                    const p30 = this._impl.getCCTShapeEventPairs();
                    const q30 = p30.length / 3;
                    for (let r30 = 0; r30 < q30; r30++) {
                        const s30 = r30 * 3;
                        const t30 = x21[p30[s30 + 0]];
                        const u30 = x21[p30[s30 + 1]];
                        if (!t30 || !u30)
                            continue;
                        const v30 = t30.characterController;
                        const w30 = u30.collider;
                        if (!(v30 && v30.isValid && w30 && w30.isValid))
                            continue;
                        o21('onControllerColliderHit', v30, w30, p30[s30 + 2]);
                    }
                }
                emitCCTTriggerEvent() {
                    const g30 = this._impl.getCCTTriggerEventPairs();
                    const h30 = g30.length / 3;
                    for (let i30 = 0; i30 < h30; i30++) {
                        const j30 = i30 * 3;
                        const k30 = x21[g30[j30 + 0]];
                        const l30 = x21[g30[j30 + 1]];
                        if (!k30 || !l30)
                            continue;
                        const m30 = k30.characterController;
                        const n30 = l30.collider;
                        if (!(m30 && m30.isValid && n30 && n30.isValid))
                            continue;
                        if (!n30.needTriggerEvent)
                            continue;
                        const o30 = g30[j30 + 2];
                        if (o30 === 1) {
                            m21('onControllerTriggerStay', m30, n30, g30);
                        }
                        else if (o30 === 0) {
                            m21('onControllerTriggerEnter', m30, n30, g30);
                        }
                        else {
                            m21('onControllerTriggerExit', m30, n30, g30);
                        }
                    }
                }
            }
            function p21(f30) {
                if (f30._physicsBookIndex === undefined) {
                    f30._physicsBookIndex = w21.length;
                    w21.push(f30);
                }
            }
            function q21(d30) {
                const e30 = d30._physicsBookIndex;
                if (e30 !== undefined) {
                    w21[e30] = w21[w21.length - 1];
                    w21[e30]._physicsBookIndex = e30;
                    w21.length -= 1;
                    d30._physicsBookIndex = undefined;
                }
            }
            function r21() {
                const w29 = cc.PhysicsSystem.instance;
                const x29 = w29.physicsWorld.impl;
                const y29 = w29.collisionMatrix;
                if (y29.updateArray && y29.updateArray.length > 0) {
                    y29.updateArray.forEach(a30 => {
                        const b30 = `${1 << a30}`;
                        const c30 = y29[b30];
                        x29.setCollisionMatrix(a30, c30);
                    });
                    y29.updateArray.length = 0;
                }
            }
            class i22 {
                get impl() {
                    return this._impl;
                }
                get rigidBody() {
                    return this._com;
                }
                get isAwake() {
                    return this._impl.isAwake();
                }
                get isSleepy() {
                    return false;
                }
                get isSleeping() {
                    return this._impl.isSleeping();
                }
                constructor() {
                    r21();
                    this._impl = new v21.RigidBody();
                    this._isUsingCCD = false;
                }
                initialize(v29) {
                    v29.node.updateWorldTransform();
                    this._com = v29;
                    this._impl.initialize(v29.node, v29.type, v29._group);
                    p21(v29.node);
                    this._impl.setSleepThreshold(cc.PhysicsSystem.instance.sleepThreshold);
                }
                onEnable() {
                    this.setType(this._com.type);
                    this.setMass(this._com.mass);
                    this.setAllowSleep(this._com.allowSleep);
                    this.setLinearDamping(this._com.linearDamping);
                    this.setAngularDamping(this._com.angularDamping);
                    this.setLinearFactor(this._com.linearFactor);
                    this.setAngularFactor(this._com.angularFactor);
                    this.useGravity(this._com.useGravity);
                    this._impl.onEnable();
                }
                onDisable() {
                    this._impl.onDisable();
                }
                onDestroy() {
                    q21(this._com.node);
                    this._impl.onDestroy();
                }
                setGroup(u29) {
                    this._impl.setGroup(u29);
                }
                getGroup() {
                    return this._impl.getGroup();
                }
                addGroup(t29) {
                    this.setGroup(this.getGroup() | t29);
                }
                removeGroup(s29) {
                    this.setGroup(this.getGroup() & ~s29);
                }
                setMask(r29) {
                    this._impl.setMask(r29 >>> 0);
                }
                getMask() {
                    return this._impl.getMask();
                }
                addMask(q29) {
                    this.setMask(this.getMask() | q29);
                }
                removeMask(p29) {
                    this.setMask(this.getMask() & ~p29);
                }
                setType(o29) {
                    this._impl.setType(o29);
                }
                setMass(n29) {
                    this._impl.setMass(n29);
                }
                setAllowSleep(m29) {
                    this._impl.setAllowSleep(m29);
                }
                setLinearDamping(k29) {
                    const l29 = cc.PhysicsSystem.instance.fixedTimeStep;
                    this._impl.setLinearDamping((1 - (1 - k29) ** l29) / l29);
                }
                setAngularDamping(i29) {
                    const j29 = cc.PhysicsSystem.instance.fixedTimeStep;
                    this._impl.setAngularDamping((1 - (1 - i29) ** j29) / j29);
                }
                isUsingCCD() {
                    return this._isUsingCCD;
                }
                useCCD(h29) {
                    this._isUsingCCD = h29;
                    return this._impl.useCCD(h29);
                }
                useGravity(g29) {
                    this._impl.useGravity(g29);
                }
                setLinearFactor(f29) {
                    this._impl.setLinearFactor(f29.x, f29.y, f29.z);
                }
                setAngularFactor(e29) {
                    this._impl.setAngularFactor(e29.x, e29.y, e29.z);
                }
                wakeUp() {
                    this._impl.wakeUp();
                }
                sleep() {
                    this._impl.sleep();
                }
                clearState() {
                    this._impl.clearState();
                }
                clearForces() {
                    this._impl.clearForces();
                }
                clearVelocity() {
                    this._impl.clearVelocity();
                }
                setSleepThreshold(d29) {
                    this._impl.setSleepThreshold(d29);
                }
                getSleepThreshold() {
                    return this._impl.getSleepThreshold();
                }
                getLinearVelocity(c29) {
                    c29.set(this._impl.getLinearVelocity());
                }
                setLinearVelocity(b29) {
                    this._impl.setLinearVelocity(b29.x, b29.y, b29.z);
                }
                getAngularVelocity(a29) {
                    a29.set(this._impl.getAngularVelocity());
                }
                setAngularVelocity(z28) {
                    this._impl.setAngularVelocity(z28.x, z28.y, z28.z);
                }
                applyForce(x28, y28) {
                    if (y28 == null) {
                        y28 = cc.Vec3.ZERO;
                    }
                    this._impl.applyForce(x28.x, x28.y, x28.z, y28.x, y28.y, y28.z);
                }
                applyLocalForce(v28, w28) {
                    if (w28 == null) {
                        w28 = cc.Vec3.ZERO;
                    }
                    this._impl.applyLocalForce(v28.x, v28.y, v28.z, w28.x, w28.y, w28.z);
                }
                applyImpulse(t28, u28) {
                    if (u28 == null) {
                        u28 = cc.Vec3.ZERO;
                    }
                    this._impl.applyImpulse(t28.x, t28.y, t28.z, u28.x, u28.y, u28.z);
                }
                applyLocalImpulse(r28, s28) {
                    if (s28 == null) {
                        s28 = cc.Vec3.ZERO;
                    }
                    this._impl.applyLocalImpulse(r28.x, r28.y, r28.z, s28.x, s28.y, s28.z);
                }
                applyTorque(q28) {
                    this._impl.applyTorque(q28.x, q28.y, q28.z);
                }
                applyLocalTorque(p28) {
                    this._impl.applyLocalTorque(p28.x, p28.y, p28.z);
                }
            }
            const j22 = {
                NONE: 0,
                QUERY_FILTER: 1 << 0,
                QUERY_SINGLE_HIT: 1 << 2,
                DETECT_TRIGGER_EVENT: 1 << 3,
                DETECT_CONTACT_EVENT: 1 << 4,
                DETECT_CONTACT_POINT: 1 << 5,
                DETECT_CONTACT_CCD: 1 << 6
            };
            class k22 {
                get impl() {
                    return this._impl;
                }
                get collider() {
                    return this._com;
                }
                get attachedRigidBody() {
                    return this._attachedRigidBody;
                }
                constructor() {
                    r21();
                }
                initialize(o28) {
                    o28.node.updateWorldTransform();
                    this._com = o28;
                    this._impl.initialize(o28.node);
                    x21[this._impl.getObjectID()] = this;
                    p21(o28.node);
                }
                onLoad() {
                    this.setMaterial(this._com.sharedMaterial);
                    this.setCenter(this._com.center);
                    this.setAsTrigger(this._com.isTrigger);
                }
                onEnable() {
                    this._impl.onEnable();
                }
                onDisable() {
                    this._impl.onDisable();
                }
                onDestroy() {
                    q21(this._com.node);
                    delete x21[this._impl.getObjectID()];
                    x21[this._impl.getObjectID()] = null;
                    this._impl.onDestroy();
                }
                setMaterial(m28) {
                    const n28 = cc.PhysicsSystem.instance;
                    if (!m28)
                        m28 = n28.defaultMaterial;
                    if (!v21.CACHE.material[m28.id]) {
                        v21.CACHE.material[m28.id] = n28.physicsWorld.impl.createMaterial(m28.id, m28.friction, m28.friction, m28.restitution, 2, 2);
                    }
                    this._impl.setMaterial(m28.id, m28.friction, m28.friction, m28.restitution, 2, 2);
                }
                setAsTrigger(l28) {
                    this._impl.setAsTrigger(l28);
                }
                setCenter(k28) {
                    this._impl.setCenter(k28.x, k28.y, k28.z);
                }
                getAABB(j28) {
                    j28.copy(this._impl.getAABB());
                }
                getBoundingSphere(i28) {
                    i28.copy(this._impl.getBoundingSphere());
                }
                updateEventListener() {
                    let h28 = 0;
                    h28 |= j22.DETECT_CONTACT_CCD;
                    if (this._com.isTrigger)
                        h28 |= j22.IS_TRIGGER;
                    if (this._com.needTriggerEvent || this._com.needCollisionEvent)
                        h28 |= j22.NEED_EVENT;
                    this._impl.updateEventListener(h28);
                }
                setGroup(g28) {
                    this._impl.setGroup(g28);
                }
                getGroup() {
                    return this._impl.getGroup();
                }
                addGroup(f28) {
                    this.setGroup(this.getGroup() | f28);
                }
                removeGroup(e28) {
                    this.setGroup(this.getGroup() & ~e28);
                }
                setMask(d28) {
                    this._impl.setMask(d28 >>> 0);
                }
                getMask() {
                    return this._impl.getMask();
                }
                addMask(c28) {
                    this.setMask(this.getMask() | c28);
                }
                removeMask(b28) {
                    this.setMask(this.getMask() & ~b28);
                }
            }
            class l22 extends k22 {
                constructor() {
                    super();
                    this._impl = new v21.SphereShape();
                }
                updateRadius() {
                    this._impl.setRadius(this.collider.radius);
                }
                onLoad() {
                    super.onLoad();
                    this.updateRadius();
                }
            }
            class m22 extends k22 {
                constructor() {
                    super();
                    this._impl = new v21.BoxShape();
                }
                updateSize() {
                    const a28 = this.collider.size;
                    this._impl.setSize(a28.x, a28.y, a28.z);
                }
                onLoad() {
                    super.onLoad();
                    this.updateSize();
                }
            }
            class n22 extends k22 {
                constructor() {
                    super();
                    this._impl = new v21.CapsuleShape();
                }
                setRadius(z27) {
                    this._impl.setRadius(z27);
                }
                setDirection(y27) {
                    this._impl.setDirection(y27);
                }
                setCylinderHeight(x27) {
                    this._impl.setCylinderHeight(x27);
                }
                onLoad() {
                    super.onLoad();
                    this.setRadius(this._com.radius);
                    this.setDirection(this._com.direction);
                    this.setCylinderHeight(this._com.cylinderHeight);
                }
            }
            class o22 extends k22 {
                constructor() {
                    super();
                    this._impl = new v21.PlaneShape();
                }
                setConstant(w27) {
                    this._impl.setConstant(w27);
                }
                setNormal(v27) {
                    this._impl.setNormal(v27.x, v27.y, v27.z);
                }
                onLoad() {
                    super.onLoad();
                    this.setNormal(this._com.normal);
                    this.setConstant(this._com.constant);
                }
            }
            function s21(r27) {
                if (!v21.CACHE.convex[r27._uuid]) {
                    const s27 = cc.physics.utils.shrinkPositions(r27.renderingSubMeshes[0].geometricInfo.positions);
                    const t27 = cc.PhysicsSystem.instance.physicsWorld.impl;
                    const u27 = {
                        positions: new Float32Array(s27),
                        positionLength: s27.length / 3
                    };
                    v21.CACHE.convex[r27._uuid] = t27.createConvex(u27);
                }
                return v21.CACHE.convex[r27._uuid];
            }
            function t21(m27) {
                if (!v21.CACHE.trimesh[m27._uuid]) {
                    const n27 = m27.renderingSubMeshes[0].geometricInfo.positions;
                    const o27 = m27.renderingSubMeshes[0].geometricInfo.indices;
                    const p27 = cc.PhysicsSystem.instance.physicsWorld.impl;
                    const q27 = {
                        positions: new Float32Array(n27),
                        positionLength: n27.length / 3,
                        triangles: new Uint16Array(o27),
                        triangleLength: o27.length / 3,
                        isU16: true
                    };
                    v21.CACHE.trimesh[m27._uuid] = p27.createTrimesh(q27);
                }
                return v21.CACHE.trimesh[m27._uuid];
            }
            function u21(d27) {
                if (!v21.CACHE.height[d27._uuid]) {
                    const e27 = d27.getVertexCountI();
                    const f27 = d27.getVertexCountJ();
                    const g27 = new Int16Array(e27 * f27);
                    const h27 = v21.CONFIG.heightScale;
                    for (let k27 = 0; k27 < e27; k27++) {
                        for (let l27 = 0; l27 < f27; l27++) {
                            g27[l27 + k27 * f27] = d27.getHeight(k27, l27) / h27;
                        }
                    }
                    const i27 = {
                        rows: e27,
                        columns: f27,
                        samples: g27
                    };
                    const j27 = cc.PhysicsSystem.instance.physicsWorld.impl;
                    v21.CACHE.height[d27._uuid] = j27.createHeightField(i27);
                }
                return v21.CACHE.height[d27._uuid];
            }
            class p22 extends k22 {
                constructor() {
                    super();
                    this._impl = new v21.CylinderShape();
                }
                setRadius(c27) {
                    this.updateGeometry();
                }
                setDirection(b27) {
                    this.updateGeometry();
                }
                setHeight(a27) {
                    this.updateGeometry();
                }
                updateGeometry() {
                    this._impl.setCylinder(this._com.radius, this._com.height, this._com.direction);
                }
                initialize(v26) {
                    if (!v21.CACHE.convex.CYLINDER) {
                        const w26 = cc.physics.utils.cylinder(0.5, 0.5, 2, {
                            radialSegments: 32,
                            heightSegments: 1
                        });
                        const x26 = cc.physics.utils.shrinkPositions(w26.positions);
                        const y26 = {
                            positions: new Float32Array(x26),
                            positionLength: x26.length / 3
                        };
                        const z26 = cc.PhysicsSystem.instance.physicsWorld.impl.createConvex(y26);
                        v21.CACHE.convex.CYLINDER = z26;
                    }
                    this._com = v26;
                    this._impl.setCylinder(v26.radius, v26.height, v26.direction);
                    this._impl.setConvex(v21.CACHE.convex.CYLINDER);
                    super.initialize(v26);
                }
            }
            class q22 extends k22 {
                constructor() {
                    super();
                    this._impl = new v21.ConeShape();
                }
                setRadius(u26) {
                    this.updateGeometry();
                }
                setDirection(t26) {
                    this.updateGeometry();
                }
                setHeight(s26) {
                    this.updateGeometry();
                }
                updateGeometry() {
                    this._impl.setCone(this._com.radius, this._com.height, this._com.direction);
                }
                initialize(n26) {
                    if (!v21.CACHE.convex.CONE) {
                        const o26 = cc.physics.utils.cylinder(0, 0.5, 1, {
                            radialSegments: 32,
                            heightSegments: 1
                        });
                        const p26 = cc.physics.utils.shrinkPositions(o26.positions);
                        const q26 = {
                            positions: new Float32Array(p26),
                            positionLength: p26.length / 3
                        };
                        const r26 = cc.PhysicsSystem.instance.physicsWorld.impl.createConvex(q26);
                        v21.CACHE.convex.CONE = r26;
                    }
                    this._com = n26;
                    this._impl.setCone(n26.radius, n26.height, n26.direction);
                    this._impl.setConvex(v21.CACHE.convex.CONE);
                    super.initialize(n26);
                }
            }
            class r22 extends k22 {
                constructor() {
                    super();
                    this._impl = new v21.TrimeshShape();
                }
                setConvex(m26) {
                    this._impl.useConvex(m26);
                }
                setMesh(j26) {
                    if (!j26)
                        return;
                    const k26 = this._com.convex;
                    this._impl.useConvex(k26);
                    const l26 = k26 ? s21(j26) : t21(j26);
                    this._impl.setMesh(l26);
                }
                initialize(i26) {
                    this._com = i26;
                    this.setConvex(i26.convex);
                    this.setMesh(i26.mesh);
                    super.initialize(i26);
                }
            }
            class s22 extends k22 {
                constructor() {
                    super();
                    this._impl = new v21.TerrainShape();
                }
                setTerrain(g26) {
                    if (!g26)
                        return;
                    const h26 = u21(g26);
                    this._impl.setTerrain(h26, g26.tileSize, g26.tileSize, v21.CONFIG.heightScale);
                }
                initialize(f26) {
                    this._com = f26;
                    this.setTerrain(f26.terrain);
                    super.initialize(f26);
                }
            }
            class t22 {
                get impl() {
                    return this._impl;
                }
                get joint() {
                    return this._com;
                }
                setEnableCollision(e26) {
                    this._impl.setEnableCollision(e26);
                }
                setConnectedBody(d26) {
                    this._impl.setConnectedBody(d26 ? d26.body.impl.getObjectID() : 0);
                }
                initialize(c26) {
                    this._com = c26;
                    this._impl.initialize(c26.node);
                    x21[this._impl.getObjectID()] = this;
                    this.onLoad();
                }
                onLoad() {
                    this.setConnectedBody(this._com.connectedBody);
                    this.setEnableCollision(this._com.enableCollision);
                }
                onEnable() {
                    this._impl.onEnable();
                }
                onDisable() {
                    this._impl.onDisable();
                }
                onDestroy() {
                    delete x21[this._impl.getObjectID()];
                    x21[this._impl.getObjectID()] = null;
                    this._impl.onDestroy();
                }
            }
            class u22 extends t22 {
                constructor() {
                    super();
                    this._impl = new v21.SphericalJoint();
                }
                setPivotA(b26) {
                    this._impl.setPivotA(b26.x, b26.y, b26.z);
                }
                setPivotB(a26) {
                    this._impl.setPivotB(a26.x, a26.y, a26.z);
                }
                onLoad() {
                    super.onLoad();
                    this.setPivotA(this._com.pivotA);
                    this.setPivotB(this._com.pivotB);
                }
            }
            class v22 extends t22 {
                constructor() {
                    super();
                    this._impl = new v21.RevoluteJoint();
                }
                setAxis(z25) {
                    this._impl.setAxis(z25.x, z25.y, z25.z);
                }
                setPivotA(y25) {
                    this._impl.setPivotA(y25.x, y25.y, y25.z);
                }
                setPivotB(x25) {
                    this._impl.setPivotB(x25.x, x25.y, x25.z);
                }
                setLimitEnabled(w25) {
                    this._impl.setLimitEnabled(w25);
                }
                setLowerLimit(v25) {
                    this._impl.setLowerLimit(v25);
                }
                setUpperLimit(u25) {
                    this._impl.setUpperLimit(u25);
                }
                setMotorEnabled(t25) {
                    this._impl.setMotorEnabled(t25);
                }
                setMotorVelocity(s25) {
                    this._impl.setMotorVelocity(s25);
                }
                setMotorForceLimit(r25) {
                    this._impl.setMotorForceLimit(r25);
                }
                onLoad() {
                    super.onLoad();
                    this.setAxis(this._com.axis);
                    this.setPivotA(this._com.pivotA);
                    this.setPivotB(this._com.pivotB);
                    this.setLimitEnabled(this._com.limitEnabled);
                    this.setLowerLimit(this._com.lowerLimit);
                    this.setUpperLimit(this._com.upperLimit);
                    this.setMotorEnabled(this._com.motorEnabled);
                    this.setMotorVelocity(this._com.motorVelocity);
                    this.setMotorForceLimit(this._com.motorForceLimit);
                }
            }
            class w22 extends t22 {
                constructor() {
                    super();
                    this._impl = new v21.FixedJoint();
                }
                setBreakForce(q25) {
                    this._impl.setBreakForce(q25);
                }
                setBreakTorque(p25) {
                    this._impl.setBreakTorque(p25);
                }
                onLoad() {
                    super.onLoad();
                    this.setBreakForce(this._com.breakForce);
                    this.setBreakTorque(this._com.breakTorque);
                }
            }
            class x22 extends t22 {
                constructor() {
                    super();
                    this._impl = new v21.GenericJoint();
                }
                setConstraintMode(n25, o25) {
                    this._impl.setConstraintMode(n25, o25);
                }
                setLinearLimit(k25, l25, m25) {
                    this._impl.setLinearLimit(k25, l25, m25);
                }
                setAngularExtent(h25, i25, j25) {
                    this._impl.setAngularExtent(h25, i25, j25);
                }
                setLinearSoftConstraint(g25) {
                    this._impl.setLinearSoftConstraint(g25);
                }
                setLinearStiffness(f25) {
                    this._impl.setLinearStiffness(f25);
                }
                setLinearDamping(e25) {
                    this._impl.setLinearDamping(e25);
                }
                setLinearRestitution(d25) {
                    this._impl.setLinearRestitution(d25);
                }
                setSwingSoftConstraint(c25) {
                    this._impl.setSwingSoftConstraint(c25);
                }
                setTwistSoftConstraint(b25) {
                    this._impl.setTwistSoftConstraint(b25);
                }
                setSwingStiffness(a25) {
                    this._impl.setSwingStiffness(a25);
                }
                setSwingDamping(z24) {
                    this._impl.setSwingDamping(z24);
                }
                setSwingRestitution(y24) {
                    this._impl.setSwingRestitution(y24);
                }
                setTwistStiffness(x24) {
                    this._impl.setTwistStiffness(x24);
                }
                setTwistDamping(w24) {
                    this._impl.setTwistDamping(w24);
                }
                setTwistRestitution(v24) {
                    this._impl.setTwistRestitution(v24);
                }
                setDriverMode(t24, u24) {
                    this._impl.setDriverMode(t24, u24);
                }
                setLinearMotorTarget(s24) {
                    this._impl.setLinearMotorTarget(s24.x, s24.y, s24.z);
                }
                setLinearMotorVelocity(r24) {
                    this._impl.setLinearMotorVelocity(r24.x, r24.y, r24.z);
                }
                setLinearMotorForceLimit(q24) {
                    this._impl.setLinearMotorForceLimit(q24);
                }
                setAngularMotorTarget(p24) {
                    this._impl.setAngularMotorTarget(p24.x, p24.y, p24.z);
                }
                setAngularMotorVelocity(o24) {
                    this._impl.setAngularMotorVelocity(o24.x, o24.y, o24.z);
                }
                setAngularMotorForceLimit(n24) {
                    this._impl.setAngularMotorForceLimit(n24);
                }
                setPivotA(m24) {
                    this._impl.setPivotA(m24.x, m24.y, m24.z);
                }
                setPivotB(l24) {
                    this._impl.setPivotB(l24.x, l24.y, l24.z);
                }
                setAutoPivotB(k24) {
                    this._impl.setAutoPivotB(k24);
                }
                setAxis(j24) {
                    this._impl.setAxis(j24.x, j24.y, j24.z);
                }
                setSecondaryAxis(i24) {
                    this._impl.setSecondaryAxis(i24.x, i24.y, i24.z);
                }
                setBreakForce(h24) {
                    this._impl.setBreakForce(h24);
                }
                setBreakTorque(g24) {
                    this._impl.setBreakTorque(g24);
                }
                onLoad() {
                    super.onLoad();
                    this.setBreakForce(this._com.breakForce);
                    this.setBreakTorque(this._com.breakTorque);
                    const b24 = this._com;
                    const c24 = b24.linearLimitSettings;
                    const d24 = b24.angularLimitSettings;
                    this.setConstraintMode(0, c24.xMotion);
                    this.setConstraintMode(1, c24.yMotion);
                    this.setConstraintMode(2, c24.zMotion);
                    this.setConstraintMode(3, d24.twistMotion);
                    this.setConstraintMode(4, d24.swingMotion1);
                    this.setConstraintMode(5, d24.swingMotion2);
                    this.setLinearLimit(0, c24.lower.x, c24.upper.x);
                    this.setLinearLimit(1, c24.lower.y, c24.upper.y);
                    this.setLinearLimit(2, c24.lower.z, c24.upper.z);
                    this.setAngularExtent(d24.twistExtent, d24.swingExtent1, d24.swingExtent2);
                    this.setLinearSoftConstraint(c24.enableSoftConstraint);
                    this.setLinearStiffness(c24.stiffness);
                    this.setLinearDamping(c24.damping);
                    this.setLinearRestitution(c24.restitution);
                    this.setSwingSoftConstraint(d24.enableSoftConstraintSwing);
                    this.setTwistSoftConstraint(d24.enableSoftConstraintTwist);
                    this.setSwingStiffness(d24.swingStiffness);
                    this.setSwingDamping(d24.swingDamping);
                    this.setSwingRestitution(d24.swingRestitution);
                    this.setTwistStiffness(d24.twistStiffness);
                    this.setTwistDamping(d24.twistDamping);
                    this.setTwistRestitution(d24.twistRestitution);
                    const e24 = b24.linearDriverSettings;
                    const f24 = b24.angularDriverSettings;
                    this.setDriverMode(0, e24.xDrive);
                    this.setDriverMode(1, e24.yDrive);
                    this.setDriverMode(2, e24.zDrive);
                    this.setDriverMode(3, f24.twistDrive);
                    this.setDriverMode(4, f24.swingDrive1);
                    this.setDriverMode(5, f24.swingDrive2);
                    this.setLinearMotorTarget(e24.targetPosition);
                    this.setLinearMotorVelocity(e24.targetVelocity);
                    this.setLinearMotorForceLimit(e24.strength);
                    this.setAngularMotorTarget(f24.targetOrientation);
                    this.setAngularMotorVelocity(f24.targetVelocity);
                    this.setAngularMotorForceLimit(f24.strength);
                    this.setPivotA(b24.pivotA);
                    this.setPivotB(b24.pivotB);
                    this.setAutoPivotB(b24.autoPivotB);
                    this.setAxis(b24.axis);
                    this.setSecondaryAxis(b24.secondaryAxis);
                    this.setBreakForce(b24.breakForce);
                    this.setBreakTorque(b24.breakTorque);
                }
            }
            class y22 {
                get impl() {
                    return this._impl;
                }
                get characterController() {
                    return this._com;
                }
                constructor() {
                    r21();
                }
                initialize(z23) {
                    this._com = z23;
                    const a24 = this._impl.initialize(z23.node);
                    x21[this._impl.getObjectID()] = this;
                    return a24;
                }
                onLoad() {
                    this.setGroup(this._com.group);
                    const x23 = cc.PhysicsSystem.instance.collisionMatrix;
                    const y23 = x23[this._com.group];
                    this.setMask(y23);
                    this.setCenter(this._com.center);
                    this.setStepOffset(this._com.stepOffset);
                    this.setSlopeLimit(this._com.slopeLimit);
                    this.setContactOffset(this._com.skinWidth);
                    this.setDetectCollisions(true);
                    this.setOverlapRecovery(true);
                }
                onEnable() {
                    this._impl.onEnable();
                }
                onDisable() {
                    this._impl.onDisable();
                }
                onDestroy() {
                    delete x21[this._impl.getObjectID()];
                    x21[this._impl.getObjectID()] = null;
                    this._impl.onDestroy();
                }
                onGround() {
                    return this._impl.onGround();
                }
                move(u23, v23, w23) {
                    return this._impl.move(u23.x, u23.y, u23.z, v23, w23);
                }
                syncPhysicsToScene() {
                    this._impl.syncPhysicsToScene();
                }
                setPosition(t23) {
                    this._impl.setPosition(t23.x, t23.y, t23.z);
                }
                getPosition() {
                    return this._impl.getPosition();
                }
                setStepOffset(s23) {
                    this._impl.setStepOffset(s23);
                }
                getStepOffset() {
                    return this._impl.getStepOffset();
                }
                setSlopeLimit(r23) {
                    this._impl.setSlopeLimit(r23);
                }
                getSlopeLimit() {
                    return this._impl.getSlopeLimit();
                }
                setContactOffset(q23) {
                    this._impl.setContactOffset(q23);
                }
                getContactOffset() {
                    return this._impl.getContactOffset();
                }
                setDetectCollisions(p23) {
                    this._impl.setDetectCollisions(p23);
                }
                setOverlapRecovery(o23) {
                    this._impl.setOverlapRecovery(o23);
                }
                setCenter(n23) {
                    this._impl.setCenter(n23.x, n23.y, n23.z);
                }
                updateEventListener() {
                    let m23 = 0;
                    if (this._com.needTriggerEvent)
                        m23 |= j22.DETECT_TRIGGER_EVENT;
                    this._impl.updateEventListener(m23);
                }
                setGroup(l23) {
                    this._impl.setGroup(l23);
                }
                getGroup() {
                    return this._impl.getGroup();
                }
                addGroup(k23) {
                    this.setGroup(this.getGroup() | k23);
                }
                removeGroup(j23) {
                    this.setGroup(this.getGroup() & ~j23);
                }
                setMask(i23) {
                    this._impl.setMask(i23 >>> 0);
                }
                getMask() {
                    return this._impl.getMask();
                }
                addMask(h23) {
                    this.setMask(this.getMask() | h23);
                }
                removeMask(g23) {
                    this.setMask(this.getMask() & ~g23);
                }
            }
            class z22 extends y22 {
                constructor() {
                    super();
                    this._impl = new v21.CapsuleCharacterController();
                }
                setRadius(f23) {
                    this._impl.setRadius(f23);
                }
                setHeight(e23) {
                    this._impl.setHeight(e23);
                }
                onLoad() {
                    super.onLoad();
                    this.setRadius(this._com.radius);
                    this.setHeight(this._com.height);
                }
            }
            class a23 extends y22 {
                constructor() {
                    super();
                    this._impl = new v21.BoxCharacterController();
                }
                setHalfHeight(d23) {
                    this._impl.setHalfHeight(d23);
                }
                setHalfSideExtent(c23) {
                    this._impl.setHalfSideExtent(c23);
                }
                setHalfForwardExtent(b23) {
                    this._impl.setHalfForwardExtent(b23);
                }
                onLoad() {
                    super.onLoad();
                    this.setHalfHeight(this._com.halfHeight);
                    this.setHalfSideExtent(this._com.halfSideExtent);
                    this.setHalfForwardExtent(this._com.halfForwardExtent);
                }
            }
            cc.physics.selector.register('physx', {
                PhysicsWorld: h22,
                RigidBody: i22,
                SphereShape: l22,
                BoxShape: m22,
                PlaneShape: o22,
                CapsuleShape: n22,
                ConeShape: q22,
                CylinderShape: p22,
                TrimeshShape: r22,
                TerrainShape: s22,
                PointToPointConstraint: u22,
                HingeConstraint: v22,
                FixedConstraint: w22,
                ConfigurableConstraint: x22,
                CapsuleCharacterController: z22,
                BoxCharacterController: a23
            });
        }, {}],
    12: [function (b12, c12, d12) {
            "use strict";
            const e12 = b12('./jsb-cache-manager');
            (function () {
                if (globalThis.spine === undefined || globalThis.middleware === undefined)
                    return;
                if (cc.internal.SpineSkeletonData === undefined)
                    return;
                const g12 = globalThis.spine;
                const h12 = globalThis.middleware;
                h12.generateGetSet(g12);
                Object.defineProperty(g12, 'timeScale', {
                    get() {
                        return this._timeScale;
                    },
                    set(h21) {
                        this._timeScale = h21;
                        g12.SkeletonAnimation.setGlobalTimeScale(h21);
                    },
                    configurable: true
                });
                const i12 = cc.color(0, 0, 255, 255);
                const j12 = cc.color(255, 0, 0, 255);
                const k12 = cc.color(255, 255, 0, 255);
                const l12 = cc.color(0, 255, 0, 255);
                const m12 = cc.internal.SpineSkeletonData.prototype;
                let n12 = 1;
                const o12 = {};
                const p12 = new WeakMap();
                const q12 = g12.SkeletonDataMgr.getInstance();
                g12.skeletonDataMgr = q12;
                q12.setDestroyCallback(f21 => {
                    if (!f21)
                        return;
                    const g21 = o12[f21];
                    if (g21 && p12.has(g21)) {
                        p12.delete(g21);
                        delete o12[f21];
                    }
                });
                const r12 = g12.SkeletonCacheMgr.getInstance();
                g12.skeletonCacheMgr = r12;
                m12.destroy = function () {
                    this.reset();
                    r12.removeSkeletonCache(this._uuid);
                    cc.Asset.prototype.destroy.call(this);
                };
                m12.reset = function () {
                    if (this._skeletonCache) {
                        g12.disposeSkeletonData(this._uuid);
                        this._jsbTextures = null;
                        this._skeletonCache = null;
                    }
                    this._atlasCache = null;
                };
                m12.getRuntimeData = function () {
                    if (!this._skeletonCache) {
                        this.init();
                    }
                    return this._skeletonCache;
                };
                m12.init = function () {
                    if (this._skeletonCache)
                        return;
                    const v20 = this._uuid;
                    if (!v20) {
                        cc.errorID(7504);
                        return;
                    }
                    const w20 = this.atlasText;
                    if (!w20) {
                        cc.errorID(7508, this.name);
                        return;
                    }
                    const x20 = this.textures;
                    const y20 = this.textureNames;
                    if (!(x20 && x20.length > 0 && y20 && y20.length > 0)) {
                        cc.errorID(7507, this.name);
                        return;
                    }
                    const z20 = {};
                    for (let b21 = 0; b21 < x20.length; ++b21) {
                        const c21 = x20[b21];
                        const d21 = this.recordTexture(c21);
                        const e21 = new h12.Texture2D();
                        e21.setRealTextureIndex(d21);
                        e21.setPixelsWide(c21.width);
                        e21.setPixelsHigh(c21.height);
                        e21.setRealTexture(c21);
                        z20[y20[b21]] = e21;
                    }
                    this._jsbTextures = z20;
                    let a21 = null;
                    if (this.skeletonJsonStr) {
                        a21 = this.skeletonJsonStr;
                    }
                    else {
                        a21 = e12.getCache(this.nativeUrl) || this.nativeUrl;
                    }
                    this._skeletonCache = g12.initSkeletonData(v20, a21, w20, z20, this.scale);
                    if (this._skeletonCache) {
                        this.width = this._skeletonCache.width;
                        this.height = this._skeletonCache.height;
                    }
                };
                m12.recordTexture = function (s20) {
                    const t20 = n12;
                    const u20 = o12[t20] = {
                        key: t20
                    };
                    p12.set(u20, s20);
                    n12++;
                    return t20;
                };
                m12.getTextureByIndex = function (q20) {
                    const r20 = o12[q20];
                    if (!r20)
                        return null;
                    return p12.get(r20);
                };
                const s12 = g12.SkeletonAnimation.prototype;
                s12.setCompleteListener = function (m20) {
                    this._compeleteListener = m20;
                    this.setCompleteListenerNative(function (o20) {
                        const p20 = Math.floor(o20.trackTime / o20.animationEnd);
                        this._compeleteListener && this._compeleteListener(o20, p20);
                    });
                };
                s12.setTrackCompleteListener = function (h20, i20) {
                    this._trackCompeleteListener = i20;
                    this.setTrackCompleteListenerNative(h20, function (k20) {
                        const l20 = Math.floor(k20.trackTime / k20.animationEnd);
                        this._trackCompeleteListener && this._trackCompeleteListener(k20, l20);
                    });
                };
                s12.setAnimationListener = function (q19, r19) {
                    this._target = q19;
                    this._callback = r19;
                    const s19 = legacyCC.internal.SpineAnimationEventType;
                    this.setStartListener(function (g20) {
                        if (this._target && this._callback) {
                            this._callback.call(this._target, this, g20, s19.START, null, 0);
                        }
                    });
                    this.setInterruptListener(function (f20) {
                        if (this._target && this._callback) {
                            this._callback.call(this._target, this, f20, s19.INTERRUPT, null, 0);
                        }
                    });
                    this.setEndListener(function (e20) {
                        if (this._target && this._callback) {
                            this._callback.call(this._target, this, e20, s19.END, null, 0);
                        }
                    });
                    this.setDisposeListener(function (d20) {
                        if (this._target && this._callback) {
                            this._callback.call(this._target, this, d20, s19.DISPOSE, null, 0);
                        }
                    });
                    this.setCompleteListener(function (b20, c20) {
                        if (this._target && this._callback) {
                            this._callback.call(this._target, this, b20, s19.COMPLETE, null, c20);
                        }
                    });
                    this.setEventListener(function (z19, a20) {
                        if (this._target && this._callback) {
                            this._callback.call(this._target, this, z19, s19.EVENT, a20, 0);
                        }
                    });
                };
                const t12 = cc.internal.SpineSkeleton.prototype;
                const u12 = cc.internal.SpineSkeleton.AnimationCacheMode;
                Object.defineProperty(t12, 'paused', {
                    get() {
                        return this._paused || false;
                    },
                    set(p19) {
                        this._paused = p19;
                        if (this._nativeSkeleton) {
                            this._nativeSkeleton.paused(p19);
                        }
                    }
                });
                Object.defineProperty(t12, 'premultipliedAlpha', {
                    get() {
                        if (this._premultipliedAlpha === undefined) {
                            return true;
                        }
                        return this._premultipliedAlpha;
                    },
                    set(o19) {
                        this._premultipliedAlpha = o19;
                        if (this._nativeSkeleton) {
                            this._nativeSkeleton.setOpacityModifyRGB(this._premultipliedAlpha);
                        }
                    }
                });
                Object.defineProperty(t12, 'timeScale', {
                    get() {
                        if (this._timeScale === undefined)
                            return 1.0;
                        return this._timeScale;
                    },
                    set(n19) {
                        this._timeScale = n19;
                        if (this._nativeSkeleton) {
                            this._nativeSkeleton.setTimeScale(this._timeScale);
                        }
                    }
                });
                const v12 = t12.updateMaterial;
                t12.updateMaterial = function () {
                    v12.call(this);
                    if (this._nativeSkeleton) {
                        const m19 = this.getMaterialTemplate();
                        this._nativeSkeleton.setMaterial(m19);
                    }
                };
                const w12 = t12._updateDebugDraw;
                t12._updateDebugDraw = function () {
                    w12.call(this);
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setDebugMeshEnabled(this.debugMesh);
                        this._nativeSkeleton.setDebugSlotsEnabled(this.debugSlots);
                        this._nativeSkeleton.setDebugBonesEnabled(this.debugBones);
                    }
                };
                const x12 = t12._updateUseTint;
                t12._updateUseTint = function () {
                    x12.call(this);
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.setUseTint(this.useTint);
                    }
                };
                t12._updateBatch = function () {
                    if (this._nativeSkeleton) {
                        this._renderEntity.setUseLocal(!this.enableBatch);
                        this._nativeSkeleton.setBatchEnabled(this.enableBatch);
                        this.markForUpdateRenderData();
                    }
                };
                t12.setSkeletonData = function (d19) {
                    if (d19.width != null && d19.height != null) {
                        const l19 = this.node._uiProps.uiTransformComp;
                        l19.setContentSize(d19.width, d19.height);
                    }
                    const e19 = d19._uuid;
                    if (!e19) {
                        cc.errorID(7504);
                        return;
                    }
                    const f19 = d19.textures;
                    const g19 = d19.textureNames;
                    if (!(f19 && f19.length > 0 && g19 && g19.length > 0)) {
                        cc.errorID(7507, d19.name);
                        return;
                    }
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.stopSchedule();
                        this._nativeSkeleton._comp = null;
                        this._nativeSkeleton = null;
                    }
                    let h19 = null;
                    if (this.isAnimationCached()) {
                        h19 = new g12.SkeletonCacheAnimation(e19, this._cacheMode === u12.SHARED_CACHE);
                    }
                    else {
                        h19 = new g12.SkeletonAnimation();
                        try {
                            g12.initSkeletonRenderer(h19, e19);
                        }
                        catch (k19) {
                            cc._throw(k19);
                            return;
                        }
                        h19.setDebugSlotsEnabled(this.debugSlots);
                        h19.setDebugMeshEnabled(this.debugMesh);
                        h19.setDebugBonesEnabled(this.debugBones);
                    }
                    this._nativeSkeleton = h19;
                    h19._comp = this;
                    if (this.shouldSchedule)
                        h19.beginSchedule();
                    h19.setUseTint(this.useTint);
                    h19.setOpacityModifyRGB(this.premultipliedAlpha);
                    h19.setTimeScale(this.timeScale);
                    h19.setBatchEnabled(this.enableBatch);
                    const i19 = this.color;
                    h19.setColor(i19.r, i19.g, i19.b, i19.a);
                    const j19 = this.getMaterialTemplate();
                    h19.setMaterial(j19);
                    this._renderEntity.setUseLocal(!this.enableBatch);
                    h19.setRenderEntity(this._renderEntity.nativeObj);
                    this._skeleton = h19.getSkeleton();
                    this._startListener && this.setStartListener(this._startListener);
                    this._endListener && this.setEndListener(this._endListener);
                    this._completeListener && this.setCompleteListener(this._completeListener);
                    this._eventListener && this.setEventListener(this._eventListener);
                    this._interruptListener && this.setInterruptListener(this._interruptListener);
                    this._disposeListener && this.setDisposeListener(this._disposeListener);
                    this._sharedBufferOffset = h19.getSharedBufferOffset();
                    this._useAttach = false;
                    this.markForUpdateRenderData();
                };
                t12._updateColor = function () {
                    if (this._nativeSkeleton) {
                        const c19 = this.color;
                        this._nativeSkeleton.setColor(c19.r, c19.g, c19.b, c19.a);
                        this.markForUpdateRenderData();
                    }
                };
                t12.setAnimationStateData = function (b19) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._stateData = b19;
                        this._nativeSkeleton.setAnimationStateData(b19);
                    }
                };
                const y12 = t12.onEnable;
                t12.onEnable = function () {
                    if (y12) {
                        y12.call(this);
                    }
                    this.shouldSchedule = true;
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.onEnable();
                    }
                    h12.retain();
                };
                const z12 = t12.onDisable;
                t12.onDisable = function () {
                    if (z12) {
                        z12.call(this);
                    }
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.onDisable();
                    }
                    h12.release();
                };
                t12.setVertexEffectDelegate = function (a19) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setVertexEffectDelegate(a19);
                    }
                };
                t12.updateAnimation = function (v18) {
                    const w18 = this._nativeSkeleton;
                    if (!w18)
                        return;
                    const x18 = this.node;
                    if (!x18)
                        return;
                    if (this.__preColor__ === undefined || !this.color.equals(this.__preColor__)) {
                        const z18 = this.color;
                        w18.setColor(z18.r, z18.g, z18.b, z18.a);
                        this.__preColor__ = z18;
                    }
                    const y18 = this.socketNodes;
                    if (!this._useAttach && y18.size > 0) {
                        this._useAttach = true;
                        w18.setAttachEnabled(true);
                    }
                };
                t12.updateWorldTransform = function () {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.updateWorldTransform();
                    }
                };
                t12.setToSetupPose = function () {
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.setToSetupPose();
                    }
                };
                t12.setBonesToSetupPose = function () {
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.setBonesToSetupPose();
                    }
                };
                t12.setSlotsToSetupPose = function () {
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.setSlotsToSetupPose();
                    }
                };
                t12.setSlotsRange = function (t18, u18) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setSlotsRange(t18, u18);
                    }
                };
                t12.updateAnimationCache = function (s18) {
                    if (!this.isAnimationCached())
                        return;
                    if (this._nativeSkeleton) {
                        if (s18) {
                            this._nativeSkeleton.updateAnimationCache(s18);
                        }
                        else {
                            this._nativeSkeleton.updateAllAnimationCache();
                        }
                    }
                };
                t12.invalidAnimationCache = function () {
                    if (!this.isAnimationCached())
                        return;
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.updateAllAnimationCache();
                    }
                };
                t12.findBone = function (r18) {
                    if (this._nativeSkeleton)
                        return this._nativeSkeleton.findBone(r18);
                    return null;
                };
                t12.findSlot = function (q18) {
                    if (this._nativeSkeleton)
                        return this._nativeSkeleton.findSlot(q18);
                    return null;
                };
                t12.setSkin = function (p18) {
                    if (this._nativeSkeleton)
                        return this._nativeSkeleton.setSkin(p18);
                    return null;
                };
                t12.getAttachment = function (n18, o18) {
                    if (this._nativeSkeleton)
                        return this._nativeSkeleton.getAttachment(n18, o18);
                    return null;
                };
                t12.setAttachment = function (l18, m18) {
                    this._nativeSkeleton && this._nativeSkeleton.setAttachment(l18, m18);
                };
                t12.getTextureAtlas = function (k18) {
                    cc.warn('Spine Skeleton getTextureAtlas not support in native');
                    return null;
                };
                t12.setMix = function (h18, i18, j18) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setMix(h18, i18, j18);
                    }
                };
                t12.setAnimation = function (c18, d18, e18) {
                    const f18 = d18.toString();
                    this._playTimes = e18 ? 0 : 1;
                    let g18 = null;
                    if (this._nativeSkeleton) {
                        if (!this._nativeSkeleton.findAnimation(f18))
                            return g18;
                        this._animationName = f18;
                        if (this.isAnimationCached()) {
                            g18 = this._nativeSkeleton.setAnimation(f18, e18);
                        }
                        else {
                            g18 = this._nativeSkeleton.setAnimation(c18, f18, e18);
                        }
                        this._nativeSkeleton.update(0);
                    }
                    return g18;
                };
                t12.addAnimation = function (y17, z17, a18, b18) {
                    if (this._nativeSkeleton) {
                        b18 = b18 || 0;
                        if (this.isAnimationCached()) {
                            return this._nativeSkeleton.addAnimation(z17, a18, b18);
                        }
                        else {
                            return this._nativeSkeleton.addAnimation(y17, z17, a18, b18);
                        }
                    }
                    return null;
                };
                t12.findAnimation = function (x17) {
                    if (this._nativeSkeleton)
                        return this._nativeSkeleton.findAnimation(x17);
                    return null;
                };
                t12.getCurrent = function (w17) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        return this._nativeSkeleton.getCurrent(w17);
                    }
                    return null;
                };
                t12.clearTracks = function () {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.clearTracks();
                    }
                };
                t12.clearTrack = function (v17) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.clearTrack(v17);
                    }
                };
                t12.setStartListener = function (r17) {
                    this._startListener = r17;
                    if (this._nativeSkeleton) {
                        if (this.isAnimationCached()) {
                            this._nativeSkeleton.setStartListener(function (t17) {
                                const u17 = this._comp;
                                u17._startEntry.animation.name = t17;
                                u17._startListener && u17._startListener(u17._startEntry);
                            });
                        }
                        else {
                            this._nativeSkeleton.setStartListener(r17);
                        }
                    }
                };
                t12.setInterruptListener = function (q17) {
                    this._interruptListener = q17;
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setInterruptListener(q17);
                    }
                };
                t12.setEndListener = function (m17) {
                    this._endListener = m17;
                    if (this._nativeSkeleton) {
                        if (this.isAnimationCached()) {
                            this._nativeSkeleton.setEndListener(function (o17) {
                                const p17 = this._comp;
                                p17._endEntry.animation.name = o17;
                                p17._endListener && p17._endListener(p17._endEntry);
                            });
                        }
                        else {
                            this._nativeSkeleton.setEndListener(m17);
                        }
                    }
                };
                t12.setDisposeListener = function (l17) {
                    this._disposeListener = l17;
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setDisposeListener(l17);
                    }
                };
                t12.setCompleteListener = function (h17) {
                    this._completeListener = h17;
                    if (this._nativeSkeleton) {
                        if (this.isAnimationCached()) {
                            this._nativeSkeleton.setCompleteListener(function (j17) {
                                const k17 = this._comp;
                                k17._endEntry.animation.name = j17;
                                k17._completeListener && k17._completeListener(k17._endEntry);
                            });
                        }
                        else {
                            this._nativeSkeleton.setCompleteListener(h17);
                        }
                    }
                };
                t12.setEventListener = function (g17) {
                    this._eventListener = g17;
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setEventListener(g17);
                    }
                };
                t12.setTrackStartListener = function (e17, f17) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setTrackStartListener(e17, f17);
                    }
                };
                t12.setTrackInterruptListener = function (c17, d17) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setTrackInterruptListener(c17, d17);
                    }
                };
                t12.setTrackEndListener = function (a17, b17) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setTrackEndListener(a17, b17);
                    }
                };
                t12.setTrackDisposeListener = function (y16, z16) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setTrackDisposeListener(y16, z16);
                    }
                };
                t12.setTrackCompleteListener = function (w16, x16) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setTrackCompleteListener(w16, x16);
                    }
                };
                t12.setTrackEventListener = function (u16, v16) {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        this._nativeSkeleton.setTrackEventListener(u16, v16);
                    }
                };
                t12.getState = function () {
                    if (this._nativeSkeleton && !this.isAnimationCached()) {
                        return this._nativeSkeleton.getState();
                    }
                    return null;
                };
                t12._ensureListener = function () {
                    cc.warn('Spine Skeleton _ensureListener not need in native');
                };
                t12._updateSkeletonData = function () {
                    if (this.skeletonData) {
                        this.skeletonData.init();
                        this.setSkeletonData(this.skeletonData);
                        this._indexBoneSockets();
                        this._updateSocketBindings();
                        this.attachUtil.init(this);
                        this._preCacheMode = this._cacheMode;
                        this.defaultSkin && this._nativeSkeleton.setSkin(this.defaultSkin);
                        this.animation = this.defaultAnimation;
                    }
                    else if (this._nativeSkeleton) {
                        this._nativeSkeleton.stopSchedule();
                        this._nativeSkeleton._comp = null;
                        this._nativeSkeleton = null;
                    }
                    this._needUpdateSkeltonData = false;
                };
                const a13 = t12.onDestroy;
                t12.onDestroy = function () {
                    a13.call(this);
                    if (this._nativeSkeleton) {
                        this._nativeSkeleton.stopSchedule();
                        this._nativeSkeleton._comp = null;
                        this._nativeSkeleton = null;
                    }
                    this._stateData = null;
                };
                t12._render = function () {
                    const h16 = this._nativeSkeleton;
                    if (!h16)
                        return;
                    if (!this.isAnimationCached() && (this.debugBones || this.debugSlots || this.debugMesh) && this._debugRenderer) {
                        const i16 = this._debugRenderer;
                        i16.clear();
                        i16.lineWidth = 5;
                        const j16 = this._debugData || h16.getDebugData();
                        if (!j16)
                            return;
                        let k16 = 0;
                        let l16 = 0;
                        let m16 = 0;
                        l16 = j16[k16++];
                        while (l16 !== 0) {
                            m16 = j16[k16++];
                            switch (l16) {
                                case 1:
                                    i16.strokeColor = i12;
                                    for (let t16 = 0; t16 < m16; t16 += 8) {
                                        i16.moveTo(j16[k16++], j16[k16++]);
                                        i16.lineTo(j16[k16++], j16[k16++]);
                                        i16.lineTo(j16[k16++], j16[k16++]);
                                        i16.lineTo(j16[k16++], j16[k16++]);
                                        i16.close();
                                        i16.stroke();
                                    }
                                    break;
                                case 2:
                                    i16.strokeColor = k12;
                                    for (let s16 = 0; s16 < m16; s16 += 6) {
                                        i16.moveTo(j16[k16++], j16[k16++]);
                                        i16.lineTo(j16[k16++], j16[k16++]);
                                        i16.lineTo(j16[k16++], j16[k16++]);
                                        i16.close();
                                        i16.stroke();
                                    }
                                    break;
                                case 3:
                                    i16.strokeColor = j12;
                                    i16.fillColor = i12;
                                    for (let n16 = 0; n16 < m16; n16 += 4) {
                                        const o16 = j16[k16++];
                                        const p16 = j16[k16++];
                                        const q16 = j16[k16++];
                                        const r16 = j16[k16++];
                                        i16.moveTo(o16, p16);
                                        i16.lineTo(q16, r16);
                                        i16.stroke();
                                        i16.circle(o16, p16, Math.PI * 1.5);
                                        i16.fill();
                                        if (n16 === 0) {
                                            i16.fillColor = l12;
                                        }
                                    }
                                    break;
                                default:
                                    return;
                            }
                            l16 = j16[k16++];
                        }
                    }
                };
                const b13 = cc.mat4();
                t12.syncAttachedNode = function () {
                    const x15 = this._nativeSkeleton;
                    if (!x15)
                        return;
                    const y15 = this.socketNodes;
                    if (y15.size > 0 && this._useAttach) {
                        const z15 = this._sharedBufferOffset;
                        if (!z15)
                            return;
                        const a16 = h12.attachInfoMgr;
                        const b16 = a16.attachInfo;
                        const c16 = z15[0];
                        z15[0] = 0;
                        for (const d16 of y15.keys()) {
                            const e16 = y15.get(d16);
                            if (!e16 || !e16.isValid) {
                                y15.delete(d16);
                                continue;
                            }
                            const f16 = b13;
                            const g16 = c16 + d16 * 16;
                            f16.m00 = b16[g16];
                            f16.m01 = b16[g16 + 1];
                            f16.m04 = b16[g16 + 4];
                            f16.m05 = b16[g16 + 5];
                            f16.m12 = b16[g16 + 12];
                            f16.m13 = b16[g16 + 13];
                            e16.matrix = f16;
                        }
                    }
                };
                t12.setSlotTexture = function (s15, t15, u15) {
                    if (this.isAnimationCached()) {
                        console.error(`Cached mode can't change texture of slot`);
                        return;
                    }
                    if (!this._nativeSkeleton)
                        return;
                    const v15 = this.findSlot(s15);
                    if (!v15) {
                        console.error(`No slot named:${s15}`);
                        return;
                    }
                    const w15 = u15 || false;
                    this._nativeSkeleton.setSlotTexture(s15, t15, w15);
                };
                const c13 = cc.internal.SpineAssembler;
                c13.createData = function (r15) { };
                c13.updateRenderData = function (q15) {
                    q15._render();
                    q15.syncAttachedNode();
                };
                c13.fillBuffers = function (o15, p15) { };
            })();
        }, {
            "./jsb-cache-manager": 3
        }],
    13: [function (n9, o9, p9) {
            'use strict';
            if (cc.internal.VideoPlayer) {
                const { EventType: q9 } = cc.internal.VideoPlayer;
                let r9 = cc.Vec3;
                let s9 = cc.Mat4;
                let t9 = new s9();
                let u9 = new r9();
                let v9 = new r9();
                let w9 = 0;
                let x9 = [];
                const y9 = {
                    PLAYING: 0,
                    PAUSED: 1,
                    STOPPED: 2,
                    COMPLETED: 3,
                    META_LOADED: 4,
                    CLICKED: 5,
                    READY_TO_PLAY: 6,
                    UPDATE: 7,
                    QUIT_FULLSCREEN: 1000
                };
                cc.internal.VideoPlayerImplManager.getImpl = function (a12) {
                    return new a10(a12);
                };
                window.oh.onVideoEvent = (v11, w11, x11) => {
                    x9.forEach(z11 => {
                        if (z11.index == v11) {
                            z11.dispatchEvent(w11, x11);
                        }
                    });
                };
                class z9 {
                    constructor() {
                        this._events = {};
                        this._currentTime = 0;
                        this._duration = 0;
                        this._videoIndex = w9++;
                        this._matViewProj_temp = new s9();
                        window.oh.postMessage("createVideo", this._videoIndex);
                        x9.push(this);
                    }
                    get index() {
                        return this._videoIndex;
                    }
                    play() {
                        window.oh.postMessage("startVideo", this._videoIndex);
                    }
                    setURL(u11) {
                        window.oh.postMessage("setVideoUrl", {
                            tag: this._videoIndex,
                            url: u11
                        });
                    }
                    pause() {
                        window.oh.postMessage("pauseVideo", this._videoIndex);
                    }
                    setVisible(t11) {
                        window.oh.postMessage("setVideoVisible", {
                            tag: this._videoIndex,
                            visible: t11
                        });
                    }
                    resume() {
                        window.oh.postMessage("resumeVideo", this._videoIndex);
                    }
                    currentTime() {
                        window.oh.postSyncMessage("currentTime", this._videoIndex).then(s11 => {
                            this._currentTime = s11;
                        });
                        return this._currentTime;
                    }
                    stop() {
                        window.oh.postMessage("stopVideo", this._videoIndex);
                    }
                    seekTo(q11) {
                        window.oh.postMessage("seekVideoTo", {
                            tag: this._videoIndex,
                            time: q11
                        });
                    }
                    duration() {
                        window.oh.postSyncMessage("getVideoDuration", this._videoIndex).then(p11 => {
                            this._duration = p11;
                        });
                        return this._duration;
                    }
                    destroy() {
                        window.oh.postMessage("removeVideo", this._videoIndex);
                    }
                    setFullScreenEnabled(n11) {
                        window.oh.postMessage("setFullScreenEnabled", {
                            tag: this._videoIndex,
                            fullScreen: n11
                        });
                    }
                    setKeepAspectRatioEnabled(m11) {
                        cc.warn('The platform does not support');
                    }
                    setFrame(i11, j11, k11, l11) {
                        window.oh.postMessage("setVideoRect", {
                            tag: this._videoIndex,
                            x: i11,
                            y: j11,
                            w: k11,
                            h: l11
                        });
                    }
                    eventTypeToEventName(g11) {
                        let h11;
                        switch (g11) {
                            case y9.PLAYING:
                                h11 = "play";
                                break;
                            case y9.PAUSED:
                                h11 = "pause";
                                break;
                            case y9.STOPPED:
                                h11 = "stoped";
                                break;
                            case y9.COMPLETED:
                                h11 = "ended";
                                break;
                            case y9.META_LOADED:
                                h11 = "loadedmetadata";
                                break;
                            case y9.CLICKED:
                                h11 = "click";
                                break;
                            case y9.READY_TO_PLAY:
                                h11 = "suspend";
                                break;
                            case y9.UPDATE:
                                h11 = "update";
                                break;
                            case y9.QUIT_FULLSCREEN:
                                h11 = "suspend";
                                break;
                            default:
                                h11 = "none";
                                break;
                        }
                        return h11;
                    }
                    dispatchEvent(b11, c11) {
                        let d11 = this.eventTypeToEventName(b11);
                        const e11 = this._events[d11];
                        if (e11) {
                            for (let f11 = 0; f11 < e11.length; f11++) {
                                e11[f11](c11);
                            }
                        }
                    }
                    addEventListener(z10, a11) {
                        if (!this._events[z10]) {
                            this._events[z10] = [];
                        }
                        this._events[z10].push(a11);
                    }
                    removeEventListener(v10, w10) {
                        const x10 = this._events[v10];
                        if (x10 && x10.length > 0) {
                            for (let y10 = x10.length; y10--; y10 > 0) {
                                if (x10[y10] === w10) {
                                    x10.splice(y10, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                class a10 extends cc.internal.VideoPlayerImpl {
                    constructor(u10) {
                        super(u10);
                        this._matViewProj_temp = new s9();
                    }
                    syncClip(t10) {
                        this.removeVideoPlayer();
                        if (!t10) {
                            return;
                        }
                        this.createVideoPlayer(t10._nativeAsset);
                    }
                    syncURL(s10) {
                        this.removeVideoPlayer();
                        if (!s10) {
                            return;
                        }
                        this.createVideoPlayer(s10);
                    }
                    onCanplay() {
                        if (this._loaded) {
                            return;
                        }
                        this._loaded = true;
                        this.video.setVisible(this._visible);
                        this.dispatchEvent(q9.READY_TO_PLAY);
                        this.delayedPlay();
                    }
                    _bindEvent() {
                        this.video.addEventListener('loadedmetadata', this.onLoadedMetadata.bind(this));
                        this.video.addEventListener('suspend', this.onCanPlay.bind(this));
                        this.video.addEventListener('play', this.onPlay.bind(this));
                        this.video.addEventListener('pause', this.onPause.bind(this));
                        this.video.addEventListener('stoped', this.onStoped.bind(this));
                        this.video.addEventListener('click', this.onClick.bind(this));
                        this.video.addEventListener('ended', this.onEnded.bind(this));
                    }
                    onLoadedMetadata() {
                        this._loadedMeta = true;
                        this._forceUpdate = true;
                        if (this._visible) {
                            this.enable();
                        }
                        else {
                            this.disable();
                        }
                        this.dispatchEvent(q9.META_LOADED);
                        this.delayedFullScreen();
                        this.delayedPlay();
                    }
                    createVideoPlayer(r10) {
                        this._video = new z9();
                        this._bindEvent();
                        this._video.setVisible(this._visible);
                        this._video.setURL(r10);
                        this._forceUpdate = true;
                    }
                    removeVideoPlayer() {
                        let q10 = this.video;
                        if (q10) {
                            q10.stop();
                            q10.setVisible(false);
                            q10.destroy();
                            this._playing = false;
                            this._loaded = false;
                            this._loadedMeta = false;
                            this._ignorePause = false;
                            this._cachedCurrentTime = 0;
                            this._video = null;
                        }
                    }
                    getDuration() {
                        if (!this.video) {
                            return -1;
                        }
                        return this.video.duration();
                    }
                    syncPlaybackRate() {
                        cc.warn('The platform does not support');
                    }
                    syncVolume() {
                        cc.warn('The platform does not support');
                    }
                    syncMute() {
                        cc.warn('The platform does not support');
                    }
                    syncLoop() {
                        cc.warn('The platform does not support');
                    }
                    syncStayOnBottom() {
                        cc.warn('The platform does not support');
                    }
                    getCurrentTime() {
                        if (this.video) {
                            this._cachedCurrentTime = this.video.currentTime();
                            return this._cachedCurrentTime;
                        }
                        return -1;
                    }
                    seekTo(o10) {
                        let p10 = this._video;
                        if (!p10)
                            return;
                        p10.seekTo(o10);
                        this._cachedCurrentTime = o10;
                    }
                    disable(n10) {
                        if (this.video) {
                            if (!n10) {
                                this.video.pause();
                            }
                            this.video.setVisible(false);
                            this._visible = false;
                        }
                    }
                    enable() {
                        if (this.video) {
                            this.video.setVisible(true);
                            this._visible = true;
                        }
                    }
                    canPlay() {
                        this.video.play();
                        this.syncCurrentTime();
                    }
                    resume() {
                        if (this.video) {
                            this.video.resume();
                            this.syncCurrentTime();
                            this._playing = true;
                        }
                    }
                    pause() {
                        if (this.video) {
                            this._cachedCurrentTime = this.video.currentTime();
                            this.video.pause();
                        }
                    }
                    stop() {
                        if (this.video) {
                            this._ignorePause = true;
                            this.video.seekTo(0);
                            this._cachedCurrentTime = 0;
                            this.video.stop();
                        }
                    }
                    canFullScreen(m10) {
                        if (this.video) {
                            this.video.setFullScreenEnabled(m10);
                        }
                    }
                    syncKeepAspectRatio(l10) {
                        if (this.video) {
                            this.video.setKeepAspectRatioEnabled(l10);
                        }
                    }
                    syncMatrix() {
                        if (!this._video || !this._component || !this._uiTrans)
                            return;
                        const d10 = this.UICamera;
                        if (!d10) {
                            return;
                        }
                        this._component.node.getWorldMatrix(t9);
                        const { width: e10, height: f10 } = this._uiTrans.contentSize;
                        if (!this._forceUpdate && d10.matViewProj.equals(this._matViewProj_temp) && this._m00 === t9.m00 && this._m01 === t9.m01 && this._m04 === t9.m04 && this._m05 === t9.m05 && this._m12 === t9.m12 && this._m13 === t9.m13 && this._w === e10 && this._h === f10) {
                            return;
                        }
                        this._matViewProj_temp.set(d10.matViewProj);
                        this._m00 = t9.m00;
                        this._m01 = t9.m01;
                        this._m04 = t9.m04;
                        this._m05 = t9.m05;
                        this._m12 = t9.m12;
                        this._m13 = t9.m13;
                        this._w = e10;
                        this._h = f10;
                        let g10 = cc.game.canvas.width;
                        let h10 = cc.game.canvas.height;
                        let i10 = this._uiTrans.anchorPoint;
                        r9.set(u9, -i10.x * this._w, (1.0 - i10.y) * this._h, 0);
                        r9.set(v9, (1 - i10.x) * this._w, -i10.y * this._h, 0);
                        r9.transformMat4(u9, u9, t9);
                        r9.transformMat4(v9, v9, t9);
                        d10.update();
                        d10.worldToScreen(u9, u9);
                        d10.worldToScreen(v9, v9);
                        let j10 = v9.x - u9.x;
                        let k10 = u9.y - v9.y;
                        this._video.setFrame(u9.x, h10 - u9.y, j10, k10);
                        this._forceUpdate = false;
                    }
                }
            }
        }, {}],
    14: [function (g8, h8, i8) {
            'use strict';
            if (cc.internal.VideoPlayer) {
                const { EventType: j8 } = cc.internal.VideoPlayer;
                let k8 = cc.Vec3;
                let l8 = cc.Mat4;
                let m8 = new l8();
                let n8 = new k8();
                let o8 = new k8();
                cc.internal.VideoPlayerImplManager.getImpl = function (m9) {
                    return new p8(m9);
                };
                class p8 extends cc.internal.VideoPlayerImpl {
                    constructor(l9) {
                        super(l9);
                        this._matViewProj_temp = new l8();
                    }
                    syncClip(k9) {
                        this.removeVideoPlayer();
                        if (!k9) {
                            return;
                        }
                        this.createVideoPlayer(k9._nativeAsset);
                    }
                    syncURL(j9) {
                        this.removeVideoPlayer();
                        if (!j9) {
                            return;
                        }
                        this.createVideoPlayer(j9);
                    }
                    onCanplay() {
                        if (this._loaded) {
                            return;
                        }
                        this._loaded = true;
                        this.video.setVisible(this._visible);
                        this.dispatchEvent(j8.READY_TO_PLAY);
                        this.delayedPlay();
                    }
                    _bindEvent() {
                        this.video.addEventListener('loadedmetadata', this.onLoadedMetadata.bind(this));
                        this.video.addEventListener('suspend', this.onCanPlay.bind(this));
                        this.video.addEventListener('play', this.onPlay.bind(this));
                        this.video.addEventListener('pause', this.onPause.bind(this));
                        this.video.addEventListener('stoped', this.onStoped.bind(this));
                        this.video.addEventListener('click', this.onClick.bind(this));
                        this.video.addEventListener('ended', this.onEnded.bind(this));
                    }
                    onLoadedMetadata() {
                        this._loadedMeta = true;
                        this._forceUpdate = true;
                        if (this._visible) {
                            this.enable();
                        }
                        else {
                            this.disable();
                        }
                        this.dispatchEvent(j8.META_LOADED);
                        this.delayedFullScreen();
                        this.delayedPlay();
                    }
                    createVideoPlayer(i9) {
                        this._video = new jsb.VideoPlayer();
                        this._bindEvent();
                        this._video.setVisible(this._visible);
                        this._video.setURL(i9);
                        this._forceUpdate = true;
                    }
                    removeVideoPlayer() {
                        let h9 = this.video;
                        if (h9) {
                            h9.stop();
                            h9.setVisible(false);
                            h9.destroy();
                            this._playing = false;
                            this._loaded = false;
                            this._loadedMeta = false;
                            this._ignorePause = false;
                            this._cachedCurrentTime = 0;
                            this._video = null;
                        }
                    }
                    getDuration() {
                        if (!this.video) {
                            return -1;
                        }
                        return this.video.duration();
                    }
                    syncPlaybackRate(g9) {
                        if (this.video) {
                            this.video.setPlaybackRate(g9);
                        }
                    }
                    syncVolume() {
                        cc.warn('The platform does not support');
                    }
                    syncMute(f9) {
                        if (this.video && this.video.muted !== f9) {
                            this.video.setMute(f9);
                        }
                    }
                    syncLoop(e9) {
                        if (this.video && this.video.loop !== e9) {
                            this.video.setLoop(e9);
                        }
                    }
                    syncStayOnBottom() {
                        cc.warn('The platform does not support');
                    }
                    getCurrentTime() {
                        if (this.video) {
                            this._cachedCurrentTime = this.video.currentTime();
                            return this._cachedCurrentTime;
                        }
                        return -1;
                    }
                    seekTo(c9) {
                        let d9 = this._video;
                        if (!d9)
                            return;
                        d9.seekTo(c9);
                        this._cachedCurrentTime = c9;
                    }
                    disable(b9) {
                        if (this.video) {
                            if (!b9) {
                                this.video.pause();
                            }
                            this.video.setVisible(false);
                            this._visible = false;
                        }
                    }
                    enable() {
                        if (this.video) {
                            this.video.setVisible(true);
                            this._visible = true;
                        }
                    }
                    canPlay() {
                        this.video.play();
                        this.syncCurrentTime();
                    }
                    resume() {
                        if (this.video) {
                            this.video.resume();
                            this.syncCurrentTime();
                            this._playing = true;
                        }
                    }
                    pause() {
                        if (this.video) {
                            this._cachedCurrentTime = this.video.currentTime();
                            this.video.pause();
                        }
                    }
                    stop() {
                        if (this.video) {
                            this._ignorePause = true;
                            this.video.seekTo(0);
                            this._cachedCurrentTime = 0;
                            this.video.stop();
                        }
                    }
                    canFullScreen(a9) {
                        if (this.video) {
                            this.video.setFullScreenEnabled(a9);
                        }
                    }
                    syncKeepAspectRatio(z8) {
                        if (this.video) {
                            this.video.setKeepAspectRatioEnabled(z8);
                        }
                    }
                    syncMatrix() {
                        if (!this._video || !this._component || !this._uiTrans)
                            return;
                        const r8 = this.UICamera;
                        if (!r8) {
                            return;
                        }
                        this._component.node.getWorldMatrix(m8);
                        const { width: s8, height: t8 } = this._uiTrans.contentSize;
                        if (!this._forceUpdate && r8.matViewProj.equals(this._matViewProj_temp) && this._m00 === m8.m00 && this._m01 === m8.m01 && this._m04 === m8.m04 && this._m05 === m8.m05 && this._m12 === m8.m12 && this._m13 === m8.m13 && this._w === s8 && this._h === t8) {
                            return;
                        }
                        this._matViewProj_temp.set(r8.matViewProj);
                        this._m00 = m8.m00;
                        this._m01 = m8.m01;
                        this._m04 = m8.m04;
                        this._m05 = m8.m05;
                        this._m12 = m8.m12;
                        this._m13 = m8.m13;
                        this._w = s8;
                        this._h = t8;
                        let u8 = cc.game.canvas.width;
                        let v8 = cc.game.canvas.height;
                        let w8 = this._uiTrans.anchorPoint;
                        k8.set(n8, -w8.x * this._w, (1.0 - w8.y) * this._h, 0);
                        k8.set(o8, (1 - w8.x) * this._w, -w8.y * this._h, 0);
                        k8.transformMat4(n8, n8, m8);
                        k8.transformMat4(o8, o8, m8);
                        r8.update();
                        r8.worldToScreen(n8, n8);
                        r8.worldToScreen(o8, o8);
                        let x8 = o8.x - n8.x;
                        let y8 = n8.y - o8.y;
                        this._video.setFrame(n8.x, v8 - n8.y, x8, y8);
                        this._forceUpdate = false;
                    }
                }
            }
        }, {}],
    15: [function (y6, z6, a7) {
            'use strict';
            if (cc.internal.WebView) {
                const { EventType: b7 } = cc.internal.WebView;
                let c7 = cc.Vec3;
                let d7 = cc.Mat4;
                let e7 = new d7();
                let f7 = new c7();
                let g7 = new c7();
                cc.internal.WebViewImplManager.getImpl = function (f8) {
                    return new h7(f8);
                };
                class h7 extends cc.internal.WebViewImpl {
                    constructor(e8) {
                        super(e8);
                        this.jsCallback = null;
                        this.interfaceSchema = null;
                        this._matViewProj_temp = new d7();
                    }
                    _bindEvent() {
                        let a8 = () => {
                            this._forceUpdate = true;
                            this.dispatchEvent(b7.LOADED);
                        };
                        let b8 = () => {
                            this.dispatchEvent(b7.ERROR);
                        };
                        this.webview.setOnDidFinishLoading(a8);
                        this.webview.setOnDidFailLoading(b8);
                        this.jsCallback && this.setOnJSCallback(this.jsCallback);
                        this.interfaceSchema && this.setJavascriptInterfaceScheme(this.interfaceSchema);
                        this.jsCallback = null;
                        this.interfaceSchema = null;
                    }
                    createWebView() {
                        if (!jsb.WebView) {
                            console.warn('jsb.WebView is null');
                            return;
                        }
                        this._webview = jsb.WebView.create();
                        this._bindEvent();
                    }
                    removeWebView() {
                        let z7 = this.webview;
                        if (z7) {
                            this.webview.destroy();
                            this.reset();
                        }
                    }
                    disable() {
                        if (this.webview) {
                            this.webview.setVisible(false);
                        }
                    }
                    enable() {
                        if (this.webview) {
                            this.webview.setVisible(true);
                        }
                    }
                    setOnJSCallback(x7) {
                        let y7 = this.webview;
                        if (y7) {
                            y7.setOnJSCallback(x7);
                        }
                        else {
                            this.jsCallback = x7;
                        }
                    }
                    setJavascriptInterfaceScheme(v7) {
                        let w7 = this.webview;
                        if (w7) {
                            w7.setJavascriptInterfaceScheme(v7);
                        }
                        else {
                            this.interfaceSchema = v7;
                        }
                    }
                    loadURL(t7) {
                        let u7 = this.webview;
                        if (u7) {
                            u7.src = t7;
                            u7.loadURL(t7);
                            this.dispatchEvent(b7.LOADING);
                        }
                    }
                    evaluateJS(r7) {
                        let s7 = this.webview;
                        if (s7) {
                            return s7.evaluateJS(r7);
                        }
                    }
                    syncMatrix() {
                        if (!this._webview || !this._component || !this._uiTrans)
                            return;
                        const j7 = this.UICamera;
                        if (!j7) {
                            return;
                        }
                        this._component.node.getWorldMatrix(e7);
                        const { width: k7, height: l7 } = this._uiTrans.contentSize;
                        if (!this._forceUpdate && j7.matViewProj.equals(this._matViewProj_temp) && this._m00 === e7.m00 && this._m01 === e7.m01 && this._m04 === e7.m04 && this._m05 === e7.m05 && this._m12 === e7.m12 && this._m13 === e7.m13 && this._w === k7 && this._h === l7) {
                            return;
                        }
                        this._matViewProj_temp.set(j7.matViewProj);
                        this._m00 = e7.m00;
                        this._m01 = e7.m01;
                        this._m04 = e7.m04;
                        this._m05 = e7.m05;
                        this._m12 = e7.m12;
                        this._m13 = e7.m13;
                        this._w = k7;
                        this._h = l7;
                        let m7 = cc.game.canvas.width;
                        let n7 = cc.game.canvas.height;
                        let o7 = this._uiTrans.anchorPoint;
                        c7.set(f7, -o7.x * this._w, (1.0 - o7.y) * this._h, 0);
                        c7.set(g7, (1 - o7.x) * this._w, -o7.y * this._h, 0);
                        c7.transformMat4(f7, f7, e7);
                        c7.transformMat4(g7, g7, e7);
                        j7.update();
                        j7.worldToScreen(f7, f7);
                        j7.worldToScreen(g7, g7);
                        let p7 = g7.x - f7.x;
                        let q7 = f7.y - g7.y;
                        this._webview.setFrame(f7.x, n7 - f7.y, p7, q7);
                        this._forceUpdate = false;
                    }
                }
            }
        }, {}],
    16: [function (u6, v6, w6) {
            "use strict";
            const x6 = globalThis.jsb.window = globalThis.jsb.window || {};
            v6.exports = x6;
        }, {}]
}, {}, [1]);
