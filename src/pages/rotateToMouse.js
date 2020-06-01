import Arrow from '../classes/arrow';
import Triangle from '../classes/triangle';
import captureMouse from '../utils/captureMouse';

const rotateToMouse = (canvas) => {
  const context = canvas.getContext('2d');
  const mouse = captureMouse(canvas);
  const arrow = new Arrow();
  const triangle = new Triangle();

  arrow.x = canvas.width / 2; 
  arrow.y = canvas.height / 2;

  triangle.x = canvas.width / 2; 
  triangle.y = canvas.height / 2;

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas); 
    context.clearRect(0, 0, canvas.width, canvas.height);
    var dx = mouse.x - arrow.x, dy = mouse.y - arrow.y;
    arrow.rotation = Math.atan2(dy, dx); //radians
    arrow.draw(context); 

    triangle.x1 = mouse.x;
    triangle.y1 = mouse.y;

    triangle.x2 = triangle.x1;
    triangle.y2 = triangle.y;

    triangle.draw(context);
  }());

  arrow.draw(context);
}

export default rotateToMouse;