/**
 * @name Gamepad
 * @typedef {Object} Gamepad
 * @param {number[]} axes Gamepad stick axes
 * @param {GamepadButton[]} buttons Gamepad buttons
 * @param {boolean} connected Gamepad connection status
 * @param {string} id Gamepad name
 * @param {number} index Gamepad index
 * @param {string} mapping Gamepad button mapping
 * @param {number} timestamp
 * @param {GamepadHapticActuator} vibrationActuator
 */

/**
 * @name GamepadButton
 * @typedef {Object} GamepadButton
 * @param {boolean} pressed Gamepad button pressed status
 * @param {boolean} touched Gamepad button touched status
 * @param {number} value Gamepad button value
 */

/**
 * @name GamepadHapticActuator
 * @typedef {Object} GamepadHapticActuator
 * @param {string} type
 */
