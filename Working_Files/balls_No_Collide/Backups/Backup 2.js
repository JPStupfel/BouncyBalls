
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var l = canvas.getContext('2d');
let defaultCoords = { };
const ballCount = 1000;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
function makeCoords(x) {
    for (let i = 0; i < x; i++){
        defaultCoords[`Circle${i}`] = {};
        defaultCoords[`Circle${i}`]["northing"] = getRandomIntInclusive(4, 500) ;
        defaultCoords[`Circle${i}`]["easting"] = getRandomIntInclusive(4, 500) ;
        defaultCoords[`Circle${i}`]["speedNorth"] = getRandomIntInclusive(1, 10) ;
        defaultCoords[`Circle${i}`]["speedEast"] = getRandomIntInclusive(1, 10) ;   
        defaultCoords[`Circle${i}`]["radius"] = getRandomIntInclusive(1, 10) ; 
         }
  }
    
  function drawCircle(ballArray) {

for ( key in ballArray){
    // Creating a circle
    l.beginPath();
    l.strokeStyle = "black";
    l.arc(ballArray[key].northing, ballArray[key].easting, ballArray[key].radius, 0, Math.PI * 2, false);
    l.stroke();}
}

function advanceCircle(ballArray){

    for (key in ballArray){
        // advancing a circle
    ballArray[key].northing =  ballArray[key].northing + ballArray[key].speedNorth
    ballArray[key].easting =  ballArray[key].easting+ballArray[key].speedEast;
  
   
}}
    







function checkBounce(ballArray)
{ //if x is within radius of edge reverse vx
for (key in ballArray){ 

    //if x is within radius of edge reverse vx
if (ballArray[key].radius + ballArray[key].easting > innerWidth || ballArray[key].easting - ballArray[key].radius < 0)
     { ballArray[key].speedEast = 0 - ballArray[key].speedEast;}

 //if x is within radius of edge reverse vx
if (ballArray[key].radius + ballArray[key].northing > innerHeight|| ballArray[key].northing - ballArray[key].radius < 0)
    { ballArray[key].speedNorth = 0 - ballArray[key].speedNorth;}

    
}
}






makeCoords(ballCount);

setInterval('draw()',50);

function draw () {
 l.clearRect(0, 0, innerWidth, innerHeight);
  drawCircle(defaultCoords);
  advanceCircle(defaultCoords);
  checkBounce(defaultCoords);
}