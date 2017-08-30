import maskTest from './tests/maskTest';
import maskTestSprite from './tests/maskTestSprite';

const PIXI = require('pixi.js');
const SCREEN_WIDTH = 640;
const SCREEN_HEIGHT = 640;

const _init = () => {
  const app = new PIXI.Application({ width: SCREEN_WIDTH, height: SCREEN_HEIGHT });
  // Add the view to the DOM
  document.body.appendChild(app.view);

  // stage
  const stage = app.stage;

  // run mask test
  // maskTest(stage);

  // run mask test sprite
  maskTestSprite(stage);
};

window.onload = _init;
