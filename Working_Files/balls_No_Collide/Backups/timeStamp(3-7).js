var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var l = canvas.getContext('2d');

// x and y are the co-ordinates of the circle
// vx and vy are the respective speeds

const list = {}

var x = [100,500];
var y = [50,200];
var vx = [5,20];
var vy = [20,10];
var radius = 50;

setInterval('draw()',50);



//get distance between two points
function getDistance(x,y,x1,y1){
    deltaX = Math.abs(x-x1);
    deltaY = Math.abs(y-y1)
    
    return Math.sqrt( (deltaX**2) + (deltaY ** 2));

}


//creating an overall draw command so can set interval
function draw (){
//clear the canvas
l.clearRect(0, 0, innerWidth, innerHeight);
//draw circle for each x
for (i in x) {drawCircle();}}




// This function will do the animation
function drawCircle() {
    // Creating a circle
    l.beginPath();
    l.strokeStyle = "black";
    l.arc(x[i], y[i], radius, 0, Math.PI * 2, false);
    l.stroke();

 //if x is within radius of edge reverse vx
    if (radius + x[i] > innerWidth || x[i] - radius < 0)
       { vx[i] = 0 - vx[i];}
// if y is within radius of edge reverse vy
    if (y[i] + radius > innerHeight || y[i] - radius < 0)
        vy[i] = 0 - vy[i];
// if circles touch
    if (getDistance(x[0],y[0],x[1],y[1]) <= (2*radius) ) 
        {[vx[0],vx[1]] = [vx[1],vx[0]];
        [vy[0],vy[1]] = [vy[1],vy[0]];
    };

// advance the circle
    x[i] = x[i] + vx[i];
    y[i] = y[i] + vy[i];

}