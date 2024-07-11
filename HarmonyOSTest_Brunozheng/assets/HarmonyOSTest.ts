import { _decorator, Component, Node, Vec3, UITransform, Sprite, resources, SpriteFrame } from 'cc';

const { ccclass } = _decorator;

@ccclass('HarmonyTestComponent')
export class HarmonyTestComponent extends Component {
  start() {
    this.node.getChildByName('Button')!.on(Node.EventType.TOUCH_END, () => {
      const currentTime = Date.now()
      console.error('brunozheng', `start test for each ${currentTime}`)
      let index = 0
      let result = 0
      while (index < 10000000) {
        result = result + index
        index = index + 1
      }

      console.error('brunozheng', `result = ${result}, deltaTime=${Date.now() - currentTime}`)
    })
  }

  private spriteNodes = new Array<SpriteNode>()

  private generateSpriteNode(length: number) {
    while (length > 0) {
      this.spriteNodes.push(new SpriteNode(this.node))
      length = length - 1
    }
  }

  update(deltaTime: number) {
    this.spriteNodes.forEach((item) => {
      let index = 0
      while (index < 100) {
        item.update(deltaTime)
        index = index + 1
      }
    })
  }

}

export class SpriteNode {
  private direction: Vec3 = new Vec3();
  private speed: number = 1000; // 每秒移动的像素数
  private spriteNode: Node | undefined = undefined

  constructor(private parentNode: Node) {
    this.makeNode()
    this.setRandomDirection();
  }

  private setRandomDirection() {
    let angle = Math.random() * 360;
    let radian = angle * (Math.PI / 180);
    this.direction.x = Math.cos(radian);
    this.direction.y = Math.sin(radian);
  }

  update(deltaTime: number) {
    if (!this.spriteNode) {
      return
    }
    let moveOffset = this.direction.clone().multiplyScalar(this.speed * deltaTime);
    this.spriteNode!.position = this.spriteNode!.position.add(moveOffset);

    // 检查边缘碰撞
    this.checkEdgeCollision();
  }

  checkEdgeCollision() {
    let spriteTransform = this.spriteNode!.getComponent(UITransform)!;
    let spritePos = this.spriteNode!.position!;
    let parentTransform = this.parentNode.getComponent(UITransform)!;
    let parentSize = parentTransform.contentSize;

    let halfWidth = spriteTransform.width / 2;
    let halfHeight = spriteTransform.height / 2;

    // 考虑锚点值
    let anchorX = parentTransform.anchorX;
    let anchorY = parentTransform.anchorY;

    let minX = -parentSize.width * anchorX + halfWidth;
    let maxX = parentSize.width * (1 - anchorX) - halfWidth;
    let minY = -parentSize.height * anchorY + halfHeight;
    let maxY = parentSize.height * (1 - anchorY) - halfHeight;

    let collided = false;

    if (spritePos.x < minX) {
      this.direction.x *= -1;
      this.spriteNode!.setPosition(minX, spritePos.y);
      collided = true;
    } else if (spritePos.x > maxX) {
      this.direction.x *= -1;
      this.spriteNode!.setPosition(maxX, spritePos.y);
      collided = true;
    }

    if (spritePos.y < minY) {
      this.direction.y *= -1;
      this.spriteNode!.setPosition(spritePos.x, minY);
      collided = true;
    } else if (spritePos.y > maxY) {
      this.direction.y *= -1;
      this.spriteNode!.setPosition(spritePos.x, maxY);
      collided = true;
    }

    if (collided) {
      // 轻微调整位置以避免再次碰撞
      let adjustOffset = this.direction.clone().multiplyScalar(1);
      this.spriteNode!.position = this.spriteNode!.position.add(adjustOffset);
    }
  }


  makeNode() {
    const node = new Node()
    const uiTransform = node.addComponent(UITransform)!
    uiTransform.contentSize.set(100, 100)
    uiTransform.anchorPoint.set(0.5, 0.5)
    const sprite = node.addComponent(Sprite)!
    resources.load('img/dm_first_avatar/spriteFrame', SpriteFrame, (error, asset) => {
      sprite.spriteFrame = asset
      this.parentNode.addChild(node)
      this.spriteNode = node
    });
  }
}
