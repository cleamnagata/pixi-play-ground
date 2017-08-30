export default (stage) => {
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

  class GaugeBase extends PIXI.Graphics {
    constructor() {
      super();
      this.beginFill(0x000000)
        .drawRect(0, 0, GAUGE_WIDTH, GAUGE_HEIGHT)
        .endFill();
    }
  }

  class Gauge extends PIXI.Graphics {
    constructor() {
      super();
      this.beginFill(0xff5230)
        .drawRect(0, 0, GAUGE_WIDTH, GAUGE_HEIGHT)
        .endFill();

      const subWidth = 20;
      this.mask = new PIXI.Graphics();
      this.mask.beginFill(0xFFFFFF)
        .drawRect(0, 0, GAUGE_WIDTH - subWidth, GAUGE_HEIGHT)
        .endFill();

      this.addChild(this.mask);
    }
  }

  // container
  const mainContainer = new MainContainer();
  stage.addChild(mainContainer);
  mainContainer.position.set(100, 100);

  // position
  const gaugePosition = {
    // x: 100,
    x: -60, // mainContainer より左にずらす
    y: 100,
  };

  // gauge base
  const gaugeBase = new GaugeBase();
  mainContainer.addChild(gaugeBase);
  gaugeBase.position.set(gaugePosition.x, gaugePosition.y);

  // gauge
  const gauge = new Gauge();
  mainContainer.addChild(gauge);
  gauge.position.set(gaugePosition.x, gaugePosition.y);
};