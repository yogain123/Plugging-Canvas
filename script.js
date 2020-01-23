let canvas = document.querySelector("canvas");

let c = canvas.getContext("2d");
console.log(c);
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

c.fillRect(100, 100, 100, 100);

c.fillRect(200, 200, 100, 100);

c.fillRect(300, 300, 100, 100);
