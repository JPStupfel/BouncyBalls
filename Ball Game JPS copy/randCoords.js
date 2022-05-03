
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  
  let defaultCoords = { };
  let ballCount = 3;
  
  makeCoords();

  //get distance between two points
function getDistance(x,y,x1,y1){
  deltaX = Math.abs(x-x1);
  deltaY = Math.abs(y-y1)
  
  return Math.sqrt( (deltaX**2) + (deltaY ** 2));

}


  function makeCoords() {
    for (i = 0; i < ballCount; i++){
  defaultCoords[`Circle${i}`] = {};
  defaultCoords[`Circle${i}`]["northing"] = getRandomIntInclusive(1, 10) ;
  defaultCoords[`Circle${i}`]["easting"] = getRandomIntInclusive(1, 10) ;
  defaultCoords[`Circle${i}`]["speedNorth"] = getRandomIntInclusive(1, 10) ;
  defaultCoords[`Circle${i}`]["speedEast"] = getRandomIntInclusive(1, 10) ;    
    }
  }
    

  function checkTouchBall(){

 for (key in defaultCoords) {
   
  for (i in defaultCoords) {
    
   let x = getDistance(defaultCoords[key].easting,defaultCoords[key].northing,defaultCoords[i].easting,defaultCoords[i].northing) ;
   //console.log(x);

   if (i>key && x>0) {console.log(`Circle${key} to Circle${i} is ${x}`);}
  
  
  }

}
 
 //getDistance(defaultCoords[key].easting,defaultCoords[key].northing,defaultCoords[i].easting,defaultCoords[i].northing)) } 
   
  

};
 //console.log(defaultCoords)
checkTouchBall();