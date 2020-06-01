import captureMouse from '../utils/captureMouse';
import Ball from '../classes/ball';

const bobbing1 = (canvas) => {
  const context = canvas.getContext('2d');
  //const mouse = captureMouse(canvas);
  const ball = new Ball();
  let angle = 0;

  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
    
  (function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
      
    ball.y = canvas.height / 2 + Math.sin(angle) * 50; 
    angle += 0.5;
    ball.draw(context);
  }());
}

export default bobbing1;