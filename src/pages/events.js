import captureMouse from '../utils/captureMouse';
import captureTouch from '../utils/captureTouch';
import keycode from '../utils/keycode';

const events = (canvas) => {
  var mouse = captureMouse(canvas);
  var touch = captureTouch(canvas);
  var debugEl = document.querySelector('.debug');
  var debugPositionEl = document.querySelector('.debug--position');
  
  function onMouseEvent(event) {
    debugEl.innerHTML = `<h2>${event.type}</h2>`;
    
    switch (event.type) {
      case 'mousedown': {
        var posStr = "x: " + mouse.x + ", y: " + mouse.y;
        debugPositionEl.innerHTML = `<h2>${posStr}</h2>`;
      }
    }
  }

  function onTouchEvent(event) {
    debugEl.innerHTML = `<h2>${event.type}</h2>`;

    if (touch.isPressed) {
      var posStr = "x: " + touch.x + ", y: " + touch.y;
      debugPositionEl.innerHTML = `<h2>${posStr}</h2>`;
    }
  }

  function onKeyboardEvent (event) {
    switch (event.keyCode) {
      case keycode.UP:
        console.log("up!");
        break;
      case keycode.DOWN:
        console.log("down!");
        break;
      case keycode.LEFT:
        console.log("left!");
        break;
      case keycode.RIGHT:
        console.log("right!");
        break;
      default:
        console.log(event.keyCode);
      }
  }

  canvas.addEventListener('mousedown', onMouseEvent, false);
  canvas.addEventListener('mouseup', onMouseEvent, false);
  canvas.addEventListener('click', onMouseEvent, false);
  canvas.addEventListener('dblclick', onMouseEvent, false);
  canvas.addEventListener('mousewheel', onMouseEvent, false);
  canvas.addEventListener('mousemove', onMouseEvent, false);
  canvas.addEventListener('mouseover', onMouseEvent, false);
  canvas.addEventListener('mouseout', onMouseEvent, false);

  canvas.addEventListener('touchstart', onTouchEvent, false);
  canvas.addEventListener('touchend', onTouchEvent, false);
  canvas.addEventListener('touchmove', onTouchEvent, false);

  window.addEventListener('keydown', onKeyboardEvent, false);
  window.addEventListener('keyup', onKeyboardEvent, false);
}

export default events;