var car1;
var wallTop;
var wallBottom;
var wallLeft;
var wallRight;
var startFinish;
var canvasWidth = 1000;
var canvasHeight = 600;
var walls = [];
function startGame() {
  racetrack.start();
  car1 = new component(20,20, "blue", 00, canvasHeight/2 - 100);
  wallTop = new component(canvasWidth, canvasWidth/6, "black", 0, 0)
  wallBottom = new component(canvasWidth, 500, "black", 0, canvasHeight/6 + 300)
  wallLeft = new component(50, canvasHeight, "black", 0, 0)
  wallRight = new component(50, canvasHeight, "black", canvasWidth-50, 0)
  wallMiddle = new component(canvasWidth/1.5, canvasHeight/2, "black", canvasWidth/6, canvasHeight/4)
  walls = [wallTop, wallBottom]
  finishLine = new component(50, canvasHeight, "red", canvasWidth-50, 50);

}

var racetrack = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
  }
}

function component(width, height, color, x, y){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function() {
    ctx = racetrack.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX
    this.y += this.speedY
  }
  this.crashWith = function(obj2) {
    var lrtb = [this.x, this.x + this.width, this.y, this.y + this.height]
    var lrtb2 = [obj2.x, obj2.x + obj2.width, obj2.y, obj2.y + obj2.height]
    var crash = true;
    if (lrtb[3] < lrtb2[2] || lrtb[2] > lrtb2[3] || lrtb[1] < lrtb2[0] || lrtb[0] > lrtb[1]){
      crash = false;
    }
    return crash;
  }

}

function updateGameArea() {
  racetrack.clear();
  finishLine.update();
  car1.newPos();
  car1.update();
  for (i=0; i < walls.length; i += 1){
    walls[i].update();
  }
}
