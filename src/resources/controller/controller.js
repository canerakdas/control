'use strict';

import layouts from '../../config/layouts.json';

import Button from '../button/button.js';
import Stick from '../stick/stick.js';

/**
 * @class Controller
 */
class Control {
  /**
   * Initializes the controller.
   * @param {Gamepad} gamepad Browser gamepad object
   * @param {string} layout Gamepad layout
   */
  constructor(gamepad, layout = 'XBOX') {
    this.gamepad = navigator.getGamepads()[gamepad.index];
    this.layout = layouts[layout];
    this.button = new Button(this.gamepad, this.layout);
    this.stick = {
      left: new Stick(),
      right: new Stick(),
    };

    /**
     * Checks every frame when controller event triggered binds the event to the
     * controller.
     * @return {undefined}
     */
    const nextFrame = () => {
      this.gamepad = navigator.getGamepads()[this.gamepad.index];
      if (!this.gamepad) return;

      this.button.update(this.gamepad.buttons);
      this.stick.left.update([this.gamepad.axes[0], this.gamepad.axes[1]]);
      this.stick.right.update([this.gamepad.axes[2], this.gamepad.axes[3]]);

      requestAnimationFrame(nextFrame);
    };

    requestAnimationFrame(nextFrame);
  }
}

export default Control;
