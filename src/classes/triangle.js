function Triangle() {
  this.x = 0;
  this.y = 0;
  this.x1 = 0;
  this.y1 = 0;
  this.x2 = 0;
  this.y2 = 0;
  this.color = "#ffff00";
}

Triangle.prototype.draw = function (context) {
  context.save();

  context.lineWidth = 2;
  context.fillStyle = this.color;
  context.beginPath();
  context.moveTo(this.x, this.y);
  context.lineTo(this.x1, this.y1);
  context.lineTo(this.x2, this.y2);
  context.closePath();
  context.fill();
  context.stroke();
  
  context.restore();
};

export default Triangle;
