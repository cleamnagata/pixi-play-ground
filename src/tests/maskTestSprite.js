export default (stage) => {
  const KEYS = {
    BASE: '/assets/base.png',
    INNER: '/assets/inner.png',
  };

  const GAUGE_WIDTH = 200;
  const GAUGE_HEIGHT = 10;
  const MAIN_CONTAINER_SIZE = 400;

  class MainContainer extends PIXI.Container {
    constructor() {
      super();
      const bg = new PIXI.Graphics();
      bg.beginFill(0xFFFFFF, 0.5)
        .drawRect(0, 0, MAIN_CONTAINER_SIZE, MAIN_CONTAINER_SIZE)
        .endFill();
      this.addChild(bg);

      this.mask = new PIXI.Graphics();
      this.mask.beginFill(0xFFFFFF)
        .drawRect(0, 0, MAIN_CONTAINER_SIZE, MAIN_CONTAINER_SIZE)
        .endFill();

      this.addChild(this.mask);
    }
  }

  class GaugeBase extends PIXI.Sprite {
    constructor() {
      super(PIXI.loader.resources[KEYS.BASE].texture);
    }
  }

  class Gauge extends PIXI.Sprite {
    constructor() {
      super(PIXI.loader.resources[KEYS.INNER].texture);

      const subWidth = 20;
      this.mask = new PIXI.Graphics();
      this.mask.beginFill(0xFFFFFF)
        .drawRect(0, 0, this.width - 10, this.height)
        .endFill();

      this.addChild(this.mask);
    }
  }

  // container
  const mainContainer = new MainContainer();
  stage.addChild(mainContainer);
  mainContainer.position.set(100, 100);

  const manifests = [];
  manifests.push({ name: KEYS.BASE, url: KEYS.BASE });
  manifests.push({ name: KEYS.INNER, url: KEYS.INNER });
  PIXI.loader.add(manifests).load(() => {
    console.log(PIXI.loader.resources);

    // position
    const gaugePosition = {
      // x: 100,
      x: -60, // mainContainer より左にずらす
      y: 100,
    };

    console.log(1);

    // gauge base
    const gaugeBase = new GaugeBase();
    mainContainer.addChild(gaugeBase);
    gaugeBase.position.set(gaugePosition.x, gaugePosition.y);

    // gauge
    const gauge = new Gauge();
    mainContainer.addChild(gauge);
    gauge.position.set(gaugePosition.x + 2, gaugePosition.y + 2);
  });
};