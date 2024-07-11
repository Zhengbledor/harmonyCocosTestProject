System.register("chunks:///_virtual/debug-view-runtime-control.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (o2) {
    var p2, q2, r2, s2, t2, u2, v2, w2, x2, y2, z2, a3, b3, c3, d3;
    return {
        setters: [function (o5) {
                p2 = o5.applyDecoratedDescriptor, q2 = o5.initializerDefineProperty;
            }, function (n5) {
                r2 = n5.cclegacy, s2 = n5.Node, t2 = n5._decorator, u2 = n5.Component, v2 = n5.Color, w2 = n5.Canvas, x2 = n5.UITransform, y2 = n5.instantiate, z2 = n5.Label, a3 = n5.RichText, b3 = n5.Toggle, c3 = n5.Button, d3 = n5.director;
            }],
        execute: function () {
            var e3, f3, g3, h3, i3, j3, k3, l3, m3;
            r2._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", void 0);
            const { ccclass: n3, property: o3 } = t2;
            o2("DebugViewRuntimeControl", (e3 = n3("internal.DebugViewRuntimeControl"), f3 = o3(s2), g3 = o3(s2), h3 = o3(s2), e3((k3 = p2((j3 = class extends u2 {
                constructor(...m5) {
                    super(...m5), q2(this, "compositeModeToggle", k3, this), q2(this, "singleModeToggle", l3, this), q2(this, "EnableAllCompositeModeButton", m3, this), this._single = 0, this.strSingle = ["No Single Debug", "Vertex Color", "Vertex Normal", "Vertex Tangent", "World Position", "Vertex Mirror", "Face Side", "UV0", "UV1", "UV Lightmap", "Project Depth", "Linear Depth", "Fragment Normal", "Fragment Tangent", "Fragment Binormal", "Base Color", "Diffuse Color", "Specular Color", "Transparency", "Metallic", "Roughness", "Specular Intensity", "IOR", "Direct Diffuse", "Direct Specular", "Direct All", "Env Diffuse", "Env Specular", "Env All", "Emissive", "Light Map", "Shadow", "AO", "Fresnel", "Direct Transmit Diffuse", "Direct Transmit Specular", "Env Transmit Diffuse", "Env Transmit Specular", "Transmit All", "Direct Internal Specular", "Env Internal Specular", "Internal All", "Fog"], this.strComposite = ["Direct Diffuse", "Direct Specular", "Env Diffuse", "Env Specular", "Emissive", "Light Map", "Shadow", "AO", "Normal Map", "Fog", "Tone Mapping", "Gamma Correction", "Fresnel", "Transmit Diffuse", "Transmit Specular", "Internal Specular", "TT"], this.strMisc = ["CSM Layer Coloration", "Lighting With Albedo"], this.compositeModeToggleList = [], this.singleModeToggleList = [], this.miscModeToggleList = [], this.textComponentList = [], this.labelComponentList = [], this.textContentList = [], this.hideButtonLabel = void 0, this._currentColorIndex = 0, this.strColor = ["<color=#ffffff>", "<color=#000000>", "<color=#ff0000>", "<color=#00ff00>", "<color=#0000ff>"], this.color = [v2.WHITE, v2.BLACK, v2.RED, v2.GREEN, v2.BLUE];
                }
                start() {
                    if (!this.node.parent.getComponent(w2)) {
                        return void console.error("debug-view-runtime-control should be child of Canvas");
                    }
                    const o4 = this.node.parent.getComponent(x2), p4 = .5 * o4.width, q4 = .5 * o4.height;
                    let r4 = .1 * p4 - p4, s4 = q4 - .1 * q4;
                    const t4 = this.node.getChildByName("MiscMode"), u4 = y2(t4);
                    u4.parent = this.node, u4.name = "Buttons";
                    const v4 = y2(t4);
                    v4.parent = this.node, v4.name = "Titles";
                    for (let j5 = 0; j5 < 2; j5++) {
                        const k5 = y2(this.EnableAllCompositeModeButton.getChildByName("Label"));
                        k5.setPosition(r4 + (j5 > 0 ? 450 : 150), s4, 0), k5.setScale(.75, .75, .75), k5.parent = v4;
                        const l5 = k5.getComponent(z2);
                        l5.string = j5 ? "----------Composite Mode----------" : "----------Single Mode----------", l5.color = v2.WHITE, l5.overflow = 0, this.labelComponentList[this.labelComponentList.length] = l5;
                    }
                    s4 -= 20;
                    let w4 = 0;
                    for (let g5 = 0; g5 < this.strSingle.length; g5++, w4++) {
                        g5 === this.strSingle.length >> 1 && (r4 += 200, w4 = 0);
                        const h5 = g5 ? y2(this.singleModeToggle) : this.singleModeToggle;
                        h5.setPosition(r4, s4 - 20 * w4, 0), h5.setScale(.5, .5, .5), h5.parent = this.singleModeToggle.parent;
                        const i5 = h5.getComponentInChildren(a3);
                        i5.string = this.strSingle[g5], this.textComponentList[this.textComponentList.length] = i5, this.textContentList[this.textContentList.length] = i5.string, h5.on(b3.EventType.TOGGLE, this.toggleSingleMode, this), this.singleModeToggleList[g5] = h5;
                    }
                    r4 += 200, this.EnableAllCompositeModeButton.setPosition(r4 + 15, s4, 0), this.EnableAllCompositeModeButton.setScale(.5, .5, .5), this.EnableAllCompositeModeButton.on(c3.EventType.CLICK, this.enableAllCompositeMode, this), this.EnableAllCompositeModeButton.parent = u4;
                    let x4 = this.EnableAllCompositeModeButton.getComponentInChildren(z2);
                    this.labelComponentList[this.labelComponentList.length] = x4;
                    const y4 = y2(this.EnableAllCompositeModeButton);
                    y4.setPosition(r4 + 90, s4, 0), y4.setScale(.5, .5, .5), y4.on(c3.EventType.CLICK, this.changeTextColor, this), y4.parent = u4, x4 = y4.getComponentInChildren(z2), x4.string = "TextColor", this.labelComponentList[this.labelComponentList.length] = x4;
                    const z4 = y2(this.EnableAllCompositeModeButton);
                    z4.setPosition(r4 + 200, s4, 0), z4.setScale(.5, .5, .5), z4.on(c3.EventType.CLICK, this.hideUI, this), z4.parent = this.node.parent, x4 = z4.getComponentInChildren(z2), x4.string = "Hide UI", this.labelComponentList[this.labelComponentList.length] = x4, this.hideButtonLabel = x4, s4 -= 40;
                    for (let d5 = 0; d5 < this.strMisc.length; d5++) {
                        const e5 = y2(this.compositeModeToggle);
                        e5.setPosition(r4, s4 - 20 * d5, 0), e5.setScale(.5, .5, .5), e5.parent = t4;
                        const f5 = e5.getComponentInChildren(a3);
                        f5.string = this.strMisc[d5], this.textComponentList[this.textComponentList.length] = f5, this.textContentList[this.textContentList.length] = f5.string;
                        e5.getComponent(b3).isChecked = !!d5, e5.on(b3.EventType.TOGGLE, d5 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this), this.miscModeToggleList[d5] = e5;
                    }
                    s4 -= 150;
                    for (let a5 = 0; a5 < this.strComposite.length; a5++) {
                        const b5 = a5 ? y2(this.compositeModeToggle) : this.compositeModeToggle;
                        b5.setPosition(r4, s4 - 20 * a5, 0), b5.setScale(.5, .5, .5), b5.parent = this.compositeModeToggle.parent;
                        const c5 = b5.getComponentInChildren(a3);
                        c5.string = this.strComposite[a5], this.textComponentList[this.textComponentList.length] = c5, this.textContentList[this.textContentList.length] = c5.string, b5.on(b3.EventType.TOGGLE, this.toggleCompositeMode, this), this.compositeModeToggleList[a5] = b5;
                    }
                }
                isTextMatched(k4, l4) {
                    let m4 = new String(k4);
                    const n4 = m4.search(">");
                    return -1 === n4 ? k4 === l4 : (m4 = m4.substr(n4 + 1), m4 = m4.substr(0, m4.search("<")), m4 === l4);
                }
                toggleSingleMode(g4) {
                    const h4 = d3.root.debugView, i4 = g4.getComponentInChildren(a3);
                    for (let j4 = 0; j4 < this.strSingle.length; j4++) {
                        this.isTextMatched(i4.string, this.strSingle[j4]) && (h4.singleMode = j4);
                    }
                }
                toggleCompositeMode(c4) {
                    const d4 = d3.root.debugView, e4 = c4.getComponentInChildren(a3);
                    for (let f4 = 0; f4 < this.strComposite.length; f4++) {
                        this.isTextMatched(e4.string, this.strComposite[f4]) && d4.enableCompositeMode(f4, c4.isChecked);
                    }
                }
                toggleLightingWithAlbedo(b4) {
                    d3.root.debugView.lightingWithAlbedo = b4.isChecked;
                }
                toggleCSMColoration(a4) {
                    d3.root.debugView.csmLayerColoration = a4.isChecked;
                }
                enableAllCompositeMode(w3) {
                    const x3 = d3.root.debugView;
                    x3.enableAllCompositeMode(!0);
                    for (let z3 = 0; z3 < this.compositeModeToggleList.length; z3++) {
                        this.compositeModeToggleList[z3].getComponent(b3).isChecked = !0;
                    }
                    let y3 = this.miscModeToggleList[0].getComponent(b3);
                    y3.isChecked = !1, x3.csmLayerColoration = !1, y3 = this.miscModeToggleList[1].getComponent(b3), y3.isChecked = !0, x3.lightingWithAlbedo = !0;
                }
                hideUI(t3) {
                    const u3 = this.node.getChildByName("Titles"), v3 = !u3.active;
                    this.singleModeToggleList[0].parent.active = v3, this.miscModeToggleList[0].parent.active = v3, this.compositeModeToggleList[0].parent.active = v3, this.EnableAllCompositeModeButton.parent.active = v3, u3.active = v3, this.hideButtonLabel.string = v3 ? "Hide UI" : "Show UI";
                }
                changeTextColor(q3) {
                    this._currentColorIndex++, this._currentColorIndex >= this.strColor.length && (this._currentColorIndex = 0);
                    for (let s3 = 0; s3 < this.textComponentList.length; s3++) {
                        this.textComponentList[s3].string = this.strColor[this._currentColorIndex] + this.textContentList[s3] + "</color>";
                    }
                    for (let r3 = 0; r3 < this.labelComponentList.length; r3++) {
                        this.labelComponentList[r3].color = this.color[this._currentColorIndex];
                    }
                }
                onLoad() { }
                update(p3) { }
            }).prototype, "compositeModeToggle", [f3], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null;
                }
            }), l3 = p2(j3.prototype, "singleModeToggle", [g3], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null;
                }
            }), m3 = p2(j3.prototype, "EnableAllCompositeModeButton", [h3], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null;
                }
            }), i3 = j3)) || i3));
            r2._RF.pop();
        }
    };
});
System.register("chunks:///_virtual/HarmonyOSTest.ts", ["cc"], function (s) {
    var t, u, v, w, x, y, z, a1, b1;
    return {
        setters: [function (n2) {
                t = n2.cclegacy, u = n2.Component, v = n2.Node, w = n2.Vec3, x = n2.UITransform, y = n2.Sprite, z = n2.resources, a1 = n2.SpriteFrame, b1 = n2._decorator;
            }],
        execute: function () {
            var c1;
            t._RF.push({}, "6b2d8cySAVBLYsuRew4q/s+", "HarmonyOSTest", void 0);
            const { ccclass: d1 } = b1;
            s("HarmonyTestComponent", d1("HarmonyTestComponent")(c1 = class extends u {
                constructor(...m2) {
                    super(...m2), this.spriteNodes = new Array();
                }
                start() {
                    this.node.getChildByName("Button").on(v.EventType.TOUCH_END, () => {
                        const j2 = Date.now();
                        console.error("brunozheng", `start test for each ${j2}`);
                        let k2 = 0, l2 = 0;
                        for (; k2 < 1e7;) {
                            l2 += k2, k2 += 1;
                        }
                        console.error("brunozheng", `result = ${l2}, deltaTime=${Date.now() - j2}`);
                    });
                    this.generateSpriteNode(100);
                }
                generateSpriteNode(h2) {
                    for (; h2 > 0;) {
                        this.spriteNodes.push(new e1(this.node)), h2 -= 1;
                    }
                }
                update(d2) {
                    this.spriteNodes.forEach(f2 => {
                        let g2 = 0;
                        for (; g2 < 100;) {
                            f2.update(d2), g2 += 1;
                        }
                    });
                }
            }) || c1);
            class e1 {
                constructor(c2) {
                    this.direction = new w(), this.speed = 1e3, this.spriteNode = void 0, this.parentNode = c2, this.makeNode(), this.setRandomDirection();
                }
                setRandomDirection() {
                    let b2 = 180 * (Math.PI / 180);
                    this.direction.x = Math.cos(b2), this.direction.y = Math.sin(b2);
                }
                update(z1) {
                    if (!this.spriteNode) {
                        return;
                    }
                    let a2 = this.direction.clone().multiplyScalar(this.speed * z1);
                    this.spriteNode.position = this.spriteNode.position.add(a2), this.checkEdgeCollision();
                }
                checkEdgeCollision() {
                    let l1 = this.spriteNode.getComponent(x), m1 = this.spriteNode.position, n1 = this.parentNode.getComponent(x), o1 = n1.contentSize, p1 = l1.width / 2, q1 = l1.height / 2, r1 = n1.anchorX, s1 = n1.anchorY, t1 = -o1.width * r1 + p1, u1 = o1.width * (1 - r1) - p1, v1 = -o1.height * s1 + q1, w1 = o1.height * (1 - s1) - q1, x1 = !1;
                    if (m1.x < t1 ? (this.direction.x *= -1, this.spriteNode.setPosition(t1, m1.y), x1 = !0) : m1.x > u1 && (this.direction.x *= -1, this.spriteNode.setPosition(u1, m1.y), x1 = !0), m1.y < v1 ? (this.direction.y *= -1, this.spriteNode.setPosition(m1.x, v1), x1 = !0) : m1.y > w1 && (this.direction.y *= -1, this.spriteNode.setPosition(m1.x, w1), x1 = !0), x1) {
                        let y1 = this.direction.clone().multiplyScalar(1);
                        this.spriteNode.position = this.spriteNode.position.add(y1);
                    }
                }
                makeNode() {
                    const f1 = new v(), g1 = f1.addComponent(x);
                    g1.contentSize.set(100, 100), g1.anchorPoint.set(.5, .5);
                    const h1 = f1.addComponent(y);
                    z.load("img/dm_first_avatar/spriteFrame", a1, (j1, k1) => {
                        h1.spriteFrame = k1, this.parentNode.addChild(f1), this.spriteNode = f1;
                    });
                }
            }
            s("SpriteNode", e1), t._RF.pop();
        }
    };
});
System.register("chunks:///_virtual/main", ["./debug-view-runtime-control.ts", "./HarmonyOSTest.ts"], function () {
    return {
        setters: [null, null],
        execute: function () { }
    };
});
(function (r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function (j, k) {
    System.register(j, [k], function (m, n) {
        return {
            setters: [function (o) {
                    var p = {};
                    for (var q in o) {
                        if (q !== "default" && q !== "__esModule") {
                            p[q] = o[q];
                        }
                    }
                    m(p);
                }],
            execute: function () { }
        };
    });
});
