var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//rect from top left x,y, width, height
/*
c.fillStyle = "blue";
c.fillRect(100,100,100,100);
c.fillStyle = "red";
c.fillRect(400,100,100,100);


//line

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = "red";
c.stroke();


//arc / circle x,y,radius, startangle, endangle

//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false)
//c.strokeStyle = "green";
//c.stroke();


for(let i =0; i < 10; i++){
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;


  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "green";
  c.stroke();
}

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;
*/


function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx =dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = "green";
    c.stroke();
  }
  this.update = function(){
    if (this.x  + this.radius > innerWidth || this.x - this.radius <0){
      this.dx= -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy
    }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
  }
var circleArray =[];

for(var i=0; i <100; i++){
  var circle = new Circle(200,200, 3, 3, 30);
}



function animate(){
  requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight);
circle.draw();
circle.update();
}

animate();
