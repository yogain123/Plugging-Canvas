let canvas = document.querySelector("canvas");

let c = canvas.getContext("2d");
console.log(c);
canvas.height = innerHeight;
canvas.width = innerWidth;

c.fillStyle = "steelblue";
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 200, 100, 100);
c.fillStyle = "red";
c.fillRect(300, 300, 100, 100);

//line
c.beginPath();
c.moveTo(500, 50);
c.lineTo(600, 600);
c.lineTo(300, 300);
c.strokeStyle = "green";
c.stroke();

//Arc and Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "black";
c.stroke();

let color = ["red", "yellow", "black", "pink", "blue", "green"];
for (let i = 0; i < 500; i++) {
  c.beginPath();
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = color[parseInt(Math.random() * 10)];
  c.stroke();
}

//===========

// let x = 200;
// let velocity = 10;
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, window.innerWidth, window.innerHeight);
//   c.beginPath();
//   c.arc(x, 200, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "blue";
//   c.stroke();
//   if (x >= innerWidth || x <= 0) {
//     velocity = -velocity;
//   }
//   x = x + velocity;
// }

// animate();
//=============

//Draw line with mouse drag

var ctx = canvas.getContext("2d");

var canvasx = $(canvas).offset().left;
var canvasy = $(canvas).offset().top;
var last_mousex = (last_mousey = 0);
var mousex = (mousey = 0);
var mousedown = false;

//Mousedown
$(canvas).on("mousedown", function(e) {
  last_mousex = parseInt(e.clientX - canvasx);
  last_mousey = parseInt(e.clientY - canvasy);
  mousedown = true;
});

//Mouseup
$(canvas).on("mouseup", function(e) {
  mousedown = false;
});

//Mousemove
$(canvas).on("mousemove", function(e) {
  mousex = parseInt(e.clientX - canvasx);
  mousey = parseInt(e.clientY - canvasy);
  if (mousedown) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    ctx.beginPath();
    ctx.moveTo(last_mousex, last_mousey);
    ctx.lineTo(mousex, mousey);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.lineJoin = ctx.lineCap = "round";
    ctx.stroke();
  }
  //Output
  $("#output").html(
    "current: " +
      mousex +
      ", " +
      mousey +
      "<br/>last: " +
      last_mousex +
      ", " +
      last_mousey +
      "<br/>mousedown: " +
      mousedown
  );
});
