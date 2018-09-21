Array.prototype.bubbleSort = function() {
  let sorted = false; 
  const origArray = this; 
  const loop = function() {
    origArray.forEach( (e1, i1) => {
      origArray.forEach( (e2, i2) => {
        if ( i2 > i1 ) { 
          if ( e2 < e1 ) {
            [ origArray[i1], origArray[i2] ] = [ origArray[i2], origArray[i1] ]; 
            sorted = false; 
          }
        }
      }); 
    }); 
  }; 
  
  while ( !sorted ) {
    sorted = true; 
    loop(); 
  }
  return origArray;  
}; 

