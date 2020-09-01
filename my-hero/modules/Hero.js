import Sprite from './Sprite.js';

export default class Hero extends Sprite {
  constructor(x, y, context) {
    super({
      type          : 'hero',
      context       : context,
      src           : './assets/images/HeroKnight.png',
      x             : x,
      y             : y,
      width         : 100,
      height        : 55,
      speedX        : 3,
      speedY        : 0,
      frameIndex    : 0,
      row           : 0,
      tickCount     : 0,
      ticksPerFrame : 5,
      frames        : 8,
    
      gravity       : 0.1,
      gravitySpeed  : 0
    })
  }
}