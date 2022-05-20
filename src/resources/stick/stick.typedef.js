/**
 * @name Stick
 * @typedef {Object} Stick
 * @property {number} stick.x Stick x axis
 * @property {number} stick.y Stick y axis
 * @property {boolean} stick.pending Stick status is pending (When x is 0 and
 * the y is 0)
 * @property {null|Object} stick.onPending Runs this method when pending is true
 */

/**
 * Stick callback method, its runs when condition returns true.
 * @callback callback
 * @param {number} index
 * @param {Object} next
 * @this {Stick} Gamepad stick
 * @return {void}
 */

/**
 * Runs with every frame and is able to check stick position.
 * @callback condition
 * @this {Stick} Gamepad stick
 * @return {boolean}
 */
