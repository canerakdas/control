# Control

An interface that makes the Gamepad api in the browser easier to use

## Examples

```js
const Control = require("control"); // CommonJS

import * as Control from "control"; // TypeScript

import Control from "control"; // ES6 (and TypeScript with --esModuleInterop enabled)
```

### Getting started

```js
window.addEventListener('gamepadconnected', (event) => {
  const control = new Control(event.gamepad, 'XBOX'); // It would be Control.default when you added directly to the page.

  control.button.onPress('A', function(index, next) {
    console.log('A Pressed');
    next();
  });


  control.button.onRelease('A', function(index, next) {
    console.log('A Released');
    next();
  });
});
```

### Button press

Runs the given function when controller button is pressed

```js
const condition = false;

control.button.onPress('A', function (index, next) {
  console.log(`A Pressed, button index is ${index}`);
  next();
});

// 0 and 'A' is same
control.button.onPress(0, function (index, next) {
  console.log(`A Pressed, button index is ${index}`);
  condition = true;
  next();
});

control.button.onPress(0, function (index, next) {
  if (condition === true) {
    console.log(this);
  } else {
    next();
  }
});


control.button.onPress('A', function (index, next) {
  console.log('Never run this');
});
```

### Button release

Runs the given function when controller button is released

```js
const condition = false;

control.button.onRelease('A', function (index, next) {
  console.log('A Released');
  next();
});
```

### Stick

#### Stick Up

```js
control.stick.right.drag('UP', function() {
  console.log(`Right stick dragged into the up: ${JSON.stringify(this)}`);
});
```

#### Stick Down

```js
control.stick.right.drag('DOWN', function() {
  console.log(`Right stick dragged into the down: ${JSON.stringify(this)}`);
});
```

#### Stick Left

```js
control.stick.left.drag('LEFT', function() {
  console.log(`Left stick dragged into the left: ${JSON.stringify(this)}`);
});
```

#### Stick Right

```js
control.stick.left.drag('RIGHT', function() {
  console.log(`Left stick dragged into the right: ${JSON.stringify()}`);
});
```

#### Custom stick position

```js
control.stick.left.drag(
    'CUSTOM',
    function() {
      console.log(`Custom position: ${JSON.stringify(this)}`);
    },
    function() {
      if (this.x >= 99) {
        return true;
      }
      return false;
    },
);
```
