function Arrow () {
  this.x = 0;
  this.y = 0;
  this.color = "#ffff00";
  this.rotation = 0;
}

Arrow.prototype.draw = function (context) {

  console.log(this.rotation);
  console.log(this.rotation * 180 / Math.PI)
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  
  context.lineWidth = 2;
  context.fillStyle = this.color;
  context.beginPath();
  context.moveTo(-50, -25);
  context.lineTo(0, -25);
  context.lineTo(0, -50);
  context.lineTo(50, 0);
  context.lineTo(0, 50);
  context.lineTo(0, 25);
  context.lineTo(-50, 25);
  context.lineTo(-50, -25);
  context.closePath();
  context.fill();
  context.stroke();
  
  context.restore();
};

export default Arrow;
