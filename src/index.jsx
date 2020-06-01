import './styles/styles.scss';
import setCanvasSize from './utils/setCanvasSize';
import resizeHandler from './utils/resizeHandler';

import events from './pages/events';
import rotateToMouse from './pages/rotateToMouse';
import bobbing1 from './pages/bobbing1';

window.onload = function() {
  var canvas = document.getElementById('canvas');
  window.addEventListener('resize', () => resizeHandler(canvas));
  setCanvasSize(canvas);

  //events(canvas);
  //rotateToMouse(canvas);
  bobbing1(canvas);
};