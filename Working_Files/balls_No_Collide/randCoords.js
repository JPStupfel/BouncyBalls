
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  
  let defaultCoords = { };
  let ballCount = 5;
  
  makeCoords();

  function makeCoords() {
    for (i = 0; i < ballCount; i++){
  defaultCoords[`Circle${i}`] = {};
  defaultCoords[`Circle${i}`]["northing"] = getRandomIntInclusive(1, 10) ;
  defaultCoords[`Circle${i}`]["easting"] = getRandomIntInclusive(1, 10) ;
  defaultCoords[`Circle${i}`]["speedNorth"] = getRandomIntInclusive(1, 10) ;
  defaultCoords[`Circle${i}`]["speedEast"] = getRandomIntInclusive(1, 10) ;    
    }
  }
    



  console.log(defaultCoords)