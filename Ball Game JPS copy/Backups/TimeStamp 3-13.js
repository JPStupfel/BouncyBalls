
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var l = canvas.getContext('2d');
let defaultCoords = { };
const ballCount = 1000;
let color = 'white'

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
        defaultCoords[`Circle${i}`]["speedNorth"] = getRandomIntInclusive(0, 5);
        defaultCoords[`Circle${i}`]["speedEast"] = getRandomIntInclusive(0, 1);   
        defaultCoords[`Circle${i}`]["radius"] = getRandomIntInclusive(0, 4); 
       defaultCoords[`Circle${i}`]["color"] = 'white'; 
         }
  }
    
  function drawCircle(ballArray) {

for ( key in ballArray){
    // Creating a circle
    l.beginPath();
    l.strokeStyle = ballArray[key].color;
    l.arc(ballArray[key].northing, ballArray[key].easting, ballArray[key].radius, 0, Math.PI * 2, false);
    l.stroke();}
}

function advanceCircle(ballArray){

    for (key in ballArray){
        // advancing a circle
    ballArray[key].northing =  ballArray[key].northing + ballArray[key].speedNorth
    ballArray[key].easting =  ballArray[key].easting+ballArray[key].speedEast;
  
   
}}
    



//get distance between two points
function getDistance(x,y,x1,y1){
    deltaX = Math.abs(x-x1);
    deltaY = Math.abs(y-y1)
    
    return Math.sqrt( (deltaX**2) + (deltaY ** 2));

}
 



function checkBounce(ballArray)
{ //if x is within radius of edge reverse vx
for (key in ballArray){ 

    //if x is within radius of edge reverse vx
if (ballArray[key].radius + ballArray[key].easting > innerWidth || ballArray[key].easting - ballArray[key].radius < 0)
     { ballArray[key].speedEast = 0 - ballArray[key].speedEast;}

 //if x is within radius of edge reverse vx
if (ballArray[key].radius + ballArray[key].northing > innerHeight|| ballArray[key].northing - ballArray[key].radius < 0)
    { ballArray[key].speedNorth = 0 - ballArray[key].speedNorth;}


for (i in ballArray) {
    
        let x = getDistance(ballArray[key].easting,ballArray[key].northing,ballArray[i].easting,ballArray[i].northing) ;
        //console.log(x);
     
    
        if ( i>key && x < ballArray[key].radius + ballArray[i].radius) {
            
           
        
        ballArray[key].color = 'yellow'; ballArray[i].color = 'red';
        let swapSpeedEast = ballArray[key].speedEast; let swapSpeedNorth = ballArray[key].speedNorth;
        ballArray[key].speedEast = ballArray[i].speedEast; ballArray[key].speedNorth = ballArray[i].speedNorth;
        ballArray[i].speedEast = swapSpeedEast; ballArray[i].speedNorth = swapSpeedNorth;
    }

   // else { ballArray[key].speedEast = 1; ballArray[i].speedEast = -1}
       
       
}
     }

}





//ballArray[key].speedNorth=ballArray[i].speedNorth; ballArray[key].speedEast=ballArray[i].speedEast



makeCoords(ballCount);

setInterval('draw()',0.1);

function draw () {
 l.clearRect(0, 0, innerWidth, innerHeight);
  drawCircle(defaultCoords);
  advanceCircle(defaultCoords);
  checkBounce(defaultCoords);
}