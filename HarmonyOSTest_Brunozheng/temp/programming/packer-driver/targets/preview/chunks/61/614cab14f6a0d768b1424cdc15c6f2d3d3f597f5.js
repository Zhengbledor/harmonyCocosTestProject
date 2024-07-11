System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, UITransform, Sprite, resources, SpriteFrame, SpriteNode, _dec, _class, _crd, ccclass, HarmonyTestComponent;

  _export("SpriteNode", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b2d8cySAVBLYsuRew4q/s+", "HarmonyOSTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'Sprite', 'resources', 'SpriteFrame']);

      ({
        ccclass
      } = _decorator);

      _export("HarmonyTestComponent", HarmonyTestComponent = (_dec = ccclass('HarmonyTestComponent'), _dec(_class = class HarmonyTestComponent extends Component {
        constructor() {
          super(...arguments);
          this.spriteNodes = new Array();
        }

        start() {
          this.node.getChildByName('Button').on(Node.EventType.TOUCH_END, () => {
            var currentTime = Date.now();
            console.error('brunozheng', "start test for each " + currentTime);
            var index = 0;
            var result = 0;

            while (index < 10000000) {
              result = result + index;
              index = index + 1;
            }

            console.error('brunozheng', "result = " + result + ", deltaTime=" + (Date.now() - currentTime));
          });
        }

        generateSpriteNode(length) {
          while (length > 0) {
            this.spriteNodes.push(new SpriteNode(this.node));
            length = length - 1;
          }
        }

        update(deltaTime) {
          this.spriteNodes.forEach(item => {
            var index = 0;

            while (index < 100) {
              item.update(deltaTime);
              index = index + 1;
            }
          });
        }

      }) || _class));

      _export("SpriteNode", SpriteNode = class SpriteNode {
        constructor(parentNode) {
          this.direction = new Vec3();
          this.speed = 1000;
          // 每秒移动的像素数
          this.spriteNode = undefined;
          this.parentNode = parentNode;
          this.makeNode();
          this.setRandomDirection();
        }

        setRandomDirection() {
          var angle = Math.random() * 360;
          var radian = angle * (Math.PI / 180);
          this.direction.x = Math.cos(radian);
          this.direction.y = Math.sin(radian);
        }

        update(deltaTime) {
          if (!this.spriteNode) {
            return;
          }

          var moveOffset = this.direction.clone().multiplyScalar(this.speed * deltaTime);
          this.spriteNode.position = this.spriteNode.position.add(moveOffset); // 检查边缘碰撞

          this.checkEdgeCollision();
        }

        checkEdgeCollision() {
          var spriteTransform = this.spriteNode.getComponent(UITransform);
          var spritePos = this.spriteNode.position;
          var parentTransform = this.parentNode.getComponent(UITransform);
          var parentSize = parentTransform.contentSize;
          var halfWidth = spriteTransform.width / 2;
          var halfHeight = spriteTransform.height / 2; // 考虑锚点值

          var anchorX = parentTransform.anchorX;
          var anchorY = parentTransform.anchorY;
          var minX = -parentSize.width * anchorX + halfWidth;
          var maxX = parentSize.width * (1 - anchorX) - halfWidth;
          var minY = -parentSize.height * anchorY + halfHeight;
          var maxY = parentSize.height * (1 - anchorY) - halfHeight;
          var collided = false;

          if (spritePos.x < minX) {
            this.direction.x *= -1;
            this.spriteNode.setPosition(minX, spritePos.y);
            collided = true;
          } else if (spritePos.x > maxX) {
            this.direction.x *= -1;
            this.spriteNode.setPosition(maxX, spritePos.y);
            collided = true;
          }

          if (spritePos.y < minY) {
            this.direction.y *= -1;
            this.spriteNode.setPosition(spritePos.x, minY);
            collided = true;
          } else if (spritePos.y > maxY) {
            this.direction.y *= -1;
            this.spriteNode.setPosition(spritePos.x, maxY);
            collided = true;
          }

          if (collided) {
            // 轻微调整位置以避免再次碰撞
            var adjustOffset = this.direction.clone().multiplyScalar(1);
            this.spriteNode.position = this.spriteNode.position.add(adjustOffset);
          }
        }

        makeNode() {
          var node = new Node();
          var uiTransform = node.addComponent(UITransform);
          uiTransform.contentSize.set(100, 100);
          uiTransform.anchorPoint.set(0.5, 0.5);
          var sprite = node.addComponent(Sprite);
          resources.load('img/dm_first_avatar/spriteFrame', SpriteFrame, (error, asset) => {
            sprite.spriteFrame = asset;
            this.parentNode.addChild(node);
            this.spriteNode = node;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=614cab14f6a0d768b1424cdc15c6f2d3d3f597f5.js.map